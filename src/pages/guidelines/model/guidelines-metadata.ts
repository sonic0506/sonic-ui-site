import { pageMetadata } from '@/shared/lib';

import { GUIDELINES_PAGES, type GuidelinesSlug } from './guidelines-nav';

export const guidelinesMetadata = pageMetadata({
  title: 'Guidelines',
  description:
    'Sonic UI 컴포넌트를 조합해 화면을 만들 때 지킬 규칙이에요. 원칙, 레이아웃, 문구, 데이터 화면의 4가지 상태, 접근성을 사람과 AI가 함께 따라요.',
  path: '/guidelines',
});

function metadataFor(slug: GuidelinesSlug) {
  const page = GUIDELINES_PAGES.find((candidate) => candidate.slug === slug);
  if (!page) throw new Error(`Guidelines 페이지가 없어요: ${slug}`);
  return pageMetadata({
    title: `${page.title} · Guidelines`,
    description: page.description,
    path: `/guidelines/${slug}`,
  });
}

export const principlesMetadata = metadataFor('principles');
export const layoutMetadata = metadataFor('layout');
export const writingMetadata = metadataFor('writing');
export const dataStatesMetadata = metadataFor('data-states');
export const accessibilityMetadata = metadataFor('accessibility');
