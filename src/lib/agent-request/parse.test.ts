import { describe, it, expect } from 'vitest';
import { getAddress } from 'viem';
import { authorizeLinkMode, parseAgentRequest, type AgentRequestProblem } from './parse';
import { LIMITS } from './constants';

// Public fixtures only (no key behind them is used anywhere).
const CONTROLLER = getAddress('0x5e1c0de0f9b12c2c3ab5a9c1f1b7d0d2a6e4b3c1');
const PROFILE = getAddress('0x9a3dbca554e9f6b9257aaa24010da8377c57c17e');
const LSP26 = '0xf01103E5a9909Fc0DBe8166dA7085e0285daDDcA';
const LSP3_PROFILE_KEY = '0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5';
const WILDCARD = 'ffffffffffffffffffffffffffffffffffffffff';

function call(callTypes: number, address: string, standard = 'ffffffff', selector = 'ffffffff'): string {
  const a = address.toLowerCase().replace(/^0x/, '');
  return `0020${callTypes.toString(16).padStart(8, '0')}${a}${standard}${selector}`;
}
const calls = (...entries: string[]) => `0x${entries.join('')}`;
const keys = (...ks: string[]) =>
  `0x${ks.map((k) => {
    const h = k.replace(/^0x/, '');
    return (h.length / 2).toString(16).padStart(4, '0') + h;
  }).join('')}`;

function search(params: [string, string][]): string {
  const sp = new URLSearchParams();
  for (const [k, v] of params) sp.append(k, v);
  return `?${sp.toString()}`;
}

const base: [string, string][] = [
  ['controller', CONTROLLER],
  ['network', 'mainnet'],
  ['permissions', 'SIGN'],
];

function parse(params: [string, string][], hash = '') {
  return parseAgentRequest({ search: search(params), hash });
}

function codes(problems: AgentRequestProblem[]) {
  return problems.map((p) => p.code);
}

function expectProblem(params: [string, string][], code: string, hash = '') {
  const r = parse(params, hash);
  expect(r.ok).toBe(false);
  if (r.ok) return;
  expect(codes(r.problems)).toContain(code);
  return r;
}

describe('authorizeLinkMode', () => {
  it('is manual without parameters', () => {
    expect(authorizeLinkMode(new URLSearchParams(''))).toBe('manual');
  });

  it('keeps the existing plain and base64 links on the legacy flow', () => {
    expect(authorizeLinkMode(new URLSearchParams(`profile=${PROFILE}&controller=${CONTROLLER}&network=mainnet`))).toBe('legacy');
    expect(authorizeLinkMode(new URLSearchParams('data=abc&cs=0000'))).toBe('legacy');
  });

  it('keeps a controller-only link on the manual page (unchanged behaviour)', () => {
    expect(authorizeLinkMode(new URLSearchParams(`controller=${CONTROLLER}`))).toBe('manual');
  });

  it('switches to the agent request flow as soon as any request parameter is present', () => {
    for (const p of ['permissions', 'allowedCalls', 'allowedDataKeys', 'forProfile', 'name', 'purpose']) {
      expect(authorizeLinkMode(new URLSearchParams(`${p}=x`))).toBe('agent');
    }
  });
});

describe('parseAgentRequest: valid requests', () => {
  it('parses the minimal request', () => {
    const r = parse(base);
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.request.controller).toBe(CONTROLLER);
    expect(r.request.network).toBe('mainnet');
    expect(r.request.chainId).toBe(42);
    expect(r.request.profile).toBeUndefined();
    expect(r.request.permissions).toEqual(['SIGN']);
    expect(r.request.permissionValue).toBe(0x200000n);
    expect(r.request.standard).toEqual(['SIGN']);
    expect(r.request.elevated).toEqual([]);
    expect(r.request.allowedCalls).toEqual([]);
    expect(r.request.allowedCallsHex).toBeNull();
    expect(r.request.allowedDataKeys).toEqual([]);
    expect(r.request.allowedDataKeysHex).toBeNull();
  });

  it('parses a full request and decodes the exact restriction bytes', () => {
    const allowedCalls = calls(call(2, LSP26, 'ffffffff', '4dbf27cc'), call(2, LSP26, 'ffffffff', '015a4ead'));
    const allowedDataKeys = keys(LSP3_PROFILE_KEY);
    const r = parse([
      ['controller', CONTROLLER],
      ['network', 'mainnet'],
      ['forProfile', PROFILE],
      ['permissions', 'CALL,SETDATA,EXECUTE_RELAY_CALL'],
      ['allowedCalls', allowedCalls],
      ['allowedDataKeys', allowedDataKeys],
      ['name', 'Nova 🤖'],
      ['purpose', 'Follow the artists you like and keep your profile picture fresh.'],
    ]);
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.request.profile).toBe(PROFILE);
    expect(r.request.name).toBe('Nova 🤖');
    expect(r.request.permissions).toEqual(['CALL', 'SETDATA', 'EXECUTE_RELAY_CALL']);
    expect(r.request.permissionValue).toBe(0x800n | 0x40000n | 0x400000n);
    expect(r.request.allowedCalls).toHaveLength(2);
    expect(r.request.allowedCalls[0]).toMatchObject({ callTypes: 2, address: LSP26, standard: '0xffffffff', selector: '0x4dbf27cc' });
    expect(r.request.allowedCalls[1].selector).toBe('0x015a4ead');
    expect(r.request.allowedCallsHex).toBe(allowedCalls.toLowerCase());
    expect(r.request.allowedDataKeys).toEqual([LSP3_PROFILE_KEY]);
    expect(r.request.allowedDataKeysHex).toBe(allowedDataKeys);
    expect(r.request.notes).toEqual([]);
  });

  it('accepts all-lowercase addresses and returns them checksummed', () => {
    const r = parse([['controller', CONTROLLER.toLowerCase()], ['network', 'mainnet'], ['permissions', 'SIGN'], ['forProfile', PROFILE.toLowerCase()]]);
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.request.controller).toBe(CONTROLLER);
    expect(r.request.profile).toBe(PROFILE);
  });

  it('returns permissions in LSP6 bit order whatever the link order', () => {
    const r = parse([['controller', CONTROLLER], ['network', 'mainnet'], ['permissions', 'SIGN,STATICCALL,CALL']]);
    expect(r.ok && r.request.permissions).toEqual(['CALL', 'STATICCALL', 'SIGN']);
  });

  it('separates elevated permissions (never preselected) from standard ones', () => {
    const r = parse([['controller', CONTROLLER], ['network', 'mainnet'], ['permissions', 'SUPER_CALL,SIGN,DEPLOY']]);
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.request.standard).toEqual(['SIGN']);
    expect(r.request.elevated).toEqual(['SUPER_CALL', 'DEPLOY']);
  });

  it('combines permission bits with exact bigint arithmetic (bits 21 and 22, all requestable names)', () => {
    const all = 'CALL,STATICCALL,TRANSFERVALUE,SETDATA,SIGN,EXECUTE_RELAY_CALL,ENCRYPT,DECRYPT,SUPER_CALL,SUPER_TRANSFERVALUE,SUPER_STATICCALL,SUPER_SETDATA,DEPLOY';
    const r = parse([['controller', CONTROLLER], ['network', 'mainnet'], ['permissions', all]]);
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    const expected =
      0x800n | 0x2000n | 0x200n | 0x40000n | 0x200000n | 0x400000n | 0x80000n | 0x100000n | 0x400n | 0x100n | 0x1000n | 0x20000n | 0x10000n;
    expect(r.request.permissionValue).toBe(expected);
    expect(r.request.permissionValue.toString(16)).toBe('7f3f00');
  });

  it('round-trips text that needs URL encoding without changing it', () => {
    const tricky = 'R&D "bot" = 100% + ü';
    const purpose = 'Handles <b>tips</b> & follows; ok?';
    const r = parse([...base, ['name', tricky], ['purpose', purpose]]);
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.request.name).toBe(tricky);
    expect(r.request.purpose).toBe(purpose);
  });

  it('keeps markup in labels as plain text (rendering escapes it)', () => {
    const r = parse([...base, ['name', '<img src=x onerror=alert(1)>']]);
    expect(r.ok && r.request.name).toBe('<img src=x onerror=alert(1)>');
  });
});

describe('parseAgentRequest: problems that block the request', () => {
  it('requires controller, network and permissions', () => {
    expectProblem([['network', 'mainnet'], ['permissions', 'SIGN']], 'missing-controller');
    expectProblem([['controller', CONTROLLER], ['permissions', 'SIGN']], 'missing-network');
    expectProblem([['controller', CONTROLLER], ['network', 'mainnet'], ['name', 'Nova']], 'missing-permissions');
  });

  it.each([
    ['short', '0x1234'],
    ['too long', `${CONTROLLER}00`],
    ['no 0x prefix', CONTROLLER.slice(2)],
    ['uppercase 0X prefix', `0X${CONTROLLER.slice(2)}`],
    ['non-hex', '0x5e1c0de0f9b12c2c3ab5a9c1f1b7d0d2a6e4b3cZ'],
    ['inner whitespace', `${CONTROLLER.slice(0, 20)} ${CONTROLLER.slice(21)}`],
    ['negative', `-${CONTROLLER}`],
  ])('rejects a malformed controller address (%s)', (_label, value) => {
    expectProblem([['controller', value], ['network', 'mainnet'], ['permissions', 'SIGN']], 'invalid-address');
  });

  it('rejects a mixed-case address with a wrong EIP-55 checksum', () => {
    const flipped = CONTROLLER.replace(/[a-f]/, (c) => c.toUpperCase());
    expect(flipped).not.toBe(CONTROLLER);
    expectProblem([['controller', flipped], ['network', 'mainnet'], ['permissions', 'SIGN']], 'bad-checksum');
  });

  it('rejects the zero and the wildcard address', () => {
    expectProblem([['controller', '0x0000000000000000000000000000000000000000'], ['network', 'mainnet'], ['permissions', 'SIGN']], 'zero-address');
    expectProblem([['controller', `0x${WILDCARD}`], ['network', 'mainnet'], ['permissions', 'SIGN']], 'wildcard-address');
    expectProblem([...base, ['forProfile', '0x0000000000000000000000000000000000000000']], 'zero-address');
  });

  it('rejects a controller that is the profile itself', () => {
    expectProblem([...base, ['forProfile', CONTROLLER.toLowerCase()]], 'controller-is-profile');
  });

  it('refuses testnet requests and unknown networks instead of falling back to mainnet', () => {
    expectProblem([['controller', CONTROLLER], ['network', 'testnet'], ['permissions', 'SIGN']], 'unsupported-network');
    for (const n of ['bogus', 'Mainnet', '42', 'lukso', '-1']) {
      expectProblem([['controller', CONTROLLER], ['network', n], ['permissions', 'SIGN']], 'invalid-network');
    }
  });

  it('rejects unknown permission names, including lowercase, numbers, negative values and bitmasks', () => {
    for (const p of ['FLY', 'sign', '-1', '0x400000', '4194304', 'ALL_PERMISSIONS', 'SIGN ', '__proto__', 'constructor', 'toString', 'hasOwnProperty']) {
      expectProblem([['controller', CONTROLLER], ['network', 'mainnet'], ['permissions', p]], 'unknown-permission');
    }
  });

  it.each([
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
  ])('refuses the escalation permission %s outright', (name) => {
    const r = expectProblem([['controller', CONTROLLER], ['network', 'mainnet'], ['permissions', `SIGN,${name}`]], 'refused-permission');
    expect(r?.problems.find((p) => p.code === 'refused-permission')?.message).toContain(name);
  });

  it('rejects duplicate and empty permission entries', () => {
    expectProblem([['controller', CONTROLLER], ['network', 'mainnet'], ['permissions', 'SIGN,SIGN']], 'duplicate-permission');
    expectProblem([['controller', CONTROLLER], ['network', 'mainnet'], ['permissions', 'SIGN,']], 'invalid-permissions');
    expectProblem([['controller', CONTROLLER], ['network', 'mainnet'], ['permissions', ',']], 'invalid-permissions');
  });

  it('takes the profile from forProfile and rejects the device-import name profile in an agent request', () => {
    const r = parse([...base, ['forProfile', PROFILE]]);
    expect(r.ok && r.request.profile).toBe(PROFILE);
    expectProblem([...base, ['profile', PROFILE]], 'unknown-param');
  });

  it('rejects a parameter given twice, even with the same value', () => {
    expectProblem([...base, ['controller', CONTROLLER]], 'duplicate-param');
    expectProblem([...base, ['permissions', 'SIGN']], 'duplicate-param');
  });

  it.each(['redirect', 'callback', 'returnUrl', 'utm_source', 'bits', 'Permissions'])('rejects the unknown parameter %s', (name) => {
    expectProblem([...base, [name, '1']], 'unknown-param');
  });

  it('rejects empty values', () => {
    expectProblem([...base, ['name', '']], 'empty-param');
    expectProblem([...base, ['name', '   ']], 'empty-param');
    expectProblem([['controller', CONTROLLER], ['network', 'mainnet'], ['permissions', '']], 'empty-param');
  });

  it('rejects links that are too long', () => {
    const long = search([...base, ['purpose', 'a'.repeat(150)]]) + `&x=${'b'.repeat(LIMITS.maxSearchLength)}`;
    const r = parseAgentRequest({ search: long });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(codes(r.problems)).toContain('too-long');
  });

  it('rejects a URL fragment', () => {
    expectProblem(base, 'fragment-not-allowed', '#section');
  });

  it('rejects links that mix the agent request with the legacy base64 format', () => {
    expectProblem([...base, ['data', 'e30='], ['cs', '00000000']], 'mixed-formats');
  });

  it('reports every problem at once', () => {
    const r = parse([['controller', '0x12'], ['network', 'bogus'], ['permissions', 'FLY,ADDCONTROLLER'], ['callback', 'x']]);
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(codes(r.problems)).toEqual(expect.arrayContaining(['invalid-address', 'invalid-network', 'unknown-permission', 'refused-permission', 'unknown-param']));
  });
});

describe('parseAgentRequest: AllowedCalls are decoded strictly', () => {
  const withCalls = (value: string) => [['controller', CONTROLLER], ['network', 'mainnet'], ['permissions', 'CALL'], ['allowedCalls', value]] as [string, string][];

  it.each([
    ['not hex', '0xzz'],
    ['missing 0x', call(2, LSP26).slice(0)],
    ['empty list', '0x'],
    ['odd length', `${calls(call(2, LSP26))}0`],
    ['wrong element length', `0x001f${call(2, LSP26).slice(4, 66)}`],
    ['truncated element', calls(call(2, LSP26)).slice(0, -2)],
    ['trailing byte', `${calls(call(2, LSP26))}00`],
    ['call type 0', calls(call(0, LSP26))],
    ['DELEGATECALL', calls(call(8, LSP26))],
    ['CALL+DELEGATECALL', calls(call(10, LSP26))],
    ['unknown call type bit', calls(call(0x12, LSP26))],
    ['all wildcards', calls(call(2, `0x${WILDCARD}`))],
    ['zero target', calls(call(2, '0x0000000000000000000000000000000000000000'))],
    ['duplicate entry', calls(call(2, LSP26), call(2, LSP26))],
  ])('rejects %s', (_label, value) => {
    expectProblem(withCalls(value), 'invalid-allowed-calls');
  });

  it(`rejects more than ${LIMITS.maxAllowedCalls} entries`, () => {
    const many = Array.from({ length: LIMITS.maxAllowedCalls + 1 }, (_, i) => call(2, `0x${(i + 1).toString(16).padStart(40, '0')}`));
    expectProblem(withCalls(calls(...many)), 'invalid-allowed-calls');
  });

  it(`accepts exactly ${LIMITS.maxAllowedCalls} entries`, () => {
    const many = Array.from({ length: LIMITS.maxAllowedCalls }, (_, i) => call(2, `0x${(i + 1).toString(16).padStart(40, '0')}`));
    const r = parse(withCalls(calls(...many)));
    expect(r.ok && r.request.allowedCalls.length).toBe(LIMITS.maxAllowedCalls);
  });

  it('accepts an any-address entry restricted to a token standard', () => {
    const r = parse(withCalls(calls(call(2, `0x${WILDCARD}`, 'c52d6008'))));
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.request.allowedCalls[0]).toMatchObject({ address: 'any', standard: '0xc52d6008', selector: '0xffffffff' });
  });
});

describe('parseAgentRequest: AllowedERC725YDataKeys are decoded strictly', () => {
  const withKeys = (value: string) => [['controller', CONTROLLER], ['network', 'mainnet'], ['permissions', 'SETDATA'], ['allowedDataKeys', value]] as [string, string][];

  it.each([
    ['zero-length element', '0x0000'],
    ['33-byte element', keys(`${LSP3_PROFILE_KEY}aa`)],
    ['truncated element', keys(LSP3_PROFILE_KEY).slice(0, -2)],
    ['trailing byte', `${keys(LSP3_PROFILE_KEY)}0`],
    ['empty list', '0x'],
    ['duplicate key', keys(LSP3_PROFILE_KEY, LSP3_PROFILE_KEY)],
  ])('rejects %s', (_label, value) => {
    expectProblem(withKeys(value), 'invalid-allowed-data-keys');
  });

  it.each([
    ['a controller permission key', `0x4b80742de2bf82acb3630000${CONTROLLER.slice(2)}`],
    ['the AddressPermissions[] length key', '0xdf30dba06db6a30e65354d9a64c609861f089545ca58c6b4dbe31a5f338cb0e3'],
    ['an AddressPermissions[] index prefix', '0xdf30dba06db6a30e65354d9a64c60986'],
    ['a one-byte prefix covering permission keys', '0x4b'],
    ['the Universal Receiver Delegate key', '0x0cfc51aec37c55a4d0b1a65c6255c4bf2fbdf6277f3cc0730c45b828b6db8b47'],
    ['the LSP17 extension prefix', '0xcee78b4094da860110960000'],
  ])('refuses %s', (_label, key) => {
    expectProblem(withKeys(keys(key)), 'protected-data-key');
  });

  it(`rejects more than ${LIMITS.maxAllowedDataKeys} keys`, () => {
    const many = Array.from({ length: LIMITS.maxAllowedDataKeys + 1 }, (_, i) => `0x${(i + 1).toString(16).padStart(64, '0')}`);
    expectProblem(withKeys(keys(...many)), 'invalid-allowed-data-keys');
  });

  it('accepts a full key and a short mapping prefix', () => {
    const r = parse(withKeys(keys(LSP3_PROFILE_KEY, '0x74ac2555c10b9349e78f0000')));
    expect(r.ok && r.request.allowedDataKeys).toEqual([LSP3_PROFILE_KEY, '0x74ac2555c10b9349e78f0000']);
  });
});

describe('parseAgentRequest: labels', () => {
  it('limits the length of name and purpose', () => {
    expectProblem([...base, ['name', 'n'.repeat(LIMITS.maxNameLength + 1)]], 'text-too-long');
    expectProblem([...base, ['purpose', 'p'.repeat(LIMITS.maxPurposeLength + 1)]], 'text-too-long');
    const ok = parse([...base, ['name', 'n'.repeat(LIMITS.maxNameLength)], ['purpose', 'p'.repeat(LIMITS.maxPurposeLength)]]);
    expect(ok.ok).toBe(true);
  });

  it('counts characters, not UTF-16 units', () => {
    const emoji = '🤖'.repeat(LIMITS.maxNameLength);
    expect(parse([...base, ['name', emoji]]).ok).toBe(true);
  });

  it.each([
    ['a control character', 'Nova\u0007'],
    ['a newline', 'Nova\nAdmin'],
    ['a right-to-left override', 'Nova\u202Etxt.exe'],
    ['a zero-width space', 'No\u200Bva'],
    ['an invisible tag character', 'Nova\u{E0041}'],
    ['a link', 'visit https://example.org'],
    ['a www link', 'www.example.org'],
  ])('rejects a name with %s', (_label, value) => {
    expectProblem([...base, ['name', value]], 'invalid-text');
  });
});

describe('parseAgentRequest: secrets in the link', () => {
  const key64 = 'ab'.repeat(32);

  it.each(['privateKey', 'private_key', 'pk', 'mnemonic', 'seed', 'password', 'secret', 'token', 'apiKey'])('flags the secret-looking parameter %s', (name) => {
    const r = expectProblem([...base, [name, 'x']], 'secret-detected');
    expect(r?.ok === false && r.secretDetected).toBe(true);
  });

  it('flags a 64-hex value in a label or in the permission list', () => {
    const a = expectProblem([...base, ['name', `0x${key64}`]], 'secret-detected');
    expect(a?.ok === false && a.secretDetected).toBe(true);
    expectProblem([['controller', CONTROLLER], ['network', 'mainnet'], ['permissions', `0x${key64}`]], 'secret-detected');
  });

  it('flags a 64-hex value in the fragment', () => {
    const r = expectProblem(base, 'secret-detected', `#${key64}`);
    expect(r?.ok === false && r.secretDetected).toBe(true);
  });

  it('does not flag the 32-byte entries inside the restriction lists', () => {
    const r = parse([['controller', CONTROLLER], ['network', 'mainnet'], ['permissions', 'SETDATA'], ['allowedDataKeys', keys(LSP3_PROFILE_KEY)]]);
    expect(r.ok).toBe(true);
  });
});

describe('parseAgentRequest: notes for requests that would not work as written', () => {
  it('notes CALL without a contract-call entry and SETDATA without data keys', () => {
    const r = parse([['controller', CONTROLLER], ['network', 'mainnet'], ['permissions', 'CALL,SETDATA']]);
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.request.notes.join(' ')).toMatch(/CALL/);
    expect(r.request.notes.join(' ')).toMatch(/SETDATA/);
  });

  it('notes a value entry without TRANSFERVALUE', () => {
    const r = parse([['controller', CONTROLLER], ['network', 'mainnet'], ['permissions', 'CALL'], ['allowedCalls', calls(call(3, PROFILE))]]);
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.request.notes.join(' ')).toMatch(/TRANSFERVALUE/);
  });
});

describe('links made by the Universal Profile agent skill (shared contract vectors)', () => {
  // Generated by `up permissions authorize-link` in universal-everything/ai-universalprofile-skill;
  // its test/unit/lsp/authorize-link.test.ts pins the same two links.
  const V1 =
    'https://authorize.universalprofile.cloud/authorize?controller=0x5e1c0de0f9B12c2C3aB5a9c1f1B7D0D2A6e4B3c1&network=mainnet&name=Nova&purpose=Follow%20artists%20for%20you%20%28and%20nothing%20else%29&permissions=CALL,SETDATA,SIGN,EXECUTE_RELAY_CALL&allowedCalls=0x002000000002f01103e5a9909fc0dbe8166da7085e0285daddcaffffffff4dbf27cc002000000002f01103e5a9909fc0dbe8166da7085e0285daddcaffffffff015a4ead002000000002f01103e5a9909fc0dbe8166da7085e0285daddcaffffffffcf8711c8002000000002f01103e5a9909fc0dbe8166da7085e0285daddcaffffffff8dd1e47e&allowedDataKeys=0x00205ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5';
  const V2 =
    'https://authorize.universalprofile.cloud/authorize?controller=0x5e1c0de0f9B12c2C3aB5a9c1f1B7D0D2A6e4B3c1&network=mainnet&name=Nova%20%26%20Co&forProfile=0x9a3DBCa554e9f6b9257aAa24010DA8377C57c17e&permissions=TRANSFERVALUE,CALL,SUPER_STATICCALL,EXECUTE_RELAY_CALL&allowedCalls=0x002000000002ffffffffffffffffffffffffffffffffffffffffc52d6008ffffffff002000000002ffffffffffffffffffffffffffffffffffffffffb3c4928fffffffff002000000002ffffffffffffffffffffffffffffffffffffffffdaa746b7ffffffff0020000000011234567890abcdef1234567890abcdef12345678ffffffffffffffff';
  const parseUrl = (u: string) => {
    const url = new URL(u);
    return parseAgentRequest({ search: url.search, hash: url.hash });
  };

  it('parses the social, profile and sign link exactly', () => {
    const r = parseUrl(V1);
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.request).toMatchObject({ controller: CONTROLLER, network: 'mainnet', name: 'Nova', purpose: 'Follow artists for you (and nothing else)' });
    expect(r.request.permissions).toEqual(['CALL', 'SETDATA', 'SIGN', 'EXECUTE_RELAY_CALL']);
    expect(r.request.allowedCalls.map((c) => c.selector)).toEqual(['0x4dbf27cc', '0x015a4ead', '0xcf8711c8', '0x8dd1e47e']);
    expect(r.request.allowedDataKeys).toEqual([LSP3_PROFILE_KEY]);
    expect(r.request.notes).toEqual([]);
  });

  it('parses the tokens and pay link with a profile and an elevated permission left unticked', () => {
    const r = parseUrl(V2);
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.request).toMatchObject({ profile: PROFILE, name: 'Nova & Co' });
    expect(r.request.standard).toEqual(['TRANSFERVALUE', 'CALL', 'EXECUTE_RELAY_CALL']);
    expect(r.request.elevated).toEqual(['SUPER_STATICCALL']);
    expect(r.request.allowedCalls.map((c) => [c.callTypes, c.address, c.standard])).toEqual([
      [2, 'any', '0xc52d6008'],
      [2, 'any', '0xb3c4928f'],
      [2, 'any', '0xdaa746b7'],
      [1, getAddress('0x1234567890abcdef1234567890abcdef12345678'), '0xffffffff'],
    ]);
  });
});
