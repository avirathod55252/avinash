import React, { useEffect, useState } from "react";

export default function ThemeWrapper({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      className="
        min-h-screen
        bg-white text-gray-800
        dark:bg-gray-900 dark:text-gray-100
        transition-colors duration-300 ease-in-out
      "
    >
      {children}

      {/* Optional floating toggle button */}
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="
          fixed bottom-6 right-6 p-3 rounded-full
          bg-gray-200 dark:bg-gray-700
          text-gray-800 dark:text-gray-100
          shadow-lg
          transition-colors duration-300
        "
        title="Toggle Dark/Light"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </div>
  );
}
