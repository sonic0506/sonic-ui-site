import { Switch } from '@xonic0506/sonic-ui';

import { DocTemplate } from './doc-template';

const STATES = [
  { caption: 'default', checked: false, disabled: false },
  { caption: 'disabled', checked: false, disabled: true },
  { caption: 'checked', checked: true, disabled: false },
  { caption: 'checked · disabled', checked: true, disabled: true },
] as const;

export function SwitchDoc() {
  return (
    <DocTemplate
      title="Switch"
      description="누르는 즉시 적용되는 켜기/끄기 설정이에요."
      variants={STATES.map(({ caption, checked, disabled }) => ({
        caption,
        demo: (
          <Switch defaultChecked={checked} disabled={disabled}>
            이메일 알림
          </Switch>
        ),
      }))}
      rules={[
        {
          title: '저장 버튼이 필요한 폼에는 쓰지 않아요',
          description: '그때는 Checkbox예요.',
        },
        {
          title: '손잡이는 duration/fast로 움직여요',
          description: '트랙 28×16, 손잡이 12.',
        },
      ]}
      props={[
        { name: 'checked', values: '켜짐 상태', defaultValue: '—' },
        { name: 'disabled', values: 'boolean', defaultValue: 'false' },
      ]}
      code={`<Switch checked={on} onCheckedChange={setOn}>이메일 알림</Switch>`}
    />
  );
}
