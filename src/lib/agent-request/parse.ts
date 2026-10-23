// Parser for agent authorization requests on /authorize (see ./constants.ts for the contract).
//
// All-or-nothing: any problem blocks the request with a visible list of problems. Nothing is
// ever dropped, defaulted or widened, and the parsed request is only a proposal for review.
import { getAddress, type Address, type Hex } from 'viem';
import { PERMISSIONS, type PermissionKey } from '@/constants/permissions';
import {
  LIMITS,
  REQUEST_PARAMS,
  REQUEST_ONLY_PARAMS,
  REQUEST_NETWORKS,
  STANDARD_PERMISSIONS,
  ELEVATED_PERMISSIONS,
  REFUSED_PERMISSIONS,
  CALL_TYPE,
  type RequestNetwork,
} from './constants';
import { decodeAllowedCallsStrict, decodeAllowedDataKeysStrict, protectedNamespace, type DecodedAllowedCall } from './compactBytes';

export type { DecodedAllowedCall } from './compactBytes';

export type AuthorizeLinkMode = 'agent' | 'legacy' | 'manual';

/** Which /authorize flow a link belongs to. Controller-only links keep the manual page (unchanged). */
export function authorizeLinkMode(params: URLSearchParams): AuthorizeLinkMode {
  if (REQUEST_ONLY_PARAMS.some((p) => params.has(p))) return 'agent';
  if (params.has('profile') || params.has('data') || params.has('cs')) return 'legacy';
  return 'manual';
}

export interface AgentRequest {
  /** The agent's controller address (checksummed). */
  controller: Address;
  network: RequestNetwork;
  chainId: number;
  /** Profile the request is meant for; when absent, the connected profile is used. */
  profile?: Address;
  /** Display name given by the link (untrusted, unverified). */
  name?: string;
  /** What the agent says it needs the access for (untrusted, unverified). */
  purpose?: string;
  /** Requested permissions in LSP6 bit order. */
  permissions: PermissionKey[];
  permissionValue: bigint;
  /** Requested permissions that start ticked. */
  standard: PermissionKey[];
  /** Requested permissions that start unticked (the owner must tick them deliberately). */
  elevated: PermissionKey[];
  allowedCalls: DecodedAllowedCall[];
  /** Lowercase CompactBytesArray as it would be stored, or null when the link has none. */
  allowedCallsHex: Hex | null;
  allowedDataKeys: Hex[];
  allowedDataKeysHex: Hex | null;
  /** Plain-words notes about parts of the request that would have no effect as written. */
  notes: string[];
}

export type ProblemCode =
  | 'too-long'
  | 'fragment-not-allowed'
  | 'unknown-param'
  | 'duplicate-param'
  | 'empty-param'
  | 'mixed-formats'
  | 'secret-detected'
  | 'missing-controller'
  | 'invalid-address'
  | 'bad-checksum'
  | 'zero-address'
  | 'wildcard-address'
  | 'controller-is-profile'
  | 'missing-network'
  | 'unsupported-network'
  | 'invalid-network'
  | 'missing-permissions'
  | 'invalid-permissions'
  | 'unknown-permission'
  | 'refused-permission'
  | 'duplicate-permission'
  | 'invalid-allowed-calls'
  | 'invalid-allowed-data-keys'
  | 'protected-data-key'
  | 'invalid-text'
  | 'text-too-long';

export interface AgentRequestProblem {
  code: ProblemCode;
  /** Plain-words explanation; never repeats a secret-looking value. */
  message: string;
  param?: string;
}

export type ParseResult =
  | { ok: true; request: AgentRequest }
  | { ok: false; problems: AgentRequestProblem[]; secretDetected: boolean };

const SECRET_RUN = /[0-9a-fA-F]{64}/;
const SECRET_PARAM = /private|privkey|secret|mnemonic|seed|passw|passphrase|token|api[_-]?key|^(pk|sk|wif|key)$/i;
const FORBIDDEN_TEXT =
  /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u180e\u200b-\u200f\u2028-\u202e\u2060-\u2064\u2066-\u206f\ufeff\ufff9-\ufffb]|[\u{e0000}-\u{e007f}]/u;
const LINK_TEXT = /[a-z][a-z0-9+.-]*:\/\/|\bwww\./i;
const ADDRESS = /^0x[0-9a-fA-F]{40}$/;
const PLAIN_NAME = /^[A-Za-z_][A-Za-z0-9_]{0,39}$/;

const PERMISSION_ORDER = Object.keys(PERMISSIONS) as PermissionKey[];
const isPermissionKey = (name: string): name is PermissionKey => Object.prototype.hasOwnProperty.call(PERMISSIONS, name);

/** A parameter name that is safe to show back in an error message. */
function shown(name: string): string {
  return PLAIN_NAME.test(name) ? `"${name}"` : 'a parameter with an unreadable name';
}

export function parseAgentRequest(input: { search: string; hash?: string }): ParseResult {
  const problems: AgentRequestProblem[] = [];
  let secretDetected = false;
  const problem = (code: ProblemCode, message: string, param?: string) => problems.push({ code, message, ...(param ? { param } : {}) });
  const flagSecret = () => {
    if (!secretDetected) {
      secretDetected = true;
      problem(
        'secret-detected',
        'This link contains something that looks like a private key, password or other secret. An authorization link never needs one. Do not use this link, and treat that secret as exposed.',
      );
    }
  };

  const hash = input.hash ?? '';
  if (hash && hash !== '#') {
    if (SECRET_RUN.test(hash) || SECRET_PARAM.test(hash)) flagSecret();
    problem('fragment-not-allowed', 'The link has an extra "#…" part, which an authorization link never has.');
  }

  if (input.search.length > LIMITS.maxSearchLength) {
    if (SECRET_RUN.test(input.search)) flagSecret();
    problem('too-long', `The link is longer than ${LIMITS.maxSearchLength} characters.`);
    return { ok: false, problems, secretDetected };
  }

  const params = new URLSearchParams(input.search.startsWith('?') ? input.search.slice(1) : input.search);
  const values = new Map<string, string>();
  const counts = new Map<string, number>();
  for (const [key, value] of params) {
    counts.set(key, (counts.get(key) ?? 0) + 1);
    if (!values.has(key)) values.set(key, value);
  }

  // every value except the two byte lists (whose 32-byte entries are expected) is scanned for key-like hex
  for (const [key, value] of params) {
    if (key !== 'allowedCalls' && key !== 'allowedDataKeys' && SECRET_RUN.test(value)) flagSecret();
  }

  for (const [key, count] of counts) {
    const known = (REQUEST_PARAMS as readonly string[]).includes(key);
    if (!known) {
      if (key === 'data' || key === 'cs') problem('mixed-formats', 'The link mixes an agent request with the older encoded link format.', key);
      else if (SECRET_PARAM.test(key)) flagSecret();
      else problem('unknown-param', `The link contains the unknown parameter ${shown(key)}.`, key);
      continue;
    }
    if (count > 1) problem('duplicate-param', `The parameter "${key}" appears ${count} times.`, key);
    const value = values.get(key) ?? '';
    if (value.trim() === '') problem('empty-param', `The parameter "${key}" is empty.`, key);
  }

  const get = (key: string): string | undefined => {
    const v = values.get(key);
    return v === undefined || v.trim() === '' || (counts.get(key) ?? 0) > 1 ? undefined : v;
  };

  // addresses
  const controller = values.has('controller') ? parseAddress(get('controller'), 'controller', 'The agent address', problem) : undefined;
  if (!values.has('controller')) problem('missing-controller', 'The link does not say which agent address to authorize.', 'controller');
  const profile = values.has('forProfile') ? parseAddress(get('forProfile'), 'forProfile', 'The profile address', problem) : undefined;
  if (controller && profile && controller === profile) {
    problem('controller-is-profile', 'The agent address is the profile itself; a profile cannot be its own controller.', 'controller');
  }

  // network
  let network: RequestNetwork | undefined;
  const rawNetwork = get('network');
  if (!values.has('network')) problem('missing-network', 'The link does not say on which network to authorize.', 'network');
  else if (rawNetwork !== undefined) {
    if (Object.prototype.hasOwnProperty.call(REQUEST_NETWORKS, rawNetwork)) network = rawNetwork as RequestNetwork;
    else if (rawNetwork === 'testnet') {
      problem(
        'unsupported-network',
        'This request is for LUKSO Testnet. This site connects wallets on LUKSO mainnet only, so it cannot authorize an agent on LUKSO Testnet. Nothing was switched.',
        'network',
      );
    } else problem('invalid-network', 'The network in the link is not one this site knows ("mainnet" is expected).', 'network');
  }

  // permissions
  const permissions: PermissionKey[] = [];
  if (!values.has('permissions')) problem('missing-permissions', 'The link does not list the permissions the agent asks for.', 'permissions');
  const rawPermissions = get('permissions');
  if (rawPermissions !== undefined) {
    const parts = rawPermissions.split(',');
    const unknown: string[] = [];
    const refused: PermissionKey[] = [];
    const duplicate: PermissionKey[] = [];
    if (parts.some((p) => p === '')) problem('invalid-permissions', 'The permission list has an empty entry.', 'permissions');
    for (const part of parts) {
      if (part === '') continue;
      if (!isPermissionKey(part)) unknown.push(part);
      else if (REFUSED_PERMISSIONS.includes(part)) refused.push(part);
      else if (permissions.includes(part)) duplicate.push(part);
      else permissions.push(part);
    }
    if (unknown.length) {
      const names = unknown.filter((u) => PLAIN_NAME.test(u));
      const rest = unknown.length - names.length;
      problem(
        'unknown-permission',
        `The link asks for permissions that do not exist: ${[...names, ...(rest ? [`${rest} unreadable value${rest === 1 ? '' : 's'}`] : [])].join(', ')}.`,
        'permissions',
      );
    }
    if (refused.length) {
      problem(
        'refused-permission',
        `The link asks for ${refused.join(', ')}. That would give the agent control over your profile's owners, controllers, permissions or code, and this site never grants it through an agent link.`,
        'permissions',
      );
    }
    if (duplicate.length) problem('duplicate-permission', `The permission list repeats ${duplicate.join(', ')}.`, 'permissions');
  }

  // restriction lists
  let allowedCalls: DecodedAllowedCall[] = [];
  let allowedCallsHex: Hex | null = null;
  const rawCalls = get('allowedCalls');
  if (rawCalls !== undefined) {
    const r = decodeAllowedCallsStrict(rawCalls);
    if (r.ok) {
      allowedCalls = r.value;
      allowedCallsHex = rawCalls.toLowerCase() as Hex;
    } else problem('invalid-allowed-calls', `The allowed calls list ${r.error}.`, 'allowedCalls');
  }
  let allowedDataKeys: Hex[] = [];
  let allowedDataKeysHex: Hex | null = null;
  const rawKeys = get('allowedDataKeys');
  if (rawKeys !== undefined) {
    const r = decodeAllowedDataKeysStrict(rawKeys);
    if (r.ok) {
      const protectedHits = r.value.map((k) => protectedNamespace(k)).filter((n): n is string => !!n);
      if (protectedHits.length) {
        problem(
          'protected-data-key',
          `The allowed data keys include ${[...new Set(protectedHits)].join(', ')}. An agent link may never ask to write those.`,
          'allowedDataKeys',
        );
      } else {
        allowedDataKeys = r.value;
        allowedDataKeysHex = rawKeys.toLowerCase() as Hex;
      }
    } else problem('invalid-allowed-data-keys', `The allowed data keys list ${r.error}.`, 'allowedDataKeys');
  }

  // labels
  const name = values.has('name') ? parseText(get('name'), 'name', 'The agent name', LIMITS.maxNameLength, problem) : undefined;
  const purpose = values.has('purpose') ? parseText(get('purpose'), 'purpose', 'The purpose text', LIMITS.maxPurposeLength, problem) : undefined;

  if (problems.length || !controller || !network || permissions.length === 0) {
    if (!problems.length) problem('missing-permissions', 'The link does not list any permission.', 'permissions');
    return { ok: false, problems, secretDetected };
  }

  const ordered = PERMISSION_ORDER.filter((p) => permissions.includes(p));
  const permissionValue = ordered.reduce((v, p) => v | PERMISSIONS[p], 0n);
  return {
    ok: true,
    request: {
      controller,
      network,
      chainId: REQUEST_NETWORKS[network].chainId,
      ...(profile ? { profile } : {}),
      ...(name !== undefined ? { name } : {}),
      ...(purpose !== undefined ? { purpose } : {}),
      permissions: ordered,
      permissionValue,
      standard: ordered.filter((p) => STANDARD_PERMISSIONS.includes(p)),
      elevated: ordered.filter((p) => ELEVATED_PERMISSIONS.includes(p)),
      allowedCalls,
      allowedCallsHex,
      allowedDataKeys,
      allowedDataKeysHex,
      notes: requestNotes(permissionValue, allowedCalls, allowedDataKeys),
    },
  };
}

function parseAddress(
  value: string | undefined,
  param: string,
  label: string,
  problem: (code: ProblemCode, message: string, param?: string) => void,
): Address | undefined {
  if (value === undefined) return undefined; // empty or duplicate: already reported
  if (!ADDRESS.test(value)) {
    problem('invalid-address', `${label} is not a valid address (0x followed by 40 hex characters).`, param);
    return undefined;
  }
  const body = value.slice(2);
  const checksummed = getAddress(`0x${body.toLowerCase()}`);
  if (/[a-f]/.test(body) && /[A-F]/.test(body) && value !== checksummed) {
    problem('bad-checksum', `${label} has mixed upper and lower case that does not match its checksum: it may have been mistyped or altered.`, param);
    return undefined;
  }
  if (/^0{40}$/.test(body)) {
    problem('zero-address', `${label} is the zero address.`, param);
    return undefined;
  }
  if (/^f{40}$/i.test(body)) {
    problem('wildcard-address', `${label} is the "any address" placeholder, not a real address.`, param);
    return undefined;
  }
  return checksummed;
}

function parseText(
  value: string | undefined,
  param: string,
  label: string,
  max: number,
  problem: (code: ProblemCode, message: string, param?: string) => void,
): string | undefined {
  if (value === undefined) return undefined;
  const text = value.trim();
  if (FORBIDDEN_TEXT.test(text)) {
    problem('invalid-text', `${label} contains invisible, control or direction-changing characters.`, param);
    return undefined;
  }
  if (LINK_TEXT.test(text)) {
    problem('invalid-text', `${label} contains a web link, which is not allowed here.`, param);
    return undefined;
  }
  if ([...text].length > max) {
    problem('text-too-long', `${label} is longer than ${max} characters.`, param);
    return undefined;
  }
  return text;
}

function requestNotes(value: bigint, calls: DecodedAllowedCall[], keys: Hex[]): string[] {
  const has = (p: PermissionKey) => (value & PERMISSIONS[p]) !== 0n;
  const anyType = (bit: number) => calls.some((c) => (c.callTypes & bit) !== 0);
  const notes: string[] = [];
  if (has('CALL') && !has('SUPER_CALL') && !anyType(CALL_TYPE.CALL)) {
    notes.push('CALL has no effect here: no allowed call permits contract calls, so every call would be rejected.');
  }
  if (has('STATICCALL') && !has('SUPER_STATICCALL') && !anyType(CALL_TYPE.STATICCALL)) {
    notes.push('STATICCALL has no effect here: no allowed call permits read-only calls.');
  }
  if (has('TRANSFERVALUE') && !has('SUPER_TRANSFERVALUE') && !anyType(CALL_TYPE.VALUE)) {
    notes.push('TRANSFERVALUE has no effect here: no allowed call lists a recipient for LYX.');
  }
  if (has('SETDATA') && !has('SUPER_SETDATA') && keys.length === 0) {
    notes.push('SETDATA has no effect here: no allowed data key is listed.');
  }
  if (anyType(CALL_TYPE.VALUE) && !has('TRANSFERVALUE') && !has('SUPER_TRANSFERVALUE')) {
    notes.push('Some allowed calls may send LYX, but TRANSFERVALUE is not requested, so no LYX can be sent.');
  }
  if (anyType(CALL_TYPE.CALL) && !has('CALL') && !has('SUPER_CALL')) {
    notes.push('Some allowed calls are contract calls, but CALL is not requested, so they cannot be used.');
  }
  if (anyType(CALL_TYPE.STATICCALL) && !has('STATICCALL') && !has('SUPER_STATICCALL')) {
    notes.push('Some allowed calls are read-only calls, but STATICCALL is not requested, so they cannot be used.');
  }
  if (keys.length && !has('SETDATA') && !has('SUPER_SETDATA')) {
    notes.push('Data keys are listed, but SETDATA is not requested, so they cannot be written.');
  }
  return notes;
}
