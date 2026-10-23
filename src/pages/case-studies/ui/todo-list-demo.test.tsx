import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { describe, expect, it } from 'vitest';

import { API_BASE_URL } from '@/shared/api';
import { renderWithQuery, server } from '@/shared/testing';

import { TodoListDemo } from './todo-list-demo';

describe('TodoListDemo', () => {
  it('할 일과 사용자 이름을 보여 줘요', async () => {
    renderWithQuery(<TodoListDemo />);
    expect(await screen.findByText('delectus aut autem')).toBeInTheDocument();
    expect(screen.getAllByText('Leanne Graham').length).toBeGreaterThan(0);
  });

  it('조건에 맞는 할 일이 없으면 빈 상태를 보여 줘요', async () => {
    server.use(
      http.get(`${API_BASE_URL}/todos`, () =>
        HttpResponse.json([], { headers: { 'X-Total-Count': '0' } }),
      ),
    );
    renderWithQuery(<TodoListDemo />);
    expect(
      await screen.findByText('조건에 맞는 할 일이 없어요'),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: '필터 초기화' }),
    ).toBeInTheDocument();
  });

  it('불러오지 못하면 에러와 다시 시도 버튼을 보여 줘요', async () => {
    server.use(
      http.get(`${API_BASE_URL}/todos`, () =>
        HttpResponse.json(null, { status: 500 }),
      ),
    );
    renderWithQuery(<TodoListDemo />);
    expect(
      await screen.findByText('할 일을 불러오지 못했어요'),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /다시 시도/ }),
    ).toBeInTheDocument();
  });

  it('URL 시작 값의 사용자와 상태로 걸러서 불러와요', async () => {
    renderWithQuery(<TodoListDemo />, {
      searchParams: '?userId=2&status=done',
    });
    expect(await screen.findByText('delectus aut autem 2')).toBeInTheDocument();
    expect(screen.queryByText('delectus aut autem')).not.toBeInTheDocument();
    expect(
      screen.queryByText('quis ut nam facilis et officia qui 2'),
    ).not.toBeInTheDocument();
  });

  it('완료를 누르면 완료된 할 일만 보여 줘요', async () => {
    const user = userEvent.setup();
    renderWithQuery(<TodoListDemo />);
    expect(await screen.findByText('delectus aut autem')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: '완료' }));

    await waitForElementToBeRemoved(() =>
      screen.queryByText('delectus aut autem'),
    );
    expect(screen.getByText('et porro tempora')).toBeInTheDocument();
  });
});
