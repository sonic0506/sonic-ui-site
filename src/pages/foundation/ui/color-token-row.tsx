import type { ColorToken } from '../model/color-tokens';

const THEMES = ['light', 'dark'] as const;

export function ColorTokenRow({ token }: { token: ColorToken }) {
  const hasTextSample = token.name.startsWith('color/text/');
  return (
    <li className="flex flex-col gap-4 border-b border-default p-3 md:flex-row md:items-center">
      <div className="flex flex-1 items-center gap-4">
        {/* 페이지 테마와 상관없이 light·dark 값을 나란히 보여 줘요(data-theme은 그 상자에만 적용돼요). */}
        <div aria-hidden="true" className="flex shrink-0 gap-1">
          {THEMES.map((theme) => (
            <span
              key={theme}
              data-theme={theme}
              className={`flex size-10 items-center justify-center rounded-lg border text-body-strong ${token.swatchClass}`}
            >
              {hasTextSample && 'Aa'}
            </span>
          ))}
        </div>
        <div className="flex min-w-0 flex-col gap-1">
          <code className="font-mono text-body text-default">{token.name}</code>
          <span className="text-caption text-muted">{token.usage}</span>
        </div>
      </div>
      <dl className="flex shrink-0 flex-col gap-1 font-mono text-caption whitespace-pre text-muted md:w-55">
        <div className="flex">
          <dt>Light </dt>
          <dd> {token.light}</dd>
        </div>
        <div className="flex">
          <dt>Dark </dt>
          <dd> {token.dark}</dd>
        </div>
      </dl>
    </li>
  );
}
