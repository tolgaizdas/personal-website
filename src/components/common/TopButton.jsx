"use client";

import { useState, useEffect } from "react";
import { IoArrowUp } from "react-icons/io5";

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
      className={`
        ${isVisible ? "opacity-100" : "opacity-0"}
        flex md:hidden
        fixed bottom-4 right-4
        p-2 rounded-full
        focus:outline-none
        text-neutral-600
        hover:text-neutral-800
        dark:text-neutral-400
        dark:hover:text-neutral-200
        bg-neutral-200
        dark:bg-neutral-800
        hover:bg-neutral-300
        dark:hover:bg-neutral-700
        border-[0.1rem]
        border-neutral-300
        dark:border-neutral-700
      `}
      aria-label="Scroll to Top"
      disabled={!isVisible}
    >
      <IoArrowUp className={"h-5 w-5 transition-transform duration-200 ease-out group-hover:-translate-x-0.5"} />
    </button>
  );
};

export default TopButton;
