import type { MetadataRoute } from 'next';

import { SITE } from '@/shared/config';

import { getSitePaths } from './site-pages';

export function sitemap(): MetadataRoute.Sitemap {
  return getSitePaths().map((path) => ({
    url: `${SITE.url}${path === '/' ? '' : path}`,
    priority: path === '/' ? 1 : path.split('/').length === 2 ? 0.8 : 0.6,
  }));
}
