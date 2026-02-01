import { describe, it, expect, vi } from 'vitest';
import {
  shortenAddress,
  formatUsername,
  formatTimestamp,
  isValidAddress,
  normalizeAddress,
  copyToClipboard,
} from './format';

describe('shortenAddress', () => {
  it('should shorten a standard address', () => {
    const address = '0x1234567890123456789012345678901234567890';
    const shortened = shortenAddress(address);
    expect(shortened).toBe('0x1234...7890');
  });

  it('should use custom char count', () => {
    const address = '0x1234567890123456789012345678901234567890';
    const shortened = shortenAddress(address, 6);
    expect(shortened).toBe('0x123456...567890');
  });

  it('should return empty string for empty input', () => {
    expect(shortenAddress('')).toBe('');
  });

  it('should return full address if shorter than chars*2+2', () => {
    const shortAddress = '0x1234';
    expect(shortenAddress(shortAddress, 4)).toBe('0x1234');
  });
});

describe('formatTimestamp', () => {
  it('should format timestamp to locale string', () => {
    const timestamp = 1700000000000;
    const formatted = formatTimestamp(timestamp);
    expect(formatted).toBeTruthy();
    expect(typeof formatted).toBe('string');
  });
});

describe('isValidAddress', () => {
  it('should return true for valid addresses', () => {
    expect(isValidAddress('0x1234567890123456789012345678901234567890')).toBe(true);
    expect(isValidAddress('0xabcdefABCDEF12345678901234567890abcDEFab')).toBe(true);
  });

  it('should return false for invalid addresses', () => {
    expect(isValidAddress('')).toBe(false);
    expect(isValidAddress('0x1234')).toBe(false); // too short
    expect(isValidAddress('1234567890123456789012345678901234567890')).toBe(false); // no 0x
    expect(isValidAddress('0x123456789012345678901234567890123456789g')).toBe(false); // invalid char
    expect(isValidAddress('0x12345678901234567890123456789012345678901')).toBe(false); // too long
  });
});

describe('normalizeAddress', () => {
  it('should normalize valid address to lowercase', () => {
    const address = '0xABCDEF1234567890123456789012345678901234';
    const normalized = normalizeAddress(address);
    expect(normalized).toBe('0xabcdef1234567890123456789012345678901234');
  });

  it('should throw for invalid address', () => {
    expect(() => normalizeAddress('invalid')).toThrow('Invalid address');
  });
});

describe('copyToClipboard', () => {
  it('should copy text to clipboard', async () => {
    const text = 'test text';
    const result = await copyToClipboard(text);
    
    expect(result).toBe(true);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(text);
  });

  it('should return false on failure', async () => {
    vi.mocked(navigator.clipboard.writeText).mockRejectedValueOnce(new Error('Failed'));
    
    const result = await copyToClipboard('text');
    expect(result).toBe(false);
  });
});

describe('formatUsername', () => {
  const testAddress = '0xa1b2c3d4e5f6789012345678901234567890abcd';
  
  it('should format username with address suffix', () => {
    const result = formatUsername('johndoe', testAddress);
    expect(result).toBe('@johndoe#a1b2');
  });

  it('should handle name with @ prefix', () => {
    const result = formatUsername('@johndoe', testAddress);
    expect(result).toBe('@johndoe#a1b2');
  });

  it('should handle name with spaces', () => {
    const result = formatUsername('  johndoe  ', testAddress);
    expect(result).toBe('@johndoe#a1b2');
  });

  it('should use lowercase address suffix', () => {
    const uppercaseAddress = '0xA1B2C3D4E5F6789012345678901234567890ABCD';
    const result = formatUsername('johndoe', uppercaseAddress);
    expect(result).toBe('@johndoe#a1b2');
  });

  it('should return address suffix only when no name', () => {
    expect(formatUsername(null, testAddress)).toBe('#a1b2');
    expect(formatUsername(undefined, testAddress)).toBe('#a1b2');
    expect(formatUsername('', testAddress)).toBe('#a1b2');
    expect(formatUsername('  ', testAddress)).toBe('#a1b2');
  });

  it('should return Unknown when no address', () => {
    expect(formatUsername('johndoe', '')).toBe('Unknown');
  });

  it('should handle special characters in name', () => {
    const result = formatUsername('john_doe-123', testAddress);
    expect(result).toBe('@john_doe-123#a1b2');
  });

  it('should handle different addresses', () => {
    expect(formatUsername('user', '0xdeadbeef1234567890123456789012345678abcd')).toBe('@user#dead');
    expect(formatUsername('user', '0x0000111122223333444455556666777788889999')).toBe('@user#0000');
  });
});
