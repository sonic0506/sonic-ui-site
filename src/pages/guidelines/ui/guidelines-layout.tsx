import type { ReactNode } from 'react';

import { SiteSidebar } from '@/widgets/site-sidebar';

import { GUIDELINES_NAV } from '../model/guidelines-nav';

export function GuidelinesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1">
      <SiteSidebar label="Guidelines" entries={GUIDELINES_NAV} />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
