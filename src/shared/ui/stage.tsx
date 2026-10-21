import type { ReactNode } from 'react';

const ALIGN_CLASS = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
} as const;

interface StageProps {
  align?: keyof typeof ALIGN_CLASS;
  children: ReactNode;
}

// 예시 컴포넌트를 올려 두는 판이에요. 좁은 화면에서는 줄을 바꿔요.
export function Stage({ align = 'center', children }: StageProps) {
  return (
    <div
      className={`flex flex-wrap justify-center gap-3 rounded-lg border border-default bg-surface px-6 py-10 ${ALIGN_CLASS[align]}`}
    >
      {children}
    </div>
  );
}

export function StageItem({
  caption,
  children,
}: {
  caption: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      {children}
      <span className="text-caption text-muted">{caption}</span>
    </div>
  );
}
