import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Text,
} from '@xonic0506/sonic-ui';
import { Suspense } from 'react';

import {
  CodeBlock,
  DocPage,
  DocSection,
  RuleList,
  type TocItem,
} from '@/shared/ui';

import { TodoListFallback } from './todo-list-fallback';
import { TodoListSection } from './todo-list-section';
import { TodoStatesPreview } from './todo-states-preview';

const TOC: readonly TocItem[] = [
  { id: 'screen', label: '화면' },
  { id: 'states', label: '4가지 상태' },
  { id: 'structure', label: '코드 구조' },
  { id: 'decisions', label: '결정' },
  { id: 'components', label: '쓴 컴포넌트' },
];

const CODE_TREE = `src/
├─ entities/todo/       model · api(todo.api · todo.queries · todo.mock) · hooks
├─ entities/user/       api(user.queries · user.mock) · hooks
├─ widgets/todo-grid/   ui/todo-grid.tsx  ← todo와 user를 합쳐 DataGrid에 넘겨요
├─ pages/case-studies/  model/use-todo-list-search-params.ts  (nuqs)
│                       ui/todos-page.tsx  (prefetch · Suspense · ErrorBoundary)
└─ app/mocks/handlers.ts  todoHandlers · userHandlers

todoQueries.list(params) → useSuspenseQuery → <DataGrid rowCount={total} />`;

const URL_ROWS = [
  { url: 'q=quis', filter: '검색 Input', api: 'q=quis' },
  { url: 'userId=3', filter: '사용자 Select', api: 'userId=3' },
  { url: 'status=done', filter: '상태 ToggleGroup', api: 'completed=true' },
  {
    url: 'sort=title.desc',
    filter: '머리글 정렬',
    api: '_sort=title&_order=desc',
  },
  { url: 'page=2&size=10', filter: 'Pagination', api: '_page=2&_limit=10' },
] as const;

const DECISIONS = [
  {
    title: '정렬과 페이지는 서버가 해요',
    description:
      'DataGrid에 rowCount를 넘겨 서버 모드로 써요. 받은 한 페이지만 정렬하면 전체 순서와 달라져요.',
  },
  {
    title: '필터를 바꾸면 1페이지로',
    description:
      '검색어, 사용자, 상태가 바뀌면 page를 1로 되돌려요. 없는 페이지에 머무르지 않아요.',
  },
  {
    title: '페이지를 넘겨도 이전 화면을 유지해요',
    description:
      '새 조건은 useDeferredValue로 넘겨서, 불러오는 동안 이전 결과를 보여 줘요. Skeleton은 처음 불러올 때만 보여요.',
  },
  {
    title: '검색은 입력을 멈추고 300ms 뒤',
    description: '글자마다 요청하지 않도록 URL 갱신을 debounce해요.',
  },
  {
    title: '사용자 이름은 widget에서 합쳐요',
    description:
      'todo와 user는 서로 다른 entity라 서로 가져오지 않아요. 둘을 합치는 건 widgets/todo-grid예요.',
  },
] as const;

const USED_COMPONENTS = [
  'DataGrid',
  'Pagination',
  'Input',
  'Select',
  'ToggleGroup',
  'Badge',
  'Skeleton',
  'EmptyState',
  'ErrorState',
] as const;

export function TodosPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  return (
    <DocPage
      title="할 일 목록"
      description="JSONPlaceholder의 할 일 200개를 필터, DataGrid, Pagination으로 보여 주고, 하네스 규칙대로 레이어를 나눈 사례예요."
      toc={TOC}
    >
      <DocSection
        id="screen"
        title="화면"
        description="필터와 페이지는 URL에 남아서 새로고침하거나 링크를 보내도 같은 화면이 나와요."
      >
        <Card className="p-6">
          <div className="flex flex-col gap-1">
            <Text variant="title" as="h3">
              할 일
            </Text>
            <Text tone="muted">사용자, 상태, 검색어로 골라 봐요.</Text>
          </div>
          {/* URL 조건(searchParams)을 읽는 부분만 Suspense로 감싸요. */}
          <Suspense fallback={<TodoListFallback />}>
            <TodoListSection searchParams={searchParams} />
          </Suspense>
        </Card>
      </DocSection>
      <DocSection
        id="states"
        title="4가지 상태"
        description="정상은 위 화면이에요. 필터 줄은 그대로 두고 표 자리만 바꾸고, 빈 상태와 에러에서는 Pagination을 숨겨요."
      >
        <TodoStatesPreview />
      </DocSection>
      <DocSection
        id="structure"
        title="코드 구조"
        description="조회는 entities, 둘을 합치는 건 widgets, URL 상태와 Suspense·ErrorBoundary는 pages가 맡아요. 필터 값은 URL에서 API 쿼리로 그대로 바뀌어요."
      >
        <CodeBlock language="text" code={CODE_TREE} />
        <Table className="min-w-160">
          <TableHeader>
            <TableRow>
              <TableHead>URL</TableHead>
              <TableHead>필터</TableHead>
              <TableHead>API 쿼리</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {URL_ROWS.map(({ url, filter, api }) => (
              <TableRow key={url}>
                <TableCell className="font-mono">{url}</TableCell>
                <TableCell>{filter}</TableCell>
                <TableCell className="font-mono">{api}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DocSection>
      <DocSection id="decisions" title="결정">
        <RuleList rules={DECISIONS} />
      </DocSection>
      <DocSection id="components" title="쓴 컴포넌트">
        <ul className="flex flex-wrap gap-2">
          {USED_COMPONENTS.map((name) => (
            <li key={name} className="flex">
              <Badge>{name}</Badge>
            </li>
          ))}
        </ul>
      </DocSection>
    </DocPage>
  );
}
