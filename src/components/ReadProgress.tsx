import { useEffect, useState } from "react";

const ReadProgress = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const height = (doc.scrollHeight || 0) - (window.innerHeight || doc.clientHeight);
      const pct = height > 0 ? Math.min(100, (scrollTop / height) * 100) : 0;
      setWidth(pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 3, zIndex: 60 }} aria-hidden>
      <div
        style={{
          height: 3,
          width: `${width}%`,
          background: "hsl(var(--primary) / 1)",
          transition: "width 120ms linear",
        }}
      />
    </div>
  );
};

export default ReadProgress;
