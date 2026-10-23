'use client';

import type { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AgentAddress } from './AgentAddress';
import type { AgentRequest } from '@/lib/agent-request/parse';
import { REQUEST_NETWORKS } from '@/lib/agent-request/constants';
import { NOT_GRANTABLE_SUMMARY } from '@/lib/agent-request/describe';

interface AgentRequestReviewProps {
  request: AgentRequest;
  /** The permissions editor, shown between the request and what an agent can never get. */
  children?: ReactNode;
}

export function AgentRequestReview({ request, children }: AgentRequestReviewProps) {
  const name = request.name ?? 'An unnamed agent';
  const network = REQUEST_NETWORKS[request.network].label;

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle role="heading" aria-level={1} className="text-xl">An AI agent asks to act for your profile</CardTitle>
          <CardDescription>
            Nothing happens until you connect your profile, check this request and approve it in your wallet.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-lg font-semibold break-words">{name}</p>
            <p className="text-xs text-muted-foreground">Name from the link, not verified</p>
          </div>

          {request.purpose && (
            <div className="rounded-lg bg-muted/60 p-3">
              <p className="text-xs text-muted-foreground">What it says it needs this for (from the link, not verified)</p>
              <blockquote className="mt-1 text-sm break-words">&ldquo;{request.purpose}&rdquo;</blockquote>
            </div>
          )}

          <div className="rounded-lg border p-3">
            <p className="mb-2 text-sm font-medium">Agent address you would authorize</p>
            <AgentAddress address={request.controller} />
            <p className="mt-2 text-xs text-muted-foreground">
              Check that this is exactly the address your agent showed you. If it differs, close this page.
            </p>
          </div>

          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
            <dt className="text-muted-foreground">Network</dt>
            <dd>{network}</dd>
            <dt className="text-muted-foreground">Profile</dt>
            <dd className="break-all">{request.profile ? <span className="font-mono">{request.profile}</span> : 'The profile you connect'}</dd>
          </dl>
        </CardContent>
      </Card>

      {children}

      <Card>
        <CardHeader>
          <CardTitle role="heading" aria-level={2} className="text-base">What it can never do with this link</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <ul className="list-disc space-y-1 pl-5 text-sm">
            {NOT_GRANTABLE_SUMMARY.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground">
            LSP6 permissions have no spending limits or expiry dates. Give only what the agent needs; you can change or remove its access at any time.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
