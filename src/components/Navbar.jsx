import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const links = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.designs'), href: '/designs' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-navy/90 backdrop-blur-md shadow-lg border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21 16-5.16-5.16a2 2 0 0 0-2.83 0l-5.16 5.16a2 2 0 0 0 0 2.83l1.41 1.41a2 2 0 0 0 2.83 0l1.42-1.42a2 2 0 0 1 2.82 0l1.42 1.42a2 2 0 0 0 2.83 0l1.41-1.41a2 2 0 0 0 0-2.83Z"/><path d="m3 21 8.02-8.02"/><path d="M9.5 9.5 5 5"/><path d="M15 5h4v4"/></svg>
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black text-white tracking-widest uppercase">
                {t('nav.rajeev')}
              </span>
              <span className="text-sm font-bold text-brand-gold tracking-[0.15em] uppercase mt-1">
                {t('nav.engineering')}
              </span>
              <span className="text-[0.65rem] font-bold text-brand-gray tracking-widest uppercase mt-0.5">
                {t('nav.workshop')}
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Language Switcher */}
            <div className="flex items-center space-x-1 mr-4 bg-brand-gunmetal p-1 rounded-sm border border-brand-gold/20">
              <button onClick={() => changeLanguage('hi')} className={`px-3 py-1 text-xs font-bold uppercase rounded-sm transition-colors ${i18n.language === 'hi' ? 'bg-brand-gold text-brand-navy' : 'text-brand-gray hover:text-white'}`}>हिन्दी</button>
              <button onClick={() => changeLanguage('en')} className={`px-3 py-1 text-xs font-bold uppercase rounded-sm transition-colors ${i18n.language === 'en' ? 'bg-brand-gold text-brand-navy' : 'text-brand-gray hover:text-white'}`}>EN</button>
              <button onClick={() => changeLanguage('mai')} className={`px-3 py-1 text-xs font-bold uppercase rounded-sm transition-colors ${i18n.language === 'mai' ? 'bg-brand-gold text-brand-navy' : 'text-brand-gray hover:text-white'}`}>मैथिली</button>
            </div>

            <div className="flex space-x-5">
              {links.map((link) => (
                link.href.startsWith('/#') ? (
                  <a key={link.name} href={link.href} className="text-sm font-bold text-white hover:text-brand-gold transition-colors uppercase tracking-wider">
                    {link.name}
                  </a>
                ) : (
                  <NavLink 
                    key={link.name} 
                    to={link.href} 
                    className={({ isActive }) => `text-sm font-bold transition-colors uppercase tracking-wider ${isActive ? 'text-brand-gold border-b-2 border-brand-gold pb-1' : 'text-white hover:text-brand-gold'}`}
                  >
                    {link.name}
                  </NavLink>
                )
              ))}
            </div>
            
            <a href="tel:+918877850203" className="flex items-center space-x-2 bg-brand-gold text-brand-navy px-5 py-2.5 rounded-sm font-black uppercase text-sm hover:bg-yellow-500 transition-all border-b-4 border-yellow-700 active:border-b-0 active:translate-y-1 shadow-lg">
              <Phone size={16} />
              <span>{t('nav.call_now')}</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center space-x-4">
            <button onClick={() => changeLanguage(i18n.language === 'hi' ? 'en' : i18n.language === 'en' ? 'mai' : 'hi')} className="text-brand-gold border border-brand-gold/30 px-2 py-1 text-xs font-bold rounded-sm uppercase">
              {i18n.language}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-brand-gold p-1">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-navy border-b border-brand-gunmetal overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col space-y-4">
              {/* Mobile Language Switcher */}
              <div className="flex items-center justify-center space-x-2 bg-brand-gunmetal p-2 rounded-sm border border-brand-gold/20 mb-2">
                <button onClick={() => changeLanguage('hi')} className={`flex-1 py-2 text-sm font-bold uppercase rounded-sm transition-colors ${i18n.language === 'hi' ? 'bg-brand-gold text-brand-navy' : 'text-brand-gray hover:text-white'}`}>हिन्दी</button>
                <button onClick={() => changeLanguage('en')} className={`flex-1 py-2 text-sm font-bold uppercase rounded-sm transition-colors ${i18n.language === 'en' ? 'bg-brand-gold text-brand-navy' : 'text-brand-gray hover:text-white'}`}>English</button>
                <button onClick={() => changeLanguage('mai')} className={`flex-1 py-2 text-sm font-bold uppercase rounded-sm transition-colors ${i18n.language === 'mai' ? 'bg-brand-gold text-brand-navy' : 'text-brand-gray hover:text-white'}`}>मैथिली</button>
              </div>

              {links.map((link) => (
                link.href.startsWith('/#') ? (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white text-lg font-bold uppercase tracking-wider block py-2 border-b border-white/5 hover:text-brand-gold"
                  >
                    {link.name}
                  </a>
                ) : (
                  <NavLink 
                    key={link.name} 
                    to={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) => `text-lg font-bold uppercase tracking-wider block py-2 border-b border-white/5 transition-colors ${isActive ? 'text-brand-gold' : 'text-white hover:text-brand-gold'}`}
                  >
                    {link.name}
                  </NavLink>
                )
              ))}
              <a href="tel:+918877850203" className="flex items-center justify-center space-x-2 bg-brand-gold text-brand-navy px-6 py-4 rounded-sm font-black uppercase text-lg mt-4 shadow-lg">
                <Phone size={20} />
                <span>{t('nav.call_now')}: +91 88778 50203</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
