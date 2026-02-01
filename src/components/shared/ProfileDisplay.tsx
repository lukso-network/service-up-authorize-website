'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { formatUsername } from '@/lib/utils/format';
import { generateIdenticon } from '@/lib/utils/identicon';

interface ProfileDisplayProps {
  address: string;
  name?: string;
  avatarUrl?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'h-6 w-6',
  md: 'h-8 w-8',
  lg: 'h-10 w-10',
};

/**
 * Consistent profile display component showing:
 * - Profile picture (with identicon fallback)
 * - Username in @name#abcd format
 */
export function ProfileDisplay({
  address,
  name,
  avatarUrl,
  size = 'md',
  className = '',
}: ProfileDisplayProps) {
  const identicon = generateIdenticon(address);
  const formattedName = formatUsername(name, address);

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Avatar className={sizeClasses[size]}>
        <AvatarImage src={avatarUrl || undefined} alt={formattedName} />
        <AvatarFallback className="p-0">
          {identicon ? (
            <img
              src={identicon}
              alt={formattedName}
              className="w-full h-full rounded-full"
            />
          ) : (
            <span className="text-xs">
              {(name || 'UN').slice(0, 2).toUpperCase()}
            </span>
          )}
        </AvatarFallback>
      </Avatar>

      <span className="font-medium truncate">
        {formattedName}
      </span>
    </div>
  );
}

/**
 * Simple inline address display with identicon
 * For use in info rows showing just address (no username)
 */
export function AddressWithIdenticon({
  address,
  size = 'sm',
  className = '',
}: {
  address: string;
  size?: 'sm' | 'md';
  className?: string;
}) {
  const identicon = generateIdenticon(address);
  // For address-only display, use shortened format
  const shortAddress = formatUsername(null, address);

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Avatar className={size === 'sm' ? 'h-5 w-5' : 'h-6 w-6'}>
        <AvatarFallback className="p-0">
          {identicon ? (
            <img
              src={identicon}
              alt={address}
              className="w-full h-full rounded-full"
            />
          ) : null}
        </AvatarFallback>
      </Avatar>
      <span className="font-mono text-sm">{shortAddress}</span>
    </div>
  );
}
