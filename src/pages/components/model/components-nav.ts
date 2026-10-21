import type { SidebarEntry } from '@/widgets/site-sidebar';

// 'RadioGroup' → '/components/radio-group'
function toComponentLink(name: string) {
  const slug = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  return { href: `/components/${slug}`, label: name };
}

function group(title: string, names: readonly string[]) {
  return { title, links: names.map(toComponentLink) };
}

// Figma Components 사이드바(11:596)와 같은 순서예요.
export const COMPONENTS_NAV: readonly SidebarEntry[] = [
  { href: '/components', label: '개요' },
  group('기본', [
    'Button',
    'Input',
    'Textarea',
    'Text',
    'Link',
    'Card',
    'Avatar',
    'Separator',
  ]),
  group('폼', [
    'Field',
    'Checkbox',
    'RadioGroup',
    'Switch',
    'Select',
    'FileDropzone',
  ]),
  group('오버레이', ['Dialog', 'AlertDialog', 'Menu', 'Popover', 'Tooltip']),
  group('탐색·표시', ['Tabs', 'Table', 'ToggleGroup', 'Accordion']),
  group('피드백·상태', [
    'Toast',
    'Badge',
    'Progress',
    'Skeleton',
    'EmptyState',
    'ErrorState',
    'ErrorPage',
    'FileList',
  ]),
];
