'use client';

import { generateIdenticon } from '@/lib/utils/identicon';

interface AgentAddressProps {
  address: string;
  className?: string;
}

/**
 * The full address in groups of four characters, with its identicon, so the owner can compare it
 * character by character with the address their agent showed them. First and last groups are
 * emphasised because that is where people look first.
 */
export function AgentAddress({ address, className = '' }: AgentAddressProps) {
  const body = address.slice(2);
  const groups = body.match(/.{1,4}/g) ?? [];
  const identicon = generateIdenticon(address);
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      {identicon ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={identicon} alt="" width={40} height={40} className="h-10 w-10 shrink-0 rounded-full border" />
      ) : null}
      <p data-testid="agent-address" className="font-mono text-sm leading-relaxed break-words" aria-label={`Agent address ${address}`}>
        <span className="font-semibold">0x</span>
        {groups.map((g, i) => (
          <span key={i}>
            {i === 0 ? '' : ' '}
            <span className={i === 0 || i === groups.length - 1 ? 'font-semibold' : 'text-muted-foreground'}>{g}</span>
          </span>
        ))}
      </p>
    </div>
  );
}
