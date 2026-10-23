import Image from 'next/image';
import Link from 'next/link';

import type { SideProject } from '../model/side-projects';
import { ProjectLinks } from './project-links';
import { TechChipList } from './tech-chip';

// Figma `Site / Project Card`. 카드 전체가 상세 링크예요. 안에 로고 링크가 있어서 <a>로 감싸지 않고,
// 제목 링크의 ::after를 카드 전체로 넓혀요(IndexCard와 같은 방식).
export function ProjectCard({ project }: { project: SideProject }) {
  return (
    <article className="relative flex flex-col overflow-hidden rounded-lg border border-default bg-surface hover:border-strong">
      <div className="flex h-40 items-center justify-center bg-canvas">
        <Image src={project.thumbnail} alt="" className="h-30 w-auto" />
      </div>
      <div className="flex flex-col gap-4 p-5">
        <div className="flex items-center gap-4">
          <h2 className="flex-1 text-title">
            <Link
              href={`/side-projects/${project.slug}`}
              className="outline-none after:absolute after:inset-0 after:rounded-lg focus-visible:after:outline-2 focus-visible:after:outline-focus"
            >
              {project.name}
            </Link>
          </h2>
          <ProjectLinks project={project} />
        </div>
        <p className="text-body text-muted">{project.description}</p>
        <TechChipList names={project.stack} />
      </div>
    </article>
  );
}
