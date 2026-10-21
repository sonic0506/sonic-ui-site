import { Input } from '@xonic0506/sonic-ui';

import { DocTemplate } from './doc-template';

export function InputDoc() {
  return (
    <DocTemplate
      title="Input"
      description="한 줄 텍스트를 입력받아요. 라벨, 설명, 에러는 Field로 감싸서 붙여요."
      variants={[
        {
          caption: 'default',
          demo: (
            <Input
              placeholder="Placeholder"
              aria-label="default"
              className="w-60"
            />
          ),
        },
        {
          caption: 'disabled',
          demo: (
            <Input
              placeholder="Placeholder"
              aria-label="disabled"
              disabled
              className="w-60"
            />
          ),
        },
        {
          caption: 'invalid',
          demo: (
            <Input
              placeholder="Placeholder"
              aria-label="invalid"
              invalid
              className="w-60"
            />
          ),
        },
        {
          caption: 'invalid · disabled',
          demo: (
            <Input
              placeholder="Placeholder"
              aria-label="invalid · disabled"
              invalid
              disabled
              className="w-60"
            />
          ),
        },
      ]}
      rules={[
        {
          title: '너비는 부모를 채워요',
          description:
            '높이 32(space/8), 좌우 space/3. 폭은 감싸는 레이아웃이 정해요.',
        },
        {
          title: 'invalid면 빨간 링',
          description:
            '에러 상태에서는 포커스 링도 border/danger예요. 파란 링과 섞이지 않게 해요.',
        },
      ]}
      props={[
        {
          name: 'invalid',
          values: 'boolean. Field 안에서는 자동으로 전달돼요',
          defaultValue: 'false',
        },
        { name: 'disabled', values: 'boolean', defaultValue: 'false' },
        {
          name: '그 외',
          values: '기본 <input> 속성 전부 (placeholder, type …)',
          defaultValue: '—',
        },
      ]}
      code={`<Field label="이메일" description="로그인할 때 써요.">
  <Input placeholder="you@example.com" />
</Field>`}
    />
  );
}
