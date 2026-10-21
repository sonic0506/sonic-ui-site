import { illustrations } from '@xonic0506/sonic-ui';
import Image from 'next/image';

import { DocPage, DocSection, RuleList, type TocItem } from '@/shared/ui';

import { ILLUSTRATION_RULES, ILLUSTRATION_SIZES } from '../model/illustration';

const TOC: readonly TocItem[] = [
  { id: 'set', label: '세트' },
  { id: 'size', label: '크기' },
  { id: 'rules', label: '규칙' },
];

// 에러 페이지 그림은 실제 표시 크기(320)의 절반으로 보여 줘요.
const ILLUSTRATIONS: readonly {
  name: keyof typeof illustrations;
  usage: string;
  width: number;
  height: number;
}[] = [
  {
    name: 'empty',
    usage: 'EmptyState 기본',
    width: 120,
    height: 120,
  },
  {
    name: 'error',
    usage: 'ErrorState 기본',
    width: 120,
    height: 120,
  },
  {
    name: 'error-404',
    usage: 'ErrorPage 404',
    width: 160,
    height: 107,
  },
  {
    name: 'error-403',
    usage: 'ErrorPage 403',
    width: 160,
    height: 107,
  },
  {
    name: 'error-500',
    usage: 'ErrorPage 500',
    width: 160,
    height: 107,
  },
];

const THEMES = ['light', 'dark'] as const;

export function IllustrationPage() {
  return (
    <DocPage
      title="Illustration"
      description="빈 상태, 불러오기 실패, 에러 페이지에는 Sonic 캐릭터를 써요. 색 토큰 규칙 밖의 이미지 자산이라 이 세 곳에만 써요."
      toc={TOC}
    >
      <DocSection
        id="set"
        title="세트"
        description="배경이 투명해서 Light와 Dark에서 같은 그림을 써요."
      >
        {THEMES.map((theme) => (
          <ul
            key={theme}
            data-theme={theme}
            aria-label={theme === 'light' ? 'Light' : 'Dark'}
            className="flex flex-wrap items-end gap-6 rounded-lg border border-default bg-surface p-6 md:flex-nowrap md:justify-between"
          >
            {ILLUSTRATIONS.map(({ name, usage, width, height }) => (
              <li key={name} className="flex flex-col items-center gap-2">
                <Image
                  src={illustrations[name]}
                  alt={name}
                  width={width}
                  height={height}
                />
                <code className="font-mono text-caption text-default">
                  {name}
                </code>
                <span className="text-caption text-muted">{usage}</span>
              </li>
            ))}
          </ul>
        ))}
      </DocSection>
      <DocSection
        id="size"
        title="크기"
        description="그림 비율은 그대로 두고 너비만 정해요. 이미지 파일은 표시 크기의 2배라 고해상도 화면에서도 선명해요."
      >
        <ul>
          {ILLUSTRATION_SIZES.map(({ size, usage }) => (
            <li
              key={size}
              className="flex flex-col gap-6 border-b border-default p-3 md:flex-row"
            >
              <code className="font-mono text-body text-default md:w-80 md:shrink-0">
                {size}
              </code>
              <span className="min-w-0 flex-1 text-body text-muted">
                {usage}
              </span>
            </li>
          ))}
        </ul>
      </DocSection>
      <DocSection id="rules" title="규칙">
        <RuleList rules={ILLUSTRATION_RULES} />
      </DocSection>
    </DocPage>
  );
}
