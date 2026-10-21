import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@xonic0506/sonic-ui';

import { DocTemplate } from './doc-template';

const ROWS = [
  { name: 'production', status: '활성', requests: '12,480' },
  { name: 'github-actions', status: '활성', requests: '3,215' },
  { name: 'local-dev', status: '만료 예정', requests: '0' },
] as const;

const CELL_STATES = [
  { caption: 'header · start', isHeader: true, align: 'start' },
  { caption: 'header · end', isHeader: true, align: 'end' },
  { caption: 'body · start', isHeader: false, align: 'start' },
  { caption: 'body · end', isHeader: false, align: 'end' },
] as const;

export function TableDoc() {
  return (
    <DocTemplate
      title="Table"
      description="여러 항목의 같은 속성을 비교할 때 써요."
      variants={[
        {
          demo: (
            <Table className="w-120">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-40">이름</TableHead>
                  <TableHead className="w-40">상태</TableHead>
                  <TableHead className="w-40" align="end">
                    요청 수
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ROWS.map(({ name, status, requests }) => (
                  <TableRow key={name}>
                    <TableCell>{name}</TableCell>
                    <TableCell>{status}</TableCell>
                    <TableCell align="end">{requests}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ),
        },
        ...CELL_STATES.map(({ caption, isHeader, align }) => ({
          caption,
          demo: (
            <Table className="w-40">
              {isHeader ? (
                <TableHeader>
                  <TableRow>
                    <TableHead align={align}>내용</TableHead>
                  </TableRow>
                </TableHeader>
              ) : (
                <TableBody>
                  <TableRow>
                    <TableCell align={align}>내용</TableCell>
                  </TableRow>
                </TableBody>
              )}
            </Table>
          ),
        })),
      ]}
      rules={[
        {
          title: '행 높이 40',
          description: '좌우 padding space/3, 행 아래 1px border/default.',
        },
        {
          title: '숫자 열은 mono',
          description: 'align="end"인 본문 칸은 숫자라서 mono예요.',
        },
        {
          title: '줄무늬, hover 바탕은 쓰지 않아요',
          description: '구분은 선 하나로 충분해요.',
        },
      ]}
      props={[
        {
          name: 'TableHead · TableCell align',
          values: 'start · end (숫자 열은 end)',
          defaultValue: 'start',
        },
        {
          name: 'Table',
          values: '부모보다 넓으면 가로 스크롤',
          defaultValue: '—',
        },
      ]}
      code={`<Table>
  <TableHeader><TableRow><TableHead>이름</TableHead><TableHead align="end">요청 수</TableHead></TableRow></TableHeader>
  <TableBody><TableRow><TableCell>production</TableCell><TableCell align="end">12,480</TableCell></TableRow></TableBody>
</Table>`}
    />
  );
}
