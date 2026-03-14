import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, ChevronRight, Search, FileText, Play, Download, Clock, Star } from 'lucide-react';
import { translations } from '../translations';

const Courses = ({ lang }) => {
  const [activeLevel, setActiveLevel] = useState('all');
  const isAr = lang === 'ar';
  const t = translations[lang === 'fr' ? 'fr' : 'ar'].nav;

  const levels = [
    { id: 'all', name: isAr ? 'الكل' : 'All' },
    { id: 'college', name: isAr ? 'أساسي' : 'Collège' },
    { id: 'lycee_1', name: isAr ? '1 ثانوي' : '1ère' },
    { id: 'lycee_2_lettre', name: isAr ? '2 آداب' : '2ème Let' },
    { id: 'lycee_2_science', name: isAr ? '2 علمي' : '2ème Sci' },
    { id: 'lycee_3_lettre', name: isAr ? '3 آداب' : '3ème Let' },
    { id: 'lycee_3_science', name: isAr ? '3 علمي' : '3ème Sci' },
    { id: 'bac_lettre', name: isAr ? 'باك آداب' : 'Bac Let' },
    { id: 'bac_science', name: isAr ? 'باك علمي' : 'Bac Sci' },
  ];

  const courses = [
    {
      id: 1,
      title: isAr ? 'السابعة أساسي: الوحدة 1 - الحياة العائلية' : '7ème Année: Unit 1 - Family Life',
      level: 'college',
      lessons: 12,
      duration: '4h 30m',
      instructor: 'Miss Rania',
      image: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=2070&auto=format&fit=crop',
      tags: ['Vocabulary', 'Grammar'],
      color: 'blue'
    },
    {
      id: 2,
      title: isAr ? '1 ثانوي: تقنيات الاستماع' : '1ère Année: Listening Skills',
      level: 'lycee_1',
      lessons: 10,
      duration: '5h 00m',
      instructor: 'Miss Rania',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2074&auto=format&fit=crop',
      tags: ['Listening', 'Basics'],
      color: 'purple'
    },
    {
      id: 3,
      title: isAr ? '2 ثانوي علمي: القواعد المتقدمة' : '2ème Sci: Advanced Grammar',
      level: 'lycee_2_science',
      lessons: 8,
      duration: '3h 45m',
      instructor: 'Miss Rania',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2073&auto=format&fit=crop',
      tags: ['Grammar', 'Logic'],
      color: 'indigo'
    },
    {
      id: 4,
      title: isAr ? '2 ثانوي آداب: الأدب والتحليل' : '2ème Lettre: Literature & Analysis',
      level: 'lycee_2_lettre',
      lessons: 14,
      duration: '7h 20m',
      instructor: 'Miss Rania',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073&auto=format&fit=crop',
      tags: ['Literature', 'Writing'],
      color: 'emerald'
    },
    {
      id: 5,
      title: isAr ? 'باك آداب: مراجعة شاملة' : 'Bac Lettre: Full Literature Review',
      level: 'bac_lettre',
      lessons: 20,
      duration: '10h 30m',
      instructor: 'Miss Rania',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop',
      tags: ['Exam Prep', 'Literature'],
      color: 'red'
    },
    {
      id: 6,
      title: isAr ? 'باك علمي: تقنيات الكتابة العلمية' : 'Bac Scientifique: Scientific Writing',
      level: 'bac_science',
      lessons: 15,
      duration: '6h 15m',
      instructor: 'Miss Rania',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop',
      tags: ['Writing', 'Exam Prep'],
      color: 'orange'
    }
  ];

  const filteredCourses = activeLevel === 'all' 
    ? courses 
    : courses.filter(c => c.level === activeLevel);

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 ${isAr ? 'md:flex-row-reverse' : ''}`}>
          <div className={`max-w-xl ${isAr ? 'text-right' : ''}`}>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 dark:text-white">
              {isAr ? "استكشف الدروس" : "Explore Courses"}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              {isAr ? "دروس منظمة حسب البرنامج الرسمي التونسي لكل المستويات." : "Structured lessons according to the official Tunisian program for all levels."}
            </p>
          </div>
          
          <div className="flex items-center space-x-2 bg-slate-100 dark:bg-slate-900 p-1 rounded-2xl shadow-inner">
            {levels.map((level) => (
              <button
                key={level.id}
                onClick={() => setActiveLevel(level.id)}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${activeLevel === level.id ? 'bg-white dark:bg-slate-800 text-primary-600 shadow-md transform scale-105' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
              >
                {level.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCourses.map((course) => (
            <motion.div
              layout
              key={course.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="glass-card dark:glass-card-dark rounded-[32px] overflow-hidden group border-2 border-transparent hover:border-primary-500/20 transition-all cursor-pointer shadow-xl hover:shadow-2xl"
            >
              <div className="h-56 overflow-hidden relative">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className={`absolute bottom-4 ${isAr ? 'right-4 flex-row-reverse' : 'left-4'} flex gap-2`}>
                  {course.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-wider border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-8">
                <div className={`flex items-center justify-between mb-4 text-[10px] font-black text-primary-600 dark:text-primary-400 uppercase tracking-[0.2em] ${isAr ? 'flex-row-reverse' : ''}`}>
                  <span>{course.level.startsWith('bac') ? 'BAC EXAM PREP' : course.level.replace('lycee_', '').toUpperCase()}</span>
                  <div className={`flex items-center space-x-1 ${isAr ? 'space-x-reverse' : ''}`}>
                    <Clock size={14} />
                    <span>{course.duration}</span>
                  </div>
                </div>
                <h3 className={`text-2xl font-bold mb-6 dark:text-white group-hover:text-primary-600 transition-colors leading-snug ${isAr ? 'text-right' : ''}`}>
                  {course.title}
                </h3>
                <div className={`flex items-center justify-between pt-6 border-t dark:border-slate-800 ${isAr ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex items-center space-x-3 ${isAr ? 'space-x-reverse' : ''}`}>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 p-0.5 shadow-md">
                      <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center font-bold text-primary-600 text-xs">
                        R
                      </div>
                    </div>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Miss Rania</span>
                  </div>
                  <div className={`flex items-center space-x-1 text-primary-600 font-bold group-hover:${isAr ? '-translate-x-2' : 'translate-x-2'} transition-transform ${isAr ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <span className="text-sm">{isAr ? "ابدأ الدرس" : "Start Lesson"}</span>
                    <ChevronRight size={20} className={isAr ? 'rotate-180' : ''} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;

