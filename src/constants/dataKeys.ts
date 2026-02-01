// LSP6 Data Keys for Controller Management

export const DATA_KEYS = {
  // AddressPermissions[] - Array of all controller addresses
  AddressPermissionsArray: '0xdf30dba06db6a30e65354d9a64c609861f089545ca58c6b4dbe31a5f338cb0e3',
  
  // Prefix for AddressPermissions[index] - append 16 bytes index
  AddressPermissionsArrayPrefix: '0xdf30dba06db6a30e65354d9a64c60986',
  
  // Prefix for AddressPermissions:Permissions:<address> - append 20 bytes address
  AddressPermissionsPermissionsPrefix: '0x4b80742de2bf82acb3630000',
  
  // Prefix for AddressPermissions:AllowedCalls:<address> - append 20 bytes address
  AddressPermissionsAllowedCallsPrefix: '0x4b80742de2bf393a64c70000',
  
  // Prefix for AddressPermissions:AllowedERC725YDataKeys:<address> - append 20 bytes address
  AddressPermissionsAllowedDataKeysPrefix: '0x4b80742de2bf866c29110000',
} as const;

// Helper to build AddressPermissions[index] key
export function buildAddressPermissionsIndexKey(index: bigint): `0x${string}` {
  const indexHex = index.toString(16).padStart(32, '0');
  return `${DATA_KEYS.AddressPermissionsArrayPrefix}${indexHex}` as `0x${string}`;
}

// Helper to build AddressPermissions:Permissions:<address> key
export function buildPermissionsKey(address: `0x${string}`): `0x${string}` {
  const addressNoPrefix = address.slice(2).toLowerCase();
  return `${DATA_KEYS.AddressPermissionsPermissionsPrefix}${addressNoPrefix}` as `0x${string}`;
}

// Helper to build AddressPermissions:AllowedCalls:<address> key
export function buildAllowedCallsKey(address: `0x${string}`): `0x${string}` {
  const addressNoPrefix = address.slice(2).toLowerCase();
  return `${DATA_KEYS.AddressPermissionsAllowedCallsPrefix}${addressNoPrefix}` as `0x${string}`;
}

// Helper to build AddressPermissions:AllowedERC725YDataKeys:<address> key
export function buildAllowedDataKeysKey(address: `0x${string}`): `0x${string}` {
  const addressNoPrefix = address.slice(2).toLowerCase();
  return `${DATA_KEYS.AddressPermissionsAllowedDataKeysPrefix}${addressNoPrefix}` as `0x${string}`;
}
