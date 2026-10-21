import {
  Badge,
  Button,
  ToggleGroup,
  ToggleGroupItem,
} from '@xonic0506/sonic-ui';
import { ExternalLink, Moon, Sun } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { ComponentThumbnail } from '@/entities/component';
import { MascotImage } from '@/shared/assets';
import { SITE_LINKS } from '@/shared/config';
import { CodeBlock, IndexCard } from '@/shared/ui';

const SECTIONS = [
  {
    href: '/foundation',
    title: 'Foundation',
    description:
      '색, 글자, 간격, 모션, 아이콘처럼 모든 화면이 공유하는 값이에요. light와 dark를 함께 정의해요.',
    thumbnail: (
      <ToggleGroup defaultValue="light" aria-label="테마">
        <ToggleGroupItem value="light" iconOnly aria-label="라이트">
          <Sun />
        </ToggleGroupItem>
        <ToggleGroupItem value="dark" iconOnly aria-label="다크">
          <Moon />
        </ToggleGroupItem>
      </ToggleGroup>
    ),
  },
  {
    href: '/components',
    title: 'Components',
    description:
      'Button, Input, Dialog처럼 화면을 이루는 부품 30여 개의 구조, 상태, 사용법이에요.',
    thumbnail: <Button size="lg">Button</Button>,
  },
  {
    href: '/guidelines',
    title: 'Guidelines',
    description:
      '레이아웃, 문구, 데이터 화면의 네 가지 상태처럼 컴포넌트를 조합할 때 지킬 규칙이에요.',
    thumbnail: <Badge tone="success">정상 · 로딩 · 빈 상태 · 에러</Badge>,
  },
  {
    href: '/case-studies',
    title: 'Case Studies',
    description:
      'API 키 관리 화면처럼 규칙을 실제 화면에 적용한 예시와 그때 내린 결정이에요.',
    thumbnail: <ComponentThumbnail name="Menu" />,
  },
] as const;

export function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-240 flex-col gap-12 px-4 py-10 md:gap-16 md:py-16">
      <section className="flex flex-col-reverse gap-6 md:flex-row md:items-center md:gap-10">
        <div className="flex flex-1 flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-display">
              Figma에서 코드까지,
              <br />
              같은 규칙으로 만드는 화면
            </h1>
            <p className="text-body text-muted">
              Sonic UI는 사이드 프로젝트를 위한 디자인 시스템이에요. Figma 원본,
              DESIGN.md 규칙, React 컴포넌트를 함께 배포해서 AI도 같은 규칙으로
              화면을 만들어요.
            </p>
          </div>
          <div className="flex gap-2">
            {/* Button은 render가 <a>이면 role="button"을 붙여요. 링크로 읽히게 role을 되돌려요. */}
            <Button size="lg" role="link" render={<Link href="/components" />}>
              시작하기
            </Button>
            <Button
              size="lg"
              variant="secondary"
              role="link"
              render={
                <a href={SITE_LINKS.figma} target="_blank" rel="noreferrer" />
              }
            >
              Figma 보기
              <ExternalLink aria-hidden />
              <span className="sr-only">(새 탭)</span>
            </Button>
          </div>
          <CodeBlock language="bash" code="npm i @xonic0506/sonic-ui" />
        </div>
        {/* 장식 그림이에요. */}
        <Image
          src={MascotImage}
          alt=""
          width={280}
          height={280}
          sizes="(min-width: 768px) 280px, 160px"
          priority
          className="size-40 md:size-70"
        />
      </section>

      <section aria-labelledby="explore-title" className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2 id="explore-title" className="text-title">
            둘러보기
          </h2>
          <p className="text-body text-muted">
            규칙의 기초부터 실제 화면에 적용한 사례까지 네 갈래로 정리했어요.
          </p>
        </div>
        <div className="grid items-start gap-6 md:grid-cols-2">
          {SECTIONS.map((section) => (
            <IndexCard key={section.href} hasMobileThumbnail {...section} />
          ))}
        </div>
      </section>
    </main>
  );
}
