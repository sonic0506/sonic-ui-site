import {
  createLoader,
  createParser,
  type inferParserType,
  parseAsInteger,
  parseAsNumberLiteral,
  parseAsString,
  parseAsStringLiteral,
} from 'nuqs/server';

import { TODO_SORT_FIELDS, type TodoSortField } from '@/entities/todo';

export const TODO_STATUSES = ['all', 'done', 'open'] as const;
export type TodoStatus = (typeof TODO_STATUSES)[number];

export const TODO_PAGE_SIZES = [10, 20, 50] as const;

// URL에는 sort=title.desc처럼 한 값으로 둬요.
const parseAsTodoSort = createParser<{ field: TodoSortField; desc: boolean }>({
  parse: (value) => {
    const [field, order] = value.split('.');
    const match = TODO_SORT_FIELDS.find((sortField) => sortField === field);
    if (!match || (order !== 'asc' && order !== 'desc')) return null;
    return { field: match, desc: order === 'desc' };
  },
  serialize: ({ field, desc }) => `${field}.${desc ? 'desc' : 'asc'}`,
  eq: (a, b) => a.field === b.field && a.desc === b.desc,
});

// 서버(prefetch)와 브라우저(useQueryStates)가 같은 parser를 써서 같은 값을 읽어요.
export const todoListSearchParams = {
  q: parseAsString.withDefault(''),
  userId: parseAsInteger,
  status: parseAsStringLiteral(TODO_STATUSES).withDefault('all'),
  sort: parseAsTodoSort,
  page: parseAsInteger.withDefault(1),
  size: parseAsNumberLiteral(TODO_PAGE_SIZES).withDefault(10),
};

export type TodoListSearchParams = inferParserType<typeof todoListSearchParams>;

export const loadTodoListSearchParams = createLoader(todoListSearchParams);
