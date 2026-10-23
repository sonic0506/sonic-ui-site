import type { Metadata } from 'next';

import { SITE } from '@/shared/config';

export const OG_IMAGE = {
  url: '/opengraph-image.png',
  width: 1200,
  height: 630,
  alt: SITE.title,
} as const;

interface PageMetadataInput {
  /** 없으면 루트의 기본 제목(SITE.title)을 써요(홈) */
  title?: string;
  description: string;
  /** canonical·og:url. 예: '/foundation/color' */
  path: string;
}

// 페이지 metadata예요. openGraph는 부모 것을 통째로 덮어써서(얕은 병합) 공통 값과 이미지를 다시 넣어요.
export function pageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const fullTitle = title ? `${title} · ${SITE.name}` : SITE.title;
  return {
    ...(title && { title }),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: SITE.name,
      locale: SITE.locale,
      title: fullTitle,
      description,
      url: path,
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
