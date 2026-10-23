import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import { getAddress, type Hex } from 'viem';

const PROFILE = getAddress('0x9a3dbca554e9f6b9257aaa24010da8377c57c17e');
const OTHER_PROFILE = getAddress('0x1234567890abcdef1234567890abcdef12345678');
const CONTROLLER = getAddress('0x5e1c0de0f9b12c2c3ab5a9c1f1b7d0d2a6e4b3c1');
const FOLLOW = `0x0020${'00000002'}${'f01103e5a9909fc0dbe8166da7085e0285daddca'}ffffffff4dbf27cc` as Hex;
const UNFOLLOW = `0020${'00000002'}${'f01103e5a9909fc0dbe8166da7085e0285daddca'}ffffffff015a4ead`;
const LSP3 = '5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5';
const RECIPIENT = getAddress('0x1234567890abcdef1234567890abcdef12345678');
const CALL = 0x800n;
const SIGN = 0x200000n;
const RELAY = 0x400000n;
const DEPLOY = 0x10000n;
const SUPER_CALL = 0x400n;

const mocks = vi.hoisted(() => ({
  wallet: {} as Record<string, unknown>,
  readControllerState: vi.fn(),
  planControllerGrant: vi.fn(),
  grantMatches: vi.fn(),
  client: { getCode: vi.fn(), waitForTransactionReceipt: vi.fn() },
  push: vi.fn(),
}));

vi.mock('next/navigation', () => ({ useRouter: () => ({ push: mocks.push }) }));
vi.mock('@/contexts/WalletContext', () => ({ useWallet: () => mocks.wallet }));
vi.mock('@/components/wallet/WalletConnector', () => ({
  WalletConnector: () => <button type="button">Connect Wallet</button>,
  WalletConnectorCompact: () => null,
}));
vi.mock('@/components/shared/ProfileIdentityCard', () => ({ ProfileIdentityCard: ({ address }: { address: string }) => <span>{address}</span> }));
vi.mock('@/lib/agent-request/client', () => ({ publicClientFor: () => mocks.client }));
vi.mock('@/lib/lsp6/grant', () => ({
  readControllerState: mocks.readControllerState,
  planControllerGrant: mocks.planControllerGrant,
  grantMatches: mocks.grantMatches,
}));

import { AgentAuthorizeFlow } from './AgentAuthorizeFlow';

const NEW_STATE = { permissions: 0n, allowedCalls: '0x', allowedDataKeys: '0x', arrayIndex: null, arrayLength: 2n, firstEmptySlot: null };

function link(extra: Record<string, string> = {}) {
  return `?${new URLSearchParams({ controller: CONTROLLER, network: 'mainnet', permissions: 'CALL,SIGN,EXECUTE_RELAY_CALL', allowedCalls: FOLLOW, name: 'Nova', ...extra }).toString()}`;
}

function connect(over: Record<string, unknown> = {}) {
  Object.assign(mocks.wallet, { isConnected: true, address: PROFILE, walletChainId: 42, walletSource: 'injected', error: null, ...over });
}

beforeEach(() => {
  for (const k of Object.keys(mocks.wallet)) delete mocks.wallet[k];
  Object.assign(mocks.wallet, {
    isConnected: false,
    address: null,
    walletChainId: null,
    walletSource: null,
    isInMiniAppContext: false,
    error: null,
    disconnect: vi.fn(),
    sendTransaction: vi.fn().mockResolvedValue('0xabc'),
  });
  mocks.readControllerState.mockReset().mockResolvedValue(NEW_STATE);
  mocks.planControllerGrant.mockReset().mockResolvedValue({ calldata: '0x97902421', current: NEW_STATE, keys: ['0x1'], values: ['0x2'], changes: {} });
  mocks.grantMatches.mockReset().mockReturnValue({ matches: true, differences: [] });
  mocks.client.getCode.mockReset().mockResolvedValue('0x6080');
  mocks.client.waitForTransactionReceipt.mockReset().mockResolvedValue({ status: 'success' });
  mocks.push.mockReset();
});

const authorizeButton = () => screen.getByRole('button', { name: /authorize agent/i });
const acknowledge = () => fireEvent.click(screen.getByRole('checkbox', { name: /i asked for this agent/i }));
const box = (name: RegExp) => screen.getByRole('checkbox', { name });
const changes = () => screen.getByTestId('request-changes');
async function approve() {
  await screen.findByText(/not a controller of this profile yet/i);
  acknowledge();
  fireEvent.click(authorizeButton());
  await screen.findByText(/authorized and verified/i);
  return mocks.planControllerGrant.mock.calls[0][3];
}

describe('AgentAuthorizeFlow: links that cannot be used', () => {
  it('lists the problems and offers no way to connect', () => {
    render(<AgentAuthorizeFlow search={link({ network: 'testnet' })} hash="" />);
    expect(screen.getByText(/can't be used/i)).toBeInTheDocument();
    expect(screen.getByText(/LUKSO Testnet/)).toBeInTheDocument();
    expect(screen.getByText(/nothing was changed/i)).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /connect wallet/i })).toBeNull();
  });

  it('removes a link with a secret from the address bar and warns', () => {
    const spy = vi.spyOn(window.history, 'replaceState');
    render(<AgentAuthorizeFlow search={`${link()}&privateKey=${'ab'.repeat(32)}`} hash="" />);
    expect(screen.getByText(/do not use this link/i)).toBeInTheDocument();
    expect(spy).toHaveBeenCalledWith(null, '', window.location.pathname);
    spy.mockRestore();
  });
});

describe('AgentAuthorizeFlow: before connecting', () => {
  it('shows the whole request and how to connect with the extension or the app', () => {
    render(<AgentAuthorizeFlow search={link()} hash="" />);
    expect(screen.getByText('Nova')).toBeInTheDocument();
    expect(screen.getByTestId('agent-address').textContent?.replace(/\s/g, '')).toBe(CONTROLLER);
    expect(screen.getByRole('button', { name: /connect wallet/i })).toBeInTheDocument();
    expect(screen.getByText(/Browser Extension/)).toBeInTheDocument();
    expect(screen.getAllByText(/Mobile Application/).length).toBeGreaterThan(0);
    expect(screen.queryByRole('button', { name: /authorize agent/i })).toBeNull();
  });
});

describe('AgentAuthorizeFlow: checks after connecting', () => {
  it('blocks a wallet on the wrong network without reading or switching', async () => {
    connect({ walletChainId: 4201 });
    render(<AgentAuthorizeFlow search={link()} hash="" />);
    expect(screen.getByText(/switch it to LUKSO/i)).toBeInTheDocument();
    expect(authorizeButton()).toBeDisabled();
    expect(mocks.readControllerState).not.toHaveBeenCalled();
  });

  it('blocks a different profile than the one the link is for', async () => {
    connect({ address: OTHER_PROFILE });
    render(<AgentAuthorizeFlow search={link({ forProfile: PROFILE })} hash="" />);
    expect(screen.getByText(/connect that profile instead/i)).toBeInTheDocument();
    expect(authorizeButton()).toBeDisabled();
  });

  it('blocks an account that is not a Universal Profile', async () => {
    connect();
    mocks.client.getCode.mockResolvedValue('0x');
    render(<AgentAuthorizeFlow search={link()} hash="" />);
    expect(await screen.findByText(/not a Universal Profile/i)).toBeInTheDocument();
    expect(authorizeButton()).toBeDisabled();
  });

  it('needs the owner to confirm the agent address before authorizing', async () => {
    connect();
    render(<AgentAuthorizeFlow search={link()} hash="" />);
    expect(await screen.findByText(/not a controller of this profile yet/i)).toBeInTheDocument();
    expect(authorizeButton()).toBeDisabled();
    acknowledge();
    expect(authorizeButton()).toBeEnabled();
  });

  it('shows what changes for an agent that is already a controller', async () => {
    connect();
    mocks.readControllerState.mockResolvedValue({ ...NEW_STATE, permissions: 0x200000n | 0x40000n, arrayIndex: 1n });
    render(<AgentAuthorizeFlow search={link()} hash="" />);
    expect(await screen.findByText(/already a controller of this profile/i)).toBeInTheDocument();
    expect(within(screen.getByRole('list', { name: 'Checks' })).getByText(/SETDATA/)).toBeInTheDocument();
  });
});

describe('AgentAuthorizeFlow: authorizing', () => {
  it('writes exactly the reviewed permissions on LUKSO and verifies them afterwards', async () => {
    connect();
    render(<AgentAuthorizeFlow search={link()} hash="" />);
    await screen.findByText(/not a controller of this profile yet/i);
    acknowledge();
    fireEvent.click(authorizeButton());
    await screen.findByText(/authorized and verified/i);
    expect(mocks.planControllerGrant).toHaveBeenCalledWith(mocks.client, PROFILE, CONTROLLER, {
      permissions: 0x800n | 0x200000n | 0x400000n,
      allowedCalls: FOLLOW.toLowerCase(),
      allowedDataKeys: null,
    });
    expect(mocks.wallet.sendTransaction).toHaveBeenCalledWith({ to: PROFILE, data: '0x97902421', chainId: 42 });
    expect(mocks.client.waitForTransactionReceipt).toHaveBeenCalledWith({ hash: '0xabc' });
    expect(screen.getAllByText(PROFILE).length).toBeGreaterThan(0);
  });

  it('leaves out a permission the owner unticked', async () => {
    connect();
    render(<AgentAuthorizeFlow search={link()} hash="" />);
    await screen.findByText(/not a controller of this profile yet/i);
    fireEvent.click(screen.getByRole('checkbox', { name: /sign messages as your profile/i }));
    acknowledge();
    fireEvent.click(authorizeButton());
    await screen.findByText(/authorized and verified/i);
    expect(mocks.planControllerGrant.mock.calls[0][3].permissions).toBe(0x800n | 0x400000n);
  });

  it('cannot authorize with every permission unticked', async () => {
    connect();
    render(<AgentAuthorizeFlow search={`?${new URLSearchParams({ controller: CONTROLLER, network: 'mainnet', permissions: 'SIGN' }).toString()}`} hash="" />);
    await screen.findByText(/not a controller of this profile yet/i);
    fireEvent.click(screen.getByRole('checkbox', { name: /sign messages as your profile/i }));
    acknowledge();
    expect(authorizeButton()).toBeDisabled();
    expect(screen.getByText(/select at least one permission/i)).toBeInTheDocument();
  });

  it('sends nothing when the profile cannot be read', async () => {
    connect();
    render(<AgentAuthorizeFlow search={link()} hash="" />);
    await screen.findByText(/not a controller of this profile yet/i);
    mocks.planControllerGrant.mockRejectedValue(new Error('rpc timeout'));
    acknowledge();
    fireEvent.click(authorizeButton());
    expect(await screen.findByText(/rpc timeout/)).toBeInTheDocument();
    expect(mocks.wallet.sendTransaction).not.toHaveBeenCalled();
  });

  it('reports a wallet that did not send', async () => {
    connect();
    (mocks.wallet.sendTransaction as ReturnType<typeof vi.fn>).mockResolvedValue(null);
    render(<AgentAuthorizeFlow search={link()} hash="" />);
    await screen.findByText(/not a controller of this profile yet/i);
    acknowledge();
    fireEvent.click(authorizeButton());
    expect(await screen.findByText(/was not sent/i)).toBeInTheDocument();
    expect(mocks.client.waitForTransactionReceipt).not.toHaveBeenCalled();
  });

  it('reports a reverted transaction', async () => {
    connect();
    mocks.client.waitForTransactionReceipt.mockResolvedValue({ status: 'reverted' });
    render(<AgentAuthorizeFlow search={link()} hash="" />);
    await screen.findByText(/not a controller of this profile yet/i);
    acknowledge();
    fireEvent.click(authorizeButton());
    expect(await screen.findByText(/reverted/i)).toBeInTheDocument();
    expect(screen.queryByText(/authorized and verified/i)).toBeNull();
  });

  it('does not claim success when the stored permissions differ from the reviewed ones', async () => {
    connect();
    mocks.grantMatches.mockReturnValue({ matches: false, differences: ['permissions'] });
    render(<AgentAuthorizeFlow search={link()} hash="" />);
    await screen.findByText(/not a controller of this profile yet/i);
    acknowledge();
    fireEvent.click(authorizeButton());
    expect(await screen.findByText(/different permissions/i)).toBeInTheDocument();
    expect(screen.queryByText(/authorized and verified/i)).toBeNull();
  });

  it('sends nothing when the agent already has exactly these permissions', async () => {
    connect();
    mocks.planControllerGrant.mockResolvedValue({ calldata: null, current: NEW_STATE, keys: [], values: [], changes: {} });
    render(<AgentAuthorizeFlow search={link()} hash="" />);
    await screen.findByText(/not a controller of this profile yet/i);
    acknowledge();
    fireEvent.click(authorizeButton());
    expect(await screen.findByText(/already had exactly these permissions/i)).toBeInTheDocument();
    expect(mocks.wallet.sendTransaction).not.toHaveBeenCalled();
  });
});

describe('AgentAuthorizeFlow: account changes', () => {
  it('re-checks when the wallet switches to another account', async () => {
    connect();
    const { rerender } = render(<AgentAuthorizeFlow search={link({ forProfile: PROFILE })} hash="" />);
    await screen.findByText(/not a controller of this profile yet/i);
    connect({ address: OTHER_PROFILE });
    rerender(<AgentAuthorizeFlow search={link({ forProfile: PROFILE })} hash="" />);
    await waitFor(() => expect(screen.getByText(/connect that profile instead/i)).toBeInTheDocument());
    expect(screen.getByText('Nova')).toBeInTheDocument();
    expect(authorizeButton()).toBeDisabled();
  });
});

describe('AgentAuthorizeFlow: the site’s permissions editor, prefilled from the link', () => {
  it('fills the existing editor: requested permissions ticked, the rest offered, the link’s limits as entries', () => {
    render(<AgentAuthorizeFlow search={link()} hash="" />);
    expect(screen.getByRole('tab', { name: 'Custom' })).toHaveAttribute('data-state', 'active');
    expect(box(/use the contracts listed below/i)).toBeChecked();
    expect(box(/sign messages as your profile/i)).toBeChecked();
    expect(box(/act without its own gas/i)).toBeChecked();
    expect(box(/change the profile data listed below/i)).not.toBeChecked();
    expect(box(/create new contracts from your profile/i)).toBeEnabled();
    expect(screen.getByText(/Call: the LSP26 follower registry .* follow a profile/)).toBeInTheDocument();
    expect(within(changes()).getByText(/exactly what Nova asked for/i)).toBeInTheDocument();
  });

  it('never offers what an agent may never get', () => {
    render(<AgentAuthorizeFlow search={link()} hash="" />);
    // the 13 permissions an agent link may ask for, nothing else
    const offered = screen.getAllByRole('checkbox').map((c) => c.closest('label')?.textContent ?? '');
    expect(offered).toHaveLength(13);
    for (const key of ['CHANGEOWNER', 'ADDCONTROLLER', 'EDITPERMISSIONS', 'ADDEXTENSIONS', 'CHANGEEXTENSIONS', 'ADDUNIVERSALRECEIVERDELEGATE', 'CHANGEUNIVERSALRECEIVERDELEGATE', 'REENTRANCY', 'DELEGATECALL']) {
      expect(offered.join(' ')).not.toMatch(new RegExp(`\\b${key}\\b`));
    }
    expect(screen.queryByRole('button', { name: /Full Control/ })).toBeNull();
    expect(screen.queryByRole('button', { name: /LSP17 Extensions/ })).toBeNull();
    expect(screen.queryByRole('button', { name: /Universal Receiver Delegate/ })).toBeNull();
  });

  it('keeps high-risk permissions unticked until the owner ticks them, and warns when ticked', async () => {
    render(<AgentAuthorizeFlow search={link({ permissions: 'SIGN,SUPER_CALL' })} hash="" />);
    expect(box(/call any contract as your profile/i)).not.toBeChecked();
    expect(within(changes()).getByText(/not selected.*SUPER_CALL/i)).toBeInTheDocument();
    expect(screen.queryByTestId('elevated-warning')).toBeNull();
    fireEvent.click(box(/call any contract as your profile/i));
    fireEvent.click(await screen.findByRole('button', { name: /Enable & Clear Entries/ }));
    await waitFor(() => expect(screen.getByTestId('elevated-warning')).toHaveTextContent(/SUPER_CALL/));
  });

  it('writes a permission the owner unticked and ticked again, and one the agent did not ask for', async () => {
    connect();
    render(<AgentAuthorizeFlow search={link()} hash="" />);
    fireEvent.click(box(/sign messages as your profile/i));
    expect(within(changes()).getByText(/not selected.*SIGN/i)).toBeInTheDocument();
    fireEvent.click(box(/sign messages as your profile/i));
    fireEvent.click(box(/create new contracts from your profile/i));
    expect(within(changes()).getByText(/added by you.*DEPLOY/i)).toBeInTheDocument();
    expect(screen.getByTestId('elevated-warning')).toHaveTextContent(/DEPLOY/);
    expect((await approve()).permissions).toBe(CALL | SIGN | RELAY | DEPLOY);
  });

  it('writes the owner’s edited limits: a removed allowed call and an added data key', async () => {
    connect();
    render(<AgentAuthorizeFlow search={link({ allowedCalls: `${FOLLOW}${UNFOLLOW}`, permissions: 'CALL,SETDATA,EXECUTE_RELAY_CALL' })} hash="" />);
    fireEvent.click(screen.getAllByRole('button', { name: 'Remove entry' })[1]);
    fireEvent.click(screen.getByRole('button', { name: 'LSP3Profile' }));
    expect(within(changes()).getByText(/allowed call removed.*unfollow a profile/i)).toBeInTheDocument();
    expect(within(changes()).getByText(/data key added.*LSP3Profile/i)).toBeInTheDocument();
    const target = await approve();
    expect(target).toEqual({ permissions: CALL | 0x40000n | RELAY, allowedCalls: FOLLOW.toLowerCase(), allowedDataKeys: `0x0020${LSP3}` });
    expect(mocks.grantMatches).toHaveBeenCalledWith(NEW_STATE, target);
  });

  it('never adds a permission on its own when the owner edits the limits', () => {
    render(<AgentAuthorizeFlow search={link({ permissions: 'SIGN' })} hash="" />);
    fireEvent.click(screen.getByRole('button', { name: /Add Allowed Call Entry/ }));
    fireEvent.click(screen.getByRole('button', { name: 'LSP3Profile' }));
    expect(box(/use the contracts listed below/i)).not.toBeChecked();
    expect(box(/change the profile data listed below/i)).not.toBeChecked();
    expect(screen.getByText(/CALL is not selected/)).toBeInTheDocument();
  });

  it('shows a send-LYX-only allowed call as an editable Transfer Value entry and writes it back unchanged', async () => {
    connect();
    const pay = `0x0020${'00000001'}${RECIPIENT.slice(2).toLowerCase()}ffffffffffffffff`;
    render(<AgentAuthorizeFlow search={link({ permissions: 'TRANSFERVALUE', allowedCalls: pay })} hash="" />);
    expect(screen.getByText(new RegExp(`Send LYX to ${RECIPIENT}`))).toBeInTheDocument();
    fireEvent.click(screen.getByText('#1'));
    expect(box(/^Transfer Value ?\(Send LYX\)/)).toBeChecked();
    expect(screen.queryByRole('checkbox', { name: /^Delegate Call/ })).toBeNull();
    expect((await approve()).allowedCalls).toBe(pay);
  });

  it('blocks authorizing while an edited entry is not valid, instead of writing "any function"', async () => {
    connect();
    render(<AgentAuthorizeFlow search={link()} hash="" />);
    await screen.findByText(/not a controller of this profile yet/i);
    acknowledge();
    fireEvent.click(screen.getByText('#1'));
    fireEvent.change(screen.getByDisplayValue('follow(address)'), { target: { value: 'follow(' } });
    expect(screen.getByTestId('draft-problems')).toHaveTextContent(/allowed call #1.*function/i);
    expect(authorizeButton()).toBeDisabled();
    fireEvent.change(screen.getByDisplayValue('follow('), { target: { value: 'unfollow(address)' } });
    expect(screen.queryByTestId('draft-problems')).toBeNull();
    fireEvent.click(authorizeButton());
    await screen.findByText(/authorized and verified/i);
    expect(mocks.planControllerGrant.mock.calls[0][3].allowedCalls).toBe(`0x0020${'00000002'}f01103e5a9909fc0dbe8166da7085e0285daddcaffffffff015a4ead`);
  });

  it('asks before SUPER_CALL replaces the allowed calls, then writes SUPER_CALL without them', async () => {
    connect();
    render(<AgentAuthorizeFlow search={link({ permissions: 'CALL,SIGN,EXECUTE_RELAY_CALL,SUPER_CALL' })} hash="" />);
    fireEvent.click(box(/call any contract as your profile/i));
    fireEvent.click(await screen.findByRole('button', { name: /Enable & Clear Entries/ }));
    await waitFor(() => expect(box(/call any contract as your profile/i)).toBeChecked());
    expect(await approve()).toEqual({ permissions: CALL | SIGN | RELAY | SUPER_CALL, allowedCalls: null, allowedDataKeys: null });
  });

  it('keeps the owner’s edits when the wallet connects, changes network or account, and the page re-renders', async () => {
    const { rerender } = render(<AgentAuthorizeFlow search={link({ forProfile: PROFILE })} hash="" />);
    fireEvent.click(box(/sign messages as your profile/i));
    fireEvent.click(box(/create new contracts from your profile/i));
    fireEvent.click(screen.getByRole('button', { name: 'Remove entry' }));
    const again = () => rerender(<AgentAuthorizeFlow search={link({ forProfile: PROFILE })} hash="" />);

    connect({ walletChainId: 4201 });
    again();
    expect(screen.getByText(/switch it to LUKSO/i)).toBeInTheDocument();
    connect({ address: OTHER_PROFILE });
    again();
    await waitFor(() => expect(screen.getByText(/connect that profile instead/i)).toBeInTheDocument());
    connect();
    again();
    expect(box(/sign messages as your profile/i)).not.toBeChecked();
    expect(box(/create new contracts from your profile/i)).toBeChecked();
    expect(screen.queryByText('#1')).toBeNull();
    expect(await approve()).toEqual({ permissions: CALL | RELAY | DEPLOY, allowedCalls: null, allowedDataKeys: null });
  });

  it('can go back to the agent’s request', () => {
    render(<AgentAuthorizeFlow search={link()} hash="" />);
    expect(screen.queryByRole('button', { name: /reset to nova/i })).toBeNull();
    fireEvent.click(box(/sign messages as your profile/i));
    fireEvent.click(screen.getByRole('button', { name: 'Remove entry' }));
    fireEvent.click(screen.getByRole('button', { name: /reset to nova/i }));
    expect(box(/sign messages as your profile/i)).toBeChecked();
    expect(screen.getByText('#1')).toBeInTheDocument();
    expect(within(changes()).getByText(/exactly what Nova asked for/i)).toBeInTheDocument();
  });

  it('reports success with what the owner approved, and says it differs from the request', async () => {
    connect();
    render(<AgentAuthorizeFlow search={link()} hash="" />);
    fireEvent.click(box(/sign messages as your profile/i));
    await approve();
    expect(screen.getByTestId('approved-summary')).toHaveTextContent('CALL, EXECUTE_RELAY_CALL');
    expect(screen.getByTestId('approved-summary')).not.toHaveTextContent('SIGN');
    expect(screen.getByText(/different from what Nova asked for/i)).toBeInTheDocument();
  });

  it('words the differences for an agent link without a name', async () => {
    connect();
    render(<AgentAuthorizeFlow search={`?${new URLSearchParams({ controller: CONTROLLER, network: 'mainnet', permissions: 'CALL,SIGN', allowedCalls: FOLLOW }).toString()}`} hash="" />);
    fireEvent.click(box(/sign messages as your profile/i));
    expect(within(changes()).getByRole('heading', { name: 'Compared with the agent’s request' })).toBeInTheDocument();
    expect(await screen.findByText('This is different from what the agent asked for (see above).')).toBeInTheDocument();
    await approve();
    expect(screen.getByTestId('approved-summary')).toHaveTextContent('This is different from what the agent asked for;');
  });

  it('disables the editor while the transaction is in progress', async () => {
    connect();
    mocks.client.waitForTransactionReceipt.mockReturnValue(new Promise(() => {}));
    render(<AgentAuthorizeFlow search={link()} hash="" />);
    await screen.findByText(/not a controller of this profile yet/i);
    acknowledge();
    fireEvent.click(authorizeButton());
    await screen.findByText(/waiting for LUKSO to confirm/i);
    expect(box(/sign messages as your profile/i)).toBeDisabled();
    expect(screen.getByRole('button', { name: /Add Allowed Call Entry/ })).toBeDisabled();
  });
});
