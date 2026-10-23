import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { cacheLife } from 'next/cache';

import { SITE, SITE_LINKS } from '@/shared/config';

import { getPageSections } from './site-pages';

const TEXT_HEADERS = { 'Content-Type': 'text/plain; charset=utf-8' };

// llms.txt(https://llmstxt.org): AI가 사이트를 한 번에 이해하도록 요약과 페이지 목록을 마크다운으로 줘요.
export function llmsTxt() {
  const sections = getPageSections()
    .map(
      ({ title, pages }) =>
        `## ${title}\n\n${pages
          .map(
            ({ title: pageTitle, path, description }) =>
              `- [${pageTitle}](${SITE.url}${path}): ${description}`,
          )
          .join('\n')}`,
    )
    .join('\n\n');

  const body = `# ${SITE.name}

> ${SITE.description}

Sonic UI is a Figma-first React design system (Base UI + Tailwind CSS v4, prebuilt CSS). The npm package ships DESIGN.md (design rules) and AI-RULES.md so AI coding assistants build screens with the same tokens and components.

## 시작하기

- 설치: \`npm install @xonic0506/sonic-ui lucide-react\`
- [npm 패키지 @xonic0506/sonic-ui](${SITE_LINKS.npm})
- [GitHub 저장소와 README](${SITE_LINKS.github})
- [Figma 원본](${SITE_LINKS.figma})
- [DESIGN.md·AI-RULES.md 전문](${SITE.url}/llms-full.txt): 토큰 표, 컴포넌트 스펙, 화면 규칙 전체

${sections}
`;
  return new Response(body, { headers: TEXT_HEADERS });
}

// 빌드 때 한 번 읽어 정적 파일로 만들어요('use cache'). 배포 서버에서 node_modules를 읽지 않아요.
async function readRuleDocs() {
  'use cache';
  cacheLife('max');
  const dir = join(process.cwd(), 'node_modules/@xonic0506/sonic-ui');
  return Promise.all([
    readFile(join(dir, 'DESIGN.md'), 'utf8'),
    readFile(join(dir, 'AI-RULES.md'), 'utf8'),
  ]);
}

// llms-full.txt: 패키지에 함께 배포하는 DESIGN.md와 AI-RULES.md 전문이에요.
export async function llmsFullTxt() {
  const [design, rules] = await readRuleDocs();
  const body = `# ${SITE.name} — DESIGN.md · AI-RULES.md 전문

> ${SITE.description}
> 출처: npm @xonic0506/sonic-ui 패키지 (${SITE_LINKS.npm})

${design}

---

${rules}
`;
  return new Response(body, { headers: TEXT_HEADERS });
}
