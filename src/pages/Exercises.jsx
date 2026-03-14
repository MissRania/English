import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, CheckCircle2, XCircle, ArrowRight, RefreshCcw, Award, Zap } from 'lucide-react';

const Exercises = ({ lang }) => {
  const isAr = lang === 'ar';
  const [currentStep, setCurrentStep] = useState('intro'); // intro, quiz, result
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const questions = [
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

  const handleAnswer = (index) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
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
    setCurrentStep('quiz');
  };

  return (
    <div className="pt-24 pb-20 min-h-screen gradient-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {currentStep === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass-card dark:glass-card-dark rounded-3xl p-12 text-center"
            >
              <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/40 rounded-2xl flex items-center justify-center mx-auto mb-8 text-primary-600">
                <Brain size={40} />
              </div>
              <h1 className="text-4xl font-display font-bold mb-6 dark:text-white">
                {isAr ? "اختبر معلوماتك" : "Test Your Knowledge"}
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-10">
                {isAr ? "تحدي القواعد والمفردات اليومي. هل أنت مستعد؟" : "Progressive grammar and vocabulary challenge. Are you ready?"}
              </p>
              <button
                onClick={() => setCurrentStep('quiz')}
                className="btn-primary text-lg"
              >
                {isAr ? "ابدأ التحدي" : "Start Challenge"}
              </button>
            </motion.div>
          )}

          {currentStep === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="glass-card dark:glass-card-dark rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <div className="flex items-center space-x-2 bg-primary-50 dark:bg-primary-900/30 px-4 py-1 rounded-full text-primary-600 text-sm font-bold">
                  <Zap size={14} />
                  <span>Streak: {score}</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full mb-10 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  className="h-full bg-primary-600 rounded-full"
                />
              </div>

              <h2 className="text-2xl font-bold mb-8 dark:text-white">
                {questions[currentQuestion].question}
              </h2>

              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    className={`w-full p-5 rounded-2xl text-left font-medium transition-all duration-300 border-2 flex justify-between items-center
                      ${!isAnswered ? 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 hover:border-primary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20' : 
                        idx === questions[currentQuestion].correct ? 'bg-green-50 dark:bg-green-900/20 border-green-500 text-green-700 dark:text-green-400' :
                        idx === selectedAnswer ? 'bg-red-50 dark:bg-red-900/20 border-red-500 text-red-700 dark:text-red-400' : 'bg-slate-50 dark:bg-slate-800/50 border-transparent text-slate-400'}
                    `}
                  >
                    <span>{option}</span>
                    {isAnswered && idx === questions[currentQuestion].correct && <CheckCircle2 size={24} />}
                    {isAnswered && idx === selectedAnswer && idx !== questions[currentQuestion].correct && <XCircle size={24} />}
                  </button>
                ))}
              </div>

              {isAnswered && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 p-6 rounded-2xl bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800"
                >
                  <p className="text-sm dark:text-slate-300">
                    <span className="font-bold text-primary-600 dark:text-primary-400">Explanation: </span>
                    {questions[currentQuestion].explanation}
                  </p>
                  <button
                    onClick={nextQuestion}
                    className="mt-6 flex items-center space-x-2 text-primary-600 font-bold hover:translate-x-1 transition-transform"
                  >
                    <span>{currentQuestion === questions.length - 1 ? 'Finish' : 'Next Question'}</span>
                    <ArrowRight size={18} />
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
              className="glass-card dark:glass-card-dark rounded-3xl p-12 text-center"
            >
              <div className="w-24 h-24 bg-yellow-100 dark:bg-yellow-900/40 rounded-full flex items-center justify-center mx-auto mb-8 text-yellow-600">
                <Award size={48} />
              </div>
              <h2 className="text-4xl font-display font-bold mb-4 dark:text-white">
                Awesome Job!
              </h2>
              <div className="text-6xl font-black text-primary-600 mb-6 font-display">
                {score}/{questions.length}
              </div>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-10">
                You've completed the Daily Challenge.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={resetQuiz}
                  className="px-8 py-3 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all flex items-center space-x-2"
                >
                  <RefreshCcw size={18} />
                  <span>Try Again</span>
                </button>
                <button
                  className="px-8 py-3 rounded-full bg-primary-600 text-white font-bold hover:bg-primary-700 transition-all"
                >
                  Share Results
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
