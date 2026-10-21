// Figma Foundation · Motion(33:309)의 표 내용이에요.
export const DURATIONS = [
  {
    name: 'duration/fast',
    value: '120ms',
    usage: 'hover, 색 전환, Switch 손잡이',
  },
  {
    name: 'duration/normal',
    value: '200ms',
    usage:
      'Dialog·Toast 열기/닫기, Tabs 표시 막대, Accordion 높이, Progress 채움',
  },
  {
    name: 'duration/loop',
    value: '1000ms',
    usage: '반복 애니메이션: Skeleton 깜빡임, 로딩 스피너 회전',
  },
] as const;

export const EASINGS = [
  {
    name: 'easing/standard',
    value: 'cubic-bezier(0.2, 0, 0, 1)',
    usage: '모든 전환 (코드: ease-standard)',
  },
] as const;

export const MOTION_RULES = [
  {
    title: '사용자 행동에 대한 응답만',
    description:
      '페이지에 들어오자마자 움직이는 장식 애니메이션은 넣지 않아요. 누르고, 열고, 가리킬 때만 움직여요.',
  },
  {
    title: 'prefers-reduced-motion 지키기',
    description:
      '움직임 줄이기를 켠 사용자에게는 전환을 없애고, 반복 애니메이션(Skeleton, 스피너)은 멈춰요.',
  },
  {
    title: 'Figma에는 그리지 않아요',
    description:
      '시간과 곡선은 코드에서만 적용해요. Figma에는 열린 상태와 닫힌 상태만 그려요.',
  },
] as const;
