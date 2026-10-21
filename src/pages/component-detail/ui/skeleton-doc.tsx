import { Skeleton } from '@xonic0506/sonic-ui';

import { DocTemplate } from './doc-template';

export function SkeletonDoc() {
  return (
    <DocTemplate
      title="Skeleton"
      description="로딩 중에 정상 화면과 같은 배치로 자리만 표시해요."
      variants={[
        { caption: 'text', demo: <Skeleton shape="text" className="w-60" /> },
        { caption: 'rect', demo: <Skeleton shape="rect" className="w-60" /> },
        { caption: 'circle', demo: <Skeleton shape="circle" /> },
      ]}
      rules={[
        {
          title: '같은 배치',
          description: '정상 화면의 행 수와 열 배치를 그대로 따라요.',
        },
        {
          title: '화면 낭독기에는 숨겨요',
          description:
            'Skeleton은 aria-hidden, 로딩 영역 전체에 aria-busy를 둬요.',
        },
        {
          title: '깜빡임',
          description:
            'opacity 1 ↔ 0.5를 duration/loop로 반복하고, reduced-motion이면 멈춰요.',
        },
      ]}
      props={[
        {
          name: 'shape',
          values: 'text · rect · circle',
          defaultValue: 'text',
        },
        {
          name: 'className',
          values: '크기는 쓰는 곳에서 정해요',
          defaultValue: '—',
        },
      ]}
      code={`<div aria-busy>
  <Skeleton shape="circle" />
  <Skeleton shape="text" className="w-40" />
</div>`}
    />
  );
}
