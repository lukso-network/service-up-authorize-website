// UP Provider types

export interface UPProvider {
  request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
  on: (event: string, callback: (...args: unknown[]) => void) => void;
  removeListener: (event: string, callback: (...args: unknown[]) => void) => void;
  isConnected: () => boolean;
}

export interface AccountsChangedEvent {
  accounts: `0x${string}`[];
}

export interface ContextAccountsChangedEvent {
  contextAccounts: `0x${string}`[];
}

export interface ChainChangedEvent {
  chainId: string;
}
