export interface ScaleToken {
  name: string;
  value: string;
  /** 시각 견본에 쓰는 토큰 클래스예요. */
  visualClass: string;
  note?: string;
}

// Figma Foundation · Spacing Radius(32:255)의 표 내용이에요.
export const SPACING_STEPS: readonly ScaleToken[] = [
  { name: 'space/0', value: '0px', visualClass: 'w-0' },
  { name: 'space/1', value: '4px', visualClass: 'w-1' },
  { name: 'space/2', value: '8px', visualClass: 'w-2' },
  { name: 'space/3', value: '12px', visualClass: 'w-3' },
  { name: 'space/4', value: '16px', visualClass: 'w-4' },
  { name: 'space/5', value: '20px', visualClass: 'w-5' },
  { name: 'space/6', value: '24px', visualClass: 'w-6' },
  {
    name: 'space/7',
    value: '28px',
    visualClass: 'w-7',
    note: '컨트롤 sm 높이',
  },
  {
    name: 'space/8',
    value: '32px',
    visualClass: 'w-8',
    note: '컨트롤 md 높이',
  },
  {
    name: 'space/10',
    value: '40px',
    visualClass: 'w-10',
    note: '컨트롤 lg 높이, 표 행 높이',
  },
  { name: 'space/12', value: '48px', visualClass: 'w-12' },
  { name: 'space/16', value: '64px', visualClass: 'w-16' },
];

export const SPACING_USAGES = [
  {
    place: '페이지 콘텐츠',
    value: '최대 너비 960, 좌우 space/4, 위아래 space/10',
  },
  { place: '섹션 사이', value: 'space/6' },
  { place: 'Card 안쪽 / 영역 사이', value: 'space/5 / space/4' },
  { place: '폼 필드 사이', value: 'space/4' },
  { place: '라벨 ↔ 입력란 ↔ 도움말', value: 'space/2' },
  { place: '버튼 묶음 사이', value: 'space/2' },
  { place: '목록 항목 안 (아바타 ↔ 텍스트)', value: 'space/3' },
  { place: '제목 ↔ 바로 아래 설명', value: 'space/1' },
] as const;

export const RADII: readonly ScaleToken[] = [
  {
    name: 'radius/sm',
    value: '2px',
    visualClass: 'rounded-sm',
    note: '배지, 체크박스, 토글 항목',
  },
  {
    name: 'radius/md',
    value: '4px',
    visualClass: 'rounded-md',
    note: 'Button, Input, Select',
  },
  {
    name: 'radius/lg',
    value: '6px',
    visualClass: 'rounded-lg',
    note: 'Card, Dialog, Menu, Toast',
  },
  {
    name: 'radius/full',
    value: '9999px',
    visualClass: 'rounded-full',
    note: 'Avatar, 진행 막대, Switch',
  },
];

export const STROKES: readonly ScaleToken[] = [
  {
    name: 'stroke/default',
    value: '1px',
    visualClass: 'border border-default',
    note: '모든 테두리, 구분선',
  },
  {
    name: 'stroke/focus',
    value: '2px',
    visualClass: 'border-2 border-focus',
    note: '포커스 링 (offset 2px, border/focus)',
  },
];
