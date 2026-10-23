import { useQueryStates } from 'nuqs';

import { todoListSearchParams } from './todo-list-search-params';

export function useTodoListSearchParams() {
  return useQueryStates(todoListSearchParams);
}
