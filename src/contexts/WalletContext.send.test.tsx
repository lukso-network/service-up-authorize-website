import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import type { ReactNode } from 'react';
import type { LuksoConnector } from '@lukso/up-modal';

// Wallet state the mocked wagmi hooks report: the connector's actual chain and the config chain.
const state = vi.hoisted(() => ({
  walletChainId: 42 as number | undefined,
  sendTransactionAsync: vi.fn(),
  switchChainAsync: vi.fn(),
}));

vi.mock('wagmi', () => ({
  useAccount: () => ({
    address: '0x9a3DBCa554e9f6b9257aAa24010DA8377C57c17e',
    isConnected: true,
    isConnecting: false,
    chainId: state.walletChainId,
    connector: { id: 'io.lukso.up', type: 'injected', name: 'Universal Profiles' },
  }),
  useChainId: () => 42,
  useDisconnect: () => ({ disconnect: vi.fn() }),
  useSendTransaction: () => ({ sendTransactionAsync: state.sendTransactionAsync }),
  useSwitchChain: () => ({ switchChainAsync: state.switchChainAsync }),
}));

import { WalletContextProvider, useWallet } from './WalletContext';

const connector = { showSignInModal: vi.fn(), closeModal: vi.fn() } as unknown as LuksoConnector;
const wrapper = ({ children }: { children: ReactNode }) => <WalletContextProvider luksoConnector={connector}>{children}</WalletContextProvider>;
const tx = { to: '0x9a3DBCa554e9f6b9257aAa24010DA8377C57c17e' as const, data: '0x97902421' as const };

beforeEach(() => {
  state.walletChainId = 42;
  state.sendTransactionAsync.mockReset().mockResolvedValue('0xhash');
  state.switchChainAsync.mockReset().mockResolvedValue(undefined);
});

describe('WalletContext chain handling', () => {
  it('exposes the chain the wallet is actually on', () => {
    state.walletChainId = 4201;
    const { result } = renderHook(() => useWallet(), { wrapper });
    expect(result.current.walletChainId).toBe(4201);
  });

  it('sends on the required chain when the wallet is on it', async () => {
    const { result } = renderHook(() => useWallet(), { wrapper });
    let hash: string | null = null;
    await act(async () => {
      hash = await result.current.sendTransaction({ ...tx, chainId: 42 });
    });
    expect(hash).toBe('0xhash');
    expect(state.sendTransactionAsync).toHaveBeenCalledWith(expect.objectContaining({ chainId: 42 }));
    expect(state.switchChainAsync).not.toHaveBeenCalled();
  });

  it('refuses, without switching, when the wallet is on another chain than the required one', async () => {
    state.walletChainId = 4201;
    const { result } = renderHook(() => useWallet(), { wrapper });
    let hash: string | null = '0xunset';
    await act(async () => {
      hash = await result.current.sendTransaction({ ...tx, chainId: 42 });
    });
    expect(hash).toBeNull();
    expect(state.switchChainAsync).not.toHaveBeenCalled();
    expect(state.sendTransactionAsync).not.toHaveBeenCalled();
    expect(result.current.error).toMatch(/LUKSO Testnet/);
    expect(result.current.error).toMatch(/LUKSO\b/);
  });

  it('refuses when the wallet does not report its chain', async () => {
    state.walletChainId = undefined;
    const { result } = renderHook(() => useWallet(), { wrapper });
    let hash: string | null = '0xunset';
    await act(async () => {
      hash = await result.current.sendTransaction({ ...tx, chainId: 42 });
    });
    expect(hash).toBeNull();
    expect(state.sendTransactionAsync).not.toHaveBeenCalled();
  });

  it('keeps the previous behaviour for callers that do not require a chain', async () => {
    state.walletChainId = 4201;
    const { result } = renderHook(() => useWallet(), { wrapper });
    await act(async () => {
      await result.current.sendTransaction(tx);
    });
    expect(state.switchChainAsync).toHaveBeenCalledWith({ chainId: 42 });
    expect(state.sendTransactionAsync).toHaveBeenCalledWith(expect.objectContaining({ chainId: 42 }));
  });
});
