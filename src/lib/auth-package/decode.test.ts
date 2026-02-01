import { describe, it, expect } from 'vitest';
import { decodeAuthPackage, decodeCompactCode, extractAuthPackageFromURL } from './decode';
import { encodeAuthPackage, generateAuthorizationLink, generateCompactCode } from './encode';
import type { AuthorizationPackage } from '@/types/auth-package';

const mockAuthPackage: AuthorizationPackage = {
  version: 1,
  profileAddress: '0x1234567890123456789012345678901234567890',
  controllerAddress: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
  requestedPermissions: '0x0000000000000000000000000000000000000000000000000000000000200000',
  network: 'mainnet',
  timestamp: 1700000000000,
  targetApp: {
    name: 'Test App',
    url: 'https://test.app',
  },
};

describe('decodeAuthPackage', () => {
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
    const decoded = decodeAuthPackage(encoded, 'abc12345'); // checksum won't match anyway
    
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

describe('extractAuthPackageFromURL', () => {
  it('should extract auth package from valid URL', () => {
    const link = generateAuthorizationLink(mockAuthPackage);
    const extracted = extractAuthPackageFromURL(link);
    
    expect(extracted).not.toBeNull();
    expect(extracted?.profileAddress).toBe(mockAuthPackage.profileAddress);
  });

  it('should work with URL object', () => {
    const link = generateAuthorizationLink(mockAuthPackage);
    const url = new URL(link);
    const extracted = extractAuthPackageFromURL(url);
    
    expect(extracted).not.toBeNull();
    expect(extracted?.controllerAddress).toBe(mockAuthPackage.controllerAddress);
  });

  it('should return null for URL without params', () => {
    const url = new URL('https://example.com/authorize');
    const extracted = extractAuthPackageFromURL(url);
    
    expect(extracted).toBeNull();
  });

  it('should return null for URL with missing checksum', () => {
    const url = new URL('https://example.com/authorize?data=somedata');
    const extracted = extractAuthPackageFromURL(url);
    
    expect(extracted).toBeNull();
  });
});

describe('encode/decode roundtrip', () => {
  it('should maintain data integrity through full encode/decode cycle', () => {
    // Encode
    const link = generateAuthorizationLink(mockAuthPackage);
    
    // Decode
    const decoded = extractAuthPackageFromURL(link);
    
    expect(decoded).not.toBeNull();
    expect(decoded?.version).toBe(mockAuthPackage.version);
    expect(decoded?.profileAddress).toBe(mockAuthPackage.profileAddress);
    expect(decoded?.controllerAddress).toBe(mockAuthPackage.controllerAddress);
    expect(decoded?.requestedPermissions).toBe(mockAuthPackage.requestedPermissions);
    expect(decoded?.network).toBe(mockAuthPackage.network);
    expect(decoded?.timestamp).toBe(mockAuthPackage.timestamp);
    expect(decoded?.targetApp.name).toBe(mockAuthPackage.targetApp.name);
  });
});
