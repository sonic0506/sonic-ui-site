import type { ReactNode } from 'react';

import type { ScaleToken } from '../model/spacing';

// 이름·값·견본(Line)은 좁은 화면에서 한 줄, 쓰는 곳(note)은 그 아래예요. md부터 Line이 행에 풀려 한 줄이 돼요.
export function ScaleRow({
  token,
  visual,
}: {
  token: ScaleToken;
  visual: ReactNode;
}) {
  return (
    <li className="flex flex-col gap-6 border-b border-default p-3 md:flex-row md:items-center">
      <div className="flex items-center gap-3 md:contents">
        <code className="font-mono text-body text-default md:w-35 md:shrink-0">
          {token.name}
        </code>
        <span className="font-mono text-caption text-muted md:w-15 md:shrink-0">
          {token.value}
        </span>
        <div className="flex min-w-0 flex-1 items-center">{visual}</div>
      </div>
      {token.note && (
        <span className="text-caption text-muted md:w-65 md:shrink-0">
          {token.note}
        </span>
      )}
    </li>
  );
}
