import {
  COMPONENT_GROUPS,
  type ComponentName,
  getComponentHref,
  getComponentNames,
} from '@/entities/component';
import { CASE_STUDY_PAGES } from '@/pages/case-studies';
import { FOUNDATION_PAGES } from '@/pages/foundation';
import { GUIDELINES_PAGES } from '@/pages/guidelines';
import { SIDE_PROJECTS } from '@/pages/side-projects';

// sitemap과 llms.txt가 같은 페이지 목록을 써요. 페이지를 더하면 각 slice의 *_PAGES만 고치면 돼요.
export function getSitePaths(): string[] {
  const paths = [
    '/',
    '/components',
    ...getComponentNames().map(getComponentHref),
    '/foundation',
    ...FOUNDATION_PAGES.map(({ slug }) => `/foundation/${slug}`),
    '/guidelines',
    ...GUIDELINES_PAGES.map(({ slug }) => `/guidelines/${slug}`),
    '/case-studies',
    ...CASE_STUDY_PAGES.map(({ slug }) => `/case-studies/${slug}`),
    '/side-projects',
    ...SIDE_PROJECTS.map(({ slug }) => `/side-projects/${slug}`),
  ];
  return [...new Set(paths)];
}

export interface PageSummary {
  title: string;
  path: string;
  description: string;
}

export function getPageSections(): { title: string; pages: PageSummary[] }[] {
  return [
    {
      title: 'Foundation (토큰)',
      pages: FOUNDATION_PAGES.map(({ slug, title, description }) => ({
        title,
        path: `/foundation/${slug}`,
        description,
      })),
    },
    {
      title: 'Components',
      pages: COMPONENT_GROUPS.flatMap(
        (group): readonly { name: ComponentName; description: string }[] =>
          group.items,
      ).map(({ name, description }) => ({
        title: name,
        path: getComponentHref(name),
        description,
      })),
    },
    {
      title: 'Guidelines (화면 규칙)',
      pages: GUIDELINES_PAGES.map(({ slug, title, description }) => ({
        title,
        path: `/guidelines/${slug}`,
        description,
      })),
    },
    {
      title: 'Case Studies',
      pages: CASE_STUDY_PAGES.map(({ slug, title, description }) => ({
        title,
        path: `/case-studies/${slug}`,
        description,
      })),
    },
    {
      title: 'Side Projects',
      pages: SIDE_PROJECTS.map(({ slug, name, description }) => ({
        title: name,
        path: `/side-projects/${slug}`,
        description,
      })),
    },
  ];
}
