'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SITE_SECTIONS } from '../model/site-sections';

interface TopNavProps {
  className: string;
  onNavigate?: () => void;
}

export function TopNav({ className, onNavigate }: TopNavProps) {
  const pathname = usePathname() ?? '';
  return (
    <nav aria-label="사이트" className={className}>
      {SITE_SECTIONS.map(({ href, label }) => {
        const isCurrent = pathname === href || pathname.startsWith(`${href}/`);
        return (
          <Link
            key={href}
            href={href}
            onClick={() => onNavigate?.()}
            aria-current={isCurrent ? 'page' : undefined}
            className={`flex h-8 items-center rounded-md px-3 text-body-strong focus-visible:outline-2 focus-visible:outline-focus ${isCurrent ? 'bg-subtle text-default' : 'text-muted hover:text-default'}`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
