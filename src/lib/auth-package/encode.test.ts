import { describe, it, expect, vi, beforeEach } from 'vitest';
import { encodeAuthPackage, generateAuthorizationLink, generateCompactCode } from './encode';
import type { AuthorizationPackage } from '@/types/auth-package';

// IMPORTANT: Controller address MUST be different from profile address
// This simulates the correct behavior where:
// - profileAddress = the Universal Profile (smart contract)
// - controllerAddress = the EOA that will control it (from up_import or connected EOA)
const MOCK_PROFILE_ADDRESS = '0x1234567890123456789012345678901234567890';
const MOCK_CONTROLLER_ADDRESS = '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd';

const mockAuthPackage: AuthorizationPackage = {
  version: 1,
  profileAddress: MOCK_PROFILE_ADDRESS,
  controllerAddress: MOCK_CONTROLLER_ADDRESS,
  requestedPermissions: '0x0000000000000000000000000000000000000000000000000000000000200000',
  network: 'mainnet',
  timestamp: 1700000000000,
  targetApp: {
    name: 'Test App',
    url: 'https://test.app',
  },
};

describe('encodeAuthPackage', () => {
  it('should encode auth package to base64', () => {
    const { encoded, checksum } = encodeAuthPackage(mockAuthPackage);
    
    expect(encoded).toBeTruthy();
    expect(typeof encoded).toBe('string');
    expect(checksum).toMatch(/^[0-9a-f]{8}$/);
    
    // Should be valid base64
    expect(() => atob(encoded)).not.toThrow();
  });

  it('should produce consistent checksum for same data', () => {
    const result1 = encodeAuthPackage(mockAuthPackage);
    const result2 = encodeAuthPackage(mockAuthPackage);
    
    expect(result1.encoded).toBe(result2.encoded);
    expect(result1.checksum).toBe(result2.checksum);
  });

  it('should produce different checksum for different data', () => {
    const modified = { ...mockAuthPackage, timestamp: 1700000000001 };
    
    const result1 = encodeAuthPackage(mockAuthPackage);
    const result2 = encodeAuthPackage(modified);
    
    expect(result1.checksum).not.toBe(result2.checksum);
  });
});

describe('generateAuthorizationLink', () => {
  beforeEach(() => {
    vi.stubEnv('NEXT_PUBLIC_APP_URL', 'https://migrate.universaleverything.io');
  });

  it('should generate URL with plain-text profile and controller params', () => {
    const link = generateAuthorizationLink(mockAuthPackage);
    const url = new URL(link);
    
    expect(url.pathname).toBe('/authorize');
    expect(url.searchParams.get('profile')).toBe(MOCK_PROFILE_ADDRESS);
    expect(url.searchParams.get('controller')).toBe(MOCK_CONTROLLER_ADDRESS);
    expect(url.searchParams.get('network')).toBe('mainnet');
  });

  it('should not contain base64 data or checksum params', () => {
    const link = generateAuthorizationLink(mockAuthPackage);
    const url = new URL(link);
    
    expect(url.searchParams.has('data')).toBe(false);
    expect(url.searchParams.has('cs')).toBe(false);
  });

  it('should include plain-text addresses in the URL', () => {
    const link = generateAuthorizationLink(mockAuthPackage);
    
    // Addresses should appear directly in the URL (not encoded)
    expect(link).toContain(MOCK_PROFILE_ADDRESS);
    expect(link).toContain(MOCK_CONTROLLER_ADDRESS);
    expect(link).toContain('network=mainnet');
  });

  it('should correctly encode testnet network', () => {
    const testnetPackage = { ...mockAuthPackage, network: 'testnet' as const };
    const link = generateAuthorizationLink(testnetPackage);
    const url = new URL(link);
    
    expect(url.searchParams.get('network')).toBe('testnet');
  });
});

describe('generateCompactCode', () => {
  it('should generate compact base64 code', () => {
    const code = generateCompactCode(mockAuthPackage);
    
    expect(code).toBeTruthy();
    expect(typeof code).toBe('string');
    expect(() => atob(code)).not.toThrow();
  });

  it('should use shorter keys in compact format', () => {
    const code = generateCompactCode(mockAuthPackage);
    const decoded = JSON.parse(atob(code));
    
    expect(decoded.v).toBe(mockAuthPackage.version);
    expect(decoded.p).toBe(mockAuthPackage.profileAddress);
    expect(decoded.c).toBe(mockAuthPackage.controllerAddress);
    expect(decoded.n).toBe('m'); // mainnet -> 'm'
    expect(decoded.a).toBe(mockAuthPackage.targetApp.name);
  });

  it('should produce smaller output than full encoding', () => {
    const compact = generateCompactCode(mockAuthPackage);
    const { encoded } = encodeAuthPackage(mockAuthPackage);
    
    expect(compact.length).toBeLessThan(encoded.length);
  });
});

describe('Controller Address Verification in Encoding', () => {
  it('should preserve distinct controller and profile addresses in link', () => {
    expect(mockAuthPackage.controllerAddress).not.toBe(mockAuthPackage.profileAddress);
    
    const link = generateAuthorizationLink(mockAuthPackage);
    const url = new URL(link);
    
    expect(url.searchParams.get('controller')).not.toBe(url.searchParams.get('profile'));
    expect(url.searchParams.get('controller')).toBe(MOCK_CONTROLLER_ADDRESS);
    expect(url.searchParams.get('profile')).toBe(MOCK_PROFILE_ADDRESS);
  });

  it('should include controller address in compact code (for QR)', () => {
    const code = generateCompactCode(mockAuthPackage);
    const decoded = JSON.parse(atob(code));
    
    expect(decoded.c).toBe(MOCK_CONTROLLER_ADDRESS);
    expect(decoded.c).not.toBe(MOCK_PROFILE_ADDRESS);
  });

  it('should not allow profile address as controller in test data', () => {
    expect(MOCK_CONTROLLER_ADDRESS.toLowerCase()).not.toBe(MOCK_PROFILE_ADDRESS.toLowerCase());
  });
});
