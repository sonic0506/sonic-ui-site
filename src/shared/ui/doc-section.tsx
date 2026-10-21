import type { ReactNode } from 'react';

interface DocSectionProps {
  id: string;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
}

export function DocSection({
  id,
  title,
  description,
  children,
}: DocSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col gap-1">
        <h2 id={`${id}-title`} className="text-title">
          {title}
        </h2>
        {description && <p className="text-body text-muted">{description}</p>}
      </div>
      {children}
    </section>
  );
}
