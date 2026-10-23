export {
  ComponentDetailPage as default,
  generateMetadata,
  generateStaticParams,
} from '@/pages/component-detail';

// 상세는 모두 빌드 때 정적 HTML로 만들어져서, 넘어올 때 slug(params)를 기다려도 돼요.
// params를 <Suspense> 안으로 옮기면 없는 주소가 404 대신 200 + noindex가 돼서, 막히는(blocking) 이동을 허용해요.
// route segment config는 Next가 이 파일에서 직접 읽어서 다시 내보내기 대신 여기에 써요.
export const instant = false;
