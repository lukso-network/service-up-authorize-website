'use client';

import { type ReactNode, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, type Config } from 'wagmi';
import { setupLuksoConnector } from '@lukso/up-modal';
import type { LuksoConnector } from '@lukso/up-modal';
import { WalletContextProvider } from '@/contexts/WalletContext';

const queryClient = new QueryClient();

function isInIframe(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
}

interface WalletProviderProps {
  children: ReactNode;
}

export function WalletProvider({ children }: WalletProviderProps) {
  const [connector, setConnector] = useState<LuksoConnector | null>(null);
  const [wagmiConfig, setWagmiConfig] = useState<Config | null>(null);

  useEffect(() => {
    const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

    setupLuksoConnector({
      theme: 'light',
      ...(projectId ? { walletConnect: { projectId } } : {}),
      ...(isInIframe() ? { embeddedWallet: { enabled: true } } : {}),
      connectors: {
        eoa: false,
      },
    }).then((c) => {
      setConnector(c);
      setWagmiConfig(c.wagmiConfig);
    });
  }, []);

  if (!connector || !wagmiConfig) {
    return null;
  }

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <WalletContextProvider luksoConnector={connector}>
          {children}
        </WalletContextProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
