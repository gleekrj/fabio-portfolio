import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import logo from "@/assets/logo_fm.png";
import { useState, useEffect } from "react";

export const Header = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Portfólio", path: "/" },
    { name: "Currículo", path: "/resume" },
    { name: "Sobre", path: "/about" },
    { name: "Contato", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md transition-all duration-300 h-16 ${
        isAtTop ? "lg:h-24" : "border-b border-gray-200 dark:border-gray-700"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between lg:justify-around h-full">
          <Link
            to={navItems[0].path}
            className={`font-medium transition-all duration-300 text-sm ${
              isAtTop ? "lg:text-xl" : ""
            } ${
              location.pathname === navItems[0].path
                ? "text-orange-500 dark:text-orange-400"
                : "text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400"
            }`}
          >
            {navItems[0].name}
          </Link>

          <Link
            to={navItems[1].path}
            className={`font-medium transition-all duration-300 text-sm ${
              isAtTop ? "lg:text-xl" : ""
            } ${
              location.pathname === navItems[1].path
                ? "text-orange-500 dark:text-orange-400"
                : "text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400"
            }`}
          >
            {navItems[1].name}
          </Link>

          <Link to="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg transition-all duration-300 w-12 h-12 ${
                isAtTop ? "lg:w-24 lg:h-24 lg:mt-2" : ""
              }`}
            >
              <img src={logo} alt="Logo" width={500} height={500} />
            </motion.div>
          </Link>

          <Link
            to={navItems[2].path}
            className={`font-medium transition-all duration-300 text-sm ${
              isAtTop ? "lg:text-xl" : ""
            } ${
              location.pathname === navItems[2].path
                ? "text-orange-500 dark:text-orange-400"
                : "text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400"
            }`}
          >
            {navItems[2].name}
          </Link>

          <div className="flex items-center space-x-3">
            <Link
              to={navItems[3].path}
              className={`font-medium transition-all duration-300 text-sm ${
                isAtTop ? "lg:text-xl" : ""
              } ${
                location.pathname === navItems[3].path
                  ? "text-orange-500 dark:text-orange-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400"
              }`}
            >
              {navItems[3].name}
            </Link>

            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className={`p-0 transition-all duration-300 w-9 h-9 ${
                isAtTop ? "lg:w-12 lg:h-12" : ""
              }`}
            >
              {theme === "dark" ? (
                <Sun
                  className={`transition-all duration-300 h-4 w-4 ${
                    isAtTop ? "lg:h-6 lg:w-6" : ""
                  }`}
                />
              ) : (
                <Moon
                  className={`transition-all duration-300 h-4 w-4 ${
                    isAtTop ? "lg:h-6 lg:w-6" : ""
                  }`}
                />
              )}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};
