import { Button, ErrorPage } from '@xonic0506/sonic-ui';
import { RefreshCw } from 'lucide-react';

import { DocTemplate } from './doc-template';

const PAGES = [
  { status: 404, action: <Button>홈으로 가기</Button> },
  { status: 403, action: <Button>홈으로 가기</Button> },
  {
    status: 500,
    action: (
      <Button>
        <RefreshCw />
        다시 시도
      </Button>
    ),
  },
] as const;

export function ErrorPageDoc() {
  return (
    <DocTemplate
      title="ErrorPage"
      description="404·403·500처럼 페이지 자체를 보여 줄 수 없을 때 화면 전체를 쓰는 에러예요."
      variants={PAGES.map(({ status, action }) => ({
        caption: String(status),
        // ErrorPage 제목은 h1이라, 문서 안의 예시는 화면 낭독기와 포커스에서 빼요.
        demo: (
          <div inert aria-hidden="true" className="w-160 max-w-full">
            <ErrorPage status={status} action={action} />
          </div>
        ),
      }))}
      rules={[
        {
          title: '상태별 권장 동작',
          description:
            '404·403은 "홈으로 가기", 500은 refresh-cw + "다시 시도"(페이지 다시 불러오기)예요.',
        },
        {
          title: '제목은 페이지의 h1',
          description:
            '오류 코드는 문의할 때 쓰도록 mono-caption으로 작게 보여 줘요.',
        },
      ]}
      props={[
        {
          name: 'status',
          values: '404 · 403 · 500 (필수)',
          defaultValue: '—',
        },
        {
          name: 'title · description',
          values: '바꿀 문구',
          defaultValue: '상태별 문구',
        },
        { name: 'action', values: 'primary Button 하나', defaultValue: '—' },
      ]}
      code={`// app/not-found.tsx
<ErrorPage status={404} action={<Button render={<NextLink href="/" />}>홈으로 가기</Button>} />
// app/error.tsx
<ErrorPage status={500} action={<Button onClick={reset}><RefreshCw />다시 시도</Button>} />`}
    />
  );
}
