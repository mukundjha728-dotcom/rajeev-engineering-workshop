import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Users, Award, Hammer, Wrench, Settings, Warehouse, DoorOpen, Maximize } from 'lucide-react';
import heroImage from '../assets/images/workshop-team.jpg'; 
import mapImage from '../assets/images/darbhanga-map.jpg';
import Counter from '../components/Counter';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const achievements = [
    { value: <Counter to={10} suffix="+" />, label: t('about.ach_yexp') },
    { value: <Counter to={5000} suffix="+" />, label: t('about.ach_customers') },
    { value: <Counter to={1000} suffix="+" />, label: t('about.ach_designs') },
    { value: <Counter to={7} suffix={` ${t('about.ach_open').split(' ')[0]}`} />, label: t('about.ach_open').split(' ')[1] || t('about.ach_open') }
  ];

  const services = [
    { title: t('about.srv_1'), icon: DoorOpen },
    { title: t('about.srv_2'), icon: Maximize },
    { title: t('about.srv_3'), icon: Settings },
    { title: t('about.srv_4'), icon: Shield },
    { title: t('about.srv_5'), icon: Hammer },
    { title: t('about.srv_6'), icon: Warehouse }
  ];

  const trustBlocks = [
    { title: t('about.trust_1_t'), desc: t('about.trust_1_d'), icon: Shield },
    { title: t('about.trust_2_t'), desc: t('about.trust_2_d'), icon: Users },
    { title: t('about.trust_3_t'), desc: t('about.trust_3_d'), icon: Clock },
    { title: t('about.trust_4_t'), desc: t('about.trust_4_d'), icon: Wrench }
  ];

  const areas = ["Darbhanga", "Ghanshyam Pur", "Benipur", "Biraul", "Madhubani", "Samastipur"];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img src={heroImage} alt="Workshop" className="absolute inset-0 w-full h-full object-cover grayscale opacity-30" />
        <div className="absolute inset-0 bg-brand-navy/80 mix-blend-multiply"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-block bg-brand-gunmetal border border-brand-gold/30 px-4 py-2 rounded-full mb-6">
              <span className="text-brand-gold font-bold uppercase tracking-widest text-sm"><Counter to={10} suffix="+" /> {t('about.badge')}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
              {t('about.title1')} <span className="text-brand-gold">{t('about.title2')}</span> {t('about.title3').replace('{{count}}', '10')}
            </h1>
            <p className="text-brand-gray text-lg md:text-xl font-medium">
              {t('about.desc').replace('{{count}}', '10')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-brand-navy border-t border-brand-gunmetal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-8">{t('about.who_title1')} <span className="text-brand-gold">{t('about.who_title2')}</span></h2>
          <div className="space-y-6 text-brand-gray text-lg leading-relaxed font-medium">
            <p>{t('about.who_p1')}</p>
            <p>{t('about.who_p2').replace('{{count}}', '10')}</p>
            <p>{t('about.who_p3')}</p>
            <p className="text-brand-gold font-bold text-xl mt-8">{t('about.who_p4')}</p>
          </div>
        </div>
      </section>

      {/* Our Achievements */}
      <section className="py-20 bg-brand-gunmetal">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center uppercase tracking-tight mb-16">{t('about.ach_title1')} <span className="text-brand-gold">{t('about.ach_title2')}</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((stat, idx) => (
              <div key={idx} className="bg-brand-navy p-8 text-center rounded-sm border-b-4 border-brand-gold shadow-lg transform hover:-translate-y-2 transition-transform">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-brand-gold text-sm uppercase tracking-widest font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-24 bg-brand-navy border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center uppercase tracking-tight mb-16">{t('about.srv_title1')} <span className="text-brand-gold">{t('about.srv_title2')}</span></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-brand-gunmetal p-8 rounded-sm border border-brand-gold/10 hover:border-brand-gold/40 transition-colors group flex items-center space-x-6">
                  <div className="bg-brand-navy p-4 rounded-sm text-brand-gold group-hover:scale-110 transition-transform">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-wide">{service.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why People Trust Us */}
      <section className="py-24 bg-brand-gunmetal overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-12">{t('about.trust_title1')} <span className="text-brand-gold">{t('about.trust_title2')}</span></h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {trustBlocks.map((block, idx) => {
                  const Icon = block.icon;
                  return (
                    <div key={idx} className="space-y-4">
                      <div className="text-brand-gold"><Icon size={32} /></div>
                      <h4 className="text-white font-bold uppercase tracking-wider text-lg">{block.title}</h4>
                      <p className="text-brand-gray text-sm">{block.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 border-2 border-brand-gold/20 translate-x-4 translate-y-4 rounded-sm"></div>
              <img src={heroImage} alt="Our Team" className="relative z-10 w-full h-[500px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-brand-navy border-t border-brand-gunmetal">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-16">{t('about.areas_title1')} <span className="text-brand-gold">{t('about.areas_title2')}</span></h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {areas.map((area, idx) => (
              <span key={idx} className="bg-brand-gunmetal text-white border border-brand-gold/20 px-6 py-3 rounded-sm font-bold uppercase tracking-wider text-sm hover:border-brand-gold transition-colors cursor-default">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-gunmetal text-center border-t border-brand-gold/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">{t('about.cta_title1')} <span className="text-brand-gold">{t('about.cta_title2')}</span></h2>
          <p className="text-brand-gray text-xl mb-12 uppercase tracking-widest font-bold">{t('about.cta_desc')}</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="tel:+918877850203" className="bg-brand-gold text-brand-navy px-10 py-4 rounded-sm font-black uppercase tracking-widest hover:bg-yellow-500 transition-colors border-b-4 border-yellow-700 active:border-b-0 active:translate-y-1 w-full sm:w-auto">{t('about.cta_call')}</a>
            <a href="https://wa.me/918877850203" target="_blank" rel="noopener noreferrer" className="bg-brand-green text-white px-10 py-4 rounded-sm font-black uppercase tracking-widest hover:bg-green-600 transition-colors border-b-4 border-green-800 active:border-b-0 active:translate-y-1 w-full sm:w-auto">{t('about.cta_whatsapp')}</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
