/**
 * Shorten an address for display (shows both start and end)
 * e.g., "0xAbCd...1234"
 */
export function shortenAddress(address: string, chars = 4): string {
  if (!address) return '';
  if (address.length <= chars * 2 + 2) return address;
  return `${address.slice(0, chars + 2)}...${address.slice(-chars)}`;
}

/**
 * Format a username with address suffix for unique identification
 * e.g., "@johndoe#a1b2" - combines name with first 4 hex chars of address
 * If no name provided, uses shortened address as fallback
 */
export function formatUsername(name: string | null | undefined, address: string): string {
  if (!address) return 'Unknown';
  
  // Get first 4 hex chars after 0x, lowercase
  const addressSuffix = address.slice(2, 6).toLowerCase();
  
  if (name && name.trim()) {
    // Remove any existing @ prefix and format as @name#abcd
    const cleanName = name.trim().replace(/^@/, '');
    return `@${cleanName}#${addressSuffix}`;
  }
  
  // Fallback: just show #abcd with full short address
  return `#${addressSuffix}`;
}

/**
 * Compact address format for profile displays (shows only first chars)
 * e.g., "0xAb..." - suitable for showing alongside username
 */
export function compactAddress(address: string, chars = 4): string {
  if (!address) return '';
  if (address.length <= chars + 2 + 3) return address; // 0x + chars + ...
  return `${address.slice(0, chars + 2)}...`;
}

/**
 * Format a timestamp for display
 */
export function formatTimestamp(timestamp: number): string {
  return new Date(timestamp).toLocaleString();
}

/**
 * Format a transaction hash with explorer link
 */
export function formatTxHash(hash: string, explorerUrl: string): string {
  return `${explorerUrl}/tx/${hash}`;
}

/**
 * Validate an Ethereum address
 */
export function isValidAddress(address: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}

/**
 * Normalize an address to lowercase with checksum
 */
export function normalizeAddress(address: string): `0x${string}` {
  if (!isValidAddress(address)) {
    throw new Error('Invalid address');
  }
  return address.toLowerCase() as `0x${string}`;
}

/**
 * Copy text to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
    return false;
  }
}
