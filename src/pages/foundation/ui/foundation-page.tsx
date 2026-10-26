import { DocPage, IndexCard } from '@/shared/ui';

import { FOUNDATION_PAGES } from '../model/foundation-nav';
import { FoundationThumbnail } from './foundation-thumbnail';

export function FoundationPage() {
  return (
    <DocPage
      title="Foundation"
      description="모든 화면이 공유하는 값이에요. Figma Variables가 그대로 CSS 변수(--sn-*)가 되고, light와 dark를 함께 정의해요. 토큰 밖의 값은 쓰지 않아요."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {FOUNDATION_PAGES.map(({ slug, title, description }) => (
          <IndexCard
            key={slug}
            href={`/foundation/${slug}`}
            title={title}
            description={description}
            thumbnail={<FoundationThumbnail slug={slug} />}
            hasMobileThumbnail
          />
        ))}
      </div>
    </DocPage>
  );
}
