import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CTABanner = () => {
  const { t } = useTranslation();
  return (
    <section className="relative py-32 bg-brand-navy overflow-hidden">
      {/* Industrial Spotlight Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/20 via-transparent to-transparent blur-3xl"></div>
      </div>

      {/* Textured Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-brand-gunmetal p-10 md:p-16 rounded-sm shadow-[0_0_50px_rgba(212,175,55,0.15)] border-2 border-brand-gold/40"
        >
          {/* Inner Glow Line */}
          <div className="absolute inset-2 border border-brand-gold/10 rounded-sm pointer-events-none"></div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-6">
              {t('about.cta_title1')} <span className="text-brand-gold block mt-2">{t('about.cta_title2')}</span>
            </h2>
            
            <p className="text-xl text-brand-gray font-bold mb-12 uppercase tracking-widest max-w-2xl mx-auto">
              {t('about.cta_desc')}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a href="tel:+918877850203" className="flex items-center justify-center space-x-3 bg-brand-gold text-brand-navy px-10 py-5 rounded-sm font-black uppercase tracking-widest hover:bg-yellow-500 transition-colors border-b-4 border-yellow-700 active:border-b-0 active:translate-y-1 w-full sm:w-auto shadow-xl group">
                <Phone size={24} className="group-hover:animate-pulse" />
                <span className="text-lg">{t('about.cta_call')}</span>
              </a>
              
              <a href="https://wa.me/918877850203" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3 bg-brand-green text-white px-10 py-5 rounded-sm font-black uppercase tracking-widest hover:bg-green-600 transition-colors border-b-4 border-green-800 active:border-b-0 active:translate-y-1 w-full sm:w-auto shadow-xl group">
                <MessageCircle size={24} className="group-hover:animate-pulse" />
                <span className="text-lg">{t('about.cta_whatsapp')}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
