-- LineHaul Station blog — Supabase schema.
-- Run this once in your Supabase project (SQL Editor → New query → paste → Run).
-- Then add an admin user (Authentication → Users → Add user, with a password)
-- and run `npm run blog:seed` to load the existing posts.

create extension if not exists "pgcrypto";

create table if not exists public.posts (
  id          uuid primary key default gen_random_uuid(),
  slug        text unique not null,
  title       text not null,
  kicker      text not null default '',
  excerpt     text not null default '',
  byline      text not null default 'LineHaul Station',
  date        date not null default current_date,
  hero        text not null default '',
  hero_alt    text not null default '',
  seo_title   text not null default '',
  keywords    text[] not null default '{}',
  body        text not null default '',          -- Markdown
  published   boolean not null default true,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create index if not exists posts_published_date_idx on public.posts (published, date desc);

-- Keep updated_at fresh on every edit.
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists posts_set_updated_at on public.posts;
create trigger posts_set_updated_at
  before update on public.posts
  for each row execute function public.set_updated_at();

-- Row Level Security: the public can read only published posts; signed-in
-- admins can read everything and make changes. The seed script uses the
-- service-role key, which bypasses RLS.
alter table public.posts enable row level security;

drop policy if exists "public read published" on public.posts;
create policy "public read published" on public.posts
  for select using (published = true);

drop policy if exists "authenticated read all" on public.posts;
create policy "authenticated read all" on public.posts
  for select to authenticated using (true);

drop policy if exists "authenticated insert" on public.posts;
create policy "authenticated insert" on public.posts
  for insert to authenticated with check (true);

drop policy if exists "authenticated update" on public.posts;
create policy "authenticated update" on public.posts
  for update to authenticated using (true) with check (true);

drop policy if exists "authenticated delete" on public.posts;
create policy "authenticated delete" on public.posts
  for delete to authenticated using (true);
