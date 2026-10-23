import type { SidebarEntry } from '@/widgets/site-sidebar';

// Figma Foundation 인덱스(10:48)의 순서·문구예요.
export const FOUNDATION_PAGES = [
  {
    slug: 'color',
    title: 'Color',
    description: 'Semantic 색 토큰 31개와 light·dark 값, 대비 기준이에요.',
  },
  {
    slug: 'typography',
    title: 'Typography',
    description: 'IBM Plex Sans KR·Mono로 만든 텍스트 스타일 8개예요.',
  },
  {
    slug: 'spacing-radius',
    title: 'Spacing · Radius',
    description: '4px 단위 간격 12단계와 radius 4단계예요.',
  },
  {
    slug: 'motion',
    title: 'Motion',
    description: 'hover, 열기·닫기, 반복 애니메이션에 쓰는 시간과 곡선이에요.',
  },
  {
    slug: 'icon',
    title: 'Icon',
    description: 'Lucide 아이콘의 크기, 선 두께, 색 규칙이에요.',
  },
  {
    slug: 'illustration',
    title: 'Illustration',
    description:
      '빈 상태, 에러, 에러 페이지에만 쓰는 캐릭터 그림이에요. 색 토큰 밖의 이미지 자산이에요.',
  },
] as const;

export type FoundationSlug = (typeof FOUNDATION_PAGES)[number]['slug'];

export const FOUNDATION_NAV: readonly SidebarEntry[] = [
  { href: '/foundation', label: '개요' },
  ...FOUNDATION_PAGES.map(({ slug, title }) => ({
    href: `/foundation/${slug}`,
    label: title,
  })),
];
