'use client';

import { useEffect, useState } from 'react';

export interface TocItem {
  id: string;
  label: string;
}

export function Toc({ items }: { items: readonly TocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id);

  useEffect(() => {
    // 화면 위쪽 30% 안에 들어온 섹션을 현재 섹션으로 봐요.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '0px 0px -70% 0px' },
    );
    for (const { id } of items) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-labelledby="toc-title" className="flex flex-col gap-2">
      <p id="toc-title" className="text-label text-default">
        이 페이지에서
      </p>
      <ul className="flex flex-col gap-2 border-l border-default px-3">
        {items.map(({ id, label }) => {
          const isActive = id === activeId;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={isActive ? 'location' : undefined}
                className={`text-caption ${isActive ? 'text-default' : 'text-muted hover:text-default'}`}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
