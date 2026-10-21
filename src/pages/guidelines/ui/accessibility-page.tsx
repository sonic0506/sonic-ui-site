import { DocPage, DocSection, RuleList, type TocItem } from '@/shared/ui';

const TOC: readonly TocItem[] = [
  { id: 'contrast', label: '대비' },
  { id: 'keyboard', label: '키보드와 포커스' },
  { id: 'screen-reader', label: '화면 낭독기' },
  { id: 'motion', label: '움직임' },
];

const CONTRAST_RULES = [
  {
    title: '글자와 바탕은 4.5:1 이상',
    description:
      '모든 Semantic 조합이 WCAG 4.5:1을 넘어요. 토큰을 바꾸면 npm run check:contrast로 다시 확인해요(배포 전 검사에도 들어 있어요).',
  },
  {
    title: 'amber 위에는 어두운 글자',
    description:
      'warning 바탕(amber/400) 위 흰 글자는 대비가 부족해서 on-warning(gray/950)을 써요.',
  },
] as const;

const KEYBOARD_RULES = [
  {
    title: '포커스 링은 지우지 않아요',
    description:
      ':focus-visible에서 2px border/focus 링, 간격 2px. 포커스 링을 그리는 요소에 outline-none을 같이 쓰지 않아요(Tailwind v4에서 링이 사라져요).',
  },
  {
    title: '붙어 있는 항목은 안쪽 링',
    description:
      'Tab, ToggleGroup 항목은 서로 겹치지 않도록 −2px 안쪽에 그려요.',
  },
  {
    title: '확인은 실제 키보드로',
    description: '클래스가 아니라 Tab 키로 이동해 보며 확인해요.',
  },
  {
    title: 'Dialog 포커스',
    description:
      '열리면 안의 첫 요소로, 닫히면 열기 전 요소로 돌아가요. 코드로 열었다면 finalFocus를 꼭 지정해요.',
  },
] as const;

const SCREEN_READER_RULES = [
  {
    title: '아이콘만 있는 버튼은 aria-label',
    description: 'size="icon-*" 버튼과 iconOnly 토글 항목은 타입으로 강제돼요.',
  },
  {
    title: '장식은 숨겨요',
    description:
      '글자 옆 아이콘, 일러스트, Skeleton은 aria-hidden이나 alt=""로 숨겨요. 로딩 영역 전체에는 aria-busy를 둬요.',
  },
  {
    title: '에러는 입력란과 연결',
    description:
      'Field가 설명과 에러를 aria-describedby로 이어요. 에러가 설명을 대신해서 하나만 읽혀요.',
  },
  {
    title: '알림 우선순위',
    description:
      'Toast는 차례가 오면 읽고, danger는 바로 읽어요. ErrorState는 role="alert"예요.',
  },
] as const;

const MOTION_RULES = [
  {
    title: 'reduced-motion',
    description:
      '움직임 줄이기를 켜면 전환을 없애고 반복 애니메이션(Skeleton, 스피너)을 멈춰요.',
  },
] as const;

export function AccessibilityPage() {
  return (
    <DocPage
      title="접근성"
      description="컴포넌트가 키보드, 화면 낭독기, 대비를 기본으로 처리해요. 조합할 때 아래만 지키면 돼요."
      toc={TOC}
    >
      <DocSection id="contrast" title="대비">
        <RuleList rules={CONTRAST_RULES} />
      </DocSection>
      <DocSection id="keyboard" title="키보드와 포커스">
        <RuleList rules={KEYBOARD_RULES} />
      </DocSection>
      <DocSection id="screen-reader" title="화면 낭독기">
        <RuleList rules={SCREEN_READER_RULES} />
      </DocSection>
      <DocSection id="motion" title="움직임">
        <RuleList rules={MOTION_RULES} />
      </DocSection>
    </DocPage>
  );
}
