import {
  Button,
  EmptyState,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@xonic0506/sonic-ui';

import { DocPage, DocSection, Stage, type TocItem } from '@/shared/ui';

import { ApiKeysErrorState } from './api-keys-error-state';
import { ApiKeysSample } from './api-keys-sample';

const TOC: readonly TocItem[] = [
  { id: 'normal', label: '정상' },
  { id: 'loading', label: '로딩' },
  { id: 'empty', label: '빈 상태' },
  { id: 'error', label: '에러' },
  { id: 'pending', label: '동작 중' },
];

const API_KEYS = [
  { name: 'production', status: '활성', requests: '12,480' },
  { name: 'github-actions', status: '활성', requests: '3,215' },
  { name: 'local-dev', status: '만료 예정', requests: '0' },
] as const;

const SKELETON_ROW_COUNT = 4;

export function DataStatesPage() {
  return (
    <DocPage
      title="데이터 화면의 4가지 상태"
      description="데이터를 보여 주는 화면은 정상, 로딩, 빈 상태, 에러를 모두 그려야 개발로 넘어가요. 네 상태는 같은 자리, 같은 머리글을 쓰고 본문만 바뀌어요."
      toc={TOC}
    >
      <DocSection
        id="normal"
        title="정상"
        description="실제와 비슷한 양의 데이터를 넣어요. 빈 칸이나 한 줄짜리 표로는 배치를 판단할 수 없어요."
      >
        <ApiKeysSample>
          {/* 좁은 화면에서는 표가 최소 480으로 가로 스크롤해요. */}
          <Table className="min-w-120">
            <TableHeader>
              <TableRow>
                <TableHead className="w-40">이름</TableHead>
                <TableHead>상태</TableHead>
                <TableHead className="w-40" align="end">
                  요청 수
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {API_KEYS.map(({ name, status, requests }) => (
                <TableRow key={name}>
                  <TableCell>{name}</TableCell>
                  <TableCell>{status}</TableCell>
                  <TableCell align="end">{requests}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ApiKeysSample>
      </DocSection>
      <DocSection
        id="loading"
        title="로딩"
        description="정상 화면과 같은 배치에 자리만 표시해요(Skeleton). 로딩 영역 전체에 aria-busy를 둬요."
      >
        <ApiKeysSample>
          <div aria-busy="true">
            {Array.from({ length: SKELETON_ROW_COUNT }, (_, index) => (
              <div
                key={index}
                className="flex h-10 items-center gap-6 border-b border-default px-3"
              >
                <Skeleton shape="text" className="w-40" />
                <Skeleton shape="text" className="flex-1" />
                <Skeleton shape="text" className="w-20" />
              </div>
            ))}
          </div>
        </ApiKeysSample>
      </DocSection>
      <DocSection
        id="empty"
        title="빈 상태"
        description="무엇이 없는지와 다음에 할 행동 하나를 보여 줘요(EmptyState). 머리글의 버튼과 같은 동작이에요."
      >
        <ApiKeysSample>
          <EmptyState
            title="API 키가 없어요"
            description="키를 만들면 여기에서 사용량을 볼 수 있어요."
            action={<Button>API 키 만들기</Button>}
          />
        </ApiKeysSample>
      </DocSection>
      <DocSection
        id="error"
        title="에러"
        description="무엇이 실패했는지와 다시 시도할 방법을 써요(ErrorState). 사과하지 않고, 고치는 방법을 알려 줘요."
      >
        <ApiKeysSample>
          <ApiKeysErrorState />
        </ApiKeysSample>
      </DocSection>
      <DocSection
        id="pending"
        title="동작 중"
        description="저장처럼 사용자가 일으킨 동작이 진행 중일 때는 화면 전체가 아니라 그 버튼에 loading을 켜요."
      >
        <Stage>
          <div className="flex gap-2">
            <Button variant="secondary">취소</Button>
            <Button loading>저장 중</Button>
          </div>
        </Stage>
      </DocSection>
    </DocPage>
  );
}
