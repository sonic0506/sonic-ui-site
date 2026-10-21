import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@xonic0506/sonic-ui';

import { DocPage, IndexCard } from '@/shared/ui';

import { CASE_STUDY_PAGES } from '../model/case-studies-nav';

const THUMBNAIL_ROWS = [
  { name: 'production', status: '활성', requests: '12,480' },
  { name: 'github-actions', status: '활성', requests: '3,215' },
  { name: 'local-dev', status: '만료 예정', requests: '0' },
] as const;

// 480 너비 표를 가운데에서 잘라 보여 줘요(Figma 썸네일).
function ApiKeysThumbnail() {
  return (
    <div className="w-120 shrink-0">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>이름</TableHead>
            <TableHead>상태</TableHead>
            <TableHead align="end">요청 수</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {THUMBNAIL_ROWS.map(({ name, status, requests }) => (
            <TableRow key={name}>
              <TableCell>{name}</TableCell>
              <TableCell>{status}</TableCell>
              <TableCell align="end">{requests}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export function CaseStudiesPage() {
  return (
    <DocPage
      title="Case Studies"
      description="규칙을 실제 화면에 적용한 사례와 그때 내린 결정이에요. 실제 프로젝트를 만들면서 하나씩 늘려요."
    >
      <div className="grid items-start gap-6 md:grid-cols-2">
        {CASE_STUDY_PAGES.map(({ slug, title, description }) => (
          <IndexCard
            key={slug}
            href={`/case-studies/${slug}`}
            title={title}
            description={description}
            thumbnail={<ApiKeysThumbnail />}
            hasMobileThumbnail
          />
        ))}
      </div>
    </DocPage>
  );
}
