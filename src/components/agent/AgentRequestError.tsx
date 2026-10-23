'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import type { AgentRequestProblem } from '@/lib/agent-request/parse';

interface AgentRequestErrorProps {
  problems: AgentRequestProblem[];
  secretDetected: boolean;
}

/** A link that cannot be used: every problem is listed, nothing can be connected or signed. */
export function AgentRequestError({ problems, secretDetected }: AgentRequestErrorProps) {
  const router = useRouter();
  return (
    <Card>
      <CardHeader>
        <CardTitle role="heading" aria-level={1} className="text-xl">{secretDetected ? 'Stop: this link contains a secret' : 'This authorization link can\'t be used'}</CardTitle>
        <CardDescription>Nothing was changed. Ask the agent for a new link.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert variant="destructive">
          <AlertDescription>
            <ul className="list-disc space-y-1 pl-4">
              {problems.map((p, i) => (
                <li key={`${p.code}-${i}`}>{p.message}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
        {secretDetected && (
          <p className="text-sm">
            An agent never needs your private key, seed phrase or password, and an authorization link never contains one. This link was removed from the
            address bar. If it held a real secret, consider it seen by others and move anything it protects to a new wallet.
          </p>
        )}
        <Button className="w-full" onClick={() => router.push('/')}>
          Go to home
        </Button>
      </CardContent>
    </Card>
  );
}
