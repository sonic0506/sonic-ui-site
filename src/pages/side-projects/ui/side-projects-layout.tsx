import type { ReactNode } from 'react';

import { SiteSidebar } from '@/widgets/site-sidebar';

import { SIDE_PROJECTS_NAV } from '../model/side-projects-nav';

export function SideProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1">
      <SiteSidebar label="Side Projects" entries={SIDE_PROJECTS_NAV} />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
