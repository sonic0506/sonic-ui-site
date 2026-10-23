import type { DataGridColumn } from '@xonic0506/sonic-ui';

import type { TodoRow } from '../model/todo-row';

// Figma Case / Todo Grid(126:355)의 열이에요. 제목은 남은 너비를 쓰고,
// 좁은 화면에서는 276보다 줄지 않아 표가 640부터 가로로 스크롤돼요(Figma 375).
export const TODO_COLUMNS: DataGridColumn<TodoRow>[] = [
  { field: 'id', header: 'ID', type: 'number', width: 64, sortable: true },
  {
    field: 'title',
    header: '제목',
    type: 'text',
    minWidth: 276,
    sortable: true,
  },
  { field: 'userName', header: '사용자', type: 'text', width: 180 },
  {
    field: 'status',
    header: '상태',
    type: 'badge',
    width: 120,
    tones: { done: 'success', open: 'neutral' },
    labels: { done: '완료', open: '진행 중' },
  },
];

export const DEFAULT_PAGE_SIZE = 10;
export const PAGE_SIZE_OPTIONS = [DEFAULT_PAGE_SIZE, 20, 50];
