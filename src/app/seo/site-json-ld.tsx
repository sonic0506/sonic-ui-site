import { SITE, SITE_LINKS } from '@/shared/config';

// 검색 엔진과 AI가 사이트와 패키지를 구조화된 정보로 읽도록 JSON-LD를 넣어요.
const JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      name: SITE.name,
      url: SITE.url,
      description: SITE.description,
      inLanguage: 'ko',
    },
    {
      '@type': 'SoftwareSourceCode',
      '@id': `${SITE.url}/#software`,
      name: '@xonic0506/sonic-ui',
      description:
        'Figma-first React design system (Base UI + Tailwind CSS v4). DESIGN.md와 AI-RULES.md를 함께 배포해요.',
      codeRepository: SITE_LINKS.github,
      programmingLanguage: ['TypeScript', 'React'],
      license: 'https://opensource.org/licenses/MIT',
      url: SITE.url,
      sameAs: [SITE_LINKS.npm, SITE_LINKS.github, SITE_LINKS.figma],
    },
  ],
};

export function SiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      // < 를 이스케이프해 문자열 안의 태그가 스크립트를 끝내지 못하게 해요(Next 문서 권장).
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(JSON_LD).replace(/</g, '\\u003c'),
      }}
    />
  );
}
