import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleToggle = () => {
    // Toggle visual theme between light and dark regardless of whether the
    // current stored `theme` is `system` — use `resolvedTheme` so a single
    // click always flips the visible theme.
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const label = resolvedTheme === "system" ? "System" : resolvedTheme === "dark" ? "Dark" : "Light";

  return (
    <button
      onClick={handleToggle}
      aria-label={`Toggle theme (current: ${label})`}
      title={`Theme: ${label} — click to cycle`}
      className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
    >
      {resolvedTheme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  );
};

export default ThemeToggle;
