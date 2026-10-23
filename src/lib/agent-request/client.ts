import { createPublicClient, http, type PublicClient } from 'viem';
import { lukso } from '@/lib/utils/chains';

/** Read-only client for the network an agent request targets (LUKSO mainnet only, see constants.ts). */
export function publicClientFor(chainId: number): PublicClient {
  if (chainId !== lukso.id) throw new Error(`No RPC is configured for chain ${chainId}.`);
  return createPublicClient({ chain: lukso, transport: http() }) as PublicClient;
}
