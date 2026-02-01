// Authorization Package types for migration

export interface TargetAppInfo {
  name: string;
  icon?: string;
  url?: string;
}

export interface AuthorizationPackage {
  version: number;
  profileAddress: `0x${string}`;
  controllerAddress: `0x${string}`;
  requestedPermissions: string; // Hex string for serialization
  allowedCalls?: string;
  allowedDataKeys?: string;
  targetApp: TargetAppInfo;
  network: 'mainnet' | 'testnet';
  timestamp: number;
}

export interface EncodedAuthPackage {
  encoded: string;
  checksum: string;
}

export type MigrationStatus = 
  | 'idle'
  | 'connecting'
  | 'searching'
  | 'generating'
  | 'awaiting-authorization'
  | 'authorizing'
  | 'confirming'
  | 'verifying'
  | 'success'
  | 'error';

export interface MigrationState {
  status: MigrationStatus;
  error?: string;
  transactionHash?: string;
  authPackage?: AuthorizationPackage;
}
