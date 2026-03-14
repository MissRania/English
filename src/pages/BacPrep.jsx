import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, CheckCircle, Star, PenTool, Lightbulb, TrendingUp } from 'lucide-react';

const BacPrep = ({ lang }) => {
  const isAr = lang === 'ar';

  const sections = [
    {
      title: 'Previous Exams (2018-2024)',
      icon: <FileText className="text-primary-600" />,
      items: ['Main Session 2024', 'Control Session 2023', 'Main Session 2022', 'Model Answer Key'],
      type: 'download'
    },
    {
      title: 'Writing Techniques',
      icon: <PenTool className="text-secondary-600" />,
      items: ['Essay Structure', 'Linking Words', 'Formal vs Informal', 'Vocabulary for Writing'],
      type: 'guide'
    },
    {
      title: 'Grammar Highlights',
      icon: <Lightbulb className="text-yellow-600" />,
      items: ['Conditional Sentences', 'Passive Voice', 'Reported Speech', 'Tense Consistency'],
      type: 'summary'
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Banner */}
        <div className="relative rounded-[40px] bg-gradient-to-br from-slate-900 to-primary-900 overflow-hidden mb-16 p-12 text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-500/20 rounded-full blur-3xl" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-sm mb-6">
              <TrendingUp size={16} />
              <span>Everything you need for your English Bac Exam</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              {isAr ? "تحضير مكثف للباكالوريا" : "Intensive Bac Preparation"}
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg mb-10">
              Get access to model essays, previous exams, and expert strategies to ace your final English test.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-primary">Download All PDFs</button>
              <button className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-md text-white font-bold border border-white/20 hover:bg-white/20 transition-all">Watch Prep Videos</button>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="glass-card dark:glass-card-dark rounded-3xl p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold dark:text-white">{section.title}</h3>
              </div>
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="group flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 transition-all border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
                    <div className="flex items-center space-x-3">
                      <CheckCircle size={18} className="text-green-500" />
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                    </div>
                    <button className="p-2 rounded-lg bg-primary-50 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Download size={18} />
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Writing models teaser */}
        <div className="mt-16 bg-primary-50 dark:bg-primary-900/20 rounded-3xl p-10 border border-primary-100 dark:border-primary-800">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4 dark:text-white">Model Essays & Samples</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                We have collected over 50 model essays covering all common themes in the Tunisian program: Technology, Environment, Education, Tourism, and more.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Argumentative Writing', 'Letter Writing', 'Emails', 'Articles'].map(type => (
                  <div key={type} className="flex items-center space-x-2 text-primary-700 dark:text-primary-300 font-semibold">
                    <Star size={16} className="fill-current" />
                    <span>{type}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-40 h-40 rounded-full bg-primary-600 flex items-center justify-center text-white shadow-2xl animate-pulse">
                <Star size={80} className="fill-current" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BacPrep;
