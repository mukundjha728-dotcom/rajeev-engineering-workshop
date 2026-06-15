import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Ruler, Wrench, Truck } from 'lucide-react';
import imgWorkshopTeam from '../assets/images/workshop-team.jpg';
import Counter from './Counter';
import { useTranslation } from 'react-i18next';

const WhyChooseUs = () => {
  const { t } = useTranslation();
  
  const reasons = [
    {
      icon: <Settings size={32} />,
      title: t('why.reason_1_t'),
      desc: t('why.reason_1_d')
    },
    {
      icon: <Ruler size={32} />,
      title: t('why.reason_2_t'),
      desc: t('why.reason_2_d')
    },
    {
      icon: <Wrench size={32} />,
      title: t('why.reason_3_t'),
      desc: t('why.reason_3_d')
    },
    {
      icon: <Truck size={32} />,
      title: t('why.reason_4_t'),
      desc: t('why.reason_4_d')
    }
  ];

  return (
    <section className="py-24 bg-brand-navy border-t border-brand-gunmetal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Reasons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
              {t('why.title1')} <span className="text-brand-gold">{t('why.title2')}</span>
            </h2>
            <div className="w-24 h-1.5 bg-brand-gold mb-12"></div>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="w-16 h-16 bg-brand-gunmetal border border-brand-gold/20 rounded-sm flex items-center justify-center text-brand-gold mb-6 shadow-lg">
                    {reason.icon}
                  </div>
                  <h4 className="text-xl font-black text-white uppercase tracking-wide mb-3">{reason.title}</h4>
                  <p className="text-brand-gray font-medium leading-relaxed">{reason.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-gold/10 transform -translate-x-6 translate-y-6 border border-brand-gold/30 rounded-sm"></div>
            <div className="relative rounded-sm overflow-hidden border border-brand-gunmetal shadow-2xl h-[600px]">
              <img 
                src={imgWorkshopTeam} 
                alt="Workshop Team Working" 
                loading="lazy"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-brand-navy/40 mix-blend-multiply"></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 bg-brand-gold text-brand-navy p-8 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-brand-navy"
            >
              <div className="text-center">
                <span className="block text-4xl font-black mb-1"><Counter to={10} suffix="+" /></span>
                <span className="block text-sm font-black uppercase tracking-widest">{t('why.badge_years')}</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
