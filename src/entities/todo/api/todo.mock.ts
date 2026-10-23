import { http, HttpResponse } from 'msw';

import { API_BASE_URL } from '@/shared/api';

import type { Todo } from '../model/todo.schema';

const TITLES = [
  'delectus aut autem',
  'quis ut nam facilis et officia qui',
  'fugiat veniam minus',
  'et porro tempora',
  'laboriosam mollitia et enim quasi adipisci quia provident illum',
  'qui ullam ratione quibusdam voluptatem quia omnis',
  'illo expedita consequatur quia in',
  'quo adipisci enim quam ut ab',
  'molestiae perspiciatis ipsa',
  'illo est ratione doloremque quia maiores aut',
];

// 사용자 3명 × 10개. 1번 사용자 10개는 JSONPlaceholder 앞 10개와 같아요(Figma 화면과 같음).
export const TODO_FIXTURES: Todo[] = [1, 2, 3].flatMap((userId) =>
  TITLES.map((title, i) => ({
    userId,
    id: (userId - 1) * TITLES.length + i + 1,
    title: userId === 1 ? title : `${title} ${String(userId)}`,
    completed: i === 3 || i === 7 || i === 9 || (userId === 2 && i === 0),
  })),
);

// json-server처럼 userId·completed·q로 고르고, _sort·_order로 정렬하고, _page·_limit로 나눠요.
function queryTodos(url: URL) {
  const params = url.searchParams;
  const userId = params.get('userId');
  const completed = params.get('completed');
  const q = params.get('q')?.toLowerCase() ?? '';
  const sort = params.get('_sort');
  const isDesc = params.get('_order') === 'desc';
  const page = Number(params.get('_page') ?? 1);
  const limit = Number(params.get('_limit') ?? 10);

  const matched = TODO_FIXTURES.filter(
    (todo) =>
      (userId === null || todo.userId === Number(userId)) &&
      (completed === null || String(todo.completed) === completed) &&
      todo.title.toLowerCase().includes(q),
  );
  if (sort === 'id' || sort === 'title') {
    matched.sort((a, b) => {
      const order =
        sort === 'id' ? a.id - b.id : a.title.localeCompare(b.title);
      return isDesc ? -order : order;
    });
  }
  return {
    todos: matched.slice((page - 1) * limit, page * limit),
    total: matched.length,
  };
}

export const todoHandlers = [
  http.get(`${API_BASE_URL}/todos`, ({ request }) => {
    const { todos, total } = queryTodos(new URL(request.url));
    return HttpResponse.json(todos, {
      headers: { 'X-Total-Count': String(total) },
    });
  }),
];
