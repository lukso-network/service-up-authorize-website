// The owner's editable selection for an agent request.
//
// The link only prefills the site's permissions editor (draftFromRequest). From then on the editor state is the
// owner's selection, and checkDraft turns exactly that state into what the transaction writes. Nothing is
// defaulted, dropped or widened: an entry that is not complete and valid blocks authorizing instead of becoming
// "any", and whatever an agent link could never ask for cannot be written through this flow either.
import { getAddress, type Hex } from 'viem';
import { PERMISSIONS, type PermissionKey } from '@/constants/permissions';
import { DATA_KEY_PRESETS } from '@/constants/allowedCalls';
import { computeSelector, convertEntriesToAllowedCalls, encodeAllowedCalls, encodeAllowedDataKeys, type AllowedCallEntry, type DataKeyEntry } from '@/lib/lsp6/allowedCalls';
import type { GrantTarget } from '@/lib/lsp6/grant';
import { CALL_TYPE, REFUSED_PERMISSIONS } from './constants';
import { decodeAllowedCallsStrict, protectedNamespace, type DecodedAllowedCall } from './compactBytes';
import { describeDataKey, knownFunctionSignature } from './describe';
import { requestNotes, type AgentRequest } from './parse';

export interface AgentDraft {
  permissions: bigint;
  allowedCalls: AllowedCallEntry[];
  allowedDataKeys: DataKeyEntry[];
}

export interface DraftCheck {
  /** Selected permissions in LSP6 bit order. */
  permissions: PermissionKey[];
  /** The valid allowed calls, as they would be stored. */
  allowedCalls: DecodedAllowedCall[];
  /** The valid data keys, lowercase. */
  allowedDataKeys: Hex[];
  /** Anything that blocks authorizing. */
  problems: string[];
  /** Parts that would have no effect, or are broad (they do not block). */
  notes: string[];
  /** What the transaction writes; null while there are problems or no permission is selected. */
  target: GrantTarget | null;
}

export interface RequestDifference {
  same: boolean;
  /** Requested permissions that are not selected (the high-risk ones start this way). */
  notSelected: PermissionKey[];
  /** Selected permissions the agent did not ask for. */
  added: PermissionKey[];
  callsRemoved: DecodedAllowedCall[];
  callsAdded: DecodedAllowedCall[];
  keysRemoved: Hex[];
  keysAdded: Hex[];
}

const PERMISSION_ORDER = Object.keys(PERMISSIONS) as PermissionKey[];
const ALL_PERMISSIONS = PERMISSION_ORDER.reduce((v, p) => v | PERMISSIONS[p], 0n);
const ANY_BYTES4 = '0xffffffff';
const DATA_KEY = /^0x(?:[0-9a-fA-F]{2}){1,32}$/;

/** The editor's starting state: the standard permissions ticked, the high-risk ones not, the link's restrictions. */
export function draftFromRequest(request: AgentRequest): AgentDraft {
  return {
    permissions: request.standard.reduce((v, p) => v | PERMISSIONS[p], 0n),
    allowedCalls: request.allowedCalls.map(entryFromCall),
    allowedDataKeys: request.allowedDataKeys.map(entryFromKey),
  };
}

function entryFromCall(c: DecodedAllowedCall): AllowedCallEntry {
  const standard = c.standard.toLowerCase();
  const selector = c.selector.toLowerCase() as Hex;
  const signature = knownFunctionSignature(selector);
  return {
    id: crypto.randomUUID(),
    callTypes: {
      transferValue: (c.callTypes & CALL_TYPE.VALUE) !== 0,
      call: (c.callTypes & CALL_TYPE.CALL) !== 0,
      staticCall: (c.callTypes & CALL_TYPE.STATICCALL) !== 0,
      delegateCall: false,
    },
    address: c.address === 'any' ? '' : c.address,
    useAnyAddress: c.address === 'any',
    interfaceId: standard === ANY_BYTES4 ? '' : standard,
    useAnyInterface: standard === ANY_BYTES4,
    // a known function is easier to check by name; it is used only if it gives back the exact selector
    functionInput: selector === ANY_BYTES4 ? '' : signature && computeSelector(signature) === selector ? signature : selector,
    useAnyFunction: selector === ANY_BYTES4,
  };
}

function entryFromKey(key: Hex): DataKeyEntry {
  const k = key.toLowerCase();
  return { id: crypto.randomUUID(), name: describeDataKey(key).name, key: k, isPreset: Object.values(DATA_KEY_PRESETS).some((p) => p.key.toLowerCase() === k) };
}

/** One editor entry as the 32 bytes LSP6 stores, or why it cannot be written as it is. */
function callFromEntry(e: AllowedCallEntry): { ok: true; call: DecodedAllowedCall } | { ok: false; error: string } {
  if (!e.useAnyAddress) {
    if (!/^0x[0-9a-fA-F]{40}$/.test(e.address)) return { ok: false, error: 'the target address is not a valid address (0x followed by 40 hex characters).' };
    const body = e.address.slice(2);
    if (/[a-f]/.test(body) && /[A-F]/.test(body) && getAddress(`0x${body.toLowerCase()}`) !== e.address) {
      return { ok: false, error: 'the target address has mixed upper and lower case that does not match its checksum: it may have been mistyped.' };
    }
  }
  if (!e.useAnyInterface && !/^0x[0-9a-fA-F]{8}$/.test(e.interfaceId)) {
    return { ok: false, error: 'the interface ID is not 4 bytes (0x followed by 8 hex characters).' };
  }
  if (!e.useAnyFunction && !computeSelector(e.functionInput)) {
    return { ok: false, error: 'the function is not a 4-byte selector or a signature such as transfer(address,uint256).' };
  }
  // the same strict decoder as for links: no call type, DELEGATECALL, the zero address or an all-"any" entry are refused
  const decoded = decodeAllowedCallsStrict(encodeAllowedCalls(convertEntriesToAllowedCalls([e])).toLowerCase());
  return decoded.ok ? { ok: true, call: decoded.value[0] } : { ok: false, error: `${decoded.error.replace(/^entry 1 /, '')}.` };
}

/** One editor entry as LSP6 stores it, or null while it is not complete and valid. */
export function allowedCallFromEntry(entry: AllowedCallEntry): DecodedAllowedCall | null {
  const r = callFromEntry(entry);
  return r.ok ? r.call : null;
}

const callShape = (e: AllowedCallEntry) => [
  !!e.callTypes.transferValue, e.callTypes.call, e.callTypes.staticCall, e.callTypes.delegateCall,
  e.useAnyAddress, e.address, e.useAnyInterface, e.interfaceId, e.useAnyFunction, e.functionInput,
];
const keyShape = (e: DataKeyEntry) => [e.key, e.name, e.isPreset];

/** Whether two selections are the same, ignoring entry ids. */
export function sameDraft(a: AgentDraft, b: AgentDraft): boolean {
  return (
    a.permissions === b.permissions &&
    JSON.stringify(a.allowedCalls.map(callShape)) === JSON.stringify(b.allowedCalls.map(callShape)) &&
    JSON.stringify(a.allowedDataKeys.map(keyShape)) === JSON.stringify(b.allowedDataKeys.map(keyShape))
  );
}

/** Checks the owner's selection and turns it into exactly what the transaction writes. */
export function checkDraft(draft: AgentDraft): DraftCheck {
  const problems: string[] = [];
  const value = draft.permissions;
  if ((value & ~ALL_PERMISSIONS) !== 0n) problems.push('The selected permission value contains bits that are not an LSP6 permission.');
  const permissions = PERMISSION_ORDER.filter((p) => (value & PERMISSIONS[p]) !== 0n);
  const refused = permissions.filter((p) => REFUSED_PERMISSIONS.includes(p));
  if (refused.length) problems.push(`${refused.join(', ')} can never be given to an agent on this page.`);

  const calls: DecodedAllowedCall[] = [];
  const firstIndex = new Map<string, number>();
  draft.allowedCalls.forEach((entry, i) => {
    const r = callFromEntry(entry);
    if (!r.ok) return problems.push(`Allowed call #${i + 1}: ${r.error}`);
    const first = firstIndex.get(r.call.raw);
    if (first !== undefined) return problems.push(`Allowed calls #${first} and #${i + 1} are the same.`);
    firstIndex.set(r.call.raw, i + 1);
    calls.push(r.call);
  });

  const keys: Hex[] = [];
  for (const entry of draft.allowedDataKeys) {
    const label = `The data key ${entry.name} (${entry.key || 'empty'})`;
    if (!DATA_KEY.test(entry.key)) {
      problems.push(`${label} is not a data key or prefix of 1 to 32 bytes (0x followed by 2 to 64 hex characters).`);
      continue;
    }
    const key = entry.key.toLowerCase() as Hex;
    const namespace = protectedNamespace(key);
    if (namespace) problems.push(`${label} covers ${namespace}, which an agent may never write.`);
    else if (keys.includes(key)) problems.push(`${label} is listed twice.`);
    else keys.push(key);
  }

  const notes = [
    ...requestNotes(value, calls, keys),
    ...keys.filter((k) => describeDataKey(k).broad).map((k) => `The data key prefix ${k} is short: it matches many data keys of your profile.`),
  ];
  const target =
    problems.length === 0 && value !== 0n
      ? {
          permissions: value,
          allowedCalls: calls.length ? (`0x${calls.map((c) => `0020${c.raw.slice(2)}`).join('')}` as Hex) : null,
          allowedDataKeys: keys.length ? (encodeAllowedDataKeys(keys).toLowerCase() as Hex) : null,
        }
      : null;
  return { permissions, allowedCalls: calls, allowedDataKeys: keys, problems, notes, target };
}

/**
 * What the owner's selection changes compared with the agent's request. Restrictions are compared entry by entry,
 * like the agent's own check: an edited entry counts as one removed and one added entry.
 */
export function compareWithRequest(request: AgentRequest, check: DraftCheck): RequestDifference {
  const requestedCalls = request.allowedCalls.map((c) => c.raw.toLowerCase());
  const currentCalls = check.allowedCalls.map((c) => c.raw.toLowerCase());
  const requestedKeys = request.allowedDataKeys.map((k) => k.toLowerCase());
  const diff = {
    notSelected: request.permissions.filter((p) => !check.permissions.includes(p)),
    added: check.permissions.filter((p) => !request.permissions.includes(p)),
    callsRemoved: request.allowedCalls.filter((c) => !currentCalls.includes(c.raw.toLowerCase())),
    callsAdded: check.allowedCalls.filter((c) => !requestedCalls.includes(c.raw.toLowerCase())),
    keysRemoved: request.allowedDataKeys.filter((k) => !check.allowedDataKeys.includes(k.toLowerCase() as Hex)),
    keysAdded: check.allowedDataKeys.filter((k) => !requestedKeys.includes(k)),
  };
  return { same: Object.values(diff).every((list) => list.length === 0), ...diff };
}
