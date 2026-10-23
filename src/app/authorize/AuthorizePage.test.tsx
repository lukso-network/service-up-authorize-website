// The existing /authorize permissions page (manual entry and plain profile/controller links): what the owner can
// choose and what is sent. Agent links have their own flow (src/components/agent).
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { getAddress } from 'viem';
import { PERMISSIONS, PERMISSION_PRESETS } from '@/constants/permissions';

const PROFILE = getAddress('0x9a3dbca554e9f6b9257aaa24010da8377c57c17e');
const CONTROLLER = getAddress('0x5e1c0de0f9b12c2c3ab5a9c1f1b7d0d2a6e4b3c1');
const LSP3 = '0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5';
const FOLLOW = `0x0020${'00000002'}f01103e5a9909fc0dbe8166da7085e0285daddcaffffffff4dbf27cc`;

const mocks = vi.hoisted(() => ({
  wallet: {} as Record<string, unknown>,
  search: new URLSearchParams(),
  push: vi.fn(),
  buildSetDataTransaction: vi.fn(),
  client: { waitForTransactionReceipt: vi.fn() },
}));

vi.mock('next/navigation', () => ({ useRouter: () => ({ push: mocks.push }), useSearchParams: () => mocks.search }));
vi.mock('@/contexts/WalletContext', () => ({ useWallet: () => mocks.wallet }));
vi.mock('@/components/wallet/WalletConnector', () => ({
  WalletConnector: () => <button type="button">Connect Wallet</button>,
  WalletConnectorCompact: () => null,
}));
vi.mock('@/components/shared/ProfileIdentityCard', () => ({ ProfileIdentityCard: ({ address }: { address: string }) => <span>{address}</span> }));
vi.mock('@/lib/lsp6/transaction', () => ({ buildSetDataTransaction: mocks.buildSetDataTransaction, buildRemoveControllerTransaction: vi.fn() }));
vi.mock('viem', async (importOriginal) => ({ ...(await importOriginal<typeof import('viem')>()), createPublicClient: () => mocks.client }));

import AuthorizePage from './page';

beforeEach(() => {
  for (const k of Object.keys(mocks.wallet)) delete mocks.wallet[k];
  Object.assign(mocks.wallet, {
    isConnected: true,
    address: PROFILE,
    network: 'mainnet',
    walletChainId: 42,
    walletSource: 'injected',
    isInMiniAppContext: false,
    error: null,
    disconnect: vi.fn(),
    sendTransaction: vi.fn().mockResolvedValue('0xabc'),
  });
  mocks.search = new URLSearchParams();
  mocks.push.mockReset();
  mocks.buildSetDataTransaction.mockReset().mockResolvedValue('0xfeed');
  mocks.client.waitForTransactionReceipt.mockReset().mockReturnValue(new Promise(() => {}));
});

afterEach(() => window.history.replaceState(null, '', '/'));

async function enterControllerManually() {
  render(<AuthorizePage />);
  fireEvent.change(screen.getByLabelText('Controller Address'), { target: { value: CONTROLLER } });
  fireEvent.click(screen.getByRole('button', { name: 'Continue' }));
  await screen.findByText('Authorize Controller');
}

const openCustomTab = () => fireEvent.mouseDown(screen.getByRole('tab', { name: 'Custom' }));
const box = (name: RegExp) => screen.getByRole('checkbox', { name });
const SUPER_CALL = /^Super Call/;
const CALL = /^Call Call contracts/;
const SUPER_SETDATA = /^Super Set Data/;
const SETDATA = /^Set Data/;
/** The editors' summary lines ("1 entry configured — …") split the count into its own element. */
const summary = (re: RegExp) => screen.queryByText((_, el) => el?.tagName === 'P' && re.test(el.textContent ?? ''));

describe('authorize page (manual entry): permissions section', () => {
  it('starts with the Standard Wallet preset on the Presets tab', async () => {
    await enterControllerManually();
    expect(screen.getByRole('tab', { name: 'Presets' })).toHaveAttribute('data-state', 'active');
    expect(screen.getByRole('button', { name: /Standard Wallet/ }).querySelector('svg')).not.toBeNull();
    expect(screen.getByRole('button', { name: /Full Control/ }).querySelector('svg')).toBeNull();
    openCustomTab();
    expect(box(SUPER_CALL)).toBeChecked();
    expect(box(CALL)).not.toBeChecked();
  });

  it('offers every LSP6 permission, including the sensitive ones', async () => {
    await enterControllerManually();
    openCustomTab();
    expect(screen.getAllByRole('checkbox')).toHaveLength(Object.keys(PERMISSIONS).length);
    expect(box(/^Change Owner/)).toBeEnabled();
    expect(box(/^Delegate Call/)).toBeEnabled();
    fireEvent.click(box(/^Change Owner/));
    expect(screen.getByText(/You are granting sensitive permissions/)).toBeInTheDocument();
  });

  it('hides a restriction list while its SUPER permission is on, and ticks CALL / SETDATA when restrictions are added', async () => {
    await enterControllerManually();
    openCustomTab();
    expect(screen.getByText(/this controller can call any contract without restrictions/)).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Add Allowed Call Entry/ })).toBeNull();

    fireEvent.click(box(SUPER_CALL));
    fireEvent.click(screen.getByRole('button', { name: /Add Allowed Call Entry/ }));
    expect(box(CALL)).toBeChecked();
    expect(box(SUPER_CALL)).not.toBeChecked();

    fireEvent.click(box(SUPER_SETDATA));
    fireEvent.click(screen.getByRole('button', { name: 'LSP3Profile' }));
    expect(box(SETDATA)).toBeChecked();
    expect(summary(/^1 data key configured/)).toBeInTheDocument();
  });

  it('asks before SUPER_CALL replaces the allowed calls, and clears them only when confirmed', async () => {
    await enterControllerManually();
    openCustomTab();
    fireEvent.click(box(SUPER_CALL));
    fireEvent.click(screen.getByRole('button', { name: /Add Allowed Call Entry/ }));
    expect(summary(/^1 entry configured/)).toBeInTheDocument();

    fireEvent.click(box(SUPER_CALL));
    expect(await screen.findByText('Enable SUPER_CALL?')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));
    await waitFor(() => expect(screen.queryByText('Enable SUPER_CALL?')).toBeNull());
    expect(box(SUPER_CALL)).not.toBeChecked();
    expect(summary(/^1 entry configured/)).toBeInTheDocument();

    fireEvent.click(box(SUPER_CALL));
    fireEvent.click(await screen.findByRole('button', { name: /Enable & Clear Entries/ }));
    await waitFor(() => expect(box(SUPER_CALL)).toBeChecked());
    expect(summary(/entr(y|ies) configured/)).toBeNull();
    expect(screen.getByText(/this controller can call any contract without restrictions/)).toBeInTheDocument();
  });

  it('sends the selected permissions and restrictions for the entered controller on the wallet profile', async () => {
    await enterControllerManually();
    openCustomTab();
    fireEvent.click(box(SUPER_SETDATA));
    fireEvent.click(screen.getByRole('button', { name: 'LSP3Profile' }));
    fireEvent.click(screen.getByRole('button', { name: 'Authorize' }));
    await waitFor(() => expect(mocks.wallet.sendTransaction).toHaveBeenCalled());
    const expected = (PERMISSION_PRESETS.STANDARD_WALLET & ~PERMISSIONS.SUPER_SETDATA) | PERMISSIONS.SETDATA;
    expect(mocks.buildSetDataTransaction).toHaveBeenCalledWith(mocks.client, PROFILE, CONTROLLER, expected, undefined, `0x0020${LSP3.slice(2)}`);
    expect(mocks.wallet.sendTransaction).toHaveBeenCalledWith({ to: PROFILE, data: '0xfeed', chainId: 42 });
  });
});

describe('authorize page (plain profile/controller link)', () => {
  it('reviews the linked controller with the Standard Wallet preset and sends it on the link network', async () => {
    const query = `profile=${PROFILE}&controller=${CONTROLLER}&network=mainnet`;
    window.history.replaceState(null, '', `/authorize?${query}`);
    mocks.search = new URLSearchParams(query);
    render(<AuthorizePage />);
    await screen.findByText('Authorize Controller');
    fireEvent.click(screen.getByRole('button', { name: 'Authorize' }));
    await waitFor(() => expect(mocks.wallet.sendTransaction).toHaveBeenCalled());
    expect(mocks.buildSetDataTransaction).toHaveBeenCalledWith(mocks.client, PROFILE, CONTROLLER, PERMISSION_PRESETS.STANDARD_WALLET, undefined, undefined);
    expect(mocks.wallet.sendTransaction).toHaveBeenCalledWith({ to: PROFILE, data: '0xfeed', chainId: 42 });
  });
});

describe('authorize page (agent link)', () => {
  it('prefills the editor from the link once and keeps the owner’s edits when the address bar or the wallet changes', () => {
    const query = new URLSearchParams({ controller: CONTROLLER, network: 'mainnet', permissions: 'CALL,SIGN', allowedCalls: FOLLOW, name: 'Nova' }).toString();
    window.history.replaceState(null, '', `/authorize?${query}`);
    Object.assign(mocks.wallet, { isConnected: false, address: null, walletChainId: null });
    const { rerender } = render(<AuthorizePage />);
    const sign = screen.getByRole('checkbox', { name: /sign messages as your profile/i });
    expect(sign).toBeChecked();
    fireEvent.click(sign);

    // the address bar changes and the wallet connects (on another network): nothing reads the link again
    window.history.replaceState(null, '', '/authorize');
    Object.assign(mocks.wallet, { isConnected: true, address: PROFILE, walletChainId: 4201 });
    rerender(<AuthorizePage />);
    expect(screen.getByText(/switch it to LUKSO/i)).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: /sign messages as your profile/i })).not.toBeChecked();
    expect(screen.getByRole('checkbox', { name: /use the contracts listed below/i })).toBeChecked();
  });
});
