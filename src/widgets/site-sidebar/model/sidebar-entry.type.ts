export interface SidebarLink {
  href: string;
  label: string;
}

export interface SidebarGroup {
  title: string;
  links: readonly SidebarLink[];
}

export type SidebarEntry = SidebarLink | SidebarGroup;
