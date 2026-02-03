/**
 * Controller Address Utilities
 * 
 * Handles the critical logic of obtaining the correct controller address
 * for Universal Profile authorization.
 * 
 * IMPORTANT: The controller address must be an EOA (externally owned account)
 * that will control the Universal Profile. It should NEVER be the profile
 * address itself.
 * 
 * @module lib/controller
 */

import { isValidAddress } from '@/lib/utils/format';

// Re-export for convenience
export { isValidAddress };

// ============================================================================
// TYPES
// ============================================================================

/** Result from a successful up_import call */
export type UpImportResult = { controllerAddress: `0x${string}` } | null;

/** Result of the getControllerAddress operation */
export interface GetControllerAddressResult {
  /** The resolved controller address, or null if resolution failed */
  controllerAddress: `0x${string}` | null;
  /** Error message if resolution failed */
  error: string | null;
  /** How the controller address was determined */
  source: 'up_import' | 'eoa_fallback' | 'error';
}

// ============================================================================
// ERROR MESSAGES
// ============================================================================

// (Error messages are now inline in the functions)

// ============================================================================
// MAIN FUNCTIONS
// ============================================================================

/**
 * Get the controller address for a profile import.
 * 
 * Resolution flow:
 * 1. Try up_import first (required for UP-compatible wallets)
 * 2. If up_import fails, return error
 * 
 * Note: Any wallet/device can be connected (UP or EOA). The up_import method
 * should return the controller address that will be authorized. Modern UP
 * wallets support this method natively.
 * 
 * @param profileAddress - The Universal Profile address to import
 * @param connectedAddress - The currently connected wallet address
 * @param requestUpImport - Function to call up_import on the provider
 * @param isContractAddress - Function to check if an address is a contract (unused, kept for backwards compat)
 * @returns Controller address result with source and potential error
 * 
 * @example
 * ```ts
 * const result = await getControllerAddress(
 *   profileAddress,
 *   connectedAddress,
 *   wallet.requestUpImport,
 *   publicClient.isContract
 * );
 * 
 * if (result.error) {
 *   showError(result.error);
 * } else {
 *   // Use result.controllerAddress
 * }
 * ```
 */
export async function getControllerAddress(
  profileAddress: `0x${string}`,
  connectedAddress: `0x${string}`,
  requestUpImport: (addr: `0x${string}`) => Promise<UpImportResult>,
  isContractAddress: (addr: `0x${string}`) => Promise<boolean>,
): Promise<GetControllerAddressResult> {
  // Try up_import - this is the only supported method
  const upImportResult = await tryUpImport(profileAddress, requestUpImport);
  if (upImportResult) {
    return upImportResult;
  }

  // up_import failed - wallet doesn't support it
  return {
    controllerAddress: null,
    error: 'Your wallet does not support the up_import method. Please use a compatible wallet that supports Universal Profile imports.',
    source: 'error',
  };
}

// ============================================================================
// VALIDATION
// ============================================================================

/**
 * Ensure controller address is different from profile address.
 * This is a safety check to prevent the bug where profile address
 * was incorrectly used as controller.
 * 
 * @param profileAddress - The Universal Profile address
 * @param controllerAddress - The controller address to validate
 * @returns true if controller is different from profile (valid)
 */
export function validateControllerIsNotProfile(
  profileAddress: `0x${string}`,
  controllerAddress: `0x${string}`,
): boolean {
  return profileAddress.toLowerCase() !== controllerAddress.toLowerCase();
}

// ============================================================================
// INTERNAL HELPERS
// ============================================================================

/**
 * Attempt to get controller address via up_import.
 * @internal
 */
async function tryUpImport(
  profileAddress: `0x${string}`,
  requestUpImport: (addr: `0x${string}`) => Promise<UpImportResult>,
): Promise<GetControllerAddressResult | null> {
  try {
    const result = await requestUpImport(profileAddress);
    
    if (result && result.controllerAddress) {
      // Validate the returned address format
      if (!isValidAddress(result.controllerAddress)) {
        console.error('[Controller] up_import returned invalid address:', result.controllerAddress);
        return null;
      }
      
      return {
        controllerAddress: result.controllerAddress,
        error: null,
        source: 'up_import',
      };
    }
  } catch (err) {
    // up_import failed or not available - this is expected for many wallets
    console.log('[Controller] up_import not available:', err);
  }
  
  return null;
}

// checkNotContract function removed - no longer needed since we only rely on up_import
