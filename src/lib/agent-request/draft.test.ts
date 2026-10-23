import { describe, it, expect } from 'vitest';
import { getAddress, type Hex } from 'viem';
import { PERMISSIONS } from '@/constants/permissions';
import { parseAgentRequest, type AgentRequest } from './parse';
import { draftFromRequest, checkDraft, compareWithRequest, sameDraft, allowedCallFromEntry, type AgentDraft } from './draft';

// Public fixtures only (no key behind them is used anywhere).
const CONTROLLER = getAddress('0x5e1c0de0f9b12c2c3ab5a9c1f1b7d0d2a6e4b3c1');
const RECIPIENT = getAddress('0x1234567890abcdef1234567890abcdef12345678');
const LSP26 = 'f01103e5a9909fc0dbe8166da7085e0285daddca';
const FOLLOW = `0020${'00000002'}${LSP26}ffffffff4dbf27cc`;
const UNFOLLOW = `0020${'00000002'}${LSP26}ffffffff015a4ead`;
const LSP3 = '0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5';
const LSP5_ARRAY = '0x6460ee3c0aac563ccbf76d6e1d07bada78e3a9514e6382b736ed3f478ab7b90b';
const bits = (...keys: (keyof typeof PERMISSIONS)[]) => keys.reduce((v, k) => v | PERMISSIONS[k], 0n);

// The two links the Universal Profile agent skill produces (also pinned in parse.test.ts).
const V1 =
  'https://authorize.universalprofile.cloud/authorize?controller=0x5e1c0de0f9B12c2C3aB5a9c1f1B7D0D2A6e4B3c1&network=mainnet&name=Nova&purpose=Follow%20artists%20for%20you%20%28and%20nothing%20else%29&permissions=CALL,SETDATA,SIGN,EXECUTE_RELAY_CALL&allowedCalls=0x002000000002f01103e5a9909fc0dbe8166da7085e0285daddcaffffffff4dbf27cc002000000002f01103e5a9909fc0dbe8166da7085e0285daddcaffffffff015a4ead002000000002f01103e5a9909fc0dbe8166da7085e0285daddcaffffffffcf8711c8002000000002f01103e5a9909fc0dbe8166da7085e0285daddcaffffffff8dd1e47e&allowedDataKeys=0x00205ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5';
const V2 =
  'https://authorize.universalprofile.cloud/authorize?controller=0x5e1c0de0f9B12c2C3aB5a9c1f1B7D0D2A6e4B3c1&network=mainnet&name=Nova%20%26%20Co&forProfile=0x9a3DBCa554e9f6b9257aAa24010DA8377C57c17e&permissions=TRANSFERVALUE,CALL,SUPER_STATICCALL,EXECUTE_RELAY_CALL&allowedCalls=0x002000000002ffffffffffffffffffffffffffffffffffffffffc52d6008ffffffff002000000002ffffffffffffffffffffffffffffffffffffffffb3c4928fffffffff002000000002ffffffffffffffffffffffffffffffffffffffffdaa746b7ffffffff0020000000011234567890abcdef1234567890abcdef12345678ffffffffffffffff';

function fromUrl(u: string): AgentRequest {
  const url = new URL(u);
  const r = parseAgentRequest({ search: url.search, hash: url.hash });
  if (!r.ok) throw new Error(r.problems.map((p) => p.message).join('; '));
  return r.request;
}

function request(params: Record<string, string>): AgentRequest {
  const r = parseAgentRequest({ search: `?${new URLSearchParams({ controller: CONTROLLER, network: 'mainnet', ...params }).toString()}` });
  if (!r.ok) throw new Error(r.problems.map((p) => p.message).join('; '));
  return r.request;
}

const social = () => request({ permissions: 'CALL,SETDATA,SIGN,EXECUTE_RELAY_CALL', allowedCalls: `0x${FOLLOW}${UNFOLLOW}`, allowedDataKeys: `0x0020${LSP3.slice(2)}` });

function withCall(draft: AgentDraft, index: number, change: Partial<AgentDraft['allowedCalls'][number]>): AgentDraft {
  return { ...draft, allowedCalls: draft.allowedCalls.map((e, i) => (i === index ? { ...e, ...change } : e)) };
}

function problemsOf(draft: AgentDraft): string[] {
  const check = checkDraft(draft);
  if (check.problems.length) expect(check.target).toBeNull();
  return check.problems;
}

describe('draftFromRequest: the editor starts with the link', () => {
  it('ticks the standard permissions and leaves the high-risk ones for the owner to tick', () => {
    expect(draftFromRequest(fromUrl(V2)).permissions).toBe(bits('TRANSFERVALUE', 'CALL', 'EXECUTE_RELAY_CALL'));
    expect(draftFromRequest(fromUrl(V1)).permissions).toBe(bits('CALL', 'SETDATA', 'SIGN', 'EXECUTE_RELAY_CALL'));
  });

  it('turns each allowed call into an editor entry, including a send-LYX-only entry', () => {
    const [lsp7, , , pay] = draftFromRequest(fromUrl(V2)).allowedCalls;
    expect(lsp7).toMatchObject({
      callTypes: { transferValue: false, call: true, staticCall: false, delegateCall: false },
      useAnyAddress: true,
      useAnyInterface: false,
      interfaceId: '0xc52d6008',
      useAnyFunction: true,
    });
    expect(pay).toMatchObject({
      callTypes: { transferValue: true, call: false, staticCall: false, delegateCall: false },
      useAnyAddress: false,
      address: RECIPIENT,
      useAnyInterface: true,
      useAnyFunction: true,
    });
  });

  it('shows a well-known function by its signature and any other function as its selector', () => {
    const draft = draftFromRequest(request({ permissions: 'CALL', allowedCalls: `0x${FOLLOW}0020${'00000002'}${LSP26}ffffffffabcdef01` }));
    expect(draft.allowedCalls.map((e) => [e.useAnyFunction, e.functionInput])).toEqual([
      [false, 'follow(address)'],
      [false, '0xabcdef01'],
    ]);
  });

  it('turns each data key into an editor entry', () => {
    expect(draftFromRequest(fromUrl(V1)).allowedDataKeys).toMatchObject([{ name: 'LSP3Profile', key: LSP3, isPreset: true }]);
  });

  it('gives every entry its own id', () => {
    const draft = draftFromRequest(fromUrl(V1));
    const ids = [...draft.allowedCalls, ...draft.allowedDataKeys].map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe('checkDraft: what the transaction would write', () => {
  it('writes exactly the bytes of the link when nothing was changed', () => {
    for (const r of [fromUrl(V1), fromUrl(V2), social(), request({ permissions: 'SETDATA', allowedDataKeys: '0x000c812c4334633eb816c80d0000' })]) {
      const check = checkDraft(draftFromRequest(r));
      expect(check.problems).toEqual([]);
      expect(check.target).toEqual({ permissions: draftFromRequest(r).permissions, allowedCalls: r.allowedCallsHex, allowedDataKeys: r.allowedDataKeysHex });
    }
  });

  it('writes the owner’s changes: a removed entry, a narrowed function and an added data key', () => {
    const draft = draftFromRequest(social());
    const edited: AgentDraft = {
      permissions: bits('CALL', 'SETDATA', 'EXECUTE_RELAY_CALL'),
      allowedCalls: [{ ...draft.allowedCalls[1], functionInput: 'unfollowBatch(address[])' }],
      allowedDataKeys: [...draft.allowedDataKeys, { id: 'k2', name: 'LSP5ReceivedAssets[]', key: LSP5_ARRAY, isPreset: true }],
    };
    expect(checkDraft(edited).target).toEqual({
      permissions: bits('CALL', 'SETDATA', 'EXECUTE_RELAY_CALL'),
      allowedCalls: `0x0020${'00000002'}${LSP26}ffffffff8dd1e47e`,
      allowedDataKeys: `0x0020${LSP3.slice(2)}0020${LSP5_ARRAY.slice(2)}`,
    });
  });

  it('writes no list when the owner removed every entry', () => {
    const check = checkDraft({ ...draftFromRequest(social()), allowedCalls: [], allowedDataKeys: [] });
    expect(check.target).toMatchObject({ allowedCalls: null, allowedDataKeys: null });
  });

  it('has nothing to write without a permission', () => {
    const check = checkDraft({ ...draftFromRequest(social()), permissions: 0n });
    expect(check.problems).toEqual([]);
    expect(check.target).toBeNull();
  });

  it('never turns an unfinished entry into "any": an empty or invalid function, standard or address blocks', () => {
    const draft = draftFromRequest(social());
    expect(problemsOf(withCall(draft, 0, { functionInput: '' }))).toEqual([expect.stringMatching(/allowed call #1.*function/i)]);
    expect(problemsOf(withCall(draft, 0, { functionInput: 'follow(' }))).toEqual([expect.stringMatching(/allowed call #1.*function/i)]);
    expect(problemsOf(withCall(draft, 1, { useAnyInterface: false, interfaceId: '' }))).toEqual([expect.stringMatching(/allowed call #2.*interface/i)]);
    expect(problemsOf(withCall(draft, 1, { useAnyInterface: false, interfaceId: '0x1234' }))).toEqual([expect.stringMatching(/allowed call #2.*interface/i)]);
    expect(problemsOf(withCall(draft, 0, { address: '0x1234' }))).toEqual([expect.stringMatching(/allowed call #1.*address/i)]);
    expect(problemsOf(withCall(draft, 0, { address: ` ${draft.allowedCalls[0].address}` }))).toEqual([expect.stringMatching(/allowed call #1.*address/i)]);
  });

  it('refuses a target address whose mixed case does not match its checksum, and the zero address', () => {
    const draft = draftFromRequest(social());
    expect(problemsOf(withCall(draft, 0, { address: '0xF01103E5a9909fc0dbe8166da7085e0285daddca' }))).toEqual([expect.stringMatching(/checksum/i)]);
    expect(problemsOf(withCall(draft, 0, { address: `0x${'0'.repeat(40)}` }))).toEqual([expect.stringMatching(/zero address/i)]);
  });

  it('refuses an entry without a call type and a delegate-call entry', () => {
    const draft = draftFromRequest(social());
    expect(problemsOf(withCall(draft, 0, { callTypes: { call: false, staticCall: false, delegateCall: false } }))).toEqual([expect.stringMatching(/#1.*no call type/i)]);
    expect(problemsOf(withCall(draft, 0, { callTypes: { call: true, staticCall: false, delegateCall: true } }))).toEqual([expect.stringMatching(/#1.*DELEGATECALL/)]);
  });

  it('refuses an entry that allows any address, any standard and any function', () => {
    const draft = draftFromRequest(social());
    expect(problemsOf(withCall(draft, 0, { useAnyAddress: true, useAnyFunction: true }))).toEqual([expect.stringMatching(/#1.*any address, any standard and any function/)]);
    expect(problemsOf(withCall(draft, 0, { address: `0x${'f'.repeat(40)}`, useAnyFunction: true }))).toEqual([expect.stringMatching(/#1.*any address/)]);
  });

  it('refuses the same allowed call twice', () => {
    const draft = draftFromRequest(social());
    expect(problemsOf(withCall(draft, 1, { functionInput: '0x4dbf27cc' }))).toEqual([expect.stringMatching(/#1 and #2 are the same/)]);
  });

  it('refuses data keys that are not 1 to 32 bytes of hex, or listed twice', () => {
    const draft = draftFromRequest(social());
    for (const key of ['0x', '0x123', '0xzz', `0x${'ab'.repeat(33)}`, 'abcd']) {
      expect(problemsOf({ ...draft, allowedDataKeys: [{ id: 'x', name: 'Custom Key', key, isPreset: false }] }), key).toEqual([expect.stringMatching(/1 to 32 bytes/)]);
    }
    const twice = [...draft.allowedDataKeys, { id: 'x', name: 'Custom Key', key: LSP3.toUpperCase().replace('0X', '0x'), isPreset: false }];
    expect(problemsOf({ ...draft, allowedDataKeys: twice })).toEqual([expect.stringMatching(/twice/)]);
  });

  it('refuses data keys for permissions, controllers, receiver delegates or extensions', () => {
    const draft = draftFromRequest(social());
    for (const key of ['0x4b80742de2bf82acb3630000', '0xdf30dba06db6a30e65354d9a64c60986', '0x0cfc51aec37c55a4d0b1a65c6255c4bf2fbdf6277f3cc0730c45b828b6db8b47', '0xcee78b4094da860110960000']) {
      expect(problemsOf({ ...draft, allowedDataKeys: [{ id: 'x', name: 'Custom Key', key, isPreset: false }] }), key).toEqual([expect.stringMatching(/never/)]);
    }
  });

  it('refuses permissions that are never given to an agent, and bits that are no LSP6 permission', () => {
    const draft = draftFromRequest(social());
    expect(problemsOf({ ...draft, permissions: draft.permissions | PERMISSIONS.CHANGEOWNER | PERMISSIONS.DELEGATECALL })).toEqual([
      expect.stringMatching(/CHANGEOWNER, DELEGATECALL/),
    ]);
    expect(problemsOf({ ...draft, permissions: draft.permissions | (1n << 40n) })).toEqual([expect.stringMatching(/not an LSP6 permission/i)]);
  });

  it('notes parts of the current selection that would have no effect, and short data key prefixes', () => {
    const draft = draftFromRequest(social());
    expect(checkDraft({ ...draft, allowedCalls: [] }).notes.join(' ')).toMatch(/CALL has no effect/);
    expect(checkDraft({ ...draft, permissions: bits('SETDATA') }).notes.join(' ')).toMatch(/CALL is not selected/);
    const short = checkDraft({ ...draft, allowedDataKeys: [{ id: 'x', name: 'Custom Key', key: '0x5ef83ad9', isPreset: false }] });
    expect(short.problems).toEqual([]);
    expect(short.notes.join(' ')).toMatch(/0x5ef83ad9.*many data keys/);
  });
});

describe('compareWithRequest: what differs from the agent’s request', () => {
  it('is the same for an unchanged link without high-risk permissions', () => {
    const r = fromUrl(V1);
    expect(compareWithRequest(r, checkDraft(draftFromRequest(r))).same).toBe(true);
  });

  it('lists the high-risk permissions the owner has not ticked', () => {
    const r = fromUrl(V2);
    expect(compareWithRequest(r, checkDraft(draftFromRequest(r)))).toMatchObject({ same: false, notSelected: ['SUPER_STATICCALL'], added: [] });
  });

  it('lists unticked and added permissions', () => {
    const r = social();
    const diff = compareWithRequest(r, checkDraft({ ...draftFromRequest(r), permissions: bits('CALL', 'SETDATA', 'EXECUTE_RELAY_CALL', 'DEPLOY') }));
    expect(diff).toMatchObject({ same: false, notSelected: ['SIGN'], added: ['DEPLOY'] });
  });

  it('compares the restrictions entry by entry, as the agent does: an edited entry is one removed and one added', () => {
    const r = social();
    const draft = draftFromRequest(r);
    const diff = compareWithRequest(
      r,
      checkDraft({
        ...withCall(draft, 0, { functionInput: 'followBatch(address[])' }),
        allowedDataKeys: [{ id: 'k2', name: 'LSP5ReceivedAssets[]', key: LSP5_ARRAY, isPreset: true }],
      }),
    );
    expect(diff.callsRemoved.map((c) => c.raw)).toEqual([`0x${FOLLOW.slice(4)}`]);
    expect(diff.callsAdded.map((c) => c.selector)).toEqual(['0xcf8711c8']);
    expect(diff.keysRemoved).toEqual([LSP3 as Hex]);
    expect(diff.keysAdded).toEqual([LSP5_ARRAY as Hex]);
    expect(diff.same).toBe(false);
  });
});

describe('sameDraft: has the owner changed anything since the editor was prefilled', () => {
  it('ignores entry ids and a change that was undone', () => {
    const r = social();
    const first = draftFromRequest(r);
    const toggled = withCall({ ...first, permissions: first.permissions & ~PERMISSIONS.SIGN }, 0, { useAnyFunction: true });
    const undone = withCall({ ...toggled, permissions: toggled.permissions | PERMISSIONS.SIGN }, 0, { useAnyFunction: false });
    expect(sameDraft(first, draftFromRequest(r))).toBe(true);
    expect(sameDraft(first, toggled)).toBe(false);
    expect(sameDraft(first, undone)).toBe(true);
  });

  it('sees a removed entry and an edited data key', () => {
    const first = draftFromRequest(social());
    expect(sameDraft(first, { ...first, allowedCalls: first.allowedCalls.slice(1) })).toBe(false);
    expect(sameDraft(first, { ...first, allowedDataKeys: [{ ...first.allowedDataKeys[0], key: LSP5_ARRAY }] })).toBe(false);
  });
});

describe('allowedCallFromEntry: one editor entry as it would be stored', () => {
  it('decodes a valid entry and returns null for an unfinished one', () => {
    const [follow] = draftFromRequest(social()).allowedCalls;
    expect(allowedCallFromEntry(follow)).toMatchObject({ callTypes: 2, selector: '0x4dbf27cc', raw: `0x${FOLLOW.slice(4)}` });
    expect(allowedCallFromEntry({ ...follow, functionInput: 'follow(' })).toBeNull();
  });
});
