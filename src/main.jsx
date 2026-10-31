import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';

import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileQuestion,
  Flag,
  Home,
  Medal,
  Menu,
  RotateCcw,
  Trophy,
  X,
} from 'lucide-react';

import { subjects, weeks } from './questions';
import { isCloud, loadQuestions, loadResults, saveResult } from './db';
import './style.css';


/* ============================================================
   1. UTILITIES
============================================================ */

// 초 단위 시간을 MM:SS 형식으로 변환
const fmt = (s) => {
  const minutes = String(Math.floor(s / 60)).padStart(2, '0');
  const seconds = String(s % 60).padStart(2, '0');

  return `${minutes}:${seconds}`;
};


/* ============================================================
   2. MAIN APP
============================================================ */

function App() {

  /* ----------------------------------------------------------
     2-1. STATE
  ---------------------------------------------------------- */

  // 페이지 및 사용자
  const [page, setPage] = useState('home');

  const [name, setName] = useState(
    localStorage.getItem('study-quiz-name') || ''
  );

  // 퀴즈 설정
  const [subject, setSubject] = useState('pk');
  const [selected, setSelected] = useState([1]);
  const [count, setCount] = useState('all');
  const [mode, setMode] = useState('practice');

  // 데이터
  const [questions, setQuestions] = useState([]);
  const [results, setResults] = useState([]);

  // 현재 퀴즈
  const [quiz, setQuiz] = useState([]);
  const [answers, setAnswers] = useState({});
  const [index, setIndex] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // 결과
  const [outcome, setOutcome] = useState(null);
  const [showReview, setShowReview] = useState(false);

  // 리더보드 필터
  const [rankSubject, setRankSubject] = useState('all');
  const [rankWeek, setRankWeek] = useState('all');

  // UI
  const [error, setError] = useState('');
  const [mobileMenu, setMobileMenu] = useState(false);

  // 퀴즈 시작 시각
  const started = useRef(0);


  /* ----------------------------------------------------------
     2-2. INITIAL DATA LOADING
  ---------------------------------------------------------- */

  useEffect(() => {
    Promise.all([loadQuestions(), loadResults()])
      .then(([q, r]) => {
        setQuestions(q);
        setResults(r);
      })
      .catch((e) => {
        setError('데이터를 불러오지 못했어요: ' + e.message);
      });
  }, []);


  /* ----------------------------------------------------------
     2-3. QUIZ TIMER
  ---------------------------------------------------------- */

  useEffect(() => {
    if (page !== 'quiz') return;

    const timer = setInterval(() => {
      setSeconds(
        Math.floor((Date.now() - started.current) / 1000)
      );
    }, 250);

    return () => clearInterval(timer);
  }, [page]);


  /* ----------------------------------------------------------
     2-4. DERIVED DATA
  ---------------------------------------------------------- */

  // 연습 모드에서 이미 답한 문제인지 확인
  const locked =
    mode === 'practice' &&
    answers[quiz[index]?.id] !== undefined;

  // 선택한 과목, 주차, 모드에 해당하는 문제
  const available = useMemo(() => {
    return questions.filter((q) =>
      q.subject === subject &&
      selected.includes(Number(q.week)) &&
      (q.mode || 'rank') === mode
    );
  }, [questions, subject, selected, mode]);

  // 과목 ID로 과목 정보 찾기
  const sub = (id) => {
    return subjects.find((s) => s.id === id) || subjects[0];
  };

  // 대시보드 통계
  const stats = {
    attempts: results.length,

    people: new Set(
      results.map((r) => r.name)
    ).size,

    average: results.length
      ? Math.round(
          results.reduce((sum, r) => sum + r.score, 0) /
          results.length
        )
      : 0,
  };


  /* ============================================================
     3. NAVIGATION
  ============================================================ */

  // 페이지 이동
  const nav = (p) => {
    setPage(p);
    setMobileMenu(false);
    setError('');
    window.scrollTo(0, 0);
  };

  // 연습 또는 랭킹 모드 열기
  const openMode = (m) => {
    setMode(m);
    nav('setup');
  };

  // 주차 선택 및 해제
  const toggleWeek = (w) => {
    setSelected((previous) =>
      previous.includes(w)
        ? previous.filter((x) => x !== w)
        : [...previous, w].sort()
    );
  };

  // 사이드바 활성화 여부
  // 수정: setup / quiz / result 화면에서도 해당 모드 강조
  const isNavActive = (p) => {
    if (page === p) return true;

    const quizPages = ['setup', 'quiz', 'result'];

    if (!quizPages.includes(page)) return false;

    return (
      (p === 'practice' && mode === 'practice') ||
      (p === 'challenge' && mode === 'rank')
    );
  };


  /* ============================================================
     4. QUIZ FUNCTIONS
  ============================================================ */

  /* ----------------------------------------------------------
     4-1. START QUIZ
  ---------------------------------------------------------- */

  function start() {

    // 이름 확인
    if (!name.trim()) {
      setError('이름을 입력해 주세요.');
      return;
    }

    // 주차 확인
    if (!selected.length) {
      setError('주차를 하나 이상 선택해 주세요.');
      return;
    }

    // 문제 존재 여부 확인
    if (!available.length) {
      setError(
        '선택한 범위에 등록된 문제가 없어요. ' +
        '다른 주차를 선택하거나 문제를 추가해 주세요.'
      );
      return;
    }

    // 이름 저장
    localStorage.setItem('study-quiz-name', name.trim());

    // 문제 섞기
    const shuffled = [...available].sort(
      () => Math.random() - 0.5
    );

    // 출제 문제 수
    const n =
      count === 'all'
        ? shuffled.length
        : Math.min(Number(count), shuffled.length);

    // 랭킹: 고정 순서 / 연습: 무작위
    const picked =
      mode === 'rank'
        ? [...available]
            .sort((a, b) =>
              String(a.id).localeCompare(String(b.id))
            )
            .slice(0, n)
        : shuffled.slice(0, n);

    // 퀴즈 초기화
    setQuiz(picked);
    setAnswers({});
    setIndex(0);
    setSeconds(0);
    setOutcome(null);
    setShowReview(false);
    setError('');

    // 시작 시각 기록
    started.current = Date.now();

    nav('quiz');
  }


  /* ----------------------------------------------------------
     4-2. FINISH QUIZ
  ---------------------------------------------------------- */

  async function finish() {

    // 랭킹 모드 제출 확인
    if (
      mode === 'rank' &&
      !window.confirm('답안을 제출하고 채점할까요?')
    ) {
      return;
    }

    // 소요 시간
    const elapsed = Math.max(
      1,
      Math.floor((Date.now() - started.current) / 1000)
    );

    // 정답 개수
    const correct = quiz.filter(
      (q) => answers[q.id] === q.answer
    ).length;

    // 결과 기록
    const record = {
      id: crypto.randomUUID(),
      name: name.trim(),
      subject,
      weeks: [...selected],
      question_ids: quiz.map((q) => q.id),
      correct,
      total: quiz.length,
      score: Math.round((correct / quiz.length) * 100),
      elapsed_seconds: elapsed,
      created_at: new Date().toISOString(),
      mode,
    };

    setOutcome(record);
    nav('result');

    // 데이터베이스에 결과 저장
    try {
      await saveResult(record);
      setResults(await loadResults());
    } catch (e) {
      setError('기록 저장에 실패했어요: ' + e.message);
    }
  }


  /* ============================================================
     5. RANKING DATA
  ============================================================ */

  const ranking = useMemo(() => {
    return results
      .filter((r) =>
        (rankSubject === 'all' || r.subject === rankSubject) &&
        (
          rankWeek === 'all' ||
          (r.weeks || []).includes(Number(rankWeek))
        ) &&
        r.mode !== 'practice'
      )
      .sort(
        (a, b) =>
          b.score - a.score ||
          a.elapsed_seconds - b.elapsed_seconds
      );
  }, [results, rankSubject, rankWeek]);


  /* ============================================================
     6. RENDER
  ============================================================ */

  return (
    <div className="app">

      {/* ======================================================
          6-1. SIDEBAR
      ====================================================== */}

      <aside className={`sidebar ${mobileMenu ? 'open' : ''}`}>

        {/* 로고 */}
        <div
          className="brand"
          onClick={() => nav('home')}
        >
          {/* <div className="brand-mark">
            <BookOpen size={20} />
          </div> */}

          <div className="brand-name">
            Pharma<span>Quiz</span>
            <small>PharmaLearn</small>
          </div>
        </div>

        <div className="side-caption">
          MENU
        </div>

        {/* 사이드바 메뉴 */}
        <nav>
          {[
            ['home', Home, '대시보드'],
            ['practice', BookOpen, '퀴즈 연습'],
            ['challenge', Trophy, '랭킹 도전'],
            ['ranking', Medal, '리더보드'],
          ].map(([p, Icon, label]) => (
            <button
              key={p}
              className={`nav-item ${isNavActive(p) ? 'active' : ''}`}
              onClick={() =>
                p === 'practice'
                  ? openMode('practice')
                  : p === 'challenge'
                    ? openMode('rank')
                    : nav(p)
              }
            >
              <Icon size={19} />

              {label}

              {isNavActive(p) && (
                <span className="active-dot" />
              )}
            </button>
          ))}
        </nav>

        {/* 데이터베이스 상태 */}
        <div className="side-bottom">
          <div className="cloud-indicator">
            <span
              className={`status-dot ${isCloud ? 'online' : ''}`}
            />

            {isCloud
              ? '공유 데이터베이스 연결됨'
              : '데모 모드 · 이 기기에만 저장'}
          </div>
        </div>
      </aside>


      {/* 모바일 사이드바 배경 */}
      {mobileMenu && (
        <div
          className="backdrop"
          onClick={() => setMobileMenu(false)}
        />
      )}


      {/* ======================================================
          6-2. MAIN CONTENT
      ====================================================== */}

      <main className="main">

        {/* 상단 헤더 */}
        <header className="topbar">

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenu(true)}
          >
            <Menu size={23} />
          </button>

          <div className="crumb">
            STUDY SPACE

            <ChevronRight size={14} />

            <strong>
              {({
                home: '대시보드',
                setup:
                  mode === 'practice'
                    ? '퀴즈 연습'
                    : '랭킹 도전',
                quiz: '문제 풀이',
                result: '학습 결과',
                ranking: '리더보드',
              })[page]}
            </strong>
          </div>

          <div className="top-right">
            <span className="today">
              
            </span>

            <div className="avatar">
              {(name || 'S').slice(0, 1)}
            </div>
          </div>
        </header>


        <div className="content">

          {/* 에러 메시지 */}
          {error && (
            <div className="error">
              <span>{error}</span>

              <button onClick={() => setError('')}>
                <X size={16} />
              </button>
            </div>
          )}


          {/* ==================================================
              7. DASHBOARD
          ================================================== */}

          {page === 'home' && (
            <>

              {/* 대시보드 제목 */}
              <div className="home-heading">
                <span className="eyebrow muted">
                  PharmaLearn
                </span>

                <h1>PharmaQuiz</h1>

                <p>
                  과목과 범위를 선택해 연습하거나,
                  같은 문제로 랭킹에 도전하세요.
                </p>
              </div>


              {/* 퀴즈 모드 선택 */}
              <div className="mode-grid">

                {/* 연습 모드 */}
                <button
                  className="mode-card"
                  onClick={() => openMode('practice')}
                >
                  <div className="mode-icon">
                    <BookOpen size={30} />
                  </div>

                  <span className="mode-label">
                    PRACTICE
                  </span>

                  <h2>퀴즈 연습</h2>

                  <p>
                    문제를 풀자마자 정답과 해설을 확인하며
                    복습해요. 연습 문제는 랭킹 문제와 별개예요.
                  </p>

                  <strong>
                    연습 시작하기
                    <ArrowRight size={18} />
                  </strong>
                </button>


                {/* 랭킹 모드 */}
                <button
                  className="mode-card"
                  onClick={() => openMode('rank')}
                >
                  <div className="mode-icon">
                    <Trophy size={30} />
                  </div>

                  <span className="mode-label">
                    CHALLENGE
                  </span>

                  <h2>랭킹 도전</h2>

                  <p>
                    정답은 제출 후 공개돼요.
                    점수와 풀이 시간으로 친구들과 순위를 겨뤄보세요.
                  </p>

                  <strong>
                    랭킹 도전하기
                    <ArrowRight size={18} />
                  </strong>
                </button>
              </div>


              {/* 학습 통계 */}
              <div className="stats">
                {[
                  [
                    <FileQuestion size={20} />,
                    stats.attempts,
                    '누적 퀴즈 응시',
                  ],
                  [
                    <Medal size={20} />,
                    stats.people,
                    '참여한 학습자',
                  ],
                  [
                    <CheckCircle2 size={20} />,
                    stats.average + '%',
                    '평균 정답률',
                  ],
                ].map(([icon, value, label], i) => (
                  <div className="stat" key={i}>
                    <div className={`stat-icon s${i}`}>
                      {icon}
                    </div>

                    <div>
                      <strong>{value}</strong>
                      <span>{label}</span>
                    </div>
                  </div>
                ))}
              </div>


              {/* 학습 과목 */}
              <div className="section-head">
                <div>
                  <span className="eyebrow muted">
                    SUBJECTS
                  </span>

                  <h2>학습 과목</h2>
                </div>
              </div>

              <div className="subject-grid">
                {subjects.map((s) => (
                  <button
                    className={`subject-card ${s.tone}`}
                    key={s.id}
                    onClick={() => {
                      setSubject(s.id);
                      openMode('practice');
                    }}
                  >
                    <span className="subject-emoji">
                      {s.icon}
                    </span>

                    <span className="subject-name">
                      {s.name}
                    </span>

                    <span className="subject-en">
                      {s.en}
                    </span>

                    <span className="subject-foot">
                      연습 문제 풀기
                      <ArrowRight size={16} />
                    </span>
                  </button>
                ))}
              </div>

            </>
          )}


          {/* ==================================================
              8. QUIZ SETUP
          ================================================== */}

          {page === 'setup' && (
            <>

              {/* 페이지 제목 */}
              <div className="page-heading">
                <span className="eyebrow muted">
                  
                </span>

                <h1>
                  {mode === 'practice'
                    ? '퀴즈 연습'
                    : '랭킹 도전'}
                </h1>

                <p>
                  {mode === 'practice'
                    ? '문제마다 정답과 해설을 바로 확인할 수 있어요.'
                    : '정답은 최종 제출 후 확인할 수 있어요.'}
                </p>
              </div>


              <div className="setup-layout">

                {/* 왼쪽: 퀴즈 설정 */}
                <section className="panel form-panel">

                  {/* 01. 이름 입력 */}
                  <div className="form-group">

                    <div className="group-label">
                      <span className="step">01</span>

                      <div>
                        <h3>이름을 알려주세요</h3>
                        <p>결과와 순위에 표시되는 이름이에요.</p>
                      </div>
                    </div>

                    <input
                      className="name-input"
                      maxLength={20}
                      placeholder="이름 또는 닉네임 입력"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="divider" />


                  {/* 02. 과목 선택 */}
                  <div className="form-group">

                    <div className="group-label">
                      <span className="step">02</span>

                      <div>
                        <h3>과목 선택</h3>
                        <p>한 가지 과목을 선택해 주세요.</p>
                      </div>
                    </div>

                    <div className="choice-subjects">
                      {subjects.map((s) => (
                        <button
                          key={s.id}
                          className={`choice-sub ${
                            subject === s.id ? 'chosen' : ''
                          }`}
                          onClick={() => setSubject(s.id)}
                        >
                          <span>{s.icon}</span>
                          <strong>{s.name}</strong>

                          {subject === s.id && (
                            <CheckCircle2 size={17} />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="divider" />


                  {/* 03. 학습 범위 선택 */}
                  <div className="form-group">

                    <div className="group-label">
                      <span className="step">03</span>

                      <div>
                        <h3>
                          학습 범위 선택
                          <small>복수 선택 가능</small>
                        </h3>

                        <p>원하는 주차를 모두 골라주세요.</p>
                      </div>
                    </div>

                    <div className="week-grid">
                      {weeks.map((w) => (
                        <button
                          key={w.id}
                          className={`week-choice ${
                            selected.includes(w.id)
                              ? 'chosen'
                              : ''
                          }`}
                          onClick={() => toggleWeek(w.id)}
                        >
                          <span className="checkbox">
                            {selected.includes(w.id) && (
                              <Check size={15} />
                            )}
                          </span>

                          {w.label}
                        </button>
                      ))}
                    </div>

                    <button
                      className="mini-link"
                      onClick={() =>
                        setSelected(
                          selected.length === 4
                            ? []
                            : [1, 2, 3, 4]
                        )
                      }
                    >
                      {selected.length === 4
                        ? '전체 해제'
                        : '전체 선택'}
                    </button>
                  </div>

                  <div className="divider" />


                  {/* 04. 문제 수 설정 */}
                  <div className="form-group">

                    <div className="group-label">
                      <span className="step">04</span>

                      <div>
                        <h3>퀴즈 설정</h3>
                        <p>원하는 방식으로 학습해요.</p>
                      </div>
                    </div>

                    <div className="settings-row">
                      <label>
                        문제 수

                        <select
                          value={count}
                          onChange={(e) =>
                            setCount(e.target.value)
                          }
                        >
                          <option value="all">전체 문제</option>
                          <option value="5">5문제</option>
                          <option value="10">10문제</option>
                          <option value="20">20문제</option>
                        </select>
                      </label>
                    </div>

                    <p className="hint">
                      {mode === 'practice'
                        ? '연습 전용 문제만 출제되며 정답을 선택하면 즉시 해설이 나와요.'
                        : '랭킹 전용 문제만 출제되며 제출 전에는 정답을 볼 수 없어요.'}
                    </p>
                  </div>

                </section>


                {/* 오른쪽: 설정 미리보기 */}
                <aside className="panel summary-panel">

                  <div className="summary-icon">
                    ✨
                  </div>

                  <h3>퀴즈 미리보기</h3>

                  <p>
                    선택한 학습 설정을 확인해 주세요.
                  </p>

                  <div className="summary-rows">

                    <div>
                      <span>과목</span>

                      <strong>
                        {sub(subject).icon} {sub(subject).name}
                      </strong>
                    </div>

                    <div>
                      <span>범위</span>

                      <strong>
                        {selected.length
                          ? selected
                              .map(
                                (i) =>
                                  weeks.find((w) => w.id === i)
                                    ?.label
                              )
                              .join(', ')
                          : '미선택'}
                      </strong>
                    </div>

                    <div>
                      <span>출제 가능</span>
                      <strong>{available.length}문제</strong>
                    </div>

                    <div>
                      <span>출제 문제</span>

                      <strong>
                        {count === 'all'
                          ? available.length
                          : Math.min(
                              Number(count),
                              available.length
                            )}
                        문제
                      </strong>
                    </div>

                    <div>
                      <span>모드</span>

                      <strong>
                        {mode === 'rank'
                          ? '🏆 랭킹'
                          : '📖 연습'}
                      </strong>
                    </div>

                  </div>

                  <button
                    className="primary full"
                    onClick={start}
                  >
                    퀴즈 시작하기
                    <ArrowRight size={18} />
                  </button>

                  <div className="summary-note">
                    <Clock3 size={16} />
                    시작과 동시에 시간이 측정됩니다.
                  </div>

                </aside>
              </div>

            </>
          )}


          {/* ==================================================
              9. QUIZ PLAY
          ================================================== */}

          {page === 'quiz' && quiz.length > 0 && (
            <>

              {/* 퀴즈 상단 */}
              <div className="quiz-top">

                <button
                  className="back-link"
                  onClick={() => {
                    if (
                      window.confirm(
                        '퀴즈를 종료할까요? 현재 답안은 저장되지 않아요.'
                      )
                    ) {
                      nav('setup');
                    }
                  }}
                >
                  <ArrowLeft size={17} />
                  나가기
                </button>

                <div className="timer">
                  <Clock3 size={18} />
                  {fmt(seconds)}
                </div>

              </div>


              <div className="quiz-layout">

                {/* 문제 영역 */}
                <section className="panel quiz-panel">

                  {/* 과목 / 진행 상황 */}
                  <div className="quiz-overline">
                    <span>
                      {sub(subject).icon} {sub(subject).name}
                      {' · '}
                      {mode === 'rank'
                        ? '랭킹 모드'
                        : '연습 모드'}
                    </span>

                    <strong>
                      {index + 1}
                      <span> / {quiz.length}</span>
                    </strong>
                  </div>


                  {/* 진행률 */}
                  <div className="progress">
                    <div
                      style={{
                        width: `${
                          ((index + 1) / quiz.length) * 100
                        }%`,
                      }}
                    />
                  </div>


                  {/* 문제 */}
                  <span className="question-tag">
                    QUESTION {String(index + 1).padStart(2, '0')}
                  </span>

                  <h2>{quiz[index].question}</h2>


                  {/* 선택지 */}
                  <div className="options">
                    {quiz[index].options.map((o, i) => (
                      <button
                        key={i}
                        className={
                          'option ' +
                          (
                            answers[quiz[index].id] === i
                              ? 'selected '
                              : ''
                          ) +
                          (
                            locked
                              ? i === quiz[index].answer
                                ? 'correct-option'
                                : answers[quiz[index].id] === i
                                  ? 'wrong-option'
                                  : ''
                              : ''
                          )
                        }
                        disabled={locked}
                        onClick={() =>
                          setAnswers((previous) => ({
                            ...previous,
                            [quiz[index].id]: i,
                          }))
                        }
                      >
                        <span className="option-letter">
                          {String.fromCharCode(65 + i)}
                        </span>

                        <span>{o}</span>

                        {answers[quiz[index].id] === i && (
                          <CheckCircle2 size={20} />
                        )}
                      </button>
                    ))}
                  </div>


                  {/* 연습 모드: 즉시 정답 및 해설 */}
                  {locked && (
                    <div className="instant-feedback">

                      <strong>
                        {answers[quiz[index].id] ===
                        quiz[index].answer
                          ? '✓ 정답이에요!'
                          : '✕ 아쉬워요!'}

                        {' '}정답: {
                          quiz[index].options[
                            quiz[index].answer
                          ]
                        }
                      </strong>

                      <p>
                        {quiz[index].explanation ||
                          '해설이 등록되지 않았습니다.'}
                      </p>

                    </div>
                  )}


                  {/* 이전 / 다음 / 제출 버튼 */}
                  <div className="quiz-actions">

                    <button
                      className="secondary"
                      disabled={
                        index === 0 ||
                        mode === 'practice'
                      }
                      onClick={() =>
                        setIndex((i) => i - 1)
                      }
                    >
                      <ArrowLeft size={17} />
                      이전
                    </button>


                    {index === quiz.length - 1 ? (

                      <button
                        className="primary"
                        disabled={
                          mode === 'practice' && !locked
                        }
                        onClick={finish}
                      >
                        {mode === 'practice'
                          ? '연습 완료'
                          : '답안 제출'}

                        <Flag size={17} />
                      </button>

                    ) : (

                      <button
                        className="primary"
                        disabled={
                          mode === 'practice' && !locked
                        }
                        onClick={() =>
                          setIndex((i) => i + 1)
                        }
                      >
                        다음 문제
                        <ArrowRight size={17} />
                      </button>

                    )}

                  </div>
                </section>


                {/* 오른쪽: 문제 탐색 */}
                <aside className="panel quiz-map">

                  <h3>문제 탐색</h3>

                  <p>번호를 눌러 이동할 수 있어요.</p>

                  <div className="number-grid">
                    {quiz.map((q, i) => (
                      <button
                        key={q.id}
                        className={
                          (index === i ? 'current ' : '') +
                          (
                            answers[q.id] !== undefined
                              ? 'answered'
                              : ''
                          )
                        }
                        disabled={
                          mode === 'practice' &&
                          i > index
                        }
                        onClick={() => setIndex(i)}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>

                  <div className="map-legend">
                    <span>
                      <i className="legend-filled" />
                      답변 완료
                    </span>

                    <span>
                      <i />
                      미답변
                    </span>
                  </div>

                  <div className="answered-count">
                    {Object.keys(answers).length}
                    {' / '}
                    {quiz.length} 답변 완료
                  </div>

                </aside>
              </div>

            </>
          )}


          {/* ==================================================
              10. RESULT PAGE
          ================================================== */}

          {page === 'result' && outcome && (
            <>

              {/* 결과 요약 */}
              <div className="result-card panel">

                <div className="result-icon">
                  🎉
                </div>

                <span className="eyebrow muted">
                  QUIZ COMPLETED
                </span>

                <h1>
                  수고했어요, {outcome.name}님!
                </h1>

                <p>
                  {sub(outcome.subject).name} 퀴즈를 완료했어요.
                  오늘도 한 걸음 성장했네요.
                </p>


                {/* 점수 */}
                <div className="score-ring">
                  <strong>
                    {outcome.score}
                    <small>점</small>
                  </strong>

                  <span>YOUR SCORE</span>
                </div>


                {/* 결과 통계 */}
                <div className="result-stats">

                  <div>
                    <strong>
                      {outcome.correct} / {outcome.total}
                    </strong>
                    <span>맞힌 문제</span>
                  </div>

                  <div>
                    <strong>
                      {fmt(outcome.elapsed_seconds)}
                    </strong>
                    <span>풀이 시간</span>
                  </div>

                  <div>
                    <strong>{outcome.score}%</strong>
                    <span>정답률</span>
                  </div>

                </div>


                {/* 결과 화면 버튼 */}
                <div className="result-buttons">

                  <button
                    className="secondary"
                    onClick={() =>
                      setShowReview((v) => !v)
                    }
                  >
                    {showReview
                      ? '해설 닫기'
                      : '정답 · 해설 보기'}
                  </button>

                  <button
                    className="primary"
                    onClick={() => nav('setup')}
                  >
                    다시 풀기
                    <RotateCcw size={17} />
                  </button>

                  <button
                    className="secondary"
                    onClick={() => nav('ranking')}
                  >
                    랭킹 보기
                    <Trophy size={17} />
                  </button>

                </div>
              </div>


              {/* 정답 및 해설 목록 */}
              {showReview && (
                <div className="review-list">
                  {quiz.map((q, i) => (
                    <div
                      className="panel review-item"
                      key={q.id}
                    >

                      <span
                        className={`review-badge ${
                          answers[q.id] === q.answer
                            ? 'right'
                            : 'wrong'
                        }`}
                      >
                        {answers[q.id] === q.answer
                          ? '정답'
                          : '오답'}
                      </span>

                      <h3>
                        {i + 1}. {q.question}
                      </h3>

                      <p>
                        내 답:{' '}
                        {answers[q.id] === undefined
                          ? '미응답'
                          : q.options[answers[q.id]]}
                      </p>

                      <p className="correct-answer">
                        정답: {q.options[q.answer]}
                      </p>

                      <div className="explanation">
                        💡{' '}
                        {q.explanation ||
                          '해설이 등록되지 않았습니다.'}
                      </div>

                    </div>
                  ))}
                </div>
              )}

            </>
          )}


          {/* ==================================================
              11. LEADERBOARD
          ================================================== */}

          {page === 'ranking' && (
            <>

              {/* 리더보드 제목 */}
              <div className="page-heading">

                <span className="eyebrow muted">
                  
                </span>

                <h1>
                  리더보드 🏆
                </h1>

                <p>
                  점수가 같다면 더 빠르게 푼 사람이 앞서요.
                </p>

              </div>


            


              {/* 순위 목록 */}
              <section className="panel rank-panel">

                {/* 필터 */}
                <div className="rank-header">

                  <div>
                    <h3>전체 순위</h3>

                    <p>
                      과목과 범위를 선택해 확인해 보세요.
                    </p>
                  </div>

                  <div className="rank-filters">

                    {/* 과목 필터 */}
                    <select
                      value={rankSubject}
                      onChange={(e) =>
                        setRankSubject(e.target.value)
                      }
                    >
                      <option value="all">
                        전체 과목
                      </option>

                      {subjects.map((s) => (
                        <option
                          key={s.id}
                          value={s.id}
                        >
                          {s.name}
                        </option>
                      ))}
                    </select>


                    {/* 주차 필터 */}
                    <select
                      value={rankWeek}
                      onChange={(e) =>
                        setRankWeek(e.target.value)
                      }
                    >
                      <option value="all">
                        전체 주차
                      </option>

                      {weeks.map((w) => (
                        <option
                          key={w.id}
                          value={w.id}
                        >
                          {w.label}
                        </option>
                      ))}
                    </select>

                  </div>
                </div>


                {/* 랭킹 안내 */}
                <div className="rank-note">
                  ※ 서로 다른 범위·문제 수의 기록이 함께
                  표시될 수 있습니다. 정확한 비교는 동일
                  조건에서 진행하세요.
                </div>


                {/* 랭킹 데이터 존재 */}
                {ranking.length ? (

                  <div className="table-wrap">
                    <table>

                      <thead>
                        <tr>
                          <th>순위</th>
                          <th>이름</th>
                          <th>과목</th>
                          <th>범위</th>
                          <th>점수</th>
                          <th>시간</th>
                        </tr>
                      </thead>

                      <tbody>
                        {ranking.map((r, i) => (
                          <tr key={r.id || i}>

                            <td>
                              <span
                                className={`place ${
                                  i < 3 ? 'top-place' : ''
                                }`}
                              >
                                {['🥇', '🥈', '🥉'][i] ||
                                  i + 1}
                              </span>
                            </td>

                            <td>
                              <strong>{r.name}</strong>
                            </td>

                            <td>
                              {sub(r.subject).icon}
                              {' '}
                              {sub(r.subject).name}
                            </td>

                            <td>
                              {(r.weeks || [])
                                .map(
                                  (w) =>
                                    weeks.find(
                                      (x) =>
                                        x.id === Number(w)
                                    )?.label
                                )
                                .join(', ')}
                            </td>

                            <td>
                              <strong className="score-text">
                                {r.score}점
                              </strong>
                            </td>

                            <td>
                              {fmt(r.elapsed_seconds)}
                            </td>

                          </tr>
                        ))}
                      </tbody>

                    </table>
                  </div>

                ) : (

                  /* 랭킹 데이터 없음 */
                  <div className="empty-state">

                    <div>🏆</div>

                    <h3>
                      아직 랭킹 기록이 없어요
                    </h3>

                    <p>
                      첫 번째 도전자가 되어 보세요!
                    </p>

                    <button
                      className="primary"
                      onClick={() => {
                        setMode('rank');
                        nav('setup');
                      }}
                    >
                      랭킹 도전하기
                      <ArrowRight size={17} />
                    </button>

                  </div>

                )}

              </section>

            </>
          )}


          {/* ==================================================
              12. FOOTER
          ================================================== */}

          <footer>
            PharmaQuiz · Made for pharmacy students
          </footer>

        </div>
      </main>

    </div>
  );
}


/* ============================================================
   13. REACT ROOT
============================================================ */

createRoot(document.getElementById('root')).render(
  <App />
);