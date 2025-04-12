
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src="/lovable-uploads/49a89bbb-1d97-4341-8d48-260d1d70b61a.png"
            alt="Timboti Logo"
            className="h-10 w-auto"
          />
          <span className="font-bold text-xl text-timboti-dark dark:text-white">
            Timboti
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(
                "text-sm font-medium hover:text-timboti-red transition-colors",
                isActive ? "text-timboti-red" : "text-gray-700 dark:text-gray-200"
              )
            }
          >
            {t("nav.home")}
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              cn(
                "text-sm font-medium hover:text-timboti-red transition-colors",
                isActive ? "text-timboti-red" : "text-gray-700 dark:text-gray-200"
              )
            }
          >
            {t("nav.pricing")}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              cn(
                "text-sm font-medium hover:text-timboti-red transition-colors",
                isActive ? "text-timboti-red" : "text-gray-700 dark:text-gray-200"
              )
            }
          >
            {t("nav.contact")}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              cn(
                "text-sm font-medium hover:text-timboti-red transition-colors",
                isActive ? "text-timboti-red" : "text-gray-700 dark:text-gray-200"
              )
            }
          >
            {t("nav.about")}
          </NavLink>
          <NavLink
            to="/demos"
            className={({ isActive }) =>
              cn(
                "text-sm font-medium hover:text-timboti-red transition-colors",
                isActive ? "text-timboti-red" : "text-gray-700 dark:text-gray-200"
              )
            }
          >
            {t("nav.demos")}
          </NavLink>
          
          <div className="flex items-center gap-2">
            <LanguageSelector />
            <Button asChild className="bg-timboti-red hover:bg-timboti-red/90">
              <NavLink to="/contact">{t("nav.tryNow")}</NavLink>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button and Language Selector */}
        <div className="flex items-center md:hidden gap-2">
          <LanguageSelector />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="flex flex-col md:hidden gap-2 p-4 bg-white dark:bg-slate-900 border-t dark:border-gray-800">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(
                "px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                isActive 
                  ? "bg-gray-100 dark:bg-gray-800 text-timboti-red" 
                  : "text-gray-700 dark:text-gray-200"
              )
            }
            onClick={() => setIsMenuOpen(false)}
          >
            {t("nav.home")}
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              cn(
                "px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                isActive 
                  ? "bg-gray-100 dark:bg-gray-800 text-timboti-red" 
                  : "text-gray-700 dark:text-gray-200"
              )
            }
            onClick={() => setIsMenuOpen(false)}
          >
            {t("nav.pricing")}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              cn(
                "px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                isActive 
                  ? "bg-gray-100 dark:bg-gray-800 text-timboti-red" 
                  : "text-gray-700 dark:text-gray-200"
              )
            }
            onClick={() => setIsMenuOpen(false)}
          >
            {t("nav.contact")}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              cn(
                "px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                isActive 
                  ? "bg-gray-100 dark:bg-gray-800 text-timboti-red" 
                  : "text-gray-700 dark:text-gray-200"
              )
            }
            onClick={() => setIsMenuOpen(false)}
          >
            {t("nav.about")}
          </NavLink>
          <NavLink
            to="/demos"
            className={({ isActive }) =>
              cn(
                "px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                isActive 
                  ? "bg-gray-100 dark:bg-gray-800 text-timboti-red" 
                  : "text-gray-700 dark:text-gray-200"
              )
            }
            onClick={() => setIsMenuOpen(false)}
          >
            {t("nav.demos")}
          </NavLink>
          <Button asChild className="mt-2 bg-timboti-red hover:bg-timboti-red/90">
            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
              {t("nav.tryNow")}
            </NavLink>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
