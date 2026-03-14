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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'py-4 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-primary-500/20">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-2xl font-display font-bold tracking-tight dark:text-white">
              MISS <span className="gradient-text">RANIA</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${location.pathname === link.path ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400' : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'}`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={handleToggleLang}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors dark:text-white flex items-center space-x-2 font-bold text-xs"
              title="Toggle Language"
            >
              <Globe size={18} />
              <span>{lang.toUpperCase()}</span>
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors dark:text-white"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link to="/dashboard" className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors dark:text-slate-300" title={t.dashboard}>
              <LayoutDashboard size={20} />
            </Link>
            <Link to="/contact" className="btn-primary py-2 px-5 text-sm">
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

