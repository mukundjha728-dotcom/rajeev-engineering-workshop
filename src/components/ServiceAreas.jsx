import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ServiceAreas = () => {
  const { t } = useTranslation();
  const areas = [
    "Ghanshyam Pur",
    "Darbhanga",
    "Benipur",
    "Biraul",
    "Madhubani",
    "Samastipur"
  ];

  return (
    <section id="areas" className="py-24 bg-brand-navy border-t border-brand-gold/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            {t('areas.title1')} <span className="text-brand-gold">{t('areas.title2')}</span>
          </h2>
          <div className="w-24 h-1.5 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-brand-gray font-medium max-w-2xl mx-auto text-lg">
            {t('areas.desc')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Areas List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {areas.map((area, idx) => (
                <div key={idx} className="flex items-center space-x-4 bg-brand-gunmetal border border-white/5 p-4 rounded-sm hover:border-brand-gold/30 transition-colors">
                  <div className="bg-brand-gold/10 p-2 rounded-sm text-brand-gold">
                    <MapPin size={24} />
                  </div>
                  <span className="text-white font-bold uppercase tracking-wider">{area}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Map Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px]"
          >
            <div className="absolute inset-0 border-2 border-brand-gold/20 transform translate-x-4 translate-y-4 rounded-sm z-0"></div>
            <div className="relative w-full h-full rounded-sm overflow-hidden z-10 border border-brand-gunmetal shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" 
                alt="Service Areas Map" 
                loading="lazy"
                className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-brand-navy/50 pointer-events-none mix-blend-multiply"></div>
            </div>

            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-1/2 -left-12 -translate-y-1/2 z-20 bg-brand-gunmetal border border-brand-gold p-6 rounded-sm shadow-2xl flex items-center space-x-4"
            >
              <div className="bg-brand-gold p-3 rounded-sm text-brand-navy">
                <Zap size={32} />
              </div>
              <div>
                <span className="block text-white font-black uppercase text-xl">Fast Response</span>
                <span className="block text-brand-gold font-bold uppercase tracking-widest text-xs">Times Guaranteed</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
