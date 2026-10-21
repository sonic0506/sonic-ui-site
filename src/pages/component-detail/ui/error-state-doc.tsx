'use client';

import { ErrorState } from '@xonic0506/sonic-ui';
import { TriangleAlert } from 'lucide-react';

import { DocTemplate } from './doc-template';

const TITLE = '불러오지 못했어요';
const DESCRIPTION = '네트워크 연결을 확인하고 다시 시도해 주세요.';

// 예시라서 다시 시도해도 아무 일도 하지 않아요.
function ignoreRetry() {}

export function ErrorStateDoc() {
  return (
    <DocTemplate
      title="ErrorState"
      description="카드나 목록 하나를 불러오지 못했을 때 무엇이 실패했는지와 다시 시도할 방법을 보여 줘요."
      variants={[
        {
          caption: 'illustration',
          demo: (
            <ErrorState
              title={TITLE}
              description={DESCRIPTION}
              onRetry={ignoreRetry}
              className="w-100 max-w-full"
            />
          ),
        },
        {
          caption: 'icon',
          demo: (
            <ErrorState
              icon={<TriangleAlert />}
              title={TITLE}
              description={DESCRIPTION}
              onRetry={ignoreRetry}
              className="w-100 max-w-full"
            />
          ),
        },
      ]}
      rules={[
        {
          title: '사과하지 않아요',
          description: '무엇이 실패했고 어떻게 하면 되는지 써요.',
        },
        {
          title: '페이지 전체 실패는 ErrorPage',
          description: '카드 하나가 실패하면 ErrorState예요.',
        },
      ]}
      props={[
        {
          name: 'title · description',
          values: '무엇이 실패했고 어떻게 하면 되는지',
          defaultValue: '—',
        },
        {
          name: 'onRetry',
          values: '있으면 secondary 다시 시도 버튼',
          defaultValue: '—',
        },
        { name: 'retryLabel', values: '버튼 문구', defaultValue: '다시 시도' },
        {
          name: 'icon',
          values: '넘기면 일러스트 대신 아이콘 원',
          defaultValue: '일러스트',
        },
      ]}
      code={`<ErrorState title="API 키를 불러오지 못했어요" description="네트워크 연결을 확인하고 다시 시도해 주세요." onRetry={refetch} />`}
    />
  );
}
