import { DocPage, DocSection, RuleList, type TocItem } from '@/shared/ui';

const TOC: readonly TocItem[] = [
  { id: 'principles', label: '다섯 가지 원칙' },
  { id: 'do-dont', label: '해요 / 하지 않아요' },
];

const PRINCIPLES = [
  {
    title: '1. 토큰 밖의 값은 없다',
    description:
      '색, 간격, radius, 글자 크기는 모두 토큰에서 골라요. #3355ff, 13px, p-[7px] 같은 임의의 값은 쓰지 않아요.',
  },
  {
    title: '2. 강조는 한 곳에만',
    description:
      '한 화면에서 primary 버튼은 하나만 둬요. 나머지는 secondary나 ghost를 써요.',
  },
  {
    title: '3. 숫자는 고정폭',
    description: '수치, ID, 키 값은 mono 계열로 써서 자리를 맞춰요.',
  },
  {
    title: '4. 그림자 대신 선',
    description:
      '높낮이는 1px 테두리와 바탕 단계(canvas → surface → subtle)로 구분해요. 떠 있는 요소도 그림자 없이 테두리로 나눠요.',
  },
  {
    title: '5. 움직임은 사용자 행동에 대한 응답만',
    description:
      '열기, 닫기, hover처럼 사용자가 일으킨 변화에만 모션을 넣고, prefers-reduced-motion을 지켜요.',
  },
] as const;

const DO_DONT = [
  {
    recommended: 'Semantic 토큰과 텍스트 스타일만 쓰기',
    avoided: 'hex 값, Primitives, 임의 px 직접 쓰기',
  },
  {
    recommended: 'sonic-ui 컴포넌트를 조합하기',
    avoided: '같은 역할의 버튼, 입력란을 새로 그리기',
  },
  {
    recommended: '버튼 문구는 동작 그대로 쓰기 ("API 키 만들기", "저장")',
    avoided: '"확인", "Submit"처럼 모호한 문구, 문구 끝에 화살표 붙이기',
  },
  {
    recommended: '에러 문구는 무엇이 잘못됐고 어떻게 고치는지 쓰기',
    avoided: '"오류가 발생했습니다"만 쓰기',
  },
  {
    recommended: 'light/dark 둘 다 확인하기',
    avoided: '한 모드에서만 보고 끝내기',
  },
  {
    recommended: '포커스 링(border/focus, 2px, offset 2px) 유지하기',
    avoided: 'outline: none으로 포커스 표시 지우기',
  },
  { recommended: '문장형 대소문자 쓰기', avoided: '라벨을 전부 대문자로 쓰기' },
] as const;

// 두 칸 표예요. 좁은 화면에서는 두 칸을 세로로 쌓아요(Figma 375).
function DoDontTable() {
  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-default px-3 py-2 text-label text-muted md:flex-row">
        <span className="flex-1">해요</span>
        <span className="flex-1">하지 않아요</span>
      </div>
      <ul>
        {DO_DONT.map(({ recommended, avoided }) => (
          <li
            key={recommended}
            className="flex flex-col gap-6 border-b border-default p-3 text-body md:flex-row"
          >
            <span className="flex-1 text-default">{recommended}</span>
            <span className="flex-1 text-muted">{avoided}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PrinciplesPage() {
  return (
    <DocPage
      title="원칙"
      description="Cobalt Instrument: 계기판처럼 정밀하고 촘촘한 화면이에요. 차가운 회색을 바탕으로 쓰고, 행동을 유도하는 곳에만 코발트를 써요."
      toc={TOC}
    >
      <DocSection id="principles" title="다섯 가지 원칙">
        <RuleList rules={PRINCIPLES} />
      </DocSection>
      <DocSection
        id="do-dont"
        title="해요 / 하지 않아요"
        description="화면을 만들거나 고칠 때 이 표로 먼저 확인해요."
      >
        <DoDontTable />
      </DocSection>
    </DocPage>
  );
}
