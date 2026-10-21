'use client';

import { ErrorState } from '@xonic0506/sonic-ui';

// 예시라서 다시 시도해도 아무 일도 하지 않아요.
function ignoreRetry() {}

export function ApiKeysErrorState() {
  return (
    <ErrorState
      title="API 키를 불러오지 못했어요"
      description="네트워크 연결을 확인하고 다시 시도해 주세요."
      onRetry={ignoreRetry}
    />
  );
}
