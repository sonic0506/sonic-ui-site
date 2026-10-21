import { Button, Input } from '@xonic0506/sonic-ui';

import { DocTemplate } from './doc-template';

export function PopoverDoc() {
  return (
    <DocTemplate
      title="Popover"
      description="대상 가까이에 짧은 내용이나 간단한 입력을 띄워요."
      variants={[
        {
          // PopoverPopup은 Portal로 떠서, 열린 모양을 같은 토큰으로 그려요. 좁은 화면에서는 가로로 스크롤해요.
          demo: (
            <div className="max-w-full overflow-x-auto">
              <div
                inert
                className="flex w-80 flex-col gap-3 rounded-lg border border-default bg-surface p-4 text-default"
              >
                <div className="flex flex-col gap-1">
                  <p className="text-body-strong">링크 공유</p>
                  <p className="text-caption text-muted">
                    링크가 있는 사람은 누구나 볼 수 있어요.
                  </p>
                </div>
                <div className="flex gap-2">
                  <Input
                    defaultValue="sonic.app/s/a91f"
                    aria-label="공유 링크"
                    readOnly
                  />
                  <Button variant="secondary">복사</Button>
                </div>
              </div>
            </div>
          ),
        },
      ]}
      rules={[
        {
          title: '너비 320, 대상에서 8px',
          description: 'padding space/4, 영역 사이 space/3.',
        },
        {
          title: '다른 컴포넌트와 구분',
          description:
            '확인이 필요한 결정은 Dialog, 목록형 동작은 Menu를 써요.',
        },
      ]}
      props={[
        { name: 'PopoverTitle', values: 'body-strong', defaultValue: '—' },
        {
          name: 'PopoverDescription',
          values: 'caption + text/muted',
          defaultValue: '—',
        },
        { name: 'PopoverClose', values: '닫기 버튼', defaultValue: '—' },
      ]}
      code={`<Popover>
  <PopoverTrigger render={<Button variant="secondary" />}>공유</PopoverTrigger>
  <PopoverPopup>
    <PopoverTitle>링크로 공유</PopoverTitle>
    <PopoverDescription>링크가 있는 사람은 누구나 볼 수 있어요.</PopoverDescription>
  </PopoverPopup>
</Popover>`}
    />
  );
}
