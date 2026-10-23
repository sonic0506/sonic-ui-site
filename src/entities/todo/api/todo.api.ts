import { httpWithHeaders } from '@/shared/api';

import { todoSchema } from '../model/todo.schema';
import type { GetTodosParams, TodoPage } from '../model/todo.type';

// JSONPlaceholder(json-server) 쿼리로 바꿔요: 페이지 _page·_limit, 정렬 _sort·_order, 검색 q.
export function toTodosSearch(params: GetTodosParams) {
  const search = new URLSearchParams({
    _page: String(params.page),
    _limit: String(params.pageSize),
  });
  if (params.q) search.set('q', params.q);
  if (params.userId !== null) search.set('userId', String(params.userId));
  if (params.completed !== null)
    search.set('completed', String(params.completed));
  if (params.sort) {
    search.set('_sort', params.sort.field);
    search.set('_order', params.sort.desc ? 'desc' : 'asc');
  }
  return search;
}

export async function getTodos(params: GetTodosParams): Promise<TodoPage> {
  const { data, headers } = await httpWithHeaders<unknown>(
    `/todos?${toTodosSearch(params).toString()}`,
  );
  const todos = todoSchema.array().parse(data);
  // 전체 개수는 본문이 아니라 X-Total-Count 헤더로 와요.
  const total = Number(headers.get('X-Total-Count') ?? todos.length);
  return { todos, total };
}
