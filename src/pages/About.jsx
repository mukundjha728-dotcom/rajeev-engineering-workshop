import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Users, Award, Hammer, Wrench, Settings, Warehouse, DoorOpen, Maximize, CheckCircle2 } from 'lucide-react';
import heroImage from '../assets/images/workshop-team.jpg'; 
import SEO from '../components/SEO';
import Counter from '../components/Counter';

const About = () => {
  const achievements = [
    { value: <Counter to={12} suffix="+" />, label: "Years Experience" },
    { value: <Counter to={5200} suffix="+" />, label: "Projects Completed" },
    { value: <Counter to={150} suffix="+" />, label: "B2B Clients" },
    { value: <Counter to={7} suffix=" Days" />, label: "Open Every Week" }
  ];

  const trustFactors = [
    { title: "Uncompromising Quality", desc: "We use only premium Tata and Apollo steel pipes. No light-gauge shortcuts.", icon: Shield },
    { title: "Expert Welds", desc: "Our ironsmiths have decades of combined experience in deep penetration arc welding.", icon: Award },
    { title: "Timely Delivery", desc: "We understand construction timelines. When we commit to a date, we deliver.", icon: Clock },
    { title: "Custom Engineering", desc: "From simple grills to massive factory sheds, we engineer solutions that last.", icon: Wrench }
  ];

  const areas = ["Darbhanga", "Ghanshyam Pur", "Benipur", "Biraul", "Madhubani", "Samastipur", "Laheriasarai"];

  return (
    <div className="bg-[#081225] min-h-screen pt-20 font-sans text-white">
      <SEO 
        title="About Rajeev Engineering Workshop | 10+ Years of Trust in Bihar"
        description="Learn about Rajeev Kumar's journey in building the most trusted iron fabrication workshop in Darbhanga. Over 5000+ custom iron gates and structures delivered."
        keywords="about rajeev engineering, rajeev kumar darbhanga, iron workshop history, best fabricator bihar"
        canonical="/about"
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden border-b border-white/5">
        <img src={heroImage} alt="Rajeev Engineering Workshop Facility" className="absolute inset-0 w-full h-full object-cover grayscale opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081225] via-transparent to-transparent"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-block bg-[#111827] border border-[#D4AF37]/30 px-4 py-2 rounded-sm mb-6 shadow-2xl">
              <span className="text-[#D4AF37] font-black uppercase tracking-widest text-xs">A Decade of Iron Craftsmanship</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
              Forging Strength, <span className="text-[#D4AF37]">Building Trust</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              Rajeev Engineering Workshop is Darbhanga's premier iron fabrication facility, specializing in heavy-duty residential and commercial steel structures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Owner Story (E-E-A-T Focus) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-8 border-l-4 border-[#D4AF37] pl-4">
              Our Journey
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Founded over 12 years ago by <strong className="text-white">Rajeev Kumar</strong> in Ghanshyam Pur, Darbhanga, the workshop began with a simple mission: to provide the local community with iron gates and grills that actually last. 
              </p>
              <p>
                In a market flooded with lightweight, rust-prone ironworks, Rajeev Engineering Workshop took a different path. By refusing to compromise on material gauge and investing in heavy-duty arc welding machinery, the workshop quickly built a reputation for unbreakable quality.
              </p>
              <p>
                Today, what started as a small local setup has grown into a massive fabrication hub capable of delivering multi-ton industrial sheds, fully automated motorized rolling shutters, and intricate CNC laser-cut gates to homes and businesses across Bihar.
              </p>
            </div>
            
            <div className="mt-10 bg-[#111827] p-6 border border-white/5 rounded-sm">
              <h3 className="text-xl font-black text-white uppercase tracking-widest mb-4 text-[#D4AF37]">The Founder's Guarantee</h3>
              <p className="text-gray-400 italic">"We don't just weld iron; we secure your family and your business. Every single piece that leaves our workshop carries my personal guarantee of structural integrity."</p>
              <p className="mt-4 font-black uppercase tracking-widest text-sm text-white">— Rajeev Kumar, Founder</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 border-2 border-[#D4AF37]/20 translate-x-4 translate-y-4 rounded-sm"></div>
            <img src={heroImage} alt="Rajeev Kumar and Team" className="relative z-10 w-full aspect-[4/3] object-cover rounded-sm border border-white/10 shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#111827] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-[#D4AF37] transition-colors">{stat.value}</div>
                <div className="text-gray-500 text-xs uppercase tracking-widest font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why People Trust Us */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">The <span className="text-[#D4AF37]">Engineering</span> Standard</h2>
          <p className="text-gray-400">Why top builders and homeowners choose Rajeev Engineering Workshop.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFactors.map((block, idx) => {
            const Icon = block.icon;
            return (
              <div key={idx} className="bg-[#111827] p-8 border border-white/5 rounded-sm hover:border-[#D4AF37]/30 transition-colors">
                <div className="text-[#D4AF37] mb-6"><Icon size={40} /></div>
                <h4 className="text-white font-black uppercase tracking-wider text-lg mb-3">{block.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{block.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 border-t border-white/5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#111827] to-[#081225]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-12">Primary Service <span className="text-[#D4AF37]">Areas</span></h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {areas.map((area, idx) => (
              <span key={idx} className="bg-[#081225] text-gray-300 border border-white/10 px-6 py-3 rounded-sm font-bold uppercase tracking-wider text-xs hover:border-[#D4AF37] hover:text-white transition-colors cursor-default shadow-lg">
                {area}
              </span>
            ))}
            <span className="bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 px-6 py-3 rounded-sm font-black uppercase tracking-wider text-xs shadow-lg">
              + All across Bihar
            </span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
