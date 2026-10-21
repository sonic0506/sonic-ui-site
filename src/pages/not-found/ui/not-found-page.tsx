import { buttonVariants, ErrorPage } from '@xonic0506/sonic-ui';
import Link from 'next/link';

// Next 기본 404는 레이어 밖 <style>body{background:#fff}</style>를 넣고, cacheComponents의 Activity가
// 지나간 페이지를 숨긴 채 남겨서 그 스타일이 다른 페이지까지 새어요. 그래서 404를 직접 그려요.
export function NotFoundPage() {
  return (
    <main className="flex flex-1 items-center justify-center">
      <ErrorPage
        status={404}
        action={
          <Link href="/" className={buttonVariants()}>
            홈으로 가기
          </Link>
        }
      />
    </main>
  );
}
