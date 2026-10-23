import { CodeBlock, DocSection, RuleList, type TocItem } from '@/shared/ui';

import type { SideProject } from '../model/side-projects';
import { ProjectDetailLayout } from './project-detail-layout';
import { StackList } from './stack-list';

const TOC: readonly TocItem[] = [
  { id: 'overview', label: '개요' },
  { id: 'features', label: '주요 특징' },
  { id: 'structure', label: '구조' },
  { id: 'stack', label: '기술 스택' },
];

const ROUTES = `/foundation     색, 타이포그래피, 간격·Radius, 모션, 아이콘, 일러스트
/components     Core 컴포넌트의 변형, 사용법, Props, 코드
/guidelines     원칙, 데이터 상태, 접근성, 레이아웃, 문구
/case-studies   API 키 관리, 할 일 목록
/side-projects  Sonic UI로 만든 프로젝트`;

const FEATURES = [
  {
    title: 'Figma가 원본',
    description:
      '모든 페이지가 Figma Sonic UI Site에 1440·375 화면으로 있고, 코드는 그 화면을 따라요.',
  },
  {
    title: '컴포넌트는 sonic-ui에서만',
    description:
      'Core 컴포넌트와 토큰은 패키지에서 가져오고, 문서용 부품(DocPage, Code Block, TOC)만 사이트에 둬요.',
  },
  {
    title: '하네스가 지키는 규칙',
    description:
      'sonic-harness로 FSD 경계, 데이터 흐름, 테스트 규칙을 ESLint와 CI가 확인해요.',
  },
  {
    title: '데이터 화면의 4가지 상태',
    description:
      '사례 화면은 서버에서 미리 불러오고, TanStack Query와 Suspense로 정상·로딩·빈 상태·에러를 그려요.',
  },
  {
    title: '검색과 AI를 위한 정보',
    description:
      '페이지별 metadata, sitemap, llms.txt, JSON-LD를 같은 페이지 목록에서 만들어요.',
  },
] as const;

const STRUCTURE = `app/              Next 라우트 (src/pages 다시 내보내기)
src/
├─ app/           providers, MSW, SEO
├─ pages/         home · components · foundation · guidelines · case-studies · side-projects
├─ widgets/       site-header · site-sidebar · site-footer · todo-grid
├─ entities/      component · todo · user · theme
└─ shared/        api · config · ui`;

const STACK = [
  {
    name: 'Next.js',
    description:
      '16 App Router예요. Cache Components로 문서 페이지를 정적으로 그려요.',
  },
  {
    name: 'React',
    description:
      '19예요. 서버 컴포넌트가 기본이고, 상호작용이 있는 부품만 클라이언트 컴포넌트예요.',
  },
  {
    name: 'TypeScript',
    description: 'strict 설정과 하네스 ESLint 규칙으로 레이어 경계를 지켜요.',
  },
  {
    name: 'Tailwind CSS',
    description: 'v4예요. sonic-ui 토큰 클래스(bg-surface, text-muted)만 써요.',
  },
  {
    name: 'TanStack Query',
    description: '사례 화면의 데이터 조회와 서버 prefetch를 맡아요.',
  },
] as const;

export function SonicUiSiteDetail({ project }: { project: SideProject }) {
  return (
    <ProjectDetailLayout project={project} toc={TOC}>
      <DocSection id="overview" title="개요">
        <p className="text-body text-default">
          Sonic UI를 Foundation, Components, Guidelines, Case Studies로 나눠
          소개해요. @xonic0506/sonic-ui를 실제로 쓰는 첫 프로젝트라, 쓰다가 막힌
          곳은 하네스와 sonic-ui를 고치는 근거로 기록해요.
        </p>
        <CodeBlock language="text" code={ROUTES} />
      </DocSection>
      <DocSection id="features" title="주요 특징">
        <RuleList rules={FEATURES} />
      </DocSection>
      <DocSection id="structure" title="구조">
        <CodeBlock language="text" code={STRUCTURE} />
      </DocSection>
      <DocSection id="stack" title="기술 스택">
        <StackList items={STACK} />
      </DocSection>
    </ProjectDetailLayout>
  );
}
