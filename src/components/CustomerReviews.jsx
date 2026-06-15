import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CustomerReviews = () => {
  const { t } = useTranslation();
  const reviews = [
    {
      id: 1,
      name: "Ramesh Singh",
      type: t('reviews.client1_type'),
      review: t('reviews.client1_text'),
      rating: 5
    },
    {
      id: 2,
      name: "Priya Traders",
      type: t('reviews.client2_type'),
      review: t('reviews.client2_text'),
      rating: 5
    },
    {
      id: 3,
      name: "Mishra Textiles",
      type: t('reviews.client3_type'),
      review: t('reviews.client3_text'),
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(nextReview, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-24 bg-brand-navy border-t border-brand-gunmetal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            {t('reviews.title1')} <span className="text-brand-gold">{t('reviews.title2')}</span>
          </h2>
          <div className="w-24 h-1.5 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-brand-gray font-medium max-w-2xl mx-auto text-lg">
            {t('reviews.desc')}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-20">
            <button onClick={prevReview} className="w-12 h-12 bg-brand-gunmetal text-white border border-brand-gold/20 flex items-center justify-center rounded-full hover:bg-brand-gold hover:text-brand-navy transition-all shadow-lg">
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-20">
            <button onClick={nextReview} className="w-12 h-12 bg-brand-gunmetal text-white border border-brand-gold/20 flex items-center justify-center rounded-full hover:bg-brand-gold hover:text-brand-navy transition-all shadow-lg">
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="relative h-[300px] sm:h-[250px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-brand-gunmetal border border-white/5 p-8 md:p-12 rounded-sm shadow-2xl flex flex-col justify-center items-center text-center"
              >
                <Quote size={40} className="text-brand-gold/20 absolute top-8 left-8" />
                <div className="flex space-x-1 mb-6">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-brand-gold fill-brand-gold" />
                  ))}
                </div>
                <p className="text-white text-xl md:text-2xl font-medium leading-relaxed italic mb-8">
                  "{reviews[currentIndex].review}"
                </p>
                <div>
                  <h4 className="text-brand-gold font-black uppercase tracking-wider text-lg">{reviews[currentIndex].name}</h4>
                  <span className="text-brand-gray text-sm uppercase tracking-widest font-bold">{reviews[currentIndex].type}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-10 bg-brand-gold' : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
