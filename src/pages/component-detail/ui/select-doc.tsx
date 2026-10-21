import { Select } from '@xonic0506/sonic-ui';
import { Check } from 'lucide-react';

import { DocTemplate } from './doc-template';

const OPTIONS = [{ value: 'pro', label: 'Pro' }];

interface ItemPreviewProps {
  label: string;
  isHighlighted?: boolean;
  isSelected?: boolean;
  isMultiple?: boolean;
  isDisabled?: boolean;
}

// 목록과 항목은 열렸을 때만 body 위에 떠서, 상태별 모양을 같은 토큰으로 그려요.
function ItemPreview({
  label,
  isHighlighted,
  isSelected,
  isMultiple,
  isDisabled,
}: ItemPreviewProps) {
  return (
    <div
      className={`flex h-8 w-58 items-center gap-2 rounded-md px-2 text-body ${isHighlighted ? 'bg-subtle' : ''} ${isDisabled ? 'text-muted' : 'text-default'}`}
    >
      {isMultiple && (
        <span
          className={`inline-flex size-4 items-center justify-center rounded-sm border ${isSelected ? 'border-transparent bg-primary text-on-primary' : 'border-strong bg-surface'}`}
        >
          {isSelected && <Check className="size-3" />}
        </span>
      )}
      <span className="min-w-0 flex-1">{label}</span>
      {!isMultiple && isSelected && <Check className="size-4" />}
    </div>
  );
}

const ITEM_STATES: readonly {
  caption: string;
  props: Omit<ItemPreviewProps, 'label'>;
}[] = [
  { caption: 'default', props: {} },
  { caption: 'disabled', props: { isDisabled: true } },
  { caption: 'highlighted', props: { isHighlighted: true } },
  { caption: 'selected', props: { isSelected: true } },
  {
    caption: 'selected · highlighted',
    props: { isSelected: true, isHighlighted: true },
  },
  { caption: 'multiple', props: { isMultiple: true } },
  {
    caption: 'multiple · highlighted',
    props: { isMultiple: true, isHighlighted: true },
  },
  {
    caption: 'multiple · selected',
    props: { isMultiple: true, isSelected: true },
  },
  {
    caption: 'multiple · selected · highlighted',
    props: { isMultiple: true, isSelected: true, isHighlighted: true },
  },
];

export function SelectDoc() {
  return (
    <DocTemplate
      title="Select"
      description="목록에서 하나 또는 여러 개를 골라요. 항목이 5개 이상이거나 화면이 좁을 때 써요."
      variantsDescription="대표 variant만 보여 줘요. 전체 조합은 Figma 원본 컴포넌트에서 확인해요. hover, focus는 컴포넌트가 처리해요."
      variants={[
        {
          caption: 'default',
          demo: (
            <Select
              options={OPTIONS}
              defaultValue="pro"
              aria-label="default"
              className="w-60"
            />
          ),
        },
        {
          caption: 'open',
          demo: (
            <Select
              options={OPTIONS}
              defaultValue="pro"
              aria-label="open"
              className="w-60 border-focus"
            />
          ),
        },
        {
          caption: 'invalid',
          demo: (
            <Select
              options={OPTIONS}
              defaultValue="pro"
              aria-label="invalid"
              invalid
              className="w-60"
            />
          ),
        },
        {
          caption: 'disabled',
          demo: (
            <Select
              options={OPTIONS}
              defaultValue="pro"
              aria-label="disabled"
              disabled
              className="w-60"
            />
          ),
        },
        {
          demo: (
            <div className="flex w-60 flex-col rounded-lg border border-default bg-surface p-1">
              <ItemPreview label="Free" />
              <ItemPreview label="Pro" isSelected />
              <ItemPreview label="Team" isHighlighted />
              <ItemPreview label="Enterprise" isDisabled />
            </div>
          ),
        },
        ...ITEM_STATES.map(({ caption, props }) => ({
          caption,
          demo: <ItemPreview label="Pro" {...props} />,
        })),
      ]}
      rules={[
        {
          title: '단일과 다중',
          description:
            '단일은 고르면 닫히고 오른쪽에 check, 다중은 열린 채로 왼쪽 체크박스예요.',
        },
        {
          title: '떠 있는 요소 공통 스타일',
          description:
            'bg/surface + 1px border/default + radius/lg, 그림자 없음. 트리거 아래 4px.',
        },
      ]}
      props={[
        {
          name: 'options',
          values: '{ value, label, disabled? }[]',
          defaultValue: '—',
        },
        {
          name: 'multiple',
          values: '켜면 value·onValueChange가 배열 (타입으로 강제)',
          defaultValue: 'false',
        },
        {
          name: 'placeholder · invalid · disabled',
          values: 'Field 안에서는 라벨과 invalid가 자동 연결',
          defaultValue: '—',
        },
      ]}
      code={`<Select options={plans} value={plan} onValueChange={setPlan} placeholder="요금제 선택" />
<Select multiple options={tags} value={selected} onValueChange={setSelected} placeholder="태그 선택" />`}
    />
  );
}
