import type { ReactNode } from 'react';

import { DocPage, type TocItem } from '@/shared/ui';

import type { SideProject } from '../model/side-projects';
import { ProjectLinks } from './project-links';
import { TechChipList } from './tech-chip';

interface ProjectDetailLayoutProps {
  project: SideProject;
  toc: readonly TocItem[];
  children: ReactNode;
}

// 상세 페이지 공통 틀: 제목·소개(목록 데이터) → 로고 링크·스택 칩 → 각 프로젝트가 쓴 섹션.
export function ProjectDetailLayout({
  project,
  toc,
  children,
}: ProjectDetailLayoutProps) {
  return (
    <DocPage title={project.name} description={project.description} toc={toc}>
      <div className="flex flex-col gap-3">
        <ProjectLinks project={project} />
        <TechChipList names={project.stack} />
      </div>
      {children}
    </DocPage>
  );
}
