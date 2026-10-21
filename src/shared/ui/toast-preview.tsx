import { Button, type ToastTone } from '@xonic0506/sonic-ui';
import { CircleAlert, CircleCheck, Info, TriangleAlert, X } from 'lucide-react';
import type { ReactNode } from 'react';

const TONE_ICON: Record<ToastTone, ReactNode> = {
  neutral: <Info className="text-muted" />,
  success: <CircleCheck className="text-success" />,
  warning: <TriangleAlert className="text-warning" />,
  danger: <CircleAlert className="text-danger" />,
};

interface ToastPreviewProps {
  tone: ToastTone;
  title: string;
  description: string;
}

// Toast는 useToast().add로만 떠서, 보이는 모양을 같은 토큰으로 그려요.
export function ToastPreview({ tone, title, description }: ToastPreviewProps) {
  return (
    <div
      inert
      className="flex w-90 max-w-full items-start gap-3 rounded-lg border border-default bg-surface p-3 text-default"
    >
      <span className="flex h-7 shrink-0 items-center *:size-4">
        {TONE_ICON[tone]}
      </span>
      <div className="flex min-w-0 flex-1 flex-col gap-1 pt-1">
        <p className="text-body-strong">{title}</p>
        <p className="text-caption text-muted">{description}</p>
      </div>
      <Button variant="ghost" size="icon-sm" aria-label="알림 닫기">
        <X />
      </Button>
    </div>
  );
}
