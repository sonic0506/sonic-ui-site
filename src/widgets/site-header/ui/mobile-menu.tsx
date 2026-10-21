'use client';

import {
  Button,
  Dialog,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from '@xonic0506/sonic-ui';
import { Menu } from 'lucide-react';
import { useState } from 'react';

import { ThemeToggle } from './theme-toggle';
import { TopNav } from './top-nav';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger
        render={<Button variant="ghost" size="icon-md" aria-label="메뉴" />}
      >
        <Menu />
      </DialogTrigger>
      <DialogPopup>
        <DialogTitle>메뉴</DialogTitle>
        <TopNav
          className="flex flex-col gap-1"
          onNavigate={() => setIsOpen(false)}
        />
        <ThemeToggle />
      </DialogPopup>
    </Dialog>
  );
}
