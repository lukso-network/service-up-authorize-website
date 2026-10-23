// Plain-words descriptions of an agent request for the review screen. Names are shown only
// for well-known values; everything else is shown as the exact hex, never guessed.
import type { Address, Hex } from 'viem';
import type { PermissionKey } from '@/constants/permissions';
import { ELEVATED_PERMISSIONS, CALL_TYPE } from './constants';
import type { DecodedAllowedCall } from './compactBytes';

export type Risk = 'low' | 'medium' | 'high';

export interface PermissionDescription {
  key: PermissionKey;
  title: string;
  detail: string;
  risk: Risk;
  tier: 'standard' | 'elevated';
}

const PERMISSION_TEXT: Partial<Record<PermissionKey, { title: string; detail: string; risk: Risk }>> = {
  CALL: {
    title: 'Use the contracts listed below',
    detail: 'Your profile can call only the contracts and functions in the allowed calls list below, nothing else.',
    risk: 'medium',
  },
  STATICCALL: {
    title: 'Read from the contracts listed below',
    detail: 'Read-only calls through your profile, limited to the allowed calls list below. Nothing can be changed with it.',
    risk: 'low',
  },
  TRANSFERVALUE: {
    title: 'Send LYX, only to the recipients listed below',
    detail: 'LYX can only go to the addresses in the allowed calls list. There is no amount limit: the whole LYX balance of your profile could be sent to them.',
    risk: 'medium',
  },
  SETDATA: {
    title: 'Change the profile data listed below',
    detail: 'Only the data keys in the allowed data keys list below can be changed (for example your profile name and pictures).',
    risk: 'medium',
  },
  SIGN: {
    title: 'Sign messages as your profile',
    detail: 'Apps that accept your profile\'s signature (logins, some off-chain orders and payment approvals) will accept the agent\'s signature as yours.',
    risk: 'high',
  },
  EXECUTE_RELAY_CALL: {
    title: 'Act without its own gas (relayer)',
    detail: 'The agent can send its allowed actions through a relayer, which uses your profile\'s transaction allowance. It adds no other power.',
    risk: 'low',
  },
  ENCRYPT: {
    title: 'Encrypt for your profile (app signal)',
    detail: 'A signal for apps that the agent may encrypt data for your profile. It is not enforced on-chain.',
    risk: 'low',
  },
  DECRYPT: {
    title: 'Decrypt for your profile (app signal)',
    detail: 'A signal for apps that the agent may decrypt data for your profile. It is not enforced on-chain.',
    risk: 'low',
  },
  SUPER_CALL: {
    title: 'Call ANY contract as your profile',
    detail: 'No list limits it: the agent could move every token and NFT your profile holds, approve spending and use any app as you.',
    risk: 'high',
  },
  SUPER_TRANSFERVALUE: {
    title: 'Send ANY amount of LYX to ANYONE',
    detail: 'No list limits it: the agent could send any amount of LYX from your profile to any address, up to the whole balance.',
    risk: 'high',
  },
  SUPER_STATICCALL: {
    title: 'Read from ANY contract through your profile',
    detail: 'Read-only calls to any contract. Nothing can be changed with it.',
    risk: 'low',
  },
  SUPER_SETDATA: {
    title: 'Change ANY of your profile\'s data',
    detail: 'No list limits it: your name, pictures, asset lists and other data (but not permissions, delegates or extensions).',
    risk: 'high',
  },
  DEPLOY: {
    title: 'Create new contracts from your profile',
    detail: 'The agent can deploy new smart contracts owned by your profile\'s address.',
    risk: 'medium',
  },
};

export function describePermission(key: PermissionKey): PermissionDescription {
  const text = PERMISSION_TEXT[key] ?? { title: key, detail: 'This permission cannot be requested through an agent link.', risk: 'high' as Risk };
  return { key, ...text, tier: ELEVATED_PERMISSIONS.includes(key) ? 'elevated' : 'standard' };
}

/** What an agent link can never grant, whatever it asks for. */
export const NOT_GRANTABLE_SUMMARY: readonly string[] = [
  'change the owner of your profile',
  'add or remove controllers, or change anyone\'s permissions (including its own)',
  'add or change extensions or Universal Receiver Delegates',
  'run code inside your profile (delegate calls)',
];

const KNOWN_TARGETS: Record<string, string> = {
  '0xf01103e5a9909fc0dbe8166da7085e0285daddca': 'the LSP26 follower registry',
};

const KNOWN_STANDARDS: Record<string, string> = {
  '0xc52d6008': 'LSP7 token',
  '0xb3c4928f': 'LSP7 token (v0.14)',
  '0xdaa746b7': 'LSP7 token (v0.12)',
  '0x3a271706': 'LSP8 NFT collection',
  '0xecad9f75': 'LSP8 NFT collection (v0.14 id)',
  '0x30dc5278': 'LSP8 NFT collection (v0.12)',
  '0x24871b3d': 'Universal Profile',
  '0x28af17e6': 'LSP9 vault',
  '0x80ac58cd': 'ERC-721 NFT collection',
  '0xd9b67a26': 'ERC-1155 collection',
};

const KNOWN_FUNCTIONS: Record<string, { signature: string; words: string }> = {
  '0x4dbf27cc': { signature: 'follow(address)', words: 'follow a profile' },
  '0x015a4ead': { signature: 'unfollow(address)', words: 'unfollow a profile' },
  '0xcf8711c8': { signature: 'followBatch(address[])', words: 'follow several profiles' },
  '0x8dd1e47e': { signature: 'unfollowBatch(address[])', words: 'unfollow several profiles' },
  '0x760d9bba': { signature: 'transfer(address,address,uint256,bool,bytes)', words: 'transfer tokens (LSP7)' },
  '0x2d7667c9': { signature: 'transferBatch(address[],address[],uint256[],bool[],bytes[])', words: 'transfer tokens in a batch (LSP7)' },
  '0xb49506fd': { signature: 'authorizeOperator(address,uint256,bytes)', words: 'let someone spend tokens (LSP7)' },
  '0x30d0dc37': { signature: 'revokeOperator(address,address,bool,bytes)', words: 'stop someone spending tokens (LSP7)' },
  '0x511b6952': { signature: 'transfer(address,address,bytes32,bool,bytes)', words: 'transfer an NFT (LSP8)' },
  '0x7e87632c': { signature: 'transferBatch(address[],address[],bytes32[],bool[],bytes[])', words: 'transfer NFTs in a batch (LSP8)' },
  '0x86a10ddd': { signature: 'authorizeOperator(address,bytes32,bytes)', words: 'let someone move an NFT (LSP8)' },
  '0xdb8c9663': { signature: 'revokeOperator(address,bytes32,bool,bytes)', words: 'stop someone moving an NFT (LSP8)' },
  '0xa9059cbb': { signature: 'transfer(address,uint256)', words: 'transfer tokens (ERC-20)' },
  '0x095ea7b3': { signature: 'approve(address,uint256)', words: 'approve spending (ERC-20)' },
  '0x23b872dd': { signature: 'transferFrom(address,address,uint256)', words: 'move approved tokens (ERC-20)' },
};

/** The signature of a well-known function selector, if this page knows it. */
export function knownFunctionSignature(selector: Hex): string | undefined {
  return KNOWN_FUNCTIONS[selector.toLowerCase()]?.signature;
}

export interface AllowedCallDescription {
  /** One plain sentence for the list. */
  summary: string;
  /** 'call', 'read', 'send LYX' */
  actions: string[];
  target: string;
  standardLabel: string;
  functionLabel: string;
}

export function describeAllowedCall(c: DecodedAllowedCall): AllowedCallDescription {
  const actions: string[] = [];
  if (c.callTypes & CALL_TYPE.CALL) actions.push('call');
  if (c.callTypes & CALL_TYPE.STATICCALL) actions.push('read');
  if (c.callTypes & CALL_TYPE.VALUE) actions.push('send LYX');

  const known = c.address === 'any' ? undefined : KNOWN_TARGETS[c.address.toLowerCase()];
  const standard = c.standard.toLowerCase();
  const anyStandard = standard === '0xffffffff';
  const standardName = KNOWN_STANDARDS[standard];
  const target =
    c.address === 'any'
      ? anyStandard
        ? 'any address'
        : `any ${standardName ?? `contract supporting interface ${standard}`}`
      : known
        ? `${known} (${c.address})`
        : (c.address as Address);
  const standardLabel = anyStandard ? 'any standard' : standardName ? `${standardName} contracts` : `contracts supporting interface ${standard}`;
  const fn = KNOWN_FUNCTIONS[c.selector.toLowerCase()];
  const functionLabel = c.selector.toLowerCase() === '0xffffffff' ? 'any function' : fn ? fn.signature : `function ${c.selector.toLowerCase()}`;

  const verb =
    actions.length === 1 && actions[0] === 'send LYX'
      ? 'Send LYX to'
      : `${actions.map((a) => a[0].toUpperCase() + a.slice(1)).join(', ').replace(/, ([^,]*)$/, ' and $1')}:`;
  const what = c.selector.toLowerCase() === '0xffffffff' ? 'any function' : fn ? fn.words : `function ${c.selector.toLowerCase()}`;
  const filter = c.address !== 'any' && !anyStandard ? `, only if it is a ${standardName ?? `contract supporting interface ${standard}`}` : '';
  const summary =
    actions.length === 1 && actions[0] === 'send LYX'
      ? `${verb} ${target}${filter}`
      : `${verb} ${target}${filter} — ${what}`;
  return { summary, actions, target, standardLabel, functionLabel };
}

const KNOWN_KEYS: Record<string, { name: string; detail: string }> = {
  '0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5': {
    name: 'LSP3Profile',
    detail: 'Your public profile details: name, description, pictures, links and tags.',
  },
  '0x6460ee3c0aac563ccbf76d6e1d07bada78e3a9514e6382b736ed3f478ab7b90b': {
    name: 'LSP5ReceivedAssets[]',
    detail: 'The length of the list of assets your profile received.',
  },
  '0x812c4334633eb816c80d0000': { name: 'LSP5ReceivedAssetsMap', detail: 'Entries of the list of assets your profile received.' },
  '0x7c8c3416d6cda87cd42c71ea1843df28ac4850354f988d55ee2eaa47b6dc05cd': {
    name: 'LSP12IssuedAssets[]',
    detail: 'The length of the list of assets your profile issued.',
  },
  '0x74ac2555c10b9349e78f0000': { name: 'LSP12IssuedAssetsMap', detail: 'Entries of the list of assets your profile issued.' },
};

export interface DataKeyDescription {
  name: string;
  detail: string;
  kind: 'key' | 'prefix';
  /** A prefix shorter than a mapping prefix (10 bytes) matches very many keys. */
  broad: boolean;
  key: Hex;
}

export function describeDataKey(key: Hex): DataKeyDescription {
  const k = key.toLowerCase() as Hex;
  const bytes = (k.length - 2) / 2;
  const known = KNOWN_KEYS[k];
  const kind = bytes === 32 ? 'key' : 'prefix';
  if (known) return { ...known, kind, broad: false, key: k };
  return {
    name: kind === 'key' ? 'Custom data key' : 'Custom data key prefix',
    detail: kind === 'key' ? 'One data key of your profile.' : `Every data key of your profile that starts with these ${bytes} bytes.`,
    kind,
    broad: kind === 'prefix' && bytes < 10,
    key: k,
  };
}
