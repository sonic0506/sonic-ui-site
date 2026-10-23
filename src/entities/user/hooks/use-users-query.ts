import { useSuspenseQuery } from '@tanstack/react-query';

import { userQueries } from '../api/user.queries';

export function useUsersQuery() {
  return useSuspenseQuery(userQueries.list());
}
