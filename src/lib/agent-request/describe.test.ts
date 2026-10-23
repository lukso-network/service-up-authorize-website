import { describe, it, expect } from 'vitest';
import type { Address, Hex } from 'viem';
import { describePermission, describeAllowedCall, describeDataKey, NOT_GRANTABLE_SUMMARY } from './describe';
import { STANDARD_PERMISSIONS, ELEVATED_PERMISSIONS } from './constants';
import type { DecodedAllowedCall } from './compactBytes';

const LSP26 = '0xf01103E5a9909Fc0DBe8166dA7085e0285daDDcA' as Address;
const RECIPIENT = '0x9a3DBCa554e9f6b9257aAa24010DA8377C57c17e' as Address;

const entry = (callTypes: number, address: Address | 'any', standard = '0xffffffff', selector = '0xffffffff'): DecodedAllowedCall => ({
  callTypes,
  address,
  standard: standard as Hex,
  selector: selector as Hex,
  raw: '0x' as Hex,
});

describe('describePermission', () => {
  it('describes every requestable permission with a tier and a risk', () => {
    for (const key of [...STANDARD_PERMISSIONS, ...ELEVATED_PERMISSIONS]) {
      const d = describePermission(key);
      expect(d.title.length, key).toBeGreaterThan(5);
      expect(d.detail.length, key).toBeGreaterThan(20);
      expect(['low', 'medium', 'high']).toContain(d.risk);
      expect(d.tier).toBe(STANDARD_PERMISSIONS.includes(key) ? 'standard' : 'elevated');
    }
  });

  it('says plainly that value transfers have no amount limit', () => {
    expect(describePermission('TRANSFERVALUE').detail).toMatch(/no amount limit/i);
    expect(describePermission('SUPER_TRANSFERVALUE').detail).toMatch(/any amount/i);
  });

  it('marks the unrestricted permissions as high risk', () => {
    for (const key of ['SUPER_CALL', 'SUPER_TRANSFERVALUE', 'SUPER_SETDATA', 'SIGN'] as const) {
      expect(describePermission(key).risk, key).toBe('high');
    }
  });
});

describe('describeAllowedCall', () => {
  it('names the LSP26 follower registry and the follow function', () => {
    const d = describeAllowedCall(entry(2, LSP26, '0xffffffff', '0x4dbf27cc'));
    expect(d.summary).toMatch(/follower/i);
    expect(d.summary).toMatch(/follow/);
    expect(d.target).toContain(LSP26);
    expect(d.functionLabel).toBe('follow(address)');
  });

  it('describes an any-address entry restricted to LSP7 tokens', () => {
    const d = describeAllowedCall(entry(2, 'any', '0xc52d6008'));
    expect(d.summary).toMatch(/any LSP7 token/i);
    expect(d.functionLabel).toBe('any function');
  });

  it('describes a value-only entry as sending LYX to that address', () => {
    const d = describeAllowedCall(entry(1, RECIPIENT));
    expect(d.actions).toEqual(['send LYX']);
    expect(d.summary).toContain(RECIPIENT);
  });

  it('shows unknown selectors and interface ids as hex, never guessing a name', () => {
    const d = describeAllowedCall(entry(6, RECIPIENT, '0x12345678', '0xabcdef01'));
    expect(d.actions).toEqual(['call', 'read']);
    expect(d.functionLabel).toBe('function 0xabcdef01');
    expect(d.standardLabel).toBe('contracts supporting interface 0x12345678');
  });
});

describe('describeDataKey', () => {
  it('names well-known keys', () => {
    const d = describeDataKey('0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5');
    expect(d.name).toBe('LSP3Profile');
    expect(d.kind).toBe('key');
    expect(d.broad).toBe(false);
  });

  it('flags short prefixes as broad', () => {
    expect(describeDataKey('0x5e').broad).toBe(true);
    expect(describeDataKey('0x5e').kind).toBe('prefix');
    expect(describeDataKey('0x74ac2555c10b9349e78f0000')).toMatchObject({ kind: 'prefix', broad: false, name: 'LSP12IssuedAssetsMap' });
  });

  it('shows unknown full keys as custom', () => {
    const d = describeDataKey(`0x${'12'.repeat(32)}`);
    expect(d.name).toBe('Custom data key');
  });
});

describe('NOT_GRANTABLE_SUMMARY', () => {
  it('lists what an agent link can never grant', () => {
    const text = NOT_GRANTABLE_SUMMARY.join(' ');
    for (const word of ['owner', 'controllers', 'permissions', 'extensions']) expect(text).toMatch(new RegExp(word, 'i'));
  });
});
