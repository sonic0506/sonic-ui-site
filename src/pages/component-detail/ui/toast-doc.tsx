import { ToastPreview } from '@/shared/ui';

import { DocTemplate } from './doc-template';

const TONES = ['neutral', 'success', 'warning', 'danger'] as const;

export function ToastDoc() {
  return (
    <DocTemplate
      title="Toast"
      description="사용자 동작의 결과를 잠깐 알려 줘요. 화면 오른쪽 아래에 쌓여요."
      variants={TONES.map((tone) => ({
        caption: tone,
        demo: (
          <ToastPreview
            tone={tone}
            title="API 키를 만들었어요"
            description="키는 지금 한 번만 보여 줘요."
          />
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
