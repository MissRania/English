import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, BookOpen, CheckCircle, Clock, Award, Star, TrendingUp, ChevronRight } from 'lucide-react';

const Dashboard = ({ lang }) => {
  const isAr = lang === 'ar';

  const stats = [
    { label: 'Completed Lessons', value: '12', icon: <BookOpen className="text-blue-600" />, color: 'blue' },
    { label: 'Quiz Score Avg', value: '85%', icon: <Star className="text-yellow-600" />, color: 'yellow' },
    { label: 'Hours Learned', value: '24h', icon: <Clock className="text-purple-600" />, color: 'purple' },
    { label: 'Badges Earned', value: '5', icon: <Award className="text-orange-600" />, color: 'orange' },
  ];

  const recentLessons = [
    { title: 'Conditionals Mastery', progress: 100, date: 'Yesterday' },
    { title: 'Bac Writing: Essays', progress: 65, date: '2 days ago' },
    { title: 'Technology Vocabulary', progress: 30, date: '3 days ago' },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-3xl font-display font-bold dark:text-white flex items-center gap-3">
              <LayoutDashboard className="text-primary-600" />
              <span>Student Dashboard</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2">Welcome back! Here's your learning progress.</p>
          </div>
          <div className="flex items-center space-x-4">
             <div className="text-right hidden sm:block">
                <div className="font-bold dark:text-white">Alex Johnson</div>
                <div className="text-xs text-slate-500">Premium Member</div>
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
              className="glass-card dark:glass-card-dark rounded-3xl p-6"
            >
              <div className={`w-12 h-12 rounded-2xl bg-${stat.color}-100 dark:bg-${stat.color}-900/20 flex items-center justify-center mb-4`}>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold dark:text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Progress Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card dark:glass-card-dark rounded-[32px] p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold dark:text-white">Recent Activity</h3>
                <button className="text-primary-600 text-sm font-bold hover:underline">View All</button>
              </div>
              <div className="space-y-6">
                {recentLessons.map((lesson, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-bold dark:text-slate-200">{lesson.title}</span>
                      <span className="text-slate-500">{lesson.progress}%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${lesson.progress}%` }}
                        transition={{ duration: 1, delay: idx * 0.2 }}
                        className={`h-full rounded-full ${lesson.progress === 100 ? 'bg-green-500' : 'bg-primary-600'}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended for you */}
            <div className="glass-card dark:glass-card-dark rounded-[32px] p-8">
               <h3 className="text-xl font-bold dark:text-white mb-6">Recommended for You</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 group cursor-pointer hover:bg-indigo-100 transition-colors">
                    <div className="flex items-center space-x-3 text-indigo-700 dark:text-indigo-400 mb-2 font-bold transition-transform group-hover:translate-x-1">
                      <span>Advanced Writing</span>
                      <ChevronRight size={18} />
                    </div>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400/80">Tailored for your current level in Bac Prep.</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 group cursor-pointer hover:bg-emerald-100 transition-colors">
                    <div className="flex items-center space-x-3 text-emerald-700 dark:text-emerald-400 mb-2 font-bold transition-transform group-hover:translate-x-1">
                      <span>Tense Challenge</span>
                      <ChevronRight size={18} />
                    </div>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400/80">Quick quiz to boost your grammar score.</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Achievements Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass-card dark:glass-card-dark rounded-[32px] p-8">
              <h3 className="text-xl font-bold dark:text-white mb-8">Badges & Achievements</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800">
                  <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-white shadow-lg">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm dark:text-white">Early Bird</h4>
                    <p className="text-xs text-slate-500">Joined in Oct 2024</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 grayscale opacity-50">
                  <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 shadow-md">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm dark:text-white">Grammar King</h4>
                    <p className="text-xs text-slate-500">Perfect score in 5 tests</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-8 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-200 transition-all">
                View Learning History
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
