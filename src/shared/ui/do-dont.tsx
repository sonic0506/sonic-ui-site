import { CircleCheck, X } from 'lucide-react';
import type { ReactNode } from 'react';

const KIND = {
  do: {
    label: '이렇게 해요',
    Icon: CircleCheck,
    toneClass: 'border-t-success',
    textClass: 'text-success',
  },
  dont: {
    label: '이렇게 하지 않아요',
    Icon: X,
    toneClass: 'border-t-danger',
    textClass: 'text-danger',
  },
} as const;

interface DoDontProps {
  kind: keyof typeof KIND;
  description: string;
  children: ReactNode;
}

export function DoDont({ kind, description, children }: DoDontProps) {
  const { label, Icon, toneClass, textClass } = KIND[kind];
  return (
    <figure
      className={`flex flex-col overflow-hidden rounded-lg border border-t-2 border-default bg-surface ${toneClass}`}
    >
      <div className="flex h-40 items-center justify-center gap-2">
        {children}
      </div>
      <figcaption className="flex flex-col gap-2 border-t border-default p-4">
        <span
          className={`flex items-center gap-2 text-body-strong ${textClass}`}
        >
          <Icon className="size-4" aria-hidden />
          {label}
        </span>
        <span className="text-body text-muted">{description}</span>
      </figcaption>
    </figure>
  );
}
