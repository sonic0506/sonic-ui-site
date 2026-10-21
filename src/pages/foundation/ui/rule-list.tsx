interface Rule {
  title: string;
  description: string;
}

export function RuleList({ rules }: { rules: readonly Rule[] }) {
  return (
    <ul>
      {rules.map((rule) => (
        <li
          key={rule.title}
          className="flex flex-col gap-1 border-b border-default py-4"
        >
          <span className="text-body-strong text-default">{rule.title}</span>
          <span className="text-body text-muted">{rule.description}</span>
        </li>
      ))}
    </ul>
  );
}
