import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, ShieldCheck, Users, Clock, Award, Phone } from 'lucide-react';
import heroImage from '../assets/images/hero-welding.jpg';
import Counter from './Counter';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className="relative bg-brand-navy min-h-screen pt-24 pb-12 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-10 lg:pt-0"
          >
            <div className="inline-flex items-center space-x-2 bg-brand-gunmetal border border-brand-gold/30 px-4 py-2 rounded-sm mb-6 shadow-xl">
              <Award size={18} className="text-brand-gold" />
              <span className="text-white text-sm font-bold uppercase tracking-wider"><Counter to={10} suffix="+" /> {t('hero.badge')}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 uppercase tracking-tight">
              {t('hero.title1')} <span className="text-brand-gold block mt-2">{t('hero.title2')}</span>
            </h1>
            
            <p className="text-xl text-brand-gray font-medium mb-10 max-w-xl leading-relaxed">
              {t('hero.desc').replace('{{count}}', '')} <span className="hidden">Hack for counter, using inline instead:</span>
              Trusted by <Counter to={5000} suffix="+" /> customers for gates, shutters, railings, and custom heavy fabrication. Built for strength, designed for perfection.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12">
              <Link to="/designs" className="flex items-center justify-center space-x-2 bg-brand-gold text-brand-navy px-8 py-4 rounded-sm font-black text-lg hover:bg-yellow-500 transition-all border-b-4 border-yellow-700 active:border-b-0 active:translate-y-1 shadow-xl uppercase group">
                <span>{t('hero.view_designs')}</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="https://wa.me/918877850203" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 bg-brand-green text-white px-8 py-4 rounded-sm font-black text-lg hover:bg-green-600 transition-all border-b-4 border-green-800 active:border-b-0 active:translate-y-1 shadow-xl uppercase">
                <MessageCircle size={20} />
                <span>{t('hero.whatsapp_now')}</span>
              </a>
              <a href="tel:+918877850203" className="flex items-center justify-center space-x-2 bg-transparent text-white border-2 border-white/20 px-8 py-4 rounded-sm font-black text-lg hover:bg-white/10 transition-all shadow-xl uppercase backdrop-blur-sm">
                <Phone size={20} />
                <span>{t('hero.call_now')}</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/10">
              <div className="flex items-center space-x-3">
                <ShieldCheck size={24} className="text-brand-gold" />
                <span className="text-white font-bold text-sm uppercase tracking-wide">{t('hero.trust1')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users size={24} className="text-brand-gold" />
                <span className="text-white font-bold text-sm uppercase tracking-wide"><Counter to={5000} suffix="+" /> {t('hero.trust2')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={24} className="text-brand-gold" />
                <span className="text-white font-bold text-sm uppercase tracking-wide">{t('hero.trust3')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award size={24} className="text-brand-gold" />
                <span className="text-white font-bold text-sm uppercase tracking-wide"><Counter to={10} suffix="+" /> {t('hero.trust4')}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Image Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block h-[700px]"
          >
            <div className="absolute inset-0 bg-brand-gold/10 rounded-sm transform translate-x-4 translate-y-4 border border-brand-gold/20 z-0"></div>
            <img 
              src={heroImage} 
              alt="Heavy Welding Action" 
              className="absolute inset-0 w-full h-full object-cover rounded-sm shadow-2xl z-10 grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent z-20"></div>

            {/* Floating Stats */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 -left-10 z-30 bg-brand-gunmetal border-l-4 border-brand-gold p-6 rounded-sm shadow-2xl"
            >
              <div className="text-4xl font-black text-white"><Counter to={5000} suffix="+" /></div>
              <div className="text-sm font-bold text-brand-gold uppercase tracking-widest mt-1">{t('hero.stat_customers')}</div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute bottom-20 -right-10 z-30 bg-brand-gunmetal border-r-4 border-brand-gold p-6 rounded-sm shadow-2xl"
            >
              <div className="text-3xl font-black text-white mb-1">{t('hero.stat_custom')}</div>
              <div className="text-sm font-bold text-brand-gray uppercase tracking-widest">{t('hero.stat_custom_desc')}</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
