import {
  Button,
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@xonic0506/sonic-ui';

import { DocTemplate } from './doc-template';

export function CardDoc() {
  return (
    <DocTemplate
      title="Card"
      description="관련 있는 내용을 하나의 상자로 묶어요. Header, Body, Footer 순서예요."
      variants={[
        {
          demo: (
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
          ),
        },
      ]}
      rules={[
        {
          title: '그림자 대신 테두리',
          description:
            'bg/surface + 1px border/default + radius/lg, padding space/5, 영역 사이 space/4.',
        },
        {
          title: '이름 있는 export',
          description:
            'Card.Header가 아니라 CardHeader를 써요. 서버 컴포넌트에서 점 접근이 깨지기 때문이에요.',
        },
      ]}
      props={[
        {
          name: 'CardHeader',
          values: 'CardTitle + CardDescription, 안 간격 space/1',
          defaultValue: '—',
        },
        { name: 'CardBody', values: '본문', defaultValue: '—' },
        {
          name: 'CardFooter',
          values: '오른쪽 정렬 버튼 묶음, 버튼 사이 space/2',
          defaultValue: '—',
        },
      ]}
      code={`<Card>
  <CardHeader><CardTitle>API 키</CardTitle><CardDescription>…</CardDescription></CardHeader>
  <CardBody>…</CardBody>
  <CardFooter><Button variant="secondary">취소</Button><Button>저장</Button></CardFooter>
</Card>`}
    />
  );
}
