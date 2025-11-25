"use client";

import { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

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
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  return (
    <button
      aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
      onClick={toggleTheme}
      className="p-1 text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors flex items-center"
    >
      {!darkMode ? (
        <IoSunny className="w-6 h-6" />
      ) : (
        <FaMoon className="w-5 h-5" />
      )}
      {/* darkMode ? "Light Mode" : "Dark Mode" */}
    </button>
  );
};

export default ThemeToggle;
