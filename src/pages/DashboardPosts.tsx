import { posts } from "@/data/mockData";
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

const DashboardPosts = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">My Posts</h2>
        <a
          href="/dashboard/new"
          className="inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          New Post
        </a>
      </div>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-secondary/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Title</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden sm:table-cell">Status</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden md:table-cell">Created</th>
              <th className="px-4 py-3 text-right font-medium text-muted-foreground hidden sm:table-cell">Views</th>
              <th className="px-4 py-3 text-right font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors">
                <td className="px-4 py-3 font-medium max-w-[240px] truncate">{post.title}</td>
                <td className="px-4 py-3 hidden sm:table-cell">
                  <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                    post.published ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                  }`}>
                    {post.published ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">{post.createdAt}</td>
                <td className="px-4 py-3 text-right text-muted-foreground hidden sm:table-cell">{post.viewCount.toLocaleString()}</td>
                <td className="px-4 py-3 text-right">
                  <div className="relative inline-block">
                    <button
                      onClick={() => setOpenMenu(openMenu === post.id ? null : post.id)}
                      className="rounded-md p-1.5 text-muted-foreground hover:bg-secondary transition-colors"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                    {openMenu === post.id && (
                      <div className="absolute right-0 top-full z-10 mt-1 w-36 rounded-lg border border-border bg-card p-1 shadow-lg">
                        <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
                          <Pencil className="h-3.5 w-3.5" /> Edit
                        </button>
                        <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-destructive hover:bg-destructive/10 transition-colors">
                          <Trash2 className="h-3.5 w-3.5" /> Delete
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPosts;
