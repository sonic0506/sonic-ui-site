import './globals.css';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { AppProviders } from '@/app/providers';
import { THEME_INIT_SCRIPT } from '@/entities/theme';
import { SiteFooter } from '@/widgets/site-footer';
import { SiteHeader } from '@/widgets/site-header';

export const metadata: Metadata = { title: 'Sonic UI' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // 저장된 테마를 THEME_INIT_SCRIPT가 하이드레이션 전에 넣어서 data-theme 차이를 허용해요.
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="bg-canvas font-sans text-default">
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
