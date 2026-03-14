import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, CheckCircle, Search, Filter, BookOpen, Clock, Tag } from 'lucide-react';

const Resources = ({ lang }) => {
  const isAr = lang === 'ar';

  const resourceCategories = [
    { title: 'Summary Sheets', count: 45, icon: <FileText className="text-blue-600" /> },
    { title: 'Grammar Guides', count: 32, icon: <BookOpen className="text-purple-600" /> },
    { title: 'Vocabulary Lists', count: 28, icon: <Clock className="text-green-600" /> },
    { title: 'Worksheets', count: 60, icon: <Tag className="text-orange-600" /> },
  ];

  const items = [
    { title: 'Conditional Type 1, 2, 3', category: 'Grammar', date: 'Oct 12, 2024', size: '1.2 MB' },
    { title: 'Technology Vocabulary List', category: 'Vocabulary', date: 'Oct 10, 2024', size: '850 KB' },
    { title: 'How to Write a Five-Paragraph Essay', category: 'Writing', date: 'Oct 08, 2024', size: '2.5 MB' },
    { title: '9ème Année: Unit 1 Summary', category: 'Summary', date: 'Oct 05, 2024', size: '3.1 MB' },
    { title: 'Passive Voice Practice Sheet', category: 'Grammar', date: 'Oct 01, 2024', size: '1.1 MB' },
    { title: 'Irregular Verbs Complete List', category: 'Vocabulary', date: 'Sep 28, 2024', size: '500 KB' },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 dark:text-white">
            {isAr ? "مركز المصادر التعليمية" : "Learning Resources Hub"}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {isAr ? "كل ما تحتاجه للمراجعة السريعة والتحضير للفروض." : "Everything you need for quick revision and preparing for tests."}
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {resourceCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="glass-card dark:glass-card-dark rounded-3xl p-6 text-center cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto mb-4">
                {cat.icon}
              </div>
              <h3 className="font-bold dark:text-white mb-1">{cat.title}</h3>
              <p className="text-sm text-slate-500">{cat.count} files</p>
            </motion.div>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search resources..." 
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 focus:outline-none focus:border-primary-500 transition-colors dark:text-white"
            />
          </div>
          <button className="flex items-center space-x-2 px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 font-bold dark:text-white">
            <Filter size={20} />
            <span>Filters</span>
          </button>
        </div>

        {/* Resource List */}
        <div className="space-y-4">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card dark:glass-card-dark rounded-2xl p-5 flex items-center justify-between group"
            >
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center text-primary-600">
                  <FileText size={24} />
                </div>
                <div>
                  <h4 className="font-bold dark:text-white group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex items-center space-x-4 mt-1 text-sm text-slate-500 dark:text-slate-400">
                    <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-[10px] font-bold uppercase">{item.category}</span>
                    <span>{item.date}</span>
                    <span>{item.size}</span>
                  </div>
                </div>
              </div>
              <button className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-primary-600 hover:text-white dark:text-slate-300 dark:hover:bg-primary-600 transition-all">
                <Download size={20} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
