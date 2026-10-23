import { describe, expect, it, vi } from 'vitest';
import { decodeFunctionData, type PublicClient } from 'viem';
import {
  buildRemoveControllerTransaction,
  buildSetDataTransaction,
  findEmptySlot,
  getControllerArrayLength,
} from './transaction';

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
import {
  DATA_KEYS,
  buildAddressPermissionsIndexKey,
  buildAllowedCallsKey,
  buildAllowedDataKeysKey,
  buildPermissionsKey,
} from '@/constants/dataKeys';

type MockPublicClient = PublicClient & {
  readContract: ReturnType<typeof vi.fn>;
};

const UP_ADDRESS = '0x9999999999999999999999999999999999999999';
const CONTROLLER = '0x1111111111111111111111111111111111111111';

function mockPublicClient(dataByKey: Record<string, `0x${string}`>): MockPublicClient {
  return {
    readContract: vi.fn(async ({ args }: { args: [`0x${string}`] }) => {
      return dataByKey[args[0]] ?? '0x';
    }),
  } as unknown as MockPublicClient;
}

describe('buildRemoveControllerTransaction', () => {
  it('clears permissions and the existing address array slot without changing array length', async () => {
    const controllerIndex = 1n;
    const client = mockPublicClient({
      [DATA_KEYS.AddressPermissionsArray]: '0x00000000000000000000000000000003',
      [buildAddressPermissionsIndexKey(0n)]: '0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      [buildAddressPermissionsIndexKey(controllerIndex)]: CONTROLLER,
      [buildAddressPermissionsIndexKey(2n)]: '0xbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
    });

    const tx = await buildRemoveControllerTransaction(
      client,
      UP_ADDRESS,
      CONTROLLER
    );

    expect(tx.controllerIndex).toBe(controllerIndex);
    expect(tx.keys).toEqual([
      buildPermissionsKey(CONTROLLER),
      buildAllowedCallsKey(CONTROLLER),
      buildAllowedDataKeysKey(CONTROLLER),
      buildAddressPermissionsIndexKey(controllerIndex),
    ]);
    expect(tx.values).toEqual(['0x', '0x', '0x', '0x']);
    expect(tx.keys).not.toContain(DATA_KEYS.AddressPermissionsArray);
    expect(tx.calldata).toMatch(/^0x/);
  });

  it('throws when the controller address is not present in AddressPermissions[]', async () => {
    const client = mockPublicClient({
      [DATA_KEYS.AddressPermissionsArray]: '0x00000000000000000000000000000002',
      [buildAddressPermissionsIndexKey(0n)]: '0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      [buildAddressPermissionsIndexKey(1n)]: '0xbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
    });

    await expect(
      buildRemoveControllerTransaction(client, UP_ADDRESS, CONTROLLER)
    ).rejects.toThrow('Controller address was not found in AddressPermissions[]');
  });
});

describe('findEmptySlot', () => {
  it('treats a cleared array entry as an empty reusable slot', async () => {
    const client = mockPublicClient({
      [buildAddressPermissionsIndexKey(0n)]: '0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      [buildAddressPermissionsIndexKey(1n)]: '0x',
      [buildAddressPermissionsIndexKey(2n)]: '0xbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
    });

    await expect(findEmptySlot(client, UP_ADDRESS, 3n)).resolves.toBe(1n);
  });

  it('fails instead of guessing when a slot cannot be read', async () => {
    const client = {
      readContract: vi.fn(async () => {
        throw new Error('rpc down');
      }),
    } as unknown as PublicClient;
    await expect(findEmptySlot(client, UP_ADDRESS, 2n)).rejects.toThrow('rpc down');
  });
});

describe('AddressPermissions[] length', () => {
  it('reads a 16-byte (uint128) length', async () => {
    const client = mockPublicClient({ [DATA_KEYS.AddressPermissionsArray]: '0x00000000000000000000000000000003' });
    await expect(getControllerArrayLength(client, UP_ADDRESS)).resolves.toBe(3n);
  });

  it('reads a 32-byte length written by older tools instead of treating it as 0', async () => {
    const client = mockPublicClient({ [DATA_KEYS.AddressPermissionsArray]: `0x${'0'.repeat(63)}3` });
    await expect(getControllerArrayLength(client, UP_ADDRESS)).resolves.toBe(3n);
  });

  it('refuses a length value of any other size', async () => {
    const client = mockPublicClient({ [DATA_KEYS.AddressPermissionsArray]: '0x0000000000000003' });
    await expect(getControllerArrayLength(client, UP_ADDRESS)).rejects.toThrow(/length/);
  });

  it('refuses an implausibly large controller list', async () => {
    const client = mockPublicClient({ [DATA_KEYS.AddressPermissionsArray]: '0x00000000000000010000000000000000' });
    await expect(getControllerArrayLength(client, UP_ADDRESS)).rejects.toThrow(/length/);
  });

  it('fails instead of returning 0 when the profile cannot be read', async () => {
    const client = {
      readContract: vi.fn(async () => {
        throw new Error('rpc down');
      }),
    } as unknown as PublicClient;
    await expect(getControllerArrayLength(client, UP_ADDRESS)).rejects.toThrow('rpc down');
  });
});

describe('buildSetDataTransaction (existing flow)', () => {
  it('appends after a 32-byte length instead of overwriting AddressPermissions[0]', async () => {
    const client = mockPublicClient({
      [DATA_KEYS.AddressPermissionsArray]: `0x${'0'.repeat(63)}2`,
      [buildAddressPermissionsIndexKey(0n)]: '0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      [buildAddressPermissionsIndexKey(1n)]: '0xbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
    });
    const calldata = await buildSetDataTransaction(client, UP_ADDRESS, CONTROLLER, 0x200000n);
    const { args } = decodeFunctionData({ abi: SET_DATA_BATCH_ABI, data: calldata });
    const [keys, values] = args as [string[], string[]];
    expect(keys).not.toContain(buildAddressPermissionsIndexKey(0n));
    expect(keys).toContain(buildAddressPermissionsIndexKey(2n));
    expect(values[keys.indexOf(DATA_KEYS.AddressPermissionsArray)]).toBe('0x00000000000000000000000000000003');
  });

  it('does not build a transaction when the profile cannot be read', async () => {
    const client = {
      readContract: vi.fn(async () => {
        throw new Error('rpc down');
      }),
    } as unknown as PublicClient;
    await expect(buildSetDataTransaction(client, UP_ADDRESS, CONTROLLER, 0x200000n)).rejects.toThrow('rpc down');
  });
});
