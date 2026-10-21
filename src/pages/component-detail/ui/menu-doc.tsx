import { Separator } from '@xonic0506/sonic-ui';
import { Copy, Pencil, Trash2 } from 'lucide-react';
import type { ReactNode } from 'react';

import { DocTemplate } from './doc-template';

interface ItemPreviewProps {
  icon: ReactNode;
  label: string;
  isDanger?: boolean;
  isHighlighted?: boolean;
  isDisabled?: boolean;
}

// MenuItem은 열린 Menu 안에서만 그려져서, 상태별 모양을 같은 토큰으로 그려요.
function ItemPreview({
  icon,
  label,
  isDanger,
  isHighlighted,
  isDisabled,
}: ItemPreviewProps) {
  return (
    <div
      className={`flex h-8 w-48 items-center gap-2 rounded-md px-2 text-body *:[svg]:size-4 *:[svg]:shrink-0 ${isDanger ? 'text-danger' : 'text-default'} ${isHighlighted ? 'bg-subtle' : ''} ${isDisabled ? 'opacity-(--sn-opacity-disabled)' : ''}`}
    >
      {icon}
      {label}
    </div>
  );
}

const ITEM_STATES = [
  { caption: 'default', props: {} },
  { caption: 'default · disabled', props: { isDisabled: true } },
  { caption: 'default · highlighted', props: { isHighlighted: true } },
  {
    caption: 'default · highlighted · disabled',
    props: { isHighlighted: true, isDisabled: true },
  },
  { caption: 'danger', props: { isDanger: true } },
  { caption: 'danger · disabled', props: { isDanger: true, isDisabled: true } },
  {
    caption: 'danger · highlighted',
    props: { isDanger: true, isHighlighted: true },
  },
  {
    caption: 'danger · highlighted · disabled',
    props: { isDanger: true, isHighlighted: true, isDisabled: true },
  },
] satisfies readonly {
  caption: string;
  props: Omit<ItemPreviewProps, 'icon' | 'label'>;
}[];

export function MenuDoc() {
  return (
    <DocTemplate
      title="Menu"
      description="행이나 카드에 딸린 동작을 묶어요. 화살표로 이동하고 Enter로 실행하면 닫혀요."
      variants={[
        {
          demo: (
            <div className="flex flex-col rounded-lg border border-default bg-surface p-1">
              <ItemPreview icon={<Pencil />} label="이름 바꾸기" />
              <ItemPreview icon={<Copy />} label="키 복사" isHighlighted />
              <Separator className="my-1" />
              <ItemPreview icon={<Trash2 />} label="삭제" isDanger />
            </div>
          ),
        },
        ...ITEM_STATES.map(({ caption, props }) => ({
          caption,
          demo: <ItemPreview icon={<Pencil />} label="수정" {...props} />,
        })),
      ]}
      rules={[
        {
          title: '위험한 동작은 맨 아래',
          description:
            '구분선 뒤에 tone="danger"로 두고, 실행 전에 AlertDialog로 확인해요.',
        },
        {
          title: '크기',
          description:
            '최소 너비 192, 항목 높이 32, 아이콘 16, 트리거 아래 4px·시작 정렬.',
        },
      ]}
      props={[
        {
          name: 'MenuItem tone',
          values: 'default · danger',
          defaultValue: 'default',
        },
        { name: 'MenuItem disabled', values: 'boolean', defaultValue: 'false' },
        {
          name: 'MenuSeparator',
          values: '위험한 동작 앞 구분선',
          defaultValue: '—',
        },
      ]}
      code={`<Menu>
  <MenuTrigger render={<Button size="icon-md" variant="ghost" aria-label="더 보기" />}><Ellipsis /></MenuTrigger>
  <MenuPopup>
    <MenuItem onClick={rename}><Pencil />이름 바꾸기</MenuItem>
    <MenuSeparator />
    <MenuItem tone="danger" onClick={confirmDelete}><Trash2 />삭제</MenuItem>
  </MenuPopup>
</Menu>`}
    />
  );
}
