'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { StepIndicator } from '@/components/shared/StepIndicator';
import { ConnectButton } from '@/components/wallet/ConnectButton';
import { ProfileCard } from '@/components/wallet/ProfileCard';
import { ProfileSearch } from '@/components/search/ProfileSearch';
import { PermissionSelector } from '@/components/migration/PermissionSelector';
import { QRGenerator } from '@/components/migration/QRGenerator';
import { useUPProvider } from '@/hooks/useUPProvider';
import { generateAuthorizationLink } from '@/lib/auth-package/encode';
import { PERMISSION_PRESETS } from '@/constants/permissions';
import type { ProfileSearchResult } from '@/types/profile';
import type { AuthorizationPackage } from '@/types/auth-package';

const STEPS = [
  { id: 'connect', title: 'Connect', description: 'Connect new wallet' },
  { id: 'search', title: 'Search', description: 'Find your profile' },
  { id: 'permissions', title: 'Permissions', description: 'Set access level' },
  { id: 'share', title: 'Share', description: 'Send to source device' },
];

export default function TargetPage() {
  const router = useRouter();
  const {
    isConnected,
    isConnecting,
    address,
    network,
    error: walletError,
    connect,
    disconnect,
    requestUpImport,
  } = useUPProvider();

  const [step, setStep] = useState(0);
  const [selectedProfile, setSelectedProfile] = useState<ProfileSearchResult | null>(null);
  const [permissions, setPermissions] = useState<bigint>(PERMISSION_PRESETS.STANDARD_WALLET);
  const [, setControllerAddress] = useState<`0x${string}` | null>(null);
  const [authPackage, setAuthPackage] = useState<AuthorizationPackage | null>(null);
  const [authLink, setAuthLink] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Step 1: Connect wallet
  const handleConnect = async () => {
    await connect();
    setStep(1);
  };

  // Step 2: Select profile
  const handleProfileSelect = useCallback((profile: ProfileSearchResult) => {
    setSelectedProfile(profile);
    setStep(2);
  }, []);

  // Step 3: Generate authorization
  const handleGenerateAuth = async () => {
    if (!selectedProfile || !network) {
      setError('Missing profile or network');
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      // Call up_import to get controller address
      const controller = await requestUpImport(selectedProfile.id as `0x${string}`);
      
      if (!controller) {
        // If up_import fails, generate a mock controller for demo purposes
        // In production, this would be handled by the actual UP Provider
        setError('up_import not available. Please ensure your wallet supports this feature.');
        setIsGenerating(false);
        return;
      }

      setControllerAddress(controller);

      // Build auth package
      const pkg: AuthorizationPackage = {
        version: 1,
        profileAddress: selectedProfile.id as `0x${string}`,
        controllerAddress: controller,
        requestedPermissions: `0x${permissions.toString(16).padStart(64, '0')}`,
        network: network as 'mainnet' | 'testnet',
        timestamp: Date.now(),
        targetApp: {
          name: 'UP Migration App',
          url: window.location.origin,
        },
      };

      setAuthPackage(pkg);
      
      // Generate link
      const link = generateAuthorizationLink(pkg);
      setAuthLink(link);
      
      setStep(3);
    } catch (err) {
      console.error('Error generating auth:', err);
      setError(err instanceof Error ? err.message : 'Failed to generate authorization');
    } finally {
      setIsGenerating(false);
    }
  };

  // For demo: skip up_import and use connected address
  const handleSkipUpImport = async () => {
    if (!selectedProfile || !network || !address) {
      setError('Missing required data');
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      // Use connected address as controller (for demo)
      const controller = address;
      setControllerAddress(controller);

      // Build auth package
      const pkg: AuthorizationPackage = {
        version: 1,
        profileAddress: selectedProfile.id as `0x${string}`,
        controllerAddress: controller,
        requestedPermissions: `0x${permissions.toString(16).padStart(64, '0')}`,
        network: network as 'mainnet' | 'testnet',
        timestamp: Date.now(),
        targetApp: {
          name: 'UP Migration App',
          url: window.location.origin,
        },
      };

      setAuthPackage(pkg);
      
      // Generate link
      const link = generateAuthorizationLink(pkg);
      setAuthLink(link);
      
      setStep(3);
    } catch (err) {
      console.error('Error:', err);
      setError(err instanceof Error ? err.message : 'Failed to generate authorization');
    } finally {
      setIsGenerating(false);
    }
  };

  const goBack = () => {
    if (step > 0) {
      setStep(step - 1);
    } else {
      router.push('/');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Button variant="ghost" onClick={goBack}>
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
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

      {/* Step Indicator */}
      <StepIndicator steps={STEPS} currentStep={step} className="mb-8" />

      {/* Error Display */}
      {(error || walletError) && (
        <Alert variant="destructive" className="mb-6">
          <AlertDescription>{error || walletError}</AlertDescription>
        </Alert>
      )}

      {/* Step Content */}
      {step === 0 && (
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Connect Your New Wallet</CardTitle>
            <CardDescription>
              Connect the wallet or app you want to add as a controller
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <Button onClick={handleConnect} size="lg" disabled={isConnecting}>
              {isConnecting ? 'Connecting...' : 'Connect Wallet'}
            </Button>
            <p className="text-sm text-muted-foreground text-center max-w-sm">
              Make sure you have the UP Browser Extension or a compatible wallet installed
            </p>
          </CardContent>
        </Card>
      )}

      {step === 1 && (
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Find Your Profile</CardTitle>
            <CardDescription>
              Search for the Universal Profile you want to migrate
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ProfileSearch
              onSelect={handleProfileSelect}
              network={network || undefined}
              placeholder="Search by name or paste address..."
            />
          </CardContent>
        </Card>
      )}

      {step === 2 && selectedProfile && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Selected Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <ProfileCard profile={selectedProfile} selected />
            </CardContent>
          </Card>

          <PermissionSelector
            permissions={permissions}
            onPermissionsChange={setPermissions}
          />

          <div className="flex gap-4">
            <Button variant="outline" onClick={goBack} className="flex-1">
              Change Profile
            </Button>
            <Button 
              onClick={handleGenerateAuth} 
              disabled={isGenerating}
              className="flex-1"
            >
              {isGenerating ? 'Generating...' : 'Generate Authorization'}
            </Button>
          </div>

          {/* Demo option */}
          <div className="text-center">
            <button 
              onClick={handleSkipUpImport}
              className="text-sm text-muted-foreground hover:text-foreground underline"
              disabled={isGenerating}
            >
              Demo mode: Use connected address as controller
            </button>
          </div>
        </div>
      )}

      {step === 3 && authPackage && (
        <div className="space-y-6">
          <QRGenerator authPackage={authPackage} deepLinkUrl={authLink} />
          
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Scan this QR code or share the link with your device that has existing access to the profile
            </p>
            <Button variant="outline" onClick={() => router.push('/')}>
              Done
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
