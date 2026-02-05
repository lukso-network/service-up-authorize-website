/**
 * Authorization Package Encoding
 * 
 * Functions for encoding authorization packages for transmission.
 * Used to create QR codes and deep links for cross-device authorization.
 * 
 * @module lib/auth-package/encode
 */

import type { AuthorizationPackage, EncodedAuthPackage } from '@/types/auth-package';
import { APP_BASE_URL } from '@/constants/endpoints';

// ============================================================================
// CHECKSUM
// ============================================================================

/**
 * Calculate a simple hash checksum for data integrity verification.
 * Uses a simple hash algorithm suitable for detecting transmission errors.
 * 
 * @param data - String data to calculate checksum for
 * @returns 8-character hex checksum
 * @internal
 */
function calculateChecksum(data: string): string {
  let hash = 0;
  for (let i = 0; i < data.length; i++) {
    const char = data.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash).toString(16).padStart(8, '0');
}

// ============================================================================
// ENCODING
// ============================================================================

/**
 * Encode an authorization package for transmission.
 * Produces a base64-encoded string with a checksum for integrity verification.
 * 
 * @param authPackage - The authorization package to encode
 * @returns Object containing encoded data and checksum
 * 
 * @example
 * ```ts
 * const { encoded, checksum } = encodeAuthPackage(myPackage);
 * // Use in URL: ?data=${encoded}&cs=${checksum}
 * ```
 */
export function encodeAuthPackage(authPackage: AuthorizationPackage): EncodedAuthPackage {
  const json = JSON.stringify(authPackage);
  const encoded = btoa(json);
  const checksum = calculateChecksum(json);
  
  return { encoded, checksum };
}

/**
 * Generate a deep link URL for the authorization page.
 * Creates a full URL with plain-text profile and controller addresses.
 * 
 * @param authPackage - The authorization package to encode
 * @returns Full URL to the /authorize page with plain-text parameters
 * 
 * @example
 * ```ts
 * const link = generateAuthorizationLink(authPackage);
 * // Returns: https://example.com/authorize?profile=0x123...&controller=0xabc...&network=mainnet
 * ```
 */
export function generateAuthorizationLink(authPackage: AuthorizationPackage): string {
  const url = new URL('/authorize', APP_BASE_URL);
  url.searchParams.set('profile', authPackage.profileAddress);
  url.searchParams.set('controller', authPackage.controllerAddress);
  url.searchParams.set('network', authPackage.network);
  return url.toString();
}

// ============================================================================
// COMPACT FORMAT
// ============================================================================

/**
 * Generate a compact encoded string for smaller QR codes.
 * Uses abbreviated field names to reduce payload size.
 * 
 * Field mappings:
 * - v: version
 * - p: profileAddress
 * - c: controllerAddress
 * - r: requestedPermissions
 * - n: network ('m' = mainnet, 't' = testnet)
 * - t: timestamp
 * - a: app name
 * 
 * @param authPackage - The authorization package to encode
 * @returns Base64-encoded compact string
 * 
 * @example
 * ```ts
 * const compact = generateCompactCode(authPackage);
 * // Smaller payload for QR code generation
 * ```
 */
export function generateCompactCode(authPackage: AuthorizationPackage): string {
  const compact = {
    v: authPackage.version,
    p: authPackage.profileAddress,
    c: authPackage.controllerAddress,
    r: authPackage.requestedPermissions,
    n: authPackage.network === 'mainnet' ? 'm' : 't',
    t: authPackage.timestamp,
    a: authPackage.targetApp.name,
  };
  
  return btoa(JSON.stringify(compact));
}
