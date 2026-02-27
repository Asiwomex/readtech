# Welcome to your Readtech project


Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Supabase setup

If you have a Supabase project ready, follow these steps to connect it to this app:

1. Copy the example env file to `.env.local` and fill in your values:

```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=eyJ...your_anon_key...
```

2. Restart the dev server after adding `.env.local`.

3. Create the recommended tables and policies using the SQL editor in the Supabase dashboard (or the Supabase CLI). See `supabase/migrations/20260227120000_create_profiles_posts.sql` for an example migration included in this repo.

4. Enable Row-Level Security (RLS) on the `posts` table and add policies so users can only modify their own posts. The example migration includes basic policies you can adapt.

5. For file uploads (images/covers) create a Storage bucket in Supabase and use the Storage API from the frontend or via Edge Functions.


