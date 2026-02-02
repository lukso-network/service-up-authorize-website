/**
 * Formatting and Validation Utilities
 * 
 * Common formatting functions for addresses, usernames, timestamps,
 * and clipboard operations used throughout the application.
 * 
 * @module lib/utils/format
 */

// ============================================================================
// ADDRESS FORMATTING
// ============================================================================

/**
 * Shorten an address for display (shows both start and end).
 * 
 * @param address - Full Ethereum address (e.g., "0x1234...abcd")
 * @param chars - Number of characters to show on each side (default: 4)
 * @returns Shortened address (e.g., "0x1234...abcd") or empty string if invalid
 * 
 * @example
 * ```ts
 * shortenAddress("0x1234567890abcdef1234567890abcdef12345678")
 * // Returns: "0x1234...5678"
 * 
 * shortenAddress("0x1234567890abcdef1234567890abcdef12345678", 6)
 * // Returns: "0x123456...345678"
 * ```
 */
export function shortenAddress(address: string, chars = 4): string {
  if (!address) return '';
  if (address.length <= chars * 2 + 2) return address;
  return `${address.slice(0, chars + 2)}...${address.slice(-chars)}`;
}

/**
 * Compact address format for profile displays (shows only start).
 * Suitable for showing alongside username where full address isn't needed.
 * 
 * @param address - Full Ethereum address
 * @param chars - Number of characters to show after "0x" (default: 4)
 * @returns Compact address (e.g., "0x1234...") or empty string if invalid
 * 
 * @example
 * ```ts
 * compactAddress("0x1234567890abcdef1234567890abcdef12345678")
 * // Returns: "0x1234..."
 * ```
 */
export function compactAddress(address: string, chars = 4): string {
  if (!address) return '';
  if (address.length <= chars + 2 + 3) return address; // 0x + chars + ...
  return `${address.slice(0, chars + 2)}...`;
}

// ============================================================================
// USERNAME FORMATTING
// ============================================================================

/**
 * Format a username with address suffix for unique identification.
 * Combines the profile name with first 4 hex chars of address.
 * 
 * @param name - Profile display name (may be null/undefined)
 * @param address - Profile address for suffix generation
 * @returns Formatted username (e.g., "@johndoe#a1b2") or address-only fallback
 * 
 * @example
 * ```ts
 * formatUsername("John Doe", "0xabcd1234...")
 * // Returns: "@John Doe#abcd"
 * 
 * formatUsername(null, "0xabcd1234...")
 * // Returns: "#abcd"
 * ```
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
  
  // Fallback: just show #abcd
  return `#${addressSuffix}`;
}

// ============================================================================
// VALIDATION
// ============================================================================

/**
 * Validate an Ethereum address format.
 * Checks for correct length and hex characters.
 * 
 * @param address - String to validate as an Ethereum address
 * @returns true if valid 0x-prefixed 40-char hex address
 * 
 * @example
 * ```ts
 * isValidAddress("0x1234567890abcdef1234567890abcdef12345678") // true
 * isValidAddress("0x123") // false - too short
 * isValidAddress("1234567890abcdef1234567890abcdef12345678") // false - missing 0x
 * ```
 */
export function isValidAddress(address: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}

/**
 * Normalize an address to lowercase.
 * Validates format and returns typed address.
 * 
 * @param address - Address to normalize
 * @returns Lowercase 0x-prefixed address
 * @throws Error if address format is invalid
 */
export function normalizeAddress(address: string): `0x${string}` {
  if (!isValidAddress(address)) {
    throw new Error('Invalid address');
  }
  return address.toLowerCase() as `0x${string}`;
}

// ============================================================================
// DATE/TIME FORMATTING
// ============================================================================

/**
 * Format a Unix timestamp for human-readable display.
 * Uses the browser's locale settings.
 * 
 * @param timestamp - Unix timestamp in milliseconds
 * @returns Localized date/time string
 */
export function formatTimestamp(timestamp: number): string {
  return new Date(timestamp).toLocaleString();
}

// ============================================================================
// BLOCKCHAIN UTILITIES
// ============================================================================

/**
 * Format a transaction hash as a block explorer link.
 * 
 * @param hash - Transaction hash
 * @param explorerUrl - Base URL of the block explorer
 * @returns Full URL to the transaction on the explorer
 */
export function formatTxHash(hash: string, explorerUrl: string): string {
  return `${explorerUrl}/tx/${hash}`;
}

// ============================================================================
// CLIPBOARD
// ============================================================================

/**
 * Copy text to the system clipboard.
 * Uses the modern Clipboard API with fallback error handling.
 * 
 * @param text - Text to copy to clipboard
 * @returns Promise resolving to true on success, false on failure
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
