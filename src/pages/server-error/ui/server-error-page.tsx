'use client';

import { Button, ErrorPage } from '@xonic0506/sonic-ui';
import { RefreshCw } from 'lucide-react';

interface ServerErrorPageProps {
  /** Next가 넘겨줘요. 에러가 난 구간을 다시 불러와 다시 그려요. */
  retry: () => void;
}

// Figma Errors · 500(69:519). 에러 내용은 Next가 서버 로그에 남기고, 화면에는 상태별 기본 문구만 보여요.
export function ServerErrorPage({ retry }: ServerErrorPageProps) {
  return (
    <main className="flex flex-1 items-center justify-center">
      <ErrorPage
        status={500}
        action={
          <Button onClick={() => retry()}>
            <RefreshCw />
            다시 시도
          </Button>
        }
      />
    </main>
  );
}
