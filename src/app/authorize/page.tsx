'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ConnectButton } from '@/components/wallet/ConnectButton';
import { AuthorizationReview } from '@/components/migration/AuthorizationReview';
import { MigrationStatus } from '@/components/migration/MigrationStatus';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import { useUPProvider } from '@/hooks/useUPProvider';
import { useMigration } from '@/hooks/useMigration';
import { extractAuthPackageFromURL } from '@/lib/auth-package/decode';
import { getEndpoints } from '@/constants/endpoints';
import type { AuthorizationPackage } from '@/types/auth-package';

function AuthorizeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {
    isConnected,
    isConnecting,
    address,
    network,
    error: walletError,
    connect,
    disconnect,
    publicClient,
    sendTransaction,
  } = useUPProvider();

  const {
    status,
    error: migrationError,
    transactionHash,
    authorize,
    reset,
  } = useMigration();

  const [authPackage, setAuthPackage] = useState<AuthorizationPackage | null>(null);
  const [parseError, setParseError] = useState<string | null>(null);

  // Parse auth package from URL (only runs once on mount)
  useEffect(() => {
    const data = searchParams.get('data');
    const checksum = searchParams.get('cs');

    if (data && checksum) {
      // Use a microtask to avoid synchronous setState during render
      queueMicrotask(() => {
        try {
          const url = new URL(window.location.href);
          const pkg = extractAuthPackageFromURL(url);
          
          if (pkg) {
            setAuthPackage(pkg);
          } else {
            setParseError('Invalid authorization link. Please check and try again.');
          }
        } catch (err) {
          console.error('Error parsing auth package:', err);
          setParseError('Failed to parse authorization data');
        }
      });
    }
  }, [searchParams]);

  const handleAuthorize = async () => {
    if (!authPackage || !publicClient || !sendTransaction) {
      return;
    }

    await authorize(publicClient, sendTransaction, authPackage);
  };

  const handleCancel = () => {
    router.push('/');
  };

  const explorerUrl = authPackage 
    ? getEndpoints(authPackage.network).explorer 
    : undefined;

  // No auth package in URL - show manual entry or redirect
  if (!searchParams.has('data') && !parseError) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-md">
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Authorization Required</CardTitle>
            <CardDescription>
              Open an authorization link or scan a QR code to authorize a new controller
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground text-center">
              To authorize a new controller, you need to receive an authorization link from the device
              with the new wallet.
            </p>
            <Button variant="outline" onClick={() => router.push('/')} className="w-full">
              Go to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Parse error
  if (parseError) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-md">
        <Alert variant="destructive">
          <AlertDescription>{parseError}</AlertDescription>
        </Alert>
        <Button onClick={() => router.push('/')} className="w-full mt-4">
          Go to Home
        </Button>
      </div>
    );
  }

  // Loading auth package
  if (!authPackage) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  // Migration in progress or complete
  if (status !== 'idle') {
    return (
      <div className="container mx-auto px-4 py-8 max-w-md space-y-6">
        <MigrationStatus
          status={status}
          error={migrationError}
          transactionHash={transactionHash}
          explorerUrl={explorerUrl}
        />

        {status === 'success' && (
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              The new controller has been successfully authorized!
            </p>
            <Button onClick={() => router.push('/success')}>
              Continue
            </Button>
          </div>
        )}

        {status === 'error' && (
          <div className="flex gap-4">
            <Button variant="outline" onClick={reset} className="flex-1">
              Try Again
            </Button>
            <Button variant="outline" onClick={() => router.push('/')} className="flex-1">
              Cancel
            </Button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-md space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={handleCancel}>
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          Cancel
        </Button>
        <ConnectButton
          isConnected={isConnected}
          isConnecting={isConnecting}
          address={address}
          network={network}
          onConnect={connect}
          onDisconnect={disconnect}
        />
      </div>

      {/* Wallet Error */}
      {walletError && (
        <Alert variant="destructive">
          <AlertDescription>{walletError}</AlertDescription>
        </Alert>
      )}

      {/* Not Connected */}
      {!isConnected && (
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Connect Your Wallet</CardTitle>
            <CardDescription>
              Connect the wallet that currently controls this Universal Profile to authorize the new controller
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <Button onClick={connect} size="lg" disabled={isConnecting}>
              {isConnecting ? 'Connecting...' : 'Connect Wallet'}
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Authorization Review */}
      {isConnected && authPackage && (
        <AuthorizationReview
          authPackage={authPackage}
          isAuthorizing={false}
          onAuthorize={handleAuthorize}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
}

export default function AuthorizePage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-8 flex justify-center">
        <LoadingSpinner size="lg" />
      </div>
    }>
      <AuthorizeContent />
    </Suspense>
  );
}
