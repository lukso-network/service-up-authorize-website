// Strict decoders for the two LSP6 restriction lists carried by an agent request.
// Both are CompactBytesArrays (2-byte length prefix + bytes per element), exactly as they are
// stored on the profile, so the review shows precisely what would be written.
import { getAddress, type Address, type Hex } from 'viem';
import {
  LIMITS,
  CALL_TYPE,
  REQUESTABLE_CALL_TYPES,
  WILDCARD_ADDRESS_HEX,
  WILDCARD_BYTES4_HEX,
  PROTECTED_DATA_KEY_PREFIXES,
} from './constants';

export interface DecodedAllowedCall {
  /** Bit flags: VALUE 0x1, CALL 0x2, STATICCALL 0x4. */
  callTypes: number;
  /** Checksummed target, or 'any' for the wildcard address. */
  address: Address | 'any';
  /** 4-byte ERC-165 interface id the target must support, or 0xffffffff (any). */
  standard: Hex;
  /** 4-byte function selector, or 0xffffffff (any). */
  selector: Hex;
  /** The 32-byte entry as stored. */
  raw: Hex;
}

type Decoded<T> = { ok: true; value: T } | { ok: false; error: string };

const HEX_BYTES = /^0x(?:[0-9a-fA-F]{2})+$/;

export function decodeAllowedCallsStrict(input: string): Decoded<DecodedAllowedCall[]> {
  if (!HEX_BYTES.test(input)) return { ok: false, error: 'is not a 0x-prefixed list of hex bytes' };
  const d = input.slice(2).toLowerCase();
  const entries: string[] = [];
  let p = 0;
  while (p < d.length) {
    if (p + 4 > d.length) return { ok: false, error: 'ends in the middle of an entry' };
    const length = parseInt(d.slice(p, p + 4), 16);
    if (length !== 32) return { ok: false, error: `entry ${entries.length + 1} is ${length} bytes long; every entry must be 32 bytes` };
    const entry = d.slice(p + 4, p + 4 + 64);
    if (entry.length !== 64) return { ok: false, error: `entry ${entries.length + 1} is cut off` };
    entries.push(entry);
    if (entries.length > LIMITS.maxAllowedCalls) return { ok: false, error: `has more than ${LIMITS.maxAllowedCalls} entries` };
    p += 68;
  }

  const seen = new Set<string>();
  const out: DecodedAllowedCall[] = [];
  for (const [i, e] of entries.entries()) {
    const n = i + 1;
    if (seen.has(e)) return { ok: false, error: `entry ${n} is listed twice` };
    seen.add(e);
    const callTypes = parseInt(e.slice(0, 8), 16);
    const address = e.slice(8, 48);
    const standard = e.slice(48, 56);
    const selector = e.slice(56, 64);
    if (callTypes === 0) return { ok: false, error: `entry ${n} allows no call type` };
    if (callTypes & CALL_TYPE.DELEGATECALL) return { ok: false, error: `entry ${n} asks for DELEGATECALL, which is never allowed` };
    if (callTypes & ~REQUESTABLE_CALL_TYPES) return { ok: false, error: `entry ${n} uses an unknown call type` };
    if (/^0{40}$/.test(address)) return { ok: false, error: `entry ${n} targets the zero address` };
    if (address === WILDCARD_ADDRESS_HEX && standard === WILDCARD_BYTES4_HEX && selector === WILDCARD_BYTES4_HEX) {
      return { ok: false, error: `entry ${n} allows any address, any standard and any function (that is unrestricted, and LSP6 rejects it)` };
    }
    out.push({
      callTypes,
      address: address === WILDCARD_ADDRESS_HEX ? 'any' : getAddress(`0x${address}`),
      standard: `0x${standard}`,
      selector: `0x${selector}`,
      raw: `0x${e}`,
    });
  }
  return { ok: true, value: out };
}

export function decodeAllowedDataKeysStrict(input: string): Decoded<Hex[]> {
  if (!HEX_BYTES.test(input)) return { ok: false, error: 'is not a 0x-prefixed list of hex bytes' };
  const d = input.slice(2).toLowerCase();
  const keys: Hex[] = [];
  let p = 0;
  while (p < d.length) {
    if (p + 4 > d.length) return { ok: false, error: 'ends in the middle of an entry' };
    const length = parseInt(d.slice(p, p + 4), 16);
    if (length < 1 || length > 32) return { ok: false, error: `entry ${keys.length + 1} is ${length} bytes long; a data key or prefix has 1 to 32 bytes` };
    const key = d.slice(p + 4, p + 4 + length * 2);
    if (key.length !== length * 2) return { ok: false, error: `entry ${keys.length + 1} is cut off` };
    keys.push(`0x${key}`);
    if (keys.length > LIMITS.maxAllowedDataKeys) return { ok: false, error: `has more than ${LIMITS.maxAllowedDataKeys} entries` };
    p += 4 + length * 2;
  }
  if (new Set(keys).size !== keys.length) return { ok: false, error: 'lists the same data key twice' };
  return { ok: true, value: keys };
}

/** Name of the protected namespace a data key or prefix overlaps, if any. */
export function protectedNamespace(key: Hex): string | undefined {
  const k = key.toLowerCase();
  for (const { prefix, name } of PROTECTED_DATA_KEY_PREFIXES) {
    if (k.startsWith(prefix) || prefix.startsWith(k)) return name;
  }
  return undefined;
}
