
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
            Home
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
            Pricing
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
            Contact
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
            About Us
          </NavLink>
          <Button asChild className="bg-timboti-red hover:bg-timboti-red/90 ml-4">
            <NavLink to="/contact">Try it now</NavLink>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
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
            Home
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
            Pricing
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
            Contact
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
            About Us
          </NavLink>
          <Button asChild className="mt-2 bg-timboti-red hover:bg-timboti-red/90">
            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
              Try it now
            </NavLink>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
