import { notFound } from 'next/navigation';
import type { ComponentType } from 'react';

import {
  type ComponentName,
  findComponentBySlug,
  getComponentNames,
  getComponentSlug,
} from '@/entities/component';

import { AccordionDoc } from './accordion-doc';
import { AlertDialogDoc } from './alert-dialog-doc';
import { AvatarDoc } from './avatar-doc';
import { BadgeDoc } from './badge-doc';
import { ButtonDoc } from './button-doc';
import { CardDoc } from './card-doc';
import { CheckboxDoc } from './checkbox-doc';
import { DataGridDoc } from './data-grid-doc';
import { DialogDoc } from './dialog-doc';
import { EmptyStateDoc } from './empty-state-doc';
import { ErrorPageDoc } from './error-page-doc';
import { ErrorStateDoc } from './error-state-doc';
import { FieldDoc } from './field-doc';
import { FileDropzoneDoc } from './file-dropzone-doc';
import { FileListDoc } from './file-list-doc';
import { InputDoc } from './input-doc';
import { LinkDoc } from './link-doc';
import { MenuDoc } from './menu-doc';
import { PaginationDoc } from './pagination-doc';
import { PopoverDoc } from './popover-doc';
import { ProgressDoc } from './progress-doc';
import { RadioGroupDoc } from './radio-group-doc';
import { SelectDoc } from './select-doc';
import { SeparatorDoc } from './separator-doc';
import { SkeletonDoc } from './skeleton-doc';
import { SwitchDoc } from './switch-doc';
import { TableDoc } from './table-doc';
import { TabsDoc } from './tabs-doc';
import { TextDoc } from './text-doc';
import { TextareaDoc } from './textarea-doc';
import { ToastDoc } from './toast-doc';
import { ToggleGroupDoc } from './toggle-group-doc';
import { TooltipDoc } from './tooltip-doc';

// 문서를 쓴 컴포넌트만 둬요. 목록에는 있지만 문서가 없는 컴포넌트는 빌드 때 404 페이지로 만들어져요.
const COMPONENT_DOCS: readonly { name: ComponentName; Doc: ComponentType }[] = [
  { name: 'Button', Doc: ButtonDoc },
  { name: 'Input', Doc: InputDoc },
  { name: 'Textarea', Doc: TextareaDoc },
  { name: 'Text', Doc: TextDoc },
  { name: 'Link', Doc: LinkDoc },
  { name: 'Card', Doc: CardDoc },
  { name: 'Avatar', Doc: AvatarDoc },
  { name: 'Separator', Doc: SeparatorDoc },
  { name: 'Field', Doc: FieldDoc },
  { name: 'Checkbox', Doc: CheckboxDoc },
  { name: 'RadioGroup', Doc: RadioGroupDoc },
  { name: 'Switch', Doc: SwitchDoc },
  { name: 'Select', Doc: SelectDoc },
  { name: 'FileDropzone', Doc: FileDropzoneDoc },
  { name: 'Dialog', Doc: DialogDoc },
  { name: 'AlertDialog', Doc: AlertDialogDoc },
  { name: 'Menu', Doc: MenuDoc },
  { name: 'Popover', Doc: PopoverDoc },
  { name: 'Tooltip', Doc: TooltipDoc },
  { name: 'Tabs', Doc: TabsDoc },
  { name: 'Table', Doc: TableDoc },
  { name: 'DataGrid', Doc: DataGridDoc },
  { name: 'Pagination', Doc: PaginationDoc },
  { name: 'ToggleGroup', Doc: ToggleGroupDoc },
  { name: 'Accordion', Doc: AccordionDoc },
  { name: 'Toast', Doc: ToastDoc },
  { name: 'Badge', Doc: BadgeDoc },
  { name: 'Progress', Doc: ProgressDoc },
  { name: 'Skeleton', Doc: SkeletonDoc },
  { name: 'EmptyState', Doc: EmptyStateDoc },
  { name: 'ErrorState', Doc: ErrorStateDoc },
  { name: 'ErrorPage', Doc: ErrorPageDoc },
  { name: 'FileList', Doc: FileListDoc },
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
