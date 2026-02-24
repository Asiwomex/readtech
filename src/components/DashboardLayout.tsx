import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Link from "@/components/Link";
import Logo from "@/components/Logo";
import { LayoutDashboard, FileText, PenSquare, Settings, LogOut, Menu, X, Users } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

const DashboardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, isAdmin, signOut } = useAuth();

  const navItems = [
    { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { label: "My Posts", href: "/dashboard/posts", icon: FileText },
    { label: "New Post", href: "/dashboard/new", icon: PenSquare },
    { label: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  if (isAdmin) {
    navItems.splice(1, 0, { label: "All Users", href: "/dashboard/users", icon: Users });
  }

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const SidebarContent = () => (
    <>
      <nav className="p-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto border-t border-border p-3 space-y-1">
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
        >
          <LogOut className="h-4 w-4" />
          Back to site
        </Link>
        <button
          onClick={handleSignOut}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors"
        >
          <LogOut className="h-4 w-4" />
          Sign out
        </button>
      </div>
    </>
  );

  return (
    <div className="flex min-h-screen">
      <aside className="hidden w-64 shrink-0 border-r border-border bg-surface-subtle md:flex md:flex-col">
        <div className="flex h-16 items-center px-6 border-b border-border">
          <Link to="/" className="flex items-center gap-2">
              <Logo compact />
              <span className="font-semibold text-sm">readtech</span>
            </Link>
        </div>
        <SidebarContent />
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <aside className="relative flex h-full w-64 flex-col border-r border-border bg-background">
            <div className="flex h-16 items-center justify-between px-6 border-b border-border">
              <Link to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary">
                  <span className="text-xs font-bold text-primary-foreground">IH</span>
                </div>
                <span className="font-semibold text-sm">readtech</span>
              </Link>
              <button onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>
            <SidebarContent />
          </aside>
        </div>
      )}

      <div className="flex-1 flex flex-col min-w-0">
        <header className="flex h-16 items-center justify-between border-b border-border px-4 md:px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:text-foreground md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground hidden sm:block">{user?.email}</span>
            {isAdmin && (
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">Admin</span>
            )}
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
