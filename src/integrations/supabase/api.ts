import { supabase } from "./client";

export async function signUp(email: string, password: string) {
  return supabase.auth.signUp({ email, password });
}

export async function signIn(email: string, password: string) {
  return supabase.auth.signInWithPassword({ email, password });
}

export async function signOut() {
  return supabase.auth.signOut();
}

export async function getSession() {
  const { data } = await supabase.auth.getSession();
  return data.session;
}

export async function createPost(post: {
  title: string;
  slug: string;
  content?: string;
  excerpt?: string;
  cover_url?: string;
  published?: boolean;
}) {
  const { data } = await supabase.auth.getSession();
  const author = data.session?.user?.id;
  if (!author) throw new Error("Not authenticated");

  return supabase.from("posts").insert([{ ...post, author }]);
}

export async function fetchPublishedPosts() {
  return supabase.from("posts").select("*").eq("published", true).order("created_at", { ascending: false });
}

export async function uploadImage(file: File, path?: string) {
  const filePath = path ?? `images/${Date.now()}-${file.name}`;
  const { data, error } = await supabase.storage.from("images").upload(filePath, file);
  if (error) throw error;
  const { data: urlData } = supabase.storage.from("images").getPublicUrl(data.path);
  return urlData.publicUrl;
}
