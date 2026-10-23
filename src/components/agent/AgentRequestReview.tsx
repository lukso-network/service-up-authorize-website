'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AgentAddress } from './AgentAddress';
import type { PermissionKey } from '@/constants/permissions';
import type { AgentRequest } from '@/lib/agent-request/parse';
import { REQUEST_NETWORKS } from '@/lib/agent-request/constants';
import { describePermission, describeAllowedCall, describeDataKey, NOT_GRANTABLE_SUMMARY, type Risk } from '@/lib/agent-request/describe';

interface AgentRequestReviewProps {
  request: AgentRequest;
  /** Permissions currently ticked (a subset of the requested ones). */
  selected: ReadonlySet<PermissionKey>;
  onToggle: (key: PermissionKey) => void;
  disabled?: boolean;
}

const RISK_BADGE: Record<Risk, { label: string; variant: 'outline' | 'secondary' | 'destructive' }> = {
  low: { label: 'Low risk', variant: 'outline' },
  medium: { label: 'Medium risk', variant: 'secondary' },
  high: { label: 'High risk', variant: 'destructive' },
};

function PermissionRow({ permission, checked, onToggle, disabled }: { permission: PermissionKey; checked: boolean; onToggle: () => void; disabled?: boolean }) {
  const d = describePermission(permission);
  const badge = RISK_BADGE[d.risk];
  return (
    <label
      className={`flex items-start gap-3 rounded-lg border p-3 transition-colors focus-within:ring-2 focus-within:ring-ring ${
        checked ? 'bg-primary/5 border-primary/30' : 'bg-background'
      } ${d.tier === 'elevated' ? 'border-l-4 border-l-destructive' : ''} ${disabled ? 'opacity-60' : 'cursor-pointer'}`}
    >
      <input type="checkbox" className="mt-1 h-4 w-4 shrink-0 rounded border-border" checked={checked} onChange={onToggle} disabled={disabled} />
      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium">{d.title}</span>
          <Badge variant={badge.variant} className="text-xs">
            {badge.label}
          </Badge>
        </span>
        <span className="mt-0.5 block text-xs text-muted-foreground">{d.detail}</span>
        <span className="mt-0.5 block font-mono text-[11px] text-muted-foreground">{permission}</span>
      </span>
    </label>
  );
}

export function AgentRequestReview({ request, selected, onToggle, disabled = false }: AgentRequestReviewProps) {
  const name = request.name ?? 'An unnamed agent';
  const network = REQUEST_NETWORKS[request.network].label;
  const elevatedSelected = request.elevated.filter((p) => selected.has(p));

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

      <Card>
        <CardHeader>
          <CardTitle role="heading" aria-level={2} className="text-base">What the agent may do</CardTitle>
          <CardDescription>Untick anything you do not want to give. You cannot add more than the agent asked for.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {request.standard.map((p) => (
            <PermissionRow key={p} permission={p} checked={selected.has(p)} onToggle={() => onToggle(p)} disabled={disabled} />
          ))}

          {request.elevated.length > 0 && (
            <div className="space-y-3 pt-2">
              <div>
                <p className="text-sm font-medium text-destructive">High-risk permissions requested</p>
                <p className="text-xs text-muted-foreground">
                  These remove the limits below. They are not selected; tick one only if you fully trust this agent.
                </p>
              </div>
              {request.elevated.map((p) => (
                <PermissionRow key={p} permission={p} checked={selected.has(p)} onToggle={() => onToggle(p)} disabled={disabled} />
              ))}
            </div>
          )}

          {elevatedSelected.length > 0 && (
            <Alert variant="destructive" data-testid="elevated-warning">
              <AlertDescription>
                You are giving {name} unrestricted power: {elevatedSelected.map((p) => `${describePermission(p).title} (${p})`).join(', ')}.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle role="heading" aria-level={2} className="text-base">Limits written with these permissions</CardTitle>
          <CardDescription>Exactly as in the link. They are enforced on-chain by your profile.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <section data-testid="allowed-calls" className="space-y-2">
            <h3 className="text-sm font-medium">Contracts it may use (allowed calls)</h3>
            {request.allowedCalls.length === 0 ? (
              <p className="text-sm text-muted-foreground">None</p>
            ) : (
              <ul className="space-y-2">
                {request.allowedCalls.map((c) => {
                  const d = describeAllowedCall(c);
                  return (
                    <li key={c.raw} className="rounded-lg border p-3">
                      <p className="text-sm break-words">{d.summary}</p>
                      <p className="mt-1 text-xs text-muted-foreground break-all">Function: {d.functionLabel}</p>
                      <p className="text-xs text-muted-foreground break-all">Standard: {d.standardLabel}</p>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>

          <section data-testid="allowed-data-keys" className="space-y-2">
            <h3 className="text-sm font-medium">Profile data it may change (allowed data keys)</h3>
            {request.allowedDataKeys.length === 0 ? (
              <p className="text-sm text-muted-foreground">None</p>
            ) : (
              <ul className="space-y-2">
                {request.allowedDataKeys.map((k) => {
                  const d = describeDataKey(k);
                  return (
                    <li key={k} className="rounded-lg border p-3">
                      <p className="text-sm font-medium">{d.name}</p>
                      <p className="text-xs text-muted-foreground">{d.detail}</p>
                      <p className="mt-1 font-mono text-[11px] text-muted-foreground break-all">{d.key}</p>
                      {d.broad && <p className="mt-1 text-xs text-destructive">This short prefix matches many data keys.</p>}
                    </li>
                  );
                })}
              </ul>
            )}
          </section>

          {request.notes.length > 0 && (
            <Alert>
              <AlertDescription>
                <ul className="list-disc space-y-1 pl-4">
                  {request.notes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

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
