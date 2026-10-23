import { queryOptions } from '@tanstack/react-query';

import { getUsers } from './user.api';

export const userQueries = {
  all: () => ['user'] as const,
  list: () =>
    queryOptions({
      queryKey: [...userQueries.all(), 'list'],
      queryFn: getUsers,
      // 사용자 목록은 거의 바뀌지 않아요.
      staleTime: Infinity,
    }),
};
