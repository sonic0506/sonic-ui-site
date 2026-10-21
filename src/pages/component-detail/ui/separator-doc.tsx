import { Separator } from '@xonic0506/sonic-ui';

import { DocTemplate } from './doc-template';

export function SeparatorDoc() {
  return (
    <DocTemplate
      title="Separator"
      description="관련 없는 묶음 사이를 1px 선으로 나눠요."
      variants={[
        { caption: 'horizontal', demo: <Separator className="w-60" /> },
        {
          caption: 'vertical',
          demo: <Separator orientation="vertical" className="h-6" />,
        },
      ]}
      rules={[
        {
          title: '간격으로 먼저 구분해요',
          description:
            '카드 안 영역이나 목록 행은 선보다 간격으로 먼저 나눠요.',
        },
      ]}
      props={[
        {
          name: 'orientation',
          values: 'horizontal · vertical',
          defaultValue: 'horizontal',
        },
      ]}
      code={`<Separator />
<Separator orientation="vertical" />`}
    />
  );
}
