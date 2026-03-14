import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, FileText, CheckCircle, ArrowRight, Download, Award, Target, Star, PenTool, Lightbulb, TrendingUp, ChevronRight } from 'lucide-react';
import { translations } from '../translations';

const BacPrep = ({ lang }) => {
  const isAr = lang === 'ar';
  const t = translations[lang === 'fr' ? 'fr' : 'ar'].nav;

  const features = [
    { title: isAr ? 'مراجعة شاملة' : 'Full Curriculum Review', desc: isAr ? 'تغطية كاملة لجميع الوحدات من الوحد 1 إلى 6.' : 'Complete coverage of all units from Unit 1 to Unit 6.', icon: <BookOpen className="text-blue-600" /> },
    { title: isAr ? 'منهجية الكتابة' : 'Writing Methodology', desc: isAr ? 'تعلم كيفية كتابة أفضل المقالات والرسائل للحصول على العلامة الكاملة.' : 'Learn how to write the best essays and letters to get full marks.', icon: <FileText className="text-purple-600" /> },
    { title: isAr ? 'اختبارات سابقة' : 'Past Exams & Solutions', desc: isAr ? 'أكثر من 50 امتحاناً وطنياً سابقاً مع إصلاحات مفصلة.' : 'Over 50 past national exams with detailed corrections.', icon: <Award className="text-orange-600" /> },
  ];

  const topics = [
    { title: isAr ? 'وحدة التعليم' : 'Education', status: 'ready' },
    { title: isAr ? 'وحدة التكنولوجيا' : 'Technology', status: 'ready' },
    { title: isAr ? 'البيئة والحفاظ عليها' : 'Environment', status: 'ready' },
    { title: isAr ? 'الهجرة والسفر' : 'Migration', status: 'ready' },
    { title: isAr ? 'الحياة العائلية' : 'Family Life', status: 'ready' },
    { title: isAr ? 'العمل والمهن' : 'Work & Careers', status: 'ready' },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative rounded-[48px] bg-slate-900 overflow-hidden mb-20 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/30 to-secondary-600/30 blur-3xl" />
          <div className={`relative z-10 p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-12 ${isAr ? 'lg:flex-row-reverse' : ''}`}>
            <div className={`lg:w-3/5 ${isAr ? 'text-right' : ''}`}>
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-bold mb-8 uppercase tracking-[0.2em]"
                >
                 <Star size={16} className="fill-current" />
                 <span>{isAr ? 'برنامج النجاح 2025' : 'Success Program 2025'}</span>
               </motion.div>
               <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                 {isAr ? 'طريقك نحو التميز في الإنجليزية' : 'Your Path to Excellence in English'}
               </h1>
               <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
                 {isAr ? 'نقدم لك كل ما تحتاجه للنجاح في الباكالوريا بامتياز، من المهارات اللغوية إلى منهجية الاختبار.' : 'Everything you need to ace your Baccalaureate English exam, from language skills to exam methodology.'}
               </p>
               <div className={`flex flex-wrap gap-4 ${isAr ? 'justify-end' : ''}`}>
                 <button className="px-8 py-4 rounded-2xl bg-primary-600 text-white font-bold hover:bg-primary-700 transition-all shadow-xl shadow-primary-900/40">
                   {isAr ? 'ابدأ المراجعة الآن' : 'Start Revision Now'}
                 </button>
                 <button className="px-8 py-4 rounded-2xl bg-white/10 text-white font-bold hover:bg-white/20 transition-all backdrop-blur-md border border-white/20">
                   {isAr ? 'تحميل المخطط الدراسي' : 'Download Study Plan'}
                 </button>
               </div>
            </div>
            <div className="lg:w-2/5 relative">
               <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 animate-pulse blur-3xl opacity-30 absolute -inset-4" />
               <div className="relative glass-card backdrop-blur-3xl p-8 rounded-[40px] border border-white/10 shadow-2xl">
                  <div className="flex items-center gap-4 mb-8">
                     <div className="w-14 h-14 rounded-2xl bg-primary-600 flex items-center justify-center text-white">
                        <Target size={32} />
                     </div>
                     <div>
                        <div className="text-white font-bold text-xl">{isAr ? 'الهدف: 20/20' : 'Goal: 20/20'}</div>
                        <div className="text-primary-400 text-sm">{isAr ? 'خطة مخصصة لك' : 'Personalized Plan'}</div>
                     </div>
                  </div>
                  <div className="space-y-6">
                     {[85, 92, 78].map((prog, i) => (
                        <div key={i} className="space-y-2">
                           <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${prog}%` }}
                                transition={{ duration: 1.5, delay: i * 0.3 }}
                                className="h-full bg-gradient-to-r from-primary-500 to-secondary-500" 
                              />
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-[32px] glass-card dark:glass-card-dark border-2 border-transparent hover:border-primary-500/10 transition-all ${isAr ? 'text-right' : ''}`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6 ${isAr ? 'mr-0 ml-auto' : ''}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Topics List */}
        <div className="glass-card dark:glass-card-dark rounded-[40px] p-8 lg:p-12 shadow-sm border-2 border-slate-50 dark:border-slate-800">
          <div className={`flex flex-col md:flex-row items-center justify-between gap-6 mb-12 ${isAr ? 'md:flex-row-reverse' : ''}`}>
             <div className={isAr ? 'text-right' : ''}>
                <h2 className="text-3xl font-display font-bold dark:text-white mb-2">{isAr ? 'منهج الاختبار' : 'Exam Topics'}</h2>
                <p className="text-slate-500">{isAr ? 'قائمة كاملة بجميع الدروس المقررة.' : 'Complete list of all scheduled units.'}</p>
             </div>
             <button className="px-6 py-3 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold hover:scale-105 transition-transform">
               {isAr ? 'عرض البرنامج الكامل' : 'View Full Schedule'}
             </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border-2 border-slate-100 dark:border-slate-800 hover:border-primary-500/20 group cursor-pointer transition-all flex items-center justify-between ${isAr ? 'flex-row-reverse' : ''}`}
              >
                <div className={`flex items-center gap-4 ${isAr ? 'flex-row-reverse text-right' : ''}`}>
                  <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center text-primary-600 font-bold text-sm">
                    {idx + 1}
                  </div>
                  <span className="font-bold dark:text-slate-200 group-hover:text-primary-600 transition-colors uppercase text-sm tracking-wide">{topic.title}</span>
                </div>
                <ChevronRight size={18} className={`text-slate-400 group-hover:text-primary-600 transition-all group-hover:${isAr ? '-translate-x-1' : 'translate-x-1'} ${isAr ? 'rotate-180' : ''}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BacPrep;

