import React, { useState } from 'react'
import { HiMenu, HiX, HiMoon, HiSun } from 'react-icons/hi'
import { motion } from "framer-motion";
import { fadeIn } from "../assets/motion";
import logoLight from "../assets/logo-light.png";
import logoDark from "../assets/logo-dark.png";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#products", label: "Products" },
    { href: "#capabilities", label: "Capabilities" },
    { href: "#infrastructure", label: "Infrastructure" },
    { href: "#clients", label: "Clients" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-200 shadow-xs"
    >
      <div className="w-full flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* Official BES Logo */}
        <motion.a
          href="#home"
          variants={fadeIn('right', 0.3)}
          className="flex items-center gap-3 cursor-pointer py-1"
        >
          <img 
            src={logoLight} 
            alt="Bharat Engineering Solution" 
            className="h-10 sm:h-12 md:h-13 max-h-[50px] w-auto object-contain dark:hidden transition-all duration-300 drop-shadow-xs"
          />
          <img 
            src={logoDark} 
            alt="Bharat Engineering Solution" 
            className="h-10 sm:h-12 md:h-13 max-h-[50px] w-auto object-contain hidden dark:block transition-all duration-300 drop-shadow-xs"
          />
        </motion.a>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Theme Toggle - Mobile Header */}
          <button
            className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <HiMoon className="h-5 w-5 text-slate-700" />
            ) : (
              <HiSun className="h-5 w-5 text-amber-400" />
            )}
          </button>

          <button
            className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <HiX className="h-6 w-6 text-slate-900 dark:text-white" />
            ) : (
              <HiMenu className="h-6 w-6 text-slate-900 dark:text-white" />
            )}
          </button>
        </div>

        {/* Navigation Links - Desktop */}
        <motion.div
          variants={fadeIn('down', 0.3)}
          className="hidden md:flex items-center gap-7 lg:gap-9"
        >
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => {
                setActiveLink(link.href);
                setIsMenuOpen(false);
              }}
              className={`relative text-sm font-medium transition-colors py-1 ${
                activeLink === link.href 
                  ? 'text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400' 
                  : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Theme Toggle - Desktop */}
          <button
            className="ml-2 p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200/60 dark:border-slate-800"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <HiMoon className="h-5 w-5 text-slate-700" />
            ) : (
              <HiSun className="h-5 w-5 text-amber-400" />
            )}
          </button>
        </motion.div>

        {/* CTA Button - Desktop */}
        <motion.a
          href="#contact"
          variants={fadeIn('left', 0.3)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="hidden md:flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-xl hover:bg-blue-700 transition-all font-semibold text-sm shadow-md shadow-blue-500/20"
        >
          Get a Quote
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.a>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          animate="show"
          className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-4 shadow-lg"
        >
          <div className="container mx-auto px-4 space-y-3">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-sm font-medium py-2 px-3 rounded-lg ${
                  activeLink === link.href 
                    ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold' 
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-xl hover:bg-blue-700 transition-all font-semibold text-sm mt-2 shadow-md shadow-blue-500/20"
            >
              Get a Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;