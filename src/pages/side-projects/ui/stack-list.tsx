import type { TechName } from '../model/tech-icons';
import { TechChip } from './tech-chip';

// '기술 스택' 섹션의 행: 칩(160) + 쓰는 곳. 좁은 화면에서는 위아래로 쌓여요.
export function StackList({
  items,
}: {
  items: readonly { name: TechName; description: string }[];
}) {
  return (
    <ul>
      {items.map(({ name, description }) => (
        <li
          key={name}
          className="flex flex-col items-start gap-2 border-b border-default py-4 md:flex-row md:items-center md:gap-4"
        >
          <div className="w-40 shrink-0">
            <TechChip name={name} />
          </div>
          <p className="text-body text-muted">{description}</p>
        </li>
      ))}
    </ul>
  );
}
