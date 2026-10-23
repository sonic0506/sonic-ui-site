import { pageMetadata } from '@/shared/lib';

import { CASE_STUDY_PAGES, type CaseStudySlug } from './case-studies-nav';

export const caseStudiesMetadata = pageMetadata({
  title: 'Case Studies',
  description:
    'Sonic UI 규칙을 실제 화면에 적용한 사례와 그때 내린 결정이에요. API 키 관리, 필터·DataGrid·Pagination으로 만든 할 일 목록을 담았어요.',
  path: '/case-studies',
});

function metadataFor(slug: CaseStudySlug) {
  const page = CASE_STUDY_PAGES.find((candidate) => candidate.slug === slug);
  if (!page) throw new Error(`사례가 없어요: ${slug}`);
  return pageMetadata({
    title: `${page.title} · Case Studies`,
    description: page.description,
    path: `/case-studies/${slug}`,
  });
}

export const apiKeysMetadata = metadataFor('api-keys');
export const todosMetadata = metadataFor('todos');
