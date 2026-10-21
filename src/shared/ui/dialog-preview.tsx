import type { ReactNode } from 'react';

interface DialogPreviewProps {
  title: string;
  description: string;
  children?: ReactNode;
  footer: ReactNode;
}

// DialogPopup은 Portal로 화면 전체에 떠서, 열린 모양을 같은 토큰으로 판 안에 그려요.
// 좁은 화면(sm 미만)은 Figma viewport=mobile처럼 Footer 버튼이 전체 너비로 쌓여요.
export function DialogPreview({
  title,
  description,
  children,
  footer,
}: DialogPreviewProps) {
  return (
    <div
      inert
      className="flex h-100 w-160 max-w-full items-center justify-center bg-overlay p-4 max-sm:h-140"
    >
      <div className="flex w-110 max-w-full flex-col gap-4 rounded-lg border border-default bg-surface p-6 text-default">
        <p className="text-title">{title}</p>
        <p className="-mt-3 text-caption text-muted">{description}</p>
        {children}
        <div className="mt-2 flex justify-end gap-2 max-sm:flex-col-reverse max-sm:*:h-10 max-sm:*:w-full">
          {footer}
        </div>
      </div>
    </div>
  );
}
