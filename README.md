# PharmaQuiz

약동학·면역학·생약학 스터디를 위한 퀴즈 웹사이트입니다. 메인에서 **퀴즈 연습**과 **랭킹 도전**을 별도로 선택합니다.

## 실행

Node.js 20 이상을 설치하고 프로젝트 폴더에서 다음을 실행하세요.

```bash
npm install
npm run dev
```

터미널에 표시된 주소(보통 http://localhost:5173)를 브라우저에서 여세요. 배포 전 `npm run build`로 빌드를 확인하세요.

## 기능

- 과목: 약동학, 면역학, 생약학
- 주차: 1–2 / 3–4 / 5–6 / 7–8주차, 복수 선택
- **퀴즈 연습**: 연습 전용 문제 무작위 출제, 답 선택 즉시 정답·해설 표시, 다음 문제로 진행. 랭킹에는 반영되지 않음.
- **랭킹 도전**: 랭킹 전용 문제 고정 순서, 제출 후 채점·해설, 점수 우선 및 동점 시 시간 순위.
- 결과 화면과 랭킹, 브라우저 로컬 저장(기본 모드).

## 문제 수정

`src/questions.js`에서 **sampleQuestions**는 랭킹 전용, **practiceQuestions**는 연습 전용입니다. 두 목록은 문제 ID와 내용이 서로 달라야 합니다. 주차 `week`는 1=1–2주차, 2=3–4주차, 3=5–6주차, 4=7–8주차입니다. `answer`는 0부터 시작하는 정답 보기 인덱스입니다. 기본 샘플은 랭킹 15문제, 연습 12문제이며 학습용 예시이므로 실제 강의 내용에 맞춰 검토·교체하세요.

## 디자인 수정

`src/style.css` 하단의 `PharmaQuiz refresh` 섹션을 수정하면 됩니다. 메인 브랜드 색은 Pantone 336 C 요청값 `#00462A`입니다. 로고 타이틀에는 Google Fonts의 Outfit을 사용합니다(오프라인에서는 대체 글꼴 표시).

## 여러 사람의 기록 공유 (Supabase)

기본 상태에서는 기록이 각 브라우저에만 저장됩니다. 공유하려면 Supabase 프로젝트를 생성하고 `supabase/schema.sql`을 SQL Editor에서 실행하세요. `.env.example`을 `.env`로 복사하여 URL 및 anon key를 입력하고 개발 서버를 재시작하세요. Supabase `questions` 테이블에 연습 문제는 `mode='practice'`, 랭킹 문제는 `mode='rank'`로 등록하세요. **클라우드 모드에서는 DB에 등록한 문제만 로드**합니다. 기존 테이블이 있으면 `mode` 컬럼 추가 SQL을 실행해야 합니다.

> 주의: 이 버전은 인증 없는 데모 구조로, 공개 배포 시 다른 사람이 이름을 도용하거나 결과를 임의로 전송할 수 있습니다. 공식 경쟁 서비스에서는 인증, 서버 측 채점, 쓰기 권한 제한이 필요합니다. 또한 랭킹 필터는 범위가 일부 겹치는 기록도 표시하므로 공정한 경쟁은 동일한 범위·문제 수로 진행하세요.

## 배포

GitHub에 올리고 Vercel에서 Vite 프로젝트로 Import하세요. Build Command는 `npm run build`, Output Directory는 `dist`입니다. Supabase를 사용한다면 Vercel 환경변수에도 `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`를 입력하세요.
