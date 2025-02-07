import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact'];

  return (
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/90 backdrop-blur-lg py-3 border-b border-green-400/10' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6">
          <nav className="flex justify-between items-center">
            {/* Logo with animated gradient */}
            <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2"
            >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 text-3xl font-bold tracking-wider">
              TK
            </span>
              <div className="w-6 h-6  flex items-center justify-center">
                <span className="text-black text-lg">🦇</span>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                  <motion.a
                      key={item}
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      className="relative text-gray-300 hover:text-green-400 px-3 py-2 transition-colors duration-300 text-sm uppercase tracking-wider group"
                      whileHover={{ scale: 1.05 }}
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                  </motion.a>
              ))}
              <motion.button
                  className="px-6 py-2 bg-gradient-to-r from-green-400/20 to-emerald-600/20 border border-green-400/30 text-green-400 rounded-full hover:bg-green-400/30 transition-all duration-300 text-sm uppercase tracking-wider relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
              >
                <span className="relative z-10">Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
                className="md:hidden text-green-400 p-2 rounded-lg hover:bg-green-400/10 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
              <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-green-400/10"
              >
                <div className="flex flex-col items-center py-6 space-y-6">
                  {navItems.map((item) => (
                      <motion.a
                          key={item}
                          href={`#${item.toLowerCase().replace(' ', '-')}`}
                          className="text-gray-300 hover:text-green-400 px-4 py-2 transition-colors duration-300 text-sm uppercase tracking-wider"
                          onClick={() => setIsMenuOpen(false)}
                          whileHover={{ scale: 1.05 }}
                      >
                        {item}
                      </motion.a>
                  ))}
                  <motion.button
                      className="px-6 py-2 bg-gradient-to-r from-green-400/20 to-emerald-600/20 border border-green-400/30 text-green-400 rounded-full hover:bg-green-400/30 transition-all duration-300 text-sm uppercase tracking-wider"
                      whileHover={{ scale: 1.05 }}
                  >
                    Resume
                  </motion.button>
                </div>
              </motion.div>
          )}
        </div>
      </header>
  );
};

export default Header;