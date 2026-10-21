import { CodeBlock, DocPage, DocSection, type TocItem } from '@/shared/ui';

import { COLOR_SECTIONS } from '../model/color-tokens';
import { ColorTokenRow } from './color-token-row';

const TOC: readonly TocItem[] = [
  ...COLOR_SECTIONS.map(({ id, title }) => ({ id, label: title })),
  { id: 'contrast', label: '대비' },
];

export function ColorPage() {
  return (
    <DocPage
      title="Color"
      description="화면에서는 Semantic 토큰만 써요. 차가운 회색을 바탕으로 쓰고, 행동을 유도하는 곳에만 코발트를 써요. 모든 토큰은 Light와 Dark 값을 함께 가져요."
      toc={TOC}
    >
      {COLOR_SECTIONS.map((section) => (
        <DocSection
          key={section.id}
          id={section.id}
          title={section.title}
          description={section.description}
        >
          <ul>
            {section.tokens.map((token) => (
              <ColorTokenRow key={token.name} token={token} />
            ))}
          </ul>
        </DocSection>
      ))}
      <DocSection
        id="contrast"
        title="대비"
        description="글자와 바탕 조합은 모두 WCAG 4.5:1 이상이에요. 토큰을 바꾸면 배포 전에 다시 확인해요."
      >
        <CodeBlock language="bash" code="npm run check:contrast" />
      </DocSection>
    </DocPage>
  );
}
