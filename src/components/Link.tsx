import React, { forwardRef } from "react";
import { Link as RouterLink, LinkProps, useLocation, useResolvedPath } from "react-router-dom";

const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ onClick, to, ...props }, ref) => {
  const location = useLocation();
  const resolved = useResolvedPath(to);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (onClick) onClick(e as any);
    try {
      if (location.pathname === resolved.pathname) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (err) {
      // ignore
    }
  };

  return <RouterLink ref={ref} to={to} onClick={handleClick} {...props} />;
});

Link.displayName = "Link";

export default Link;
