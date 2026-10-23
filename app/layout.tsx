import './globals.css';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { AppProviders } from '@/app/providers';
import { SiteJsonLd } from '@/app/seo';
import { THEME_INIT_SCRIPT } from '@/entities/theme';
import { SITE, SITE_LINKS } from '@/shared/config';
import { OG_IMAGE } from '@/shared/lib';
import { SiteFooter } from '@/widgets/site-footer';
import { SiteHeader } from '@/widgets/site-header';

// 페이지마다 title·description·canonical을 따로 정해요(각 slice의 *Metadata). 여기는 공통 기본값이에요.
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: `%s · ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: 'sonic0506', url: SITE_LINKS.github }],
  keywords: [
    'Sonic UI',
    '디자인 시스템',
    'design system',
    'React',
    'Figma',
    'Base UI',
    'Tailwind CSS',
    'DESIGN.md',
    'AI',
  ],
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    locale: SITE.locale,
    title: SITE.title,
    description: SITE.description,
    images: [OG_IMAGE],
  },
  twitter: { card: 'summary_large_image', images: [OG_IMAGE.url] },
  ...(!SITE.isIndexable && { robots: { index: false, follow: false } }),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // 저장된 테마를 THEME_INIT_SCRIPT가 하이드레이션 전에 넣어서 data-theme 차이를 허용해요.
    <html lang="ko" suppressHydrationWarning className="scroll-pt-14">
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="bg-canvas font-sans text-default">
        <SiteJsonLd />
        {/* isolate: 앱 z-index가 body 아래에 그려지는 Dialog·Toast를 가리지 않게 해요. */}
        <div className="isolate flex min-h-dvh flex-col">
          <AppProviders>
            <SiteHeader />
            <div className="flex flex-1 flex-col">{children}</div>
            <SiteFooter />
          </AppProviders>
        </div>
      </body>
    </html>
  );
}
