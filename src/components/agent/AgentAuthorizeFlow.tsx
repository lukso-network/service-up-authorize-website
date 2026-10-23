'use client';

/**
 * Agent authorization request flow on /authorize.
 *
 * 1. The request from the link is shown in full before anything is connected (untrusted proposal).
 * 2. The owner connects their Universal Profile (UP browser extension, UP mobile app via
 *    WalletConnect, or UP Provider inside Universal Everything).
 * 3. Checks: wallet on the request's network (never switched), the right profile, a real
 *    Universal Profile, the agent's current state on it.
 * 4. The owner adjusts the request in the site's permissions editor (prefilled from the link, once),
 *    confirms the agent address and approves the transaction in their own wallet. The page never signs.
 * 5. After the receipt, the agent's stored permissions are read back and compared exactly with what the
 *    owner approved.
 */
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { Address, Hex } from 'viem';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import { ProfileIdentityCard } from '@/components/shared/ProfileIdentityCard';
import { WalletConnector, WalletConnectorCompact } from '@/components/wallet/WalletConnector';
import { useWallet } from '@/contexts/WalletContext';
import { getActivePermissions } from '@/constants/permissions';
import { getEndpoints } from '@/constants/endpoints';
import { parseAgentRequest, type AgentRequest } from '@/lib/agent-request/parse';
import { REQUEST_NETWORKS } from '@/lib/agent-request/constants';
import { publicClientFor } from '@/lib/agent-request/client';
import { draftFromRequest, checkDraft, compareWithRequest, sameDraft, type DraftCheck } from '@/lib/agent-request/draft';
import { readControllerState, planControllerGrant, grantMatches, type ControllerState, type GrantTarget } from '@/lib/lsp6/grant';
import { shortenAddress, copyToClipboard } from '@/lib/utils/format';
import { chainLabel } from '@/lib/utils/chains';
import { AgentRequestReview } from './AgentRequestReview';
import { AgentRequestError } from './AgentRequestError';
import { AgentPermissions } from './AgentPermissions';

type Onchain = { status: 'idle' } | { status: 'loading' } | { status: 'ready'; state: ControllerState } | { status: 'error'; error: string };

type Tx =
  | { status: 'idle' }
  | { status: 'signing'; key: string }
  | { status: 'confirming' | 'verifying'; key: string; hash: Hex; profile: Address }
  | {
      status: 'done';
      key: string;
      profile: Address;
      hash?: Hex;
      verified: { matches: boolean; differences: string[] };
      unchanged?: boolean;
      /** What the owner approved, and whether it differs from the agent's request. */
      approved: string;
      differs: boolean;
    }
  | { status: 'failed'; key: string; error: string; hash?: Hex };

function errorText(e: unknown): string {
  if (e && typeof e === 'object' && 'shortMessage' in e && typeof (e as { shortMessage: unknown }).shortMessage === 'string') {
    return (e as { shortMessage: string }).shortMessage;
  }
  return e instanceof Error ? e.message : 'Something went wrong.';
}

function CheckIcon({ ok }: { ok: boolean | null }) {
  if (ok === null) return <LoadingSpinner size="sm" className="mt-0.5 shrink-0" />;
  return ok ? (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ) : (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? '' : 's'}`;

/** The owner's selection in one line: permissions, and how many allowed calls and data keys limit them. */
function selectionText(check: DraftCheck): string {
  const limits = [
    check.allowedCalls.length ? plural(check.allowedCalls.length, 'allowed call') : '',
    check.allowedDataKeys.length ? plural(check.allowedDataKeys.length, 'allowed data key') : '',
  ].filter(Boolean);
  return `${check.permissions.join(', ')}${limits.length ? `, with ${limits.join(' and ')}` : ''}`;
}

function Check({ ok, children }: { ok: boolean | null; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <CheckIcon ok={ok} />
      <span className={ok === false ? 'text-destructive' : ''}>{children}</span>
    </li>
  );
}

export function AgentAuthorizeFlow({ search, hash }: { search: string; hash: string }) {
  const parsed = useMemo(() => parseAgentRequest({ search, hash }), [search, hash]);
  const secretDetected = !parsed.ok && parsed.secretDetected;

  // A link that carries something secret-looking is removed from the address bar and history entry.
  useEffect(() => {
    if (secretDetected) window.history.replaceState(null, '', window.location.pathname);
  }, [secretDetected]);

  return (
    <div className="container mx-auto max-w-lg space-y-6 px-4 py-8">
      {parsed.ok ? <RequestFlow request={parsed.request} /> : <AgentRequestError problems={parsed.problems} secretDetected={parsed.secretDetected} />}
    </div>
  );
}

function RequestFlow({ request }: { request: AgentRequest }) {
  const router = useRouter();
  const wallet = useWallet();
  // The link prefills the editor once. From then on the editor holds the owner's selection: nothing re-reads
  // the link, so re-renders and wallet, network or profile changes never reset it.
  const [prefill] = useState(() => draftFromRequest(request));
  const [draft, setDraft] = useState(prefill);
  const [acknowledged, setAcknowledged] = useState(false);
  const [onchain, setOnchain] = useState<{ key: string; result: Onchain } | null>(null);
  const [tx, setTx] = useState<Tx>({ status: 'idle' });
  const [copied, setCopied] = useState(false);

  const network = REQUEST_NETWORKS[request.network].label;
  const name = request.name ?? 'This agent';
  const askedBy = request.name ?? 'the agent';
  const profile = wallet.isConnected && wallet.address ? (wallet.address as Address) : null;
  const chainOk = wallet.walletChainId === request.chainId;
  const profileMatches = !profile || !request.profile || profile.toLowerCase() === request.profile.toLowerCase();
  const isSelf = !!profile && profile.toLowerCase() === request.controller.toLowerCase();
  const readKey = profile && chainOk && profileMatches && !isSelf ? `${profile.toLowerCase()}:${request.chainId}` : null;
  const current: Onchain = !readKey ? { status: 'idle' } : onchain?.key === readKey ? onchain.result : { status: 'loading' };
  const check = useMemo(() => checkDraft(draft), [draft]);
  const difference = useMemo(() => compareWithRequest(request, check), [request, check]);
  const selectedPermissions = check.permissions;
  const busy = tx.status === 'signing' || tx.status === 'confirming' || tx.status === 'verifying';
  const canAuthorize = !!readKey && current.status === 'ready' && check.target !== null && acknowledged && !busy;

  // The agent's current state on the connected profile; re-read whenever account or chain changes.
  useEffect(() => {
    if (!readKey || !profile) return;
    let cancelled = false;
    (async () => {
      try {
        const client = publicClientFor(request.chainId);
        const code = await client.getCode({ address: profile });
        if (!code || code === '0x') throw new Error(`The connected account is not a Universal Profile on ${network}.`);
        const state = await readControllerState(client, profile, request.controller);
        if (!cancelled) setOnchain({ key: readKey, result: { status: 'ready', state } });
      } catch (e) {
        if (!cancelled) setOnchain({ key: readKey, result: { status: 'error', error: errorText(e) } });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [readKey, profile, request.chainId, request.controller, network]);

  const cancel = () => {
    wallet.disconnect();
    router.push('/');
  };

  const authorize = async () => {
    const target: GrantTarget | null = check.target;
    if (!canAuthorize || !profile || !readKey || !target) return;
    const key = readKey;
    const outcome = { approved: selectionText(check), differs: !difference.same };
    setTx({ status: 'signing', key });
    try {
      const client = publicClientFor(request.chainId);
      const plan = await planControllerGrant(client, profile, request.controller, target);
      if (!plan.calldata) {
        setTx({ status: 'done', key, profile, verified: grantMatches(plan.current, target), unchanged: true, ...outcome });
        return;
      }
      const hash = await wallet.sendTransaction({ to: profile, data: plan.calldata, chainId: request.chainId });
      if (!hash) {
        setTx({ status: 'failed', key, error: 'The transaction was not sent.' });
        return;
      }
      setTx({ status: 'confirming', key, hash, profile });
      const receipt = await client.waitForTransactionReceipt({ hash });
      if (receipt.status !== 'success') {
        setTx({ status: 'failed', key, hash, error: `The transaction was reverted on ${network}. Nothing changed.` });
        return;
      }
      setTx({ status: 'verifying', key, hash, profile });
      const state = await readControllerState(client, profile, request.controller);
      setTx({ status: 'done', key, hash, profile, verified: grantMatches(state, target), ...outcome });
    } catch (e) {
      setTx({ status: 'failed', key, error: errorText(e) });
    }
  };

  const header = (
    <div className="flex items-center justify-between">
      <Button variant="ghost" onClick={cancel} disabled={busy}>
        Cancel
      </Button>
      <WalletConnectorCompact />
    </div>
  );

  if (tx.status === 'done') {
    const explorer = tx.hash ? `${getEndpoints(request.network).explorer}/tx/${tx.hash}` : null;
    return (
      <>
        {header}
        <Card>
          <CardHeader>
            <CardTitle role="heading" aria-level={1} className="text-xl">
              {!tx.verified.matches ? 'Check your profile' : tx.unchanged ? `Already authorized on ${network}` : `Authorized and verified on ${network}`}
            </CardTitle>
            <CardDescription>
              {!tx.verified.matches
                ? `The transaction went through, but your profile shows different permissions for this agent than you approved (${tx.verified.differences.join(', ')}). Check it in your Universal Profile extension or app before relying on the agent.`
                : tx.unchanged
                  ? 'This agent already had exactly these permissions on your profile. Nothing was sent.'
                  : `${name} can now act for your profile with exactly the permissions you approved.`}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div data-testid="approved-summary" className="rounded-lg border p-3 text-sm">
              <p className="break-words">You approved: {tx.approved}.</p>
              {tx.differs && <p className="mt-1 text-muted-foreground">This is different from what {askedBy} asked for; the agent sees what you approved when it checks your profile.</p>}
            </div>
            {tx.verified.matches && (
              <div className="space-y-2">
                <p className="text-sm">Tell your agent it is done. If it does not know your profile address yet, send it this:</p>
                <p className="rounded-lg bg-muted p-3 font-mono text-sm break-all">{tx.profile}</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={async () => {
                    if (await copyToClipboard(tx.profile)) setCopied(true);
                  }}
                >
                  {copied ? 'Copied' : 'Copy profile address'}
                </Button>
                <p className="text-xs text-muted-foreground">The agent checks these permissions on-chain itself before it acts.</p>
              </div>
            )}
            {explorer && (
              <a href={explorer} target="_blank" rel="noopener noreferrer" className="block text-sm text-primary underline underline-offset-4">
                View the transaction on the explorer
              </a>
            )}
            <p className="text-xs text-muted-foreground">
              To remove this agent later, open this site, choose &ldquo;Authorize a controller key manually&rdquo;, enter the agent address and use
              &ldquo;Remove Controller Key&rdquo;, or remove it in your Universal Profile extension or app.
            </p>
            <Button className="w-full" onClick={cancel}>
              Done
            </Button>
          </CardContent>
        </Card>
      </>
    );
  }

  const failedHere = tx.status === 'failed' && tx.key === readKey;
  const existing = current.status === 'ready' && current.state.permissions !== 0n ? current.state : null;
  const currentNames = existing ? getActivePermissions(existing.permissions) : [];
  const removes = currentNames.filter((p) => !selectedPermissions.includes(p));
  const adds = selectedPermissions.filter((p) => !currentNames.includes(p));
  const sourceLabel =
    wallet.walletSource === 'up-provider' ? 'Universal Everything (UP Provider)' : wallet.walletSource === 'walletconnect' ? 'Mobile app (WalletConnect)' : 'Browser extension';

  return (
    <>
      {header}
      <AgentRequestReview request={request}>
        <AgentPermissions
          request={request}
          draft={draft}
          onDraftChange={setDraft}
          check={check}
          difference={difference}
          edited={!sameDraft(draft, prefill)}
          onReset={() => setDraft(draftFromRequest(request))}
          disabled={busy}
        />
      </AgentRequestReview>

      {!profile ? (
        <Card>
          <CardHeader>
            <CardTitle role="heading" aria-level={2} className="text-base">Connect the profile to add this agent to</CardTitle>
            <CardDescription>
              {request.profile ? (
                <>
                  The agent asked for profile <span className="font-mono break-all">{request.profile}</span>.
                </>
              ) : (
                'Connect the Universal Profile you want this agent to act for.'
              )}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <WalletConnector size="lg" />
            <ul className="space-y-2 text-sm text-muted-foreground">
              {wallet.isInMiniAppContext ? (
                <li>Connect through Universal Everything, where this page is open.</li>
              ) : (
                <>
                  <li>
                    <span className="font-medium text-foreground">On a computer: </span>
                    choose Browser Extension if you use the Universal Profile browser extension, or Mobile Application and scan the QR code with the
                    Universal Profile app.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">On a phone: </span>
                    choose Mobile Application. It opens the Universal Profile app; approve the connection there, then come back to this page.
                  </li>
                </>
              )}
              <li>Use your profile on {network}. Connecting gives the agent nothing; only the transaction you approve at the end does.</li>
            </ul>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle role="heading" aria-level={2} className="text-base">Approve</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg bg-muted/50 p-3">
              <p className="mb-2 text-xs text-muted-foreground">Your profile</p>
              <ProfileIdentityCard address={profile} network={request.network} size="md" />
              {wallet.walletSource && (
                <Badge variant="outline" className="mt-2 text-xs">
                  Connected via {sourceLabel}
                </Badge>
              )}
            </div>

            <ul className="space-y-2 text-sm" aria-label="Checks">
              <Check ok={chainOk}>
                {chainOk
                  ? `Your wallet is on ${network}.`
                  : `Your wallet is on ${chainLabel(wallet.walletChainId)}. Switch it to ${network} in your wallet; nothing is sent before that.`}
              </Check>
              {request.profile && (
                <Check ok={profileMatches}>
                  {profileMatches
                    ? 'This is the profile the agent asked for.'
                    : `The agent asked for profile ${request.profile}, but you connected ${profile}. Connect that profile instead.`}
                </Check>
              )}
              {isSelf && <Check ok={false}>You connected the agent address itself. Connect your Universal Profile instead.</Check>}
              {readKey && current.status === 'loading' && <Check ok={null}>Checking your profile on {network}…</Check>}
              {current.status === 'error' && <Check ok={false}>{current.error}</Check>}
              {current.status === 'ready' && !existing && <Check ok>The agent is not a controller of this profile yet. Approving adds it.</Check>}
              {existing && (
                <Check ok>
                  {`The agent is already a controller of this profile with: ${currentNames.join(', ') || 'no known permission'}. Approving replaces them with the permissions and limits above${
                    removes.length || adds.length
                      ? ` (${[removes.length ? `removes ${removes.join(', ')}` : '', adds.length ? `adds ${adds.join(', ')}` : ''].filter(Boolean).join('; ')})`
                      : ''
                  }.`}
                </Check>
              )}
            </ul>

            <div className="rounded-lg border p-3 text-sm">
              {draft.permissions === 0n ? (
                <p className="text-destructive">Select at least one permission.</p>
              ) : check.problems.length > 0 ? (
                <p className="text-destructive">Fix the problems listed above before you approve.</p>
              ) : (
                <>
                  <p className="break-words">
                    You are about to let {name} ({shortenAddress(request.controller)}) use {plural(selectedPermissions.length, 'permission')} on{' '}
                    {shortenAddress(profile)} on {network}: {selectionText(check)}.
                  </p>
                  {!difference.same && <p className="mt-1 text-muted-foreground">This is different from what {askedBy} asked for (see above).</p>}
                </>
              )}
            </div>

            <label className="flex items-start gap-3 text-sm">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 shrink-0 rounded border-border"
                checked={acknowledged}
                onChange={(e) => setAcknowledged(e.target.checked)}
                disabled={busy}
              />
              <span>I asked for this agent, and the address above matches the one it showed me.</span>
            </label>

            <div className="flex gap-3">
              <Button variant="outline" className="flex-1" onClick={cancel} disabled={busy}>
                Cancel
              </Button>
              <Button className="flex-1" onClick={authorize} disabled={!canAuthorize}>
                {tx.status === 'signing' ? 'Confirm in your wallet…' : tx.status === 'confirming' ? 'Waiting for confirmation…' : tx.status === 'verifying' ? 'Verifying…' : 'Authorize agent'}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">Your wallet shows the transaction next. Check it there and approve it; this page never signs for you.</p>

            {(tx.status === 'confirming' || tx.status === 'verifying') && (
              <p className="flex items-center gap-2 text-sm">
                <LoadingSpinner size="sm" />
                {tx.status === 'confirming' ? `Waiting for ${network} to confirm the transaction.` : 'Reading the new permissions back from your profile.'}
              </p>
            )}
            {failedHere && (
              <Alert variant="destructive">
                <AlertDescription>
                  {tx.error}
                  {wallet.error ? ` ${wallet.error}` : ''}
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>
      )}
    </>
  );
}
