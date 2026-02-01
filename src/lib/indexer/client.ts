import { GraphQLClient } from 'graphql-request';
import { ENDPOINTS, NetworkId, DEFAULT_NETWORK } from '@/constants/endpoints';

let clientInstance: GraphQLClient | null = null;
let currentNetwork: NetworkId = DEFAULT_NETWORK;

export function getGraphQLClient(network: NetworkId = DEFAULT_NETWORK): GraphQLClient {
  if (!clientInstance || currentNetwork !== network) {
    clientInstance = new GraphQLClient(ENDPOINTS[network].indexer, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    currentNetwork = network;
  }
  return clientInstance;
}

export function setNetwork(network: NetworkId): void {
  currentNetwork = network;
  clientInstance = null;
}

export function getCurrentNetwork(): NetworkId {
  return currentNetwork;
}
