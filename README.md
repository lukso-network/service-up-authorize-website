# Universal Profile Authorize

An app that facilitates Universal Profile (UP) import between controller applications on LUKSO. Enables users to authorize new controllers on their UP, allowing them to seamlessly import their profile to a new wallet/app without losing access to their digital identity.

![LUKSO](https://lukso.network/assets/images/logo.svg)

## Features

- 🔍 **Profile Search** - Search for Universal Profiles using the LUKSO Envio Indexer
- 🔐 **Permission Management** - Select from preset permission levels or customize permissions
- 📱 **QR Code Generation** - Generate QR codes for easy cross-device authorization
- 🔗 **Deep Links** - Share authorization links via messaging apps
- ✅ **Transaction Verification** - Verify successful controller authorization on-chain
- 📦 **Static Export** - Deploy to any static hosting provider

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **Web3**: viem + @lukso/up-provider + @erc725/erc725.js
- **GraphQL**: graphql-request (for Envio Indexer)
- **Testing**: Vitest + React Testing Library + Playwright

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- UP Browser Extension (for testing with real wallets)

### Installation

```bash
# Clone the repository
git clone https://github.com/lukso-network/service-up-authorize-website.git
cd service-up-authorize-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Build static export
npm run build

# The output is in the 'out' directory
```

## Testing

```bash
# Run unit tests
npm run test

# Run unit tests once
npm run test:run

# Run tests with coverage
npm run test:coverage

# Run e2e tests (requires dev server or build)
npm run test:e2e

# Run e2e tests with UI
npm run test:e2e:ui
```

`e2e/agent-request.spec.ts` covers agent authorization links on desktop and phone sizes, including a connected flow with a mock UP browser extension and a mock LUKSO RPC (it checks the exact transaction the page builds; it is not an on-chain test). Set `AGENT_E2E_SHOTS=<dir>` to save screenshots.

## How It Works

### Migration Flow

1. **Target Device (New App)**
   - User opens the mini-app in their new wallet/app
   - Connects their new wallet
   - Searches for their existing Universal Profile
   - Selects permission level for the new controller
   - Generates QR code or authorization link

2. **Source Device (Existing App)**
   - User scans QR code or opens authorization link
   - Reviews the authorization request
   - Connects their existing wallet (that controls the UP)
   - Approves the transaction to add the new controller

3. **Verification**
   - The mini-app verifies the controller was added on-chain
   - Both devices can now control the Universal Profile

### LSP6 Permissions

The app uses LSP6 (Key Manager) permissions to control access:

| Permission | Description |
|------------|-------------|
| SUPER_CALL | Call any contract without restrictions |
| SUPER_TRANSFERVALUE | Transfer native tokens without restrictions |
| SUPER_SETDATA | Write any data to the profile |
| SIGN | Sign messages on behalf of the profile |
| And more... | Full LSP6 permission support |

### Agent Authorization Links (AI agents)

An AI agent that uses its own controller key (for example the [Universal Profile agent skill](https://github.com/universal-everything/ai-universalprofile-skill)) can ask a person to add it to their **existing** Universal Profile with one link:

```
https://authorize.universalprofile.cloud/authorize?controller=0x…&network=mainnet&name=Nova&purpose=…&forProfile=0x…&permissions=CALL,SIGN,EXECUTE_RELAY_CALL&allowedCalls=0x…&allowedDataKeys=0x…
```

The link is an untrusted proposal. It only fills in the review page: nothing is written or signed until the owner connects their profile, reviews the request and approves the transaction in their own wallet.

| Parameter | Required | Format and rules |
|-----------|----------|------------------|
| `controller` | yes | The agent's address: `0x` + 40 hex; EIP-55 checksum checked when mixed case; not zero, not the wildcard address, not the profile itself |
| `network` | yes | `mainnet` (LUKSO). The wallet connection of this site supports LUKSO mainnet only, so a LUKSO Testnet request is refused with an explanation, never switched |
| `permissions` | yes | LSP6 permission names, comma separated, no duplicates. Preselected: `CALL`, `STATICCALL`, `TRANSFERVALUE`, `SETDATA`, `SIGN`, `EXECUTE_RELAY_CALL`, `ENCRYPT`, `DECRYPT`. Shown unticked (the owner must tick them): `SUPER_CALL`, `SUPER_TRANSFERVALUE`, `SUPER_STATICCALL`, `SUPER_SETDATA`, `DEPLOY`. Refused: `CHANGEOWNER`, `ADDCONTROLLER`, `EDITPERMISSIONS`, `ADDEXTENSIONS`, `CHANGEEXTENSIONS`, `ADDUNIVERSALRECEIVERDELEGATE`, `CHANGEUNIVERSALRECEIVERDELEGATE`, `REENTRANCY`, `DELEGATECALL`, `SUPER_DELEGATECALL` |
| `allowedCalls` | no | The AllowedCalls value exactly as stored by LSP6 (CompactBytesArray of 32-byte entries), 1–16 entries; call types VALUE, CALL, STATICCALL only; no all-wildcard entry, no zero target, no duplicates |
| `allowedDataKeys` | no | The AllowedERC725YDataKeys value exactly as stored (CompactBytesArray of 1–32-byte keys or prefixes), 1–16 entries; never permission, controller list, Universal Receiver Delegate or extension keys |
| `forProfile` | no | The profile the request is for; the connected profile must match. Without it, the connected profile is used. Named differently from the device-import link's `profile`, so earlier versions of this page never read an agent link as one |
| `name` | no | Display name of the agent, up to 48 characters, shown as unverified text |
| `purpose` | no | What the agent says it needs the access for, up to 200 characters, shown as unverified text |

Every other parameter, a repeated parameter, an empty value, a `#` fragment or a link longer than 4096 characters blocks the request with a visible list of problems; nothing is ever dropped or widened to a default. A link that looks like it carries a private key, seed or password is blocked and removed from the address bar.

What the owner sees and does:

1. The whole request before connecting: the agent's full address (grouped, with its identicon) to compare with what the agent showed, the permissions in plain words with their risk, the decoded allowed calls and data keys, and what an agent link can never grant.
2. Connect: the **UP Browser Extension** ("Browser Extension" in the dialog; it opens the extension store if it is missing) or the **Universal Profile mobile app** ("Mobile Application": a QR code to scan on a computer; on a phone it opens the app through WalletConnect and returns to the page). Inside Universal Everything the page connects through the UP Provider.
3. Checks: the wallet is on the request's network (it is never switched for the owner), the profile matches, the account is a Universal Profile, and the agent's current permissions on it (an existing controller shows what changes).
4. The owner can untick requested permissions (never add any), confirms that the agent address matches, and approves the transaction in the wallet.
5. The transaction sets exactly the reviewed state for this one controller (permissions, AllowedCalls, AllowedERC725YDataKeys; one `AddressPermissions[]` slot when it is new) and nothing else. Afterwards the page reads the controller back and reports success only on an exact match, together with the profile address to send back to the agent.

LSP6 has no spending limits or expiry dates: `TRANSFERVALUE` limits recipients, not amounts. The page says so. Links never contain secrets; the page sets `Referrer-Policy: strict-origin` (no path or query is sent to other sites). On a phone, the UP mobile app receives the page address as its return link.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page - mode selection
│   ├── target/            # Target device flow (new app)
│   ├── authorize/         # Source device flow (existing app)
│   └── success/           # Migration complete page
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── wallet/            # Wallet connection components
│   ├── search/            # Profile search components
│   ├── migration/         # Migration flow components
│   ├── agent/             # Agent authorization request flow
│   └── shared/            # Shared utilities
├── hooks/                 # React hooks
├── lib/                   # Utility libraries
│   ├── indexer/          # GraphQL client & queries
│   ├── lsp6/             # LSP6 transaction building
│   ├── auth-package/     # Auth package encode/decode
│   ├── agent-request/    # Agent authorization link parser and descriptions
│   └── utils/            # General utilities
├── types/                 # TypeScript types
└── constants/            # Constants and configurations
```

## API Integrations

### LUKSO Envio Indexer

Used for searching Universal Profiles:

- **Mainnet**: `https://envio.lukso-mainnet.universal.tech/v1/graphql`
- **Testnet**: `https://envio.lukso-testnet.universal.tech/v1/graphql`

### UP RPC API

The `up_import` method is used to generate a new controller address in the target app.

## Environment Variables

```env
# Required for WalletConnect functionality
# Get your project ID from https://cloud.reown.com/
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id_here

# Optional: Override the base URL for authorization links
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

### WalletConnect Setup

1. Go to [Reown Cloud](https://cloud.reown.com/) (formerly WalletConnect Cloud)
2. Create a new project
3. Copy your Project ID
4. Set it as `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` in your environment
5. For GitHub Pages deployment, add `WALLETCONNECT_PROJECT_ID` to your repository secrets

## Deployment

The app is configured for static export. Deploy the `out` directory to any static hosting:

- **Vercel**: Automatic Next.js support
- **Netlify**: Drag & drop the `out` folder
- **GitHub Pages**: Push `out` to gh-pages branch
- **IPFS**: Pin the `out` directory

## Contributing

Contributions are welcome! Please read our contributing guidelines first.

## License

MIT

## Links

- [LUKSO Documentation](https://docs.lukso.tech)
- [Universal Profile Cloud](https://universalprofile.cloud)
- [LSP6 Key Manager](https://docs.lukso.tech/standards/universal-profile/lsp6-key-manager)
- [UP Provider](https://docs.lukso.tech/tools/apis/up-rpc-api)
