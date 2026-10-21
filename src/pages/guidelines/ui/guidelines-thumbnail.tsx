import {
  Badge,
  Button,
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Field,
  Input,
} from '@xonic0506/sonic-ui';

import { ToastPreview } from '@/shared/ui';

import type { GuidelinesSlug } from '../model/guidelines-nav';

export function GuidelinesThumbnail({ slug }: { slug: GuidelinesSlug }) {
  switch (slug) {
    case 'principles':
      return (
        <div className="flex gap-2">
          <Button variant="secondary">취소</Button>
          <Button>저장</Button>
        </div>
      );
    case 'layout':
      return (
        <Card className="w-90 shrink-0">
          <CardHeader>
            <CardTitle>Card title</CardTitle>
            <CardDescription>한 줄 설명</CardDescription>
          </CardHeader>
          <CardBody>콘텐츠 영역. 인스턴스에서 교체해요.</CardBody>
          <CardFooter>
            <Button variant="secondary">취소</Button>
            <Button>저장</Button>
          </CardFooter>
        </Card>
      );
    case 'writing':
      return (
        <ToastPreview
          tone="success"
          title="API 키를 만들었어요"
          description="키는 지금 한 번만 보여 줘요."
        />
      );
    case 'data-states':
      return <Badge tone="success">정상 · 로딩 · 빈 상태 · 에러</Badge>;
    case 'accessibility':
      return (
        <Field
          label="이메일"
          error="https://로 시작하는 주소를 입력하세요."
          invalid
          className="w-80"
        >
          <Input placeholder="you@example.com" />
        </Field>
      );
  }
}
