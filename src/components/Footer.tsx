import Link from "@/components/Link";
import Logo from "@/components/Logo";

const Footer = () => (
  <footer className="border-t border-border bg-surface-subtle">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-3">
            <Logo />
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A structured knowledge platform for engineering teams and research institutions.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Platform</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Articles</Link>
            <Link to="/categories" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Categories</Link>
            <Link to="/authors" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Authors</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Resources</h4>
          <div className="flex flex-col gap-2">
            <Link to="/documentation" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Documentation</Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Legal</h4>
          <div className="flex flex-col gap-2">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-border pt-6 text-center">
        <p className="text-xs text-muted-foreground">© 2026 readtech. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
