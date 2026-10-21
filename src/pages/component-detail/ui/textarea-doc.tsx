import { Textarea } from '@xonic0506/sonic-ui';

import { DocTemplate } from './doc-template';

export function TextareaDoc() {
  return (
    <DocTemplate
      title="Textarea"
      description="여러 줄 텍스트를 입력받아요. Input과 같은 테두리, hover, focus, invalid 규칙이에요."
      variants={[
        {
          caption: 'default',
          demo: (
            <Textarea
              placeholder="내용을 입력하세요"
              aria-label="default"
              className="w-60"
            />
          ),
        },
        {
          caption: 'disabled',
          demo: (
            <Textarea
              placeholder="내용을 입력하세요"
              aria-label="disabled"
              disabled
              className="w-60"
            />
          ),
        },
        {
          caption: 'invalid',
          demo: (
            <Textarea
              placeholder="내용을 입력하세요"
              aria-label="invalid"
              invalid
              className="w-60"
            />
          ),
        },
        {
          caption: 'invalid · disabled',
          demo: (
            <Textarea
              placeholder="내용을 입력하세요"
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
          title: '세로로만 크기 조절',
          description: '최소 높이 80(약 3줄), padding space/3·space/2예요.',
        },
        {
          title: 'Field 안에서 써요',
          description: '라벨과 에러는 Field가 붙여요.',
        },
      ]}
      props={[
        { name: 'rows', values: '처음 보이는 줄 수', defaultValue: '3' },
        { name: 'invalid', values: 'boolean', defaultValue: 'false' },
        { name: 'disabled', values: 'boolean', defaultValue: 'false' },
      ]}
      code={`<Field label="메모">
  <Textarea rows={3} />
</Field>`}
    />
  );
}
