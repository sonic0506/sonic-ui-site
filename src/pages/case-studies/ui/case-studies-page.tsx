import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@xonic0506/sonic-ui';
import type { ReactNode } from 'react';

import { DocPage, IndexCard } from '@/shared/ui';

import {
  CASE_STUDY_PAGES,
  type CaseStudySlug,
} from '../model/case-studies-nav';

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

const TODO_THUMBNAIL_ROWS = [
  { id: 1, title: 'delectus aut autem' },
  { id: 2, title: 'quis ut nam facilis et officia qui' },
  { id: 3, title: 'fugiat veniam minus' },
] as const;

// 할 일 표의 위쪽 3행이에요(Figma 썸네일).
function TodosThumbnail() {
  return (
    <div className="w-120 shrink-0">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead align="end" sort="asc">
              ID
            </TableHead>
            <TableHead>제목</TableHead>
            <TableHead>사용자</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {TODO_THUMBNAIL_ROWS.map(({ id, title }) => (
            <TableRow key={id}>
              <TableCell align="end">{id}</TableCell>
              <TableCell>{title}</TableCell>
              <TableCell>Leanne Graham</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

const THUMBNAILS: Record<CaseStudySlug, ReactNode> = {
  'api-keys': <ApiKeysThumbnail />,
  todos: <TodosThumbnail />,
};

export function CaseStudiesPage() {
  return (
    <DocPage
      title="Case Studies"
      description="규칙을 실제 화면에 적용한 사례와 그때 내린 결정이에요. 실제 프로젝트를 만들면서 하나씩 늘려요."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {CASE_STUDY_PAGES.map(({ slug, title, description }) => (
          <IndexCard
            key={slug}
            href={`/case-studies/${slug}`}
            title={title}
            description={description}
            thumbnail={THUMBNAILS[slug]}
            hasMobileThumbnail
          />
        ))}
      </div>
    </DocPage>
  );
}
