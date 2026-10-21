import { notFound } from 'next/navigation';
import type { ComponentType } from 'react';

import {
  type ComponentName,
  findComponentBySlug,
  getComponentNames,
  getComponentSlug,
} from '@/entities/component';

import { ButtonDoc } from './button-doc';

// 문서를 쓴 컴포넌트만 둬요. 목록에는 있지만 문서가 없는 컴포넌트는 빌드 때 404 페이지로 만들어져요.
const COMPONENT_DOCS: readonly { name: ComponentName; Doc: ComponentType }[] = [
  { name: 'Button', Doc: ButtonDoc },
];

export function generateStaticParams() {
  // 모든 컴포넌트를 넘겨야 문서 없는 페이지가 prerender 중 notFound()로 404 상태가 돼요.
  // 목록에 없는 slug는 스트리밍 뒤 notFound()라 200 + noindex로 404 화면을 보여 줘요.
  return getComponentNames().map((name) => ({ slug: getComponentSlug(name) }));
}

export async function ComponentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const name = findComponentBySlug((await params).slug);
  const doc = COMPONENT_DOCS.find((entry) => entry.name === name);
  if (!doc) notFound();
  return <doc.Doc />;
}
