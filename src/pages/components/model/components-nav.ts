import { COMPONENT_GROUPS, getComponentHref } from '@/entities/component';
import type { SidebarEntry } from '@/widgets/site-sidebar';

export const COMPONENTS_NAV: readonly SidebarEntry[] = [
  { href: '/components', label: '개요' },
  ...COMPONENT_GROUPS.map(({ title, items }) => ({
    title,
    links: items.map(({ name }) => ({
      href: getComponentHref(name),
      label: name,
    })),
  })),
];
