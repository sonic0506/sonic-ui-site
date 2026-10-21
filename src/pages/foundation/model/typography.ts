export interface TypeSpec {
  name: string;
  /** 견본 글자에 쓰는 토큰 클래스예요. */
  sampleClass: string;
  sample: string;
  value: string;
  usage: string;
}

// Figma Foundation · Typography(31:197)의 표 내용이에요.
const SAMPLE = 'Sonic 디자인 시스템 2026';
const MONO_SAMPLE = 'sk_live_a91f · 12,480';

export const TEXT_STYLES: readonly TypeSpec[] = [
  {
    name: 'display',
    sampleClass: 'text-display',
    sample: SAMPLE,
    value: '32/40 · 600 · −2%',
    usage: '페이지 제목, 핵심 수치',
  },
  {
    name: 'title',
    sampleClass: 'text-title',
    sample: SAMPLE,
    value: '20/28 · 600 · −1%',
    usage: '섹션, Card, Dialog 제목',
  },
  {
    name: 'body',
    sampleClass: 'text-body',
    sample: SAMPLE,
    value: '14/20 · 400 · 0',
    usage: '본문',
  },
  {
    name: 'body-strong',
    sampleClass: 'text-body-strong',
    sample: SAMPLE,
    value: '14/20 · 500 · 0',
    usage: '버튼(md·lg), 강조 본문',
  },
  {
    name: 'label',
    sampleClass: 'text-label',
    sample: SAMPLE,
    value: '13/16 · 500 · 0',
    usage: '폼 라벨, 버튼(sm)',
  },
  {
    name: 'caption',
    sampleClass: 'text-caption',
    sample: SAMPLE,
    value: '12/16 · 400 · 0',
    usage: '보조 설명, 에러 메시지',
  },
  {
    name: 'mono',
    sampleClass: 'font-mono text-body',
    sample: MONO_SAMPLE,
    value: '14/20 · 400 · 0',
    usage: '수치, 코드',
  },
  {
    name: 'mono-caption',
    sampleClass: 'font-mono text-caption',
    sample: MONO_SAMPLE,
    value: '12/16 · 400 · 0',
    usage: '작은 ID, 키 값',
  },
];

export const FONT_FAMILIES: readonly TypeSpec[] = [
  {
    name: 'IBM Plex Sans KR',
    sampleClass: 'text-body',
    sample: 'IBM Plex Sans KR — 본문과 제목에 써요. 가나다 ABC',
    value: '400 · 500 · 600',
    usage: '모든 글자의 기본',
  },
  {
    name: 'IBM Plex Mono',
    sampleClass: 'font-mono text-body',
    sample: 'IBM Plex Mono — 0123456789 sk_live_a91f',
    value: '400',
    usage: '숫자, ID, 키 값처럼 자리를 맞춰야 하는 글자',
  },
];

export const TYPOGRAPHY_RULES = [
  {
    title: '숫자는 고정폭',
    description:
      '수치, ID, 키 값은 mono 계열로 써서 자리를 맞춰요. 표의 숫자 열은 오른쪽 정렬이에요.',
  },
  {
    title: '문장형 대소문자',
    description:
      '라벨을 전부 대문자로 쓰지 않아요. 영문도 첫 글자만 대문자예요.',
  },
  {
    title: '스타일 밖의 크기는 없어요',
    description:
      '13px, 15px처럼 표에 없는 크기를 만들지 않아요. 필요하면 가장 가까운 스타일을 써요.',
  },
] as const;
