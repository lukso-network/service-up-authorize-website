'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { shortenAddress } from '@/lib/utils/format';
import { getBestProfileImage } from '@/lib/indexer/queries';
import type { ProfileSearchResult } from '@/types/profile';

interface ProfileCardProps {
  profile: ProfileSearchResult;
  selected?: boolean;
  onClick?: () => void;
}

export function ProfileCard({ profile, selected, onClick }: ProfileCardProps) {
  const avatarUrl = getBestProfileImage(profile.profileImages, 'medium');
  const displayName = profile.name || profile.fullName || 'Unnamed Profile';
  const initials = displayName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <Card
      className={`
        transition-all cursor-pointer
        ${selected ? 'ring-2 ring-primary border-primary' : 'hover:border-primary/50'}
        ${onClick ? 'cursor-pointer' : ''}
      `}
      onClick={onClick}
    >
      <CardContent className="flex items-center gap-4 p-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatarUrl || undefined} alt={displayName} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>

        <div className="flex-1 min-w-0">
          <p className="font-medium truncate">{displayName}</p>
          <p className="text-sm text-muted-foreground font-mono">
            {shortenAddress(profile.id)}
          </p>
        </div>

        {selected && (
          <div className="flex-shrink-0">
            <svg
              className="w-5 h-5 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
