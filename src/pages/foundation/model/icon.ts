// Figma Foundation · Icon(34:411)의 표 내용이에요.
export const ICON_SIZES = [
  {
    sizeClass: 'size-4',
    size: 'space/4 · 16px',
    usage: '버튼 sm·md·icon-sm·icon-md, 입력란 안, 본문 옆',
  },
  { sizeClass: 'size-5', size: 'space/5 · 20px', usage: '버튼 lg·icon-lg' },
  {
    sizeClass: 'size-6',
    size: 'space/6 · 24px',
    usage: '빈 상태처럼 아이콘이 주인공일 때',
  },
] as const;

export const ICON_RULES = [
  {
    title: '글자와 함께면 장식',
    description:
      '아이콘이 글자 옆에 있으면 화면 낭독기에서 숨겨요(lucide-react 기본 aria-hidden).',
  },
  {
    title: '아이콘만 있는 버튼은 aria-label',
    description:
      'size="icon-*" 버튼은 aria-label이 타입으로 강제돼요. Tooltip이 있어도 aria-label은 따로 달아요.',
  },
  {
    title: '뒤쪽 아이콘은 결과를 알릴 때만',
    description:
      '버튼 문구 뒤에는 펼침(chevron)이나 외부 링크처럼 결과를 알려 주는 아이콘만 둬요.',
  },
  {
    title: '다른 아이콘 세트는 섞지 않아요',
    description:
      '새 아이콘이 필요하면 Lucide에서 가져와 Figma Icon / 컴포넌트로 추가해요.',
  },
] as const;
