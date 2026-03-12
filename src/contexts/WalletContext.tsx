'use client';

/**
 * Wallet Context
 *
 * Provides unified wallet connection state across the application.
 * Uses @lukso/up-modal for all connection types including UP Provider (iframe).
 * UP Provider is handled internally by up-modal via embeddedWallet config.
 *
 * @module contexts/WalletContext
 */

import { createContext, useContext, useState, useEffect, useCallback, useMemo, useRef, type ReactNode } from 'react';
import { useAccount, useChainId, useDisconnect as useWagmiDisconnect, useSendTransaction, useSwitchChain } from 'wagmi';
import { createPublicClient, http, type PublicClient } from 'viem';
import { lukso, luksoTestnet } from '@/lib/utils/chains';
import { getNetworkFromChainId, type NetworkId } from '@/constants/endpoints';
import { createLogger, logAppStartup } from '@/lib/utils/debug';
import type { LuksoConnector } from '@lukso/up-modal';

// ============================================================================
// DEBUG LOGGING
// ============================================================================

const logger = createLogger('[WalletContext]');

if (typeof window !== 'undefined') {
  logAppStartup();
}

// ============================================================================
// TYPES
// ============================================================================

interface EIP1193Provider {
  request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
}

export type WalletSource = 'up-provider' | 'injected' | 'walletconnect' | null;

// ============================================================================
// CONTEXT TYPES
// ============================================================================

interface WalletContextState {
  isConnected: boolean;
  isConnecting: boolean;
  address: `0x${string}` | null;
  contextAddress: `0x${string}` | null;
  chainId: number | null;
  network: NetworkId | null;
  error: string | null;
  walletSource: WalletSource;
  isInMiniAppContext: boolean;
  isProviderReady: boolean;
  publicClient: PublicClient | null;
}

interface WalletContextActions {
  connect: () => Promise<void>;
  disconnect: () => void;
  sendTransaction: (params: {
    to: `0x${string}`;
    data: `0x${string}`;
    value?: bigint;
  }) => Promise<`0x${string}` | null>;
  requestUpImport: (profileAddress: `0x${string}`) => Promise<{ controllerAddress: `0x${string}` } | null>;
  isContractAddress: (address: `0x${string}`) => Promise<boolean>;
}

type WalletContextValue = WalletContextState & WalletContextActions;

// ============================================================================
// CONTEXT
// ============================================================================

const WalletContext = createContext<WalletContextValue | null>(null);

// ============================================================================
// HELPERS
// ============================================================================

function isInIframe(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
}

function createClientForChain(chainId: number): PublicClient {
  const chain = chainId === 42 ? lukso : luksoTestnet;
  return createPublicClient({ chain, transport: http() });
}

// ============================================================================
// PROVIDER COMPONENT
// ============================================================================

interface WalletContextProviderProps {
  children: ReactNode;
  luksoConnector: LuksoConnector;
}

export function WalletContextProvider({ children, luksoConnector }: WalletContextProviderProps) {
  // Wagmi state (from up-modal's wagmi config)
  const {
    address: wagmiAddress,
    isConnected: wagmiConnected,
    isConnecting: wagmiConnecting,
    chainId: wagmiAccountChainId,
    connector: wagmiConnector,
  } = useAccount();
  const wagmiChainId = useChainId();
  const { disconnect: wagmiDisconnect } = useWagmiDisconnect();
  const { sendTransactionAsync } = useSendTransaction();
  const { switchChainAsync } = useSwitchChain();

  // General state
  const [inMiniAppContext, setInMiniAppContext] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [publicClient, setPublicClient] = useState<PublicClient | null>(null);
  const [initialized, setInitialized] = useState(false);

  // Track explicit disconnects to prevent auto-reconnection
  const manuallyDisconnected = useRef(false);

  // ========================================================================
  // INITIALIZATION
  // ========================================================================

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setInMiniAppContext(isInIframe());
    setInitialized(true);
  }, []);

  // ========================================================================
  // WAGMI STATE SYNC
  // ========================================================================

  useEffect(() => {
    if (wagmiConnected && wagmiAddress) {
      if (manuallyDisconnected.current) {
        logger.log('Wagmi auto-reconnected but user manually disconnected — forcing disconnect');
        wagmiDisconnect();
        return;
      }
      logger.log('Wagmi connected:', wagmiAddress);
      setPublicClient(createClientForChain(wagmiChainId));
    }
  }, [wagmiConnected, wagmiAddress, wagmiChainId, wagmiDisconnect]);

  // ========================================================================
  // COMPUTED STATE
  // ========================================================================

  const isConnected = wagmiConnected;
  const isConnecting = wagmiConnecting;
  const address = wagmiAddress || null;
  const chainId = wagmiChainId || null;
  const network = chainId ? getNetworkFromChainId(chainId) : null;
  const isProviderReady = wagmiConnected;

  const walletSource = useMemo<WalletSource>(() => {
    if (!wagmiConnected || !wagmiConnector) return null;
    if (wagmiConnector.id === 'up-provider') return 'up-provider';
    if (wagmiConnector.type === 'walletConnect') return 'walletconnect';
    return 'injected';
  }, [wagmiConnected, wagmiConnector]);

  const contextAddress = useMemo<`0x${string}` | null>(() => {
    // In mini-app context, the wagmi connector may expose contextAccounts
    // For now, return null — up-modal manages this internally
    return null;
  }, []);

  // ========================================================================
  // ACTIONS
  // ========================================================================

  const connect = useCallback(async () => {
    logger.log('=== CONNECT CALLED ===');
    manuallyDisconnected.current = false;
    setError(null);

    // up-modal handles all connection types including UP Provider in iframe
    logger.log('Opening UP Modal');
    luksoConnector.showSignInModal();
  }, [luksoConnector]);

  const disconnect = useCallback(() => {
    logger.log('=== DISCONNECT ===');
    manuallyDisconnected.current = true;

    wagmiDisconnect();
    luksoConnector.closeModal();
    setError(null);

    logger.success('Disconnected');
  }, [wagmiDisconnect, luksoConnector]);

  const sendTransaction = useCallback(async (params: {
    to: `0x${string}`;
    data: `0x${string}`;
    value?: bigint;
  }): Promise<`0x${string}` | null> => {
    if (!isConnected || !address) {
      logger.error('sendTransaction called but not connected');
      setError('Not connected');
      return null;
    }

    try {
      const targetChainId = chainId ?? 42;
      const actualWalletChain = wagmiAccountChainId ?? wagmiChainId;
      if (actualWalletChain !== targetChainId) {
        logger.log('Switching wallet chain from', actualWalletChain, 'to', targetChainId);
        await switchChainAsync({ chainId: targetChainId });
      }
      const hash = await sendTransactionAsync({
        chainId: targetChainId,
        to: params.to,
        data: params.data,
        value: params.value,
      });
      return hash;
    } catch (err) {
      logger.error('Transaction failed:', err);
      setError(err instanceof Error ? err.message : 'Transaction failed');
      return null;
    }
  }, [isConnected, address, sendTransactionAsync, chainId, wagmiAccountChainId, wagmiChainId, switchChainAsync]);

  /**
   * Request up_import — asks the wallet to provide a controller address.
   * Gets the raw provider from the wagmi connector.
   */
  const requestUpImport = useCallback(async (
    profileAddress: `0x${string}`
  ): Promise<{ controllerAddress: `0x${string}` } | null> => {
    logger.log('=== UP_IMPORT ===', { profileAddress, walletSource });

    if (walletSource === 'walletconnect') {
      logger.log('WalletConnect does not support up_import — use EOA fallback');
      return null;
    }

    // Get the raw provider from the wagmi connector
    if (wagmiConnector) {
      try {
        const provider = await wagmiConnector.getProvider() as EIP1193Provider;
        if (provider) {
          return tryUpImport(provider, profileAddress, wagmiConnector.name);
        }
      } catch (err) {
        logger.warn('Failed to get provider from connector:', err);
      }
    }

    logger.log('up_import not available for current wallet source');
    return null;
  }, [walletSource, wagmiConnector]);

  async function tryUpImport(
    provider: EIP1193Provider,
    profileAddress: `0x${string}`,
    providerName: string
  ): Promise<{ controllerAddress: `0x${string}` } | null> {
    try {
      logger.log(`Trying up_import via ${providerName}...`);
      const result = await provider.request({
        method: 'up_import',
        params: [profileAddress],
      });

      if (result && typeof result === 'string') {
        logger.success(`up_import succeeded (${providerName}):`, result);
        return { controllerAddress: result as `0x${string}` };
      } else if (result && typeof result === 'object' && 'controllerAddress' in (result as object)) {
        logger.success(`up_import succeeded (${providerName}):`, result);
        return result as { controllerAddress: `0x${string}` };
      }

      logger.warn(`Unexpected up_import result format:`, result);
    } catch (err) {
      logger.warn(`up_import not available via ${providerName}:`, err);
    }
    return null;
  }

  const isContractAddress = useCallback(async (addr: `0x${string}`): Promise<boolean> => {
    const client = publicClient || createClientForChain(chainId ?? 4201);
    try {
      const code = await client.getCode({ address: addr });
      return code !== undefined && code !== '0x';
    } catch (err) {
      logger.error('Error checking contract address:', err);
      return false;
    }
  }, [publicClient, chainId]);

  // ========================================================================
  // DEBUG LOGGING
  // ========================================================================

  useEffect(() => {
    logger.log('State:', {
      isConnected,
      isConnecting,
      address,
      isProviderReady,
      walletSource,
      chainId,
      network,
      error,
    });
  }, [isConnected, isConnecting, address, isProviderReady, walletSource, chainId, network, error]);

  // ========================================================================
  // RENDER
  // ========================================================================

  const value: WalletContextValue = {
    isConnected,
    isConnecting,
    address,
    contextAddress,
    chainId,
    network,
    error,
    walletSource,
    isInMiniAppContext: inMiniAppContext,
    isProviderReady,
    publicClient,
    connect,
    disconnect,
    sendTransaction,
    requestUpImport,
    isContractAddress,
  };

  if (!initialized) {
    return null;
  }

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
}

// ============================================================================
// HOOK
// ============================================================================

export function useWallet() {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within WalletContextProvider');
  }
  return context;
}
