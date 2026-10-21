import { Badge, Button } from '@xonic0506/sonic-ui';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { LogoMarkImage } from '@/shared/assets';

import { SONIC_UI_VERSION } from '../model/site-sections';
import { MobileMenu } from './mobile-menu';
import { ThemeToggle } from './theme-toggle';
import { TopNav } from './top-nav';

export function SiteHeader() {
  return (
    <header className="flex h-14 items-center gap-2 border-b border-default bg-surface px-4 md:gap-6 md:px-6">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2 text-default">
          {/* 장식이에요. 옆의 "Sonic UI" 글자가 이름을 전해요. */}
          <Image src={LogoMarkImage} alt="" width={24} height={24} />
          <span className="text-title">Sonic UI</span>
        </Link>
        <Badge>v{SONIC_UI_VERSION}</Badge>
      </div>
      <TopNav className="hidden gap-1 md:flex" />
      <div className="flex-1" />
      <div className="flex items-center gap-2">
        {/* 검색은 아직 없어요. 기능이 생기면 연결해요. */}
        <Button variant="ghost" size="icon-md" aria-label="검색">
          <Search />
        </Button>
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
