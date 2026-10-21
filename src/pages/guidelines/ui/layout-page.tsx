import { Button, Field, Input } from '@xonic0506/sonic-ui';

import {
  DocPage,
  DocSection,
  RuleList,
  Stage,
  type TocItem,
} from '@/shared/ui';

const TOC: readonly TocItem[] = [
  { id: 'structure', label: '화면 구조' },
  { id: 'spacing', label: '간격 기본값' },
  { id: 'button-group', label: '버튼 묶음' },
  { id: 'error', label: '에러 표시' },
  { id: 'auto-layout', label: 'Figma auto layout' },
];

const SPACING = [
  { place: '섹션 사이', value: 'space/6' },
  {
    place: 'Card 안쪽 padding / Header·Body·Footer 사이',
    value: 'space/5 / space/4',
  },
  { place: '폼 필드 사이', value: 'space/4' },
  { place: '라벨 ↔ 입력란 ↔ 도움말·에러', value: 'space/2' },
  { place: '버튼 묶음 사이', value: 'space/2' },
  { place: '목록 항목 안 (아바타 ↔ 텍스트)', value: 'space/3' },
  { place: '제목 ↔ 바로 아래 설명', value: 'space/1' },
] as const;

const AUTO_LAYOUT_RULES = [
  {
    title: '자식이 둘 이상이면 auto layout',
    description:
      '절대 좌표 배치는 쓰지 않아요. 레이어 구조는 코드 DOM과 같게 맞춰요(Card → Header / Body / Footer).',
  },
  {
    title: 'padding·gap은 space 변수에 바인딩',
    description:
      '0도 space/0에 바인딩해요. 테두리는 stroke/default, 안쪽 정렬이에요.',
  },
  {
    title: '크기 규칙',
    description:
      '텍스트는 Hug, 늘어나야 하는 요소는 Fill, 컨트롤 높이는 Fixed(space/7·8·10).',
  },
  {
    title: 'Light로 그리고 Dark로 확인',
    description:
      '화면은 Light 모드로 그리고, 마지막에 복제해 Semantic 모드를 Dark로 바꿔 한 번 확인해요.',
  },
] as const;

function DiagramLabel({ name, value }: { name: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 p-3">
      <span className="text-label text-default">{name}</span>
      <span className="font-mono text-caption text-muted">{value}</span>
    </div>
  );
}

// 비율만 맞춘 축소본이에요(Figma Diagram).
function StructureDiagram() {
  return (
    <div className="overflow-hidden rounded-lg border border-default bg-canvas">
      <div className="border-b border-default bg-surface">
        <DiagramLabel name="헤더" value="화면 전체 너비 · 높이 56" />
      </div>
      <div className="flex h-55">
        <div className="w-40 shrink-0 border-r border-default bg-surface">
          <DiagramLabel name="사이드 내비" value="너비 240" />
        </div>
        <div className="flex min-w-0 flex-1 justify-center px-4 py-6">
          <div className="w-120 max-w-full rounded-md border border-default bg-subtle">
            <DiagramLabel
              name="본문"
              value="최대 960 · 가운데 정렬 · 좌우 space/4 · 위아래 space/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// 자리와 값이에요. 좁은 화면에서는 세로로 쌓아요(Figma 375).
function SpacingList() {
  return (
    <ul>
      {SPACING.map(({ place, value }) => (
        <li
          key={place}
          className="flex flex-col gap-6 border-b border-default p-3 md:flex-row"
        >
          <span className="flex-1 text-body text-default">{place}</span>
          <code className="font-mono text-body text-muted">{value}</code>
        </li>
      ))}
    </ul>
  );
}

export function LayoutPage() {
  return (
    <DocPage
      title="레이아웃"
      description="본문은 최대 960 너비로 가운데에 두고, 간격은 자리마다 정해진 토큰을 써요. Figma에서는 모든 묶음을 auto layout으로 만들어요."
      toc={TOC}
    >
      <DocSection
        id="structure"
        title="화면 구조"
        description="헤더와 사이드 내비는 화면 전체 너비를 쓰고, 960 규칙은 본문 영역에만 적용해요. (그림은 비율만 맞춘 축소본이에요)"
      >
        <StructureDiagram />
      </DocSection>
      <DocSection id="spacing" title="간격 기본값">
        <SpacingList />
      </DocSection>
      <DocSection
        id="button-group"
        title="버튼 묶음"
        description='오른쪽 정렬이고, 보조 버튼이 왼쪽, primary가 맨 오른쪽이에요. Dialog Footer도 같아요. 취소 버튼은 "취소"로 충분해요.'
      >
        <Stage spacing="compact">
          <div className="ml-auto flex gap-2">
            <Button variant="secondary">취소</Button>
            <Button>API 키 만들기</Button>
          </div>
        </Stage>
      </DocSection>
      <DocSection
        id="error"
        title="에러 표시"
        description="입력란 테두리를 border/danger로 바꾸고, 설명 자리에 고치는 방법을 caption + text/danger로 써요. 라벨 색은 바꾸지 않아요. Field가 이 묶음을 처리해요."
      >
        <Stage spacing="compact">
          <Field
            label="이메일"
            error="https://로 시작하는 주소를 입력하세요."
            invalid
            className="w-90 max-w-full"
          >
            <Input placeholder="you@example.com" />
          </Field>
        </Stage>
      </DocSection>
      <DocSection id="auto-layout" title="Figma auto layout">
        <RuleList rules={AUTO_LAYOUT_RULES} />
      </DocSection>
    </DocPage>
  );
}
