import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Exercises from './pages/Exercises';
import BacPrep from './pages/BacPrep';
import Resources from './pages/Resources';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Poster from './pages/Poster';
import { AnimatePresence } from 'framer-motion';
import { Facebook, Instagram, Phone } from 'lucide-react';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState('fr'); // 'fr' or 'ar'
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-slate-950' : 'bg-white'}`}>
      <ScrollToTop />
      <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={() => setDarkMode(!darkMode)} 
        lang={lang} 
        setLang={setLang} 
      />
      
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/courses" element={<Courses lang={lang} />} />
            <Route path="/exercises" element={<Exercises lang={lang} />} />
            <Route path="/bac-prep" element={<BacPrep lang={lang} />} />
            <Route path="/resources" element={<Resources lang={lang} />} />
            <Route path="/about" element={<About lang={lang} />} />
            <Route path="/contact" element={<Contact lang={lang} />} />
            <Route path="/dashboard" element={<Dashboard lang={lang} />} />
            <Route path="/poster" element={<Poster />} />
          </Routes>
        </AnimatePresence>
      </main>

      <footer className="py-12 bg-slate-50 dark:bg-slate-900 border-t dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">R</span>
                </div>
                <span className="text-xl font-display font-bold tracking-tight dark:text-white">
                  MISS <span className="gradient-text">RANIA</span>
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 max-w-sm">
                The leading educational platform for Tunisian students to master the English language with Miss Rania.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 dark:text-white">Courses</h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li><Link to="/courses" className="hover:text-primary-600 transition-colors">7ème année</Link></li>
                <li><Link to="/courses" className="hover:text-primary-600 transition-colors">8ème année</Link></li>
                <li><Link to="/courses" className="hover:text-primary-600 transition-colors">9ème année</Link></li>
                <li><Link to="/bac-prep" className="hover:text-primary-600 transition-colors font-semibold text-primary-600">Baccalauréat</Link></li>
              </ul>
            </div>
            <div className="col-span-1 md:col-span-1">
              <h4 className="font-bold mb-4 dark:text-white">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="p-2 rounded-lg bg-white dark:bg-slate-800 shadow-sm hover:text-primary-600 transition-colors dark:text-slate-400">
                  <Facebook size={20} />
                </a>
                <a href="#" className="p-2 rounded-lg bg-white dark:bg-slate-800 shadow-sm hover:text-primary-600 transition-colors dark:text-slate-400">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-2 rounded-lg bg-white dark:bg-slate-800 shadow-sm hover:text-primary-600 transition-colors dark:text-slate-400">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tiktok"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                </a>
              </div>
              <div className="mt-6 flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                <Phone size={18} className="text-green-500" />
                <span className="font-bold">+216 20 000 000</span>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t dark:border-slate-800 text-center text-slate-500 dark:text-slate-500 text-sm">
            © {new Date().getFullYear()} Miss Rania Education. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
