import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ScrollToTop() {
  const [pathname] = useLocation();

  useEffect(() => {
    // Only scroll to top if there is no hash in the URL
    // This allows anchor links (like #newsletter) to work correctly
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
