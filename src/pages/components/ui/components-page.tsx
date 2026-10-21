import {
  COMPONENT_GROUPS,
  ComponentThumbnail,
  getComponentHref,
} from '@/entities/component';
import { DocPage, IndexCard } from '@/shared/ui';

export function ComponentsPage() {
  return (
    <DocPage
      title="Components"
      description="화면을 이루는 부품이에요. 모두 Base UI 위에 만들어 키보드와 화면 낭독기를 지원하고, Figma 컴포넌트 속성과 React props 이름이 같아요."
    >
      {COMPONENT_GROUPS.map(({ title, items }) => (
        <section key={title} className="flex flex-col gap-4">
          <h2 className="text-title">{title}</h2>
          <div className="grid items-start gap-x-6 gap-y-4 md:grid-cols-2">
            {items.map(({ name, description }) => (
              <IndexCard
                key={name}
                href={getComponentHref(name)}
                title={name}
                description={description}
                thumbnail={<ComponentThumbnail name={name} />}
              />
            ))}
          </div>
        </section>
      ))}
    </DocPage>
  );
}
