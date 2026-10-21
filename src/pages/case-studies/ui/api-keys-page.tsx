import {
  Badge,
  type BadgeProps,
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Text,
} from '@xonic0506/sonic-ui';
import { Ellipsis } from 'lucide-react';
import type { ReactNode } from 'react';

import {
  DialogPreview,
  DocPage,
  DocSection,
  MenuPopupPreview,
  RuleList,
  ToastPreview,
  type TocItem,
} from '@/shared/ui';

const TOC: readonly TocItem[] = [
  { id: 'screen', label: '화면' },
  { id: 'row-actions', label: '행 동작' },
  { id: 'decisions', label: '결정' },
  { id: 'states', label: '4가지 상태' },
  { id: 'components', label: '쓴 컴포넌트' },
];

const API_KEYS: readonly {
  name: string;
  status: string;
  tone: NonNullable<BadgeProps['tone']>;
  requests: string;
}[] = [
  { name: 'production', status: '활성', tone: 'success', requests: '12,480' },
  {
    name: 'github-actions',
    status: '활성',
    tone: 'success',
    requests: '3,215',
  },
  { name: 'staging', status: '만료 예정', tone: 'warning', requests: '842' },
  { name: 'local-dev', status: '중지됨', tone: 'neutral', requests: '0' },
];

const DECISIONS = [
  {
    title: '상태는 subtle Badge로',
    description:
      '목록에서는 subtle만 써요. solid는 꼭 눈에 띄어야 하는 한 곳에만 써서, 표가 알록달록해지지 않게 했어요.',
  },
  {
    title: '행마다 버튼을 늘어놓지 않기',
    description:
      '행 끝에 동작 버튼을 여러 개 두면 표가 버튼으로 덮여요. 아이콘 버튼 하나(aria-label "더 보기")와 Menu로 묶었어요.',
  },
  {
    title: '삭제는 두 번 확인',
    description:
      '메뉴에서 바로 지우지 않고 AlertDialog로 결과를 먼저 알려요. 바깥을 눌러도 닫히지 않고, 확인 버튼 문구는 동작 이름 그대로 "삭제"예요.',
  },
  {
    title: '숫자는 오른쪽 정렬 + mono',
    description: '요청 수 열은 align="end"라 고정폭 글자로 자리가 맞아요.',
  },
] as const;

const USED_COMPONENTS = [
  'Button',
  'Table',
  'Badge',
  'Menu',
  'AlertDialog',
  'Toast',
  'Skeleton',
  'EmptyState',
  'ErrorState',
] as const;

// 사례 화면이에요. 좁은 화면에서는 표가 최소 480으로 가로 스크롤해요.
function ApiKeysScreen() {
  return (
    <Card className="p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-col gap-1">
          <Text variant="title" as="h3">
            API 키
          </Text>
          <Text tone="muted">키는 만든 직후 한 번만 보여 줘요.</Text>
        </div>
        <Button>API 키 만들기</Button>
      </div>
      <Table className="min-w-120">
        <TableHeader>
          <TableRow>
            <TableHead className="w-60">이름</TableHead>
            <TableHead>상태</TableHead>
            <TableHead className="w-40" align="end">
              요청 수
            </TableHead>
            {/* relative: sr-only 글자가 표의 가로 스크롤 밖으로 나가지 않게 해요. */}
            <TableHead className="relative w-14">
              <span className="sr-only">동작</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {API_KEYS.map(({ name, status, tone, requests }) => (
            <TableRow key={name}>
              <TableCell>{name}</TableCell>
              <TableCell>
                <Badge tone={tone}>{status}</Badge>
              </TableCell>
              <TableCell align="end">{requests}</TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label={`${name} 더 보기`}
                >
                  <Ellipsis />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

function FlowStep({
  caption,
  children,
}: {
  caption: string;
  children: ReactNode;
}) {
  return (
    <div className="flex w-full flex-col items-center gap-2">
      <span className="text-caption text-muted">{caption}</span>
      {children}
    </div>
  );
}

export function ApiKeysPage() {
  return (
    <DocPage
      title="API 키 관리"
      description="키 목록, 상태 표시, 행 동작, 삭제 확인을 한 화면에 담은 사례예요. 새 컴포넌트 없이 Core 조합만으로 만들었어요."
      toc={TOC}
    >
      <DocSection
        id="screen"
        title="화면"
        description='목록은 Table, 상태는 subtle Badge, 행 동작은 ghost 아이콘 버튼 하나로 모았어요. primary 버튼은 머리글의 "API 키 만들기" 하나예요.'
      >
        <ApiKeysScreen />
      </DocSection>
      <DocSection
        id="row-actions"
        title="행 동작"
        description="이름 바꾸기와 삭제는 행 끝의 메뉴로 모았어요. 삭제는 메뉴 맨 아래 구분선 뒤에 두고, 실행 전에 AlertDialog로 결과를 알려요. 끝나면 Toast로 결과를 짧게 알려요."
      >
        <div className="flex flex-col items-center gap-6 rounded-lg border border-default bg-surface px-6 py-10">
          <FlowStep caption="1. 행 끝 메뉴에서 삭제를 골라요">
            <MenuPopupPreview />
          </FlowStep>
          <FlowStep caption="2. AlertDialog로 결과를 알리고 확인받아요">
            <DialogPreview
              title="API 키를 삭제할까요?"
              description="이 키로 보내는 요청이 바로 실패해요. 삭제하면 되돌릴 수 없어요."
              footer={
                <>
                  <Button variant="secondary">취소</Button>
                  <Button variant="danger">삭제</Button>
                </>
              }
            />
          </FlowStep>
          <FlowStep caption="3. 끝나면 Toast로 결과를 알려요">
            <ToastPreview
              tone="success"
              title="API 키를 삭제했어요"
              description="staging 키로 보내는 요청은 이제 실패해요."
            />
          </FlowStep>
        </div>
      </DocSection>
      <DocSection id="decisions" title="결정">
        <RuleList rules={DECISIONS} />
      </DocSection>
      <DocSection
        id="states"
        title="4가지 상태"
        description='로딩은 같은 표 배치의 Skeleton, 빈 상태는 EmptyState("API 키가 없어요"), 에러는 ErrorState("API 키를 불러오지 못했어요")로 그렸어요. 자세한 규칙은 Guidelines › 데이터 화면의 4가지 상태에 있어요.'
      />
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
