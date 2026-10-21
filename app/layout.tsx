import './globals.css';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { AppProviders } from '@/app/providers';

export const metadata: Metadata = { title: 'Sonic UI' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-canvas font-sans text-default">
        {/* isolate: 앱 z-index가 body 아래에 그려지는 Dialog·Toast를 가리지 않게 해요. */}
        <div className="isolate">
          <AppProviders>{children}</AppProviders>
        </div>
      </body>
    </html>
  );
}
