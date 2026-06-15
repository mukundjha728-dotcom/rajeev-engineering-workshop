import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ChevronRight,
  CalendarCheck,
  ShieldCheck,
  Award,
  Layers
} from 'lucide-react';

const Footer = () => {
  const locations = [
    'Darbhanga', 'Ghanshyampur', 'Benipur', 'Biraul', 
    'Madhubani', 'Samastipur', 'Laheriasarai', 'Pandaul'
  ];

  return (
    <footer className="bg-[#081225] border-t border-gray-800 font-sans mt-auto">
      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* COLUMN 1: BRAND BLOCK (Spans 2 cols on lg) */}
          <div className="flex flex-col lg:col-span-2">
            <h2 className="text-2xl font-black text-white uppercase tracking-wider mb-6 flex items-center">
              <span className="text-[#D4AF37] mr-2">Rajeev</span>
              <span>Engineering</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6 font-medium">
              Premium iron fabrication, gates, shutters, railings, grills and industrial structures built with lifetime durability across Bihar.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] px-3 py-1.5 rounded-sm flex items-center space-x-1.5 text-[10px] font-black uppercase tracking-widest">
                <Award size={12} />
                <span>12+ Yrs Exp</span>
              </div>
              <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] px-3 py-1.5 rounded-sm flex items-center space-x-1.5 text-[10px] font-black uppercase tracking-widest">
                <ShieldCheck size={12} />
                <span>5200+ Customers</span>
              </div>
              <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] px-3 py-1.5 rounded-sm flex items-center space-x-1.5 text-[10px] font-black uppercase tracking-widest">
                <Layers size={12} />
                <span>Premium Quality</span>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={16} className="text-[#D4AF37] mr-3 mt-1 shrink-0" />
                <a href="tel:+918877850203" className="text-gray-400 hover:text-[#D4AF37] font-bold transition-colors tracking-widest">
                  +91 88778 50203
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="text-[#D4AF37] mr-3 mt-1 shrink-0" />
                <span className="text-gray-400 font-medium leading-relaxed">Ghanshyam Pur, Darbhanga, Bihar 847427</span>
              </li>
            </ul>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-6 border-l-4 border-[#D4AF37] pl-3">Explore</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center group font-medium">
                  <ChevronRight size={14} className="mr-2 text-gray-600 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/designs" className="text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center group font-medium">
                  <ChevronRight size={14} className="mr-2 text-gray-600 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all" />
                  All Designs
                </Link>
              </li>

              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center group font-medium">
                  <ChevronRight size={14} className="mr-2 text-gray-600 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center group font-medium">
                  <ChevronRight size={14} className="mr-2 text-gray-600 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: SERVICES */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-6 border-l-4 border-[#D4AF37] pl-3">Services</h3>
            <ul className="space-y-4">
              <li className="text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center group font-medium cursor-pointer">
                <ChevronRight size={14} className="mr-2 text-gray-600 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all" />
                Main Gates
              </li>
              <li className="text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center group font-medium cursor-pointer">
                <ChevronRight size={14} className="mr-2 text-gray-600 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all" />
                Rolling Shutters
              </li>
              <li className="text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center group font-medium cursor-pointer">
                <ChevronRight size={14} className="mr-2 text-gray-600 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all" />
                Railings & Grills
              </li>
              <li className="text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center group font-medium cursor-pointer">
                <ChevronRight size={14} className="mr-2 text-gray-600 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all" />
                Industrial Sheds
              </li>
              <li className="text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center group font-medium cursor-pointer">
                <ChevronRight size={14} className="mr-2 text-gray-600 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all" />
                Custom Iron Works
              </li>
            </ul>
          </div>

          {/* COLUMN 4: LOCATIONS */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-6 border-l-4 border-[#D4AF37] pl-3">Locations</h3>
            <ul className="space-y-4">
              {locations.map((loc, i) => (
                <li key={i}>
                  <Link to={`/${loc.toLowerCase()}`} className="text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center group font-medium">
                    <MapPin size={14} className="mr-2 text-gray-600 group-hover:text-[#D4AF37] transition-colors" />
                    {loc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/5 bg-[#060d1a]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm font-medium">
          <p className="text-gray-500 mb-4 md:mb-0 text-center md:text-left">
            © 2026 Rajeev ENGINEERING Workshop. All rights reserved.
          </p>
          <p className="text-gray-500 text-center md:text-right">
            Designed & Developed by <a href="https://mukund-kumar-jha.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] font-bold tracking-wide hover:underline hover:text-yellow-400 transition-colors">Mukund Kumar Jha</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
