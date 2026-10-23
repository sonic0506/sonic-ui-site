import { CodeBlock, DocSection, RuleList, type TocItem } from '@/shared/ui';

import type { SideProject } from '../model/side-projects';
import { ProjectDetailLayout } from './project-detail-layout';
import { StackList } from './stack-list';

const TOC: readonly TocItem[] = [
  { id: 'overview', label: '개요' },
  { id: 'features', label: '주요 특징' },
  { id: 'plugin', label: '플러그인' },
  { id: 'structure', label: '구조' },
  { id: 'stack', label: '기술 스택' },
];

const HOOK_FLOW = `Write src/entities/user/ui/UserBadge.tsx
 ├─ PreToolUse   경로가 kebab-case가 아니면 쓰기 취소
 └─ PostToolUse  prettier --write → eslint --fix → 남은 에러를 Claude가 다시 고침`;

const FEATURES = [
  {
    title: 'FSD 레이어 강제',
    description:
      'app → pages → widgets → features → entities → shared 방향만 허용하고, 다른 slice는 index.ts로만 가져와요.',
  },
  {
    title: '데이터 흐름 고정',
    description:
      '조회는 queryOptions 팩토리와 useSuspenseQuery, 변경은 useMutation으로 쓰고, fetch는 api/에서만 써요.',
  },
  {
    title: '자동 수정 루프',
    description:
      'hook이 Claude의 모든 파일 수정 뒤에 format과 lint를 돌리고, 고치지 못한 에러를 다시 Claude에게 넘겨요.',
  },
  {
    title: '원본과 동기화',
    description:
      'lock.json이 받은 버전과 파일 해시를 기억해서, 원본의 변경과 프로젝트의 변경을 구분해 합쳐요.',
  },
  {
    title: '사람 코드도 같은 규칙',
    description:
      '커밋 전 lint-staged와 CI가 Claude hook과 같은 규칙으로 검사해요.',
  },
  {
    title: '디자인 시스템까지 한 번에',
    description:
      'init이 sonic-ui를 쓸지 묻고, Y면 설치부터 디자인 lint, 전역 CSS, CLAUDE.md 연결까지 해요. 선택은 lock.json에 남아요.',
  },
] as const;

const INSTALL = `/plugin marketplace add sonic0506/sonic-harness-fe
/plugin install sonic-harness@sonic-harness
/sonic-harness:init`;

const COMMANDS = [
  {
    name: '/sonic-harness:init',
    description:
      '이 프로젝트에 최신 하네스를 적용해요. 디자인 시스템(sonic-ui)을 쓸지 묻고, Y면 설치와 세팅까지 해요.',
  },
  {
    name: '/sonic-harness:status',
    description:
      '적용 버전, 원본의 새 변경, 프로젝트에서 고친 하네스 파일을 보여 줘요.',
  },
  {
    name: '/sonic-harness:update',
    description:
      '최신 규칙을 받아요. 프로젝트에서 고친 파일은 덮어쓰지 않고 합쳐요.',
  },
  {
    name: '/sonic-harness:check',
    description:
      '마지막 점검 뒤 받은 규칙 변경을 지금 코드가 지키는지 점검해요.',
  },
  {
    name: '/sonic-harness:contribute',
    description: '프로젝트에서 고친 공통 규칙을 원본 저장소에 PR로 올려요.',
  },
] as const;

const DESIGN_SYSTEM_CODE = `/sonic-harness:init          # 확인 단계에서 디자인 시스템 사용 여부(Y/N)를 물어요
/sonic-harness:init design   # N을 골랐다가 나중에 켤 때

# .sonic-harness/lock.json
"designSystem": true`;

const STRUCTURE = `.claude-plugin/marketplace.json  플러그인 목록
plugin/                          명령어 5개, hooks, scripts
rules/                           프로젝트 .sonic-harness/로 들어가는 파일
templates/                       init 때 없는 파일만 복사하는 시작 파일
tests/lint-samples/              ESLint 규칙 테스트
evals/                           Claude 행동 평가`;

const STACK = [
  {
    name: 'Claude Code',
    description:
      '플러그인으로 배포해요. 명령어 5개와 파일을 쓰기 전후에 도는 hook이 들어 있어요.',
  },
  {
    name: 'ESLint',
    description: 'FSD 경계, 이름, import 제한, 테스트 규칙 대부분을 막아요.',
  },
  { name: 'Prettier', description: 'hook과 커밋 전에 코드 모양을 맞춰요.' },
  {
    name: 'TypeScript',
    description:
      'strict, noUncheckedIndexedAccess 같은 설정을 tsconfig.strict.json으로 나눠 줘요.',
  },
  {
    name: 'Node.js',
    description:
      'init, update, contribute를 처리하는 스크립트(harness.mjs)예요.',
  },
] as const;

export function SonicHarnessFeDetail({ project }: { project: SideProject }) {
  return (
    <ProjectDetailLayout project={project} toc={TOC}>
      <DocSection id="overview" title="개요">
        <p className="text-body text-default">
          규칙을 문서로만 남겨 두면 사람도 AI도 잊어요. FSD 레이어 경계, 이름
          규칙, 데이터 흐름 같은 규칙 대부분을 ESLint로 옮기고, Claude가 파일을
          고칠 때마다 그 검사를 자동으로 실행해요. 어긴 코드는 저장 전에
          막히거나, 저장 직후 에러로 돌아와 Claude가 직접 고쳐요.
        </p>
        <CodeBlock language="text" code={HOOK_FLOW} />
      </DocSection>

      <DocSection id="features" title="주요 특징">
        <RuleList rules={FEATURES} />
      </DocSection>

      <DocSection id="plugin" title="플러그인">
        <p className="text-body text-default">
          Claude Code 플러그인으로 배포해요. 한 번 설치하면
          .sonic-harness/lock.json이 있는 프로젝트에서만 동작해서, 다른
          프로젝트에는 영향이 없어요.
        </p>
        <CodeBlock language="text" code={INSTALL} />
        <ul>
          {COMMANDS.map(({ name, description }) => (
            <li
              key={name}
              className="flex flex-col gap-1 border-b border-default py-4"
            >
              <code className="font-mono text-body text-default">{name}</code>
              <span className="text-body text-muted">{description}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-2">
          <h3 className="text-body-strong text-default">
            sonic-ui와 함께 쓰기
          </h3>
          <p className="text-body text-default">
            init 확인 단계에서 &quot;디자인 시스템(sonic-ui)을 쓰나요?
            (Y/N)&quot;를 물어요. Y를 고르면 sonic-ui, 글꼴, lucide-react를
            latest로 설치해 package.json에 ^ 범위로 적고, 화면을 그릴 준비까지
            해요.
          </p>
          <p className="text-body text-default">
            Y일 때는 eslint.config.mjs의 디자인 lint를 켜고, CLAUDE.md가 설치한
            버전의 DESIGN.md·AI-RULES.md를 불러오게 해요. 전역 CSS에 layer
            순서와 sonic-ui 스타일·글꼴을 넣고, 앱 루트에 isolate를 줘요.
            Tailwind가 없으면 v4를 함께 설치해요.
          </p>
          <CodeBlock language="bash" code={DESIGN_SYSTEM_CODE} />
          <p className="text-body text-default">
            N을 고르면 sonic-ui를 설치하지 않고 CLAUDE.md에도 넣지 않아요.
            선택은 lock.json의 designSystem에 남아서, status가 사용 여부를 보여
            주고 update는 sonic-ui가 빠져 있으면 설치를 안내해요.
          </p>
        </div>
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
