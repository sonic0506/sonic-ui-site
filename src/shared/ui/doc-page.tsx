import type { ReactNode } from 'react';

import { Toc, type TocItem } from './toc';

interface DocPageProps {
  title: string;
  description: ReactNode;
  toc?: readonly TocItem[];
  children: ReactNode;
}

export function DocPage({ title, description, toc, children }: DocPageProps) {
  return (
    <div className="flex justify-center gap-6">
      <main className="flex w-full max-w-240 min-w-0 flex-col gap-10 px-4 py-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-display">{title}</h1>
          <p className="text-body text-muted">{description}</p>
        </div>
        {children}
      </main>
      {toc && (
        <aside className="sticky top-0 hidden w-50 shrink-0 self-start pt-10 xl:block">
          <Toc items={toc} />
        </aside>
      )}
    </div>
  );
}
