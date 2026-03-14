import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, Award, BookOpen, GraduationCap, Users } from 'lucide-react';
import { translations } from '../translations';
import avatarImg from '../assets/miss-rania.png';
import Card3D from '../components/Card3D';

const About = ({ lang }) => {
  const isAr = lang === 'ar';
  const t = translations[lang === 'fr' ? 'fr' : 'ar'].about;

  const stats = [
    { label: t.yearsExp, value: '20+', icon: <Award size={24} /> },
    { label: t.activeStudents, value: '5000+', icon: <Users size={24} /> },
    { label: t.successRate, value: '98%', icon: <Star size={24} /> },
    { label: t.videoLessons, value: '200+', icon: <BookOpen size={24} /> },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-24 ${isAr ? 'lg:flex-row-reverse' : ''}`}>
          <motion.div 
            initial={{ opacity: 0, x: isAr ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <Card3D>
              <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5] max-w-sm mx-auto">
                <div className="w-full h-full bg-primary-100 dark:bg-primary-900/40 relative">
                  <img 
                    src={avatarImg} 
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1544717297-fa95b3ee21f3?q=80&w=2070&auto=format&fit=crop";
                      e.target.onerror = null;
                    }}
                    alt="Miss Rania" 
                    className="w-full h-full object-cover grayscale-0 hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </Card3D>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-200/50 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary-200/50 rounded-full blur-3xl -z-10" />
            
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/4 -right-8 p-4 rounded-2xl glass-card backdrop-blur-md shadow-xl z-20"
            >
              <Heart className="text-red-500 fill-red-500" />
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: isAr ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`lg:w-1/2 ${isAr ? 'text-right' : ''}`}
          >
            <h1 className="text-4xl md:text-7xl font-display font-black mb-8 dark:text-white tracking-tight">
              {t.title.split('Miss Rania')[0]}
              <span className="gradient-text drop-shadow-xl">Miss Rania</span>
              {t.title.split('Miss Rania')[1]}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              {t.subtitle}
            </p>
            <div className="space-y-6">
              <div className={`flex items-start space-x-4 ${isAr ? 'space-x-reverse' : ''}`}>
                <div className="w-12 h-12 rounded-2xl bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center shrink-0">
                  <GraduationCap className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold dark:text-white text-lg">{t.journeyTitle}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{t.journeyDesc}</p>
                </div>
              </div>
              <div className={`flex items-start space-x-4 ${isAr ? 'space-x-reverse' : ''}`}>
                <div className="w-12 h-12 rounded-2xl bg-secondary-100 dark:bg-secondary-900/40 flex items-center justify-center shrink-0">
                  <Heart className="text-secondary-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold dark:text-white text-lg">{t.philosophyTitle}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{t.philosophyDesc}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-16 px-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-600/10 rounded-full blur-3xl" />
          </div>
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4 text-primary-400">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-display font-bold mb-1">{stat.value}</div>
              <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

