-- Supabase SQL Editor에서 한 번 실행하세요.
create table if not exists public.questions (
 id text primary key,
 subject text not null check (subject in ('pk','im','pg')),
 week integer not null check (week between 1 and 4),
 question text not null,
 options jsonb not null,
 answer_index integer not null check (answer_index between 0 and 3),
 explanation text default '',
 mode text not null default 'rank' check (mode in ('rank','practice')),
 active boolean not null default true
);
create table if not exists public.results (
 id uuid primary key default gen_random_uuid(),
 name text not null check (char_length(name) between 1 and 20),
 subject text not null,
 weeks integer[] not null,
 question_ids text[] not null,
 correct integer not null,
 total integer not null,
 score integer not null,
 elapsed_seconds integer not null,
 mode text not null default 'rank',
 created_at timestamptz not null default now()
);
alter table public.questions enable row level security;
alter table public.results enable row level security;
create policy "Anyone can read active questions" on public.questions for select to anon using (active = true);
create policy "Anyone can read results" on public.results for select to anon using (true);
create policy "Anyone can submit results" on public.results for insert to anon with check (score between 0 and 100 and total > 0 and correct between 0 and total and elapsed_seconds > 0 and mode in ('rank','practice'));
-- 공개 익명 제출 방식이므로 조작 방지/본인 인증은 지원하지 않습니다.
-- 관리자 문제 등록은 Supabase Table Editor에서 진행하세요.

-- 기존 questions 테이블이 있다면 아래 SQL도 실행하세요.
alter table public.questions add column if not exists mode text not null default 'rank';
