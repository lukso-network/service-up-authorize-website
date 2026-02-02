'use client';

import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
// Types are in src/types/lukso-components.d.ts (loaded automatically by TS)

// Import lukso components on client side only
// Using the main import which registers all components
if (typeof window !== 'undefined') {
  import('@lukso/web-components');
}

type LuksoSize = '2x-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | '2x-large';

interface LuksoProfileAvatarProps {
  /** Profile address for identicon generation */
  address: string;
  /** Profile picture URL (optional) - alias for avatarUrl */
  profileUrl?: string | null;
  /** Profile picture URL (optional) */
  avatarUrl?: string | null;
  /** Profile name (for accessibility, not displayed) */
  name?: string | null;
  /** Size variant - matches CompositeAvatar sizes */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Show identicon badge when profile pic exists */
  showIdenticon?: boolean;
  /** Show loading skeleton while component initializes */
  showLoadingState?: boolean;
  /** Additional CSS classes */
  className?: string;
}

// Map our size variants to LUKSO's size names
const sizeMap: Record<string, LuksoSize> = {
  'xs': '2x-small',
  'sm': 'x-small',
  'md': 'small',
  'lg': 'medium',
  'xl': 'large',
  '2xl': 'x-large',
};

// Size classes for loading skeleton (match LUKSO sizes)
const skeletonSizeClasses: Record<string, string> = {
  'xs': 'h-5 w-5',
  'sm': 'h-8 w-8',
  'md': 'h-10 w-10',
  'lg': 'h-12 w-12',
  'xl': 'h-16 w-16',
  '2xl': 'h-24 w-24',
};

/**
 * LUKSO Profile Avatar Component
 * 
 * Wrapper around the official lukso-profile web component.
 * Designed as a drop-in replacement for CompositeAvatar.
 * 
 * Handles:
 * - SSR compatibility (web components only load on client)
 * - Size mapping from our variants to LUKSO's
 * - Identicon display with profile pictures
 * - Loading states
 */
export function LuksoProfileAvatar({
  address,
  profileUrl,
  avatarUrl,
  name,
  size = 'md',
  showIdenticon = true,
  showLoadingState = true,
  className = '',
}: LuksoProfileAvatarProps) {
  // Track if component is mounted (for SSR)
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const luksoSize = sizeMap[size] || 'small';
  const skeletonClass = skeletonSizeClasses[size] || 'h-10 w-10';

  // Support both profileUrl and avatarUrl props
  const url = profileUrl || avatarUrl || undefined;

  // Show skeleton during SSR or initial load
  if (!isMounted && showLoadingState) {
    return <Skeleton className={`rounded-full ${skeletonClass} ${className}`} />;
  }

  return (
    <lukso-profile
      profile-url={url}
      profile-address={address}
      has-identicon={showIdenticon}
      size={luksoSize}
      className={className}
    />
  );
}

/**
 * Drop-in replacement for CompositeAvatar
 * Shows profile picture with identicon overlay
 */
export function CompositeAvatar({
  address,
  avatarUrl,
  name,
  size = 'md',
  showLoadingState = true,
  className = '',
}: {
  address: string;
  avatarUrl?: string | null;
  name?: string | null;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showLoadingState?: boolean;
  className?: string;
}) {
  return (
    <LuksoProfileAvatar
      address={address}
      avatarUrl={avatarUrl}
      name={name}
      size={size}
      showIdenticon={true}
      showLoadingState={showLoadingState}
      className={className}
    />
  );
}

/**
 * Simple avatar without identicon overlay
 * For use cases where only the profile picture or identicon is needed
 */
export function SimpleAvatar({
  address,
  avatarUrl,
  name,
  size = 'md',
  showLoadingState = true,
  className = '',
}: {
  address: string;
  avatarUrl?: string | null;
  name?: string | null;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showLoadingState?: boolean;
  className?: string;
}) {
  return (
    <LuksoProfileAvatar
      address={address}
      avatarUrl={avatarUrl}
      name={name}
      size={size}
      showIdenticon={false}
      showLoadingState={showLoadingState}
      className={className}
    />
  );
}

/**
 * Simplified alias for common use case
 */
export function ProfileAvatar({
  address,
  avatarUrl,
  size = 'md',
  className = '',
}: {
  address: string;
  avatarUrl?: string | null;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
}) {
  return (
    <LuksoProfileAvatar
      address={address}
      avatarUrl={avatarUrl}
      size={size}
      showIdenticon={true}
      className={className}
    />
  );
}
