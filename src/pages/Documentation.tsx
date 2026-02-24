import { BookOpen, Code, Server, Shield, Zap, Database } from "lucide-react";

const sections = [
  {
    icon: BookOpen,
    title: "Getting Started",
    content: [
      { heading: "Creating an Account", text: "Sign up using your email address. You'll receive a confirmation email — click the link to verify your account and start exploring readtech." },
      { heading: "Your Profile", text: "After signing in, visit the Dashboard to manage your profile. Add your full name, avatar, and bio to build your presence on the platform." },
      { heading: "Navigating the Platform", text: "Browse articles on the homepage, filter by category, search by keyword, or explore author profiles. Use the navigation bar to quickly access Articles, Categories, and Authors pages." },
    ],
  },
  {
    icon: Code,
    title: "Writing & Publishing",
    content: [
      { heading: "Creating Articles", text: "From the Dashboard, click 'New Post' to create an article. Add a title, select a category, write your content using the editor, and publish when ready." },
      { heading: "Formatting", text: "The editor supports headings, code blocks, blockquotes, lists, links, and images. Use markdown-style formatting for clean, readable technical content." },
      { heading: "Drafts & Editing", text: "Save articles as drafts and return to edit them later. Published articles can be updated at any time from the Dashboard Posts section." },
    ],
  },
  {
    icon: Zap,
    title: "Engagement Features",
    content: [
      { heading: "Comments", text: "Leave comments on articles to share your thoughts or ask questions. Comments are visible to all readers and foster technical discussion." },
      { heading: "Likes", text: "Click the heart icon on any article to show appreciation. Like counts are displayed on article cards and the article detail page." },
      { heading: "View Counts", text: "Every article displays its view count, helping you discover popular and trending content across the platform." },
    ],
  },
  {
    icon: Shield,
    title: "Account & Security",
    content: [
      { heading: "Authentication", text: "readtech uses email-based authentication with secure session management. Your password is never stored in plain text." },
      { heading: "Role-Based Access", text: "Users are assigned roles (User, Admin) that control access to features. Admins can manage users and moderate content through the Dashboard." },
      { heading: "Data Protection", text: "All data is transmitted over encrypted connections (TLS). Row-level security policies ensure users can only access and modify their own data." },
    ],
  },
  {
    icon: Server,
    title: "API & Architecture",
    content: [
      { heading: "Technology Stack", text: "readtech is built with React, TypeScript, Tailwind CSS, and Vite on the frontend, with a cloud backend providing authentication, database, and serverless functions." },
      { heading: "Real-Time Updates", text: "The platform supports real-time data synchronization for comments and interactions, ensuring a responsive and up-to-date experience." },
      { heading: "Performance", text: "Articles are optimized with lazy-loaded images, efficient pagination, and client-side caching for fast load times." },
    ],
  },
  {
    icon: Database,
    title: "Admin Guide",
    content: [
      { heading: "User Management", text: "Admins can view all registered users, their roles, and signup dates from the Dashboard → All Users page. Accounts can be deleted when necessary." },
      { heading: "Content Moderation", text: "Admins have visibility into all published content and can manage posts through the Dashboard to maintain platform quality." },
      { heading: "Analytics", text: "Track user signups, article performance (views, likes, comments), and overall platform engagement from the admin dashboard." },
    ],
  },
];

const Documentation = () => (
  <div className="container px-4 sm:px-6 py-14">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Documentation</h1>
      <p className="text-muted-foreground mb-10">Everything you need to know about using readtech.</p>

      <div className="space-y-12">
        {sections.map((section) => (
          <div key={section.title}>
            <div className="flex items-center gap-3 mb-5">
              <section.icon className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">{section.title}</h2>
            </div>
            <div className="space-y-4 ml-8">
              {section.content.map((item) => (
                <div key={item.heading}>
                  <h3 className="text-sm font-semibold mb-1">{item.heading}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Documentation;
