'use client';

import { type FileItemData, FileList } from '@xonic0506/sonic-ui';

import { DocTemplate } from './doc-template';

const DOCUMENT = { name: '계약서_최종.pdf', size: 2_400_000 } as const;
const IMAGE = { name: 'screenshot-01.png', type: 'image/png' } as const;
const NETWORK_ERROR = '네트워크가 끊겨 올리지 못했어요. 다시 시도해 주세요.';

const ITEMS: readonly {
  caption: string;
  layout: 'list' | 'grid';
  item: FileItemData;
}[] = [
  {
    caption: 'list · uploading',
    layout: 'list',
    item: { id: '1', ...DOCUMENT, status: 'uploading', progress: 45 },
  },
  {
    caption: 'list · done',
    layout: 'list',
    // 완료이고 url이 있으면 이름이 Link예요(예시라서 이 자리로 이동해요).
    item: { id: '2', ...DOCUMENT, status: 'done', url: '#variants' },
  },
  {
    caption: 'list · error',
    layout: 'list',
    item: { id: '3', ...DOCUMENT, status: 'error', error: NETWORK_ERROR },
  },
  {
    caption: 'grid · uploading',
    layout: 'grid',
    item: { id: '4', ...IMAGE, status: 'uploading', progress: 45 },
  },
  {
    caption: 'grid · done',
    layout: 'grid',
    item: { id: '5', ...IMAGE, status: 'done' },
  },
  {
    caption: 'grid · error',
    layout: 'grid',
    item: { id: '6', ...IMAGE, status: 'error', error: NETWORK_ERROR },
  },
];

// 예시라서 삭제·다시 시도해도 아무 일도 하지 않아요.
function ignoreItem() {}

export function FileListDoc() {
  return (
    <DocTemplate
      title="FileList"
      description="고른 파일과 업로드 상태를 보여 줘요. 일반 파일은 list, 이미지는 grid예요."
      variants={ITEMS.map(({ caption, layout, item }) => ({
        caption,
        demo: (
          <FileList
            layout={layout}
            items={[item]}
            onRemove={ignoreItem}
            onRetry={ignoreItem}
            className={layout === 'list' ? 'w-100 max-w-full' : ''}
          />
        ),
      }))}
      rules={[
        {
          title: '업로드는 프로젝트가 해요',
          description:
            '컴포넌트는 표시만 하고, 진행률과 재시도는 API를 아는 쪽이 items로 넘겨요.',
        },
        {
          title: '미리보기는 previewUrl 하나',
          description:
            '서버 썸네일 주소, base64, 인증 파일은 blob URL. 방금 고른 파일은 file만 넘기면 돼요.',
        },
      ]}
      props={[
        {
          name: 'items',
          values: 'FileItemData[] (status: uploading · done · error)',
          defaultValue: '—',
        },
        { name: 'layout', values: 'list · grid', defaultValue: 'list' },
        {
          name: 'onRemove · onRetry',
          values: '(id) => void, 넘기면 버튼이 생겨요',
          defaultValue: '—',
        },
      ]}
      code={`<FileList items={items} onRemove={remove} onRetry={retry} />
<FileList layout="grid" items={images} onRemove={remove} />`}
    />
  );
}
