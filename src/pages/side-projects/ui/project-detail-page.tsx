import { notFound } from 'next/navigation';
import type { ComponentType } from 'react';

import {
  findSideProject,
  SIDE_PROJECTS,
  type SideProject,
} from '../model/side-projects';
import { SonicHarnessFeDetail } from './sonic-harness-fe-detail';
import { SonicUiDetail } from './sonic-ui-detail';
import { SonicUiSiteDetail } from './sonic-ui-site-detail';

// 프로젝트마다 상세 내용이 달라서 컴포넌트로 따로 써요. 목록에 넣고 여기 없으면 빌드 때 404 페이지가 돼요.
const PROJECT_DETAILS: Record<
  string,
  ComponentType<{ project: SideProject }>
> = {
  'sonic-ui': SonicUiDetail,
  'sonic-harness-fe': SonicHarnessFeDetail,
  'sonic-ui-site': SonicUiSiteDetail,
};

export function generateStaticParams() {
  return SIDE_PROJECTS.map(({ slug }) => ({ slug }));
}

export async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = findSideProject(slug);
  const Detail = PROJECT_DETAILS[slug];
  if (!project || !Detail) notFound();
  return <Detail project={project} />;
}
