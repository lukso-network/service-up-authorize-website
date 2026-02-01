'use client';

import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import { shortenAddress } from '@/lib/utils/format';

interface ConnectButtonProps {
  isConnected: boolean;
  isConnecting: boolean;
  address: `0x${string}` | null;
  network: string | null;
  onConnect: () => void;
  onDisconnect: () => void;
}

export function ConnectButton({
  isConnected,
  isConnecting,
  address,
  network,
  onConnect,
  onDisconnect,
}: ConnectButtonProps) {
  if (isConnecting) {
    return (
      <Button disabled className="min-w-[160px]">
        <LoadingSpinner size="sm" className="mr-2" />
        Connecting...
      </Button>
    );
  }

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-2">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-medium">{shortenAddress(address)}</p>
          <p className="text-xs text-muted-foreground capitalize">{network}</p>
        </div>
        <Button variant="outline" onClick={onDisconnect}>
          Disconnect
        </Button>
      </div>
    );
  }

  return (
    <Button onClick={onConnect} className="min-w-[160px]">
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
      Connect Wallet
    </Button>
  );
}
