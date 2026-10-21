import { Radio, RadioGroup } from '@xonic0506/sonic-ui';

import { DocTemplate } from './doc-template';

const STATES = [
  { caption: 'default', checked: false, disabled: false },
  { caption: 'disabled', checked: false, disabled: true },
  { caption: 'checked', checked: true, disabled: false },
  { caption: 'checked · disabled', checked: true, disabled: true },
] as const;

export function RadioGroupDoc() {
  return (
    <DocTemplate
      title="RadioGroup"
      description="하나만 고를 때 써요. 화살표 키로 이동하면 바로 선택돼요."
      variants={STATES.map(({ caption, checked, disabled }) => ({
        caption,
        demo: (
          // Radio는 RadioGroup 안에서만 동작해서 상태마다 그룹으로 감싸요. 그룹 이름은 화면 낭독기에만 읽혀요.
          <RadioGroup
            label={<span className="sr-only">{caption}</span>}
            className="gap-0"
            {...(checked && { defaultValue: 'month' })}
          >
            <Radio value="month" disabled={disabled}>
              월간 결제
            </Radio>
          </RadioGroup>
        ),
      }))}
      rules={[
        {
          title: '다섯 개를 넘으면 Select',
          description: '항목이 많으면 RadioGroup은 너무 길어져요.',
        },
      ]}
      props={[
        { name: 'label', values: '그룹 이름', defaultValue: '—' },
        { name: 'value', values: '선택한 값', defaultValue: '—' },
        { name: 'Radio', values: 'value, disabled', defaultValue: '—' },
      ]}
      code={`<RadioGroup label="결제 주기" value={cycle} onValueChange={setCycle}>
  <Radio value="month">월간 결제</Radio>
  <Radio value="year">연간 결제</Radio>
</RadioGroup>`}
    />
  );
}
