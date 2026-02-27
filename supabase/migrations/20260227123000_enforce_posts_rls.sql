-- Migration: tighten RLS on posts
-- Creates an `admins` table and policies so only authors or admins can access/modify posts.

-- Admins table holds user IDs who are global admins
create table if not exists admins (
  id uuid primary key references auth.users on delete cascade
);

-- Helper to check admin status for current user
create or replace function is_admin()
returns boolean as $$
  select exists(select 1 from admins where id = auth.uid());
$$ language sql stable;

-- Ensure RLS is enabled
alter table posts enable row level security;

-- Drop existing policies (if present) to replace with stricter ones
drop policy if exists "public select published" on posts;
drop policy if exists "insert if authenticated" on posts;
drop policy if exists "update own post" on posts;
drop policy if exists "delete own post" on posts;

-- Select: allow published posts to everyone, and allow a user to select their own posts.
-- Admins may select any post.
create policy "select own or published or admin" on posts
  for select using (
    published = true
    or author = auth.uid()
    or is_admin()
  );

-- Insert: ensure the author column matches the authenticated user
create policy "insert author match" on posts
  for insert with check (author = auth.uid());

-- Update: only the author or an admin can update
create policy "update own or admin" on posts
  for update using (author = auth.uid() or is_admin());

-- Delete: only the author or an admin can delete
create policy "delete own or admin" on posts
  for delete using (author = auth.uid() or is_admin());

-- Note: after applying this migration, add your owner/admin account to the `admins` table.
-- Example (run in Supabase SQL editor):
-- insert into admins (id) values ('<OWNER_USER_ID>');
