import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, Smartphone, Globe, Mail, MessageCircle, GraduationCap } from 'lucide-react';

const Poster = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 sm:p-10 font-sans">
      {/* Poster Container - A4 Aspect Ratio suggested */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-[800px] aspect-[1/1.41] bg-white shadow-[0_0_100px_rgba(0,0,0,0.1)] rounded-[40px] overflow-hidden relative border-[16px] border-white"
      >
        {/* Main Background Gradient Header */}
        <div className="absolute top-0 left-0 w-full h-[45%] bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500 rounded-b-[60px] overflow-hidden">
          {/* Animated background shapes */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-[60px] blur-2xl"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"
          />
        </div>

        {/* Content Content Container */}
        <div className="relative h-full flex flex-col z-10 px-12 py-16">
          {/* Top Branding Section */}
          <div className="flex justify-between items-start mb-12">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center transform -rotate-6">
                <span className="text-primary-600 font-black text-3xl">R</span>
              </div>
              <div className="text-white">
                <div className="text-3xl font-display font-black tracking-tighter">MISS RANIA</div>
                <div className="text-xs font-bold uppercase tracking-[0.3em] opacity-80">English Education</div>
              </div>
            </div>
            <div className="bg-yellow-400 text-slate-900 px-5 py-2 rounded-full font-black text-sm shadow-xl flex items-center space-x-2">
              <Star size={16} fill="currentColor" />
              <span>OFFICIAL CURRICULUM</span>
            </div>
          </div>

          {/* Hero Text / Headline */}
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-6xl lg:text-7xl font-display font-black text-white leading-[1.1] mb-6 drop-shadow-lg">
              Unlock Your <br />
              <span className="text-yellow-300">Potential.</span>
            </h1>
            <p className="text-xl text-primary-50 font-medium max-w-md drop-shadow-md">
              The #1 Educational Platform for Tunisian students from Collège to Bac.
            </p>
          </div>

          {/* Main Visual / Image Placeholder */}
          <div className="flex-1 relative mb-12">
            <div className="absolute inset-0 bg-white/95 rounded-[32px] shadow-2xl overflow-hidden border border-slate-100 flex items-center justify-center">
              {/* This is where the Pixar avatar image would go */}
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-90 grayscale-[0.2]"
                alt="Learning Students"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              
              {/* Overlapping Info Cards */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                <div className="flex-1 bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-white/50">
                  <div className="flex items-center space-x-3 text-primary-600 mb-2">
                    <GraduationCap size={24} />
                    <span className="font-bold uppercase text-xs tracking-wider">Lycée & Bac</span>
                  </div>
                  <div className="text-slate-700 font-bold text-sm">Exam Strategies & Models</div>
                </div>
                <div className="flex-1 bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-white/50">
                   <div className="flex items-center space-x-3 text-secondary-600 mb-2">
                    <CheckCircle size={24} />
                    <span className="font-bold uppercase text-xs tracking-wider">Collège</span>
                  </div>
                  <div className="text-slate-700 font-bold text-sm">Vocabulary & Grammar</div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer / Contact / QR Section */}
          <div className="flex items-end justify-between">
            <div className="space-y-6 flex-1">
              <h3 className="text-2xl font-display font-black text-slate-900 mb-4">Join 5000+ Students!</h3>
              
              <div className="space-y-3">
                 <div className="flex items-center space-x-3 text-slate-600">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-primary-600">
                      <Globe size={18} />
                    </div>
                    <span className="font-bold">www.missrania.com</span>
                 </div>
                  <div className="flex items-center space-x-3 text-green-500">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                      <MessageCircle size={18} />
                    </div>
                    <span className="font-bold">+216 20 000 000</span>
                 </div>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <div className="flex space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-primary-600">
                    <Facebook size={20} />
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-primary-600">
                    <Instagram size={20} />
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-primary-600">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* QR Code Placeholder */}
            <div className="ml-10 text-center">
              <div className="w-32 h-32 bg-slate-100 rounded-3xl border-[10px] border-slate-50 flex items-center justify-center relative overflow-hidden group">
                {/* Mock QR lines */}
                <div className="grid grid-cols-4 gap-2 opacity-20 group-hover:opacity-40 transition-opacity">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-3 h-3 bg-slate-900 rounded-sm" />
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <Smartphone className="text-primary-600 opacity-40" size={40} />
                </div>
              </div>
              <div className="mt-3 text-[10px] font-black uppercase text-slate-400 tracking-widest leading-none">
                Scan to <br /> Start Learning
              </div>
            </div>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-1/2 right-[5%] w-16 h-16 bg-yellow-400 rounded-2xl rotate-12 blur-sm opacity-20" />
        <div className="absolute bottom-[20%] left-[5%] w-12 h-12 bg-primary-400 rounded-full blur-md opacity-20" />
      </motion.div>
      
      {/* Action Buttons Overlay (not part of the poster file itself usually) */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex gap-4 no-print transition-all hover:scale-105">
        <button 
          onClick={() => window.print()}
          className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold shadow-2xl flex items-center space-x-3"
        >
          <span>Print Poster</span>
        </button>
      </div>

      <style>{`
        @media print {
          body { background: white !important; padding: 0 !important; }
          .no-print { display: none !important; }
          .shadow-2xl, .shadow-xl, .shadow-sm { box-shadow: none !important; }
          nav, footer { display: none !important; }
        }
      `}</style>
    </div>
  );
};

export default Poster;
