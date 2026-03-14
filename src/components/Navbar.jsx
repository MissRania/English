import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, GraduationCap, FileText, LayoutDashboard, Info, Mail, Moon, Sun, Search, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { translations } from '../translations';

const Navbar = ({ darkMode, toggleDarkMode, lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const t = translations[lang === 'fr' ? 'fr' : 'ar'].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.home, path: '/', icon: <BookOpen size={18} /> },
    { name: t.courses, path: '/courses', icon: <GraduationCap size={18} /> },
    { name: t.exercises, path: '/exercises', icon: <FileText size={18} /> },
    { name: t.bacPrep, path: '/bac-prep', icon: <GraduationCap size={18} /> },
    { name: t.resources, path: '/resources', icon: <FileText size={18} /> },
    { name: t.about, path: '/about', icon: <Info size={18} /> },
  ];

  const handleToggleLang = () => {
    setLang(lang === 'fr' ? 'ar' : 'fr');
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'py-3' 
        : 'py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-500 rounded-3xl ${
          scrolled 
            ? 'glass-card dark:glass-card-dark px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.1)]' 
            : 'bg-transparent px-2 py-0'
        } flex items-center justify-between`}>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/30"
            >
              <span className="text-white font-black text-xl italic">R</span>
            </motion.div>
            <span className="text-xl font-display font-black tracking-tighter dark:text-white flex items-center">
              MISS <span className="gradient-text ml-1.5 drop-shadow-sm">RANIA</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-bold tracking-wide transition-all duration-300 group
                  ${location.pathname === link.path 
                    ? 'text-primary-600 dark:text-primary-400' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary-500'}
                `}
              >
                <span className="relative z-10">{link.name}</span>
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-primary-100/50 dark:bg-primary-900/30 rounded-full -z-0"
                  />
                )}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={handleToggleLang}
              className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors dark:text-white flex items-center space-x-2 font-bold text-[10px] tracking-widest uppercase"
              title="Toggle Language"
            >
              <Globe size={16} className="text-primary-500" />
              <span>{lang}</span>
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 dark:text-white hover:rotate-12"
            >
              {darkMode ? <Sun size={18} className="text-yellow-500" /> : <Moon size={18} className="text-primary-600" />}
            </button>
            <Link to="/contact" className="btn-primary py-2.5 px-6 text-sm shiny-effect">
              {t.contact}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button onClick={toggleDarkMode} className="p-2 dark:text-white">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-slate-950 border-t dark:border-slate-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-3 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-primary-50 hover:text-primary-600 dark:text-slate-300 dark:hover:bg-slate-900"
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
              <div className="pt-4 pb-2 border-t dark:border-slate-800 flex justify-between px-3">
                <button
                  onClick={handleToggleLang}
                  className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 dark:text-white"
                >
                  <Globe size={18} />
                  <span>{lang === 'fr' ? 'Français' : 'العربية'}</span>
                </button>
                <Link
                  to="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 dark:text-white"
                >
                  <LayoutDashboard size={18} />
                  <span>{t.dashboard}</span>
                </Link>
              </div>
              <div className="px-3 pb-3">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full text-center block"
                >
                  {t.contact}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

