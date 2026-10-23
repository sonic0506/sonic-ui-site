import { useSuspenseQuery } from '@tanstack/react-query';

import { todoQueries } from '../api/todo.queries';
import type { GetTodosParams } from '../model/todo.type';

export function useTodosQuery(params: GetTodosParams) {
  return useSuspenseQuery(todoQueries.list(params));
}
