import type { StaticImageData } from 'next/image';

import {
  SonicHarnessBeThumbnailImage,
  SonicHarnessFeThumbnailImage,
  SonicUiSiteThumbnailImage,
  SonicUiThumbnailImage,
} from '@/shared/assets';
import { SITE_LINKS } from '@/shared/config';

import type { TechName } from './tech-icons';

export type ProjectLinkKind = 'github' | 'npm' | 'figma';

// 목록 카드·사이드바·sitemap이 함께 쓰는 정보만 둬요. 상세 내용은 ui/<slug>-detail.tsx에 직접 써요.
export interface SideProject {
  slug: string;
  name: string;
  description: string;
  /** README 대표 이미지(320px로 줄인 webp) */
  thumbnail: StaticImageData;
  links: readonly { kind: ProjectLinkKind; href: string }[];
  /** 대표 언어·라이브러리. 목록 카드와 상세 상단에 칩으로 보여요 */
  stack: readonly TechName[];
}

// Figma Side Projects(137:11439)의 순서·문구예요.
export const SIDE_PROJECTS: readonly SideProject[] = [
  {
    slug: 'sonic-ui',
    name: 'Sonic UI',
    description:
      'Figma를 원본으로 하는 React 디자인 시스템이에요. 토큰, Core 컴포넌트, AI가 읽는 디자인 규칙을 npm 패키지 하나로 배포해요.',
    thumbnail: SonicUiThumbnailImage,
    links: [
      { kind: 'github', href: SITE_LINKS.github },
      { kind: 'npm', href: SITE_LINKS.npm },
      { kind: 'figma', href: SITE_LINKS.figma },
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Vitest'],
  },
  {
    slug: 'sonic-harness-fe',
    name: 'Sonic Harness FE',
    description:
      'React + TypeScript 코딩 규칙을 글이 아니라 도구로 지키게 하는 Claude Code 플러그인이에요.',
    thumbnail: SonicHarnessFeThumbnailImage,
    links: [
      { kind: 'github', href: 'https://github.com/sonic0506/sonic-harness-fe' },
    ],
    stack: ['Claude Code', 'ESLint', 'Prettier', 'TypeScript', 'Node.js'],
  },
  {
    slug: 'sonic-harness-be',
    name: 'Sonic Harness BE',
    description:
      'NestJS + TypeScript 코딩 규칙을 글이 아니라 도구로 지키게 하는 Claude Code 플러그인이에요. Sonic Harness FE의 백엔드판이에요.',
    thumbnail: SonicHarnessBeThumbnailImage,
    links: [
      { kind: 'github', href: 'https://github.com/sonic0506/sonic-harness-be' },
    ],
    stack: ['Claude Code', 'NestJS', 'TypeORM', 'PostgreSQL', 'ESLint'],
  },
  {
    slug: 'sonic-ui-site',
    name: 'Sonic UI Site',
    description:
      'Sonic UI의 토큰, 컴포넌트, 가이드라인, 화면 사례를 소개하는 이 사이트예요. sonic-ui를 실제로 쓰는 첫 프로젝트예요.',
    thumbnail: SonicUiSiteThumbnailImage,
    links: [
      { kind: 'github', href: 'https://github.com/sonic0506/sonic-ui-site' },
      {
        kind: 'figma',
        href: 'https://www.figma.com/design/X5weWymEMncXZs9f7FFY8T',
      },
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'TanStack Query'],
  },
];

export function findSideProject(slug: string) {
  return SIDE_PROJECTS.find((project) => project.slug === slug);
}
