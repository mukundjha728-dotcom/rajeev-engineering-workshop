import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowRight, MessageCircle, ChevronDown, CheckCircle2, Shield, Users, Clock, Flame } from 'lucide-react';
import heroImage from '../assets/images/hero-welding.jpg';
import Counter from './Counter';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SparkParticles = () => {
  const [windowWidth, setWindowWidth] = useState(1000);
  const [windowHeight, setWindowHeight] = useState(800);

  useEffect(() => {
    // Only access window after component mounts (client-side)
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-yellow-500 rounded-full blur-[1px]"
          initial={{
            x: Math.random() * windowWidth,
            y: windowHeight,
            opacity: 0,
          }}
          animate={{
            x: Math.random() * windowWidth + (Math.random() - 0.5) * 200,
            y: -100,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-20 flex items-center bg-[#081225] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-yellow-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none transform -translate-y-1/2 translate-x-1/4"></div>
      
      <SparkParticles />

      <div className="max-w-7xl mx-auto px-6 w-full z-10 relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Content - 55% */}
          <div className="w-full lg:w-[55%] pt-10 lg:pt-0">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Top Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/5 border border-yellow-500/30 px-4 py-2 rounded-full mb-8 backdrop-blur-md shadow-lg">
                <Award size={16} className="text-yellow-500" />
                <span className="text-white text-xs md:text-sm font-semibold uppercase tracking-widest">
                  {t('hero.new_badge')}
                </span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-6xl lg:text-[4.5rem] xl:text-[5.5rem] font-black leading-[0.95] mb-8 uppercase tracking-tighter">
                <span className="text-white">{t('hero.new_title_1')}</span><br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">{t('hero.new_title_2')}</span><br/>
                <span className="text-white">{t('hero.new_title_3')} </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">{t('hero.new_title_4')}</span><br/>
                <span className="text-white">{t('hero.new_title_5')}</span>
              </h1>
              
              {/* Subtext */}
              <p className="text-lg md:text-xl text-gray-300 font-medium mb-10 max-w-xl leading-relaxed">
                {t('hero.new_desc')}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-14">
                <Link to="/designs" className="relative group inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-[#081225] px-8 py-5 rounded-md font-black text-lg hover:from-yellow-400 hover:to-yellow-500 transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] uppercase w-full sm:w-auto">
                  <span>{t('hero.new_btn_view')}</span>
                  <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="https://wa.me/918877850203" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center space-x-3 bg-transparent text-white border-2 border-white/20 px-8 py-5 rounded-md font-black text-lg hover:bg-white/5 hover:border-white/40 transition-all backdrop-blur-sm uppercase w-full sm:w-auto">
                  <MessageCircle size={22} />
                  <span>{t('hero.new_btn_whatsapp')}</span>
                </a>
              </div>

              {/* Trust Stats Row (4 cards) */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-md hover:-translate-y-1 transition-transform group">
                  <Users size={24} className="text-yellow-500 mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-black text-white leading-none mb-1"><Counter to={5000} suffix="+" /></div>
                  <div className="text-[10px] sm:text-xs text-gray-400 font-bold uppercase tracking-wider">{t('hero.stat_customers')}</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-md hover:-translate-y-1 transition-transform group">
                  <Shield size={24} className="text-yellow-500 mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-black text-white leading-none mb-1"><Counter to={1000} suffix="+" /></div>
                  <div className="text-[10px] sm:text-xs text-gray-400 font-bold uppercase tracking-wider">{t('hero.stat_custom')}</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-md hover:-translate-y-1 transition-transform group">
                  <Clock size={24} className="text-yellow-500 mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-black text-white leading-none mb-1"><Counter to={10} suffix="+" /></div>
                  <div className="text-[10px] sm:text-xs text-gray-400 font-bold uppercase tracking-wider">{t('hero.trust4').replace('Years Experience', 'Years')}</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-md hover:-translate-y-1 transition-transform group">
                  <CheckCircle2 size={24} className="text-yellow-500 mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-black text-white leading-none mb-1">100%</div>
                  <div className="text-[10px] sm:text-xs text-gray-400 font-bold uppercase tracking-wider">{t('hero.stat_custom_desc').split(' ')[0]}</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Image - 45% */}
          <div className="w-full lg:w-[45%] relative mt-12 lg:mt-0">
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative h-[450px] lg:h-[700px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <div className="absolute inset-0 bg-yellow-500/10 mix-blend-overlay z-10"></div>
              <img 
                src={heroImage} 
                alt="Premium Iron Fabrication Work" 
                className="absolute inset-0 w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081225] via-black/20 to-transparent z-20"></div>
            </motion.div>

            {/* Floating Cards */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -top-6 -left-2 lg:-left-12 z-30 bg-white/10 border border-yellow-500/40 p-3 sm:p-4 rounded-xl shadow-2xl backdrop-blur-xl flex items-center space-x-3"
            >
              <div className="bg-yellow-500/20 p-2 rounded-lg hidden sm:block">
                <Users size={20} className="text-yellow-500" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-black text-white leading-none"><Counter to={5000} suffix="+" /></div>
                <div className="text-[10px] sm:text-xs text-gray-300 font-bold uppercase tracking-wider mt-1">{t('hero.new_stat_clients')}</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -right-2 lg:-right-8 z-30 bg-white/10 border border-yellow-500/40 p-3 sm:p-4 rounded-xl shadow-2xl backdrop-blur-xl flex items-center space-x-3"
            >
              <div className="bg-yellow-500/20 p-2 rounded-lg hidden sm:block">
                <Shield size={20} className="text-yellow-500" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-black text-white leading-none"><Counter to={1000} suffix="+" /></div>
                <div className="text-[10px] sm:text-xs text-gray-300 font-bold uppercase tracking-wider mt-1">{t('hero.new_stat_designs')}</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute bottom-16 -left-2 lg:-left-10 z-30 bg-white/10 border border-yellow-500/40 p-3 sm:p-4 rounded-xl shadow-2xl backdrop-blur-xl flex items-center space-x-3"
            >
              <div className="bg-yellow-500/20 p-2 rounded-lg hidden sm:block">
                <Flame size={20} className="text-yellow-500" />
              </div>
              <div>
                <div className="text-md sm:text-lg font-black text-white leading-none">24/7</div>
                <div className="text-[10px] sm:text-xs text-gray-300 font-bold uppercase tracking-wider mt-1">{t('hero.new_stat_orders')}</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">Scroll</span>
        <ChevronDown size={20} className="text-yellow-500" />
      </motion.div>
    </section>
  );
};

export default Hero;
