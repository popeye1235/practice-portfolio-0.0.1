"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname(); // Get the current route

  useEffect(() => {
    const root = document.documentElement;
    const savedMode = localStorage.getItem("theme");
    if (savedMode === "dark") {
      root.classList.add("dark");
      setDarkMode(true);
    } else {
      root.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light"); // Save preference to light
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark"); // Save preference to dark
    }
    setDarkMode(!darkMode);
  };

  return (
    <header className="bg-gray-200 dark:bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black dark:text-white">My Portfolio</h1>
        <nav className="flex items-center space-x-6">
          <ul className="flex space-x-4">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Projects", path: "/projects" },
              { name: "Contact", path: "/contacts" },
              { name: "Experiences", path: "/experience" },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`${
                    pathname === link.path
                      ? "underline text-blue-500 dark:text-blue-300 font-semibold"
                      : "text-black dark:text-white hover:underline"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="ml-4">
            <input
              type="checkbox"
              id="checkbox"
              className="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode} // Toggle dark mode state
            />
            <label htmlFor="checkbox" className="checkbox-label">
              <i className="fas fa-moon"></i>
              <i className="fas fa-sun"></i>
              <span className="ball"></span>
            </label>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
