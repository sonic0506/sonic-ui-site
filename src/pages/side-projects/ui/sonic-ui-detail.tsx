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

const FEATURES = [
  {
    title: 'Figma Variables가 곧 CSS 변수',
    description:
      'color/bg/primary는 --sn-color-bg-primary가 되고, light·dark 테마를 함께 가져요.',
  },
  {
    title: '쓰는 쪽과 부딪히지 않는 CSS',
    description:
      '모든 클래스에 sn: 접두사를 붙이고 @layer sonic 안에 넣어 미리 빌드해요. Tailwind가 없는 프로젝트에서도 써요.',
  },
  {
    title: 'Base UI 위의 접근성',
    description:
      '키보드 조작, 포커스 관리, 화면 낭독기 지원이 기본으로 들어 있어요.',
  },
  {
    title: '서버 컴포넌트에서 바로 import',
    description:
      '모든 파일에 "use client"가 붙어 있고, 하위 컴포넌트는 CardHeader처럼 이름 있는 export로 내보내요.',
  },
  {
    title: 'AI가 읽는 규칙을 함께 배포',
    description:
      'DESIGN.md, AI-RULES.md와 임의의 값·hex 색을 막는 ESLint 규칙이 패키지에 들어 있어요.',
  },
] as const;

const STRUCTURE = `.
├── src/components/   Core 컴포넌트
├── src/patterns/     Pattern 승격 기준
├── scripts/          Figma 토큰 추출, CSS 빌드, 대비 검사
├── lint/             디자인 lint 규칙
├── playground/       Figma와 비교하는 화면
├── fixtures/         쓰는 쪽 예제 (Vite, Next.js)
└── DESIGN.md         디자인 규칙 (패키지에 포함)`;

const STACK = [
  {
    name: 'React',
    description: 'Core 컴포넌트예요. React 18.2와 19를 지원해요.',
  },
  {
    name: 'TypeScript',
    description:
      '아이콘 버튼의 aria-label처럼 지켜야 할 규칙을 props 타입으로 강제해요.',
  },
  {
    name: 'Vite',
    description: '라이브러리 빌드와 Figma 비교용 playground예요.',
  },
  {
    name: 'Tailwind CSS',
    description: 'v4로 sn: 접두사 클래스를 만들고 CSS를 미리 컴파일해요.',
  },
  { name: 'Vitest', description: '컴포넌트 동작 테스트예요.' },
] as const;

export function SonicUiDetail({ project }: { project: SideProject }) {
  return (
    <ProjectDetailLayout project={project} toc={TOC}>
      <DocSection id="overview" title="개요">
        <p className="text-body text-default">
          모든 사이드 프로젝트에서 같은 디자인을 쓰려고 만든 개인 디자인
          시스템이에요. 디자인 규칙을 Figma와 DESIGN.md에 정해 두면, AI가 그
          규칙으로 Figma 화면을 그리고 이 패키지의 컴포넌트로 코드를 짜요. Sonic
          Harness FE를 쓰는 프로젝트는 /sonic-harness:init에서 Y를 고르면 설치와
          연결이 한 번에 끝나요.
        </p>
        <CodeBlock
          language="text"
          code="Figma (원본) → DESIGN.md (규칙) → @xonic0506/sonic-ui (코드) → 실제 프로젝트"
        />
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
