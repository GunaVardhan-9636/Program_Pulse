import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/#curriculum', label: 'Curriculum' },
    { href: '/#alumni', label: 'Alumni' },
    { href: '/#faculty', label: 'Faculty' },
    { href: '/#career-services', label: 'Career Services' }
  ];

  // ...existing code...
  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      if (location.pathname !== '/') {
        navigate('/'); // Go to home page first
        setTimeout(() => {
          const sectionId = href.substring(2);
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100); // Wait for navigation
      } else {
        const sectionId = href.substring(2);
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(href);
    }
    setMobileMenuOpen(false);
  };
// ...existing code...

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Program
              </span>
              <span className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white">
                Pulse
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('/#') ? (
                <motion.button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {item.label}
                </motion.button>
              ) : (
                <Link key={item.href} to={item.href}>
                  <motion.span
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              )
            ))}
            
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <Link to="/signup">
              <motion.span
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-block"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign Up
              </motion.span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg rounded-b-2xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  item.href.startsWith('/#') ? (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                ))}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                  >
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                  <Link
                    to="/signup"
                    className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
// ...existing code...