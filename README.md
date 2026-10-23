<div align="center">

<img src="./docs/assets/hero.webp" alt="Sonic 마스코트" width="240">

# Sonic UI Site

**계기판처럼 정밀한 디자인 시스템, Sonic UI를 소개하는 사이트예요.**

토큰부터 컴포넌트, 가이드라인, 실제 화면 사례까지 한곳에서 보여 줘요.

[![sonic-ui](https://img.shields.io/npm/v/@xonic0506/sonic-ui?style=flat-square&label=sonic-ui&color=2340D0)](https://www.npmjs.com/package/@xonic0506/sonic-ui)
![Next.js](https://img.shields.io/badge/Next.js-16-0E1216?style=flat-square&logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-0E1216?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-0E1216?style=flat-square&logo=tailwindcss)
[![CI](https://img.shields.io/github/actions/workflow/status/sonic0506/sonic-ui-site/ci.yml?branch=main&style=flat-square&label=CI)](https://github.com/sonic0506/sonic-ui-site/actions/workflows/ci.yml)

<a href="#사이트-구성">사이트 구성</a> •
<a href="#시작하기">시작하기</a> •
<a href="#코드-구조">코드 구조</a> •
<a href="#작업-규칙">작업 규칙</a>

</div>

<br>

## 사이트 구성

<table>
<tr>
<td width="50%" valign="top">

### 🎨 Foundation

색, 타이포그래피, 간격·Radius, 모션, 아이콘, 일러스트.
light·dark 견본을 나란히 놓고 토큰 값을 비교해요.

</td>
<td width="50%" valign="top">

### 🧩 Components

Button부터 DataGrid까지 sonic-ui Core 컴포넌트 30개.
변형 → 사용법 → Props → 코드 순서로 읽어요.

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 📐 Guidelines

원칙, 데이터 상태(정상·로딩·빈 상태·에러), 접근성, 레이아웃, 문구.
화면을 그리기 전에 맞춰야 할 기준이에요.

</td>
<td width="50%" valign="top">

### 🧪 Case Studies

API 키 관리, 할 일 목록(필터 + DataGrid + Pagination).
컴포넌트를 조립해 실제 데이터 화면을 만드는 과정이에요.

</td>
</tr>
</table>

모든 페이지는 데스크톱(1440)과 모바일(375) 화면이 있고, 원본은 Figma **Sonic UI Site**예요. 노드 목록은 [docs/site-figma.md](docs/site-figma.md)에 있어요.

## 시작하기

Node 20 이상에서 실행해요.

```bash
npm install
cp .env.example .env.local
npm run dev
```

[http://localhost:3000](http://localhost:3000)을 열어요.

<details>
<summary><strong>환경 변수</strong></summary>

<br>

| 이름                       | 용도                                                                                          |
| -------------------------- | --------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_API_BASE_URL` | 사례 화면이 부르는 API 주소. 기본은 JSONPlaceholder예요                                       |
| `NEXT_PUBLIC_API_MOCKING`  | `true`면 MSW로 응답해요(개발용)                                                               |
| `NEXT_PUBLIC_SITE_URL`     | 직접 도메인을 붙였을 때만. 없으면 Vercel의 `NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL`을 써요 |

</details>

<details>
<summary><strong>스크립트</strong></summary>

<br>

| 명령                | 하는 일                        |
| ------------------- | ------------------------------ |
| `npm run dev`       | 개발 서버                      |
| `npm run build`     | 프로덕션 빌드                  |
| `npm run lint`      | ESLint (FSD 경계, 하네스 규칙) |
| `npm run typecheck` | TypeScript 검사                |
| `npm test`          | Vitest + MSW 통합 테스트       |
| `npm run e2e`       | Playwright                     |

PR과 main push마다 CI가 lint · typecheck · test · build를 실행해요.

</details>

## 코드 구조

[Feature-Sliced Design](https://feature-sliced.design)을 따라요. 라우팅용 `app/`은 루트에 두고, route 파일은 `src/pages`를 다시 내보내기만 해요.

```
app/              Next 라우트 (src/pages 다시 내보내기, robots·sitemap·llms.txt)
src/
├─ app/           providers, MSW, SEO
├─ pages/         home · components · component-detail · foundation · guidelines · case-studies
├─ widgets/       site-header · site-sidebar · site-footer · todo-grid
├─ entities/      component · todo · user · theme
└─ shared/        api · config · ui(DocPage, Stage, Do-Dont, Code Block, TOC …)
```

Core 컴포넌트와 토큰은 [`@xonic0506/sonic-ui`](https://www.npmjs.com/package/@xonic0506/sonic-ui)에서만 가져와요. 사이트 전용 문서 부품은 `src/shared/ui`에 둬요.

## 작업 규칙

| 문서                                                     | 내용                                      |
| -------------------------------------------------------- | ----------------------------------------- |
| [`.sonic-harness/harness.md`](.sonic-harness/harness.md) | 코딩 규칙: FSD, 데이터 흐름, 테스트, 커밋 |
| `DESIGN.md` (sonic-ui 패키지에 포함)                     | 토큰, 컴포넌트 스펙, 4가지 데이터 상태    |
| [`docs/site-figma.md`](docs/site-figma.md)               | Figma 노드, 페이지 틀, 모바일 규칙        |

커밋은 Conventional Commits에 한국어 설명이에요: `feat(case-studies): 할 일 목록 사례 추가`.

<br>

<p align="center"><sub>sonic-ui를 실제로 쓰는 첫 프로젝트예요. 쓰다가 막힌 곳은 하네스와 sonic-ui를 고치는 근거가 돼요.</sub></p>
