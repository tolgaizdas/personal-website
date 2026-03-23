"use client";

import { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [animateIcons, setAnimateIcons] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    let isDark;
    if (savedTheme) {
      isDark = savedTheme === "dark";
    } else {
      isDark = systemPrefersDark;
    }

    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setAnimateIcons(true);
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  return (
    <button
      aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
      onClick={toggleTheme}
      className="p-1 text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 flex items-center"
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <IoSunny
          className={`absolute h-6 w-6 ${
            animateIcons
              ? "transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none"
              : ""
          } ${
            darkMode
              ? "translate-y-2 rotate-45 opacity-0"
              : "translate-y-0 rotate-0 opacity-100"
          }`}
        />
        <FaMoon
          className={`absolute h-5 w-5 ${
            animateIcons
              ? "transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none"
              : ""
          } ${
            darkMode
              ? "translate-y-0 rotate-0 opacity-100"
              : "-translate-y-2 -rotate-45 opacity-0"
          }`}
        />
      </span>
      {/* darkMode ? "Light Mode" : "Dark Mode" */}
    </button>
  );
};

export default ThemeToggle;
