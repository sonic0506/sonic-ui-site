import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from '@xonic0506/sonic-ui';

import { DocTemplate } from './doc-template';

const LIMIT_QUESTION = '키는 몇 개까지 만들 수 있나요?';
const LIMIT_ANSWER =
  '프로젝트마다 10개까지 만들 수 있어요. 쓰지 않는 키는 삭제해 주세요.';

const ITEM_STATES = [
  { caption: 'default', isOpen: false, isDisabled: false },
  { caption: 'disabled', isOpen: false, isDisabled: true },
  { caption: 'open', isOpen: true, isDisabled: false },
  { caption: 'open · disabled', isOpen: true, isDisabled: true },
] as const;

export function AccordionDoc() {
  return (
    <DocTemplate
      title="Accordion"
      description="긴 내용을 제목만 먼저 보여 주고 필요할 때 펼쳐요."
      variants={[
        {
          demo: (
            <Accordion defaultValue={['limit']} className="w-100 max-w-full">
              <AccordionItem value="limit">
                <AccordionTrigger>{LIMIT_QUESTION}</AccordionTrigger>
                <AccordionPanel>{LIMIT_ANSWER}</AccordionPanel>
              </AccordionItem>
              <AccordionItem value="restore">
                <AccordionTrigger>
                  삭제한 키를 되살릴 수 있나요?
                </AccordionTrigger>
                <AccordionPanel>
                  삭제한 키는 되살릴 수 없어요. 새 키를 만들어 주세요.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem value="share">
                <AccordionTrigger>
                  키를 다른 사람과 같이 써도 되나요?
                </AccordionTrigger>
                <AccordionPanel>
                  사람마다 키를 따로 만들면 누가 보낸 요청인지 알 수 있어요.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          ),
        },
        ...ITEM_STATES.map(({ caption, isOpen, isDisabled }) => ({
          caption,
          demo: (
            <Accordion
              className="w-100 max-w-full"
              {...(isOpen && { defaultValue: ['limit'] })}
            >
              <AccordionItem value="limit" disabled={isDisabled}>
                <AccordionTrigger>{LIMIT_QUESTION}</AccordionTrigger>
                <AccordionPanel>{LIMIT_ANSWER}</AccordionPanel>
              </AccordionItem>
            </Accordion>
          ),
        })),
      ]}
      rules={[
        {
          title: '꼭 읽어야 하는 내용은 접지 않아요',
          description:
            '자주 묻는 질문, 문서 사이드바 그룹처럼 고를 수 있는 내용에 써요.',
        },
        {
          title: '페이지 찾기로 열려요',
          description:
            '닫힌 내용도 브라우저 페이지 찾기로 찾아 열 수 있어요(hiddenUntilFound).',
        },
      ]}
      props={[
        {
          name: 'multiple',
          values: '여러 항목을 함께 열기',
          defaultValue: 'false',
        },
        {
          name: 'value · defaultValue',
          values: '열린 항목들의 value 배열',
          defaultValue: '[]',
        },
        {
          name: 'AccordionItem disabled',
          values: '항목 하나 비활성화',
          defaultValue: 'false',
        },
      ]}
      code={`<Accordion defaultValue={['limit']}>
  <AccordionItem value="limit">
    <AccordionTrigger>키는 몇 개까지 만들 수 있나요?</AccordionTrigger>
    <AccordionPanel>프로젝트마다 10개까지 만들 수 있어요.</AccordionPanel>
  </AccordionItem>
</Accordion>`}
    />
  );
}
