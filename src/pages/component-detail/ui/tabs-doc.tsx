import { Tab, Tabs, TabsList } from '@xonic0506/sonic-ui';

import { DocTemplate } from './doc-template';

const TAB_STATES = [
  { caption: 'default', isSelected: false, isDisabled: false },
  { caption: 'disabled', isSelected: false, isDisabled: true },
  { caption: 'selected', isSelected: true, isDisabled: false },
  { caption: 'selected · disabled', isSelected: true, isDisabled: true },
] as const;

export function TabsDoc() {
  return (
    <DocTemplate
      title="Tabs"
      description="같은 대상의 다른 보기를 오갈 때만 써요. 페이지 이동 링크에는 쓰지 않아요."
      variants={[
        {
          demo: (
            <Tabs defaultValue="overview" className="w-120 max-w-full">
              <TabsList>
                <Tab value="overview">개요</Tab>
                <Tab value="usage">사용량</Tab>
                <Tab value="settings">설정</Tab>
                <Tab value="billing" disabled>
                  결제
                </Tab>
              </TabsList>
            </Tabs>
          ),
        },
        // 탭 하나만 보여서 목록 아래 선은 지워요(Figma Tab 컴포넌트).
        ...TAB_STATES.map(({ caption, isSelected, isDisabled }) => ({
          caption,
          demo: (
            <Tabs {...(isSelected && { defaultValue: 'overview' })}>
              <TabsList className="border-b-0">
                <Tab value="overview" disabled={isDisabled}>
                  개요
                </Tab>
              </TabsList>
            </Tabs>
          ),
        })),
      ]}
      rules={[
        {
          title: '무거운 내용이면 activateOnFocus={false}',
          description: '화살표는 이동만, Enter·Space로 전환해요.',
        },
        {
          title: '포커스 링',
          description:
            '탭은 안쪽(−2px), 패널은 바깥(2px)에 그려요. 마우스로 누를 때는 보이지 않아요.',
        },
        {
          title: '표시 막대',
          description:
            '선택 표시 2px bg/primary가 duration/normal로 움직여요. 목록과 패널 사이 space/4.',
        },
      ]}
      props={[
        {
          name: 'Tabs value · defaultValue',
          values: '선택한 탭',
          defaultValue: '—',
        },
        {
          name: 'TabsList activateOnFocus',
          values: '화살표로 이동하면 바로 전환',
          defaultValue: 'true',
        },
        {
          name: 'TabsList loopFocus',
          values: '끝에서 처음으로',
          defaultValue: 'true',
        },
        { name: 'Tab disabled', values: 'boolean', defaultValue: 'false' },
      ]}
      code={`<Tabs defaultValue="overview">
  <TabsList><Tab value="overview">개요</Tab><Tab value="usage">사용량</Tab></TabsList>
  <TabsPanel value="overview">…</TabsPanel>
  <TabsPanel value="usage">…</TabsPanel>
</Tabs>`}
    />
  );
}
