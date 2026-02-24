import { Link } from "react-router-dom";
import { authors, posts } from "@/data/mockData";

const Authors = () => {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Authors</h1>
        <p className="mt-2 text-muted-foreground">Meet the contributors behind readtech.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {authors.map((author) => {
          const articleCount = posts.filter((p) => p.author.id === author.id).length;
          return (
            <Link
              key={author.id}
              to={`/author/${author.id}`}
              className="group flex items-start gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <img src={author.avatar} alt={author.name} className="h-12 w-12 rounded-full object-cover" />
              <div>
                <h2 className="font-semibold group-hover:text-primary">{author.name}</h2>
                <p className="mt-0.5 text-sm text-muted-foreground">{author.role}</p>
                <p className="mt-1 text-xs text-muted-foreground">{articleCount} article{articleCount !== 1 ? "s" : ""}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Authors;
