import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, MapPin, Instagram, Facebook, Send, Globe } from 'lucide-react';

const Contact = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 dark:text-white">
            {isAr ? "تواصل معي" : "Get In Touch"}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {isAr ? "هل لديك سؤال؟ أنا هنا للمساعدة. أرسل استفسارك وسأرد عليك في أقرب وقت." : "Have a question? I'm here to help. Send your inquiry and I'll get back to you soon."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="p-8 rounded-3xl glass-card dark:glass-card-dark">
              <h3 className="text-xl font-bold mb-8 dark:text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <a href="mailto:contact@missrania.com" className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email</div>
                    <div className="font-bold dark:text-white">contact@missrania.com</div>
                  </div>
                </a>
                
                <a href="https://wa.me/21620000000" className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/40 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">WhatsApp / Phone</div>
                    <div className="font-bold dark:text-white">+216 20 000 000</div>
                  </div>
                </a>

                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 rounded-xl bg-secondary-100 dark:bg-secondary-900/40 flex items-center justify-center text-secondary-600 group-hover:scale-110 transition-transform">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Location</div>
                    <div className="font-bold dark:text-white">Tunis, Tunisia</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t dark:border-slate-800 flex space-x-4">
                <a href="#" className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-primary-600 hover:text-white dark:text-slate-400 transition-all">
                  <Facebook size={20} />
                </a>
                <a href="#" className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-primary-600 hover:text-white dark:text-slate-400 transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-primary-600 hover:text-white dark:text-slate-400 transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tiktok"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="p-8 md:p-12 rounded-[40px] glass-card dark:glass-card-dark relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
              
              <form className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Your Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 focus:outline-none focus:border-primary-500 transition-colors dark:text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Your Email</label>
                    <input type="email" placeholder="john@example.com" className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 focus:outline-none focus:border-primary-500 transition-colors dark:text-white" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Subject</label>
                  <select className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 focus:outline-none focus:border-primary-500 transition-colors dark:text-white">
                    <option>General Inquiry</option>
                    <option>Course Registration</option>
                    <option>Bac Prep Program</option>
                    <option>Technical Support</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Message</label>
                  <textarea rows="5" placeholder="Tell me how I can help you..." className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 focus:outline-none focus:border-primary-500 transition-colors dark:text-white resize-none" />
                </div>

                <button type="submit" className="btn-primary w-full py-5 text-lg shadow-xl shadow-primary-500/40">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
