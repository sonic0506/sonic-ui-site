import type { Todo } from './todo.schema';

export const TODO_SORT_FIELDS = ['id', 'title'] as const;
export type TodoSortField = (typeof TODO_SORT_FIELDS)[number];

// 조건이 없을 때도 null로 채워서 queryKey 모양이 늘 같아요.
export interface GetTodosParams {
  page: number;
  pageSize: number;
  q: string;
  userId: number | null;
  completed: boolean | null;
  sort: { field: TodoSortField; desc: boolean } | null;
}

export interface TodoPage {
  todos: Todo[];
  total: number;
}
