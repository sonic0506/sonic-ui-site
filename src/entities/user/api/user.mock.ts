import { http, HttpResponse } from 'msw';

import { API_BASE_URL } from '@/shared/api';

import type { User } from '../model/user.schema';

// JSONPlaceholder의 앞 3명이에요.
export const USER_FIXTURES: User[] = [
  { id: 1, name: 'Leanne Graham' },
  { id: 2, name: 'Ervin Howell' },
  { id: 3, name: 'Clementine Bauch' },
];

export const userHandlers = [
  http.get(`${API_BASE_URL}/users`, () => HttpResponse.json(USER_FIXTURES)),
];
