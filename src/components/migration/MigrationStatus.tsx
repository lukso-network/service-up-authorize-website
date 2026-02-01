'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import type { MigrationStatus as MigrationStatusType } from '@/types/auth-package';

interface MigrationStatusProps {
  status: MigrationStatusType;
  error?: string;
  transactionHash?: string;
  explorerUrl?: string;
}

const statusConfig: Record<
  MigrationStatusType,
  { title: string; description: string; icon: 'loading' | 'success' | 'error' | 'idle' }
> = {
  idle: {
    title: 'Ready',
    description: 'Waiting to start migration',
    icon: 'idle',
  },
  connecting: {
    title: 'Connecting',
    description: 'Connecting to wallet...',
    icon: 'loading',
  },
  searching: {
    title: 'Searching',
    description: 'Looking for your profile...',
    icon: 'loading',
  },
  generating: {
    title: 'Generating',
    description: 'Creating authorization package...',
    icon: 'loading',
  },
  'awaiting-authorization': {
    title: 'Awaiting Authorization',
    description: 'Waiting for authorization on source device...',
    icon: 'loading',
  },
  authorizing: {
    title: 'Authorizing',
    description: 'Building authorization transaction...',
    icon: 'loading',
  },
  confirming: {
    title: 'Confirming',
    description: 'Waiting for transaction confirmation...',
    icon: 'loading',
  },
  verifying: {
    title: 'Verifying',
    description: 'Verifying controller was added...',
    icon: 'loading',
  },
  success: {
    title: 'Success!',
    description: 'Migration completed successfully',
    icon: 'success',
  },
  error: {
    title: 'Error',
    description: 'Something went wrong',
    icon: 'error',
  },
};

export function MigrationStatus({
  status,
  error,
  transactionHash,
  explorerUrl,
}: MigrationStatusProps) {
  const config = statusConfig[status];

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">{config.title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-col items-center justify-center py-6">
          {config.icon === 'loading' && (
            <LoadingSpinner size="lg" className="text-primary" />
          )}

          {config.icon === 'success' && (
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          )}

          {config.icon === 'error' && (
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          )}

          {config.icon === 'idle' && (
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
              <svg
                className="w-8 h-8 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          )}

          <p className="mt-4 text-center text-muted-foreground">
            {config.description}
          </p>
        </div>

        {status === 'error' && error && (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {transactionHash && explorerUrl && (
          <div className="text-center">
            <a
              href={`${explorerUrl}/tx/${transactionHash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              View transaction on explorer →
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
