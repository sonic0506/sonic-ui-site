import { ToggleGroup, ToggleGroupItem } from '@xonic0506/sonic-ui';
import { Menu as MenuIcon } from 'lucide-react';

import { DocTemplate } from './doc-template';

const ITEM_STATES = [
  { caption: '', isPressed: false, isDisabled: false },
  { caption: ' · disabled', isPressed: false, isDisabled: true },
  { caption: ' · pressed', isPressed: true, isDisabled: false },
  { caption: ' · pressed · disabled', isPressed: true, isDisabled: true },
] as const;

export function ToggleGroupDoc() {
  return (
    <DocTemplate
      title="ToggleGroup"
      description="같은 대상을 보는 방식을 바꿔요(목록/카드, 라이트/다크). 누르면 바로 적용돼요."
      variants={[
        {
          demo: (
            <ToggleGroup defaultValue="list" aria-label="보기 방식">
              <ToggleGroupItem value="list">목록</ToggleGroupItem>
              <ToggleGroupItem value="card">카드</ToggleGroupItem>
              <ToggleGroupItem value="table">표</ToggleGroupItem>
            </ToggleGroup>
          ),
        },
        // 항목 하나만 보여서 그룹 바탕은 지워요(Figma Toggle Item 컴포넌트).
        ...(['text', 'icon'] as const).flatMap((content) =>
          ITEM_STATES.map(({ caption, isPressed, isDisabled }) => ({
            caption: content + caption,
            demo: (
              <ToggleGroup
                aria-label={content + caption}
                className="bg-transparent p-0"
                {...(isPressed && { defaultValue: 'list' })}
              >
                {content === 'text' ? (
                  <ToggleGroupItem value="list" disabled={isDisabled}>
                    목록
                  </ToggleGroupItem>
                ) : (
                  <ToggleGroupItem
                    value="list"
                    disabled={isDisabled}
                    iconOnly
                    aria-label="목록"
                  >
                    <MenuIcon />
                  </ToggleGroupItem>
                )}
              </ToggleGroup>
            ),
          })),
        ),
      ]}
      rules={[
        {
          title: '폼 값 고르기에는 쓰지 않아요',
          description: '그때는 RadioGroup이나 Select예요.',
        },
        {
          title: '포커스 링은 안쪽',
          description: '항목끼리 붙어 있어서 Tab처럼 −2px 안쪽에 그려요.',
        },
      ]}
      props={[
        {
          name: 'multiple',
          values: '켜면 value가 string[] (타입으로 강제)',
          defaultValue: 'false',
        },
        {
          name: 'value · onValueChange',
          values: '단일은 항상 하나가 눌려 있어요',
          defaultValue: '—',
        },
        {
          name: 'disabled',
          values: '그룹 전체 또는 항목 하나',
          defaultValue: 'false',
        },
        {
          name: 'ToggleGroupItem iconOnly',
          values: '24×24 아이콘 항목, aria-label 필수',
          defaultValue: 'false',
        },
      ]}
      code={`<ToggleGroup value={view} onValueChange={setView} aria-label="보기 방식">
  <ToggleGroupItem value="list">목록</ToggleGroupItem>
  <ToggleGroupItem value="card">카드</ToggleGroupItem>
</ToggleGroup>`}
    />
  );
}
