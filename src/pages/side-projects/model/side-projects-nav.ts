import type { SidebarEntry } from '@/widgets/site-sidebar';

import { SIDE_PROJECTS } from './side-projects';

export const SIDE_PROJECTS_NAV: readonly SidebarEntry[] = [
  { href: '/side-projects', label: '개요' },
  ...SIDE_PROJECTS.map(({ slug, name }) => ({
    href: `/side-projects/${slug}`,
    label: name,
  })),
];
