import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FloatingWhatsApp = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Desktop Floating Actions */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col space-y-4">
        <a
          href="tel:+918877850203"
          className="bg-brand-gold text-brand-navy p-4 rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group border border-brand-navy"
          aria-label="Call Now"
        >
          <Phone size={28} className="group-hover:scale-110 transition-transform" />
        </a>
        <a
          href="https://wa.me/918877850203"
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-brand-green text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group border border-brand-navy"
          aria-label="Chat on WhatsApp"
        >
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-brand-navy px-4 py-2 rounded-sm shadow-xl font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider border border-gray-200 pointer-events-none hidden sm:block">
            {t('about.cta_whatsapp')}
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white transform rotate-45 border-r border-t border-gray-200"></div>
          </div>
          <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
        </a>
      </div>

      {/* Mobile Fixed Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 flex bg-brand-gunmetal border-t border-brand-gold/30 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <a
          href="tel:+918877850203"
          className="flex-1 flex justify-center items-center space-x-2 py-4 bg-brand-gold text-brand-navy font-black uppercase tracking-widest active:bg-yellow-500 transition-colors"
        >
          <Phone size={20} />
          <span>Call Now</span>
        </a>
        <a
          href="https://wa.me/918877850203"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex justify-center items-center space-x-2 py-4 bg-brand-green text-white font-black uppercase tracking-widest active:bg-green-600 transition-colors"
        >
          <MessageCircle size={20} />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
};

export default FloatingWhatsApp;
