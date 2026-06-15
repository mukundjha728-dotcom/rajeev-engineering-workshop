import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import imgMainGate from '../assets/images/main-gate.jpg';
import imgSlidingGate from '../assets/images/sliding-gate.jpg';
import imgRollingShutter from '../assets/images/rolling-shutter.jpg';
import imgWindowGrill from '../assets/images/window-grill.jpg';
import imgBalconyRailing from '../assets/images/balcony-railing.jpg';
import imgIndustrialShed from '../assets/images/industrial-shed.jpg';

const PopularCategories = () => {
  const { t } = useTranslation();
  const categories = [
    { title: "Main Gates", desc: "Heavy-duty modern and classic iron gates for residential properties.", img: imgMainGate },
    { title: "Sliding Gates", desc: "Industrial and commercial sliding gates with heavy steel tracks.", img: imgSlidingGate },
    { title: "Rolling Shutters", desc: "Secure, durable rolling shutters for shops and industrial warehouses.", img: imgRollingShutter },
    { title: "Window Grills", desc: "Stylish security grills customized to match your architecture.", img: imgWindowGrill },
    { title: "Balcony Railings", desc: "Custom designed iron railings offering safety and premium aesthetics.", img: imgBalconyRailing },
    { title: "Industrial Sheds", desc: "Heavy structural steel sheds for warehouses and factories.", img: imgIndustrialShed },
  ];

  return (
    <section id="services" className="py-24 bg-brand-navy border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            {t('categories.title1')} <span className="text-brand-gold">{t('categories.title2')}</span>
          </h2>
          <div className="w-24 h-1.5 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-brand-gray font-medium max-w-2xl mx-auto text-lg">
            {t('categories.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-brand-gunmetal rounded-sm overflow-hidden border border-brand-gold/10 hover:border-brand-gold/50 transition-all shadow-2xl flex flex-col"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={category.img} 
                  alt={category.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transform md:group-hover:scale-110 transition-transform duration-700 ease-out md:grayscale md:group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-brand-gunmetal/80 backdrop-blur-sm p-4 border-l-4 border-brand-gold rounded-sm">
                  <h3 className="text-xl font-black text-white uppercase tracking-wide mb-2">{category.title}</h3>
                  <a href="#contact" className="inline-flex items-center space-x-2 text-brand-gold font-bold text-sm hover:text-white transition-colors uppercase tracking-widest">
                    <span>{t('categories.explore')}</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
