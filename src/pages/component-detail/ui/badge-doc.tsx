import { Badge } from '@xonic0506/sonic-ui';

import { DocTemplate } from './doc-template';

const TONES = ['neutral', 'success', 'warning', 'danger'] as const;
const VARIANTS = ['subtle', 'solid'] as const;

export function BadgeDoc() {
  return (
    <DocTemplate
      title="Badge"
      description="상태를 짧은 낱말로 표시해요. 누를 수 없는 표시라 버튼처럼 쓰지 않아요."
      variants={TONES.flatMap((tone) =>
        VARIANTS.map((variant) => ({
          caption: `${tone} · ${variant}`,
          demo: (
            <Badge tone={tone} variant={variant}>
              활성
            </Badge>
          ),
        })),
      )}
      rules={[
        {
          title: '목록과 표에서는 subtle',
          description: 'solid는 꼭 눈에 띄어야 하는 한 곳에만 써요.',
        },
        {
          title: '크기',
          description: '높이 20, 좌우 space/2, label, radius/sm.',
        },
      ]}
      props={[
        {
          name: 'tone',
          values: 'neutral · success · warning · danger',
          defaultValue: 'neutral',
        },
        { name: 'variant', values: 'subtle · solid', defaultValue: 'subtle' },
      ]}
      code={`<Badge tone="success">활성</Badge>
<Badge tone="danger" variant="solid">만료됨</Badge>`}
    />
  );
}
