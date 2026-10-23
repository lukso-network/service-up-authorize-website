// Agent authorization request: an extension of the /authorize link contract.
//
// An AI agent hands the profile owner a link such as
//   /authorize?controller=0x…&network=mainnet&permissions=CALL,SIGN&allowedCalls=0x…&name=Nova
// The link is an untrusted proposal: it only prefills the review. Nothing is written or
// signed until the owner connects their profile, reviews and approves in their own wallet.
import type { PermissionKey } from '@/constants/permissions';

/** Every parameter an agent request may contain. Anything else blocks the request. */
export const REQUEST_PARAMS = [
  'controller',
  'network',
  'permissions',
  'allowedCalls',
  'allowedDataKeys',
  'profile',
  'name',
  'purpose',
] as const;
export type RequestParam = (typeof REQUEST_PARAMS)[number];

/** Any of these turns /authorize into the agent request flow. */
export const REQUEST_ONLY_PARAMS = ['permissions', 'allowedCalls', 'allowedDataKeys', 'name', 'purpose'] as const;

/** Parameters of the older link formats (plain profile/controller link, base64 package). */
export const LEGACY_PARAMS = ['profile', 'data', 'cs'] as const;

export const LIMITS = {
  /** Characters of the whole query string, including the leading "?". */
  maxSearchLength: 4096,
  maxNameLength: 48,
  maxPurposeLength: 200,
  maxAllowedCalls: 16,
  maxAllowedDataKeys: 16,
} as const;

/**
 * Networks an agent request may target. The wallet connection of this site (@lukso/up-modal)
 * is configured for LUKSO mainnet only, so a LUKSO Testnet request could not be signed on the
 * right chain here: it is refused with an explanation, never switched to mainnet.
 */
export const REQUEST_NETWORKS = {
  mainnet: { chainId: 42, label: 'LUKSO' },
} as const;
export type RequestNetwork = keyof typeof REQUEST_NETWORKS;

/** Requestable permissions that start ticked in the review. */
export const STANDARD_PERMISSIONS: readonly PermissionKey[] = [
  'CALL',
  'STATICCALL',
  'TRANSFERVALUE',
  'SETDATA',
  'SIGN',
  'EXECUTE_RELAY_CALL',
  'ENCRYPT',
  'DECRYPT',
];

/** Requestable, but never preselected: the owner has to tick each one deliberately. */
export const ELEVATED_PERMISSIONS: readonly PermissionKey[] = [
  'SUPER_CALL',
  'SUPER_TRANSFERVALUE',
  'SUPER_STATICCALL',
  'SUPER_SETDATA',
  'DEPLOY',
];

/** Never granted through an agent link: control over the profile, its controllers or its code paths. */
export const REFUSED_PERMISSIONS: readonly PermissionKey[] = [
  'CHANGEOWNER',
  'ADDCONTROLLER',
  'EDITPERMISSIONS',
  'ADDEXTENSIONS',
  'CHANGEEXTENSIONS',
  'ADDUNIVERSALRECEIVERDELEGATE',
  'CHANGEUNIVERSALRECEIVERDELEGATE',
  'REENTRANCY',
  'DELEGATECALL',
  'SUPER_DELEGATECALL',
];

/** LSP6 AllowedCalls call type bits. */
export const CALL_TYPE = { VALUE: 0x1, CALL: 0x2, STATICCALL: 0x4, DELEGATECALL: 0x8 } as const;
/** Call types an agent request may use (DELEGATECALL never). */
export const REQUESTABLE_CALL_TYPES = CALL_TYPE.VALUE | CALL_TYPE.CALL | CALL_TYPE.STATICCALL;

export const WILDCARD_ADDRESS_HEX = 'ffffffffffffffffffffffffffffffffffffffff';
export const WILDCARD_BYTES4_HEX = 'ffffffff';

/**
 * ERC725Y namespaces an agent request may not list as writable data keys: they hold the
 * profile's controllers and permissions, its receiver delegates and its extensions.
 */
export const PROTECTED_DATA_KEY_PREFIXES: readonly { prefix: string; name: string }[] = [
  { prefix: '0x4b80742de2bf', name: 'controller permissions (AddressPermissions:…)' },
  { prefix: '0xdf30dba06db6a30e65354d9a64c60986', name: 'the controller list (AddressPermissions[])' },
  { prefix: '0x0cfc51aec37c55a4d0b1', name: 'Universal Receiver Delegates (LSP1)' },
  { prefix: '0xcee78b4094da86011096', name: 'profile extensions (LSP17)' },
];
