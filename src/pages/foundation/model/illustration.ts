// Figma Foundation · Illustration(35:473)의 표 내용이에요.
export const ILLUSTRATION_SIZES = [
  {
    size: '120 · empty, error',
    usage: 'EmptyState, ErrorState 기본. 카드나 표 안의 빈 상태·에러',
  },
  {
    size: '320 · error-404, error-403, error-500',
    usage: 'ErrorPage. 화면 전체를 쓰는 에러 페이지',
  },
] as const;

export const ILLUSTRATION_RULES = [
  {
    title: '세 곳에만 써요',
    description:
      '빈 상태, 불러오기 실패, 에러 페이지 말고는 쓰지 않아요. 캐릭터의 주황은 강조색이 아니라 그림의 일부라서, 버튼이나 배너에 가져오지 않아요.',
  },
  {
    title: '장식이라 alt=""',
    description:
      '무엇이 없는지, 무엇이 실패했는지는 제목과 설명이 전해요. 화면 낭독기에는 그림을 읽히지 않아요.',
  },
  {
    title: '좁은 곳은 아이콘',
    description:
      'Popover, Select 안처럼 공간이 작으면 EmptyState·ErrorState에 icon을 넘겨 아이콘으로 바꿔요.',
  },
  {
    title: '설정 없이 동작',
    description:
      '이미지는 sonic-ui 패키지에 webp 파일로 들어 있어요. Vite와 Next.js가 자산으로 알아서 처리해요.',
  },
] as const;
