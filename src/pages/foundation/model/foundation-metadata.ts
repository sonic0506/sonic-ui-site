import { pageMetadata } from '@/shared/lib';

import { FOUNDATION_PAGES, type FoundationSlug } from './foundation-nav';

export const foundationMetadata = pageMetadata({
  title: 'Foundation',
  description:
    'Sonic UI의 색, 글자, 간격·radius, 모션, 아이콘, 일러스트 토큰이에요. Figma Variables가 그대로 CSS 변수(--sn-*)가 되고, light와 dark를 함께 정의해요.',
  path: '/foundation',
});

function metadataFor(slug: FoundationSlug) {
  const page = FOUNDATION_PAGES.find((candidate) => candidate.slug === slug);
  if (!page) throw new Error(`Foundation 페이지가 없어요: ${slug}`);
  return pageMetadata({
    title: `${page.title} · Foundation`,
    description: page.description,
    path: `/foundation/${slug}`,
  });
}

export const colorMetadata = metadataFor('color');
export const typographyMetadata = metadataFor('typography');
export const spacingRadiusMetadata = metadataFor('spacing-radius');
export const motionMetadata = metadataFor('motion');
export const iconMetadata = metadataFor('icon');
export const illustrationMetadata = metadataFor('illustration');
