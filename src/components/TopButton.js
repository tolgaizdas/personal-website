"use client";

import { useState, useEffect } from "react";

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add a scroll event listener with cleanup
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible ? "opacity-100" : "opacity-0"
      } fixed bottom-8 right-4 p-2
      rounded-full
      focus:outline-none transition-opacity transition-colors
      bg-gray-50 dark:bg-gray-800
      text-gray-600 dark:text-gray-300
      hover:text-gray-800 dark:hover:text-gray-200
      border border-gray-200 dark:border-gray-700`}
      aria-label="Scroll to Top"
      disabled={!isVisible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 11l7-7 7 7M5 19l7-7 7 7"
        />
      </svg>
    </button>
  );
};

export default TopButton;
