import { DocPage, DocSection, RuleList, type TocItem } from '@/shared/ui';

import { DURATIONS, EASINGS, MOTION_RULES } from '../model/motion';

const TOC: readonly TocItem[] = [
  { id: 'duration', label: '시간' },
  { id: 'easing', label: '곡선' },
  { id: 'rules', label: '규칙' },
];

interface MotionToken {
  name: string;
  value: string;
  usage: string;
}

// 이름·값(Line)은 좁은 화면에서 한 줄, 쓰는 곳은 그 아래예요. md부터 한 줄이에요.
function MotionList({ tokens }: { tokens: readonly MotionToken[] }) {
  return (
    <ul>
      {tokens.map((token) => (
        <li
          key={token.name}
          className="flex flex-col gap-6 border-b border-default p-3 md:flex-row md:items-center"
        >
          <div className="flex items-center gap-3 md:contents">
            <code className="font-mono text-body text-default md:w-45 md:shrink-0">
              {token.name}
            </code>
            <code className="font-mono text-body text-muted md:w-60 md:shrink-0">
              {token.value}
            </code>
          </div>
          <span className="min-w-0 flex-1 text-body text-muted">
            {token.usage}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function MotionPage() {
  return (
    <DocPage
      title="Motion"
      description="움직임은 사용자가 일으킨 변화(열기, 닫기, hover)에만 넣어요. 시간 3가지와 곡선 1가지만 써요."
      toc={TOC}
    >
      <DocSection
        id="duration"
        title="시간"
        description="짧은 변화는 fast, 화면 일부가 열리고 닫히면 normal, 반복은 loop예요."
      >
        <MotionList tokens={DURATIONS} />
      </DocSection>
      <DocSection
        id="easing"
        title="곡선"
        description="빠르게 시작해 부드럽게 멈춰요. 모든 전환에 같은 곡선을 써요."
      >
        <MotionList tokens={EASINGS} />
      </DocSection>
      <DocSection id="rules" title="규칙">
        <RuleList rules={MOTION_RULES} />
      </DocSection>
    </DocPage>
  );
}
