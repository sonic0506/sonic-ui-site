import type { TypeSpec } from '../model/typography';

// 왼쪽은 견본, 오른쪽은 이름·값·쓰는 곳이에요. 좁은 화면에서는 위아래로 쌓아요.
export function SpecRow({ spec }: { spec: TypeSpec }) {
  return (
    <li className="flex flex-col gap-6 border-b border-default px-3 py-4 md:flex-row md:items-center">
      <p className={`min-w-0 flex-1 text-default ${spec.sampleClass}`}>
        {spec.sample}
      </p>
      <div className="flex shrink-0 flex-col gap-1 md:w-65">
        <code className="font-mono text-body text-default">{spec.name}</code>
        <span className="font-mono text-caption text-muted">{spec.value}</span>
        <span className="text-caption text-muted">{spec.usage}</span>
      </div>
    </li>
  );
}
