import { Button, Field, Input } from '@xonic0506/sonic-ui';

import { DialogPreview } from '@/shared/ui';

import { DocTemplate } from './doc-template';

export function DialogDoc() {
  return (
    <DocTemplate
      title="Dialog"
      description="흐름을 잠시 멈추고 짧은 입력이나 확인을 받아요. Esc와 바깥 클릭으로 닫혀요."
      variants={[
        {
          demo: (
            <DialogPreview
              title="API 키 만들기"
              description="키는 만든 직후 한 번만 보여 줘요."
              footer={
                <>
                  <Button variant="secondary">취소</Button>
                  <Button>만들기</Button>
                </>
              }
            >
              <Field label="키 이름">
                <Input placeholder="예: production" />
              </Field>
            </DialogPreview>
          ),
        },
      ]}
      rules={[
        {
          title: '크기와 간격',
          description:
            '너비 440(좁으면 좌우 space/4를 뺀 너비), padding space/6, 영역 사이 space/4.',
        },
        {
          title: '트리거가 밖에 있으면 제어 모드',
          description:
            'Menu 항목이나 API 에러 뒤에 열 때는 open과 onOpenChange만 넘겨요.',
        },
        {
          title: '열기/닫기 모션',
          description:
            'duration/normal, opacity 0 · scale 0.98에서 시작해요. Backdrop은 opacity만 바뀌어요.',
        },
      ]}
      props={[
        {
          name: 'open · onOpenChange',
          values: '제어 모드 (트리거가 밖에 있을 때)',
          defaultValue: '—',
        },
        {
          name: 'DialogPopup',
          values: 'Portal과 Backdrop을 함께 그려요',
          defaultValue: '—',
        },
        {
          name: 'initialFocus',
          values: '열릴 때 포커스 위치',
          defaultValue: '첫 포커스 요소',
        },
        {
          name: 'finalFocus',
          values: '닫힌 뒤 포커스 위치 (코드로 열었다면 필수)',
          defaultValue: '열기 전 요소',
        },
      ]}
      code={`<Dialog>
  <DialogTrigger render={<Button />}>API 키 만들기</DialogTrigger>
  <DialogPopup>
    <DialogTitle>API 키 만들기</DialogTitle>
    <DialogDescription>키는 만든 직후 한 번만 보여 줘요.</DialogDescription>
    <DialogFooter><DialogClose render={<Button variant="secondary" />}>취소</DialogClose><Button>만들기</Button></DialogFooter>
  </DialogPopup>
</Dialog>`}
    />
  );
}
