import type { Metadata } from 'next';

import {
  COMPONENT_GROUPS,
  type ComponentName,
  findComponentBySlug,
  getComponentHref,
} from '@/entities/component';
import { pageMetadata } from '@/shared/lib';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const name = findComponentBySlug((await params).slug);
  if (!name) return {};
  const item = COMPONENT_GROUPS.flatMap(
    (group): readonly { name: ComponentName; description: string }[] =>
      group.items,
  ).find((candidate) => candidate.name === name);
  return pageMetadata({
    title: `${name} · Components`,
    description: `Sonic UI ${name} 컴포넌트예요. ${item?.description ?? ''} 변형, 사용법, Props, 코드 예시를 담았어요.`,
    path: getComponentHref(name),
  });
}
