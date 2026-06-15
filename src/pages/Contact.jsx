import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import mapImage from '../assets/images/darbhanga-map.jpg';
import heroBg from '../assets/images/hero-welding.jpg';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Rajeev ENGINEERING Workshop,\nMy name is ${formData.name}.\nI need ${formData.service}.\nMessage: ${formData.message}\n\nPlease contact me.`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/918877850203?text=${encodedText}`, '_blank');
  };

  const contactCards = [
    { icon: Phone, title: t('contact.card_phone'), desc: "+91 8877850203", link: "tel:+918877850203" },
    { icon: MessageCircle, title: t('contact.card_whatsapp'), desc: "+91 8877850203", link: "https://wa.me/918877850203" },
    { icon: MapPin, title: t('contact.card_address'), desc: "Ghanshyam Pur, Darbhanga - 847427", link: "#map" },
    { icon: Clock, title: t('contact.card_hours'), desc: t('contact.hours_desc'), link: null }
  ];

  return (
    <div className="pt-20 bg-brand-navy min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 border-b border-brand-gold/20 overflow-hidden text-center min-h-[400px] flex flex-col justify-center">
        <img src={heroBg} alt="Welding Background" className="absolute inset-0 w-full h-full object-cover grayscale opacity-30" />
        <div className="absolute inset-0 bg-brand-navy/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">{t('contact.title1')} <span className="text-brand-gold">{t('contact.title2')}</span></h1>
          <p className="text-brand-gray text-lg md:text-xl font-bold uppercase tracking-widest">
            {t('contact.desc')}
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div key={idx} className="bg-brand-gunmetal border-t-4 border-brand-gold p-8 rounded-sm shadow-xl text-center flex flex-col items-center">
                  <div className="bg-brand-navy p-4 rounded-full text-brand-gold mb-6 border border-white/5">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-white font-black uppercase tracking-widest text-lg mb-2">{card.title}</h3>
                  {card.link ? (
                    <a href={card.link} className="text-brand-gray font-medium hover:text-brand-gold transition-colors">{card.desc}</a>
                  ) : (
                    <span className="text-brand-gray font-medium">{card.desc}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content: Form & Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div className="bg-brand-gunmetal p-10 rounded-sm border border-white/5 shadow-2xl">
            <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-8">{t('contact.form_title1')} <span className="text-brand-gold">{t('contact.form_title2')}</span></h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-brand-gray text-xs font-black uppercase tracking-widest mb-2">{t('contact.label_name')}</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-brand-navy border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors rounded-sm" placeholder={t('contact.placeholder_name')} />
              </div>
              <div>
                <label className="block text-brand-gray text-xs font-black uppercase tracking-widest mb-2">{t('contact.label_phone')}</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-brand-navy border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors rounded-sm" placeholder="+91 00000 00000" />
              </div>
              <div>
                <label className="block text-brand-gray text-xs font-black uppercase tracking-widest mb-2">{t('contact.label_service')}</label>
                <select required name="service" value={formData.service} onChange={handleChange} className="w-full bg-brand-navy border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors rounded-sm appearance-none">
                  <option value="" disabled>{t('contact.placeholder_service')}</option>
                  <option value="Main Gate">Main Gate</option>
                  <option value="Sliding Gate">Sliding Gate</option>
                  <option value="Rolling Shutter">Rolling Shutter</option>
                  <option value="Window Grill">Window Grill</option>
                  <option value="Balcony Railing">Balcony Railing</option>
                  <option value="Industrial Shed">Industrial Shed</option>
                  <option value="Custom Fabrication">Custom Fabrication</option>
                </select>
              </div>
              <div>
                <label className="block text-brand-gray text-xs font-black uppercase tracking-widest mb-2">{t('contact.label_message')}</label>
                <textarea required name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full bg-brand-navy border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors rounded-sm resize-none" placeholder={t('contact.placeholder_message')}></textarea>
              </div>
              <button type="submit" className="w-full flex justify-center items-center space-x-2 bg-brand-gold text-brand-navy py-4 font-black uppercase tracking-widest hover:bg-yellow-500 transition-colors border-b-4 border-yellow-700 active:border-b-0 active:translate-y-1 rounded-sm mt-4">
                <Send size={20} />
                <span>{t('contact.btn_send')}</span>
              </button>
            </form>
          </div>

          {/* Location Section */}
          <div id="map" className="flex flex-col">
            <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-8">{t('contact.loc_title1')} <span className="text-brand-gold">{t('contact.loc_title2')}</span></h2>
            <div className="flex-1 relative rounded-sm overflow-hidden border border-brand-gunmetal shadow-2xl group min-h-[400px]">
              <img src={mapImage} alt="Darbhanga Map" className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-luminosity opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute bottom-6 left-6 right-6 bg-brand-gunmetal/90 backdrop-blur-md p-6 border-l-4 border-brand-gold rounded-sm shadow-xl">
                <h4 className="text-white font-black uppercase text-xl mb-1">Rajeev ENGINEERING Workshop</h4>
                <p className="text-brand-gray font-medium flex items-center mt-2">
                  <MapPin size={16} className="text-brand-gold mr-2" /> Ghanshyam Pur, Darbhanga - 847427
                </p>
              </div>
            </div>
            
            {/* Quick CTA */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <a href="tel:+918877850203" className="flex justify-center items-center space-x-2 bg-brand-gunmetal border border-brand-gold/20 text-white py-4 font-bold uppercase tracking-wider hover:border-brand-gold hover:text-brand-gold transition-colors rounded-sm">
                <Phone size={18} /> <span>{t('contact.btn_call')}</span>
              </a>
              <a href="https://wa.me/918877850203" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center space-x-2 bg-brand-green/10 border border-brand-green/30 text-brand-green py-4 font-bold uppercase tracking-wider hover:bg-brand-green hover:text-white transition-colors rounded-sm">
                <MessageCircle size={18} /> <span>{t('contact.btn_whatsapp')}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
