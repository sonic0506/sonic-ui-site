import type { MetadataRoute } from 'next';

import { SITE } from '@/shared/config';

// production은 모든 검색·AI 크롤러(GPTBot, ClaudeBot, PerplexityBot, Google-Extended 등)를 허용해요.
// preview 배포는 중복 콘텐츠가 되지 않게 모두 막아요.
export function robots(): MetadataRoute.Robots {
  if (!SITE.isIndexable) return { rules: { userAgent: '*', disallow: '/' } };
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
