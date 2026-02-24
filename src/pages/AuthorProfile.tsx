import { useParams, Link } from "react-router-dom";
import { authors, posts } from "@/data/mockData";
import ArticleCard from "@/components/ArticleCard";

const AuthorProfile = () => {
  const { id } = useParams();
  const author = authors.find((a) => a.id === id);
  const authorPosts = posts.filter((p) => p.author.id === id);

  if (!author) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-semibold mb-2">Author not found</h1>
        <Link to="/articles" className="text-sm text-primary hover:underline">Back to articles</Link>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <div className="mb-12 flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:gap-8">
        <img src={author.avatar} alt={author.name} className="h-24 w-24 rounded-full object-cover mb-4 md:mb-0" />
        <div>
          <h1 className="text-2xl font-bold mb-1">{author.name}</h1>
          <p className="text-sm text-muted-foreground mb-3">{author.role}</p>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">{author.bio}</p>
          <div className="mt-4 flex gap-6">
            <div>
              <p className="text-xl font-semibold">{authorPosts.length}</p>
              <p className="text-xs text-muted-foreground">Articles</p>
            </div>
            <div>
              <p className="text-xl font-semibold">{authorPosts.reduce((a, p) => a + p.viewCount, 0).toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">Total Views</p>
            </div>
            <div>
              <p className="text-xl font-semibold">{authorPosts.reduce((a, p) => a + p.likeCount, 0).toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">Total Likes</p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-lg font-semibold mb-6">Published Articles</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {authorPosts.map((post) => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default AuthorProfile;
