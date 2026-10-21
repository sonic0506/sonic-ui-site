import type { SidebarEntry } from '@/widgets/site-sidebar';

// Figma Guidelines 인덱스(10:204)의 순서·문구예요.
export const GUIDELINES_PAGES = [
  {
    slug: 'principles',
    title: '원칙',
    description:
      '토큰 밖의 값은 없다, 강조는 한 곳에만 같은 다섯 가지 원칙이에요.',
  },
  {
    slug: 'layout',
    title: '레이아웃',
    description: '본문 최대 너비, 사이드 내비, 간격 기본값이에요.',
  },
  {
    slug: 'writing',
    title: '문구',
    description:
      '해요체, 동작 그대로의 버튼 문구, 고치는 방법을 담은 에러 문구예요.',
  },
  {
    slug: 'data-states',
    title: '데이터 화면의 4가지 상태',
    description: '정상, 로딩, 빈 상태, 에러를 모두 그려야 개발로 넘어가요.',
  },
  {
    slug: 'accessibility',
    title: '접근성',
    description: '포커스 링, 대비 4.5:1, 키보드 조작, 화면 낭독기 이름이에요.',
  },
] as const;

export type GuidelinesSlug = (typeof GUIDELINES_PAGES)[number]['slug'];

export const GUIDELINES_NAV: readonly SidebarEntry[] = [
  { href: '/guidelines', label: '개요' },
  ...GUIDELINES_PAGES.map(({ slug, title }) => ({
    href: `/guidelines/${slug}`,
    label: title,
  })),
];
