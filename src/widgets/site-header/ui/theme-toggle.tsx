'use client';

import { ToggleGroup, ToggleGroupItem } from '@xonic0506/sonic-ui';
import { Moon, Sun } from 'lucide-react';
import { useEffect } from 'react';

import { isTheme, useThemeStore } from '@/entities/theme';

export function ThemeToggle() {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  useEffect(() => {
    void useThemeStore.persist.rehydrate();
  }, []);

  const handleThemeChange = (value: string) => {
    if (isTheme(value)) setTheme(value);
  };

  return (
    <ToggleGroup
      aria-label="테마"
      className="self-start"
      value={theme}
      onValueChange={handleThemeChange}
    >
      <ToggleGroupItem value="light" iconOnly aria-label="라이트">
        <Sun />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" iconOnly aria-label="다크">
        <Moon />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
