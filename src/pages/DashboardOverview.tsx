import { Eye, Heart, FileText, TrendingUp } from "lucide-react";
import { posts } from "@/data/mockData";

const stats = [
  {
    label: "Total Posts",
    value: posts.length.toString(),
    icon: FileText,
    change: "+2 this month",
  },
  {
    label: "Total Views",
    value: posts.reduce((a, p) => a + p.viewCount, 0).toLocaleString(),
    icon: Eye,
    change: "+12.3%",
  },
  {
    label: "Total Likes",
    value: posts.reduce((a, p) => a + p.likeCount, 0).toLocaleString(),
    icon: Heart,
    change: "+8.1%",
  },
  {
    label: "Avg. Read Time",
    value: Math.round(posts.reduce((a, p) => a + p.readTime, 0) / posts.length) + " min",
    icon: TrendingUp,
    change: "Stable",
  },
];

const DashboardOverview = () => (
  <div>
    <h2 className="text-xl font-semibold mb-6">Overview</h2>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div key={stat.label} className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">{stat.label}</span>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{stat.change}</p>
          </div>
        );
      })}
    </div>

    {/* Recent posts table */}
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-secondary/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Title</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden sm:table-cell">Status</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden md:table-cell">Date</th>
              <th className="px-4 py-3 text-right font-medium text-muted-foreground">Views</th>
            </tr>
          </thead>
          <tbody>
            {posts.slice(0, 5).map((post) => (
              <tr key={post.id} className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors">
                <td className="px-4 py-3 font-medium">{post.title}</td>
                <td className="px-4 py-3 hidden sm:table-cell">
                  <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                    post.published ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                  }`}>
                    {post.published ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">{post.createdAt}</td>
                <td className="px-4 py-3 text-right text-muted-foreground">{post.viewCount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default DashboardOverview;
