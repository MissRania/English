import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, ChevronRight, Search, FileText, Play, Download, Clock } from 'lucide-react';

const Courses = ({ lang }) => {
  const [activeLevel, setActiveLevel] = useState('all');
  const isAr = lang === 'ar';

  const levels = [
    { id: 'all', name: isAr ? 'الكل' : 'All' },
    { id: 'college', name: 'Collège' },
    { id: 'lycee', name: 'Lycée' },
    { id: 'bac', name: 'Bac' },
  ];

  const courses = [
    {
      id: 1,
      title: '7ème Année: Unit 1 - Family Life',
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
      title: '9ème Année: Grammar Pro',
      level: 'college',
      lessons: 8,
      duration: '3h 15m',
      instructor: 'Miss Rania',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2073&auto=format&fit=crop',
      tags: ['Grammar', 'Exercises'],
      color: 'indigo'
    },
    {
      id: 3,
      title: 'Bac: Writing Masterclass',
      level: 'bac',
      lessons: 15,
      duration: '6h 45m',
      instructor: 'Miss Rania',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073&auto=format&fit=crop',
      tags: ['Writing', 'Exam Prep'],
      color: 'orange'
    },
    {
      id: 4,
      title: '2ème Année: Reading Skills',
      level: 'lycee',
      lessons: 10,
      duration: '5h 00m',
      instructor: 'Miss Rania',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2074&auto=format&fit=crop',
      tags: ['Reading', 'Listening'],
      color: 'purple'
    },
    {
      id: 5,
      title: 'Bac: Tenses Review',
      level: 'bac',
      lessons: 5,
      duration: '2h 30m',
      instructor: 'Miss Rania',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop',
      tags: ['Grammar', 'Quiz'],
      color: 'red'
    }
  ];

  const filteredCourses = activeLevel === 'all' 
    ? courses 
    : courses.filter(c => c.level === activeLevel);

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h1 className="text-4xl font-display font-bold mb-4 dark:text-white">
              {isAr ? "استكشف الكورسات" : "Explore Courses"}
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              {isAr ? "دروس منظمة حسب البرنامج الرسمي التونسي لكل المستويات." : "Structured lessons according to the official Tunisian program for all levels."}
            </p>
          </div>
          
          <div className="flex items-center space-x-2 bg-slate-100 dark:bg-slate-900 p-1 rounded-2xl">
            {levels.map((level) => (
              <button
                key={level.id}
                onClick={() => setActiveLevel(level.id)}
                className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${activeLevel === level.id ? 'bg-white dark:bg-slate-800 text-primary-600 shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
              >
                {level.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <motion.div
              layout
              key={course.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="glass-card dark:glass-card-dark rounded-3xl overflow-hidden group border-transparent hover:border-primary-500/20 transition-all cursor-pointer"
            >
              <div className="h-48 overflow-hidden relative">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {course.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 rounded-lg bg-white/20 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-wider border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3 text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest">
                  <span>{course.level.toUpperCase()}</span>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{course.duration}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 dark:text-white group-hover:text-primary-600 transition-colors">
                  {course.title}
                </h3>
                <div className="flex items-center justify-between pt-4 border-t dark:border-slate-800">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Miss Rania</span>
                  </div>
                  <div className="flex items-center space-x-1 text-primary-600 font-bold group-hover:translate-x-1 transition-transform">
                    <span className="text-sm">{isAr ? "ابدأ" : "Start"}</span>
                    <ChevronRight size={18} />
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
