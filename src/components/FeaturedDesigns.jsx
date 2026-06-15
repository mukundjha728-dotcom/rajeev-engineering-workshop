import React from 'react';
import { motion } from 'framer-motion';
import { Search, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import imgFeatured1 from '../assets/images/featured-gate-1.jpg';
import imgFeatured2 from '../assets/images/featured-shutter.jpg';
import imgFeatured3 from '../assets/images/featured-railing.jpg';

const FeaturedDesigns = () => {
  const { t } = useTranslation();
  const designs = [
    {
      id: "REW-001",
      title: t('featured.designs.0.title'),
      material: t('featured.designs.0.material'),
      img: imgFeatured1
    },
    {
      id: "REW-002",
      title: t('featured.designs.1.title'),
      material: t('featured.designs.1.material'),
      img: imgFeatured2
    },
    {
      id: "REW-003",
      title: t('featured.designs.2.title'),
      material: t('featured.designs.2.material'),
      img: imgFeatured3
    }
  ];

  return (
    <section className="py-24 bg-brand-gunmetal border-t border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
              {t('featured.title1')} <span className="text-brand-gold">{t('featured.title2')}</span>
            </h2>
            <div className="w-24 h-1.5 bg-brand-gold mb-6"></div>
            <p className="text-brand-gray font-medium text-lg">
              {t('featured.desc')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {designs.map((design, idx) => (
            <motion.div 
              key={design.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative h-[500px] rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-brand-gold/20"
            >
              <img 
                src={design.img} 
                alt={design.title} 
                loading="lazy"
                className="w-full h-full object-cover transform md:group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent opacity-90 transition-opacity"></div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-brand-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center backdrop-blur-sm">
                <div className="flex gap-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <a href={design.img} target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-brand-gunmetal rounded-full flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-navy transition-colors border border-white/20" title={t('featured.view_full')}>
                    <Search size={24} />
                  </a>
                  <a href={`https://wa.me/918877850203?text=${t('featured.whatsapp_msg', { id: design.id, title: design.title })}`} target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-brand-green rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors shadow-lg shadow-green-900/50" title={t('featured.inquire')}>
                    <MessageCircle size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDesigns;
