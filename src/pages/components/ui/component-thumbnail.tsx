'use client';

import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
  Avatar,
  Badge,
  Button,
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  EmptyState,
  ErrorState,
  Field,
  FileDropzone,
  FileList,
  Input,
  Link,
  Progress,
  Radio,
  RadioGroup,
  Select,
  Separator,
  Skeleton,
  Switch,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsList,
  Text,
  Textarea,
  ToggleGroup,
  ToggleGroupItem,
} from '@xonic0506/sonic-ui';
import {
  CircleCheck,
  Copy,
  Inbox,
  Pencil,
  Trash2,
  TriangleAlert,
  X,
} from 'lucide-react';
import Image from 'next/image';

import { Error404Image } from '@/shared/assets';

import type { ComponentName } from '../model/components-catalog';

// 썸네일은 inert라 누를 수 없어요. 콜백은 타입을 채우는 용도예요.
const noop = () => {};

const API_KEY_ROWS = [
  { name: 'production', status: '활성', requests: '12,480' },
  { name: 'github-actions', status: '활성', requests: '3,215' },
  { name: 'local-dev', status: '만료 예정', requests: '0' },
] as const;

const FAQ_ITEMS = [
  {
    value: 'count',
    title: '키는 몇 개까지 만들 수 있나요?',
    content:
      '프로젝트마다 10개까지 만들 수 있어요. 쓰지 않는 키는 삭제해 주세요.',
  },
  { value: 'restore', title: '삭제한 키를 되살릴 수 있나요?', content: '' },
  { value: 'share', title: '키를 다른 사람과 같이 써도 되나요?', content: '' },
] as const;

// 오버레이는 body 위에 떠서 카드 안에 넣을 수 없어요. 같은 토큰으로 열린 모양만 그려요.
function DialogPreview({ isAlert }: { isAlert: boolean }) {
  return (
    <div className="flex size-full items-center justify-center bg-overlay">
      <div className="flex w-110 flex-col gap-4 rounded-lg border border-default bg-surface p-6">
        <div className="flex flex-col gap-1">
          <p className="text-title">
            {isAlert ? 'API 키를 삭제할까요?' : 'API 키 만들기'}
          </p>
          <p className="text-caption text-muted">
            {isAlert
              ? '이 키로 보내는 요청이 바로 실패해요. 삭제하면 되돌릴 수 없어요.'
              : '키는 만든 직후 한 번만 보여 줘요.'}
          </p>
        </div>
        {!isAlert && (
          <Field label="키 이름">
            <Input placeholder="Placeholder" />
          </Field>
        )}
        <div className="flex justify-end gap-2">
          <Button variant="secondary">취소</Button>
          {isAlert ? (
            <Button variant="danger">삭제</Button>
          ) : (
            <Button>만들기</Button>
          )}
        </div>
      </div>
    </div>
  );
}

function MenuPreview() {
  const itemClass =
    'flex h-8 items-center gap-2 rounded-sm px-2 [&_svg]:size-4';
  return (
    <div className="flex w-50 flex-col rounded-md border border-default bg-surface p-1 text-body">
      <span className={itemClass}>
        <Pencil />
        이름 바꾸기
      </span>
      <span className={`${itemClass} bg-subtle`}>
        <Copy />키 복사
      </span>
      <Separator className="my-1" />
      <span className={`${itemClass} text-danger`}>
        <Trash2 />
        삭제
      </span>
    </div>
  );
}

function PopoverPreview() {
  return (
    <div className="flex w-80 flex-col gap-3 rounded-md border border-default bg-surface p-4">
      <div className="flex flex-col gap-1">
        <p className="text-body-strong">링크 공유</p>
        <p className="text-caption text-muted">
          링크가 있는 사람은 누구나 볼 수 있어요.
        </p>
      </div>
      <div className="flex gap-2">
        <Input
          defaultValue="sonic.app/s/a91f"
          readOnly
          aria-label="공유 링크"
        />
        <Button variant="secondary">복사</Button>
      </div>
    </div>
  );
}

function ToastPreview() {
  return (
    <div className="flex w-90 items-start gap-3 rounded-md border border-default bg-surface p-4">
      <CircleCheck className="size-4 text-success" />
      <div className="flex flex-1 flex-col gap-1">
        <p className="text-body-strong">API 키를 만들었어요</p>
        <p className="text-caption text-muted">키는 지금 한 번만 보여 줘요.</p>
      </div>
      <X className="size-4" />
    </div>
  );
}

export function ComponentThumbnail({ name }: { name: ComponentName }) {
  switch (name) {
    case 'Button':
      return <Button>Button</Button>;
    case 'Input':
      return (
        <Input placeholder="Placeholder" aria-label="예시" className="w-60" />
      );
    case 'Textarea':
      return (
        <Textarea
          placeholder="내용을 입력하세요"
          aria-label="예시"
          className="h-20 w-60"
        />
      );
    case 'Text':
      return <Text variant="display">display</Text>;
    case 'Link':
      return <Link href="#">DESIGN.md 보기</Link>;
    case 'Card':
      return (
        <Card className="w-90">
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
    case 'Avatar':
      return <Avatar fallback="HP" />;
    case 'Separator':
      return <Separator className="w-60" />;
    case 'Field':
      return (
        <Field label="이메일" description="로그인할 때 써요." className="w-80">
          <Input placeholder="Placeholder" />
        </Field>
      );
    case 'Checkbox':
      return <Checkbox defaultChecked>알림 받기</Checkbox>;
    case 'RadioGroup':
      return (
        <RadioGroup
          label={<span className="sr-only">결제 주기</span>}
          defaultValue="monthly"
        >
          <Radio value="monthly">월간 결제</Radio>
        </RadioGroup>
      );
    case 'Switch':
      return <Switch defaultChecked>이메일 알림</Switch>;
    case 'Select':
      return (
        <Select
          options={[{ value: 'pro', label: 'Pro' }]}
          defaultValue="pro"
          aria-label="요금제"
          className="w-60"
        />
      );
    case 'FileDropzone':
      return (
        <FileDropzone
          onFilesChange={noop}
          description="PDF, 10MB 이하, 5개까지"
          className="w-100"
        />
      );
    case 'Dialog':
      return <DialogPreview isAlert={false} />;
    case 'AlertDialog':
      return <DialogPreview isAlert />;
    case 'Menu':
      return <MenuPreview />;
    case 'Popover':
      return <PopoverPreview />;
    case 'Tooltip':
      return (
        <span className="rounded-sm bg-inverse px-2 py-1 text-caption text-inverse">
          설정
        </span>
      );
    case 'Tabs':
      return (
        <Tabs defaultValue="overview" className="w-120">
          <TabsList>
            <Tab value="overview">개요</Tab>
            <Tab value="usage">사용량</Tab>
            <Tab value="settings">설정</Tab>
            <Tab value="billing" disabled>
              결제
            </Tab>
          </TabsList>
        </Tabs>
      );
    case 'Table':
      return (
        <Table className="w-120">
          <TableHeader>
            <TableRow>
              <TableHead>이름</TableHead>
              <TableHead>상태</TableHead>
              <TableHead align="end">요청 수</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {API_KEY_ROWS.map((row) => (
              <TableRow key={row.name}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell align="end">{row.requests}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      );
    case 'ToggleGroup':
      return (
        <ToggleGroup defaultValue="list" aria-label="보기 방식">
          <ToggleGroupItem value="list">목록</ToggleGroupItem>
          <ToggleGroupItem value="card">카드</ToggleGroupItem>
          <ToggleGroupItem value="table">표</ToggleGroupItem>
        </ToggleGroup>
      );
    case 'Accordion':
      return (
        <Accordion defaultValue={['count']} className="w-100">
          {FAQ_ITEMS.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionPanel>{item.content}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      );
    case 'Toast':
      return <ToastPreview />;
    case 'Badge':
      return <Badge tone="success">활성</Badge>;
    case 'Progress':
      return <Progress value={50} label="내보내는 중" className="w-60" />;
    case 'Skeleton':
      return <Skeleton className="w-60" />;
    case 'EmptyState':
      return (
        <EmptyState
          icon={<Inbox />}
          title="API 키가 없어요"
          description="키를 만들면 여기에서 사용량을 볼 수 있어요."
          action={<Button>API 키 만들기</Button>}
        />
      );
    case 'ErrorState':
      return (
        <ErrorState
          icon={<TriangleAlert />}
          title="불러오지 못했어요"
          description="네트워크 연결을 확인하고 다시 시도해 주세요."
          onRetry={noop}
        />
      );
    case 'ErrorPage':
      return <Image src={Error404Image} alt="" width={180} height={120} />;
    case 'FileList':
      return (
        <FileList
          items={[
            {
              id: 'contract',
              name: '계약서_최종.pdf',
              size: 2516582,
              status: 'done',
              url: '#',
            },
          ]}
          onRemove={noop}
          className="w-100"
        />
      );
  }
}
