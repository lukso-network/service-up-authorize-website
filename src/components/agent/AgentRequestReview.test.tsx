import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { getAddress } from 'viem';
import { AgentRequestReview } from './AgentRequestReview';
import { parseAgentRequest, type AgentRequest } from '@/lib/agent-request/parse';

const CONTROLLER = getAddress('0x5e1c0de0f9b12c2c3ab5a9c1f1b7d0d2a6e4b3c1');
const PROFILE = getAddress('0x9a3dbca554e9f6b9257aaa24010da8377c57c17e');

function request(extra: Record<string, string> = {}): AgentRequest {
  const sp = new URLSearchParams({ controller: CONTROLLER, network: 'mainnet', permissions: 'SIGN', name: 'Nova', ...extra });
  const r = parseAgentRequest({ search: `?${sp.toString()}` });
  if (!r.ok) throw new Error(r.problems.map((p) => p.message).join('; '));
  return r.request;
}

describe('AgentRequestReview', () => {
  it('shows the agent name as unverified text and the full agent address', () => {
    render(<AgentRequestReview request={request()} />);
    expect(screen.getByText('Nova')).toBeInTheDocument();
    expect(screen.getAllByText(/not verified/i).length).toBeGreaterThan(0);
    expect(screen.getByTestId('agent-address').textContent?.replace(/\s/g, '')).toBe(CONTROLLER);
  });

  it('renders markup in the name as plain text', () => {
    const { container } = render(<AgentRequestReview request={request({ name: '<img src=x onerror=alert(1)>' })} />);
    expect(screen.getByText('<img src=x onerror=alert(1)>')).toBeInTheDocument();
    expect(container.querySelector('img[src="x"]')).toBeNull();
  });

  it('shows the purpose as a quote from the link', () => {
    render(<AgentRequestReview request={request({ purpose: 'Follow the artists you like' })} />);
    expect(screen.getByText(/Follow the artists you like/)).toBeInTheDocument();
  });

  it('says which profile the request is for, or that it is the connected one', () => {
    const { unmount } = render(<AgentRequestReview request={request()} />);
    expect(screen.getByText(/the profile you connect/i)).toBeInTheDocument();
    unmount();
    render(<AgentRequestReview request={request({ forProfile: PROFILE })} />);
    expect(screen.getByText(PROFILE)).toBeInTheDocument();
  });

  it('shows the permissions editor between the request and what the agent can never do', () => {
    render(
      <AgentRequestReview request={request()}>
        <p>the editor</p>
      </AgentRequestReview>,
    );
    const editor = screen.getByText('the editor');
    const request_ = screen.getByRole('heading', { name: 'An AI agent asks to act for your profile' });
    const never = screen.getByRole('heading', { name: 'What it can never do with this link' });
    expect(request_.compareDocumentPosition(editor) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(editor.compareDocumentPosition(never) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  it('shows what the agent can never do and that LSP6 has no spending limits', () => {
    render(<AgentRequestReview request={request()} />);
    expect(screen.getByText(/change the owner of your profile/i)).toBeInTheDocument();
    expect(screen.getByText(/no spending limits/i)).toBeInTheDocument();
  });
});
