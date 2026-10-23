import { TECH_ICONS, type TechName } from '../model/tech-icons';

// Figma `Site / Tech Chip`: bg/subtle + radius/sm, 아이콘 16 + caption.
export function TechChip({ name }: { name: TechName }) {
  return (
    <span className="flex h-6 w-fit items-center gap-1 rounded-sm bg-subtle px-2 text-caption text-default">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="size-4 shrink-0 fill-current"
      >
        <path d={TECH_ICONS[name]} />
      </svg>
      {name}
    </span>
  );
}

export function TechChipList({ names }: { names: readonly TechName[] }) {
  return (
    <ul aria-label="기술 스택" className="flex flex-wrap gap-2">
      {names.map((name) => (
        <li key={name}>
          <TechChip name={name} />
        </li>
      ))}
    </ul>
  );
}
