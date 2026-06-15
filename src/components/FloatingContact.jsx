import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      <a 
        href="tel:+918877850203" 
        className="bg-brand-gold text-brand-navy p-4 rounded-full shadow-[0_10px_20px_-10px_rgba(212,175,55,0.5)] hover:bg-yellow-500 hover:scale-110 transition-transform duration-300 group flex items-center justify-center relative"
      >
        <Phone size={24} className="group-hover:animate-bounce" />
        <span className="absolute right-full mr-4 bg-brand-gunmetal text-white text-xs font-black px-3 py-1.5 rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 uppercase tracking-widest shadow-xl">
          Call Now
        </span>
      </a>
      
      <a 
        href="https://wa.me/918877850203" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_20px_-10px_rgba(37,211,102,0.5)] hover:bg-[#20bd5a] hover:scale-110 transition-transform duration-300 group flex items-center justify-center relative"
      >
        <MessageCircle size={24} className="group-hover:animate-pulse" />
        <span className="absolute right-full mr-4 bg-brand-gunmetal text-white text-xs font-black px-3 py-1.5 rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 uppercase tracking-widest shadow-xl">
          WhatsApp
        </span>
      </a>
    </div>
  );
};

export default FloatingContact;
