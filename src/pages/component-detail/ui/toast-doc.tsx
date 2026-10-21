import { Button } from '@xonic0506/sonic-ui';
import { CircleAlert, CircleCheck, Info, TriangleAlert, X } from 'lucide-react';

import { DocTemplate } from './doc-template';

const TONES = [
  { tone: 'neutral', icon: <Info className="text-muted" /> },
  { tone: 'success', icon: <CircleCheck className="text-success" /> },
  { tone: 'warning', icon: <TriangleAlert className="text-warning" /> },
  { tone: 'danger', icon: <CircleAlert className="text-danger" /> },
] as const;

export function ToastDoc() {
  return (
    <DocTemplate
      title="Toast"
      description="사용자 동작의 결과를 잠깐 알려 줘요. 화면 오른쪽 아래에 쌓여요."
      // Toast는 useToast().add로만 떠서, 보이는 모양을 같은 토큰으로 그려요.
      variants={TONES.map(({ tone, icon }) => ({
        caption: tone,
        demo: (
          <div
            inert
            className="flex w-90 max-w-full items-start gap-3 rounded-lg border border-default bg-surface p-3 text-default"
          >
            <span className="flex h-7 shrink-0 items-center *:size-4">
              {icon}
            </span>
            <div className="flex min-w-0 flex-1 flex-col gap-1 pt-1">
              <p className="text-body-strong">API 키를 만들었어요</p>
              <p className="text-caption text-muted">
                키는 지금 한 번만 보여 줘요.
              </p>
            </div>
            <Button variant="ghost" size="icon-sm" aria-label="알림 닫기">
              <X />
            </Button>
          </div>
        ),
      }))}
      rules={[
        {
          title: '앱 최상단에 ToastProvider 한 번',
          description:
            'Next.js는 layout.tsx. useToast는 클라이언트 컴포넌트에서만 써요.',
        },
        {
          title: '다른 컴포넌트와 구분',
          description:
            '되돌릴 수 없는 동작의 확인은 AlertDialog, 화면을 채우는 실패는 ErrorState예요.',
        },
        {
          title: '화면 낭독기',
          description:
            '보통은 차례가 오면 읽고, danger는 바로 읽어요. 마우스를 올리거나 포커스하면 시간이 멈춰요.',
        },
      ]}
      props={[
        { name: 'title', values: '결과 한 줄 (필수)', defaultValue: '—' },
        { name: 'description', values: '덧붙일 설명', defaultValue: '—' },
        {
          name: 'tone',
          values: 'neutral · success · warning · danger',
          defaultValue: 'neutral',
        },
        {
          name: 'timeout',
          values: '사라지기까지 ms, 0이면 직접 닫을 때까지',
          defaultValue: '5000',
        },
      ]}
      code={`const toast = useToast();
toast.add({ title: 'API 키를 만들었어요', description: '키는 지금 한 번만 보여 줘요.', tone: 'success' });`}
    />
  );
}
