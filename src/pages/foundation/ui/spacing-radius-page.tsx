import { DocPage, DocSection, type TocItem } from '@/shared/ui';

import {
  RADII,
  SPACING_STEPS,
  SPACING_USAGES,
  STROKES,
} from '../model/spacing';
import { ScaleRow } from './scale-row';

const TOC: readonly TocItem[] = [
  { id: 'spacing', label: '간격' },
  { id: 'usage', label: '기본 간격' },
  { id: 'radius', label: 'Radius' },
  { id: 'stroke', label: 'Stroke' },
];

export function SpacingRadiusPage() {
  return (
    <DocPage
      title="Spacing · Radius"
      description="간격은 4px 단위 12단계, 모서리는 4단계, 테두리는 두 가지 두께만 써요. 표에 없는 값은 만들지 않아요."
      toc={TOC}
    >
      <DocSection
        id="spacing"
        title="간격"
        description="1단위 = space/1 = 4px. p-4, gap-4처럼 단계 숫자로 써요. 표에 없는 단계(p-9 등)는 쓰지 않아요."
      >
        <ul>
          {SPACING_STEPS.map((token) => (
            <ScaleRow
              key={token.name}
              token={token}
              visual={
                <span className={`h-4 bg-primary ${token.visualClass}`} />
              }
            />
          ))}
        </ul>
      </DocSection>
      <DocSection
        id="usage"
        title="기본 간격"
        description="자주 쓰는 자리의 간격이에요. 화면을 그릴 때 이 표부터 봐요."
      >
        <ul>
          {SPACING_USAGES.map((usage) => (
            <li
              key={usage.place}
              className="flex flex-col gap-6 border-b border-default p-3 md:flex-row"
            >
              <span className="flex-1 text-body text-default">
                {usage.place}
              </span>
              <span className="font-mono text-body text-muted md:whitespace-nowrap">
                {usage.value}
              </span>
            </li>
          ))}
        </ul>
      </DocSection>
      <DocSection
        id="radius"
        title="Radius"
        description="크기가 클수록 둥근 정도도 커져요. 떠 있는 요소와 Card는 lg예요."
      >
        <ul>
          {RADII.map((token) => (
            <ScaleRow
              key={token.name}
              token={token}
              visual={
                <span
                  className={`size-12 border border-default bg-subtle ${token.visualClass}`}
                />
              }
            />
          ))}
        </ul>
      </DocSection>
      <DocSection
        id="stroke"
        title="Stroke"
        description="높낮이는 그림자 대신 1px 테두리로 나눠요. 포커스 링만 2px이고 간격도 2px이에요."
      >
        <ul>
          {STROKES.map((token) => (
            <ScaleRow
              key={token.name}
              token={token}
              visual={
                <span
                  className={`h-8 w-24 rounded-md bg-surface ${token.visualClass}`}
                />
              }
            />
          ))}
        </ul>
      </DocSection>
    </DocPage>
  );
}
