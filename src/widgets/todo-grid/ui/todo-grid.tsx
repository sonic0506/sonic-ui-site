'use client';

import { DataGrid, type DataGridSort } from '@xonic0506/sonic-ui';

import {
  type GetTodosParams,
  TODO_SORT_FIELDS,
  type TodoSortField,
  useTodosQuery,
} from '@/entities/todo';
import { useUsersQuery } from '@/entities/user';

import type { TodoRow } from '../model/todo-row';
import { PAGE_SIZE_OPTIONS, TODO_COLUMNS } from './todo-columns';
import { TodoEmptyState } from './todo-grid-states';

interface TodoGridProps {
  params: GetTodosParams;
  /** 새 조건을 불러오는 동안 이전 행 위에 막과 스피너를 올려요 */
  isRefreshing: boolean;
  onSortChange: (sort: GetTodosParams['sort']) => void;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
  onResetFilters: () => void;
}

const isTodoSortField = (id: string): id is TodoSortField =>
  TODO_SORT_FIELDS.some((field) => field === id);

// 정렬과 페이지는 서버가 해요(rowCount를 넘기면 DataGrid가 서버 모드로 동작해요).
export function TodoGrid({
  params,
  isRefreshing,
  onSortChange,
  onPageChange,
  onPageSizeChange,
  onResetFilters,
}: TodoGridProps) {
  const {
    data: { todos, total },
  } = useTodosQuery(params);
  const { data: users } = useUsersQuery();

  // todo와 user는 서로 다른 entity라 여기서 합쳐요.
  const userNames = new Map(users.map((user) => [user.id, user.name]));
  const rows: TodoRow[] = todos.map((todo) => ({
    id: todo.id,
    title: todo.title,
    userName: userNames.get(todo.userId) ?? `사용자 ${String(todo.userId)}`,
    status: todo.completed ? 'done' : 'open',
  }));

  const handleSortingChange = (sorting: DataGridSort | null) => {
    if (!sorting) return onSortChange(null);
    if (isTodoSortField(sorting.id))
      onSortChange({ field: sorting.id, desc: sorting.desc });
  };

  return (
    <DataGrid
      aria-label="할 일"
      rows={rows}
      getRowId={(row) => String(row.id)}
      columns={TODO_COLUMNS}
      sorting={
        params.sort ? { id: params.sort.field, desc: params.sort.desc } : null
      }
      onSortingChange={handleSortingChange}
      refreshing={isRefreshing}
      emptyState={<TodoEmptyState onResetFilters={onResetFilters} />}
      pagination={{
        page: params.page,
        onPageChange,
        pageSize: params.pageSize,
        onPageSizeChange,
        pageSizeOptions: PAGE_SIZE_OPTIONS,
        rowCount: total,
      }}
    />
  );
}
