export interface ColorToken {
  name: string;
  usage: string;
  light: string;
  dark: string;
  /** 견본 상자의 바탕·테두리(·글자) 토큰 클래스. light·dark 상자에 함께 써요. */
  swatchClass: string;
}

export interface ColorSection {
  id: string;
  title: string;
  description: string;
  tokens: readonly ColorToken[];
}

// Figma Foundation · Color(14:139)의 표 내용이에요. 값 문구는 Figma와 같게 두 칸 띄어 써요.
export const COLOR_SECTIONS: readonly ColorSection[] = [
  {
    id: 'bg',
    title: '바탕',
    description:
      '높낮이는 그림자 대신 바탕 단계(canvas → surface → subtle)와 1px 테두리로 구분해요.',
    tokens: [
      {
        name: 'color/bg/canvas',
        usage: '페이지 바탕',
        light: 'gray/50 #F4F6F8',
        dark: 'gray/950 #0E1216',
        swatchClass: 'bg-canvas border-default',
      },
      {
        name: 'color/bg/surface',
        usage: 'Card, Dialog, Input 바탕',
        light: 'gray/0 #FFFFFF',
        dark: 'gray/900 #161B21',
        swatchClass: 'bg-surface border-default',
      },
      {
        name: 'color/bg/subtle',
        usage: 'hover 바탕, 진행 막대 트랙, Avatar 바탕',
        light: 'gray/100 #E6EAEE',
        dark: 'gray/800 #1E252D',
        swatchClass: 'bg-subtle border-default',
      },
      {
        name: 'color/bg/primary',
        usage: 'primary 버튼, 진행 막대',
        light: 'cobalt/600 #2340D0',
        dark: 'cobalt/400 #6E86FF',
        swatchClass: 'bg-primary border-default',
      },
      {
        name: 'color/bg/primary-hover',
        usage: 'primary hover',
        light: 'cobalt/700 #1B33AE',
        dark: 'cobalt/300 #8C9FFF',
        swatchClass: 'bg-primary-hover border-default',
      },
      {
        name: 'color/bg/inverse',
        usage: 'Tooltip, neutral Badge(solid)',
        light: 'gray/950',
        dark: 'gray/100',
        swatchClass: 'bg-inverse border-default',
      },
      {
        name: 'color/bg/overlay',
        usage: 'Dialog backdrop',
        light: 'gray/scrim 50%',
        dark: 'gray/scrim 50%',
        swatchClass: 'bg-overlay border-default',
      },
    ],
  },
  {
    id: 'text',
    title: '글자',
    description:
      '본문은 default, 보조 설명은 muted예요. 색이 있는 바탕 위에는 on-* 토큰을 써요.',
    tokens: [
      {
        name: 'color/text/default',
        usage: '본문, 제목',
        light: 'gray/950',
        dark: 'gray/100',
        swatchClass: 'bg-surface border-default text-default',
      },
      {
        name: 'color/text/muted',
        usage: '보조 설명, caption',
        light: 'gray/600 #5B6672',
        dark: 'gray/400 #8D99A6',
        swatchClass: 'bg-surface border-default text-muted',
      },
      {
        name: 'color/text/on-primary',
        usage: 'primary 바탕 위 글자',
        light: 'gray/0',
        dark: 'gray/950',
        swatchClass: 'bg-primary border-default text-on-primary',
      },
      {
        name: 'color/text/inverse',
        usage: 'inverse 바탕 위 글자',
        light: 'gray/0',
        dark: 'gray/950',
        swatchClass: 'bg-inverse border-default text-inverse',
      },
    ],
  },
  {
    id: 'border',
    title: '테두리',
    description:
      '모든 테두리는 1px(stroke/default)이에요. 포커스 링만 2px, 간격 2px이에요.',
    tokens: [
      {
        name: 'color/border/default',
        usage: '기본 테두리, 구분선',
        light: 'gray/200 #D5DBE1',
        dark: 'gray/700 #2A323B',
        swatchClass: 'bg-surface border-default',
      },
      {
        name: 'color/border/strong',
        usage: 'hover 테두리',
        light: 'gray/400',
        dark: 'gray/600',
        swatchClass: 'bg-surface border-strong',
      },
      {
        name: 'color/border/focus',
        usage: '포커스 링',
        light: 'cobalt/600',
        dark: 'cobalt/400',
        swatchClass: 'bg-surface border-focus',
      },
    ],
  },
  {
    id: 'status',
    title: '상태',
    description:
      '성공, 주의, 위험은 바탕(solid·subtle), 글자, 테두리를 한 벌로 써요. 상태 색은 상태를 알릴 때만 써요.',
    tokens: [
      {
        name: 'color/bg/success',
        usage: 'success Badge(solid)',
        light: 'green/600 #16804F',
        dark: 'green/400 #3DB882',
        swatchClass: 'bg-success border-default',
      },
      {
        name: 'color/bg/success-subtle',
        usage: 'success Badge(subtle)',
        light: 'green/50 #EAF7F0',
        dark: 'green/950 #0B2218',
        swatchClass: 'bg-success-subtle border-default',
      },
      {
        name: 'color/text/success',
        usage: '성공 문구, 아이콘',
        light: 'green/700 #0F6640',
        dark: 'green/300 #6BD1A0',
        swatchClass: 'bg-surface border-default text-success',
      },
      {
        name: 'color/text/on-success',
        usage: 'success 바탕 위 글자',
        light: 'gray/0',
        dark: 'gray/950',
        swatchClass: 'bg-success border-default text-on-success',
      },
      {
        name: 'color/border/success',
        usage: '성공 강조 테두리',
        light: 'green/600',
        dark: 'green/400',
        swatchClass: 'bg-surface border-success',
      },
      {
        name: 'color/bg/warning',
        usage: 'warning Badge(solid)',
        light: 'amber/400 #E3A43A',
        dark: 'amber/400',
        swatchClass: 'bg-warning border-default',
      },
      {
        name: 'color/bg/warning-subtle',
        usage: 'warning Badge(subtle)',
        light: 'amber/50 #FCF5E6',
        dark: 'amber/950 #24190A',
        swatchClass: 'bg-warning-subtle border-default',
      },
      {
        name: 'color/text/warning',
        usage: '주의 문구, 아이콘',
        light: 'amber/700 #85520A',
        dark: 'amber/300 #EEC46A',
        swatchClass: 'bg-surface border-default text-warning',
      },
      {
        name: 'color/text/on-warning',
        usage: 'warning 바탕 위 글자 (amber 위 흰 글자는 대비 부족)',
        light: 'gray/950',
        dark: 'gray/950',
        swatchClass: 'bg-warning border-default text-on-warning',
      },
      {
        name: 'color/border/warning',
        usage: '주의 강조 테두리',
        light: 'amber/600',
        dark: 'amber/400',
        swatchClass: 'bg-surface border-warning',
      },
      {
        name: 'color/bg/danger',
        usage: '삭제처럼 되돌릴 수 없는 동작',
        light: 'red/600 #C8312B',
        dark: 'red/400 #F06A5F',
        swatchClass: 'bg-danger border-default',
      },
      {
        name: 'color/bg/danger-subtle',
        usage: 'danger Badge(subtle)',
        light: 'red/50 #FCEDEC',
        dark: 'red/950 #2B1311',
        swatchClass: 'bg-danger-subtle border-default',
      },
      {
        name: 'color/text/danger',
        usage: '에러 메시지',
        light: 'red/600',
        dark: 'red/400',
        swatchClass: 'bg-surface border-default text-danger',
      },
      {
        name: 'color/text/on-danger',
        usage: 'danger 바탕 위 글자',
        light: 'gray/0',
        dark: 'gray/950',
        swatchClass: 'bg-danger border-default text-on-danger',
      },
      {
        name: 'color/border/danger',
        usage: '에러 상태 Input',
        light: 'red/600',
        dark: 'red/400',
        swatchClass: 'bg-surface border-danger',
      },
    ],
  },
];
