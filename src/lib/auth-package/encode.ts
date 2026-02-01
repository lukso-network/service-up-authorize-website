import type { AuthorizationPackage, EncodedAuthPackage } from '@/types/auth-package';
import { APP_BASE_URL } from '@/constants/endpoints';

/**
 * Simple checksum for the auth package
 */
function calculateChecksum(data: string): string {
  let hash = 0;
  for (let i = 0; i < data.length; i++) {
    const char = data.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16).padStart(8, '0');
}

/**
 * Encode an authorization package for transmission
 */
export function encodeAuthPackage(authPackage: AuthorizationPackage): EncodedAuthPackage {
  const json = JSON.stringify(authPackage);
  const encoded = btoa(json);
  const checksum = calculateChecksum(json);
  
  return {
    encoded,
    checksum,
  };
}

/**
 * Generate a deep link URL for the authorization page
 */
export function generateAuthorizationLink(authPackage: AuthorizationPackage): string {
  const { encoded, checksum } = encodeAuthPackage(authPackage);
  const url = new URL('/authorize', APP_BASE_URL);
  url.searchParams.set('data', encoded);
  url.searchParams.set('cs', checksum);
  return url.toString();
}

/**
 * Generate a short encoded string for QR codes
 * Uses a more compact format for smaller QR codes
 */
export function generateCompactCode(authPackage: AuthorizationPackage): string {
  // Create a compact version with only essential fields
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
