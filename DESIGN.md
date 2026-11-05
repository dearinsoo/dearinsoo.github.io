# introduce-site · 디자인 가이드

> **개발용 문서** — GitHub Pages에 포함하지 않습니다.  
> 공개 사이트는 `introduce.md`를 **참고만** 하고, 포트폴리오형 카피로 재구성합니다.

소개 사이트 구현 시 아래 토큰·IA를 참고합니다.

## 정보 구조 (IA)

| 섹션 ID | 이름 | 원고 매핑 |
|---------|------|-----------|
| `#hero` | Hero | 한 줄 소개, 인용, 핵심 수치 |
| `#about` | About | 프로필, 이 글을 쓰는 이유, 가치관 |
| `#career` | Career | 경력 타임라인, 상세 경력표 |
| `#work` | Work | 전문 영역, 프로젝트 A–D, Before/After |
| `#process` | Process | 일하는 방식, 도구, 멘토링 |
| `#faq` | FAQ | FAQ 7문 |
| `#contact` | Contact | 연락, 맺음말, 추천사 |

## 비주얼

- **무드:** 서점·원고지 — 따뜻한 종이 톤, 여백 넉넉, 에디터 포트폴리오
- **색:** 배경 `#f7f3eb`, 본문 `#2c2825`, **브랜드·강조 `#057dbc`**, 보조 `#6b6560`, 테두리 `#e0d6c8`
- **타이포:** 제목 serif (Noto Serif KR), 본문 sans (Noto Sans KR) — Google Fonts, 정적 링크
- **레이아웃:** 단일 페이지, 최대 너비 720px 본문 / 960px 일부 그리드

## GitHub Pages 제약

- HTML / CSS / JS만 (빌드·Node·SSR 없음)
- 상대 경로 자산 (`css/`, `js/`)
- 외부 API·환경 변수·서버 폼 없음 — 연락은 `mailto:` 또는 텍스트

## 파일

- `index.html` — 마크업
- `css/styles.css` — 스타일
- `js/main.js` — 내비, FAQ, 접근성
