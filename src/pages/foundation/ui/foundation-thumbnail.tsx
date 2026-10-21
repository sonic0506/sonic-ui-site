import { Progress, Text } from '@xonic0506/sonic-ui';
import { Bell, Calendar, Search, Settings, User } from 'lucide-react';
import Image from 'next/image';

import { EmptyImage } from '@/shared/assets';

import type { FoundationSlug } from '../model/foundation-nav';

const SWATCH_CLASSES = [
  'bg-primary',
  'bg-success',
  'bg-warning',
  'bg-danger',
  'bg-inverse',
] as const;
const SPACING_CLASSES = ['size-4', 'size-6', 'size-8', 'size-10'] as const;

export function FoundationThumbnail({ slug }: { slug: FoundationSlug }) {
  switch (slug) {
    case 'color':
      return (
        <div className="flex gap-2">
          {SWATCH_CLASSES.map((swatchClass) => (
            <span
              key={swatchClass}
              className={`size-8 rounded-full ${swatchClass}`}
            />
          ))}
        </div>
      );
    case 'typography':
      return <Text variant="display">Aa 가나다 123</Text>;
    case 'spacing-radius':
      return (
        <div className="flex items-end gap-2">
          {SPACING_CLASSES.map((sizeClass) => (
            <span
              key={sizeClass}
              className={`rounded-sm bg-primary ${sizeClass}`}
            />
          ))}
        </div>
      );
    case 'motion':
      return <Progress value={50} label="내보내는 중" className="w-60" />;
    case 'icon':
      return (
        <div className="flex gap-4 [&_svg]:size-6">
          <Search />
          <Settings />
          <Bell />
          <User />
          <Calendar />
        </div>
      );
    case 'illustration':
      return <Image src={EmptyImage} alt="" width={120} height={120} />;
  }
}
