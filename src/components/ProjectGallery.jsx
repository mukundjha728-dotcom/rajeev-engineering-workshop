import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import imgBefore from '../assets/images/gallery-before.jpg';
import imgDuring from '../assets/images/gallery-during.jpg';
import imgCompleted from '../assets/images/gallery-final.jpg';
import imgInstalled from '../assets/images/gallery-installation.jpg';

const ProjectGallery = () => {
  const { t } = useTranslation();
  const projects = [
    { id: 1, src: imgBefore, status: t('gallery.s_before'), span: "md:col-span-2 md:row-span-1" },
    { id: 2, src: imgDuring, status: t('gallery.s_progress'), span: "md:col-span-1 md:row-span-2" },
    { id: 3, src: imgCompleted, status: t('gallery.s_completed'), span: "md:col-span-1 md:row-span-1" },
    { id: 4, src: imgInstalled, status: t('gallery.s_installed'), span: "md:col-span-1 md:row-span-1" },
  ];

  return (
    <section id="gallery" className="py-24 bg-brand-navy border-t border-brand-gunmetal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            {t('gallery.title1')} <span className="text-brand-gold">{t('gallery.title2')}</span>
          </h2>
          <div className="w-24 h-1.5 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-brand-gray font-medium max-w-2xl mx-auto text-lg">
            {t('gallery.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-sm bg-brand-gunmetal border border-white/5 shadow-xl ${project.span}`}
            >
              <img 
                src={project.src} 
                alt={`Project Stage: ${project.status}`} 
                loading="lazy"
                className="w-full h-full object-cover transform md:group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="hidden md:flex absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center backdrop-blur-sm">
                <div className="text-center p-6 border-2 border-brand-gold/50 bg-brand-navy/80 rounded-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-brand-gold font-black uppercase tracking-widest text-lg">{project.status}</span>
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-brand-gold text-brand-navy px-3 py-1 text-xs font-black uppercase tracking-wider rounded-sm shadow-lg z-10">
                {project.status}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
