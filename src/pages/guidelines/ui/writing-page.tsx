import { Button } from '@xonic0506/sonic-ui';

import {
  DocPage,
  DocSection,
  DoDont,
  RuleList,
  type TocItem,
} from '@/shared/ui';

const TOC: readonly TocItem[] = [
  { id: 'tone', label: '말투' },
  { id: 'button', label: '버튼 문구' },
  { id: 'error', label: '에러 문구' },
  { id: 'others', label: '그 밖의 규칙' },
];

const TONE_RULES = [
  {
    title: '해요체로 써요',
    description:
      '"저장했어요", "키를 만들 수 있어요"처럼 해요체를 써요. 합니다체와 반말을 섞지 않아요.',
  },
  {
    title: '사용자 관점의 말',
    description:
      '"웹훅 설정" 대신 "알림 받기"처럼, 시스템 구조가 아니라 사용자가 하는 일로 이름을 붙여요.',
  },
  {
    title: '사과하지 않아요',
    description:
      '에러에서도 "죄송합니다"를 쓰지 않고, 무엇이 실패했고 어떻게 하면 되는지 써요.',
  },
] as const;

const OTHER_RULES = [
  {
    title: '문장형 대소문자',
    description:
      '영문도 첫 글자만 대문자예요. 라벨을 전부 대문자로 쓰지 않아요.',
  },
  {
    title: 'Avatar 이니셜',
    description:
      '이름에서 1~2글자를 써요. 한글은 이름 첫 글자, 영문은 이름·성 첫 글자예요.',
  },
  {
    title: '숫자와 단위',
    description: '수치는 mono로 쓰고, 천 단위 쉼표를 넣어요(12,480).',
  },
] as const;

function MessagePreview({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex flex-col items-center gap-1 text-center text-body">
      <p className="text-body-strong text-default">{title}</p>
      <p className="text-muted">{body}</p>
    </div>
  );
}

export function WritingPage() {
  return (
    <DocPage
      title="문구"
      description="문구는 한국어 해요체예요. 무엇을 하는지, 무엇이 잘못됐고 어떻게 고치는지를 짧게 써요."
      toc={TOC}
    >
      <DocSection id="tone" title="말투">
        <RuleList rules={TONE_RULES} />
      </DocSection>
      <DocSection
        id="button"
        title="버튼 문구"
        description='버튼은 누르면 일어나는 동작 그대로 써요. 같은 동작은 흐름 내내 같은 이름이에요(버튼 "삭제" → 알림 "삭제했어요").'
      >
        <div className="grid gap-6 md:grid-cols-2">
          <DoDont
            kind="do"
            description="동작 그대로 써요. 무엇을 취소하는지는 옆 primary 버튼이 알려 줘요."
          >
            <Button variant="secondary">취소</Button>
            <Button>API 키 만들기</Button>
          </DoDont>
          <DoDont
            kind="dont"
            description='"확인", "Submit"처럼 모호한 문구나 문구 끝 화살표는 쓰지 않아요.'
          >
            <Button variant="secondary">취소하기</Button>
            <Button>확인 →</Button>
          </DoDont>
        </div>
      </DocSection>
      <DocSection
        id="error"
        title="에러 문구"
        description="무엇이 잘못됐는지와 고치는 방법을 함께 써요. 설명에 있던 형식 안내는 에러 문구가 대신 전해야 해요."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <DoDont
            kind="do"
            description="무엇이 실패했고 어떻게 하면 되는지 써요."
          >
            <MessagePreview
              title="API 키를 불러오지 못했어요"
              body="네트워크 연결을 확인하고 다시 시도해 주세요."
            />
          </DoDont>
          <DoDont
            kind="dont"
            description="무엇이 문제인지 알 수 없는 문구만 쓰지 않아요."
          >
            <MessagePreview
              title="오류가 발생했습니다"
              body="죄송합니다. 잠시 후 다시 시도해 주십시오."
            />
          </DoDont>
        </div>
      </DocSection>
      <DocSection id="others" title="그 밖의 규칙">
        <RuleList rules={OTHER_RULES} />
      </DocSection>
    </DocPage>
  );
}
