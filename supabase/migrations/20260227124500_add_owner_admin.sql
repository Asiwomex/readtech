-- Insert the owner account into admins
-- This makes the supplied user an admin who can manage all posts.

insert into admins (id)
values ('b094fe0f-0a5b-4a0e-9c77-7f019cb7fb83')
on conflict (id) do nothing;

-- Verify in Supabase: select * from admins;
