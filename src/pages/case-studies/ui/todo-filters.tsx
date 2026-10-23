'use client';

import { Input, ToggleGroup, ToggleGroupItem } from '@xonic0506/sonic-ui';
import { type ChangeEvent, type ReactNode, useRef, useState } from 'react';

import {
  TODO_STATUSES,
  type TodoStatus,
} from '../model/todo-list-search-params';

const STATUS_LABELS: Record<TodoStatus, string> = {
  all: '전체',
  done: '완료',
  open: '진행 중',
};
const SEARCH_DELAY_MS = 300;

interface TodoFiltersProps {
  q: string;
  status: TodoStatus;
  userSelect: ReactNode;
  onSearch: (q: string) => void;
  onStatusChange: (status: TodoStatus) => void;
}

// 검색어는 입력을 멈추고 300ms 뒤에 URL로 보내요. 글자마다 요청하지 않아요.
function SearchInput({
  q,
  onSearch,
}: Pick<TodoFiltersProps, 'q' | 'onSearch'>) {
  const [draft, setDraft] = useState(q);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setDraft(value);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => onSearch(value), SEARCH_DELAY_MS);
  };

  return (
    <Input
      type="search"
      aria-label="제목 검색"
      placeholder="제목 검색"
      value={draft}
      onChange={handleInputChange}
    />
  );
}

// Figma Case / Todo Filters(126:101). 좁은 화면에서는 위아래로 쌓여요.
export function TodoFilters({
  q,
  status,
  userSelect,
  onSearch,
  onStatusChange,
}: TodoFiltersProps) {
  const handleStatusChange = (value: string) => {
    const next = TODO_STATUSES.find((candidate) => candidate === value);
    if (next) onStatusChange(next);
  };

  return (
    <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
      <div className="w-full sm:flex-1">
        <SearchInput q={q} onSearch={onSearch} />
      </div>
      <div className="w-full sm:w-50">{userSelect}</div>
      <ToggleGroup
        aria-label="상태"
        value={status}
        onValueChange={handleStatusChange}
      >
        {TODO_STATUSES.map((value) => (
          <ToggleGroupItem key={value} value={value}>
            {STATUS_LABELS[value]}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
