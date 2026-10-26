import { DocPage, IndexCard } from '@/shared/ui';

import { GUIDELINES_PAGES } from '../model/guidelines-nav';
import { GuidelinesThumbnail } from './guidelines-thumbnail';

export function GuidelinesPage() {
  return (
    <DocPage
      title="Guidelines"
      description="컴포넌트를 조합해 화면을 만들 때 지킬 규칙이에요. 사람도, 화면을 만드는 AI도 같은 규칙을 따라요."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {GUIDELINES_PAGES.map(({ slug, title, description }) => (
          <IndexCard
            key={slug}
            href={`/guidelines/${slug}`}
            title={title}
            description={description}
            thumbnail={<GuidelinesThumbnail slug={slug} />}
            hasMobileThumbnail
          />
        ))}
      </div>
    </DocPage>
  );
}
