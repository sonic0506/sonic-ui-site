import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Theme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'sonic-ui-site-theme';

export function isTheme(value: string): value is Theme {
  return value === 'light' || value === 'dark';
}

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'light',
      setTheme: (theme) => {
        document.documentElement.dataset.theme = theme;
        set({ theme });
      },
    }),
    {
      name: THEME_STORAGE_KEY,
      partialize: (state) => ({ theme: state.theme }),
      // 서버 HTML(light)과 첫 렌더를 맞추려고, 저장 값은 마운트 뒤 rehydrate()로 읽어요.
      skipHydration: true,
    },
  ),
);

// 첫 그리기 전에 저장된 테마를 <html data-theme>에 넣어 깜빡임을 막아요(app/layout의 <head>).
export const THEME_INIT_SCRIPT = `try{var s=JSON.parse(localStorage.getItem('${THEME_STORAGE_KEY}')||'{}').state;if(s&&(s.theme==='light'||s.theme==='dark'))document.documentElement.dataset.theme=s.theme}catch(e){}`;
