import { env } from './env';

function resolveSiteUrl() {
  if (env.NEXT_PUBLIC_SITE_URL) return env.NEXT_PUBLIC_SITE_URL;
  if (env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`;
  return 'http://localhost:3000';
}

// 검색 결과·공유 카드·AI 답변에 쓰이는 사이트 소개예요. 페이지마다 따로 쓰는 문구는 각 slice가 정해요.
export const SITE = {
  name: 'Sonic UI',
  title: 'Sonic UI — Figma에서 코드까지 같은 규칙으로 만드는 디자인 시스템',
  description:
    'Sonic UI는 React 디자인 시스템이에요. Figma 원본, DESIGN.md 규칙, React 컴포넌트(@xonic0506/sonic-ui)를 함께 배포해서 사람과 AI가 같은 규칙으로 화면을 만들어요.',
  locale: 'ko_KR',
  url: resolveSiteUrl().replace(/\/$/, ''),
  // preview 배포는 검색에 잡히지 않게 해요. Vercel 밖(로컬·직접 배포)은 허용해요.
  isIndexable: env.NEXT_PUBLIC_VERCEL_ENV !== 'preview',
} as const;
