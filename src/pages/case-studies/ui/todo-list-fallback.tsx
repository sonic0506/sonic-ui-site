'use client';

import { TodoGridSkeleton } from '@/widgets/todo-grid';

import { TodoFilters } from './todo-filters';
import { UserSelectPlaceholder } from './user-select';

// 서버가 조건을 읽고 prefetch하는 동안 같은 배치에 자리만 보여 줘요.
const ignore = () => {};

export function TodoListFallback() {
  return (
    <div className="flex flex-col gap-4" inert>
      <TodoFilters
        q=""
        status="all"
        userSelect={<UserSelectPlaceholder />}
        onSearch={ignore}
        onStatusChange={ignore}
      />
      <TodoGridSkeleton />
    </div>
  );
}
