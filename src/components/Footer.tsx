
import { NavLink } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/lovable-uploads/49a89bbb-1d97-4341-8d48-260d1d70b61a.png"
                alt="Timboti Logo"
                className="h-8 w-auto"
              />
              <span className="font-bold text-lg text-timboti-dark dark:text-white">
                Timboti
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              AI-powered automation solutions tailored for businesses, starting with a chatbot for restaurants.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-timboti-red dark:hover:text-timboti-red transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/pricing" className="text-sm text-gray-600 dark:text-gray-400 hover:text-timboti-red dark:hover:text-timboti-red transition-colors">
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-timboti-red dark:hover:text-timboti-red transition-colors">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-timboti-red dark:hover:text-timboti-red transition-colors">
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-timboti-red dark:hover:text-timboti-red transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-timboti-red dark:hover:text-timboti-red transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-timboti-red dark:hover:text-timboti-red transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-timboti-red dark:text-gray-400 dark:hover:text-timboti-red transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-timboti-red dark:text-gray-400 dark:hover:text-timboti-red transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-timboti-red dark:text-gray-400 dark:hover:text-timboti-red transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-timboti-red dark:text-gray-400 dark:hover:text-timboti-red transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
              &copy; {currentYear} Timboti. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Message count note: Message count is calculated assuming ~10 messages per conversation (600 or 1200 convs/month).
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
