"use client";

import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <button
      aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
      onClick={toggleTheme}
      /* className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700 focus:outline-none" */
      className="p-2 text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
    >
      {darkMode ? (
        <FaSun className="w-5 h-5" />
      ) : (
        <FaMoon className="w-5 h-5" />
      )}
      {/* darkMode ? "Light Mode" : "Dark Mode" */}
    </button>
  );
};

export default ThemeToggle;
