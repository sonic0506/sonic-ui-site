export const SITE_SECTIONS = [
  { href: '/foundation', label: 'Foundation' },
  { href: '/components', label: 'Components' },
  { href: '/guidelines', label: 'Guidelines' },
  { href: '/case-studies', label: 'Case Studies' },
] as const;

// ponytail: sonic-ui가 package.json을 export하지 않아서 손으로 맞춰요. 버전을 올리면 같이 바꿔요.
export const SONIC_UI_VERSION = '0.5.0';
