import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@xonic0506/sonic-ui';
import { Ellipsis } from 'lucide-react';

import {
  CodeBlock,
  DocPage,
  DocSection,
  DoDont,
  Stage,
  StageItem,
  type TocItem,
} from '@/shared/ui';

const TOC: readonly TocItem[] = [
  { id: 'variants', label: '종류' },
  { id: 'sizes', label: '크기' },
  { id: 'states', label: '상태' },
  { id: 'usage', label: '사용법' },
  { id: 'props', label: 'Props' },
];

const VARIANTS = ['primary', 'secondary', 'ghost', 'danger'] as const;
const TEXT_SIZES = ['sm', 'md', 'lg'] as const;
const ICON_SIZES = ['icon-sm', 'icon-md', 'icon-lg'] as const;

const PROPS = [
  {
    name: 'variant',
    values: 'primary · secondary · ghost · danger',
    defaultValue: 'primary',
  },
  {
    name: 'size',
    values: 'sm · md · lg · icon-sm · icon-md · icon-lg',
    defaultValue: 'md',
  },
  { name: 'disabled', values: 'boolean', defaultValue: 'false' },
  {
    name: 'loading',
    values: 'boolean. 스피너 + 클릭 막기 + aria-busy',
    defaultValue: 'false',
  },
  {
    name: 'aria-label',
    values: 'icon 크기일 때 필수 (타입으로 강제)',
    defaultValue: '—',
  },
] as const;

const EXAMPLE_CODE = `import { Button } from '@xonic0506/sonic-ui';
import { Ellipsis, Plus } from 'lucide-react';

<Button variant="secondary">취소</Button>
<Button><Plus />API 키 만들기</Button>
<Button size="icon-md" variant="ghost" aria-label="더 보기"><Ellipsis /></Button>`;

export function ButtonDoc() {
  return (
    <DocPage
      title="Button"
      description="동작을 실행해요. 한 화면에서 primary는 하나만 두고, 나머지는 secondary나 ghost를 써요. 다른 페이지로 이동할 때는 Link를 써요."
      toc={TOC}
    >
      <Stage>
        <Button variant="secondary">취소</Button>
        <Button>API 키 만들기</Button>
      </Stage>

      <DocSection
        id="variants"
        title="종류"
        description="variant로 강조 수준을 정해요. danger는 삭제처럼 되돌릴 수 없는 동작에만 써요."
      >
        <Stage align="start">
          {VARIANTS.map((variant) => (
            <StageItem key={variant} caption={variant}>
              <Button variant={variant}>저장</Button>
            </StageItem>
          ))}
        </Stage>
      </DocSection>

      <DocSection
        id="sizes"
        title="크기"
        description="sm 28 · md 32 · lg 40이에요. 아이콘만 있는 버튼은 icon 크기를 쓰고 aria-label을 꼭 달아요."
      >
        <Stage align="end">
          {TEXT_SIZES.map((size) => (
            <StageItem key={size} caption={size}>
              <Button size={size}>저장</Button>
            </StageItem>
          ))}
          {ICON_SIZES.map((size) => (
            <StageItem key={size} caption={size}>
              <Button size={size} aria-label="더 보기">
                <Ellipsis />
              </Button>
            </StageItem>
          ))}
        </Stage>
      </DocSection>

      <DocSection
        id="states"
        title="상태"
        description="hover와 focus는 컴포넌트가 처리해요. 진행 중인 동작에는 loading을 켜서 클릭을 막고 aria-busy를 알려요."
      >
        <Stage align="start">
          <StageItem caption="기본">
            <Button>저장</Button>
          </StageItem>
          <StageItem caption="disabled">
            <Button disabled>저장</Button>
          </StageItem>
          <StageItem caption="loading">
            <Button loading>저장 중</Button>
          </StageItem>
        </Stage>
      </DocSection>

      <DocSection id="usage" title="사용법">
        <div className="grid gap-6 md:grid-cols-2">
          <DoDont
            kind="do"
            description="한 화면에서 primary 버튼은 하나만 둬요. 보조 동작은 secondary로 왼쪽에 둬요."
          >
            <Button variant="secondary">취소</Button>
            <Button>저장</Button>
          </DoDont>
          <DoDont
            kind="dont"
            description="primary 버튼을 여러 개 나란히 두지 않아요. 무엇을 먼저 눌러야 할지 알 수 없어요."
          >
            <Button>내보내기</Button>
            <Button>저장</Button>
          </DoDont>
        </div>
      </DocSection>

      <DocSection id="props" title="Props">
        <Table className="min-w-160">
          <TableHeader>
            <TableRow>
              <TableHead className="w-40">prop</TableHead>
              <TableHead>값</TableHead>
              <TableHead className="w-40">기본값</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {PROPS.map((prop) => (
              <TableRow key={prop.name}>
                <TableCell>{prop.name}</TableCell>
                <TableCell>{prop.values}</TableCell>
                <TableCell>{prop.defaultValue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DocSection>

      <DocSection id="code" title="코드">
        <CodeBlock language="tsx" code={EXAMPLE_CODE} />
      </DocSection>
    </DocPage>
  );
}
