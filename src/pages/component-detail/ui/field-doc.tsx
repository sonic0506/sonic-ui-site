import { Field, Input } from '@xonic0506/sonic-ui';

import { DocTemplate } from './doc-template';

const ERROR = 'https://로 시작하는 주소를 입력하세요.';

export function FieldDoc() {
  return (
    <DocTemplate
      title="Field"
      description="입력 컨트롤에 라벨, 설명, 에러를 붙이고 서로 연결해요(aria-describedby)."
      variants={[
        {
          caption: 'default',
          demo: (
            <Field
              label="이메일"
              description="로그인할 때 써요."
              error={ERROR}
              className="w-80 max-w-full"
            >
              <Input placeholder="Placeholder" />
            </Field>
          ),
        },
        {
          caption: 'invalid',
          demo: (
            <Field
              label="이메일"
              description="로그인할 때 써요."
              error={ERROR}
              invalid
              className="w-80 max-w-full"
            >
              <Input placeholder="Placeholder" />
            </Field>
          ),
        },
        {
          caption: 'disabled',
          demo: (
            <Field
              label="이메일"
              description="로그인할 때 써요."
              error={ERROR}
              disabled
              className="w-80 max-w-full"
            >
              <Input placeholder="Placeholder" />
            </Field>
          ),
        },
      ]}
      rules={[
        {
          title: '에러는 설명을 대신해요',
          description:
            '아래 줄이 늘지 않아 레이아웃이 밀리지 않고, 화면 낭독기도 에러 하나만 읽어요. 그래서 에러 문구에 고치는 방법을 꼭 써요.',
        },
        {
          title: '안의 Input에 invalid를 따로 주지 않아요',
          description: 'Field가 넘겨 줘요. 라벨 색은 invalid여도 그대로예요.',
        },
        { title: '간격', description: '라벨 ↔ 입력 ↔ 설명·에러 space/2.' },
      ]}
      props={[
        { name: 'label', values: '라벨 문구 (필수)', defaultValue: '—' },
        { name: 'description', values: '설명 문구', defaultValue: '—' },
        {
          name: 'error',
          values: 'invalid일 때 설명 자리를 대신하는 문구',
          defaultValue: '—',
        },
        {
          name: 'invalid · disabled',
          values: 'boolean. 안의 컨트롤에 자동으로 전달돼요',
          defaultValue: 'false',
        },
        {
          name: 'children',
          values: 'Input, Textarea, Select, FileDropzone',
          defaultValue: '—',
        },
      ]}
      code={`<Field label="이메일" description="로그인할 때 써요." error="https://로 시작하는 주소를 입력하세요." invalid>
  <Input />
</Field>`}
    />
  );
}
