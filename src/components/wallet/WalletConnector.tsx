'use client';

import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import { ProfileMicroHeader } from '@/components/shared/ProfileIdentityCard';
import { useWallet } from '@/contexts/WalletContext';
import { shortenAddress } from '@/lib/utils/format';

interface WalletConnectorProps {
  className?: string;
  showNetworkBadge?: boolean;
  size?: 'default' | 'sm' | 'lg';
  variant?: 'default' | 'outline' | 'ghost';
}

/**
 * Unified wallet connection component.
 * Uses @lukso/up-modal for connection UI (UP Extension, UP Mobile, EOA wallets).
 * In mini-app context, connects via UP Provider instead.
 */
export function WalletConnector({
  className,
  showNetworkBadge = true,
  size = 'default',
  variant = 'default',
}: WalletConnectorProps) {
  const {
    isConnected,
    isConnecting,
    address,
    network,
    error,
    walletSource,
    isInMiniAppContext,
    connect,
    disconnect,
  } = useWallet();

  // Connected state
  if (isConnected && address) {
    return (
      <div className={`flex items-center gap-2 ${className || ''}`}>
        {showNetworkBadge && network && (
          <div className="hidden sm:block text-right">
            <p className="text-sm font-medium">{shortenAddress(address)}</p>
            <p className="text-xs text-muted-foreground capitalize">
              {network}
              {walletSource === 'up-provider' && ' (UP Provider)'}
              {walletSource === 'injected' && ' (Extension)'}
              {walletSource === 'walletconnect' && ' (WalletConnect)'}
            </p>
          </div>
        )}
        <Button variant="outline" size={size} onClick={disconnect}>
          Disconnect
        </Button>
      </div>
    );
  }

  // Connecting state
  if (isConnecting) {
    return (
      <Button disabled className={className} size={size}>
        <LoadingSpinner size="sm" className="mr-2" />
        {isInMiniAppContext ? 'Waiting for connection...' : 'Connecting...'}
      </Button>
    );
  }

  // Not connected
  return (
    <div className={`flex flex-col gap-2 ${className || ''}`}>
      <Button onClick={() => connect()} size={size} variant={variant}>
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
        {isInMiniAppContext ? 'Connect via UP' : 'Connect Wallet'}
      </Button>

      {isInMiniAppContext && (
        <p className="text-xs text-muted-foreground">
          Connect through Universal Everything to continue
        </p>
      )}

      {error && (
        <Alert variant="destructive" className="mt-2">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}

/**
 * Compact version for headers/nav.
 * Shows profile picture + name/address when connected.
 */
export function WalletConnectorCompact({ className }: { className?: string }) {
  const {
    isConnected,
    isConnecting,
    address,
    network,
    walletSource,
    connect,
    disconnect,
  } = useWallet();

  if (isConnecting) {
    return (
      <Button variant="outline" size="sm" disabled className={className}>
        <LoadingSpinner size="sm" className="mr-2" />
        Connecting...
      </Button>
    );
  }

  if (isConnected && address) {
    return (
      <Button
        variant="outline"
        size="sm"
        onClick={disconnect}
        className={`h-auto py-1.5 px-3 ${className}`}
      >
        <ProfileMicroHeader
          address={address}
          network={network}
        />
        {walletSource === 'up-provider' && (
          <span className="ml-1 text-xs opacity-70">UP</span>
        )}
      </Button>
    );
  }

  return (
    <Button variant="outline" size="sm" onClick={() => connect()} className={className}>
      Connect
    </Button>
  );
}
