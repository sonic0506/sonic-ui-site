import { DocTemplate } from './doc-template';

export function TooltipDoc() {
  return (
    <DocTemplate
      title="Tooltip"
      description="아이콘만 있는 버튼의 이름을 보여 줘요."
      variants={[
        {
          // Tooltip은 hover·포커스 때만 Portal로 떠서, 보이는 모양을 같은 토큰으로 그려요.
          demo: (
            <span className="rounded-md bg-inverse px-2 py-1 text-caption text-inverse">
              설정
            </span>
          ),
        },
      ]}
      rules={[
        {
          title: '중요한 정보는 넣지 않아요',
          description:
            '클릭할 요소도 넣지 않아요. Tooltip이 있어도 aria-label은 따로 달아요.',
        },
        {
          title: '나타나는 시간',
          description: '마우스는 600ms 뒤, 키보드 포커스는 바로 보여요.',
        },
      ]}
      props={[
        { name: 'content', values: '보여 줄 문구', defaultValue: '—' },
        {
          name: 'children',
          values: '대상 요소 (보통 icon 버튼)',
          defaultValue: '—',
        },
      ]}
      code={`<Tooltip content="설정">
  <Button size="icon-md" variant="ghost" aria-label="설정"><Settings /></Button>
</Tooltip>`}
    />
  );
}
