import { DocPage, DocSection, type TocItem } from '@/shared/ui';

import {
  FONT_FAMILIES,
  TEXT_STYLES,
  TYPOGRAPHY_RULES,
} from '../model/typography';
import { SpecRow } from './spec-row';

const TOC: readonly TocItem[] = [
  { id: 'styles', label: '스타일' },
  { id: 'families', label: '글꼴' },
  { id: 'rules', label: '규칙' },
];

export function TypographyPage() {
  return (
    <DocPage
      title="Typography"
      description="글꼴은 IBM Plex Sans와 IBM Plex Mono 두 가지예요. 크기, 행간, 굵기, 자간을 묶은 텍스트 스타일 8개만 써요."
      toc={TOC}
    >
      <DocSection
        id="styles"
        title="스타일"
        description="이름이 곧 쓰는 곳이에요. 코드에서는 text-<이름> 클래스나 <Text variant>로 써요."
      >
        <ul>
          {TEXT_STYLES.map((spec) => (
            <SpecRow key={spec.name} spec={spec} />
          ))}
        </ul>
      </DocSection>
      <DocSection
        id="families"
        title="글꼴"
        description="한글과 영문 모두 IBM Plex 계열로 맞춰요. 다른 글꼴은 섞지 않아요."
      >
        <ul>
          {FONT_FAMILIES.map((spec) => (
            <SpecRow key={spec.name} spec={spec} />
          ))}
        </ul>
      </DocSection>
      <DocSection id="rules" title="규칙">
        <ul>
          {TYPOGRAPHY_RULES.map((rule) => (
            <li
              key={rule.title}
              className="flex flex-col gap-1 border-b border-default py-4"
            >
              <span className="text-body-strong text-default">
                {rule.title}
              </span>
              <span className="text-body text-muted">{rule.description}</span>
            </li>
          ))}
        </ul>
      </DocSection>
    </DocPage>
  );
}
