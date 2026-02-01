'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import { ProfileResult } from './ProfileResult';
import { useProfileSearch } from '@/hooks/useProfileSearch';
import type { ProfileSearchResult } from '@/types/profile';
import type { NetworkId } from '@/constants/endpoints';

interface ProfileSearchProps {
  onSelect: (profile: ProfileSearchResult) => void;
  network?: NetworkId;
  placeholder?: string;
}

export function ProfileSearch({
  onSelect,
  network,
  placeholder = 'Search by name or address...',
}: ProfileSearchProps) {
  const [query, setQuery] = useState('');
  const { data: profiles, isLoading, error, search } = useProfileSearch(network);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    search(value);
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <div className="relative">
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={handleInputChange}
          className="pr-10"
        />
        {isLoading && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <LoadingSpinner size="sm" />
          </div>
        )}
      </div>

      {error && (
        <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">
          {error}
        </div>
      )}

      {profiles && profiles.length > 0 && (
        <div className="border rounded-lg divide-y">
          {profiles.map((profile) => (
            <ProfileResult
              key={profile.id}
              profile={profile}
              onClick={() => onSelect(profile)}
            />
          ))}
        </div>
      )}

      {profiles && profiles.length === 0 && query.trim() && (
        <div className="text-center text-muted-foreground py-8">
          No profiles found matching &ldquo;{query}&rdquo;
        </div>
      )}
    </div>
  );
}
