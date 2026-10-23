'use client';

import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense, useDeferredValue, useMemo, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import type { GetTodosParams } from '@/entities/todo';
import { TodoGrid, TodoGridError, TodoGridSkeleton } from '@/widgets/todo-grid';

import { toGetTodosParams } from '../lib/to-get-todos-params';
import {
  TODO_PAGE_SIZES,
  type TodoStatus,
} from '../model/todo-list-search-params';
import { useTodoListSearchParams } from '../model/use-todo-list-search-params';
import { TodoFilters } from './todo-filters';
import { UserSelect, UserSelectPlaceholder } from './user-select';

// 사례 화면이에요. 필터·정렬·페이지는 URL(nuqs)에 두고, 표는 그 값으로 서버에서 불러와요.
export function TodoListDemo() {
  const [searchParams, setSearchParams] = useTodoListSearchParams();
  // "필터 초기화"를 누르면 검색 입력란을 새로 그려 입력 중이던 글자도 지워요.
  const [resetCount, setResetCount] = useState(0);
  const params = useMemo(() => toGetTodosParams(searchParams), [searchParams]);
  // 새 조건을 불러오는 동안 이전 결과 위에 막과 스피너를 올려요(refreshing). Skeleton은 처음 불러올 때만 보여요.
  const deferredParams = useDeferredValue(params);

  const handleSearch = (q: string) =>
    void setSearchParams({ q: q || null, page: null });
  const handleUserChange = (userId: number | null) =>
    void setSearchParams({ userId, page: null });
  const handleStatusChange = (status: TodoStatus) =>
    void setSearchParams({ status, page: null });
  const handleSortChange = (sort: GetTodosParams['sort']) =>
    void setSearchParams({ sort, page: null });
  const handlePageChange = (page: number) => void setSearchParams({ page });
  const handlePageSizeChange = (pageSize: number) => {
    const size = TODO_PAGE_SIZES.find((option) => option === pageSize) ?? null;
    void setSearchParams({ size, page: null });
  };
  const handleResetFilters = () => {
    void setSearchParams({ q: null, userId: null, status: null, page: null });
    setResetCount((count) => count + 1);
  };

  return (
    <div className="flex flex-col gap-4">
      <TodoFilters
        key={resetCount}
        q={searchParams.q}
        status={searchParams.status}
        onSearch={handleSearch}
        onStatusChange={handleStatusChange}
        userSelect={
          <ErrorBoundary fallback={<UserSelectPlaceholder />}>
            <Suspense fallback={<UserSelectPlaceholder />}>
              <UserSelect
                userId={searchParams.userId}
                onUserChange={handleUserChange}
              />
            </Suspense>
          </ErrorBoundary>
        }
      />
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            onReset={reset}
            resetKeys={[deferredParams]}
            fallbackRender={({ resetErrorBoundary }) => (
              <TodoGridError onRetry={resetErrorBoundary} />
            )}
          >
            <Suspense fallback={<TodoGridSkeleton />}>
              <TodoGrid
                params={deferredParams}
                isRefreshing={params !== deferredParams}
                onSortChange={handleSortChange}
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
                onResetFilters={handleResetFilters}
              />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </div>
  );
}
