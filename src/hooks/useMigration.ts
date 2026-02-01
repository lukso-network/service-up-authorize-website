'use client';

import { useState, useCallback } from 'react';
import { buildAddControllerTransaction, verifyControllerAdded } from '@/lib/lsp6/transaction';
import type { AuthorizationPackage, MigrationState, MigrationStatus } from '@/types/auth-package';
import type { PublicClient } from 'viem';

interface UseMigrationReturn extends MigrationState {
  authorize: (
    publicClient: PublicClient,
    sendTransaction: (params: { to: `0x${string}`; data: `0x${string}` }) => Promise<`0x${string}` | null>,
    authPackage: AuthorizationPackage
  ) => Promise<boolean>;
  reset: () => void;
}

export function useMigration(): UseMigrationReturn {
  const [state, setState] = useState<MigrationState>({
    status: 'idle',
  });

  const setStatus = (status: MigrationStatus, extra?: Partial<MigrationState>) => {
    setState(prev => ({ ...prev, status, ...extra }));
  };

  const authorize = useCallback(async (
    publicClient: PublicClient,
    sendTransaction: (params: { to: `0x${string}`; data: `0x${string}` }) => Promise<`0x${string}` | null>,
    authPackage: AuthorizationPackage
  ): Promise<boolean> => {
    try {
      setStatus('authorizing', { authPackage });

      // Build the transaction
      const { calldata } = await buildAddControllerTransaction(
        publicClient,
        authPackage.profileAddress,
        authPackage
      );

      // Send the transaction
      const txHash = await sendTransaction({
        to: authPackage.profileAddress,
        data: calldata,
      });

      if (!txHash) {
        setStatus('error', { error: 'Transaction failed or was rejected' });
        return false;
      }

      setStatus('confirming', { transactionHash: txHash });

      // Wait for transaction receipt
      const receipt = await publicClient.waitForTransactionReceipt({
        hash: txHash,
      });

      if (receipt.status === 'reverted') {
        setStatus('error', { error: 'Transaction reverted' });
        return false;
      }

      setStatus('verifying');

      // Verify the controller was added
      const verification = await verifyControllerAdded(
        publicClient,
        authPackage.profileAddress,
        authPackage.controllerAddress,
        BigInt(authPackage.requestedPermissions)
      );

      if (!verification.success) {
        setStatus('error', { error: verification.error || 'Verification failed' });
        return false;
      }

      setStatus('success');
      return true;
    } catch (error) {
      console.error('Migration error:', error);
      setStatus('error', { 
        error: error instanceof Error ? error.message : 'Migration failed' 
      });
      return false;
    }
  }, []);

  const reset = useCallback(() => {
    setState({
      status: 'idle',
    });
  }, []);

  return {
    ...state,
    authorize,
    reset,
  };
}
