import { useEffect, useState } from "react";
import { DarkThemeToggle, Navbar } from "flowbite-react";
import { useLocation } from "react-router-dom";

export const NavbarComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  const handleToggleClick = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const isActiveLink = (pathname) => {
    return location.pathname === pathname ? "text-gray-800 dark:text-gray-100" : "text-gray-500 dark:text-gray-300";
  };

  return (
    <Navbar
      fluid
      className={`${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"
      } ${
        isNavbarOpen ? "bg-gray-700 dark:bg-gray-800" : ""
      } border-b border-gray-300 dark:border-gray-700 transition-colors duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center p-6">
        <Navbar.Brand href="#" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-8"
            alt="Flowbite React Logo"
          />
          <span className="text-xl font-semibold">Portofolio</span>
        </Navbar.Brand>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleToggleClick}
            className="md:hidden text-gray-800 dark:text-gray-100 focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`md:flex ${
            isNavbarOpen ? "flex" : "hidden"
          } items-center justify-center space-x-4`}
        >
          <a
            href="/"
            className={`${isActiveLink("/")} ${
              location.pathname === "/" ? "font-bold" : ""
            }`}
          >
            Beranda
          </a>
          <a
            href="/portofolio"
            className={`${isActiveLink("/portofolio")} ${
              location.pathname === "/portofolio" ? "font-bold" : ""
            }`}
          >
            Portofolio
          </a>
          <a
            href="#"
            className={`${isActiveLink("/kontak")} ${
              location.pathname === "/kontak" ? "font-bold" : ""
            }`}
          >
            Kontak
          </a>
          <DarkThemeToggle onClick={toggleTheme} checked={isDarkMode} />
        </div>
      </div>
    </Navbar>
  );
};

