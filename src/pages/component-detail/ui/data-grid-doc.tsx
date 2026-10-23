'use client';

import {
  DataGrid,
  type DataGridColumn,
  EmptyState,
  ErrorState,
} from '@xonic0506/sonic-ui';
import { Inbox, Pencil, Trash2, TriangleAlert } from 'lucide-react';
import { useState } from 'react';

import { DocTemplate } from './doc-template';

interface ApiKeyRow {
  id: string;
  name: string;
  status: 'active' | 'expiring' | 'revoked';
  requests: number;
  createdAt: string;
  enabled: boolean;
}

// DataGrid에는 원본 값을 넣어요(숫자는 number, 날짜는 ISO 문자열).
const API_KEYS: ApiKeyRow[] = [
  {
    id: 'production',
    name: 'production',
    status: 'active',
    requests: 12480,
    createdAt: '2026-03-02',
    enabled: true,
  },
  {
    id: 'github-actions',
    name: 'github-actions',
    status: 'active',
    requests: 3215,
    createdAt: '2026-05-18',
    enabled: true,
  },
  {
    id: 'staging',
    name: 'staging',
    status: 'expiring',
    requests: 842,
    createdAt: '2026-07-09',
    enabled: true,
  },
  {
    id: 'local-dev',
    name: 'local-dev',
    status: 'revoked',
    requests: 0,
    createdAt: '2026-09-21',
    enabled: false,
  },
];

// 페이지 예시용으로 같은 모양의 행을 늘려요.
const MANY_KEYS: ApiKeyRow[] = Array.from({ length: 23 }, (_, i) => ({
  id: `key-${String(i + 1)}`,
  name: `service-${String(i + 1).padStart(2, '0')}`,
  status: i % 5 === 4 ? 'expiring' : 'active',
  requests: (i * 7919) % 20000,
  createdAt: `2026-0${String((i % 9) + 1)}-1${String(i % 10)}`,
  enabled: i % 4 !== 3,
}));

const STATUS_COLUMN: DataGridColumn<ApiKeyRow> = {
  field: 'status',
  header: '상태',
  type: 'badge',
  tones: { active: 'success', expiring: 'warning', revoked: 'danger' },
  labels: { active: '활성', expiring: '만료 예정', revoked: '폐기됨' },
};

const SIMPLE_COLUMNS: DataGridColumn<ApiKeyRow>[] = [
  { field: 'name', header: '이름', type: 'text', sortable: true },
  STATUS_COLUMN,
  { field: 'requests', header: '요청 수', type: 'number', sortable: true },
  { field: 'createdAt', header: '만든 날', type: 'date', sortable: true },
];

const GRID_CLASS = 'w-160 max-w-full';

// 예시라서 메뉴 동작과 다시 시도는 아무 일도 하지 않아요.
function ignore() {}

function FullGridDemo() {
  const [rows, setRows] = useState(API_KEYS);
  const [selection, setSelection] = useState(['production']);

  function handleEnabledChange(row: ApiKeyRow, isEnabled: boolean) {
    setRows((prev) =>
      prev.map((r) => (r.id === row.id ? { ...r, enabled: isEnabled } : r)),
    );
  }

  // 페이지를 나누지 않아서 ids는 모든 행의 새 순서예요.
  function handleRowOrderChange(ids: string[]) {
    setRows((prev) => ids.flatMap((id) => prev.filter((r) => r.id === id)));
  }

  return (
    <DataGrid
      aria-label="API 키"
      className={GRID_CLASS}
      rows={rows}
      getRowId={(row) => row.id}
      columns={[
        {
          field: 'name',
          header: '이름',
          type: 'text',
          pinned: 'left',
          width: 160,
          sortable: true,
        },
        STATUS_COLUMN,
        {
          field: 'requests',
          header: '요청 수',
          type: 'number',
          sortable: true,
        },
        { field: 'createdAt', header: '만든 날', type: 'date' },
        {
          field: 'enabled',
          header: '사용',
          type: 'switch',
          onChange: handleEnabledChange,
        },
        {
          id: 'actions',
          type: 'actions',
          pinned: 'right',
          width: 56,
          actions: [
            { label: '이름 바꾸기', icon: Pencil, onClick: ignore },
            { label: '삭제', icon: Trash2, tone: 'danger', onClick: ignore },
          ],
        },
      ]}
      selection={selection}
      onSelectionChange={setSelection}
      onRowOrderChange={handleRowOrderChange}
    />
  );
}

export function DataGridDoc() {
  return (
    <DocTemplate
      title="DataGrid"
      description="정렬, 행 선택, 좌/우 고정, 컬럼·행 이동이 필요한 목록에 써요. 모양은 Table이 그리고, 상태는 DataGrid가 관리해요."
      variantsDescription="Figma Data Grid Cell의 type이 columns[].type과 같아요. select·handle 열은 onSelectionChange·onRowOrderChange로 생겨요. 머리글을 눌러 정렬하고, 핸들을 끌어서 행을 옮겨 보세요."
      variants={[
        {
          caption: 'select · pinned · switch · actions · handle',
          demo: <FullGridDemo />,
        },
        {
          caption: 'pagination',
          demo: (
            <DataGrid
              aria-label="서비스 키"
              className={GRID_CLASS}
              rows={MANY_KEYS}
              getRowId={(row) => row.id}
              columns={SIMPLE_COLUMNS}
              pagination={{ defaultPageSize: 5, pageSizeOptions: [5, 10, 20] }}
            />
          ),
        },
        {
          caption: 'refreshing',
          demo: (
            <DataGrid
              aria-label="API 키"
              className={GRID_CLASS}
              rows={API_KEYS}
              getRowId={(row) => row.id}
              columns={SIMPLE_COLUMNS}
              refreshing
            />
          ),
        },
        {
          caption: 'loading',
          demo: (
            <DataGrid
              aria-label="API 키"
              className={GRID_CLASS}
              rows={[]}
              getRowId={(row) => row.id}
              columns={SIMPLE_COLUMNS}
              loading
            />
          ),
        },
        {
          caption: 'empty',
          demo: (
            <DataGrid
              aria-label="API 키"
              className={GRID_CLASS}
              rows={[]}
              getRowId={(row) => row.id}
              columns={SIMPLE_COLUMNS}
              emptyState={
                <EmptyState
                  icon={<Inbox />}
                  title="API 키가 없어요"
                  description="키를 만들면 여기에서 사용량을 볼 수 있어요."
                />
              }
            />
          ),
        },
        {
          caption: 'error',
          demo: (
            <DataGrid
              aria-label="API 키"
              className={GRID_CLASS}
              rows={[]}
              getRowId={(row) => row.id}
              columns={SIMPLE_COLUMNS}
              errorState={
                <ErrorState
                  icon={<TriangleAlert />}
                  title="API 키를 불러오지 못했어요"
                  description="네트워크 연결을 확인하고 다시 시도해 주세요."
                  onRetry={ignore}
                />
              }
            />
          ),
        },
      ]}
      rules={[
        {
          title: '보여 주기만 하는 표는 Table',
          description:
            '정렬, 선택, 고정, 이동 중 하나라도 필요할 때 DataGrid를 써요.',
        },
        {
          title: 'rows에는 원본 값',
          description:
            '숫자는 number, 날짜는 ISO 문자열이에요. 쉼표와 날짜 형식은 type이 맞춰요.',
        },
        {
          title: '선택은 bg/selected, hover는 bg/subtle',
          description:
            '고정 열 경계는 1px border/default이고 그림자는 쓰지 않아요.',
        },
        {
          title: '고정 열에는 width',
          description: '다음 고정 열 위치를 계산할 때 써요.',
        },
        {
          title: '위험한 actions는 AlertDialog로 확인',
          description: 'onClick에서 바로 지우지 않고 확인 창을 열어요.',
        },
        {
          title: '서버에서 나누면 rowCount',
          description:
            '현재 페이지 rows와 전체 개수를 넘기고, 정렬도 서버가 해요(onSortingChange).',
        },
        {
          title: '클라이언트 컴포넌트 안에서 정의',
          description:
            'columns에 함수가 있어서 서버 컴포넌트에서 넘길 수 없어요.',
        },
      ]}
      props={[
        {
          name: 'rows · getRowId',
          values: '행 데이터(원본 값)와 행 id',
          defaultValue: '(필수)',
        },
        {
          name: 'columns',
          values:
            'type: text · number · date · datetime · badge(tones) · switch(onChange) · actions(actions). 공통 header · width · minWidth · pinned · sortable',
          defaultValue: '(필수)',
        },
        { name: 'aria-label', values: '표 이름', defaultValue: '(필수)' },
        {
          name: 'sorting · onSortingChange',
          values: '{ id, desc } 또는 null. 한 번에 한 열',
          defaultValue: 'null',
        },
        {
          name: 'selection · onSelectionChange',
          values: '선택된 행 id 배열. 넘기면 체크박스 열이 생겨요',
          defaultValue: '—',
        },
        {
          name: 'columnOrder · onColumnOrderChange',
          values: '열 id 순서. 넘기면 머리글을 끌어서 옮겨요',
          defaultValue: '—',
        },
        {
          name: 'onRowOrderChange',
          values: '(ids) => void. 넘기면 핸들 열이 생겨요',
          defaultValue: '—',
        },
        {
          name: 'loading',
          values: 'Skeleton 행 5개 + aria-busy',
          defaultValue: 'false',
        },
        {
          name: 'refreshing',
          values:
            '이전 행은 두고 본문 위에 bg/scrim-subtle 막 + 스피너. 누르자마자 보여요',
          defaultValue: 'false',
        },
        {
          name: 'emptyState · errorState',
          values: '본문 자리에 보여 줄 EmptyState · ErrorState',
          defaultValue: '—',
        },
        {
          name: 'pagination',
          values:
            '넘기면 아래에 Pagination. { page, pageSize, pageSizeOptions, showFirstLast, rowCount, … }',
          defaultValue: '—',
        },
      ]}
      code={`<DataGrid
  aria-label="API 키"
  rows={keys}
  getRowId={row => row.id}
  columns={[
    { field: 'name', header: '이름', type: 'text', pinned: 'left', width: 160, sortable: true },
    { field: 'requests', header: '요청 수', type: 'number', sortable: true },
    { field: 'status', header: '상태', type: 'badge', tones: { active: 'success', revoked: 'danger' }, labels: { active: '활성', revoked: '폐기됨' } },
    { field: 'enabled', header: '사용', type: 'switch', onChange: (row, on) => toggle(row.id, on) },
    { id: 'actions', type: 'actions', pinned: 'right', actions: [
      { label: '이름 바꾸기', icon: Pencil, onClick: rename },
      { label: '삭제', icon: Trash2, tone: 'danger', onClick: confirmDelete },
    ] },
  ]}
  selection={selected} onSelectionChange={setSelected}
  onRowOrderChange={ids => saveOrder(ids)}
  pagination={{ defaultPageSize: 20 }}
  emptyState={<EmptyState title="API 키가 없어요" action={<Button>API 키 만들기</Button>} />}
/>`}
    />
  );
}
