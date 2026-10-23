import { test, expect, devices, type Page, type Route } from '@playwright/test';
import { decodeFunctionData, encodeAbiParameters, getAddress, keccak256, type Hex } from 'viem';

// Public fixtures only: no key behind these addresses is used, and nothing touches a real chain.
const CONTROLLER = getAddress('0x5e1c0de0f9b12c2c3ab5a9c1f1b7d0d2a6e4b3c1');
const PROFILE = getAddress('0x9a3dbca554e9f6b9257aaa24010da8377c57c17e');
const HUMAN_KEY = getAddress('0x2222222222222222222222222222222222222222');
const LSP26 = 'f01103e5a9909fc0dbe8166da7085e0285daddca';
const FOLLOW = `0x0020${'00000002'}${LSP26}ffffffff4dbf27cc`;
const UNFOLLOW = `0020${'00000002'}${LSP26}ffffffff015a4ead`;
const LSP3 = '0x00205ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5';
const SHOTS = process.env.AGENT_E2E_SHOTS;

const UP_ABI = [
  { type: 'function', name: 'getData', stateMutability: 'view', inputs: [{ name: 'dataKey', type: 'bytes32' }], outputs: [{ name: '', type: 'bytes' }] },
  { type: 'function', name: 'setDataBatch', stateMutability: 'payable', inputs: [{ name: 'dataKeys', type: 'bytes32[]' }, { name: 'dataValues', type: 'bytes[]' }], outputs: [] },
] as const;

const PERMISSIONS_KEY = (a: string) => `0x4b80742de2bf82acb3630000${a.slice(2).toLowerCase()}`;
const ALLOWED_CALLS_KEY = (a: string) => `0x4b80742de2bf393a64c70000${a.slice(2).toLowerCase()}`;
const ARRAY_KEY = '0xdf30dba06db6a30e65354d9a64c609861f089545ca58c6b4dbe31a5f338cb0e3';
const ARRAY_INDEX_KEY = (i: number) => `0xdf30dba06db6a30e65354d9a64c60986${i.toString(16).padStart(32, '0')}`;

function agentLink(extra: Record<string, string> = {}) {
  const params = new URLSearchParams({
    controller: CONTROLLER,
    network: 'mainnet',
    permissions: 'CALL,SETDATA,SIGN,EXECUTE_RELAY_CALL',
    allowedCalls: FOLLOW + UNFOLLOW,
    allowedDataKeys: LSP3,
    name: 'Nova',
    purpose: 'Follow artists for you and keep your profile picture fresh.',
    ...extra,
  });
  return `/authorize?${params.toString()}`;
}

async function shot(page: Page, name: string) {
  if (SHOTS) await page.screenshot({ path: `${SHOTS}/${name}.png`, fullPage: true, animations: 'disabled' });
}

/** Keeps every test offline: the profile indexer answers with no profile data. */
async function quietIndexer(page: Page) {
  await page.route(/envio\.lukso-(mainnet|testnet)\.universal\.tech/, (route) =>
    route.request().method() === 'OPTIONS'
      ? route.fulfill({ status: 204, headers: cors })
      : route.fulfill({ status: 200, headers: { ...cors, 'content-type': 'application/json' }, body: JSON.stringify({ data: { Profile: [], profiles: [] } }) }),
  );
}

const cors = { 'access-control-allow-origin': '*', 'access-control-allow-headers': '*', 'access-control-allow-methods': 'POST, OPTIONS' };

test.describe('agent request link: review before connecting (desktop)', () => {
  test.beforeEach(async ({ page }) => quietIndexer(page));

  test('shows the whole request, the full agent address and how to connect, with nothing to sign yet', async ({ page }) => {
    await page.goto(agentLink());
    await expect(page.getByRole('heading', { name: 'An AI agent asks to act for your profile' })).toBeVisible();
    await expect(page.getByText('Nova', { exact: true })).toBeVisible();
    await expect(page.getByText(/Follow artists for you/)).toBeVisible();
    await expect(page.getByTestId('agent-address')).toHaveText(new RegExp(CONTROLLER.slice(2).match(/.{4}/g)!.join('\\s*')));
    await expect(page.getByRole('checkbox', { name: /sign messages as your profile/i })).toBeChecked();
    await expect(page.getByTestId('allowed-calls')).toContainText('follow(address)');
    await expect(page.getByTestId('allowed-calls')).toContainText('unfollow(address)');
    await expect(page.getByTestId('allowed-data-keys')).toContainText('LSP3Profile');
    await expect(page.getByText(/choose Browser Extension/)).toBeVisible();
    await expect(page.getByRole('button', { name: 'Connect Wallet' })).toBeVisible();
    await expect(page.getByRole('button', { name: /authorize agent/i })).toHaveCount(0);
    await shot(page, 'desktop-agent-request-before-connect');
  });

  test('renders a hostile name as text and runs no script', async ({ page }) => {
    const dialogs: string[] = [];
    page.on('dialog', (d) => {
      dialogs.push(d.message());
      void d.dismiss();
    });
    await page.goto(agentLink({ name: '<img src=x onerror=alert(1)>' }));
    await expect(page.getByText('<img src=x onerror=alert(1)>', { exact: true })).toBeVisible();
    await page.waitForTimeout(500);
    expect(dialogs).toEqual([]);
    await expect(page.locator('img[src="x"]')).toHaveCount(0);
  });

  test('blocks a link with an unknown parameter and offers no way to connect', async ({ page }) => {
    await page.goto(`${agentLink()}&redirect=https%3A%2F%2Fexample.org`);
    await expect(page.getByText("This authorization link can't be used")).toBeVisible();
    await expect(page.getByText(/unknown parameter "redirect"/)).toBeVisible();
    await expect(page.getByRole('button', { name: 'Connect Wallet' })).toHaveCount(0);
    await shot(page, 'desktop-agent-request-error');
  });

  test('blocks escalation and testnet requests instead of narrowing or switching them', async ({ page }) => {
    await page.goto(agentLink({ permissions: 'SIGN,ADDCONTROLLER', network: 'testnet' }));
    await expect(page.getByText(/ADDCONTROLLER/)).toBeVisible();
    await expect(page.getByText(/LUKSO Testnet/)).toBeVisible();
    await expect(page.getByRole('button', { name: 'Connect Wallet' })).toHaveCount(0);
  });

  test('removes a link that carries a secret from the address bar', async ({ page }) => {
    await page.goto(`${agentLink()}&privateKey=${'ab'.repeat(32)}`);
    await expect(page.getByText('Stop: this link contains a secret')).toBeVisible();
    await expect.poll(() => new URL(page.url()).search).toBe('');
    await shot(page, 'desktop-agent-request-secret');
  });

  test('keeps the existing plain link flow', async ({ page }) => {
    await page.goto(`/authorize?profile=${PROFILE}&controller=${CONTROLLER}&network=mainnet`);
    await expect(page.getByText('Connect Your Wallet')).toBeVisible();
  });

  test('blocks an existing plain link with an unknown network instead of using mainnet', async ({ page }) => {
    await page.goto(`/authorize?profile=${PROFILE}&controller=${CONTROLLER}&network=bogus`);
    await expect(page.getByText('Invalid authorization link. Please check and try again.')).toBeVisible();
  });

  test('shows an error for an incomplete plain link instead of loading forever', async ({ page }) => {
    await page.goto(`/authorize?profile=${PROFILE}`);
    await expect(page.getByText('Invalid authorization link. Please check and try again.')).toBeVisible();
  });
});

test.describe('agent request link: phone', () => {
  const { defaultBrowserType: _ignored, ...phone } = devices['Pixel 7'];
  test.use(phone);
  test.beforeEach(async ({ page }) => quietIndexer(page));

  test('shows the request before connecting and offers the Universal Profile app', async ({ page }) => {
    await page.goto(agentLink());
    await expect(page.getByText('Nova', { exact: true })).toBeVisible();
    await expect(page.getByText(/On a phone:/)).toBeVisible();
    await shot(page, 'mobile-agent-request-before-connect');
    await page.getByRole('button', { name: 'Connect Wallet' }).click();
    const modal = page.locator('connect-modal');
    await expect(modal.getByText('Mobile Application')).toBeVisible();
    await expect(modal.getByText('Browser Extension')).toHaveCount(0);
    await shot(page, 'mobile-agent-request-connect-options');
  });

  test('shows errors readably on a phone', async ({ page }) => {
    await page.goto(agentLink({ permissions: 'CHANGEOWNER' }));
    await expect(page.getByText(/CHANGEOWNER/)).toBeVisible();
    await shot(page, 'mobile-agent-request-error');
  });
});

// ---------------------------------------------------------------------------
// Connected flow with a MOCK Universal Profile browser extension and a MOCK LUKSO RPC.
// This proves what the page builds and sends; it is not an on-chain proof.
// ---------------------------------------------------------------------------

type Store = Map<string, Hex>;

function mockChain(store: Store, sent: Hex[]) {
  return async (route: Route) => {
    const req = route.request();
    if (req.method() === 'OPTIONS') return route.fulfill({ status: 204, headers: cors });
    const body = JSON.parse(req.postData() ?? '{}');
    const calls = Array.isArray(body) ? body : [body];
    const answer = calls.map((c: { id: number; method: string; params: unknown[] }) => {
      const ok = (result: unknown) => ({ jsonrpc: '2.0', id: c.id, result });
      switch (c.method) {
        case 'eth_chainId':
          return ok('0x2a');
        case 'eth_blockNumber':
          return ok('0x10');
        case 'eth_getCode':
          return ok(String((c.params[0] as string)).toLowerCase() === PROFILE.toLowerCase() ? '0x6080604052' : '0x');
        case 'eth_call': {
          const { data } = c.params[0] as { data: Hex };
          const { args } = decodeFunctionData({ abi: UP_ABI, data });
          const value = store.get((args[0] as string).toLowerCase()) ?? '0x';
          return ok(encodeAbiParameters([{ type: 'bytes' }], [value]));
        }
        case 'mock_sendTransaction': {
          const tx = c.params[0] as { data: Hex; to: string };
          sent.push(tx.data);
          const { args } = decodeFunctionData({ abi: UP_ABI, data: tx.data });
          const [keys, values] = args as unknown as [Hex[], Hex[]];
          keys.forEach((k, i) => store.set(k.toLowerCase(), values[i].toLowerCase() as Hex));
          return ok(keccak256(tx.data));
        }
        case 'eth_getTransactionReceipt': {
          const hash = c.params[0] as Hex;
          return ok({
            transactionHash: hash,
            transactionIndex: '0x0',
            blockHash: `0x${'11'.repeat(32)}`,
            blockNumber: '0x10',
            from: HUMAN_KEY.toLowerCase(),
            to: PROFILE.toLowerCase(),
            cumulativeGasUsed: '0x5208',
            gasUsed: '0x5208',
            effectiveGasPrice: '0x1',
            contractAddress: null,
            logs: [],
            logsBloom: `0x${'00'.repeat(256)}`,
            status: '0x1',
            type: '0x2',
          });
        }
        default:
          return { jsonrpc: '2.0', id: c.id, error: { code: -32601, message: `mock: ${c.method} not supported` } };
      }
    });
    return route.fulfill({ status: 200, headers: { ...cors, 'content-type': 'application/json' }, body: JSON.stringify(Array.isArray(body) ? answer : answer[0]) });
  };
}

/** An EIP-1193 provider announced over EIP-6963 as the Universal Profile extension (rdns cloud.universalprofile). */
function injectMockExtension({ profile, chainIdHex }: { profile: string; chainIdHex: string }) {
  const listeners: Record<string, ((...a: unknown[]) => void)[]> = {};
  let chainId = chainIdHex;
  // like a real extension on a first visit: no account is exposed until the site asks for one
  let authorized = false;
  const emit = (event: string, value: unknown) => (listeners[event] ?? []).forEach((l) => l(value));
  const provider = {
    isUniversalProfileExtension: true,
    async request({ method, params }: { method: string; params?: unknown[] }) {
      switch (method) {
        case 'eth_requestAccounts':
          authorized = true;
          return [profile];
        case 'eth_accounts':
          return authorized ? [profile] : [];
        case 'eth_chainId':
          return chainId;
        case 'net_version':
          return String(parseInt(chainId, 16));
        case 'wallet_switchEthereumChain': {
          chainId = (params?.[0] as { chainId: string }).chainId;
          setTimeout(() => emit('chainChanged', chainId), 0);
          return null;
        }
        case 'wallet_requestPermissions':
        case 'wallet_getPermissions':
          return [{ parentCapability: 'eth_accounts' }];
        case 'wallet_revokePermissions':
          return null;
        case 'eth_sendTransaction': {
          const res = await fetch('https://rpc.mainnet.lukso.network', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'mock_sendTransaction', params }),
          });
          return (await res.json()).result;
        }
        default:
          throw Object.assign(new Error(`mock extension: ${method} not supported`), { code: 4200 });
      }
    },
    on(event: string, l: (...a: unknown[]) => void) {
      (listeners[event] ??= []).push(l);
    },
    removeListener(event: string, l: (...a: unknown[]) => void) {
      listeners[event] = (listeners[event] ?? []).filter((x) => x !== l);
    },
  };
  // test hook: the user changes networks in the wallet after connecting
  (window as unknown as { __mockSwitchChain: (hex: string) => void }).__mockSwitchChain = (hex: string) => {
    chainId = hex;
    emit('chainChanged', hex);
  };
  const announce = () =>
    window.dispatchEvent(
      new CustomEvent('eip6963:announceProvider', {
        detail: Object.freeze({
          info: { uuid: '7d1c5bde-5a7a-4f39-9c0e-6c5b1d1e0a01', name: 'Universal Profiles', icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>', rdns: 'cloud.universalprofile' },
          provider,
        }),
      }),
    );
  window.addEventListener('eip6963:requestProvider', announce);
  announce();
}

test.describe('agent request with a mock UP browser extension (desktop, mock RPC)', () => {
  test('connects, checks, writes exactly the reviewed state and verifies it', async ({ page }) => {
    const store: Store = new Map([
      [ARRAY_KEY, '0x00000000000000000000000000000001'],
      [ARRAY_INDEX_KEY(0), HUMAN_KEY.toLowerCase() as Hex],
      [PERMISSIONS_KEY(HUMAN_KEY), `0x${'0'.repeat(58)}7f3f7f` as Hex],
    ]);
    const sent: Hex[] = [];
    await quietIndexer(page);
    await page.route('https://rpc.mainnet.lukso.network/**', mockChain(store, sent));
    await page.route('https://rpc.mainnet.lukso.network', mockChain(store, sent));
    await page.addInitScript(injectMockExtension, { profile: PROFILE, chainIdHex: '0x2a' });

    await page.goto(agentLink());
    await page.getByRole('button', { name: 'Connect Wallet' }).click();
    await page.locator('connect-modal').getByText('Browser Extension').click();

    await expect(page.getByText('The agent is not a controller of this profile yet. Approving adds it.')).toBeVisible({ timeout: 20000 });
    await expect(page.getByText(/Your wallet is on LUKSO\./)).toBeVisible();
    const authorize = page.getByRole('button', { name: 'Authorize agent' });
    await expect(authorize).toBeDisabled();

    // narrow the request: no signing
    await page.getByRole('checkbox', { name: /sign messages as your profile/i }).uncheck();
    await page.getByRole('checkbox', { name: /I asked for this agent/ }).check();
    await expect(authorize).toBeEnabled();
    await shot(page, 'desktop-agent-request-connected-review');

    await authorize.click();
    await expect(page.getByText('Authorized and verified on LUKSO')).toBeVisible({ timeout: 20000 });
    await expect(page.getByText(PROFILE, { exact: true })).toBeVisible();
    await shot(page, 'desktop-agent-request-verified');

    expect(sent).toHaveLength(1);
    const { functionName, args } = decodeFunctionData({ abi: UP_ABI, data: sent[0] });
    expect(functionName).toBe('setDataBatch');
    const [keys, values] = args as unknown as [Hex[], Hex[]];
    expect(keys.map((k) => k.toLowerCase())).toEqual([
      ARRAY_KEY,
      ARRAY_INDEX_KEY(1),
      PERMISSIONS_KEY(CONTROLLER),
      ALLOWED_CALLS_KEY(CONTROLLER),
      `0x4b80742de2bf866c29110000${CONTROLLER.slice(2).toLowerCase()}`,
    ]);
    // CALL | SETDATA | EXECUTE_RELAY_CALL (SIGN was unticked)
    expect(values[2]).toBe(`0x${(0x800n | 0x40000n | 0x400000n).toString(16).padStart(64, '0')}`);
    expect(values[3]).toBe((FOLLOW + UNFOLLOW).toLowerCase());
    expect(values[4]).toBe(LSP3);
    // the human's own controller is untouched
    expect(store.get(ARRAY_INDEX_KEY(0))).toBe(HUMAN_KEY.toLowerCase());
    expect(store.get(PERMISSIONS_KEY(HUMAN_KEY))).toBe(`0x${'0'.repeat(58)}7f3f7f`);
  });

  test('blocks authorizing when the wallet changes to another network after connecting', async ({ page }) => {
    const sent: Hex[] = [];
    const store: Store = new Map([[ARRAY_KEY, '0x00000000000000000000000000000001'], [ARRAY_INDEX_KEY(0), HUMAN_KEY.toLowerCase() as Hex]]);
    await quietIndexer(page);
    await page.route('https://rpc.mainnet.lukso.network/**', mockChain(store, sent));
    await page.route('https://rpc.mainnet.lukso.network', mockChain(store, sent));
    await page.addInitScript(injectMockExtension, { profile: PROFILE, chainIdHex: '0x2a' });
    await page.goto(agentLink());
    await page.getByRole('button', { name: 'Connect Wallet' }).click();
    await page.locator('connect-modal').getByText('Browser Extension').click();
    await expect(page.getByText('The agent is not a controller of this profile yet. Approving adds it.')).toBeVisible({ timeout: 20000 });

    await page.evaluate(() => (window as unknown as { __mockSwitchChain: (hex: string) => void }).__mockSwitchChain('0x1069'));
    await expect(page.getByText(/Your wallet is on LUKSO Testnet\. Switch it to LUKSO/)).toBeVisible();
    await page.getByRole('checkbox', { name: /I asked for this agent/ }).check();
    await expect(page.getByRole('button', { name: 'Authorize agent' })).toBeDisabled();
    // the request shown is still the one from the link
    await expect(page.getByText('Nova', { exact: true })).toBeVisible();
    await expect(page.getByTestId('allowed-calls')).toContainText('follow(address)');
    await shot(page, 'desktop-agent-request-wrong-network');
    expect(sent).toHaveLength(0);
  });
});
