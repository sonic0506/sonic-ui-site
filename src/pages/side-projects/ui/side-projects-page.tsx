import { DocPage } from '@/shared/ui';

import { SIDE_PROJECTS } from '../model/side-projects';
import { ProjectCard } from './project-card';

export function SideProjectsPage() {
  return (
    <DocPage
      title="Side Projects"
      description="디자인 시스템 Sonic UI로 만든 사이드 프로젝트예요. 같은 토큰과 컴포넌트로 만들어서, 쓰다가 막힌 곳은 Sonic UI를 고치는 근거가 돼요."
    >
      <div className="grid items-start gap-6 md:grid-cols-2">
        {SIDE_PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </DocPage>
  );
}
