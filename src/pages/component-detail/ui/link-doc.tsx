import { Link } from '@xonic0506/sonic-ui';

import { DocTemplate } from './doc-template';

export function LinkDoc() {
  return (
    <DocTemplate
      title="Link"
      description="다른 페이지나 문서로 이동할 때 써요. 동작을 실행하면 Button을 써요."
      variants={[
        {
          caption: 'default',
          demo: (
            <Link href="https://github.com/sonic0506/sonic-design-system/blob/main/DESIGN.md">
              DESIGN.md 보기
            </Link>
          ),
        },
        {
          caption: 'external',
          demo: (
            <Link
              href="https://github.com/sonic0506/sonic-design-system/blob/main/DESIGN.md"
              external
            >
              DESIGN.md 보기
            </Link>
          ),
        },
      ]}
      rules={[
        {
          title: '코발트를 쓰지 않아요',
          description:
            'text/default + 밑줄(offset 2px)이에요. 강조는 한 곳에만 쓰는 원칙 때문이에요.',
        },
        {
          title: 'hover는 text/muted',
          description: '포커스 링은 공통 규칙(2px, offset 2px)이에요.',
        },
      ]}
      props={[
        { name: 'href', values: '이동할 주소', defaultValue: '—' },
        {
          name: 'external',
          values: '새 탭으로 열고 external-link 아이콘을 붙여요',
          defaultValue: 'false',
        },
        {
          name: 'render',
          values: '다른 링크 컴포넌트로 렌더링 (예: Next.js Link)',
          defaultValue: '—',
        },
      ]}
      code={`<Link href="/docs">DESIGN.md 보기</Link>
<Link href="https://base-ui.com" external>Base UI 문서</Link>
<Link render={<NextLink href="/docs" />}>문서</Link>`}
    />
  );
}
