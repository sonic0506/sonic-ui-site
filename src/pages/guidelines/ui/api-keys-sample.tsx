import { Button, Card, Text } from '@xonic0506/sonic-ui';
import type { ReactNode } from 'react';

// 4가지 상태가 같은 자리, 같은 머리글을 쓰고 본문만 바뀌는 예시예요(Figma Sample · API keys).
export function ApiKeysSample({ children }: { children: ReactNode }) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between gap-2">
        <Text variant="title" as="h3">
          API 키
        </Text>
        <Button>API 키 만들기</Button>
      </div>
      {children}
    </Card>
  );
}
