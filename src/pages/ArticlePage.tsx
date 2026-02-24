import { useParams } from "react-router-dom";
import Link from "@/components/Link";
import ReadProgress from "@/components/ReadProgress";
import { Heart, Bookmark, Share2, ArrowLeft, Eye } from "lucide-react";
import { useState } from "react";
import { posts } from "@/data/mockData";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

const ArticlePage = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const { user } = useAuth();
  const { toast } = useToast();
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(post?.likeCount ?? 0);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(post?.comments ?? []);

  if (!post) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-semibold mb-2">Article not found</h1>
        <Link to="/" className="text-sm text-primary hover:underline">Back to articles</Link>
      </div>
    );
  }

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount((c) => (liked ? c - 1 : c + 1));
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({ title: "Link copied", description: "Article link copied to clipboard." });
  };

  const handleComment = () => {
    if (!commentText.trim()) return;
    if (!user) {
      toast({ title: "Sign in required", description: "Please sign in to comment.", variant: "destructive" });
      return;
    }
    const newComment = {
      id: `c-${Date.now()}`,
      author: user.user_metadata?.full_name || user.email || "Anonymous",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face",
      content: commentText.trim(),
      date: new Date().toISOString().split("T")[0],
    };
    setComments((prev) => [newComment, ...prev]);
    setCommentText("");
    toast({ title: "Comment posted", description: "Your comment has been added." });
  };

  return (
    <article className="pb-16">
      <ReadProgress />
          {/* Cover */}
          <div className="aspect-[2/1] sm:aspect-[3/1] w-full overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>

      <div className="container max-w-3xl px-4 sm:px-6">
        <Link to="/" className="mt-6 sm:mt-8 mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-3.5 w-3.5" /> Back to articles
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-badge-bg px-3 py-1 text-xs font-medium text-badge-text">
              {post.category.name}
            </span>
            <span className="text-xs text-muted-foreground">{post.readTime} min read</span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Eye className="h-3 w-3" /> {post.viewCount.toLocaleString()} views
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link to={`/author/${post.author.id}`} className="flex items-center gap-3 group">
              <img src={post.author.avatar} alt={post.author.name} className="h-10 w-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-medium group-hover:text-primary transition-colors">{post.author.name}</p>
                <p className="text-xs text-muted-foreground">{post.author.role} · {post.createdAt}</p>
              </div>
            </Link>
            <div className="flex items-center gap-1">
              <button
                onClick={handleLike}
                className={`flex h-9 items-center gap-1.5 rounded-md px-3 text-sm transition-colors ${
                  liked ? "text-red-500" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} /> {likeCount}
              </button>
              <button
                onClick={() => setBookmarked(!bookmarked)}
                className={`flex h-9 w-9 items-center justify-center rounded-md transition-colors ${
                  bookmarked ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Bookmark className={`h-4 w-4 ${bookmarked ? "fill-current" : ""}`} />
              </button>
              <button
                onClick={handleShare}
                className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
              >
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose-article" dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* Comments */}
        <section className="mt-16 border-t border-border pt-10">
          <h2 className="text-xl font-semibold mb-6">
            Comments ({comments.length})
          </h2>
          {/* Comment input */}
          <div className="mb-8 flex gap-3">
            <div className="h-9 w-9 shrink-0 rounded-full bg-secondary" />
            <div className="flex-1 min-w-0">
              <textarea
                placeholder={user ? "Share your thoughts..." : "Sign in to comment..."}
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="w-full rounded-lg border border-border bg-background p-3 text-sm outline-none transition-colors focus:border-primary resize-none"
                rows={3}
              />
              <div className="mt-2 flex justify-end">
                <button
                  onClick={handleComment}
                  disabled={!commentText.trim()}
                  className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  Comment
                </button>
              </div>
            </div>
          </div>
          {/* Comment list */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id}>
                <div className="flex gap-3">
                  <img src={comment.avatar} alt={comment.author} className="h-8 w-8 shrink-0 rounded-full object-cover" />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-medium">{comment.author}</p>
                      <span className="text-xs text-muted-foreground">{comment.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{comment.content}</p>
                  </div>
                </div>
                {comment.replies?.map((reply) => (
                  <div key={reply.id} className="ml-8 sm:ml-11 mt-4 flex gap-3">
                    <img src={reply.avatar} alt={reply.author} className="h-7 w-7 shrink-0 rounded-full object-cover" />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-medium">{reply.author}</p>
                        <span className="text-xs text-muted-foreground">{reply.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{reply.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
};

export default ArticlePage;
