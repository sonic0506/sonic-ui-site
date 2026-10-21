import { Progress } from '@xonic0506/sonic-ui';

import { DocTemplate } from './doc-template';

const VALUES = [0, 25, 50, 75, 100] as const;

export function ProgressDoc() {
  return (
    <DocTemplate
      title="Progress"
      description="끝이 정해진 작업(업로드, 내보내기)의 진행률을 보여 줘요."
      variants={VALUES.map((value) => ({
        caption: String(value),
        demo: <Progress value={value} label="내보내는 중" className="w-60" />,
      }))}
      rules={[
        {
          title: '끝을 모르면 쓰지 않아요',
          description:
            '끝을 알 수 없는 기다림은 Button loading이나 Skeleton을 써요.',
        },
        {
          title: '막대',
          description:
            '트랙 높이 4 bg/subtle radius/full, 채움 bg/primary가 duration/normal로 늘어나요.',
        },
      ]}
      props={[
        { name: 'value', values: '현재 값 (필수)', defaultValue: '—' },
        { name: 'max', values: '최댓값', defaultValue: '100' },
        {
          name: 'label',
          values: '라벨 문구. 없으면 aria-label 필수 (타입으로 강제)',
          defaultValue: '—',
        },
      ]}
      code={`<Progress value={45} label="내보내는 중" />`}
    />
  );
}
