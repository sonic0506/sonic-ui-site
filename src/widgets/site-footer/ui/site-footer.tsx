import { Link } from '@xonic0506/sonic-ui';
import Image from 'next/image';

import { LogoMarkImage } from '@/shared/assets';

const EXTERNAL_LINKS = [
  { href: 'https://github.com/sonic0506/sonic-design-system', label: 'GitHub' },
  { href: 'https://www.npmjs.com/package/@xonic0506/sonic-ui', label: 'npm' },
  {
    href: 'https://www.figma.com/design/XifnZsjqJWJqFmAmrM6p3u',
    label: 'Figma',
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="flex flex-col items-start gap-3 border-t border-default bg-surface px-6 py-8 md:h-20 md:flex-row md:items-center md:gap-6 md:py-0">
      <div className="flex items-center gap-2 md:flex-1">
        <Image src={LogoMarkImage} alt="" width={16} height={16} />
        <p className="text-caption text-muted">© 2026 Sonic UI · MIT License</p>
      </div>
      <div className="flex gap-4 text-body">
        {EXTERNAL_LINKS.map(({ href, label }) => (
          <Link key={href} href={href} external>
            {label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
