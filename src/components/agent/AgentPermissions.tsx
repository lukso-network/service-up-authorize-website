'use client';

import type { Dispatch, SetStateAction } from 'react';
import type { Hex } from 'viem';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { PermissionsEditor } from '@/components/migration/PermissionsEditor';
import type { PermissionText } from '@/components/migration/PermissionSelector';
import type { CallTypeKey } from '@/components/migration/AllowedCallsEditor';
import { DATA_KEY_PRESETS } from '@/constants/allowedCalls';
import type { PermissionKey } from '@/constants/permissions';
import type { AllowedCallEntry } from '@/lib/lsp6/allowedCalls';
import type { AgentRequest } from '@/lib/agent-request/parse';
import { ELEVATED_PERMISSIONS, REFUSED_PERMISSIONS } from '@/lib/agent-request/constants';
import { protectedNamespace } from '@/lib/agent-request/compactBytes';
import { describePermission, describeAllowedCall, describeDataKey, type Risk } from '@/lib/agent-request/describe';
import { allowedCallFromEntry, type AgentDraft, type DraftCheck, type RequestDifference } from '@/lib/agent-request/draft';

const RISK_BADGE: Record<Risk, NonNullable<PermissionText['badge']>> = {
  low: { label: 'Low risk', variant: 'outline' },
  medium: { label: 'Medium risk', variant: 'secondary' },
  high: { label: 'High risk', variant: 'destructive' },
};

/** Call types an agent may get in an allowed call (never delegate calls). */
const AGENT_CALL_TYPES: readonly CallTypeKey[] = ['transferValue', 'call', 'staticCall'];

/** Data key presets an agent may never write: receiver delegates and extensions. */
const PROTECTED_PRESETS = Object.keys(DATA_KEY_PRESETS).filter((id) => protectedNamespace(DATA_KEY_PRESETS[id].key as Hex));

function summarizeCall(entry: AllowedCallEntry): string | null {
  const call = allowedCallFromEntry(entry);
  return call ? describeAllowedCall(call).summary : null;
}

interface AgentPermissionsProps {
  request: AgentRequest;
  draft: AgentDraft;
  onDraftChange: Dispatch<SetStateAction<AgentDraft>>;
  check: DraftCheck;
  difference: RequestDifference;
  /** The owner changed something since the editor was prefilled. */
  edited: boolean;
  onReset: () => void;
  disabled: boolean;
}

/**
 * The site's permissions editor for an agent request: prefilled with what the agent asked for, editable like on the
 * authorize page, within what an agent may ever get; plus how the owner's selection differs from the request.
 */
export function AgentPermissions({ request, draft, onDraftChange, check, difference, edited, onReset, disabled }: AgentPermissionsProps) {
  const who = request.name ?? 'the agent';
  const whose = request.name ? `${request.name}’s` : 'the agent’s';
  const elevatedSelected = check.permissions.filter((p) => ELEVATED_PERMISSIONS.includes(p));
  const elevatedNotSelected = difference.notSelected.filter((p) => ELEVATED_PERMISSIONS.includes(p));

  const text = (key: PermissionKey): PermissionText => {
    const d = describePermission(key);
    return {
      label: d.title,
      description: d.detail,
      badge: RISK_BADGE[d.risk],
      code: request.permissions.includes(key) ? `${key} · asked for by the agent` : key,
      danger: d.tier === 'elevated',
    };
  };

  return (
    <>
      <PermissionsEditor
        permissions={draft.permissions}
        onPermissionsChange={(permissions) => onDraftChange((d) => ({ ...d, permissions }))}
        allowedCalls={draft.allowedCalls}
        onAllowedCallsChange={(allowedCalls) => onDraftChange((d) => ({ ...d, allowedCalls }))}
        allowedDataKeys={draft.allowedDataKeys}
        onAllowedDataKeysChange={(allowedDataKeys) => onDraftChange((d) => ({ ...d, allowedDataKeys }))}
        disabled={disabled}
        autoAdjustPermissions={false}
        selector={{
          title: 'What the agent may do',
          description: `Prefilled with what ${who} asked for${request.elevated.length ? '; the most powerful permissions it asked for start unticked' : ''}. Tick or untick any permission and change the limits below; only what you approve in your wallet is written.`,
          defaultTab: 'custom',
          unavailable: REFUSED_PERMISSIONS,
          describe: text,
          footer: (
            <div className="mt-4 space-y-3">
              {elevatedSelected.length > 0 && (
                <Alert variant="destructive" data-testid="elevated-warning">
                  <AlertDescription>
                    You are giving {who} unrestricted power: {elevatedSelected.map((p) => `${describePermission(p).title} (${p})`).join(', ')}.
                  </AlertDescription>
                </Alert>
              )}
              <p className="text-xs text-muted-foreground">
                Never offered to an agent: control over your profile&apos;s owner, controllers and permissions, extensions, receiver delegates and delegate calls.
              </p>
            </div>
          ),
        }}
        callTypes={AGENT_CALL_TYPES}
        summarizeCall={summarizeCall}
        excludeDataKeyPresets={PROTECTED_PRESETS}
      />

      <Card data-testid="request-changes">
        <CardHeader>
          <CardTitle role="heading" aria-level={2} className="text-base">Compared with {whose} request</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          {difference.same ? (
            <p>This is exactly what {who} asked for.</p>
          ) : (
            <ul className="list-disc space-y-1 pl-5 break-words">
              {difference.notSelected.length > 0 && (
                <li>
                  Asked for, not selected: {difference.notSelected.join(', ')}
                  {elevatedNotSelected.length > 0 && ` (${elevatedNotSelected.join(', ')}: not preselected; tick it above only if you fully trust this agent)`}
                </li>
              )}
              {difference.added.length > 0 && <li>Added by you: {difference.added.join(', ')}</li>}
              {difference.callsRemoved.map((c) => (
                <li key={`removed-${c.raw}`}>Allowed call removed: {describeAllowedCall(c).summary}</li>
              ))}
              {difference.callsAdded.map((c) => (
                <li key={`added-${c.raw}`}>Allowed call added: {describeAllowedCall(c).summary}</li>
              ))}
              {difference.keysRemoved.map((k) => (
                <li key={`removed-${k}`}>Data key removed: {describeDataKey(k).name} ({k})</li>
              ))}
              {difference.keysAdded.map((k) => (
                <li key={`added-${k}`}>Data key added: {describeDataKey(k).name} ({k})</li>
              ))}
            </ul>
          )}
          {edited && (
            <Button variant="outline" size="sm" onClick={onReset} disabled={disabled}>
              Reset to {whose} request
            </Button>
          )}
          {check.notes.length > 0 && (
            <Alert>
              <AlertDescription>
                <ul className="list-disc space-y-1 pl-4">
                  {check.notes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          )}
          {check.problems.length > 0 && (
            <Alert variant="destructive" data-testid="draft-problems">
              <AlertDescription>
                <p>Fix this before you approve:</p>
                <ul className="list-disc space-y-1 pl-4">
                  {check.problems.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </>
  );
}
