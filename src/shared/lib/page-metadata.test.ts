import { describe, expect, it } from 'vitest';

import { pageMetadata } from './page-metadata';

describe('pageMetadata', () => {
  it('제목이 있으면 페이지 제목과 공유 카드 제목에 사이트 이름을 붙여요', () => {
    const metadata = pageMetadata({
      title: 'Color · Foundation',
      description: '색 토큰',
      path: '/foundation/color',
    });
    expect(metadata.title).toBe('Color · Foundation');
    expect(metadata.openGraph?.title).toBe('Color · Foundation · Sonic UI');
    expect(metadata.alternates?.canonical).toBe('/foundation/color');
  });

  it('제목이 없으면 기본 제목을 쓰고 title은 비워 둬요', () => {
    const metadata = pageMetadata({ description: '홈', path: '/' });
    expect(metadata.title).toBeUndefined();
    expect(metadata.openGraph?.title).toContain('Sonic UI —');
  });

  it('하위 페이지도 공유 이미지를 잃지 않아요', () => {
    const metadata = pageMetadata({
      title: 'Button',
      description: '버튼',
      path: '/components/button',
    });
    expect(metadata.openGraph?.images).toEqual([
      expect.objectContaining({ url: '/opengraph-image.png' }),
    ]);
  });
});
