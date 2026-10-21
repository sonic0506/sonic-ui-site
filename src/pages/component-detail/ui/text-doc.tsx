import { Text, type TextVariant } from '@xonic0506/sonic-ui';

import { DocTemplate } from './doc-template';

const SAMPLES: readonly {
  variant: TextVariant;
  tone: 'default' | 'muted' | 'danger';
}[] = [
  { variant: 'display', tone: 'default' },
  { variant: 'title', tone: 'default' },
  { variant: 'body', tone: 'default' },
  { variant: 'body', tone: 'muted' },
  { variant: 'body', tone: 'danger' },
  { variant: 'body-strong', tone: 'default' },
  { variant: 'label', tone: 'default' },
  { variant: 'caption', tone: 'default' },
  { variant: 'mono', tone: 'default' },
  { variant: 'mono-caption', tone: 'default' },
];

export function TextDoc() {
  return (
    <DocTemplate
      title="Text"
      description="텍스트 스타일 8개와 색 3가지를 적용하는 글자 컴포넌트예요."
      variantsDescription="대표 variant만 보여 줘요. 전체 조합은 Figma 원본 컴포넌트에서 확인해요. hover, focus는 컴포넌트가 처리해요."
      variants={SAMPLES.map(({ variant, tone }) => ({
        caption: `${variant} · ${tone}`,
        demo: (
          <Text variant={variant} tone={tone}>
            display
          </Text>
        ),
      }))}
      rules={[
        {
          title: '제목 단계는 as로',
          description:
            '보이는 크기(variant)와 문서 구조(as="h2")를 따로 정해요.',
        },
        {
          title: '숫자는 mono',
          description: '수치, ID, 키 값은 mono나 mono-caption이에요.',
        },
      ]}
      props={[
        {
          name: 'variant',
          values:
            'display · title · body · body-strong · label · caption · mono · mono-caption',
          defaultValue: 'body',
        },
        {
          name: 'tone',
          values: 'default · muted · danger',
          defaultValue: 'default',
        },
        {
          name: 'as',
          values: 'p, span, div, h1~h6, label, strong, code',
          defaultValue: 'span',
        },
      ]}
      code={`<Text variant="caption" tone="muted" as="p">키는 만든 직후 한 번만 보여 줘요.</Text>`}
    />
  );
}
