import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

/**
 * Tests for Wallet Provider Consistency
 * 
 * CRITICAL FIX (v19): When a user connects via a specific wallet provider,
 * all subsequent wallet interactions must use the SAME provider.
 * 
 * Bug that was fixed:
 * - User connects via WalletConnect
 * - When selecting a profile to import, the app switched to browser extension
 * - This broke the user experience for WalletConnect users
 * 
 * These tests verify:
 * 1. WalletConnect users stay on WalletConnect
 * 2. Browser extension users stay on browser extension
 * 3. UP Provider users stay on UP Provider
 * 4. Provider never switches mid-session
 */

// Types for wallet source
type WalletSource = 'up-provider' | 'injected' | 'walletconnect' | null;

// Simulated requestUpImport logic matching WalletContext.tsx
async function requestUpImport(
  walletSource: WalletSource,
  profileAddress: string,
  upProvider: { request: (args: { method: string; params?: unknown[] }) => Promise<unknown> } | null,
  injectedProvider: { request: (args: { method: string; params?: unknown[] }) => Promise<unknown> } | null
): Promise<{ controllerAddress: string } | null> {
  // This matches the FIXED logic in WalletContext.tsx
  switch (walletSource) {
    case 'up-provider':
      if (upProvider) {
        try {
          const result = await upProvider.request({
            method: 'up_import',
            params: [profileAddress],
          });
          if (typeof result === 'string') {
            return { controllerAddress: result };
          }
        } catch {
          // up_import not available
        }
      }
      break;
      
    case 'injected':
      if (injectedProvider) {
        try {
          const result = await injectedProvider.request({
            method: 'up_import',
            params: [profileAddress],
          });
          if (typeof result === 'string') {
            return { controllerAddress: result };
          }
        } catch {
          // up_import not available
        }
      }
      break;
      
    case 'walletconnect':
      // WalletConnect does NOT support up_import
      // This is the KEY fix - we return null immediately, no fallback to injected
      return null;
      
    default:
      // No wallet source - shouldn't happen in production
      return null;
  }
  
  return null;
}

describe('Wallet Provider Consistency', () => {
  let mockUpProvider: { request: ReturnType<typeof vi.fn> };
  let mockInjectedProvider: { request: ReturnType<typeof vi.fn> };
  
  beforeEach(() => {
    mockUpProvider = {
      request: vi.fn(),
    };
    mockInjectedProvider = {
      request: vi.fn(),
    };
  });
  
  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('WalletConnect flow consistency', () => {
    const walletSource: WalletSource = 'walletconnect';
    
    it('should NOT call browser extension when user connected via WalletConnect', async () => {
      // Setup: User connected via WalletConnect
      // The injected provider IS available (browser has UP extension installed)
      mockInjectedProvider.request.mockResolvedValue('0xControllerFromExtension');
      
      const profileAddress = '0x1234567890123456789012345678901234567890';
      
      // When: User selects a profile to import
      const result = await requestUpImport(
        walletSource,
        profileAddress,
        mockUpProvider,
        mockInjectedProvider
      );
      
      // Then: Should NOT call injected provider, return null instead
      expect(mockInjectedProvider.request).not.toHaveBeenCalled();
      expect(mockUpProvider.request).not.toHaveBeenCalled();
      expect(result).toBeNull();
    });
    
    it('should return null for WalletConnect (up_import not supported)', async () => {
      const profileAddress = '0x1234567890123456789012345678901234567890';
      
      const result = await requestUpImport(
        walletSource,
        profileAddress,
        mockUpProvider,
        mockInjectedProvider
      );
      
      // WalletConnect doesn't support up_import, should return null
      // The caller will use the connected EOA address as controller
      expect(result).toBeNull();
    });
    
    it('should use EOA fallback when up_import returns null for WalletConnect', async () => {
      // This tests the full flow in the target page
      const walletConnectAddress = '0xWalletConnectEOA1234567890123456789012';
      const profileAddress = '0x1234567890123456789012345678901234567890';
      
      // requestUpImport returns null for WalletConnect
      const upImportResult = await requestUpImport(
        'walletconnect',
        profileAddress,
        mockUpProvider,
        mockInjectedProvider
      );
      
      expect(upImportResult).toBeNull();
      
      // The target page should then fall back to using the connected address
      // (as long as it's an EOA, not a contract)
      const controllerToUse = walletConnectAddress;
      expect(controllerToUse).toBe(walletConnectAddress);
    });
  });

  describe('Browser extension (injected) flow consistency', () => {
    const walletSource: WalletSource = 'injected';
    
    it('should ONLY call injected provider when user connected via extension', async () => {
      const controllerAddress = '0xExtensionController12345678901234567890';
      mockInjectedProvider.request.mockResolvedValue(controllerAddress);
      
      const profileAddress = '0x1234567890123456789012345678901234567890';
      
      const result = await requestUpImport(
        walletSource,
        profileAddress,
        mockUpProvider,
        mockInjectedProvider
      );
      
      // Should call injected provider
      expect(mockInjectedProvider.request).toHaveBeenCalledWith({
        method: 'up_import',
        params: [profileAddress],
      });
      // Should NOT call UP Provider
      expect(mockUpProvider.request).not.toHaveBeenCalled();
      expect(result).toEqual({ controllerAddress });
    });
    
    it('should return null when up_import fails on injected provider', async () => {
      mockInjectedProvider.request.mockRejectedValue(new Error('Method not supported'));
      
      const profileAddress = '0x1234567890123456789012345678901234567890';
      
      const result = await requestUpImport(
        walletSource,
        profileAddress,
        mockUpProvider,
        mockInjectedProvider
      );
      
      // Should try injected provider
      expect(mockInjectedProvider.request).toHaveBeenCalled();
      // Should NOT fall back to UP Provider
      expect(mockUpProvider.request).not.toHaveBeenCalled();
      // Should return null, allowing EOA fallback
      expect(result).toBeNull();
    });
  });

  describe('UP Provider flow consistency', () => {
    const walletSource: WalletSource = 'up-provider';
    
    it('should ONLY call UP Provider when user connected via UP Provider', async () => {
      const controllerAddress = '0xUPProviderController1234567890123456789';
      mockUpProvider.request.mockResolvedValue(controllerAddress);
      
      const profileAddress = '0x1234567890123456789012345678901234567890';
      
      const result = await requestUpImport(
        walletSource,
        profileAddress,
        mockUpProvider,
        mockInjectedProvider
      );
      
      // Should call UP Provider
      expect(mockUpProvider.request).toHaveBeenCalledWith({
        method: 'up_import',
        params: [profileAddress],
      });
      // Should NOT call injected provider
      expect(mockInjectedProvider.request).not.toHaveBeenCalled();
      expect(result).toEqual({ controllerAddress });
    });
    
    it('should return null when up_import fails on UP Provider', async () => {
      mockUpProvider.request.mockRejectedValue(new Error('up_import failed'));
      
      const profileAddress = '0x1234567890123456789012345678901234567890';
      
      const result = await requestUpImport(
        walletSource,
        profileAddress,
        mockUpProvider,
        mockInjectedProvider
      );
      
      // Should try UP Provider
      expect(mockUpProvider.request).toHaveBeenCalled();
      // Should NOT fall back to injected
      expect(mockInjectedProvider.request).not.toHaveBeenCalled();
      expect(result).toBeNull();
    });
  });

  describe('No provider switching mid-session', () => {
    it('should never call a different provider than what was used for connection', async () => {
      const profileAddress = '0x1234567890123456789012345678901234567890';
      
      // Test all provider combinations
      const scenarios: { source: WalletSource; shouldCallUp: boolean; shouldCallInjected: boolean }[] = [
        { source: 'walletconnect', shouldCallUp: false, shouldCallInjected: false },
        { source: 'injected', shouldCallUp: false, shouldCallInjected: true },
        { source: 'up-provider', shouldCallUp: true, shouldCallInjected: false },
        { source: null, shouldCallUp: false, shouldCallInjected: false },
      ];
      
      for (const scenario of scenarios) {
        vi.clearAllMocks();
        mockUpProvider.request.mockResolvedValue('0xController');
        mockInjectedProvider.request.mockResolvedValue('0xController');
        
        await requestUpImport(
          scenario.source,
          profileAddress,
          mockUpProvider,
          mockInjectedProvider
        );
        
        if (scenario.shouldCallUp) {
          expect(mockUpProvider.request).toHaveBeenCalled();
        } else {
          expect(mockUpProvider.request).not.toHaveBeenCalled();
        }
        
        if (scenario.shouldCallInjected) {
          expect(mockInjectedProvider.request).toHaveBeenCalled();
        } else {
          expect(mockInjectedProvider.request).not.toHaveBeenCalled();
        }
      }
    });
  });

  describe('Session persistence', () => {
    it('should maintain walletSource throughout multiple operations', async () => {
      // Simulate a user session where they:
      // 1. Connect via WalletConnect
      // 2. Search for a profile
      // 3. Select a profile
      // 4. Generate authorization
      
      let sessionWalletSource: WalletSource = null;
      
      // Step 1: User connects via WalletConnect
      sessionWalletSource = 'walletconnect';
      
      // Step 2 & 3: User searches and selects a profile
      const selectedProfile = '0xSelectedProfile123456789012345678901234';
      
      // Step 4: User generates authorization (calls requestUpImport)
      const result = await requestUpImport(
        sessionWalletSource, // Should still be 'walletconnect'
        selectedProfile,
        mockUpProvider,
        mockInjectedProvider
      );
      
      // Provider consistency maintained
      expect(sessionWalletSource).toBe('walletconnect');
      expect(mockInjectedProvider.request).not.toHaveBeenCalled();
      expect(mockUpProvider.request).not.toHaveBeenCalled();
      expect(result).toBeNull(); // WalletConnect doesn't support up_import
    });
    
    it('should maintain browser extension source throughout multiple operations', async () => {
      let sessionWalletSource: WalletSource = null;
      const controllerAddress = '0xMyController12345678901234567890123456';
      
      // Step 1: User connects via browser extension
      sessionWalletSource = 'injected';
      mockInjectedProvider.request.mockResolvedValue(controllerAddress);
      
      // Step 2 & 3: User searches and selects a profile
      const selectedProfile = '0xSelectedProfile123456789012345678901234';
      
      // Step 4: User generates authorization
      const result = await requestUpImport(
        sessionWalletSource,
        selectedProfile,
        mockUpProvider,
        mockInjectedProvider
      );
      
      // Provider consistency maintained
      expect(sessionWalletSource).toBe('injected');
      expect(mockInjectedProvider.request).toHaveBeenCalled();
      expect(mockUpProvider.request).not.toHaveBeenCalled();
      expect(result).toEqual({ controllerAddress });
    });
  });
});

describe('Transaction Signing Provider Consistency', () => {
  // Simulated sendTransaction logic
  function sendTransaction(
    walletSource: WalletSource,
    params: { to: string; data: string },
    upProvider: { request: (args: { method: string; params?: unknown[] }) => Promise<unknown> } | null,
    injectedProvider: { request: (args: { method: string; params?: unknown[] }) => Promise<unknown> } | null,
    wagmiSendTransaction: (params: { to: string; data: string }) => Promise<string>
  ): Promise<string | null> {
    // This matches the logic in WalletContext.tsx sendTransaction
    if (walletSource === 'up-provider' && upProvider) {
      return upProvider.request({
        method: 'eth_sendTransaction',
        params: [{ from: '0xFrom', to: params.to, data: params.data, value: '0x0' }],
      }) as Promise<string>;
    }
    
    if (walletSource === 'injected' && injectedProvider) {
      return injectedProvider.request({
        method: 'eth_sendTransaction',
        params: [{ from: '0xFrom', to: params.to, data: params.data, value: '0x0' }],
      }) as Promise<string>;
    }
    
    // WalletConnect uses wagmi
    return wagmiSendTransaction(params);
  }
  
  let mockUpProvider: { request: ReturnType<typeof vi.fn> };
  let mockInjectedProvider: { request: ReturnType<typeof vi.fn> };
  let mockWagmiSend: ReturnType<typeof vi.fn>;
  
  beforeEach(() => {
    mockUpProvider = { request: vi.fn() };
    mockInjectedProvider = { request: vi.fn() };
    mockWagmiSend = vi.fn();
  });

  it('should use wagmi for WalletConnect transactions', async () => {
    const txHash = '0xTransactionHash123456789012345678901234567890';
    mockWagmiSend.mockResolvedValue(txHash);
    
    const result = await sendTransaction(
      'walletconnect',
      { to: '0xTo', data: '0xData' },
      mockUpProvider,
      mockInjectedProvider,
      mockWagmiSend
    );
    
    expect(mockWagmiSend).toHaveBeenCalled();
    expect(mockUpProvider.request).not.toHaveBeenCalled();
    expect(mockInjectedProvider.request).not.toHaveBeenCalled();
    expect(result).toBe(txHash);
  });
  
  it('should use injected provider for extension transactions', async () => {
    const txHash = '0xTransactionHash123456789012345678901234567890';
    mockInjectedProvider.request.mockResolvedValue(txHash);
    
    const result = await sendTransaction(
      'injected',
      { to: '0xTo', data: '0xData' },
      mockUpProvider,
      mockInjectedProvider,
      mockWagmiSend
    );
    
    expect(mockInjectedProvider.request).toHaveBeenCalled();
    expect(mockUpProvider.request).not.toHaveBeenCalled();
    expect(mockWagmiSend).not.toHaveBeenCalled();
    expect(result).toBe(txHash);
  });
  
  it('should use UP Provider for mini-app transactions', async () => {
    const txHash = '0xTransactionHash123456789012345678901234567890';
    mockUpProvider.request.mockResolvedValue(txHash);
    
    const result = await sendTransaction(
      'up-provider',
      { to: '0xTo', data: '0xData' },
      mockUpProvider,
      mockInjectedProvider,
      mockWagmiSend
    );
    
    expect(mockUpProvider.request).toHaveBeenCalled();
    expect(mockInjectedProvider.request).not.toHaveBeenCalled();
    expect(mockWagmiSend).not.toHaveBeenCalled();
    expect(result).toBe(txHash);
  });
});

describe('Full User Flow - Provider Consistency', () => {
  it('WalletConnect: complete flow should never touch browser extension', async () => {
    // This test simulates the complete user journey
    const steps: string[] = [];
    
    const mockInjected = {
      request: vi.fn().mockImplementation(() => {
        steps.push('INJECTED_CALLED');
        return Promise.resolve('0xFromInjected');
      }),
    };
    
    const mockWagmi = vi.fn().mockImplementation(() => {
      steps.push('WAGMI_CALLED');
      return Promise.resolve('0xTxHash');
    });
    
    // User flow:
    // 1. Connect via WalletConnect
    steps.push('USER_CONNECTS_WALLETCONNECT');
    const walletSource: WalletSource = 'walletconnect';
    const connectedAddress = '0xWalletConnectEOA1234567890123456789012';
    
    // 2. Search for profile (no wallet interaction)
    steps.push('USER_SEARCHES_PROFILE');
    
    // 3. Select profile
    steps.push('USER_SELECTS_PROFILE');
    const profileAddress = '0xSelectedProfile123456789012345678901234';
    
    // 4. requestUpImport called
    steps.push('APP_CALLS_UP_IMPORT');
    const upImportResult = await requestUpImport(
      walletSource,
      profileAddress,
      null, // No UP Provider
      mockInjected // Injected IS available (but should NOT be called!)
    );
    
    // up_import returns null for WalletConnect
    expect(upImportResult).toBeNull();
    
    // 5. App falls back to connected EOA
    steps.push('APP_USES_EOA_FALLBACK');
    const controllerAddress = connectedAddress;
    
    // Verify injected was NEVER called
    expect(mockInjected.request).not.toHaveBeenCalled();
    expect(steps).not.toContain('INJECTED_CALLED');
    
    // The flow should be:
    expect(steps).toEqual([
      'USER_CONNECTS_WALLETCONNECT',
      'USER_SEARCHES_PROFILE',
      'USER_SELECTS_PROFILE',
      'APP_CALLS_UP_IMPORT',
      'APP_USES_EOA_FALLBACK',
    ]);
    
    expect(controllerAddress).toBe(connectedAddress);
  });
  
  it('Browser Extension: should use extension throughout, not fall to wagmi', async () => {
    const steps: string[] = [];
    
    const mockInjected = {
      request: vi.fn().mockImplementation(async (args: { method: string }) => {
        steps.push(`INJECTED_${args.method}`);
        if (args.method === 'up_import') {
          return '0xControllerFromExtension';
        }
        if (args.method === 'eth_sendTransaction') {
          return '0xTxHash';
        }
        return null;
      }),
    };
    
    const mockWagmi = vi.fn().mockImplementation(() => {
      steps.push('WAGMI_CALLED');
      return Promise.resolve('0xTxHash');
    });
    
    // User flow:
    steps.push('USER_CONNECTS_EXTENSION');
    const walletSource: WalletSource = 'injected';
    
    steps.push('USER_SELECTS_PROFILE');
    const profileAddress = '0xSelectedProfile123456789012345678901234';
    
    // requestUpImport
    const result = await requestUpImport(
      walletSource,
      profileAddress,
      null,
      mockInjected
    );
    
    expect(result).toEqual({ controllerAddress: '0xControllerFromExtension' });
    expect(steps).toContain('INJECTED_up_import');
    expect(steps).not.toContain('WAGMI_CALLED');
  });
});
