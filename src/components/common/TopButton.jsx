"use client";

import { useEffect, useState } from "react";

export default function TopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 400);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  if (!isVisible) return null;

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "instant" : "smooth",
    });
  };

  return (
    <button className="top-button" type="button" onClick={scrollToTop}>
      Back to top <span aria-hidden="true">↑</span>
    </button>
  );
}
