import { describe, it, expect } from 'vitest';
import { decodeAuthPackage, decodeCompactCode, extractAuthPackageFromURL } from './decode';
import { encodeAuthPackage, generateAuthorizationLink, generateCompactCode } from './encode';
import type { AuthorizationPackage } from '@/types/auth-package';

// IMPORTANT: Controller address MUST be different from profile address
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

describe('decodeAuthPackage (legacy base64 format)', () => {
  it('should decode a valid encoded package', () => {
    const { encoded, checksum } = encodeAuthPackage(mockAuthPackage);
    const decoded = decodeAuthPackage(encoded, checksum);
    
    expect(decoded).not.toBeNull();
    expect(decoded?.profileAddress).toBe(mockAuthPackage.profileAddress);
    expect(decoded?.controllerAddress).toBe(mockAuthPackage.controllerAddress);
    expect(decoded?.network).toBe(mockAuthPackage.network);
  });

  it('should return null for invalid checksum', () => {
    const { encoded } = encodeAuthPackage(mockAuthPackage);
    const decoded = decodeAuthPackage(encoded, 'wrongchecksum');
    
    expect(decoded).toBeNull();
  });

  it('should return null for invalid base64', () => {
    const decoded = decodeAuthPackage('not-valid-base64!@#$', 'abc12345');
    expect(decoded).toBeNull();
  });

  it('should return null for missing required fields', () => {
    const incomplete = { version: 1 };
    const encoded = btoa(JSON.stringify(incomplete));
    const decoded = decodeAuthPackage(encoded, 'abc12345');
    
    expect(decoded).toBeNull();
  });

  it('should return null for invalid address format', () => {
    const invalid = {
      ...mockAuthPackage,
      profileAddress: 'invalid-address',
    };
    const encoded = btoa(JSON.stringify(invalid));
    const decoded = decodeAuthPackage(encoded, 'abc12345');
    
    expect(decoded).toBeNull();
  });
});

describe('decodeCompactCode', () => {
  it('should decode a valid compact code', () => {
    const code = generateCompactCode(mockAuthPackage);
    const decoded = decodeCompactCode(code);
    
    expect(decoded).not.toBeNull();
    expect(decoded?.profileAddress).toBe(mockAuthPackage.profileAddress);
    expect(decoded?.controllerAddress).toBe(mockAuthPackage.controllerAddress);
    expect(decoded?.network).toBe('mainnet');
  });

  it('should return null for invalid base64', () => {
    const decoded = decodeCompactCode('not-valid-base64!@#$');
    expect(decoded).toBeNull();
  });

  it('should correctly map network codes', () => {
    const mainnetPackage = { ...mockAuthPackage, network: 'mainnet' as const };
    const testnetPackage = { ...mockAuthPackage, network: 'testnet' as const };
    
    const mainnetCode = generateCompactCode(mainnetPackage);
    const testnetCode = generateCompactCode(testnetPackage);
    
    expect(decodeCompactCode(mainnetCode)?.network).toBe('mainnet');
    expect(decodeCompactCode(testnetCode)?.network).toBe('testnet');
  });
});

describe('extractAuthPackageFromURL (plain-text format)', () => {
  it('should extract auth package from plain-text URL params', () => {
    const link = generateAuthorizationLink(mockAuthPackage);
    const extracted = extractAuthPackageFromURL(link);
    
    expect(extracted).not.toBeNull();
    expect(extracted?.profileAddress).toBe(MOCK_PROFILE_ADDRESS);
    expect(extracted?.controllerAddress).toBe(MOCK_CONTROLLER_ADDRESS);
    expect(extracted?.network).toBe('mainnet');
  });

  it('should work with URL object', () => {
    const link = generateAuthorizationLink(mockAuthPackage);
    const url = new URL(link);
    const extracted = extractAuthPackageFromURL(url);
    
    expect(extracted).not.toBeNull();
    expect(extracted?.controllerAddress).toBe(MOCK_CONTROLLER_ADDRESS);
  });

  it('should default to mainnet when network is missing', () => {
    const url = new URL(`https://example.com/authorize?profile=${MOCK_PROFILE_ADDRESS}&controller=${MOCK_CONTROLLER_ADDRESS}`);
    const extracted = extractAuthPackageFromURL(url);
    
    expect(extracted).not.toBeNull();
    expect(extracted?.network).toBe('mainnet');
  });

  it('should handle testnet network', () => {
    const url = new URL(`https://example.com/authorize?profile=${MOCK_PROFILE_ADDRESS}&controller=${MOCK_CONTROLLER_ADDRESS}&network=testnet`);
    const extracted = extractAuthPackageFromURL(url);
    
    expect(extracted).not.toBeNull();
    expect(extracted?.network).toBe('testnet');
  });

  it('should return null for invalid profile address', () => {
    const url = new URL('https://example.com/authorize?profile=invalid&controller=0xabcdefabcdefabcdefabcdefabcdefabcdefabcd');
    const extracted = extractAuthPackageFromURL(url);
    
    expect(extracted).toBeNull();
  });

  it('should return null for invalid controller address', () => {
    const url = new URL(`https://example.com/authorize?profile=${MOCK_PROFILE_ADDRESS}&controller=invalid`);
    const extracted = extractAuthPackageFromURL(url);
    
    expect(extracted).toBeNull();
  });

  it('should return null for URL without params', () => {
    const url = new URL('https://example.com/authorize');
    const extracted = extractAuthPackageFromURL(url);
    
    expect(extracted).toBeNull();
  });
});

describe('extractAuthPackageFromURL (legacy base64 format)', () => {
  it('should still support legacy base64 format', () => {
    // Manually create a legacy URL
    const { encoded, checksum } = encodeAuthPackage(mockAuthPackage);
    const url = new URL(`https://example.com/authorize?data=${encoded}&cs=${checksum}`);
    const extracted = extractAuthPackageFromURL(url);
    
    expect(extracted).not.toBeNull();
    expect(extracted?.profileAddress).toBe(MOCK_PROFILE_ADDRESS);
    expect(extracted?.controllerAddress).toBe(MOCK_CONTROLLER_ADDRESS);
  });

  it('should return null for legacy URL with missing checksum', () => {
    const url = new URL('https://example.com/authorize?data=somedata');
    const extracted = extractAuthPackageFromURL(url);
    
    expect(extracted).toBeNull();
  });
});

describe('encode/decode roundtrip (plain-text)', () => {
  it('should maintain data integrity through encode/decode cycle', () => {
    const link = generateAuthorizationLink(mockAuthPackage);
    const decoded = extractAuthPackageFromURL(link);
    
    expect(decoded).not.toBeNull();
    expect(decoded?.profileAddress).toBe(mockAuthPackage.profileAddress);
    expect(decoded?.controllerAddress).toBe(mockAuthPackage.controllerAddress);
    expect(decoded?.network).toBe(mockAuthPackage.network);
  });
});

describe('Controller Address Verification in Decoding', () => {
  it('should decode controller address distinct from profile (legacy)', () => {
    const { encoded, checksum } = encodeAuthPackage(mockAuthPackage);
    const decoded = decodeAuthPackage(encoded, checksum);
    
    expect(decoded).not.toBeNull();
    expect(decoded?.controllerAddress).not.toBe(decoded?.profileAddress);
    expect(decoded?.controllerAddress).toBe(MOCK_CONTROLLER_ADDRESS);
    expect(decoded?.profileAddress).toBe(MOCK_PROFILE_ADDRESS);
  });

  it('should extract correct controller from plain-text URL', () => {
    const link = generateAuthorizationLink(mockAuthPackage);
    const decoded = extractAuthPackageFromURL(link);
    
    expect(decoded).not.toBeNull();
    expect(decoded?.controllerAddress).toBe(MOCK_CONTROLLER_ADDRESS);
    expect(decoded?.controllerAddress).not.toBe(MOCK_PROFILE_ADDRESS);
  });

  it('should decode controller from compact code correctly', () => {
    const code = generateCompactCode(mockAuthPackage);
    const decoded = decodeCompactCode(code);
    
    expect(decoded).not.toBeNull();
    expect(decoded?.controllerAddress).toBe(MOCK_CONTROLLER_ADDRESS);
    expect(decoded?.controllerAddress).not.toBe(MOCK_PROFILE_ADDRESS);
  });

  it('should preserve controller through full authorization flow', () => {
    // Simulates: create link -> share -> scan -> decode
    const link = generateAuthorizationLink(mockAuthPackage);
    const decoded = extractAuthPackageFromURL(link);
    
    expect(decoded).not.toBeNull();
    expect(decoded?.controllerAddress).toBe(MOCK_CONTROLLER_ADDRESS);
    expect(decoded?.profileAddress).toBe(MOCK_PROFILE_ADDRESS);
    expect(decoded?.controllerAddress).not.toBe(decoded?.profileAddress);
  });
});
