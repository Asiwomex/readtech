import { useState } from "react";
import { Search } from "lucide-react";
import { posts, categories } from "@/data/mockData";
import ArticleCard from "@/components/ArticleCard";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === "all" || post.category.slug === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts[0];
  const remainingPosts = filteredPosts.filter((p) => p.id !== featuredPost.id);

  return (
    <div>
      {/* Hero */}
      <section className="relative border-b border-border">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="container relative px-4 sm:px-6 py-16 sm:py-20 md:py-28">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] mb-4">
              Knowledge that compounds.
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              Deep technical insights from experienced engineers, architects, and leaders building production systems at scale.
            </p>
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-11 w-full rounded-lg border border-border bg-background pl-10 pr-4 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      {!searchQuery && activeCategory === "all" && (
        <section className="container px-4 sm:px-6 py-10">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Featured</h2>
          </div>
          <ArticleCard post={featuredPost} variant="featured" />
        </section>
      )}

      {/* Categories + Articles */}
      <section className="container px-4 sm:px-6 py-10">
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              activeCategory === "all"
                ? "bg-foreground text-background"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.slug)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeCategory === cat.slug
                  ? "bg-foreground text-background"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(searchQuery || activeCategory !== "all" ? filteredPosts : remainingPosts).map((post, i) => (
            <div key={post.id} className="animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
              <ArticleCard post={post} />
            </div>
          ))}
        </div>
        {filteredPosts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-muted-foreground">No articles found matching your criteria.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Index;