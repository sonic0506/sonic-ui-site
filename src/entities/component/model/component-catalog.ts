// Figma Components 인덱스(9:48)와 사이드바(11:596)의 순서·문구예요.
export const COMPONENT_GROUPS = [
  {
    title: '기본',
    items: [
      {
        name: 'Button',
        description: '동작을 실행해요. 한 화면에 primary는 하나만.',
      },
      { name: 'Input', description: '한 줄 글자를 입력해요.' },
      { name: 'Textarea', description: '여러 줄 글자를 입력해요.' },
      { name: 'Text', description: '텍스트 스타일 8개와 색 3가지.' },
      { name: 'Link', description: '다른 페이지로 이동해요. 밑줄로 구분해요.' },
      { name: 'Card', description: '관련 내용을 한 상자로 묶어요.' },
      { name: 'Avatar', description: '사람을 이미지나 이니셜로 보여 줘요.' },
      { name: 'Separator', description: '관련 없는 묶음 사이를 나눠요.' },
    ],
  },
  {
    title: '폼',
    items: [
      { name: 'Field', description: '라벨, 설명, 에러를 입력과 연결해요.' },
      { name: 'Checkbox', description: '여러 개를 고를 때 써요.' },
      { name: 'RadioGroup', description: '하나만 고를 때 써요.' },
      { name: 'Switch', description: '누르는 즉시 적용되는 설정이에요.' },
      { name: 'Select', description: '목록에서 하나 또는 여러 개를 골라요.' },
      { name: 'FileDropzone', description: '파일을 고르거나 끌어다 놓아요.' },
    ],
  },
  {
    title: '오버레이',
    items: [
      { name: 'Dialog', description: '흐름을 잠시 멈추고 입력을 받아요.' },
      { name: 'AlertDialog', description: '되돌릴 수 없는 동작을 확인해요.' },
      { name: 'Menu', description: '행이나 카드에 딸린 동작을 묶어요.' },
      { name: 'Popover', description: '대상 가까이에 짧은 내용을 띄워요.' },
      { name: 'Tooltip', description: '아이콘 버튼의 이름을 알려 줘요.' },
    ],
  },
  {
    title: '탐색·표시',
    items: [
      { name: 'Tabs', description: '같은 대상의 다른 보기를 오가요.' },
      { name: 'Table', description: '여러 항목의 속성을 비교해요.' },
      {
        name: 'DataGrid',
        description: '정렬, 선택, 고정, 이동이 필요한 목록이에요.',
      },
      { name: 'Pagination', description: '긴 목록을 페이지로 나눠요.' },
      { name: 'ToggleGroup', description: '보는 방식을 바로 바꿔요.' },
      { name: 'Accordion', description: '긴 내용을 접고 펼쳐요.' },
    ],
  },
  {
    title: '피드백·상태',
    items: [
      { name: 'Toast', description: '동작 결과를 잠깐 알려 줘요.' },
      { name: 'Badge', description: '상태를 짧은 낱말로 표시해요.' },
      { name: 'Progress', description: '끝이 정해진 작업의 진행률이에요.' },
      { name: 'Skeleton', description: '로딩 중 자리를 표시해요.' },
      {
        name: 'EmptyState',
        description: '비어 있을 때 다음 행동을 알려 줘요.',
      },
      { name: 'ErrorState', description: '실패를 알리고 다시 시도하게 해요.' },
      {
        name: 'ErrorPage',
        description:
          '404·403·500처럼 페이지 자체를 보여 줄 수 없을 때 화면 전체를 쓰는 에러예요.',
      },
      { name: 'FileList', description: '올린 파일과 진행 상태를 보여 줘요.' },
    ],
  },
] as const;

export type ComponentName =
  (typeof COMPONENT_GROUPS)[number]['items'][number]['name'];
