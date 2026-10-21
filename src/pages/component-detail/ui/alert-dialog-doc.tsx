import { Button } from '@xonic0506/sonic-ui';

import { DialogPreview } from './dialog-preview';
import { DocTemplate } from './doc-template';

export function AlertDialogDoc() {
  return (
    <DocTemplate
      title="AlertDialog"
      description="되돌릴 수 없는 동작 전에만 확인을 받아요. 바깥을 눌러도 닫히지 않아요(Esc는 닫혀요)."
      variants={[
        {
          demo: (
            <DialogPreview
              title="API 키를 삭제할까요?"
              description="이 키로 보내는 요청이 바로 실패해요. 삭제하면 되돌릴 수 없어요."
              footer={
                <>
                  <Button variant="secondary">취소</Button>
                  <Button variant="danger">삭제</Button>
                </>
              }
            />
          ),
        },
      ]}
      rules={[
        {
          title: '제목은 질문, 설명은 결과',
          description:
            '"API 키를 삭제할까요?" / "이 키로 보내는 요청이 바로 실패해요."',
        },
        {
          title: '확인 버튼은 동작 이름 그대로',
          description: 'danger 버튼에 "삭제"처럼 써요. "확인"은 쓰지 않아요.',
        },
      ]}
      props={[
        { name: 'open · onOpenChange', values: '제어 모드', defaultValue: '—' },
        {
          name: 'AlertDialogClose',
          values: '취소 버튼 (secondary)',
          defaultValue: '—',
        },
        {
          name: 'initialFocus',
          values: '위험한 확인 버튼 대신 취소에 둘 수 있어요',
          defaultValue: '첫 포커스 요소',
        },
      ]}
      code={`<AlertDialog>
  <AlertDialogTrigger render={<Button variant="danger" />}>삭제</AlertDialogTrigger>
  <AlertDialogPopup>
    <AlertDialogTitle>API 키를 삭제할까요?</AlertDialogTitle>
    <AlertDialogDescription>이 키로 보내는 요청이 바로 실패해요.</AlertDialogDescription>
    <AlertDialogFooter><AlertDialogClose render={<Button variant="secondary" />}>취소</AlertDialogClose><Button variant="danger" onClick={remove}>삭제</Button></AlertDialogFooter>
  </AlertDialogPopup>
</AlertDialog>`}
    />
  );
}
