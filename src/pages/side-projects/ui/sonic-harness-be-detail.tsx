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

const HOOK_FLOW = `Write src/modules/order/order.service.ts
 ├─ PreToolUse   경로가 kebab-case가 아니면 쓰기 취소
 └─ PostToolUse  prettier --write → eslint --fix → 남은 에러를 Claude가 다시 고침
Stop
 └─ typecheck → 바뀐 파일의 단위 테스트 → 실패하면 Claude가 고친 뒤에 끝내요`;

const FEATURES = [
  {
    title: 'Feature·레이어 경계 강제',
    description:
      'controller → service → repository 방향만 허용하고, 다른 feature는 index.ts로만 가져와요. 파일 접미사로 레이어가 정해져요.',
  },
  {
    title: 'TypeORM 사용법 고정',
    description:
      'TypeORM은 repository에서만 쓰고, 목록 조회에는 take를 붙여요. raw SQL, synchronize, eager·lazy relation, 반복문 안 조회(N+1)를 막아요.',
  },
  {
    title: 'API 계약',
    description:
      '요청·응답 DTO와 Swagger를 함께 쓰고, 에러는 RFC 9457 ProblemDetails로 문서화해요. openapi.json이 코드와 같은지, 이전 버전과 호환되는지 CI가 확인해요.',
  },
  {
    title: 'feature 뼈대',
    description:
      'feature 명령이 module, controller, service, repository, DTO, entity, 단위·e2e 테스트를 규칙에 맞게 만들고 app.module.ts에 등록해요.',
  },
  {
    title: '자동 수정 루프',
    description:
      'hook이 Claude의 모든 파일 수정 뒤에 format과 lint를 돌리고, 작업을 끝낼 때 typecheck와 단위 테스트가 통과해야 해요.',
  },
  {
    title: '사람 코드도 같은 규칙',
    description:
      'PR마다 CI가 lint, 단위·e2e 테스트, OpenAPI, migration 누락, 보안을 검사해요. job 이름이 그대로 필수 check예요.',
  },
] as const;

const INSTALL = `/plugin marketplace add sonic0506/sonic-harness-be
/plugin install sonic-harness-be@sonic-harness-be
/sonic-harness-be:init`;

const COMMANDS = [
  {
    name: '/sonic-harness-be:init',
    description:
      '이 프로젝트에 최신 하네스를 적용해요. 공통 코드 기능을 쓸지 함께 물어요.',
  },
  {
    name: '/sonic-harness-be:feature <이름>',
    description:
      'feature 뼈대를 만들어요. --no-entity면 controller와 service만 만들어요.',
  },
  {
    name: '/sonic-harness-be:status',
    description:
      '적용 버전, 원본의 새 변경, 프로젝트에서 고친 하네스 파일을 보여 줘요.',
  },
  {
    name: '/sonic-harness-be:update',
    description:
      '최신 규칙을 받아요. 프로젝트에서 고친 파일은 덮어쓰지 않고 합쳐요.',
  },
  {
    name: '/sonic-harness-be:check',
    description:
      '마지막 점검 뒤 받은 규칙 변경을 지금 코드가 지키는지 점검해요.',
  },
  {
    name: '/sonic-harness-be:contribute',
    description: '프로젝트에서 고친 공통 규칙을 원본 저장소에 PR로 올려요.',
  },
] as const;

const COMMON_CODES_CODE = `/sonic-harness-be:init                # 확인 단계에서 공통 코드 사용 여부(Y/N)를 물어요
/sonic-harness-be:init common-codes   # N을 골랐다가 나중에 켤 때

# .sonic-harness-be/lock.json
"commonCodes": true`;

const STRUCTURE = `.claude-plugin/marketplace.json  플러그인 목록
plugin/                          명령어 6개, hooks, scripts
rules/                           프로젝트 .sonic-harness-be/로 들어가는 파일
templates/                       init 때 없는 파일만 복사하는 시작 파일
templates.feature/               feature 뼈대
templates.common-codes/          공통 코드를 켜면 더하는 파일
tests/lint-samples/              ESLint 규칙 테스트
evals/                           Claude 행동 평가 (기준 작업 5개)`;

const STACK = [
  {
    name: 'Claude Code',
    description:
      '플러그인으로 배포해요. 명령어 6개와 파일을 쓰기 전후, 작업을 끝낼 때 도는 hook이 들어 있어요.',
  },
  {
    name: 'NestJS',
    description:
      'nest new로 만든 NestJS 프로젝트에 적용해요. 예외 필터, JWT guard, 로그, health 같은 시작 파일을 넣어 줘요.',
  },
  {
    name: 'TypeORM',
    description:
      'repository에서만 쓰고, snake_case 이름 전략과 migration으로 스키마를 관리해요.',
  },
  {
    name: 'PostgreSQL',
    description:
      '기본 데이터베이스예요. e2e 테스트는 Testcontainers의 Postgres 위에서 돌아요.',
  },
  {
    name: 'ESLint',
    description:
      'feature·레이어 경계, 이름, import 제한과 로컬 규칙 18개(DI, DTO, 트랜잭션, N+1 등)를 막아요.',
  },
] as const;

export function SonicHarnessBeDetail({ project }: { project: SideProject }) {
  return (
    <ProjectDetailLayout project={project} toc={TOC}>
      <DocSection id="overview" title="개요">
        <p className="text-body text-default">
          Sonic Harness FE의 백엔드판이에요. feature 경계, 레이어 방향, TypeORM
          사용법 같은 규칙 대부분을 ESLint로 옮기고, Claude가 파일을 고칠 때마다
          그 검사를 자동으로 실행해요. 작업을 끝내려 할 때는 typecheck와 관련
          단위 테스트가 통과해야 해요.
        </p>
        <CodeBlock language="text" code={HOOK_FLOW} />
      </DocSection>

      <DocSection id="features" title="주요 특징">
        <RuleList rules={FEATURES} />
      </DocSection>

      <DocSection id="plugin" title="플러그인">
        <p className="text-body text-default">
          Claude Code 플러그인으로 배포해요. .sonic-harness-be/lock.json이 있는
          프로젝트에서만 동작하고, FE 하네스와 함께 설치해도 서로의 hook이
          끼어들지 않아요.
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
          <h3 className="text-body-strong text-default">공통 코드</h3>
          <p className="text-body text-default">
            상품 유형처럼 관리자가 관리하는 단순 분류 값이에요. init에서 Y를
            고르면 그룹·코드 entity, 캐시, 검증 데코레이터, 관리 API, seed
            migration을 넣어요.
          </p>
          <CodeBlock language="bash" code={COMMON_CODES_CODE} />
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
