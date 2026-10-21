import type { ReactNode } from 'react';

import {
  CodeBlock,
  DocPage,
  DocSection,
  RuleList,
  Stage,
  StageItem,
  type TocItem,
} from '@/shared/ui';

import { type PropRow, PropsTable } from './props-table';

const TOC: readonly TocItem[] = [
  { id: 'variants', label: '변형' },
  { id: 'usage', label: '사용법' },
  { id: 'props', label: 'Props' },
  { id: 'code', label: '코드' },
];

const ALL_VARIANTS_DESCRIPTION =
  'Figma 원본의 모든 variant예요. hover, focus는 컴포넌트가 처리해서 따로 그리지 않아요.';

interface DocTemplateProps {
  title: string;
  description: string;
  /** 생략하면 "Figma 원본의 모든 variant예요…" 문구를 써요. */
  variantsDescription?: string;
  variants: readonly { caption?: string; demo: ReactNode }[];
  rules: readonly { title: string; description: string }[];
  props: readonly PropRow[];
  code: string;
}

// 컴포넌트 상세의 공통 틀이에요(Figma: 변형 → 사용법 → Props → 코드).
export function DocTemplate({
  title,
  description,
  variantsDescription = ALL_VARIANTS_DESCRIPTION,
  variants,
  rules,
  props,
  code,
}: DocTemplateProps) {
  return (
    <DocPage title={title} description={description} toc={TOC}>
      <DocSection id="variants" title="변형" description={variantsDescription}>
        <Stage align="end" spacing="compact">
          {variants.map(({ caption, demo }, index) => (
            <StageItem
              key={caption ?? index}
              hasMonoCaption
              {...(caption && { caption })}
            >
              {demo}
            </StageItem>
          ))}
        </Stage>
      </DocSection>
      <DocSection id="usage" title="사용법">
        <RuleList rules={rules} />
      </DocSection>
      <DocSection id="props" title="Props">
        <PropsTable rows={props} />
      </DocSection>
      <DocSection id="code" title="코드">
        <CodeBlock language="tsx" code={code} />
      </DocSection>
    </DocPage>
  );
}
