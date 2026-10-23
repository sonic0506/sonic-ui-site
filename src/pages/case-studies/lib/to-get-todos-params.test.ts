import { describe, expect, it } from 'vitest';

import { toGetTodosParams } from './to-get-todos-params';

const DEFAULTS = {
  q: '',
  userId: null,
  status: 'all',
  sort: null,
  page: 1,
  size: 10,
} as const;

describe('toGetTodosParams', () => {
  it('상태가 전체면 완료 조건을 빼요', () => {
    expect(toGetTodosParams(DEFAULTS).completed).toBeNull();
  });

  it('완료와 진행 중을 completed 값으로 바꿔요', () => {
    expect(toGetTodosParams({ ...DEFAULTS, status: 'done' }).completed).toBe(
      true,
    );
    expect(toGetTodosParams({ ...DEFAULTS, status: 'open' }).completed).toBe(
      false,
    );
  });

  it('1보다 작은 페이지는 1페이지로 불러요', () => {
    expect(toGetTodosParams({ ...DEFAULTS, page: 0 }).page).toBe(1);
    expect(toGetTodosParams({ ...DEFAULTS, page: -3 }).page).toBe(1);
  });

  it('검색어 앞뒤 공백은 지워요', () => {
    expect(toGetTodosParams({ ...DEFAULTS, q: '  quis ' }).q).toBe('quis');
  });
});
