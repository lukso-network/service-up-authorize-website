'use client';

import { useState, useEffect, useCallback } from 'react';
import { createPublicClient, http, type PublicClient } from 'viem';
import { lukso, luksoTestnet } from '@/lib/utils/chains';
import { getNetworkFromChainId, type NetworkId } from '@/constants/endpoints';

interface UPProviderState {
  isConnected: boolean;
  isConnecting: boolean;
  address: `0x${string}` | null;
  contextAddress: `0x${string}` | null;
  chainId: number | null;
  network: NetworkId | null;
  error: string | null;
}

interface UseUPProviderReturn extends UPProviderState {
  connect: () => Promise<void>;
  disconnect: () => void;
  provider: unknown | null;
  publicClient: PublicClient | null;
  requestUpImport: (profileAddress: `0x${string}`) => Promise<`0x${string}` | null>;
  sendTransaction: (params: {
    to: `0x${string}`;
    data: `0x${string}`;
    value?: bigint;
  }) => Promise<`0x${string}` | null>;
}

export function useUPProvider(): UseUPProviderReturn {
  const [state, setState] = useState<UPProviderState>({
    isConnected: false,
    isConnecting: false,
    address: null,
    contextAddress: null,
    chainId: null,
    network: null,
    error: null,
  });

  const [provider, setProvider] = useState<unknown | null>(null);
  const [publicClient, setPublicClient] = useState<PublicClient | null>(null);

  // Initialize provider
  useEffect(() => {
    const initProvider = async () => {
      if (typeof window === 'undefined') return;
      
      // Check for UP Provider or standard ethereum provider
      const upProvider = (window as { lukso?: unknown }).lukso || 
                        (window as { ethereum?: unknown }).ethereum;
      
      if (upProvider) {
        setProvider(upProvider);
        
        // Check if already connected
        try {
          const accounts = await (upProvider as { request: (args: { method: string }) => Promise<string[]> }).request({ 
            method: 'eth_accounts' 
          });
          
          if (accounts && accounts.length > 0) {
            const chainIdHex = await (upProvider as { request: (args: { method: string }) => Promise<string> }).request({ 
              method: 'eth_chainId' 
            });
            const chainId = parseInt(chainIdHex, 16);
            const network = getNetworkFromChainId(chainId);
            
            setState(prev => ({
              ...prev,
              isConnected: true,
              address: accounts[0] as `0x${string}`,
              chainId,
              network,
            }));
            
            // Create public client
            const chain = chainId === 42 ? lukso : luksoTestnet;
            const client = createPublicClient({
              chain,
              transport: http(),
            });
            setPublicClient(client);
          }
        } catch (error) {
          console.error('Error checking existing connection:', error);
        }
      }
    };

    initProvider();
  }, []);

  // Listen for account changes
  useEffect(() => {
    if (!provider) return;
    
    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length === 0) {
        setState(prev => ({
          ...prev,
          isConnected: false,
          address: null,
        }));
      } else {
        setState(prev => ({
          ...prev,
          isConnected: true,
          address: accounts[0] as `0x${string}`,
        }));
      }
    };

    const handleChainChanged = (chainIdHex: string) => {
      const chainId = parseInt(chainIdHex, 16);
      const network = getNetworkFromChainId(chainId);
      setState(prev => ({
        ...prev,
        chainId,
        network,
      }));
      
      // Update public client
      const chain = chainId === 42 ? lukso : luksoTestnet;
      const client = createPublicClient({
        chain,
        transport: http(),
      });
      setPublicClient(client);
    };

    // Subscribe to events
    const p = provider as { on?: (event: string, handler: (...args: unknown[]) => void) => void };
    if (p.on) {
      p.on('accountsChanged', handleAccountsChanged as (...args: unknown[]) => void);
      p.on('chainChanged', handleChainChanged as (...args: unknown[]) => void);
    }

    return () => {
      const pr = provider as { removeListener?: (event: string, handler: (...args: unknown[]) => void) => void };
      if (pr.removeListener) {
        pr.removeListener('accountsChanged', handleAccountsChanged as (...args: unknown[]) => void);
        pr.removeListener('chainChanged', handleChainChanged as (...args: unknown[]) => void);
      }
    };
  }, [provider]);

  const connect = useCallback(async () => {
    if (!provider) {
      setState(prev => ({
        ...prev,
        error: 'No provider found. Please install the UP Browser Extension.',
      }));
      return;
    }

    setState(prev => ({ ...prev, isConnecting: true, error: null }));

    try {
      const accounts = await (provider as { request: (args: { method: string }) => Promise<string[]> }).request({ 
        method: 'eth_requestAccounts' 
      });
      
      const chainIdHex = await (provider as { request: (args: { method: string }) => Promise<string> }).request({ 
        method: 'eth_chainId' 
      });
      const chainId = parseInt(chainIdHex, 16);
      const network = getNetworkFromChainId(chainId);

      setState(prev => ({
        ...prev,
        isConnected: true,
        isConnecting: false,
        address: accounts[0] as `0x${string}`,
        chainId,
        network,
      }));

      // Create public client
      const chain = chainId === 42 ? lukso : luksoTestnet;
      const client = createPublicClient({
        chain,
        transport: http(),
      });
      setPublicClient(client);
    } catch (error) {
      console.error('Error connecting:', error);
      setState(prev => ({
        ...prev,
        isConnecting: false,
        error: error instanceof Error ? error.message : 'Failed to connect',
      }));
    }
  }, [provider]);

  const disconnect = useCallback(() => {
    setState({
      isConnected: false,
      isConnecting: false,
      address: null,
      contextAddress: null,
      chainId: null,
      network: null,
      error: null,
    });
  }, []);

  const requestUpImport = useCallback(async (
    profileAddress: `0x${string}`
  ): Promise<`0x${string}` | null> => {
    if (!provider) {
      setState(prev => ({
        ...prev,
        error: 'No provider available',
      }));
      return null;
    }

    try {
      const controllerAddress = await (provider as { request: (args: { method: string; params: unknown[] }) => Promise<string> }).request({
        method: 'up_import',
        params: [profileAddress],
      });
      
      return controllerAddress as `0x${string}`;
    } catch (error) {
      console.error('Error calling up_import:', error);
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Failed to call up_import',
      }));
      return null;
    }
  }, [provider]);

  const sendTransaction = useCallback(async (params: {
    to: `0x${string}`;
    data: `0x${string}`;
    value?: bigint;
  }): Promise<`0x${string}` | null> => {
    if (!provider || !state.address) {
      setState(prev => ({
        ...prev,
        error: 'Not connected',
      }));
      return null;
    }

    try {
      const txHash = await (provider as { request: (args: { method: string; params: unknown[] }) => Promise<string> }).request({
        method: 'eth_sendTransaction',
        params: [{
          from: state.address,
          to: params.to,
          data: params.data,
          value: params.value ? `0x${params.value.toString(16)}` : '0x0',
        }],
      });
      
      return txHash as `0x${string}`;
    } catch (error) {
      console.error('Error sending transaction:', error);
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Transaction failed',
      }));
      return null;
    }
  }, [provider, state.address]);

  return {
    ...state,
    connect,
    disconnect,
    provider,
    publicClient,
    requestUpImport,
    sendTransaction,
  };
}
