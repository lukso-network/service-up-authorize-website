'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createPublicClient, http } from 'viem';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { PermissionsEditor } from '@/components/migration/PermissionsEditor';
import { MigrationStatus } from '@/components/migration/MigrationStatus';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import { ProfileIdentityCard } from '@/components/shared/ProfileIdentityCard';
import { WalletConnector, WalletConnectorCompact } from '@/components/wallet/WalletConnector';
import { useWallet } from '@/contexts/WalletContext';
import { extractAuthPackageFromURL } from '@/lib/auth-package/decode';
import { shortenAddress } from '@/lib/utils/format';
import { chainLabel, lukso, luksoTestnet } from '@/lib/utils/chains';
import { CHAIN_IDS, getEndpoints } from '@/constants/endpoints';
import { authorizeLinkMode } from '@/lib/agent-request/parse';
import { AgentAuthorizeFlow } from '@/components/agent/AgentAuthorizeFlow';
import { PERMISSION_PRESETS, getActivePermissions, PERMISSION_LABELS, PERMISSIONS } from '@/constants/permissions';
import { buildRemoveControllerTransaction, buildSetDataTransaction } from '@/lib/lsp6/transaction';
import {
  encodeAllowedCalls,
  encodeAllowedDataKeys,
  convertEntriesToAllowedCalls,
  type AllowedCallEntry,
  type DataKeyEntry,
} from '@/lib/lsp6/allowedCalls';
import type { AuthorizationPackage } from '@/types/auth-package';
import type { Hex } from 'viem';

function AuthorizeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {
    address,
    isConnected,
    network,
    walletChainId,
    error: walletError,
    walletSource,
    isInMiniAppContext,
    sendTransaction,
    disconnect,
  } = useWallet();

  const [authPackage, setAuthPackage] = useState<AuthorizationPackage | null>(null);
  const [parseError, setParseError] = useState<string | null>(null);
  const [permissions, setPermissions] = useState<bigint>(PERMISSION_PRESETS.STANDARD_WALLET);
  const [status, setStatus] = useState<'idle' | 'authorizing' | 'confirming' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);
  const [txHash, setTxHash] = useState<`0x${string}` | null>(null);
  const [profileMatchError, setProfileMatchError] = useState<string | null>(null);
  const [isValidatingController, setIsValidatingController] = useState(false);
  const [transactionAction, setTransactionAction] = useState<'authorize' | 'remove'>('authorize');
  const [removeConfirmStep, setRemoveConfirmStep] = useState<0 | 1 | 2>(0);
  const [removeConfirmationText, setRemoveConfirmationText] = useState('');

  // Manual controller entry state
  const [manualControllerAddress, setManualControllerAddress] = useState('');
  const [isManualEntry, setIsManualEntry] = useState(false);
  const [manualEntryError, setManualEntryError] = useState<string | null>(null);

  // AllowedCalls and AllowedDataKeys state
  const [allowedCallEntries, setAllowedCallEntries] = useState<AllowedCallEntry[]>([]);
  const [allowedDataKeyEntries, setAllowedDataKeyEntries] = useState<DataKeyEntry[]>([]);

  // Parse auth package from URL (only runs once on mount)
  // Supports both plain-text format (?profile=...&controller=...&network=...)
  // and legacy base64 format (?data=...&cs=...)
  useEffect(() => {
    const hasPlainText = searchParams.get('profile') && searchParams.get('controller');
    const hasLegacy = searchParams.get('data') && searchParams.get('cs');
    const hasLinkParams = searchParams.has('profile') || searchParams.has('data') || searchParams.has('cs');

    if (!hasPlainText && !hasLegacy && hasLinkParams) {
      // An incomplete link used to leave the page on a spinner forever
      queueMicrotask(() => setParseError('Invalid authorization link. Please check and try again.'));
      return;
    }

    if (hasPlainText || hasLegacy) {
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

  // Watch for transaction confirmation
  useEffect(() => {
    if (!txHash || status !== 'confirming') return;

    const checkTx = async () => {
      try {
        const chain = authPackage?.network === 'mainnet' ? lukso : luksoTestnet;
        const client = createPublicClient({ chain, transport: http() });

        const receipt = await client.waitForTransactionReceipt({ hash: txHash });
        if (receipt.status === 'success') {
          setStatus('success');
        } else {
          setStatus('error');
          setError('Transaction failed');
        }
      } catch (err) {
        console.error('Error checking transaction:', err);
        // Don't set error - might just be waiting
      }
    };

    const interval = setInterval(checkTx, 3000);
    checkTx(); // Check immediately

    return () => clearInterval(interval);
  }, [txHash, status, authPackage?.network]);

  // Validate that connected wallet can authorize this profile
  // The connected wallet must BE the profile (not just a controller)
  // This is because users connect their UP directly, which returns the profile address
  useEffect(() => {
    if (!isConnected || !address || !authPackage) {
      setProfileMatchError(null);
      return;
    }

    setIsValidatingController(true);
    setProfileMatchError(null);

    // For manual entry, the profile IS the connected wallet and network comes from wallet
    if (isManualEntry) {
      // Update authPackage with connected wallet as profile and network
      const walletNetwork = network === 'mainnet' || network === 'testnet' ? network : 'mainnet';
      const needsProfileUpdate = authPackage.profileAddress.toLowerCase() !== address.toLowerCase();
      const needsNetworkUpdate = authPackage.network !== walletNetwork;

      if (needsProfileUpdate || needsNetworkUpdate) {
        setAuthPackage({
          ...authPackage,
          profileAddress: address as `0x${string}`,
          network: walletNetwork,
        });
      }
      setIsValidatingController(false);
      return;
    }

    // Check if connected wallet address matches the profile address
    // Users connect devices that return the profile address directly
    const connectedAddressLower = address.toLowerCase();
    const profileAddressLower = authPackage.profileAddress.toLowerCase();

    if (connectedAddressLower !== profileAddressLower) {
      setProfileMatchError(
        `Connected wallet ${shortenAddress(address)} does not match the profile being authorized. ` +
        `Please connect the Universal Profile ${shortenAddress(authPackage.profileAddress)} directly.`
      );
    }

    setIsValidatingController(false);
  }, [isConnected, address, authPackage, isManualEntry, network]);

  const closeRemoveConfirmation = () => {
    setRemoveConfirmStep(0);
    setRemoveConfirmationText('');
  };

  const handleAuthorize = async () => {
    if (!authPackage || !address) {
      setError('Missing authorization data or wallet connection');
      return;
    }

    setTransactionAction('authorize');
    setStatus('authorizing');
    setError(null);

    try {
      // Get public client for the network
      const chain = authPackage.network === 'mainnet' ? lukso : luksoTestnet;
      const publicClient = createPublicClient({
        chain,
        transport: http(),
      });

      // Encode AllowedCalls if any entries exist
      let encodedAllowedCalls: string | undefined;
      if (allowedCallEntries.length > 0) {
        const allowedCalls = convertEntriesToAllowedCalls(allowedCallEntries);
        encodedAllowedCalls = encodeAllowedCalls(allowedCalls);
      }

      // Encode AllowedDataKeys if any entries exist
      let encodedAllowedDataKeys: string | undefined;
      if (allowedDataKeyEntries.length > 0) {
        const dataKeys = allowedDataKeyEntries.map(e => e.key as Hex);
        encodedAllowedDataKeys = encodeAllowedDataKeys(dataKeys);
      }

      // Build the transaction to add the controller with selected permissions
      const txData = await buildSetDataTransaction(
        publicClient,
        authPackage.profileAddress,
        authPackage.controllerAddress,
        permissions,
        encodedAllowedCalls,
        encodedAllowedDataKeys
      );

      // Send the transaction using our unified wallet context, only on the link's network
      const hash = await sendTransaction({
        to: authPackage.profileAddress,
        data: txData,
        chainId: CHAIN_IDS[authPackage.network],
      });

      if (hash) {
        setTxHash(hash);
        setStatus('confirming');
      } else {
        setStatus('error');
        setError('Transaction was rejected or failed');
      }
    } catch (err) {
      console.error('Error authorizing:', err);
      setError(err instanceof Error ? err.message : 'Failed to authorize controller');
      setStatus('error');
    }
  };

  const handleRemoveController = async () => {
    if (!authPackage || !address) {
      setError('Missing authorization data or wallet connection');
      return;
    }

    closeRemoveConfirmation();
    setTransactionAction('remove');
    setStatus('authorizing');
    setError(null);

    try {
      const chain = authPackage.network === 'mainnet' ? lukso : luksoTestnet;
      const publicClient = createPublicClient({
        chain,
        transport: http(),
      });

      const { calldata } = await buildRemoveControllerTransaction(
        publicClient,
        authPackage.profileAddress,
        authPackage.controllerAddress
      );

      const hash = await sendTransaction({
        to: authPackage.profileAddress,
        data: calldata,
        chainId: CHAIN_IDS[authPackage.network],
      });

      if (hash) {
        setTxHash(hash);
        setStatus('confirming');
      } else {
        setStatus('error');
        setError('Removal transaction was rejected or failed');
      }
    } catch (err) {
      console.error('Error removing controller key:', err);
      setError(err instanceof Error ? err.message : 'Failed to remove controller key');
      setStatus('error');
    }
  };

  const handleCancel = () => {
    disconnect();
    router.push('/');
  };

  const handleReset = () => {
    setStatus('idle');
    setError(null);
    setTxHash(null);
  };

  const handleManualControllerSubmit = () => {
    setManualEntryError(null);

    // Validate address format
    const trimmedAddress = manualControllerAddress.trim();
    if (!trimmedAddress) {
      setManualEntryError('Please enter a controller address');
      return;
    }

    // Check if it's a valid Ethereum address format
    if (!/^0x[a-fA-F0-9]{40}$/.test(trimmedAddress)) {
      setManualEntryError('Invalid address format. Must be a 42-character hex address starting with 0x');
      return;
    }

    // Create auth package with manual controller
    // Profile address will be set when wallet connects (in the validation useEffect)
    const manualAuthPackage: AuthorizationPackage = {
      version: 1,
      profileAddress: '0x0000000000000000000000000000000000000000' as `0x${string}`, // Placeholder, will be set from connected wallet
      controllerAddress: trimmedAddress as `0x${string}`,
      requestedPermissions: PERMISSION_PRESETS.STANDARD_WALLET.toString(16),
      targetApp: {
        name: 'Manual Authorization',
      },
      network: 'mainnet', // Default to mainnet
      timestamp: Date.now(),
    };

    setAuthPackage(manualAuthPackage);
    setIsManualEntry(true);
  };

  const explorerUrl = authPackage
    ? getEndpoints(authPackage.network).explorer
    : undefined;

  // Check for dangerous permissions
  const hasDangerousPermissions =
    (permissions & PERMISSIONS.CHANGEOWNER) !== 0n ||
    (permissions & PERMISSIONS.EDITPERMISSIONS) !== 0n ||
    (permissions & PERMISSIONS.ADDCONTROLLER) !== 0n;

  const activePermissions = getActivePermissions(permissions);

  // The transaction is built from this network's state, so it may only be sent there (never switched)
  const expectedChainId = authPackage ? CHAIN_IDS[authPackage.network] : null;
  const wrongChain = isConnected && expectedChainId !== null && walletChainId !== expectedChainId;
  const wrongChainMessage = wrongChain
    ? `Your wallet is on ${chainLabel(walletChainId)}, but this authorization is for ${chainLabel(expectedChainId)}. ` +
      `Switch your wallet to ${chainLabel(expectedChainId)}; nothing is sent before that.`
    : null;

  // No auth package in URL - start directly with manual controller entry
  if (!searchParams.has('data') && !searchParams.has('profile') && !parseError && !authPackage) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-md">
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-3">
              <label htmlFor="manual-controller-address" className="text-sm font-medium">
                Controller Address
              </label>
              <Input
                id="manual-controller-address"
                type="text"
                placeholder="0x..."
                value={manualControllerAddress}
                onChange={(e) => {
                  setManualControllerAddress(e.target.value);
                  setManualEntryError(null);
                }}
                className="font-mono text-sm"
                autoFocus
              />
              {manualEntryError && (
                <Alert variant="destructive">
                  <AlertDescription>{manualEntryError}</AlertDescription>
                </Alert>
              )}
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    disconnect();
                    router.push('/');
                  }}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleManualControllerSubmit}
                  className="flex-1"
                >
                  Continue
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Parse error
  if (parseError) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-md">
        <Card>
          <CardContent className="pt-6 space-y-4">
            <Alert variant="destructive">
              <AlertDescription>{parseError}</AlertDescription>
            </Alert>
            <Button onClick={() => { disconnect(); router.push('/'); }} className="w-full">
              Go to Home
            </Button>
          </CardContent>
        </Card>
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

  // Migration complete
  if (status === 'success') {
    return (
      <div className="container mx-auto px-4 py-8 max-w-md space-y-6">
        <MigrationStatus
          status="success"
          transactionHash={txHash || undefined}
          explorerUrl={explorerUrl}
        />

        <Card>
          <CardContent className="pt-6 text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              {transactionAction === 'remove'
                ? 'The controller key has been removed. Its permissions and AddressPermissions[] entry were cleared.'
                : 'The new controller has been successfully authorized!'}
            </p>
            {transactionAction === 'remove' ? (
              <Button onClick={() => { disconnect(); router.push('/'); }}>
                Done
              </Button>
            ) : (
              <Button onClick={() => router.push('/success')}>
                Continue
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  // Error state
  if (status === 'error') {
    return (
      <div className="container mx-auto px-4 py-8 max-w-md space-y-6">
        <MigrationStatus
          status="error"
          error={error || 'Unknown error'}
        />

        <div className="flex gap-4">
          <Button variant="outline" onClick={handleReset} className="flex-1">
            Try Again
          </Button>
          <Button variant="outline" onClick={() => { disconnect(); router.push('/'); }} className="flex-1">
            Cancel
          </Button>
        </div>
      </div>
    );
  }

  // Confirming state
  if (status === 'confirming') {
    return (
      <div className="container mx-auto px-4 py-8 max-w-md space-y-6">
        <MigrationStatus
          status="confirming"
          transactionHash={txHash || undefined}
          explorerUrl={explorerUrl}
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-lg space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={handleCancel}>
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          Cancel
        </Button>

        <WalletConnectorCompact />
      </div>

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
            <WalletConnector size="lg" />
            {/* Error near button */}
            {(error || walletError) && (
              <Alert variant="destructive" className="max-w-sm">
                <AlertDescription>{error || walletError}</AlertDescription>
              </Alert>
            )}
            <p className="text-sm text-muted-foreground text-center max-w-sm">
              {isInMiniAppContext
                ? 'Connect through Universal Everything to authorize'
                : 'Use the UP Browser Extension or WalletConnect'}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Connected - Show authorization flow */}
      {isConnected && authPackage && (
        <>
          {/* Authorization Request Info */}
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Authorize Controller</CardTitle>
              <CardDescription>
                Review the request from {authPackage.targetApp.name}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Target App Info */}
              <div className="flex items-center justify-center gap-3 p-4 bg-muted rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">{authPackage.targetApp.name}</p>
                </div>
              </div>

              {/* Connection info badge */}
              {walletSource && (
                <div className="flex justify-center">
                  <Badge variant="outline" className="text-xs">
                    Connected via {walletSource === 'up-provider' ? 'UP Provider' :
                                   walletSource === 'injected' ? 'Browser Extension' : 'WalletConnect'}
                  </Badge>
                </div>
              )}

              <Separator />

              {/* Profile & Controller Identity Cards */}
              <div className="space-y-4">
                {/* Profile being authorized */}
                <div className="p-3 bg-muted/50 rounded-lg">
                  <span className="text-xs text-muted-foreground block mb-2">Profile</span>
                  <ProfileIdentityCard
                    address={authPackage.profileAddress}
                    network={authPackage.network}
                    size="md"
                  />
                </div>

                {/* New Controller */}
                <div className="p-3 bg-muted/50 rounded-lg">
                  <span className="text-xs text-muted-foreground block mb-2">New Controller</span>
                  <ProfileIdentityCard
                    address={authPackage.controllerAddress}
                    network={authPackage.network}
                    size="md"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Network</span>
                  <Badge variant="outline" className="capitalize">
                    {authPackage.network}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Permissions: THE AUTHORIZER CHOOSES PERMISSIONS and restrictions */}
          <PermissionsEditor
            permissions={permissions}
            onPermissionsChange={setPermissions}
            allowedCalls={allowedCallEntries}
            onAllowedCallsChange={setAllowedCallEntries}
            allowedDataKeys={allowedDataKeyEntries}
            onAllowedDataKeysChange={setAllowedDataKeyEntries}
            disabled={status === 'authorizing'}
          />

          {/* Permission Summary & Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Selected Permissions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {activePermissions.map((perm) => {
                  const isDangerous =
                    perm === 'CHANGEOWNER' ||
                    perm === 'EDITPERMISSIONS' ||
                    perm === 'ADDCONTROLLER';

                  return (
                    <Badge
                      key={perm}
                      variant={isDangerous ? 'destructive' : 'secondary'}
                    >
                      {PERMISSION_LABELS[perm]}
                    </Badge>
                  );
                })}
                {activePermissions.length === 0 && (
                  <span className="text-sm text-muted-foreground">No permissions selected</span>
                )}
              </div>

              {/* AllowedCalls/DataKeys summary */}
              {(allowedCallEntries.length > 0 || allowedDataKeyEntries.length > 0) && (
                <div className="space-y-1">
                  {allowedCallEntries.length > 0 && (
                    <p className="text-xs text-muted-foreground">
                      + {allowedCallEntries.length} AllowedCalls {allowedCallEntries.length === 1 ? 'restriction' : 'restrictions'}
                    </p>
                  )}
                  {allowedDataKeyEntries.length > 0 && (
                    <p className="text-xs text-muted-foreground">
                      + {allowedDataKeyEntries.length} AllowedDataKeys {allowedDataKeyEntries.length === 1 ? 'restriction' : 'restrictions'}
                    </p>
                  )}
                </div>
              )}

              {hasDangerousPermissions && (
                <Alert variant="destructive">
                  <AlertDescription>
                    <strong>Warning:</strong> You are granting sensitive permissions
                    that could allow the new controller to modify your profile&apos;s security settings.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>

            <CardFooter className="flex flex-col gap-3">
              {/* Profile matching error */}
              {profileMatchError && (
                <Alert variant="destructive" className="w-full">
                  <AlertDescription>{profileMatchError}</AlertDescription>
                </Alert>
              )}

              {/* Wallet on another network than the link */}
              {wrongChainMessage && (
                <Alert variant="destructive" className="w-full">
                  <AlertDescription>{wrongChainMessage}</AlertDescription>
                </Alert>
              )}

              <div className="flex gap-3 w-full">
                <Button
                  variant="outline"
                  onClick={handleCancel}
                  disabled={status === 'authorizing'}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleAuthorize}
                  disabled={status === 'authorizing' || activePermissions.length === 0 || !!profileMatchError || isValidatingController || wrongChain}
                  className="flex-1"
                >
                  {isValidatingController ? 'Validating...' : status === 'authorizing' ? 'Authorizing...' : 'Authorize'}
                </Button>
              </div>

              {/* Error near buttons */}
              {error && (
                <Alert variant="destructive" className="w-full">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
            </CardFooter>
          </Card>

          {/* Destructive controller removal */}
          <Card className="border-destructive/40">
            <CardHeader>
              <CardTitle className="text-base text-destructive">Danger Zone</CardTitle>
              <CardDescription>
                Remove this controller key completely instead of changing its permissions.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert variant="destructive">
                <AlertDescription>
                  This clears all permission data for {shortenAddress(authPackage.controllerAddress)}
                  and empties its existing AddressPermissions[] slot. The array is not compacted,
                  reindexed, or shortened.
                </AlertDescription>
              </Alert>
              <Button
                variant="destructive"
                onClick={() => {
                  setError(null);
                  setRemoveConfirmationText('');
                  setRemoveConfirmStep(1);
                }}
                disabled={status === 'authorizing' || !!profileMatchError || isValidatingController || wrongChain}
                className="w-full"
              >
                Remove Controller Key
              </Button>
            </CardContent>
          </Card>

          {/* Controller Removal Confirmation 1 */}
          <Dialog
            open={removeConfirmStep === 1}
            onOpenChange={(open) => {
              if (!open) {
                closeRemoveConfirmation();
              }
            }}
          >
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Remove controller key?</DialogTitle>
                <DialogDescription>
                  This will permanently remove controller {shortenAddress(authPackage.controllerAddress)}
                  from profile {shortenAddress(authPackage.profileAddress)}.
                </DialogDescription>
              </DialogHeader>
              <Alert variant="destructive">
                <AlertDescription>
                  The transaction will clear the controller&apos;s permissions, AllowedCalls,
                  AllowedERC725YDataKeys, and its current AddressPermissions[] entry. Continue only
                  if you intend to revoke this controller completely.
                </AlertDescription>
              </Alert>
              <DialogFooter>
                <Button variant="outline" onClick={closeRemoveConfirmation}>
                  Cancel
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => setRemoveConfirmStep(2)}
                >
                  I Understand, Continue
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Controller Removal Confirmation 2 */}
          <Dialog
            open={removeConfirmStep === 2}
            onOpenChange={(open) => {
              if (!open) {
                closeRemoveConfirmation();
              }
            }}
          >
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Final confirmation</DialogTitle>
                <DialogDescription>
                  This action removes access for {shortenAddress(authPackage.controllerAddress)}.
                  It cannot be undone except by authorizing the controller again.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-2">
                <label htmlFor="remove-confirmation" className="text-sm font-medium">
                  Type REMOVE to confirm
                </label>
                <Input
                  id="remove-confirmation"
                  value={removeConfirmationText}
                  onChange={(event) => setRemoveConfirmationText(event.target.value)}
                  autoComplete="off"
                  disabled={status === 'authorizing'}
                />
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={closeRemoveConfirmation}
                  disabled={status === 'authorizing'}
                >
                  Cancel
                </Button>
                <Button
                  variant="destructive"
                  onClick={handleRemoveController}
                  disabled={removeConfirmationText.trim() !== 'REMOVE' || status === 'authorizing'}
                >
                  Remove Controller Key
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  );
}

/**
 * Agent authorization requests (an AI agent asking to act for the connected profile) have their
 * own review flow. The link is read once per visit: the address bar may be cleaned afterwards
 * (a link that carries a secret is removed from it), which must not change what is shown.
 */
function AgentAuthorizeEntry() {
  const [location] = useState(() =>
    typeof window === 'undefined' ? { search: '', hash: '' } : { search: window.location.search, hash: window.location.hash }
  );
  return <AgentAuthorizeFlow search={location.search} hash={location.hash} />;
}

function AuthorizeRouter() {
  const [mode] = useState(() =>
    typeof window === 'undefined' ? 'manual' : authorizeLinkMode(new URLSearchParams(window.location.search))
  );
  return mode === 'agent' ? <AgentAuthorizeEntry /> : <AuthorizeContent />;
}

export default function AuthorizePage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-8 flex justify-center">
        <LoadingSpinner size="lg" />
      </div>
    }>
      <AuthorizeRouter />
    </Suspense>
  );
}
