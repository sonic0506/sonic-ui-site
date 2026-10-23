import { env } from '@/shared/config';

// 서버(prefetch)와 브라우저가 같은 절대 주소를 써요. 외부 API라 같은 출처 /api를 거치지 않아요.
export const API_BASE_URL = env.NEXT_PUBLIC_API_BASE_URL;

export class HttpError extends Error {
  readonly status: number;
  readonly path: string;

  constructor(status: number, path: string) {
    super(`${status} ${path}`);
    this.status = status;
    this.path = path;
  }
}

async function request(path: string, init?: RequestInit) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...init?.headers },
  });
  if (!response.ok) throw new HttpError(response.status, path);
  return response;
}

export async function http<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await request(path, init);
  if (response.status === 204) return undefined as T; // 본문 없는 응답(DELETE 등): http<void>(…)
  return (await response.json()) as T;
}

// 본문과 함께 헤더가 필요할 때 써요. 예: 페이지 목록의 전체 개수(X-Total-Count).
export async function httpWithHeaders<T>(
  path: string,
  init?: RequestInit,
): Promise<{ data: T; headers: Headers }> {
  const response = await request(path, init);
  return { data: (await response.json()) as T, headers: response.headers };
}
