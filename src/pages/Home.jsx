import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, GraduationCap, CheckCircle, Star, Users, Brain, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { translations } from '../translations';
import avatarImg from '../assets/miss-rania.png';

const Home = ({ lang }) => {
  const isAr = lang === 'ar';
  const t = translations[lang === 'fr' ? 'fr' : 'ar'].home;
  const common = translations[lang === 'fr' ? 'fr' : 'ar'].common;

  const content = {
    hero: {
      title: t.heroTitle,
      subtitle: t.heroSubtitle,
      cta1: t.cta1,
      cta2: t.cta2,
    },
    features: [
      {
        title: isAr ? "دروس مبسطة" : "Simplified Lessons",
        desc: isAr ? "ملخصات واضحة وشاملة لكل المواد" : "Clear and comprehensive summaries of all materials.",
        icon: <BookOpen className="text-blue-500" />,
        color: "blue"
      },
      {
        title: isAr ? "تمارين تفاعلية" : "Interactive Exercises",
        desc: isAr ? "تدرب مع تصحيح فوري لتقييم مستواك" : "Practice with instant correction to evaluate your level.",
        icon: <Zap className="text-purple-500" />,
        color: "purple"
      },
      {
        title: isAr ? "استعداد للباك" : "Bac Preparation",
        desc: isAr ? "امتحانات سابقة ونماذج إجابة مفصلة" : "Previous exams and detailed model answers.",
        icon: <GraduationCap className="text-orange-500" />,
        color: "orange"
      }
    ]
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 gradient-bg">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary-200/40 rounded-full blur-3xl dark:bg-primary-900/20" 
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
            className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-secondary-200/40 rounded-full blur-3xl dark:bg-secondary-900/20" 
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Hero Text */}
            <motion.div 
              initial={{ opacity: 0, x: isAr ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 text-center lg:text-left rtl:lg:text-right"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-white/20 shadow-sm mb-6 dark:bg-white/5 dark:border-white/10 dark:text-primary-400"
              >
                <Star className="text-yellow-500 w-4 h-4 fill-yellow-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {isAr ? "المنصة رقم 1 لتعلم الإنجليزية في تونس" : "The #1 Platform for English in Tunisia"}
                </span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 dark:text-white">
                {t.heroTitle.split('Miss Rania')[0]}
                <span className="gradient-text">Miss Rania</span>
                {t.heroTitle.split('Miss Rania')[1]}
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0">
                {t.heroSubtitle}
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link to="/courses" className="btn-primary flex items-center space-x-2">
                  <span>{t.cta1}</span>
                  <ArrowRight size={20} className={isAr ? "rotate-180" : ""} />
                </Link>
                <Link to="/bac-prep" className="px-6 py-3 rounded-full border-2 border-primary-600/20 text-primary-600 font-semibold hover:bg-primary-50 transition-all dark:border-primary-500/30 dark:text-primary-400 dark:hover:bg-primary-950/20">
                  {t.cta2}
                </Link>
              </div>

              {/* Trust Badge */}
              <div className="mt-12 flex items-center justify-center lg:justify-start space-x-4 space-x-reverse opacity-70">
                <Users className="text-slate-400" />
                <span className="text-slate-500 dark:text-slate-400 font-medium">
                  {t.trustBadge}
                </span>
              </div>
            </motion.div>

            {/* Hero Image / 3D Avatar Placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 w-full aspect-square max-w-[500px] mx-auto">
                {/* 3D-like Card for Avatar Placeholder */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full rounded-3xl bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/40 dark:to-secondary-900/40 p-1 shadow-2xl overflow-hidden glass-card relative group"
                >
                  <div className="w-full h-full rounded-2xl bg-white/40 dark:bg-slate-900/40 flex items-center justify-center relative overflow-hidden">
                    {/* Placeholder for Pixar Avatar */}
                    {/* Miss Rania Avatar */}
                    <img 
                      src={avatarImg} 
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop";
                        e.target.onerror = null;
                      }}
                      className="absolute inset-0 w-full h-full object-cover brightness-110 contrast-110 opacity-80 group-hover:scale-110 transition-transform duration-700" 
                      alt="Miss Rania"
                    />
                    
                    {/* 3D UI Elements floating around */}
                    <motion.div 
                      animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
                      transition={{ duration: 5, repeat: Infinity }}
                      className="absolute top-10 left-10 p-4 rounded-2xl bg-white/90 dark:bg-slate-800 shadow-xl backdrop-blur-md border border-white/20 z-20"
                    >
                      <Brain className="text-primary-600 mb-2" size={24} />
                      <div className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider">Vocab</div>
                      <div className="w-full h-1 bg-slate-100 dark:bg-slate-700 rounded mt-1">
                        <div className="w-2/3 h-full bg-primary-600 rounded" />
                      </div>
                    </motion.div>

                    <motion.div 
                      animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                      className="absolute bottom-10 right-10 p-4 rounded-2xl bg-white/90 dark:bg-slate-800 shadow-xl backdrop-blur-md border border-white/20 z-20"
                    >
                      <CheckCircle className="text-green-500 mb-2" size={24} />
                      <div className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider">Success</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">Score: 95%</div>
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Background circles */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary-200/50 rounded-full animate-pulse opacity-50 dark:border-primary-800/20" />
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-secondary-200/30 rounded-full animate-pulse delay-700 opacity-30 dark:border-secondary-800/10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 dark:text-white">
              {t.whyTitle}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t.whySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.features.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-${feature.color}-100 dark:bg-${feature.color}-900/20 transform group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 dark:text-white">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Level Selection Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-12 dark:text-white">
            {t.levelSelectionTitle}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Collège */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="glass-card dark:glass-card-dark rounded-3xl p-10 text-left rtl:text-right overflow-hidden relative group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl group-hover:bg-primary-500/20 transition-colors" />
              <h3 className="text-2xl font-bold mb-6 flex items-center space-x-3 rtl:space-x-reverse dark:text-white">
                <div className="p-3 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600">
                  <BookOpen size={24} />
                </div>
                <span>{t.college}</span>
              </h3>
              <ul className="space-y-4 mb-10">
                {['7ème année', '8ème année', '9ème année'].map((level, i) => (
                  <li key={i} className="flex items-center space-x-3 rtl:space-x-reverse text-slate-600 dark:text-slate-400">
                    <CheckCircle size={18} className="text-primary-500" />
                    <span>{level}</span>
                  </li>
                ))}
              </ul>
              <Link to="/courses" className="btn-primary inline-block w-full text-center">
                {isAr ? "استكشف الدروس" : "Explore Lessons"}
              </Link>
            </motion.div>

            {/* Lycée */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="glass-card dark:glass-card-dark rounded-3xl p-10 text-left rtl:text-right overflow-hidden relative group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-500/10 rounded-full blur-2xl group-hover:bg-secondary-500/20 transition-colors" />
              <h3 className="text-2xl font-bold mb-6 flex items-center space-x-3 rtl:space-x-reverse dark:text-white">
                <div className="p-3 rounded-xl bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600">
                  <GraduationCap size={24} />
                </div>
                <span>{t.lycee}</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="space-y-4">
                  <div className="text-sm font-black text-secondary-600 dark:text-secondary-400 uppercase tracking-widest">{t.primary}</div>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2 rtl:space-x-reverse text-slate-600 dark:text-slate-400 text-sm">
                      <CheckCircle size={14} className="text-secondary-500" />
                      <span>{isAr ? "جميع الشعب" : "Toutes sections"}</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="text-sm font-black text-secondary-600 dark:text-secondary-400 uppercase tracking-widest">2ème / 3ème</div>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2 rtl:space-x-reverse text-slate-600 dark:text-slate-400 text-sm">
                      <CheckCircle size={14} className="text-secondary-500" />
                      <span>{t.lettre} / {t.scientifique}</span>
                    </li>
                  </ul>
                </div>

                <div className="sm:col-span-2 p-4 rounded-2xl bg-primary-50 dark:bg-primary-900/10 border border-primary-100 dark:border-primary-900/20">
                  <div className="text-sm font-bold text-primary-700 dark:text-primary-400 flex items-center space-x-2 rtl:space-x-reverse mb-1">
                    <Star size={16} fill="currentColor" className="text-yellow-500" />
                    <span>{t.bac} (Lettre & Scientifique)</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {isAr ? "تحضير مكثف ومنهجية خاصة بالامتحان الوطني." : "Intensive preparation and special methodology for the National Exam."}
                  </p>
                </div>
              </div>

              <Link to="/courses" className="btn-secondary inline-block w-full text-center">
                {isAr ? "ابدأ الآن" : "Start Now"}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

