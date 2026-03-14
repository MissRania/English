import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, CheckCircle2, XCircle, ArrowRight, RefreshCcw, Award, Zap, Brain, Sparkles } from 'lucide-react';
import { translations } from '../translations';

const Exercises = ({ lang }) => {
  const isAr = lang === 'ar';
  const t = translations[lang === 'fr' ? 'fr' : 'ar'].exercises;
  const common = translations[lang === 'fr' ? 'fr' : 'ar'].common;

  const [currentStep, setCurrentStep] = useState('intro'); // intro, quiz, result, generating
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizData, setQuizData] = useState([]);

  const defaultQuestions = [
    {
      question: "Which of the following is an example of a 'Countable Noun'?",
      options: ["Water", "Advice", "Apple", "Information"],
      correct: 2,
      explanation: "Apples can be counted (one apple, two apples), while water, advice, and information are uncountable."
    },
    {
      question: "Choose the correct form: 'She ________ to school every day.'",
      options: ["go", "goes", "is going", "gone"],
      correct: 1,
      explanation: "For third-person singular (She/He/It) in the Present Simple, we add -s or -es to the verb."
    },
    {
      question: "What is the synonym of 'Happy'?",
      options: ["Sad", "Joyful", "Angry", "Tired"],
      correct: 1,
      explanation: "Joyful means the same as happy."
    }
  ];

  const handleStartDefault = () => {
    setQuizData(defaultQuestions);
    setCurrentStep('quiz');
  };

  const handleGenerateAI = () => {
    setCurrentStep('generating');
    // Simulate AI Generation
    setTimeout(() => {
      const generated = [
        {
          question: "Which tense is used for a finished action at a specific time in the past?",
          options: ["Present Perfect", "Past Simple", "Past Continuous", "Future Simple"],
          correct: 1,
          explanation: "The Past Simple is used for completed actions in the past with a time reference (e.g., 'yesterday')."
        },
        {
          question: "Identify the 'Passive Voice' sentence:",
          options: ["He wrote a book.", "A book was written by him.", "He is writing a book.", "He will write a book."],
          correct: 1,
          explanation: "Passive voice focusing on the object: 'Subject + was/were + Past Participle'."
        },
        {
          question: "What is the opposite of 'Brave'?",
          options: ["Courageous", "Smart", "Cowardly", "Strong"],
          correct: 2,
          explanation: "Cowardly is the direct opposite of brave."
        }
      ];
      setQuizData(generated);
      setCurrentStep('quiz');
    }, 2000);
  };

  const handleAnswer = (index) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);
    if (index === quizData[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setCurrentStep('result');
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setCurrentStep('intro');
  };

  return (
    <div className="pt-24 pb-20 min-h-screen gradient-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {currentStep === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-card dark:glass-card-dark rounded-[40px] p-12 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
              <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/40 dark:to-secondary-900/40 rounded-3xl flex items-center justify-center mx-auto mb-10 text-primary-600 shadow-xl">
                <Brain size={48} />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 dark:text-white">
                {t.title}
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-lg mx-auto">
                {t.subtitle}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <button
                  onClick={handleStartDefault}
                  className="px-8 py-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 font-bold dark:text-white hover:border-primary-500 transition-all flex flex-col items-center gap-3 group"
                >
                  < हेल्पCircle className="text-slate-400 group-hover:text-primary-500 transition-colors" />
                  <span>{t.startChallenge}</span>
                </button>
                
                <button
                  onClick={handleGenerateAI}
                  className="px-8 py-5 rounded-2xl bg-gradient-to-br from-primary-600 to-secondary-600 text-white font-bold shadow-lg shadow-primary-500/20 hover:scale-105 active:scale-95 transition-all flex flex-col items-center gap-3 relative group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <Sparkles className="animate-pulse" />
                  <span className="relative z-10">{t.aiGenerator}</span>
                </button>
              </div>
            </motion.div>
          )}

          {currentStep === 'generating' && (
            <motion.div
              key="generating"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="glass-card dark:glass-card-dark rounded-[40px] p-20 text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-10">
                <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-0 border-4 border-primary-500 border-t-transparent rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <Sparkles className="text-primary-600 w-12 h-12 animate-bounce" />
                </div>
              </div>
              <h3 className="text-2xl font-bold dark:text-white mb-2">Generating with AI...</h3>
              <p className="text-slate-500 dark:text-slate-400">Our AI is crafting unique questions to match your level.</p>
            </motion.div>
          )}

          {currentStep === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card dark:glass-card-dark rounded-[32px] p-8 md:p-12"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-sm font-bold text-slate-500 uppercase tracking-widest bg-slate-100 dark:bg-slate-800 px-4 py-1.5 rounded-full">
                  Question {currentQuestion + 1} / {quizData.length}
                </span>
                <div className="flex items-center space-x-2 bg-primary-50 dark:bg-primary-900/30 px-4 py-2 rounded-full text-primary-600 text-sm font-bold border border-primary-100 dark:border-primary-800">
                  <Zap size={14} fill="currentColor" />
                  <span>{t.streak}: {score}</span>
                </div>
              </div>

              <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full mb-12 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
                  className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-10 dark:text-white leading-tight">
                {quizData[currentQuestion].question}
              </h2>

              <div className="grid grid-cols-1 gap-4">
                {quizData[currentQuestion].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    className={`w-full p-6 rounded-2xl text-left font-bold transition-all duration-300 border-2 flex justify-between items-center group
                      ${!isAnswered ? 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 hover:border-primary-400 hover:shadow-xl' : 
                        idx === quizData[currentQuestion].correct ? 'bg-green-50 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-400 shadow-lg shadow-green-500/10' :
                        idx === selectedAnswer ? 'bg-red-50 dark:bg-red-900/30 border-red-500 text-red-700 dark:text-red-400' : 'bg-slate-50 dark:bg-slate-800/50 border-transparent text-slate-400 grayscale'}
                    `}
                  >
                    <span className="text-lg">{option}</span>
                    <div className="flex items-center">
                    {isAnswered && idx === quizData[currentQuestion].correct && <CheckCircle2 size={24} className="text-green-500" />}
                    {isAnswered && idx === selectedAnswer && idx !== quizData[currentQuestion].correct && <XCircle size={24} className="text-red-500" />}
                    {!isAnswered && <div className="w-6 h-6 rounded-full border-2 border-slate-200 group-hover:border-primary-400 transition-colors" />}
                    </div>
                  </button>
                ))}
              </div>

              {isAnswered && (
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="mt-10 p-8 rounded-[24px] bg-slate-50 dark:bg-slate-900/80 border-2 border-slate-100 dark:border-slate-800 relative z-10"
                >
                  <p className="text-lg dark:text-slate-300">
                    <span className="font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider text-sm block mb-2">{t.explanation}</span>
                    {quizData[currentQuestion].explanation}
                  </p>
                  <button
                    onClick={nextQuestion}
                    className="mt-8 w-full sm:w-auto btn-primary py-4 px-10 flex items-center justify-center space-x-3 gap-2"
                  >
                    <span>{currentQuestion === quizData.length - 1 ? common.finish : common.next}</span>
                    <ArrowRight size={20} className={isAr ? "rotate-180" : ""} />
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}

          {currentStep === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card dark:glass-card-dark rounded-[40px] p-12 text-center shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500" />
              <div className="w-28 h-28 bg-yellow-100 dark:bg-yellow-900/40 rounded-full flex items-center justify-center mx-auto mb-10 text-yellow-600 shadow-lg shadow-yellow-500/20">
                <Award size={56} />
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 dark:text-white">
                {t.awesomeJob}
              </h2>
              <div className="mb-10">
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">{t.score}</div>
                <div className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary-600 to-secondary-600 font-display">
                  {score}/{quizData.length}
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6">
                <button
                  onClick={resetQuiz}
                  className="px-10 py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all flex items-center space-x-3"
                >
                  <RefreshCcw size={20} />
                  <span>{common.tryAgain}</span>
                </button>
                <button
                  className="px-10 py-4 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 font-bold dark:text-white hover:border-primary-500 transition-all"
                >
                  {common.share}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Exercises;

