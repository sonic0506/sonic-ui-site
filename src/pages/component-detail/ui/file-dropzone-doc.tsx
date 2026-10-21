'use client';

import { FileDropzone } from '@xonic0506/sonic-ui';

import { DocTemplate } from './doc-template';

// 예시라 고른 파일은 쓰지 않아요.
const ignoreFiles = () => {};

const VARIANTS = ['file', 'image'] as const;
const STATES = ['default', 'drag-over', 'invalid', 'disabled'] as const;

export function FileDropzoneDoc() {
  return (
    <DocTemplate
      title="FileDropzone"
      description="파일을 끌어다 놓거나 눌러서 골라요. 고르기와 검사만 하고, 업로드는 프로젝트가 해요."
      variants={VARIANTS.flatMap((variant) =>
        STATES.map((state) => ({
          caption: `${variant} · ${state}`,
          demo: (
            <FileDropzone
              variant={variant}
              onFilesChange={ignoreFiles}
              description="PDF, 10MB 이하, 5개까지"
              invalid={state === 'invalid'}
              disabled={state === 'disabled'}
              // drag-over는 컴포넌트 안의 data-dragging 상태라 같은 토큰(border-focus, bg-subtle)으로 보여 줘요.
              className={`w-100 max-w-full ${state === 'drag-over' ? 'border-focus bg-subtle' : ''}`}
            />
          ),
        })),
      )}
      rules={[
        {
          title: 'Field로 감싸요',
          description: '다른 폼 항목처럼 라벨, 설명, 에러가 연결돼요.',
        },
        {
          title: '에러 두 종류',
          description:
            '고르는 순간 조건에 맞지 않으면 영역 안에, 제출할 때 확인하는 규칙은 Field error로 아래에 보여 줘요.',
        },
      ]}
      props={[
        {
          name: 'onFilesChange',
          values: '(accepted, rejected) => void (필수)',
          defaultValue: '—',
        },
        {
          name: 'accept · multiple · maxSize',
          values: '조건',
          defaultValue: '—',
        },
        { name: 'variant', values: 'file · image', defaultValue: 'file' },
        {
          name: 'title · description',
          values: '영역 문구와 상태',
          defaultValue: '—',
        },
      ]}
      code={`<Field label="첨부 파일" description="PDF, 10MB 이하, 5개까지">
  <FileDropzone multiple accept=".pdf" maxSize={10_000_000} onFilesChange={(accepted) => upload(accepted)} />
</Field>`}
    />
  );
}
