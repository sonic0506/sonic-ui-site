import type { SidebarEntry } from '@/widgets/site-sidebar';

// Figma Case Studies 인덱스(10:391)의 순서·문구예요.
export const CASE_STUDY_PAGES = [
  {
    slug: 'api-keys',
    title: 'API 키 관리',
    description:
      '목록, 상태 표시, 행 동작, 삭제 확인, 데이터 화면의 4가지 상태를 한 화면에 적용했어요.',
  },
  {
    slug: 'todos',
    title: '할 일 목록',
    description:
      'JSONPlaceholder를 필터, DataGrid, Pagination으로 붙이고 하네스 규칙대로 레이어를 나눴어요.',
  },
] as const;

export type CaseStudySlug = (typeof CASE_STUDY_PAGES)[number]['slug'];

export const CASE_STUDIES_NAV: readonly SidebarEntry[] = [
  { href: '/case-studies', label: '개요' },
  ...CASE_STUDY_PAGES.map(({ slug, title }) => ({
    href: `/case-studies/${slug}`,
    label: title,
  })),
];
