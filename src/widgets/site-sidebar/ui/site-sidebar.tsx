'use client';

import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from '@xonic0506/sonic-ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import type { SidebarEntry, SidebarLink } from '../model/sidebar-entry.type';

interface SiteSidebarProps {
  label: string;
  entries: readonly SidebarEntry[];
}

export function SiteSidebar({ label, entries }: SiteSidebarProps) {
  const pathname = usePathname();
  const renderLink = ({ href, label: linkLabel }: SidebarLink) => {
    const isCurrent = pathname === href;
    return (
      <Link
        key={href}
        href={href}
        aria-current={isCurrent ? 'page' : undefined}
        className={`flex h-8 items-center rounded-md px-3 focus-visible:outline-2 focus-visible:outline-focus ${isCurrent ? 'bg-subtle text-body-strong text-default' : 'text-body text-muted hover:text-default'}`}
      >
        {linkLabel}
      </Link>
    );
  };

  return (
    <nav
      aria-label={label}
      className="hidden w-60 shrink-0 flex-col gap-1 border-r border-default bg-surface px-4 py-6 md:flex"
    >
      {entries.map((entry) =>
        'links' in entry ? (
          <Accordion key={entry.title} defaultValue={[entry.title]}>
            <AccordionItem value={entry.title} className="border-0">
              <AccordionTrigger className="px-3 py-2 text-label">
                {entry.title}
              </AccordionTrigger>
              <AccordionPanel className="flex flex-col gap-1 pt-1 pb-0">
                {entry.links.map(renderLink)}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ) : (
          renderLink(entry)
        ),
      )}
    </nav>
  );
}
