# 사이트 Figma와 작업 규칙

사이트 화면의 원본은 Figma 파일 **Sonic UI Site**예요. 코드를 만들거나 고칠 때 아래 노드를 먼저 확인해요.

- Sonic UI Site: fileKey `X5weWymEMncXZs9f7FFY8T`
- 디자인 시스템(팀 라이브러리로 연결): fileKey `XifnZsjqJWJqFmAmrM6p3u`
- 사이트 파일에는 로컬 변수·스타일이 없고, Core 컴포넌트는 모두 라이브러리 인스턴스예요. sonic-ui 0.5.0과 맞춰져 있어요(2026-10-22).

## 페이지와 노드

| 페이지              | 노드                                                                                                                                                                                                                                                        |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cover 21:2088       | 프레임 21:2089 (1920×960)                                                                                                                                                                                                                                   |
| Site components 0:1 | 보관 프레임 3:40 — Header 3:82, Header Mobile 4:204, Footer set 55:47 (desktop 3:254, mobile 55:39), Logo mark 21:2031, Top Nav Item 3:46, Theme Toggle 3:47, Nav Item 3:221, Nav Group 3:222, TOC 3:235, Code Block 3:243, Index Card 4:165, Do-Dont 4:203 |
| Home 3:2            | Light 5:56, Dark 5:278, 375 5:347                                                                                                                                                                                                                           |
| Components 9:47     | 인덱스 9:48, Button Light 11:593 · Dark 12:832 · 375 12:983, 상세 30개(Light 1440 + 375) — 묶음별 줄(기본·폼·오버레이·탐색표시·피드백상태), 모바일은 줄 오른쪽                                                                                              |
| Foundation 10:47    | 인덱스 10:48, Color 14:139, Typography 31:197, Spacing·Radius 32:255, Motion 33:309, Icon 34:411, Illustration 35:473 (+ 각 375)                                                                                                                            |
| Guidelines 10:203   | 인덱스 10:204, 데이터 상태 15:161, 원칙 36:303, 접근성 36:472, 레이아웃 37:414, 문구 38:480 (+ 각 375)                                                                                                                                                      |
| Case Studies 10:390 | 인덱스 10:391, API 키 관리 16:125 (+ 375)                                                                                                                                                                                                                   |
| Errors 69:396       | 404 1440 69:397 · 375 69:466, 500 1440 69:519 · 375 69:594 — Home 프레임을 복제하고 Main에 `ErrorPage`(status) 인스턴스만 둬요                                                                                                                              |

## 코드 위치 (FSD)

- 라우트: 루트 `app/` — `page.tsx`·`layout.tsx`는 `src/pages/<slice>`를 다시 내보내기만 해요(`generateStaticParams`도 함께 다시 내보내요).
- `src/pages/`: 화면 하나(또는 같은 틀의 화면 묶음)가 slice 하나예요. slice 바로 아래에는 `index.ts`(public API)만 두고, 페이지 컴포넌트를 포함한 나머지는 모두 segment(`ui/`·`model/`·`lib/`)에 둬요. 하네스 예시(슬라이스 바로 아래 `*-page.tsx`)와 달리 일반 FSD를 따라요.
  - `components`: 인덱스(`/components`)와 섹션 레이아웃(사이드바)
  - `component-detail`: 상세 30개의 진입점 하나(`/components/[slug]`). 컴포넌트별 문서는 `ui/<이름>-doc.tsx`로 쓰고 `ui/component-detail-page.tsx`의 `COMPONENT_DOCS`에 등록해요.
  - `foundation`: 인덱스, 섹션 레이아웃, 페이지 6개(Color …)를 한 slice에 둬요. 페이지마다 내용이 달라서 `[slug]` 대신 정적 route(`app/foundation/color/page.tsx` …)로 다시 내보내요. 목록은 slice 안에서만 써서 `model/foundation-nav.ts`에 둬요.
  - `guidelines`: `foundation`처럼 인덱스, 섹션 레이아웃, 페이지 5개를 한 slice에 두고 정적 route로 다시 내보내요(`model/guidelines-nav.ts`).
  - `case-studies`: 같은 방식으로 인덱스와 사례 페이지(`api-keys`)를 둬요. 사례가 늘면 `model/case-studies-nav.ts`에 더해요.
  - `home`도 내용이 페이지마다 다르면 `foundation`처럼, 같은 틀이 많으면 `component-detail`처럼 해요.
- Dialog·Menu·Toast처럼 Portal로 뜨는 컴포넌트는 열린 모양을 같은 토큰으로 그린 미리보기(`inert`)로 보여 줘요. 여러 slice가 쓰는 미리보기는 `shared/ui`(`DialogPreview`, `MenuPopupPreview`, `ToastPreview`)에 있어요.
- Color 견본처럼 light·dark를 나란히 보여야 하면 그 요소에 `data-theme="light"`·`"dark"`를 붙여요(sonic-ui 토큰이 `[data-theme]` 범위로 정의돼 있어요).
- 500(렌더 에러)은 `app/error.tsx` → `src/pages/server-error`(`ErrorPage` 500 + 다시 시도 = Next `retry()`)예요. Next는 `error.tsx` 파일 자체에 `'use client'`가 있어야 해서 route 파일에도 붙여요.
- 404는 `app/not-found.tsx` → `src/pages/not-found`(sonic-ui `ErrorPage` 404)예요. Next 기본 404를 쓰면 그 화면의 전역 `<style>`이 cacheComponents의 Activity로 숨겨진 채 남아 다른 페이지 배경까지 바꿔요.
- `src/entities/component`: 컴포넌트 목록(이름·설명·묶음), slug 함수, 썸네일(`ComponentThumbnail`). 인덱스·상세·사이드바·홈이 함께 써요.
- `src/widgets/`: 헤더, 사이드바, 푸터
- 사이트 전용 문서 부품(DocPage, DocSection, Stage, Do-Dont, Index Card, Code Block, TOC)은 `src/shared/ui`에 둬요. sonic-ui에 넣지 않아요.
- Core 컴포넌트와 토큰은 `@xonic0506/sonic-ui`에서만 가져와요.

## 화면 크기와 모바일

- 모든 페이지는 Light 1440 + Light 375가 있어요. Dark는 Button·홈 템플릿만 있어요.
- 모바일(375)에서는 Header Mobile + Footer mobile을 쓰고, Sidebar·TOC는 없어요. Main은 가로를 꽉 채워요.
- 표는 가로 스크롤(최소 640), 가로로 늘어선 행은 세로로 쌓아요(앞 두 칸과 Visual은 한 줄). 넘치는 예시는 줄바꿈하거나 가로 스크롤해요.
- Dialog·AlertDialog는 모바일 variant를 써요. 모바일 인덱스 카드는 썸네일을 숨겨요(목록이 긴 인덱스 페이지). 홈의 둘러보기 카드 4개는 모바일에서도 썸네일을 보여요(`IndexCard`의 `hasMobileThumbnail`).

## 페이지 틀

- 상세 페이지: Sidebar + Main + TOC(200).
- 컴포넌트 상세 순서: 변형(원본의 모든 variant, 많으면 대표만) → 사용법 → Props 표(첫 열·마지막 열 160, 가운데 열은 남은 너비) → 코드.
- Do-Dont: surface 배경 + 1px default 테두리, 위 테두리 대신 2px 색 막대, 라벨·설명은 아래에.

## Figma 작업 규칙

Figma 쓰기는 사용자 확인 후에 해요.

- 새 상세 페이지는 기존 인덱스·상세 프레임을 복제 → Main을 비우고 다시 채워요.
- 375 Stage(줄바꿈 가로 묶음) 안에서 넘치는 예시는 코드처럼 처리해요. 코드가 줄여서 맞추면(`max-w-full`) 항목을 Stage 안쪽 너비(293) FIXED + 안의 인스턴스 FILL로, 코드가 가로 스크롤하면(Tabs·Table) `Scroll x` 래퍼를 293 FIXED로 둬요. 줄바꿈 묶음 안의 FILL 래퍼는 너비가 0에 가깝게 줄어 깨져요.
- 프레임 높이를 재서 줄 간격 400으로 배치해요. 끝나면 겹침 검사와 하드코딩 감사(fill, stroke, padding, gap, radius, 텍스트 스타일) 0건을 확인해요.
- 라이브러리를 고치면 디자인 시스템 파일에서 다시 게시해요. 사이트 인스턴스는 업데이트를 받기 전까지 예전 버전이라 `swapComponent`로 갱신해요.
- 이미지는 PNG로 올려요(webp는 Figma에서 안 보여요). 다른 파일의 노드는 복사할 수 없어서 `importComponentByKeyAsync` 등으로 다시 조립해요.
