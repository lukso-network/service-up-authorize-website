import { defineChain } from 'viem';

export const lukso = defineChain({
  id: 42,
  name: 'LUKSO',
  nativeCurrency: {
    decimals: 18,
    name: 'LYX',
    symbol: 'LYX',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.mainnet.lukso.network'],
    },
  },
  blockExplorers: {
    default: {
      name: 'LUKSO Explorer',
      url: 'https://explorer.execution.mainnet.lukso.network',
    },
  },
});

export const luksoTestnet = defineChain({
  id: 4201,
  name: 'LUKSO Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'LYXt',
    symbol: 'LYXt',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.testnet.lukso.network'],
    },
  },
  blockExplorers: {
    default: {
      name: 'LUKSO Testnet Explorer',
      url: 'https://explorer.execution.testnet.lukso.network',
    },
  },
  testnet: true,
});

export function getChainById(chainId: number) {
  if (chainId === 42) return lukso;
  if (chainId === 4201) return luksoTestnet;
  return null;
}

/** Human name of a chain for messages ("LUKSO", "LUKSO Testnet", "network 1", "an unknown network"). */
export function chainLabel(chainId: number | null | undefined): string {
  if (chainId === 42) return 'LUKSO';
  if (chainId === 4201) return 'LUKSO Testnet';
  if (chainId === null || chainId === undefined) return 'an unknown network';
  return `network ${chainId}`;
}
