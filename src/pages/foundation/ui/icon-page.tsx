import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Calendar,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  CircleAlert,
  CircleCheck,
  Copy,
  Download,
  Ellipsis,
  ExternalLink,
  Eye,
  EyeOff,
  File,
  ImageIcon,
  Inbox,
  Info,
  LoaderCircle,
  LogOut,
  type LucideIcon,
  Menu,
  Minus,
  Moon,
  Pencil,
  Plus,
  RefreshCw,
  Search,
  Settings,
  Sun,
  Trash2,
  TriangleAlert,
  Upload,
  User,
  X,
} from 'lucide-react';

import { DocPage, DocSection, type TocItem } from '@/shared/ui';

import { ICON_RULES, ICON_SIZES } from '../model/icon';
import { RuleList } from './rule-list';

const TOC: readonly TocItem[] = [
  { id: 'set', label: '세트' },
  { id: 'size', label: '크기' },
  { id: 'color', label: '색' },
  { id: 'rules', label: '규칙' },
];

// Figma Icon / <이름> 컴포넌트 37개와 같은 순서예요. 이름은 lucide 이름 그대로예요.
const ICON_SET: readonly { name: string; Icon: LucideIcon }[] = [
  { name: 'chevron-down', Icon: ChevronDown },
  { name: 'chevron-up', Icon: ChevronUp },
  { name: 'chevron-left', Icon: ChevronLeft },
  { name: 'chevron-right', Icon: ChevronRight },
  { name: 'arrow-left', Icon: ArrowLeft },
  { name: 'arrow-right', Icon: ArrowRight },
  { name: 'check', Icon: Check },
  { name: 'x', Icon: X },
  { name: 'plus', Icon: Plus },
  { name: 'minus', Icon: Minus },
  { name: 'search', Icon: Search },
  { name: 'ellipsis', Icon: Ellipsis },
  { name: 'menu', Icon: Menu },
  { name: 'settings', Icon: Settings },
  { name: 'user', Icon: User },
  { name: 'bell', Icon: Bell },
  { name: 'info', Icon: Info },
  { name: 'circle-alert', Icon: CircleAlert },
  { name: 'triangle-alert', Icon: TriangleAlert },
  { name: 'circle-check', Icon: CircleCheck },
  { name: 'loader-circle', Icon: LoaderCircle },
  { name: 'eye', Icon: Eye },
  { name: 'eye-off', Icon: EyeOff },
  { name: 'copy', Icon: Copy },
  { name: 'trash-2', Icon: Trash2 },
  { name: 'pencil', Icon: Pencil },
  { name: 'upload', Icon: Upload },
  { name: 'download', Icon: Download },
  { name: 'external-link', Icon: ExternalLink },
  { name: 'calendar', Icon: Calendar },
  { name: 'log-out', Icon: LogOut },
  { name: 'refresh-cw', Icon: RefreshCw },
  { name: 'inbox', Icon: Inbox },
  { name: 'file', Icon: File },
  { name: 'image', Icon: ImageIcon },
  { name: 'sun', Icon: Sun },
  { name: 'moon', Icon: Moon },
];

const SIZE_SAMPLES = [Search, Settings, CircleCheck] as const;

const ICON_COLORS = [
  { token: 'text/default', Icon: Info, colorClass: 'text-default' },
  { token: 'text/muted', Icon: Settings, colorClass: 'text-muted' },
  { token: 'text/success', Icon: CircleCheck, colorClass: 'text-success' },
  { token: 'text/danger', Icon: CircleAlert, colorClass: 'text-danger' },
] as const;

export function IconPage() {
  return (
    <DocPage
      title="Icon"
      description="아이콘은 Lucide만 써요. Sonic이 쓰는 37개가 Figma에 Icon / <이름> 컴포넌트로 있고, 코드에서는 lucide-react의 같은 이름을 써요."
      toc={TOC}
    >
      <DocSection
        id="set"
        title="세트"
        description="Figma 이름 = 코드 이름이에요. Icon / chevron-down → <ChevronDown />"
      >
        <ul className="flex flex-wrap gap-2 rounded-lg border border-default bg-surface p-4">
          {ICON_SET.map(({ name, Icon }) => (
            <li
              key={name}
              className="flex w-26 flex-col items-center gap-2 py-3"
            >
              <Icon className="size-6 text-default" />
              <code className="font-mono text-caption text-muted">{name}</code>
            </li>
          ))}
        </ul>
      </DocSection>
      <DocSection
        id="size"
        title="크기"
        description="space 토큰 크기만 써요. 선 두께는 크기에 비례해 줄어요(absoluteStrokeWidth는 쓰지 않아요)."
      >
        <ul>
          {ICON_SIZES.map(({ sizeClass, size, usage }) => (
            <li
              key={size}
              className="flex flex-col gap-6 border-b border-default p-3 md:flex-row md:items-center"
            >
              <div className="flex items-center gap-3 md:contents">
                <div className="flex items-center gap-3 md:h-6 md:w-30 md:shrink-0">
                  {SIZE_SAMPLES.map((Icon, index) => (
                    <Icon key={index} className={`text-default ${sizeClass}`} />
                  ))}
                </div>
                <code className="font-mono text-body text-default md:w-45 md:shrink-0">
                  {size}
                </code>
              </div>
              <span className="min-w-0 flex-1 text-body text-muted">
                {usage}
              </span>
            </li>
          ))}
        </ul>
      </DocSection>
      <DocSection
        id="color"
        title="색"
        description="코드에서는 글자색을 그대로 따라가요(currentColor). 아이콘에만 다른 색을 줄 때도 text 토큰만 써요."
      >
        <ul className="flex flex-wrap gap-6 rounded-lg border border-default bg-surface p-4">
          {ICON_COLORS.map(({ token, Icon, colorClass }) => (
            <li key={token} className="flex items-center gap-2">
              <Icon className={`size-6 ${colorClass}`} />
              <code className="font-mono text-caption text-muted">{token}</code>
            </li>
          ))}
        </ul>
      </DocSection>
      <DocSection id="rules" title="규칙">
        <RuleList rules={ICON_RULES} />
      </DocSection>
    </DocPage>
  );
}
