import { Button, EmptyState } from '@xonic0506/sonic-ui';
import { Inbox } from 'lucide-react';

import { DocTemplate } from './doc-template';

const TITLE = 'API 키가 없어요';
const DESCRIPTION = '키를 만들면 여기에서 사용량을 볼 수 있어요.';

export function EmptyStateDoc() {
  return (
    <DocTemplate
      title="EmptyState"
      description="무엇이 없는지와 다음에 할 행동 하나를 보여 줘요. 기본은 캐릭터 일러스트예요."
      variants={[
        {
          caption: 'illustration',
          demo: (
            <EmptyState
              title={TITLE}
              description={DESCRIPTION}
              action={<Button>API 키 만들기</Button>}
              className="w-100 max-w-full"
            />
          ),
        },
        {
          caption: 'icon',
          demo: (
            <EmptyState
              icon={<Inbox />}
              title={TITLE}
              description={DESCRIPTION}
              action={<Button>API 키 만들기</Button>}
              className="w-100 max-w-full"
            />
          ),
        },
      ]}
      rules={[
        {
          title: '좁은 곳은 icon',
          description: 'Popover, Select 안처럼 공간이 작으면 아이콘을 넘겨요.',
        },
        {
          title: '높이 확인',
          description:
            '일러스트가 있으면 정상 화면보다 높아질 수 있어요. 4가지 상태를 그릴 때 함께 확인해요.',
        },
      ]}
      props={[
        { name: 'title', values: '무엇이 없는지 (필수)', defaultValue: '—' },
        { name: 'description', values: '설명', defaultValue: '—' },
        {
          name: 'action',
          values: '다음 행동 하나 (보통 primary Button)',
          defaultValue: '—',
        },
        {
          name: 'icon',
          values: '넘기면 일러스트 대신 아이콘 원',
          defaultValue: '일러스트',
        },
      ]}
      code={`<EmptyState title="API 키가 없어요" description="키를 만들면 여기에서 사용량을 볼 수 있어요." action={<Button>API 키 만들기</Button>} />
<EmptyState icon={<Inbox />} title="결과가 없어요" />`}
    />
  );
}
