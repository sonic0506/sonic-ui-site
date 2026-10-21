import { Separator } from '@xonic0506/sonic-ui';
import { Copy, Pencil, Trash2 } from 'lucide-react';
import type { ReactNode } from 'react';

export interface MenuItemPreviewProps {
  icon: ReactNode;
  label: string;
  isDanger?: boolean;
  isHighlighted?: boolean;
  isDisabled?: boolean;
}

// MenuItem은 열린 Menu 안에서만 그려져서, 상태별 모양을 같은 토큰으로 그려요.
export function MenuItemPreview({
  icon,
  label,
  isDanger,
  isHighlighted,
  isDisabled,
}: MenuItemPreviewProps) {
  return (
    <div
      className={`flex h-8 w-48 items-center gap-2 rounded-md px-2 text-body *:[svg]:size-4 *:[svg]:shrink-0 ${isDanger ? 'text-danger' : 'text-default'} ${isHighlighted ? 'bg-subtle' : ''} ${isDisabled ? 'opacity-(--sn-opacity-disabled)' : ''}`}
    >
      {icon}
      {label}
    </div>
  );
}

// 열린 Menu 모양이에요. 위험한 동작은 구분선 뒤 맨 아래예요.
export function MenuPopupPreview() {
  return (
    <div
      inert
      className="flex flex-col rounded-lg border border-default bg-surface p-1"
    >
      <MenuItemPreview icon={<Pencil />} label="이름 바꾸기" />
      <MenuItemPreview icon={<Copy />} label="키 복사" isHighlighted />
      <Separator className="my-1" />
      <MenuItemPreview icon={<Trash2 />} label="삭제" isDanger />
    </div>
  );
}
