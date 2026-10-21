import type { ReactNode } from 'react';

import { SiteSidebar } from '@/widgets/site-sidebar';

import { CASE_STUDIES_NAV } from '../model/case-studies-nav';

export function CaseStudiesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1">
      <SiteSidebar label="Case Studies" entries={CASE_STUDIES_NAV} />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
