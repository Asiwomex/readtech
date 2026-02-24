const Logo = ({ compact = false }: { compact?: boolean }) => {
  if (compact) {
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect width="32" height="32" rx="8" fill="hsl(var(--primary))" />
        <text x="50%" y="53%" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontWeight={700} fontSize="11" fill="hsl(var(--primary-foreground))">IH</text>
      </svg>
    );
  }

  return (
    <svg width="120" height="32" viewBox="0 0 220 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="0" y="0" width="48" height="48" rx="10" fill="hsl(var(--primary))" />
      <text x="24" y="32" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontWeight={700} fontSize="14" fill="hsl(var(--primary-foreground))">IH</text>
      <text x="78" y="32" fontFamily="Inter, system-ui, sans-serif" fontWeight={700} fontSize="18" fill="hsl(var(--foreground))">readtech</text>
    </svg>
  );
};

export default Logo;
