import { Checkbox } from '@xonic0506/sonic-ui';

import { DocTemplate } from './doc-template';

const STATES = [
  { caption: 'default', checked: false, indeterminate: false, disabled: false },
  { caption: 'disabled', checked: false, indeterminate: false, disabled: true },
  { caption: 'checked', checked: true, indeterminate: false, disabled: false },
  {
    caption: 'checked · disabled',
    checked: true,
    indeterminate: false,
    disabled: true,
  },
  {
    caption: 'indeterminate',
    checked: false,
    indeterminate: true,
    disabled: false,
  },
  {
    caption: 'indeterminate · disabled',
    checked: false,
    indeterminate: true,
    disabled: true,
  },
] as const;

export function CheckboxDoc() {
  return (
    <DocTemplate
      title="Checkbox"
      description="여러 개를 고를 수 있을 때 써요. 일부만 선택된 상위 항목은 indeterminate예요."
      variants={STATES.map(({ caption, checked, indeterminate, disabled }) => ({
        caption,
        demo: (
          <Checkbox
            defaultChecked={checked}
            indeterminate={indeterminate}
            disabled={disabled}
          >
            알림 받기
          </Checkbox>
        ),
      }))}
      rules={[
        {
          title: '저장 버튼이 있는 폼에서 써요',
          description: '누르는 즉시 적용되는 설정이면 Switch를 써요.',
        },
        {
          title: '그룹은 fieldset',
          description:
            'legend(label 스타일)와 항목 사이 space/3, 항목 사이 space/2.',
        },
      ]}
      props={[
        { name: 'checked', values: '제어 모드', defaultValue: '—' },
        {
          name: 'indeterminate',
          values: 'boolean (화면 낭독기에는 mixed)',
          defaultValue: 'false',
        },
        { name: 'disabled', values: 'boolean', defaultValue: 'false' },
        {
          name: 'CheckboxGroup',
          values: 'label, value(string[]), onValueChange',
          defaultValue: '—',
        },
      ]}
      code={`<CheckboxGroup label="알림 채널" value={channels} onValueChange={setChannels}>
  <Checkbox value="email">이메일</Checkbox>
  <Checkbox value="push">푸시</Checkbox>
</CheckboxGroup>`}
    />
  );
}
