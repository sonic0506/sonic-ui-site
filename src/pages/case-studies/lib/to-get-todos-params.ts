import type { GetTodosParams } from '@/entities/todo';

import type { TodoListSearchParams } from '../model/todo-list-search-params';

// URL 상태를 API 요청 값으로 바꿔요. 상태 "전체"는 조건 없음(null)이에요.
export function toGetTodosParams({
  q,
  userId,
  status,
  sort,
  page,
  size,
}: TodoListSearchParams): GetTodosParams {
  return {
    page: Math.max(1, page),
    pageSize: size,
    q: q.trim(),
    userId,
    completed: status === 'all' ? null : status === 'done',
    sort,
  };
}
