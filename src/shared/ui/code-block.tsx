'use client';

import { Button } from '@xonic0506/sonic-ui';
import { Check, Copy, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const COPY_STATUS = {
  idle: { label: '코드 복사', Icon: Copy },
  copied: { label: '복사했어요', Icon: Check },
  failed: { label: '복사하지 못했어요', Icon: X },
} as const;

type CopyStatus = keyof typeof COPY_STATUS;

interface CodeBlockProps {
  language: string;
  code: string;
}

export function CodeBlock({ language, code }: CodeBlockProps) {
  const [copyStatus, setCopyStatus] = useState<CopyStatus>('idle');
  const { label: copyLabel, Icon: CopyIcon } = COPY_STATUS[copyStatus];

  useEffect(() => {
    if (copyStatus === 'idle') return;
    const timer = setTimeout(() => setCopyStatus('idle'), 2000);
    return () => clearTimeout(timer);
  }, [copyStatus]);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(code).then(
      () => setCopyStatus('copied'),
      () => setCopyStatus('failed'),
    );
  };

  return (
    <div className="flex flex-col gap-2 rounded-md bg-subtle px-4 py-3">
      <div className="flex items-center gap-2">
        <span className="flex-1 text-caption text-muted">{language}</span>
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label={copyLabel}
          onClick={handleCopyClick}
        >
          <CopyIcon />
        </Button>
      </div>
      <pre className="overflow-x-auto font-mono text-body text-default">
        <code>{code}</code>
      </pre>
    </div>
  );
}
