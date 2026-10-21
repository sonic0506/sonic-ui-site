import { Avatar } from '@xonic0506/sonic-ui';

import { DocTemplate } from './doc-template';

const SIZES = ['sm', 'md', 'lg'] as const;

export function AvatarDoc() {
  return (
    <DocTemplate
      title="Avatar"
      description="사람이나 계정을 작은 원으로 보여 줘요. 이미지를 못 불러오면 이니셜을 보여 줘요."
      variants={SIZES.map((size) => ({
        caption: size,
        demo: <Avatar size={size} fallback="HP" />,
      }))}
      rules={[
        {
          title: '이니셜 규칙',
          description: '한글은 이름 첫 글자, 영문은 이름·성 첫 글자예요.',
        },
        {
          title: '바탕과 글자',
          description: 'bg/subtle 위에 text/muted, radius/full이에요.',
        },
      ]}
      props={[
        { name: 'size', values: 'sm 24 · md 32 · lg 40', defaultValue: 'md' },
        {
          name: 'src · alt',
          values: '이미지 주소와 대체 문구',
          defaultValue: '—',
        },
        { name: 'fallback', values: '이니셜 1~2글자', defaultValue: '—' },
      ]}
      code={`<Avatar size="md" src="/me.png" alt="박형규" fallback="HP" />`}
    />
  );
}
