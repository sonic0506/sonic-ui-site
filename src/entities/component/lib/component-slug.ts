import {
  COMPONENT_GROUPS,
  type ComponentName,
} from '../model/component-catalog';

// 'RadioGroup' → 'radio-group'
export function getComponentSlug(name: ComponentName) {
  return name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export function getComponentHref(name: ComponentName) {
  return `/components/${getComponentSlug(name)}`;
}

export function getComponentNames(): ComponentName[] {
  const names: ComponentName[] = [];
  for (const { items } of COMPONENT_GROUPS) {
    for (const { name } of items) names.push(name);
  }
  return names;
}

export function findComponentBySlug(slug: string): ComponentName | undefined {
  return getComponentNames().find((name) => getComponentSlug(name) === slug);
}
