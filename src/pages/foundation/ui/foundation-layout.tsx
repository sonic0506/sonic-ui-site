import type { ReactNode } from 'react';

import { SiteSidebar } from '@/widgets/site-sidebar';

import { FOUNDATION_NAV } from '../model/foundation-nav';

export function FoundationLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1">
      <SiteSidebar label="Foundation" entries={FOUNDATION_NAV} />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
