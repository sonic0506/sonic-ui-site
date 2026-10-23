'use client';

import { Button, DataGrid, EmptyState, ErrorState } from '@xonic0506/sonic-ui';

import type { TodoRow } from '../model/todo-row';
import {
  DEFAULT_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
  TODO_COLUMNS,
} from './todo-columns';

const NO_ROWS: TodoRow[] = [];
const getRowId = (row: TodoRow) => String(row.id);
// 로딩·에러 표는 누를 것이 없어서 페이지 콜백이 하는 일이 없어요.
const ignore = () => {};

export function TodoEmptyState({
  onResetFilters,
}: {
  onResetFilters: () => void;
}) {
  return (
    <EmptyState
      title="조건에 맞는 할 일이 없어요"
      description="검색어를 지우거나 다른 사용자를 골라 보세요."
      action={<Button onClick={onResetFilters}>필터 초기화</Button>}
    />
  );
}

// 처음 불러올 때 같은 배치에 자리만 보여 줘요(Suspense fallback).
export function TodoGridSkeleton({ rowCount = 0 }: { rowCount?: number }) {
  return (
    <DataGrid
      aria-label="할 일"
      rows={NO_ROWS}
      getRowId={getRowId}
      columns={TODO_COLUMNS}
      loading
      pagination={{
        page: 1,
        onPageChange: ignore,
        pageSize: DEFAULT_PAGE_SIZE,
        onPageSizeChange: ignore,
        pageSizeOptions: PAGE_SIZE_OPTIONS,
        rowCount,
      }}
    />
  );
}

export function TodoGridEmpty({
  onResetFilters,
}: {
  onResetFilters: () => void;
}) {
  return (
    <DataGrid
      aria-label="할 일"
      rows={NO_ROWS}
      getRowId={getRowId}
      columns={TODO_COLUMNS}
      emptyState={<TodoEmptyState onResetFilters={onResetFilters} />}
    />
  );
}

// 머리글은 그대로 두고 본문 자리에 ErrorState를 보여 줘요(ErrorBoundary fallback).
export function TodoGridError({ onRetry }: { onRetry: () => void }) {
  return (
    <DataGrid
      aria-label="할 일"
      rows={NO_ROWS}
      getRowId={getRowId}
      columns={TODO_COLUMNS}
      errorState={
        <ErrorState
          title="할 일을 불러오지 못했어요"
          description="네트워크 연결을 확인하고 다시 시도해 주세요."
          onRetry={onRetry}
        />
      }
    />
  );
}
