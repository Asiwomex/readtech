import Link from "@/components/Link";
import { Heart, Eye } from "lucide-react";
import type { Post } from "@/data/mockData";

interface ArticleCardProps {
  post: Post;
  variant?: "default" | "featured";
}

const ArticleCard = ({ post, variant = "default" }: ArticleCardProps) => {
  if (variant === "featured") {
    return (
      <Link to={`/article/${post.slug}`} className="group block">
        <article className="card grid gap-6 md:grid-cols-2 overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-xl">
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center p-6 md:p-8">
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-badge-bg px-3 py-1 text-xs font-medium text-badge-text">
                {post.category.name}
              </span>
              <span className="text-xs text-muted-foreground">{post.readTime} min read</span>
            </div>
            <h2 className="mb-3 text-2xl font-semibold leading-tight group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="mb-4 text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={post.author.avatar} alt={post.author.name} loading="lazy" decoding="async" className="h-8 w-8 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-medium">{post.author.name}</p>
                  <p className="text-xs text-muted-foreground">{post.createdAt}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Heart className="h-3.5 w-3.5" /> {post.likeCount}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="h-3.5 w-3.5" /> {post.viewCount.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link to={`/article/${post.slug}`} className="group block">
      <article className="card overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-xl">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-5">
          <div className="mb-3 flex items-center gap-3">
            <span className="rounded-full bg-badge-bg px-2.5 py-0.5 text-xs font-medium text-badge-text">
              {post.category.name}
            </span>
            <span className="text-xs text-muted-foreground">{post.readTime} min read</span>
          </div>
          <h3 className="mb-2 text-lg font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="mb-4 text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={post.author.avatar} alt={post.author.name} loading="lazy" decoding="async" className="h-7 w-7 rounded-full object-cover" />
              <div>
                <p className="text-sm font-medium">{post.author.name}</p>
                <p className="text-xs text-muted-foreground">{post.createdAt}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Heart className="h-3 w-3" /> {post.likeCount}
              </span>
              <span className="flex items-center gap-1">
                <Eye className="h-3 w-3" /> {post.viewCount.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;
