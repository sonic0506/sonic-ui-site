import type { ReactNode } from 'react';

import { SiteSidebar } from '@/widgets/site-sidebar';

import { COMPONENTS_NAV } from '../model/components-nav';

export function ComponentsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1">
      <SiteSidebar label="컴포넌트" entries={COMPONENTS_NAV} />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
