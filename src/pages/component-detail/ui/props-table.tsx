import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@xonic0506/sonic-ui';

export interface PropRow {
  name: string;
  values: string;
  defaultValue: string;
}

// 첫 열·마지막 열 160, 좁은 화면에서는 최소 640으로 가로 스크롤해요(docs/site-figma.md).
export function PropsTable({ rows }: { rows: readonly PropRow[] }) {
  return (
    <Table className="min-w-160">
      <TableHeader>
        <TableRow>
          <TableHead className="w-40">prop</TableHead>
          <TableHead>값</TableHead>
          <TableHead className="w-40">기본값</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.values}</TableCell>
            <TableCell>{row.defaultValue}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
