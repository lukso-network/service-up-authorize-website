// Exact-state controller grant for the agent request flow.
//
// The owner reviews one controller's complete final state (permissions, AllowedCalls,
// AllowedERC725YDataKeys). The transaction sets exactly that state and nothing else:
//  - only this controller's own keys and, for a controller not yet listed, one
//    AddressPermissions[] slot (an empty slot is reused, otherwise the list grows by one);
//  - keys whose stored value already equals the reviewed value are not written;
//  - every read error stops the plan (nothing is guessed).
import { encodeFunctionData, pad, toHex, type Hex, type PublicClient } from 'viem';
import {
  DATA_KEYS,
  buildAddressPermissionsIndexKey,
  buildAllowedCallsKey,
  buildAllowedDataKeysKey,
  buildPermissionsKey,
} from '@/constants/dataKeys';
import { permissionsToHex } from '@/constants/permissions';
import { UP_ABI, getControllerArrayLength, normalizeAddressData } from './transaction';

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
const MAX_PERMISSIONS = (1n << 256n) - 1n;

export interface ControllerState {
  permissions: bigint;
  /** Stored AllowedCalls, lowercase, '0x' when none. */
  allowedCalls: Hex;
  /** Stored AllowedERC725YDataKeys, lowercase, '0x' when none. */
  allowedDataKeys: Hex;
  /** Index of this controller in AddressPermissions[], or null when it is not listed. */
  arrayIndex: bigint | null;
  arrayLength: bigint;
  /** First cleared AddressPermissions[] slot, or null. */
  firstEmptySlot: bigint | null;
}

export interface GrantTarget {
  permissions: bigint;
  /** CompactBytesArray to store, or null for none. */
  allowedCalls: Hex | null;
  allowedDataKeys: Hex | null;
}

export interface GrantPlan {
  current: ControllerState;
  target: { permissions: bigint; allowedCalls: Hex; allowedDataKeys: Hex };
  isNewController: boolean;
  keys: Hex[];
  values: Hex[];
  /** setDataBatch calldata, or null when the controller already has exactly the reviewed state. */
  calldata: Hex | null;
  changes: {
    array?: { index: bigint; newLength?: bigint };
    permissions?: { from: bigint; to: bigint };
    allowedCalls?: { from: Hex; to: Hex };
    allowedDataKeys?: { from: Hex; to: Hex };
  };
}

async function getData(client: PublicClient, profile: Hex, key: Hex): Promise<Hex> {
  const value = await client.readContract({ address: profile, abi: UP_ABI, functionName: 'getData', args: [key] });
  return (typeof value === 'string' && value.startsWith('0x') ? value.toLowerCase() : '0x') as Hex;
}

/** Reads one controller's permissions, lists and position in AddressPermissions[]. Read errors are thrown. */
export async function readControllerState(client: PublicClient, profile: Hex, controller: Hex): Promise<ControllerState> {
  const [permissionsRaw, allowedCalls, allowedDataKeys, arrayLength] = await Promise.all([
    getData(client, profile, buildPermissionsKey(controller)),
    getData(client, profile, buildAllowedCallsKey(controller)),
    getData(client, profile, buildAllowedDataKeysKey(controller)),
    getControllerArrayLength(client, profile),
  ]);
  if (permissionsRaw.length > 66) throw new Error('The stored permission value of this address is malformed; refusing to change it.');

  const wanted = controller.toLowerCase();
  let arrayIndex: bigint | null = null;
  let firstEmptySlot: bigint | null = null;
  for (let i = 0n; i < arrayLength; i++) {
    const slot = await getData(client, profile, buildAddressPermissionsIndexKey(i));
    const address = normalizeAddressData(slot);
    if (arrayIndex === null && address === wanted) arrayIndex = i;
    if (firstEmptySlot === null && (slot === '0x' || address === ZERO_ADDRESS)) firstEmptySlot = i;
  }

  return {
    permissions: permissionsRaw === '0x' ? 0n : BigInt(permissionsRaw),
    allowedCalls,
    allowedDataKeys,
    arrayIndex,
    arrayLength,
    firstEmptySlot,
  };
}

/** Plans the transaction that gives `controller` exactly the reviewed state on `profile`. */
export async function planControllerGrant(client: PublicClient, profile: Hex, controller: Hex, target: GrantTarget): Promise<GrantPlan> {
  if (target.permissions <= 0n) throw new Error('Select at least one permission.');
  if (target.permissions > MAX_PERMISSIONS) throw new Error('The permission value does not fit in 32 bytes.');
  if (controller.toLowerCase() === profile.toLowerCase()) throw new Error('The agent address is the profile itself; a profile cannot be its own controller.');

  const current = await readControllerState(client, profile, controller);
  const next = {
    permissions: target.permissions,
    allowedCalls: (target.allowedCalls ?? '0x').toLowerCase() as Hex,
    allowedDataKeys: (target.allowedDataKeys ?? '0x').toLowerCase() as Hex,
  };

  const keys: Hex[] = [];
  const values: Hex[] = [];
  const changes: GrantPlan['changes'] = {};

  if (current.arrayIndex === null) {
    if (current.firstEmptySlot !== null) {
      keys.push(buildAddressPermissionsIndexKey(current.firstEmptySlot));
      values.push(controller.toLowerCase() as Hex);
      changes.array = { index: current.firstEmptySlot };
    } else {
      const newLength = current.arrayLength + 1n;
      keys.push(DATA_KEYS.AddressPermissionsArray as Hex, buildAddressPermissionsIndexKey(current.arrayLength));
      values.push(pad(toHex(newLength), { size: 16 }), controller.toLowerCase() as Hex);
      changes.array = { index: current.arrayLength, newLength };
    }
  }
  if (current.permissions !== next.permissions) {
    keys.push(buildPermissionsKey(controller));
    values.push(permissionsToHex(next.permissions));
    changes.permissions = { from: current.permissions, to: next.permissions };
  }
  if (current.allowedCalls !== next.allowedCalls) {
    keys.push(buildAllowedCallsKey(controller));
    values.push(next.allowedCalls);
    changes.allowedCalls = { from: current.allowedCalls, to: next.allowedCalls };
  }
  if (current.allowedDataKeys !== next.allowedDataKeys) {
    keys.push(buildAllowedDataKeysKey(controller));
    values.push(next.allowedDataKeys);
    changes.allowedDataKeys = { from: current.allowedDataKeys, to: next.allowedDataKeys };
  }

  return {
    current,
    target: next,
    isNewController: current.permissions === 0n,
    keys,
    values,
    calldata: keys.length ? encodeFunctionData({ abi: UP_ABI, functionName: 'setDataBatch', args: [keys, values] }) : null,
    changes,
  };
}

/** Compares a controller's stored state with the reviewed target (used to verify after the transaction). */
export function grantMatches(state: ControllerState, target: GrantTarget): { matches: boolean; differences: string[] } {
  const differences: string[] = [];
  if (state.permissions !== target.permissions) differences.push('permissions');
  if (state.allowedCalls.toLowerCase() !== (target.allowedCalls ?? '0x').toLowerCase()) differences.push('allowedCalls');
  if (state.allowedDataKeys.toLowerCase() !== (target.allowedDataKeys ?? '0x').toLowerCase()) differences.push('allowedDataKeys');
  if (state.arrayIndex === null) differences.push('controller list');
  return { matches: differences.length === 0, differences };
}
