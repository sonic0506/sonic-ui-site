import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // llms-full.txt가 다시 만들어질 때도 패키지의 규칙 문서를 읽을 수 있게 배포물에 넣어요.
  outputFileTracingIncludes: {
    '/llms-full.txt': ['./node_modules/@xonic0506/sonic-ui/*.md'],
  },
};

export default nextConfig;
