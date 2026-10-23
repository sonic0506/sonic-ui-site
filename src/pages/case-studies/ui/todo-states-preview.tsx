'use client';

import type { ReactNode } from 'react';

import {
  TodoGridEmpty,
  TodoGridError,
  TodoGridSkeleton,
} from '@/widgets/todo-grid';

import { TodoFilters } from './todo-filters';
import { UserSelectPlaceholder } from './user-select';

// 미리보기라 누를 수 없어요(inert). 콜백은 타입을 채우는 용도예요.
const ignore = () => {};

function StateStep({
  caption,
  children,
}: {
  caption: string;
  children: ReactNode;
}) {
  return (
    <div className="flex w-full flex-col items-center gap-2">
      <span className="text-caption text-muted">{caption}</span>
      <div className="flex w-full flex-col gap-4" inert>
        <TodoFilters
          q=""
          status="all"
          userSelect={<UserSelectPlaceholder />}
          onSearch={ignore}
          onStatusChange={ignore}
        />
        {children}
      </div>
    </div>
  );
}

// Figma 4가지 상태(정상은 위 화면). 필터 줄은 그대로 두고 표 자리만 바꿔요.
export function TodoStatesPreview() {
  return (
    <div className="flex flex-col gap-6 rounded-lg border border-default bg-surface px-6 py-10">
      <StateStep caption="로딩 · 처음 불러올 때 같은 배치에 자리만 표시">
        <TodoGridSkeleton rowCount={200} />
      </StateStep>
      <StateStep caption="빈 상태 · 조건에 맞는 할 일이 없을 때">
        <TodoGridEmpty onResetFilters={ignore} />
      </StateStep>
      <StateStep caption="에러 · 불러오지 못했을 때">
        <TodoGridError onRetry={ignore} />
      </StateStep>
    </div>
  );
}
