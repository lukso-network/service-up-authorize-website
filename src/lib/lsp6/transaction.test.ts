import { describe, expect, it, vi } from 'vitest';
import type { PublicClient } from 'viem';
import {
  buildRemoveControllerTransaction,
  findEmptySlot,
} from './transaction';
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
});
