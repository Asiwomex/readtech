import { useState } from "react";
import { Bold, Italic, Heading2, List, ListOrdered, Quote, Code, Image, Link2 } from "lucide-react";
import { categories } from "@/data/mockData";
import { createPost, uploadImage } from "@/integrations/supabase/api";
import { useToast } from "@/hooks/use-toast";

const toolbarButtons = [
  { icon: Heading2, label: "Heading" },
  { icon: Bold, label: "Bold" },
  { icon: Italic, label: "Italic" },
  { icon: List, label: "Bullet list" },
  { icon: ListOrdered, label: "Numbered list" },
  { icon: Quote, label: "Blockquote" },
  { icon: Code, label: "Code block" },
  { icon: Image, label: "Image" },
  { icon: Link2, label: "Link" },
];

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPublished, setIsPublished] = useState(false);
  const { toast } = useToast();

  return (
    <div className="max-w-3xl">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
        <h2 className="text-xl font-semibold">New Post</h2>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={isPublished}
              onChange={(e) => setIsPublished(e.target.checked)}
              className="rounded border-border"
            />
            <span className="text-muted-foreground">Publish</span>
          </label>
          <button
            onClick={async () => {
              try {
                await createPost({ title, slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-"), content, excerpt: "" , published: false});
                toast({ title: "Saved", description: "Draft saved." });
              } catch (e: any) {
                toast({ title: "Error", description: e.message || "Could not save draft." });
              }
            }}
            className="rounded-md border border-border px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary transition-colors"
          >
            Save Draft
          </button>
          <button
            onClick={async () => {
              try {
                await createPost({ title, slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-"), content, excerpt: "", published: isPublished });
                toast({ title: isPublished ? "Published" : "Saved", description: isPublished ? "Post published." : "Post saved." });
              } catch (e: any) {
                toast({ title: "Error", description: e.message || "Could not save post." });
              }
            }}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {isPublished ? "Publish" : "Save"}
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Article title"
          className="w-full border-0 bg-transparent text-2xl sm:text-3xl font-bold outline-none placeholder:text-muted-foreground/40"
        />

        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <select className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary">
            <option value="">Select category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Cover image URL"
            className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          />
        </div>

        <input
          type="text"
          placeholder="Write a short excerpt..."
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
        />

        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-1 rounded-lg border border-border bg-secondary/30 p-1.5">
          {toolbarButtons.map((btn) => {
            const Icon = btn.icon;
            return (
              <button
                key={btn.label}
                title={btn.label}
                className="rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
              >
                <Icon className="h-4 w-4" />
              </button>
            );
          })}
        </div>

        {/* Editor */}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start writing your article..."
          className="min-h-[300px] sm:min-h-[400px] w-full rounded-lg border border-border bg-background p-4 text-sm leading-7 outline-none transition-colors focus:border-primary resize-none"
        />
      </div>
    </div>
  );
};

export default NewPost;