import type { Metadata } from 'next';

import { pageMetadata } from '@/shared/lib';

import { findSideProject } from './side-projects';

export const sideProjectsMetadata = pageMetadata({
  title: 'Side Projects',
  description:
    '디자인 시스템 Sonic UI로 만든 사이드 프로젝트예요. Sonic UI, Sonic Harness FE, Sonic UI Site의 소개와 기술 스택을 담았어요.',
  path: '/side-projects',
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const project = findSideProject((await params).slug);
  if (!project) return {};
  return pageMetadata({
    title: `${project.name} · Side Projects`,
    description: project.description,
    path: `/side-projects/${project.slug}`,
  });
}
