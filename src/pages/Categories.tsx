import Link from "@/components/Link";
import { categories, posts } from "@/data/mockData";

const Categories = () => {
  const categoryData = categories.map((cat) => ({
    name: cat.name,
    count: posts.filter((p) => p.category.id === cat.id).length,
  }));

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Categories</h1>
        <p className="mt-2 text-muted-foreground">Explore articles organized by topic.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categoryData.map((cat) => (
          <Link
            key={cat.name}
            to={`/articles?category=${encodeURIComponent(cat.name)}`}
            className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <h2 className="text-lg font-semibold group-hover:text-primary">{cat.name}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{cat.count} article{cat.count !== 1 ? "s" : ""}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
