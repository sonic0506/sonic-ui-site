'use client';

import { Pagination } from '@xonic0506/sonic-ui';
import { useState } from 'react';

import { DocTemplate } from './doc-template';

const PAGE_COUNT = 20;

const STATES = [
  { caption: 'default', page: 5, hasPageSize: true, showFirstLast: true },
  { caption: 'first page', page: 1, hasPageSize: false, showFirstLast: true },
  { caption: 'last page', page: 20, hasPageSize: false, showFirstLast: true },
  {
    caption: 'showFirstLast=false',
    page: 5,
    hasPageSize: false,
    showFirstLast: false,
  },
] as const;

function PaginationDemo({
  initialPage,
  hasPageSize,
  showFirstLast,
}: {
  initialPage: number;
  hasPageSize: boolean;
  showFirstLast: boolean;
}) {
  const [page, setPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(20);

  return (
    <Pagination
      page={page}
      pageCount={PAGE_COUNT}
      onPageChange={setPage}
      showFirstLast={showFirstLast}
      {...(hasPageSize && { pageSize, onPageSizeChange: setPageSize })}
    />
  );
}

export function PaginationDoc() {
  return (
    <DocTemplate
      title="Pagination"
      description="긴 목록을 페이지로 나눠요. Table이나 카드 목록과 함께 쓰고, DataGrid는 pagination prop으로 붙여요."
      variantsDescription="Figma 원본의 모든 variant예요. 좁은 화면(viewport=mobile)에서는 번호 대신 4 / 20만 보여요. 코드가 자동으로 처리해요."
      variants={STATES.map(({ caption, page, hasPageSize, showFirstLast }) => ({
        caption,
        demo: (
          <PaginationDemo
            initialPage={page}
            hasPageSize={hasPageSize}
            showFirstLast={showFirstLast}
          />
        ),
      }))}
      rules={[
        {
          title: '현재 페이지는 bg/subtle',
          description:
            '강조색은 쓰지 않아요. aria-current="page"로 화면 낭독기에 알려요.',
        },
        {
          title: '항상 최대 7칸',
          description:
            '처음·마지막과 현재 양옆 1개만 보이고 나머지는 …로 줄여서 너비가 흔들리지 않아요.',
        },
        {
          title: '끝에서는 버튼이 비활성',
          description:
            '첫 페이지에서는 처음·이전이, 마지막 페이지에서는 다음·마지막이 꺼져요. 포커스는 남아요.',
        },
        {
          title: '좁은 화면은 4 / 20',
          description:
            '640 미만에서는 번호와 행 수 라벨을 숨겨요. Select 이름은 aria-label로 남아요.',
        },
      ]}
      props={[
        {
          name: 'page · onPageChange',
          values: '현재 페이지(1부터)와 바뀔 때',
          defaultValue: '(필수)',
        },
        { name: 'pageCount', values: '전체 페이지 수', defaultValue: '(필수)' },
        {
          name: 'pageSize · onPageSizeChange',
          values: '넘기면 왼쪽에 "페이지당 행" Select가 생겨요',
          defaultValue: '—',
        },
        {
          name: 'pageSizeOptions',
          values: '페이지당 행 수 목록',
          defaultValue: '[10, 20, 50]',
        },
        {
          name: 'showFirstLast',
          values: '처음·마지막 버튼',
          defaultValue: 'true',
        },
        {
          name: 'aria-label',
          values: '페이지 이동 영역 이름',
          defaultValue: '"페이지"',
        },
      ]}
      code={`<Pagination page={page} pageCount={20} onPageChange={setPage} />
<Pagination page={page} pageCount={20} onPageChange={setPage} pageSize={pageSize} onPageSizeChange={setPageSize} showFirstLast={false} />`}
    />
  );
}
