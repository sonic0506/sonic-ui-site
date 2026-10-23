import { queryOptions } from '@tanstack/react-query';

import type { GetTodosParams } from '../model/todo.type';
import { getTodos } from './todo.api';

export const todoQueries = {
  all: () => ['todo'] as const,
  list: (params: GetTodosParams) =>
    queryOptions({
      queryKey: [...todoQueries.all(), 'list', params],
      queryFn: () => getTodos(params),
    }),
};
