import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { getAddress } from 'viem';
import { AgentRequestReview } from './AgentRequestReview';
import { parseAgentRequest, type AgentRequest } from '@/lib/agent-request/parse';
import type { PermissionKey } from '@/constants/permissions';

const CONTROLLER = getAddress('0x5e1c0de0f9b12c2c3ab5a9c1f1b7d0d2a6e4b3c1');
const LSP26 = 'f01103e5a9909fc0dbe8166da7085e0285daddca';
const FOLLOW = `0x0020${'00000002'}${LSP26}ffffffff4dbf27cc`;
const LSP3 = '0x00205ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5';

function request(extra: Record<string, string> = {}): AgentRequest {
  const sp = new URLSearchParams({ controller: CONTROLLER, network: 'mainnet', permissions: 'CALL,SETDATA,SIGN,EXECUTE_RELAY_CALL', allowedCalls: FOLLOW, allowedDataKeys: LSP3, name: 'Nova', ...extra });
  const r = parseAgentRequest({ search: `?${sp.toString()}` });
  if (!r.ok) throw new Error(r.problems.map((p) => p.message).join('; '));
  return r.request;
}

function renderReview(req: AgentRequest, selected: PermissionKey[] = req.standard, onToggle = vi.fn(), disabled = false) {
  render(<AgentRequestReview request={req} selected={new Set(selected)} onToggle={onToggle} disabled={disabled} />);
  return onToggle;
}

describe('AgentRequestReview', () => {
  it('shows the agent name as unverified text and the full agent address', () => {
    renderReview(request());
    expect(screen.getByText('Nova')).toBeInTheDocument();
    expect(screen.getAllByText(/not verified/i).length).toBeGreaterThan(0);
    const address = screen.getByTestId('agent-address');
    expect(address.textContent?.replace(/\s/g, '')).toBe(CONTROLLER);
  });

  it('renders markup in the name as plain text', () => {
    const { container } = render(
      <AgentRequestReview request={request({ name: '<img src=x onerror=alert(1)>' })} selected={new Set()} onToggle={vi.fn()} />,
    );
    expect(screen.getByText('<img src=x onerror=alert(1)>')).toBeInTheDocument();
    expect(container.querySelector('img[src="x"]')).toBeNull();
  });

  it('shows the purpose as a quote from the link', () => {
    renderReview(request({ purpose: 'Follow the artists you like' }));
    expect(screen.getByText(/Follow the artists you like/)).toBeInTheDocument();
  });

  it('says which profile the request is for, or that it is the connected one', () => {
    renderReview(request());
    expect(screen.getByText(/the profile you connect/i)).toBeInTheDocument();
  });

  it('ticks the requested standard permissions and lets the owner untick them', () => {
    const onToggle = renderReview(request());
    const sign = screen.getByRole('checkbox', { name: /sign messages as your profile/i });
    expect(sign).toBeChecked();
    fireEvent.click(sign);
    expect(onToggle).toHaveBeenCalledWith('SIGN');
  });

  it('leaves elevated permissions unticked and warns when one is ticked', () => {
    const req = request({ permissions: 'SIGN,SUPER_CALL' });
    const { unmount } = render(<AgentRequestReview request={req} selected={new Set(req.standard)} onToggle={vi.fn()} />);
    const superCall = screen.getByRole('checkbox', { name: /call any contract/i });
    expect(superCall).not.toBeChecked();
    expect(screen.queryByTestId('elevated-warning')).toBeNull();
    unmount();
    render(<AgentRequestReview request={req} selected={new Set<PermissionKey>(['SIGN', 'SUPER_CALL'])} onToggle={vi.fn()} />);
    expect(screen.getByTestId('elevated-warning')).toHaveTextContent(/SUPER_CALL|any contract/i);
  });

  it('lists the decoded allowed calls and data keys', () => {
    renderReview(request());
    const calls = screen.getByTestId('allowed-calls');
    expect(within(calls).getByText(/follower registry/i)).toBeInTheDocument();
    expect(within(calls).getByText(/follow\(address\)/)).toBeInTheDocument();
    const keys = screen.getByTestId('allowed-data-keys');
    expect(within(keys).getByText('LSP3Profile')).toBeInTheDocument();
  });

  it('says plainly when there are no allowed calls or data keys', () => {
    const sp = new URLSearchParams({ controller: CONTROLLER, network: 'mainnet', permissions: 'SIGN' });
    const r = parseAgentRequest({ search: `?${sp.toString()}` });
    if (!r.ok) throw new Error('fixture');
    renderReview(r.request);
    expect(within(screen.getByTestId('allowed-calls')).getByText(/none/i)).toBeInTheDocument();
    expect(within(screen.getByTestId('allowed-data-keys')).getByText(/none/i)).toBeInTheDocument();
  });

  it('shows what the agent can never do and that LSP6 has no spending limits', () => {
    renderReview(request());
    expect(screen.getByText(/change the owner of your profile/i)).toBeInTheDocument();
    expect(screen.getByText(/no spending limits/i)).toBeInTheDocument();
  });

  it('shows notes about parts of the request that would have no effect', () => {
    const r = parseAgentRequest({ search: `?${new URLSearchParams({ controller: CONTROLLER, network: 'mainnet', permissions: 'CALL' }).toString()}` });
    if (!r.ok) throw new Error('fixture');
    renderReview(r.request);
    expect(screen.getByText(/CALL has no effect/i)).toBeInTheDocument();
  });

  it('disables every checkbox while a transaction is in progress', () => {
    renderReview(request(), undefined, vi.fn(), true);
    for (const box of screen.getAllByRole('checkbox')) expect(box).toBeDisabled();
  });
});
