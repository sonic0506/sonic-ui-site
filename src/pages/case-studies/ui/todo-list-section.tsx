import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { todoQueries } from '@/entities/todo';
import { userQueries } from '@/entities/user';
import { getQueryClient } from '@/shared/api';

import { toGetTodosParams } from '../lib/to-get-todos-params';
import { loadTodoListSearchParams } from '../model/todo-list-search-params';
import { TodoListDemo } from './todo-list-demo';

// 실패해도 화면은 그려요. 에러는 브라우저에서 다시 불러온 뒤 ErrorBoundary가 받아요.
const noop = () => undefined;

// 첫 화면은 서버가 URL 조건으로 미리 불러와 HTML과 함께 보내요.
export async function TodoListSection({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = toGetTodosParams(await loadTodoListSearchParams(searchParams));
  const queryClient = getQueryClient();
  await Promise.all([
    queryClient.query(todoQueries.list(params)).catch(noop),
    queryClient.query(userQueries.list()).catch(noop),
  ]);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TodoListDemo />
    </HydrationBoundary>
  );
}
