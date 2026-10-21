import type { ReactNode } from 'react';

const ALIGN_CLASS = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
} as const;

// roomy: Button 상세(위아래 space/10, 사이 space/3). compact: 다른 컴포넌트 상세(사방 space/6, 사이 space/6).
const SPACING_CLASS = {
  roomy: 'gap-3 px-6 py-10',
  compact: 'gap-6 p-6',
} as const;

interface StageProps {
  align?: keyof typeof ALIGN_CLASS;
  spacing?: keyof typeof SPACING_CLASS;
  children: ReactNode;
}

// 예시 컴포넌트를 올려 두는 판이에요. 좁은 화면에서는 줄을 바꿔요.
// text-body: Link처럼 부모 글자 크기를 따르는 컴포넌트가 body로 보이게 해요.
export function Stage({
  align = 'center',
  spacing = 'roomy',
  children,
}: StageProps) {
  return (
    <div
      className={`flex flex-wrap justify-center rounded-lg border border-default bg-surface text-body ${SPACING_CLASS[spacing]} ${ALIGN_CLASS[align]}`}
    >
      {children}
    </div>
  );
}

export function StageItem({
  caption,
  children,
}: {
  caption?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      {children}
      {caption && <span className="text-caption text-muted">{caption}</span>}
    </div>
  );
}
