'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { shortenAddress } from '@/lib/utils/format';
import { getBestProfileImage } from '@/lib/indexer/queries';
import type { ProfileSearchResult } from '@/types/profile';

interface ProfileResultProps {
  profile: ProfileSearchResult;
  onClick: () => void;
}

export function ProfileResult({ profile, onClick }: ProfileResultProps) {
  const avatarUrl = getBestProfileImage(profile.profileImages, 'small');
  const displayName = profile.name || profile.fullName || 'Unnamed Profile';
  const initials = displayName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 p-3 hover:bg-muted transition-colors text-left"
    >
      <Avatar className="h-10 w-10">
        <AvatarImage src={avatarUrl || undefined} alt={displayName} />
        <AvatarFallback className="text-xs">{initials}</AvatarFallback>
      </Avatar>

      <div className="flex-1 min-w-0">
        <p className="font-medium truncate">{displayName}</p>
        <p className="text-sm text-muted-foreground font-mono">
          {shortenAddress(profile.id)}
        </p>
      </div>

      <svg
        className="w-5 h-5 text-muted-foreground flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
}
