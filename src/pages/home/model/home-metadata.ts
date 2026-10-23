import { SITE } from '@/shared/config';
import { pageMetadata } from '@/shared/lib';

// 홈은 루트 기본 제목(SITE.title)을 그대로 써요.
export const homeMetadata = pageMetadata({
  description: SITE.description,
  path: '/',
});
