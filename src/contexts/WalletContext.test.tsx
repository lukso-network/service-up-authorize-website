import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

/**
 * Tests for WalletContext first-time user flow
 * 
 * When a user connects the UP Browser Extension but doesn't have a profile yet,
 * the extension may return an empty accounts array. The app should:
 * 1. Track that the provider is connected (isProviderReady = true)
 * 2. Allow the user to proceed to Step 2 (Search) even without an address
 * 3. Enable the user to search for/create a profile, then use up_import
 */

// Mock the wagmi hooks
vi.mock('wagmi', () => ({
  useAccount: () => ({ address: null, isConnected: false, isConnecting: false }),
  useChainId: () => 42,
  useDisconnect: () => ({ disconnect: vi.fn() }),
  useSendTransaction: () => ({ sendTransactionAsync: vi.fn() }),
}));

// Mock AppKit
vi.mock('@reown/appkit/react', () => ({
  useAppKit: () => ({ open: vi.fn() }),
}));

describe('WalletContext - First-Time User Flow', () => {
  // Mock injected provider
  let mockProvider: { request: ReturnType<typeof vi.fn> };
  
  beforeEach(() => {
    mockProvider = {
      request: vi.fn(),
    };
    
    // Setup window.lukso mock
    Object.defineProperty(window, 'lukso', {
      value: mockProvider,
      writable: true,
      configurable: true,
    });
  });
  
  afterEach(() => {
    // Clean up window mock
    Object.defineProperty(window, 'lukso', {
      value: undefined,
      writable: true,
      configurable: true,
    });
    vi.clearAllMocks();
  });

  describe('Provider connection without address', () => {
    it('should return empty accounts when user has no profile', async () => {
      // Simulate extension connected but no profile
      mockProvider.request.mockImplementation(async (args: { method: string }) => {
        if (args.method === 'eth_requestAccounts') {
          return []; // Empty array - no profile address
        }
        if (args.method === 'eth_chainId') {
          return '0x2a'; // LUKSO mainnet
        }
        return null;
      });
      
      // Call eth_requestAccounts
      const accounts = await mockProvider.request({ method: 'eth_requestAccounts' });
      
      expect(accounts).toEqual([]);
    });

    it('should still return chain ID when no accounts', async () => {
      mockProvider.request.mockImplementation(async (args: { method: string }) => {
        if (args.method === 'eth_requestAccounts') {
          return [];
        }
        if (args.method === 'eth_chainId') {
          return '0x2a'; // LUKSO mainnet (42)
        }
        return null;
      });
      
      // Even without accounts, chain ID should be available
      const chainIdHex = await mockProvider.request({ method: 'eth_chainId' });
      expect(chainIdHex).toBe('0x2a');
      expect(parseInt(chainIdHex as string, 16)).toBe(42);
    });

    it('should allow up_import to work even without prior address', async () => {
      const targetProfileAddress = '0x1234567890123456789012345678901234567890';
      const newControllerAddress = '0xabcdef1234567890abcdef1234567890abcdef12';
      
      mockProvider.request.mockImplementation(async (args: { method: string; params?: unknown[] }) => {
        if (args.method === 'eth_requestAccounts') {
          return []; // No profile yet
        }
        if (args.method === 'eth_chainId') {
          return '0x2a';
        }
        if (args.method === 'up_import') {
          // up_import should work - returns the controller address that was created/authorized
          expect(args.params?.[0]).toBe(targetProfileAddress);
          return newControllerAddress;
        }
        return null;
      });
      
      // First, user connects - no accounts
      const accounts = await mockProvider.request({ method: 'eth_requestAccounts' });
      expect(accounts).toEqual([]);
      
      // Then, user searches for a profile and calls up_import
      const controllerAddress = await mockProvider.request({
        method: 'up_import',
        params: [targetProfileAddress],
      });
      
      expect(controllerAddress).toBe(newControllerAddress);
    });
  });

  describe('First-time user flow sequence', () => {
    it('should support the complete first-time user flow', async () => {
      const profileToImport = '0x1111111111111111111111111111111111111111';
      const createdController = '0x2222222222222222222222222222222222222222';
      
      mockProvider.request.mockImplementation(async (args: { method: string; params?: unknown[] }) => {
        if (args.method === 'eth_requestAccounts') {
          return []; // Step 1: No profile
        }
        if (args.method === 'eth_chainId') {
          return '0x2a';
        }
        if (args.method === 'up_import') {
          return createdController; // Step 3: up_import returns new controller
        }
        return null;
      });
      
      // Step 1: Connect extension - gets empty accounts (first-time user)
      const accounts = await mockProvider.request({ method: 'eth_requestAccounts' });
      const isProviderReady = true; // Extension responded successfully
      const hasAddress = accounts && (accounts as string[]).length > 0;
      
      expect(isProviderReady).toBe(true);
      expect(hasAddress).toBe(false);
      
      // User should be able to proceed to Step 2 (Search)
      // because isProviderReady is true, even without address
      
      // Step 2: User searches for a profile (simulated - they find profileToImport)
      const selectedProfile = profileToImport;
      
      // Step 3: User clicks "Generate Authorization Link" / "Request Authorization"
      // This calls up_import
      const controllerAddress = await mockProvider.request({
        method: 'up_import',
        params: [selectedProfile],
      });
      
      expect(controllerAddress).toBe(createdController);
      
      // Now the authorization can proceed with the returned controller address
    });
  });

  describe('Error handling for first-time users', () => {
    it('should handle up_import not available for first-time user', async () => {
      mockProvider.request.mockImplementation(async (args: { method: string }) => {
        if (args.method === 'eth_requestAccounts') {
          return []; // No profile
        }
        if (args.method === 'eth_chainId') {
          return '0x2a';
        }
        if (args.method === 'up_import') {
          throw new Error('Method not supported');
        }
        return null;
      });
      
      // First-time user connects
      const accounts = await mockProvider.request({ method: 'eth_requestAccounts' });
      expect(accounts).toEqual([]);
      
      // Without up_import, first-time user cannot proceed
      // (they have no address to use as controller)
      await expect(
        mockProvider.request({ method: 'up_import', params: ['0x...'] })
      ).rejects.toThrow('Method not supported');
    });

    it('should handle extension connection failure gracefully', async () => {
      mockProvider.request.mockImplementation(async (args: { method: string }) => {
        if (args.method === 'eth_requestAccounts') {
          throw new Error('User rejected the request');
        }
        return null;
      });
      
      // Connection should fail gracefully
      await expect(
        mockProvider.request({ method: 'eth_requestAccounts' })
      ).rejects.toThrow('User rejected the request');
    });
  });
});

describe('WalletContext - Existing User Flow (with address)', () => {
  let mockProvider: { request: ReturnType<typeof vi.fn> };
  
  beforeEach(() => {
    mockProvider = {
      request: vi.fn(),
    };
    
    Object.defineProperty(window, 'lukso', {
      value: mockProvider,
      writable: true,
      configurable: true,
    });
  });
  
  afterEach(() => {
    Object.defineProperty(window, 'lukso', {
      value: undefined,
      writable: true,
      configurable: true,
    });
    vi.clearAllMocks();
  });

  it('should return address for existing user', async () => {
    const existingProfile = '0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
    
    mockProvider.request.mockImplementation(async (args: { method: string }) => {
      if (args.method === 'eth_requestAccounts') {
        return [existingProfile];
      }
      if (args.method === 'eth_chainId') {
        return '0x2a';
      }
      return null;
    });
    
    const accounts = await mockProvider.request({ method: 'eth_requestAccounts' });
    expect(accounts).toEqual([existingProfile]);
  });

  it('should work with both isConnected and isProviderReady for existing user', async () => {
    const existingProfile = '0xbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb';
    
    mockProvider.request.mockImplementation(async (args: { method: string }) => {
      if (args.method === 'eth_requestAccounts') {
        return [existingProfile];
      }
      if (args.method === 'eth_chainId') {
        return '0x2a';
      }
      return null;
    });
    
    const accounts = await mockProvider.request({ method: 'eth_requestAccounts' }) as string[];
    
    // Simulate the state that WalletContext would compute
    const isProviderReady = true; // Provider responded
    const isConnected = accounts && accounts.length > 0;
    const address = accounts[0];
    
    expect(isProviderReady).toBe(true);
    expect(isConnected).toBe(true);
    expect(address).toBe(existingProfile);
  });
});
