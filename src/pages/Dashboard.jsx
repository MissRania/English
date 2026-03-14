import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, BookOpen, CheckCircle, Clock, Award, Star, TrendingUp, ChevronRight } from 'lucide-react';
import { translations } from '../translations';

const Dashboard = ({ lang }) => {
  const isAr = lang === 'ar';
  const t = translations[lang === 'fr' ? 'fr' : 'ar'].nav;

  const stats = [
    { label: isAr ? 'دروس مكتملة' : 'Completed Lessons', value: '12', icon: <BookOpen className="text-blue-600" />, color: 'blue' },
    { label: isAr ? 'معدل الاختبارات' : 'Quiz Score Avg', value: '85%', icon: <Star className="text-yellow-600" />, color: 'yellow' },
    { label: isAr ? 'ساعات الدراسة' : 'Hours Learned', value: '24h', icon: <Clock className="text-purple-600" />, color: 'purple' },
    { label: isAr ? 'الأوسمة' : 'Badges Earned', value: '5', icon: <Award className="text-orange-600" />, color: 'orange' },
  ];

  const recentLessons = [
    { title: isAr ? 'إتقان الجمل الشرطية' : 'Conditionals Mastery', progress: 100, date: isAr ? 'أمس' : 'Yesterday' },
    { title: isAr ? 'مقالات البكالوريا' : 'Bac Writing: Essays', progress: 65, date: isAr ? 'منذ يومين' : '2 days ago' },
    { title: isAr ? 'مفردات التكنولوجيا' : 'Technology Vocabulary', progress: 30, date: isAr ? 'منذ 3 أيام' : '3 days ago' },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col md:flex-row items-center justify-between mb-12 gap-6 ${isAr ? 'md:flex-row-reverse' : ''}`}>
          <div className={isAr ? 'text-right' : ''}>
            <h1 className={`text-3xl font-display font-bold dark:text-white flex items-center gap-3 ${isAr ? 'flex-row-reverse' : ''}`}>
              <LayoutDashboard className="text-primary-600" />
              <span>{isAr ? 'لوحة تحكم الطالب' : 'Student Dashboard'}</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              {isAr ? 'مرحباً بعودتك! إليك تقدمك في التعلم.' : "Welcome back! Here's your learning progress."}
            </p>
          </div>
          <div className={`flex items-center space-x-4 ${isAr ? 'space-x-reverse' : ''}`}>
             <div className={`hidden sm:block ${isAr ? 'text-left' : 'text-right'}`}>
                <div className="font-bold dark:text-white">Alex Johnson</div>
                <div className="text-xs text-slate-500">{isAr ? 'عضو مميز' : 'Premium Member'}</div>
             </div>
             <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 border-2 border-white shadow-lg" />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="glass-card dark:glass-card-dark rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all border-2 border-transparent hover:border-primary-500/10"
            >
              <div className={`w-12 h-12 rounded-2xl bg-${stat.color}-100 dark:bg-${stat.color}-900/20 flex items-center justify-center mb-4`}>
                {stat.icon}
              </div>
              <div className={`text-2xl font-bold dark:text-white mb-1 ${isAr ? 'text-right' : ''}`}>{stat.value}</div>
              <div className={`text-sm text-slate-500 font-medium ${isAr ? 'text-right' : ''}`}>{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Progress Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card dark:glass-card-dark rounded-[32px] p-8 shadow-sm">
              <div className={`flex justify-between items-center mb-8 ${isAr ? 'flex-row-reverse' : ''}`}>
                <h3 className="text-xl font-bold dark:text-white">{isAr ? 'النشاط الأخير' : 'Recent Activity'}</h3>
                <button className="text-primary-600 text-sm font-bold hover:underline">{isAr ? 'عرض الكل' : 'View All'}</button>
              </div>
              <div className="space-y-8">
                {recentLessons.map((lesson, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className={`flex justify-between text-sm font-bold ${isAr ? 'flex-row-reverse' : ''}`}>
                      <span className="dark:text-slate-200">{lesson.title}</span>
                      <span className="text-primary-600">{lesson.progress}%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${lesson.progress}%` }}
                        transition={{ duration: 1, delay: idx * 0.2 }}
                        className={`h-full rounded-full ${lesson.progress === 100 ? 'bg-green-500' : 'bg-gradient-to-r from-primary-600 to-secondary-600'}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended for you */}
            <div className="glass-card dark:glass-card-dark rounded-[32px] p-8 shadow-sm">
               <h3 className={`text-xl font-bold dark:text-white mb-6 ${isAr ? 'text-right' : ''}`}>
                 {isAr ? 'مقترح لك' : 'Recommended for You'}
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className={`p-5 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 group cursor-pointer hover:bg-indigo-100 transition-colors ${isAr ? 'text-right' : ''}`}>
                    <div className={`flex items-center space-x-3 ${isAr ? 'flex-row-reverse space-x-reverse' : ''} text-indigo-700 dark:text-indigo-400 mb-2 font-bold transition-transform group-hover:${isAr ? '-translate-x-1' : 'translate-x-1'}`}>
                      <span>{isAr ? 'كتابة متقدمة' : 'Advanced Writing'}</span>
                      <ChevronRight size={18} className={isAr ? 'rotate-180' : ''} />
                    </div>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400/80">
                      {isAr ? 'مخصص لمستواك الحالي في الباك.' : 'Tailored for your current level in Bac Prep.'}
                    </p>
                  </div>
                  <div className={`p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 group cursor-pointer hover:bg-emerald-100 transition-colors ${isAr ? 'text-right' : ''}`}>
                    <div className={`flex items-center space-x-3 ${isAr ? 'flex-row-reverse space-x-reverse' : ''} text-emerald-700 dark:text-emerald-400 mb-2 font-bold transition-transform group-hover:${isAr ? '-translate-x-1' : 'translate-x-1'}`}>
                      <span>{isAr ? 'تحدي الأزمنة' : 'Tense Challenge'}</span>
                      <ChevronRight size={18} className={isAr ? 'rotate-180' : ''} />
                    </div>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400/80">
                      {isAr ? 'اختبار سريع لتعزيز علامتك في القواعد.' : 'Quick quiz to boost your grammar score.'}
                    </p>
                  </div>
               </div>
            </div>
          </div>

          {/* Achievements Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass-card dark:glass-card-dark rounded-[32px] p-8 shadow-sm">
              <h3 className={`text-xl font-bold dark:text-white mb-8 ${isAr ? 'text-right' : ''}`}>
                {isAr ? 'الأوسمة والإنجازات' : 'Badges & Achievements'}
              </h3>
              <div className="space-y-6">
                <div className={`flex items-center space-x-4 ${isAr ? 'flex-row-reverse space-x-reverse' : ''} p-4 rounded-2xl bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 shadow-sm`}>
                  <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-white shadow-lg shrink-0">
                    <Award size={24} />
                  </div>
                  <div className={isAr ? 'text-right' : ''}>
                    <h4 className="font-bold text-sm dark:text-white">{isAr ? 'الطائر المبكر' : 'Early Bird'}</h4>
                    <p className="text-xs text-slate-500">{isAr ? 'انضم في أكتوبر 2024' : 'Joined in Oct 2024'}</p>
                  </div>
                </div>
                <div className={`flex items-center space-x-4 ${isAr ? 'flex-row-reverse space-x-reverse' : ''} p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 grayscale opacity-50 shadow-sm`}>
                  <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 shadow-md shrink-0">
                    <TrendingUp size={24} />
                  </div>
                  <div className={isAr ? 'text-right' : ''}>
                    <h4 className="font-bold text-sm dark:text-white">{isAr ? 'ملك القواعد' : 'Grammar King'}</h4>
                    <p className="text-xs text-slate-500">{isAr ? 'درجة ممتازة في 5 اختبارات' : 'Perfect score in 5 tests'}</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-8 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-200 transition-all shadow-sm">
                {isAr ? 'عرض سجل التعلم' : 'View Learning History'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

