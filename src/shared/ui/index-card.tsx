import Link from 'next/link';
import type { ReactNode } from 'react';

interface IndexCardProps {
  href: string;
  title: string;
  description: string;
  thumbnail: ReactNode;
}

// 카드 전체가 링크예요. 썸네일 안에도 링크가 있을 수 있어서 <a>로 감싸지 않고, 제목 링크의 ::after를 카드 전체로 넓혀요.
export function IndexCard({
  href,
  title,
  description,
  thumbnail,
}: IndexCardProps) {
  return (
    <article className="relative flex flex-col overflow-hidden rounded-lg border border-default bg-surface hover:border-strong">
      <div
        inert
        aria-hidden="true"
        className="hidden h-40 items-center justify-center overflow-hidden bg-canvas md:flex"
      >
        {thumbnail}
      </div>
      <div className="flex flex-col gap-1 p-5">
        <h3 className="text-title">
          <Link
            href={href}
            className="outline-none after:absolute after:inset-0 after:rounded-lg focus-visible:after:outline-2 focus-visible:after:outline-focus"
          >
            {title}
          </Link>
        </h3>
        <p className="text-body text-muted">{description}</p>
      </div>
    </article>
  );
}
