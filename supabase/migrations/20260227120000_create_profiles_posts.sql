-- Create profiles table linking to auth.users
create table if not exists profiles (
  id uuid primary key references auth.users on delete cascade,
  username text unique,
  avatar_url text,
  created_at timestamptz default now()
);

-- Create posts table
create table if not exists posts (
  id uuid primary key default gen_random_uuid(),
  author uuid references profiles(id) on delete cascade,
  title text not null,
  slug text unique not null,
  content text,
  excerpt text,
  cover_url text,
  published boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Enable RLS on posts
alter table posts enable row level security;

-- Allow selecting published posts
create policy "public select published" on posts
  for select using (published = true);

-- Allow authenticated users to insert (author must match current user)
create policy "insert if authenticated" on posts
  for insert with check (auth.uid() IS NOT NULL);

-- Allow users to update/delete only their own posts
create policy "update own post" on posts
  for update using (author = auth.uid());

create policy "delete own post" on posts
  for delete using (author = auth.uid());

-- Optional: keep updated_at current on updates
create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger set_updated_at_trigger
  before update on posts
  for each row execute function set_updated_at();
