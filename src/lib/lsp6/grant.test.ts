import { describe, expect, it, vi } from 'vitest';
import { decodeFunctionData, type Hex, type PublicClient } from 'viem';
import { readControllerState, planControllerGrant, grantMatches } from './grant';
import {
  DATA_KEYS,
  buildAddressPermissionsIndexKey,
  buildAllowedCallsKey,
  buildAllowedDataKeysKey,
  buildPermissionsKey,
} from '@/constants/dataKeys';

const PROFILE = '0x9999999999999999999999999999999999999999';
const AGENT = '0x5E1c0de0F9B12c2C3ab5a9C1f1B7D0d2A6E4b3C1';
const OTHER_A = '0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const OTHER_B = '0xbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb';
// one AllowedCalls entry: CALL → LSP26 registry, any standard, follow(address)
const CALLS = `0x${'0020'}${'00000002'}${'f01103e5a9909fc0dbe8166da7085e0285daddca'}${'ffffffff'}${'4dbf27cc'}` as Hex;
const KEYS: Hex = '0x00205ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5';
const LEN = (n: number) => `0x${n.toString(16).padStart(32, '0')}` as Hex;
const PERM = (v: bigint) => `0x${v.toString(16).padStart(64, '0')}` as Hex;

const SET_DATA_BATCH_ABI = [
  {
    inputs: [
      { name: 'dataKeys', type: 'bytes32[]' },
      { name: 'dataValues', type: 'bytes[]' },
    ],
    name: 'setDataBatch',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
] as const;

function client(data: Record<string, Hex>): PublicClient {
  return {
    readContract: vi.fn(async ({ args }: { args: [Hex] }) => data[args[0]] ?? '0x'),
  } as unknown as PublicClient;
}

function profileWith(extra: Record<string, Hex> = {}): Record<string, Hex> {
  return {
    [DATA_KEYS.AddressPermissionsArray]: LEN(2),
    [buildAddressPermissionsIndexKey(0n)]: OTHER_A,
    [buildAddressPermissionsIndexKey(1n)]: OTHER_B,
    [buildPermissionsKey(OTHER_A)]: PERM(0x7f3f7fn),
    [buildPermissionsKey(OTHER_B)]: PERM(0x7f3f7fn),
    ...extra,
  };
}

function decoded(calldata: Hex) {
  const { functionName, args } = decodeFunctionData({ abi: SET_DATA_BATCH_ABI, data: calldata });
  const [keys, values] = args as [Hex[], Hex[]];
  return { functionName, keys, values };
}

const ownKeys = (address: string) => [buildPermissionsKey(address as Hex), buildAllowedCallsKey(address as Hex), buildAllowedDataKeysKey(address as Hex)];

describe('readControllerState', () => {
  it('reads a controller that is not on the profile yet', async () => {
    const s = await readControllerState(client(profileWith()), PROFILE, AGENT);
    expect(s).toEqual({ permissions: 0n, allowedCalls: '0x', allowedDataKeys: '0x', arrayIndex: null, arrayLength: 2n, firstEmptySlot: null });
  });

  it('finds an existing controller, its lists and a reusable empty slot', async () => {
    const s = await readControllerState(
      client(
        profileWith({
          [DATA_KEYS.AddressPermissionsArray]: LEN(4),
          [buildAddressPermissionsIndexKey(2n)]: '0x',
          [buildAddressPermissionsIndexKey(3n)]: AGENT.toLowerCase() as Hex,
          [buildPermissionsKey(AGENT)]: PERM(0x200000n),
          [buildAllowedCallsKey(AGENT)]: CALLS.toUpperCase().replace('0X', '0x') as Hex,
        }),
      ),
      PROFILE,
      AGENT,
    );
    expect(s.permissions).toBe(0x200000n);
    expect(s.allowedCalls).toBe(CALLS);
    expect(s.arrayIndex).toBe(3n);
    expect(s.firstEmptySlot).toBe(2n);
  });

  it('fails closed when any read fails', async () => {
    const failing = {
      readContract: vi.fn(async ({ args }: { args: [Hex] }) => {
        if (args[0] === buildAddressPermissionsIndexKey(1n)) throw new Error('rpc timeout');
        return profileWith()[args[0]] ?? '0x';
      }),
    } as unknown as PublicClient;
    await expect(readControllerState(failing, PROFILE, AGENT)).rejects.toThrow('rpc timeout');
  });
});

describe('planControllerGrant', () => {
  const target = { permissions: 0x800n | 0x400000n, allowedCalls: CALLS, allowedDataKeys: null };

  it('adds a new controller at the end of the list with exactly the reviewed state', async () => {
    const plan = await planControllerGrant(client(profileWith()), PROFILE, AGENT, target);
    expect(plan.isNewController).toBe(true);
    expect(plan.calldata).not.toBeNull();
    const { functionName, keys, values } = decoded(plan.calldata!);
    expect(functionName).toBe('setDataBatch');
    expect(keys).toEqual([DATA_KEYS.AddressPermissionsArray, buildAddressPermissionsIndexKey(2n), buildPermissionsKey(AGENT), buildAllowedCallsKey(AGENT)]);
    expect(values).toEqual([LEN(3), AGENT.toLowerCase(), PERM(0x400800n), CALLS]);
  });

  it('reuses an empty slot instead of growing the list', async () => {
    const plan = await planControllerGrant(
      client(profileWith({ [DATA_KEYS.AddressPermissionsArray]: LEN(3), [buildAddressPermissionsIndexKey(2n)]: '0x0000000000000000000000000000000000000000' })),
      PROFILE,
      AGENT,
      target,
    );
    const { keys, values } = decoded(plan.calldata!);
    expect(keys).not.toContain(DATA_KEYS.AddressPermissionsArray);
    expect(keys[0]).toBe(buildAddressPermissionsIndexKey(2n));
    expect(values[0]).toBe(AGENT.toLowerCase());
  });

  it('does not list a controller twice when it is already in AddressPermissions[] without permissions', async () => {
    const plan = await planControllerGrant(
      client(profileWith({ [DATA_KEYS.AddressPermissionsArray]: LEN(3), [buildAddressPermissionsIndexKey(2n)]: AGENT.toLowerCase() as Hex })),
      PROFILE,
      AGENT,
      target,
    );
    const { keys } = decoded(plan.calldata!);
    expect(keys).toEqual([buildPermissionsKey(AGENT), buildAllowedCallsKey(AGENT)]);
  });

  it('only writes what changes for an existing controller and clears a list the request does not have', async () => {
    const plan = await planControllerGrant(
      client(
        profileWith({
          [DATA_KEYS.AddressPermissionsArray]: LEN(3),
          [buildAddressPermissionsIndexKey(2n)]: AGENT.toLowerCase() as Hex,
          [buildPermissionsKey(AGENT)]: PERM(0x400800n | 0x200000n),
          [buildAllowedCallsKey(AGENT)]: CALLS,
          [buildAllowedDataKeysKey(AGENT)]: KEYS,
        }),
      ),
      PROFILE,
      AGENT,
      target,
    );
    expect(plan.isNewController).toBe(false);
    const { keys, values } = decoded(plan.calldata!);
    expect(keys).toEqual([buildPermissionsKey(AGENT), buildAllowedDataKeysKey(AGENT)]);
    expect(values).toEqual([PERM(0x400800n), '0x']);
    expect(plan.changes.permissions).toEqual({ from: 0x600800n, to: 0x400800n });
    expect(plan.changes.allowedDataKeys).toEqual({ from: KEYS, to: '0x' });
    expect(plan.changes.allowedCalls).toBeUndefined();
  });

  it('builds nothing when the controller already has exactly the reviewed state', async () => {
    const plan = await planControllerGrant(
      client(
        profileWith({
          [DATA_KEYS.AddressPermissionsArray]: LEN(3),
          [buildAddressPermissionsIndexKey(2n)]: AGENT.toLowerCase() as Hex,
          [buildPermissionsKey(AGENT)]: PERM(0x400800n),
          [buildAllowedCallsKey(AGENT)]: CALLS,
        }),
      ),
      PROFILE,
      AGENT,
      target,
    );
    expect(plan.calldata).toBeNull();
    expect(plan.keys).toEqual([]);
  });

  it('never writes the keys of other controllers', async () => {
    const plan = await planControllerGrant(client(profileWith()), PROFILE, AGENT, { permissions: 0x40000n, allowedCalls: null, allowedDataKeys: KEYS });
    const allowed = new Set<string>([DATA_KEYS.AddressPermissionsArray, buildAddressPermissionsIndexKey(2n), ...ownKeys(AGENT)]);
    for (const k of decoded(plan.calldata!).keys) expect(allowed.has(k), k).toBe(true);
    for (const k of [...ownKeys(OTHER_A), ...ownKeys(OTHER_B), buildAddressPermissionsIndexKey(0n), buildAddressPermissionsIndexKey(1n)]) {
      expect(plan.keys).not.toContain(k);
    }
  });

  it('refuses an empty permission set', async () => {
    await expect(planControllerGrant(client(profileWith()), PROFILE, AGENT, { permissions: 0n, allowedCalls: null, allowedDataKeys: null })).rejects.toThrow(/permission/);
  });

  it('refuses to make the profile its own controller', async () => {
    await expect(planControllerGrant(client(profileWith()), PROFILE, PROFILE, target)).rejects.toThrow(/itself/);
  });
});

describe('grantMatches', () => {
  const state = { permissions: 0x400800n, allowedCalls: CALLS, allowedDataKeys: '0x' as Hex, arrayIndex: 2n, arrayLength: 3n, firstEmptySlot: null };

  it('matches the exact reviewed state', () => {
    expect(grantMatches(state, { permissions: 0x400800n, allowedCalls: CALLS, allowedDataKeys: null })).toEqual({ matches: true, differences: [] });
  });

  it('reports every difference', () => {
    const r = grantMatches({ ...state, permissions: 0x400c00n, arrayIndex: null }, { permissions: 0x400800n, allowedCalls: null, allowedDataKeys: KEYS });
    expect(r.matches).toBe(false);
    expect(r.differences).toEqual(['permissions', 'allowedCalls', 'allowedDataKeys', 'controller list']);
  });
});
