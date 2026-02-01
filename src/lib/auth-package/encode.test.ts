import { describe, it, expect, vi, beforeEach } from 'vitest';
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
    // Mock process.env for APP_BASE_URL
    vi.stubEnv('NEXT_PUBLIC_APP_URL', 'https://migrate.universaleverything.io');
  });

  it('should generate valid URL with data and checksum', () => {
    const link = generateAuthorizationLink(mockAuthPackage);
    const url = new URL(link);
    
    expect(url.pathname).toBe('/authorize');
    expect(url.searchParams.has('data')).toBe(true);
    expect(url.searchParams.has('cs')).toBe(true);
  });

  it('should include encoded auth package in URL', () => {
    const link = generateAuthorizationLink(mockAuthPackage);
    const url = new URL(link);
    
    const data = url.searchParams.get('data');
    expect(data).toBeTruthy();
    
    // Verify it's valid base64 that decodes to our auth package
    const decoded = JSON.parse(atob(data!));
    expect(decoded.profileAddress).toBe(mockAuthPackage.profileAddress);
    expect(decoded.controllerAddress).toBe(mockAuthPackage.controllerAddress);
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
    
    // Should use compact keys
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
