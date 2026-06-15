import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  MessageCircle, 
  Phone, 
  CheckCircle2,
  X,
  Filter,
  Shield,
  Columns,
  Grid,
  DoorOpen,
  Layout,
  Factory,
  Armchair,
  Fence,
  PenTool,
  Image as ImageIcon
} from 'lucide-react';
import { catalogData } from '../data/catalog';
import heroBg from '../assets/images/hero-welding.jpg';

// Category icon mapper
const getCategoryIcon = (category) => {
  switch(category) {
    case 'Home Security': return Shield;
    case 'Shutters': return Columns;
    case 'Window Works': return Grid;
    case 'Doors': return DoorOpen;
    case 'Railings': return Layout;
    case 'Structures': return Factory;
    case 'Furniture': return Armchair;
    case 'Fencing': return Fence;
    case 'Custom': return PenTool;
    default: return Filter;
  }
};

// Image component with built-in pulse skeleton loader
const ImageWithSkeleton = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  
  return (
    <div className={`relative ${className}`}>
      {/* Skeleton Pulse */}
      {!loaded && (
        <div className="absolute inset-0 bg-[#111827] animate-pulse flex items-center justify-center">
          <ImageIcon className="text-[#1a2333] w-12 h-12" />
        </div>
      )}
      {/* Actual Image */}
      <img 
        src={src} 
        alt={alt} 
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`} 
      />
    </div>
  );
};

const Designs = () => {
  const navigate = useNavigate();
  // Active Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [activeCategories, setActiveCategories] = useState([]);
  const [activeSubcategories, setActiveSubcategories] = useState([]);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const allCategories = useMemo(() => [...new Set(catalogData.map(item => item.category))], []);
  const allSubcategories = useMemo(() => [...new Set(catalogData.map(item => item.subcategory))], []);

  const availableCategoryOptions = useMemo(() => {
    return allCategories.filter(cat => !activeCategories.includes(cat));
  }, [allCategories, activeCategories]);

  const availableSubcategoryOptions = useMemo(() => {
    return allSubcategories.filter(sub => !activeSubcategories.includes(sub));
  }, [allSubcategories, activeSubcategories]);

  const handleAddCategory = (e) => {
    if(e.target.value) {
      setActiveCategories([...activeCategories, e.target.value]);
      e.target.value = '';
    }
  };

  const handleAddSubcategory = (e) => {
    if(e.target.value) {
      setActiveSubcategories([...activeSubcategories, e.target.value]);
      e.target.value = '';
    }
  };

  const handleRemoveCategory = (catToRemove) => {
    setActiveCategories(activeCategories.filter(c => c !== catToRemove));
  };

  const handleRemoveSubcategory = (subToRemove) => {
    setActiveSubcategories(activeSubcategories.filter(s => s !== subToRemove));
  };

  // Master Filter Logic
  const filteredDesigns = useMemo(() => {
    return catalogData.filter((design) => {
      const matchCategory = activeCategories.length === 0 || activeCategories.includes(design.category);
      const matchSubcategory = activeSubcategories.length === 0 || activeSubcategories.includes(design.subcategory);
      
      const searchLower = debouncedSearch.toLowerCase();
      const matchSearch = debouncedSearch === '' || 
        design.code.toLowerCase().includes(searchLower) ||
        design.nameKey.toLowerCase().includes(searchLower) ||
        design.category.toLowerCase().includes(searchLower) ||
        design.subcategory.toLowerCase().includes(searchLower);

      return matchCategory && matchSubcategory && matchSearch;
    });
  }, [activeCategories, activeSubcategories, debouncedSearch]);

  const getCategoryCount = (categoryName) => {
    return catalogData.filter(item => item.category === categoryName).length;
  };

  return (
    <div className="bg-[#081225] min-h-screen pt-20 md:pt-24 pb-16 font-sans text-white">
      
      {/* SECTION 1: HERO */}
      <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 mb-16 border-b border-[#D4AF37]/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Iron Fabrication Background" className="w-full h-full object-cover filter grayscale contrast-125 brightness-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#081225]/80 via-[#081225]/90 to-[#081225]"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center space-x-3 bg-[#111827] px-6 py-3 rounded-full mb-8 border border-[#D4AF37]/50 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
          >
            <span className="w-3 h-3 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span className="text-sm md:text-base font-black text-[#D4AF37] uppercase tracking-widest">1000+ Designs Available</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-tight drop-shadow-xl"
          >
            Complete Iron Fabrication Design Catalog
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto font-semibold mb-10 drop-shadow-md"
          >
            Explore premium industrial and residential iron works crafted to perfection.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a href="tel:+918877850203" className="flex items-center justify-center space-x-2 bg-[#081225] text-white border-2 border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#081225] px-10 py-4 md:py-5 rounded-sm font-black text-sm uppercase transition-all shadow-[0_10px_20px_-10px_rgba(212,175,55,0.3)]">
              <Phone size={20} />
              <span>Call Now</span>
            </a>
            <a href="https://wa.me/918877850203" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 bg-[#25D366] text-white px-10 py-4 md:py-5 rounded-sm font-black text-sm hover:bg-[#20bd5a] transition-all shadow-[0_10px_20px_-10px_rgba(37,211,102,0.3)] uppercase">
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: CATEGORY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {allCategories.map((cat, idx) => {
            const Icon = getCategoryIcon(cat);
            const count = getCategoryCount(cat);
            return (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * idx }}
                key={cat}
                onClick={() => {
                  if(!activeCategories.includes(cat)) {
                    setActiveCategories([...activeCategories, cat]);
                  }
                  window.scrollTo({ top: document.getElementById('filter-bar').offsetTop - 60, behavior: 'smooth' });
                }}
                className="bg-gradient-to-br from-[#111827] to-[#1a2333] border border-white/5 border-b-[3px] border-b-[#111827] hover:border-b-[#D4AF37] p-8 rounded-sm hover:border-[#D4AF37]/30 transition-all duration-300 group cursor-pointer relative overflow-hidden shadow-2xl hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.2)]"
              >
                {/* Subtle metallic texture pattern */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] z-0"></div>
                
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-all transform translate-x-4 -translate-y-4 group-hover:scale-125 group-hover:rotate-12 duration-700 z-0">
                  <Icon size={140} className="text-[#D4AF37]" />
                </div>
                
                <div className="relative z-10">
                  <div className="bg-[#081225] w-16 h-16 flex items-center justify-center rounded-sm mb-6 border border-white/10 group-hover:border-[#D4AF37] shadow-lg group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-300">
                    <Icon size={28} className="text-[#D4AF37]" />
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-3 group-hover:text-[#D4AF37] transition-colors">{cat}</h3>
                  <div className="inline-block bg-[#111827] px-4 py-2 rounded-sm text-sm font-black text-[#D4AF37] border border-[#D4AF37]/20 uppercase tracking-widest shadow-inner">
                    {count} Designs
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: STICKY FILTER BAR WITH MULTI-SELECT UX */}
      <section id="filter-bar" className="sticky top-[64px] md:top-[84px] z-40 bg-[#081225]/95 backdrop-blur-xl border-y border-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] pt-6 pb-4 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
            {/* Search Input */}
            <div className="relative w-full md:flex-grow">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-[#D4AF37]" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search catalog..."
                className="block w-full pl-12 pr-4 py-4 md:py-4 bg-[#111827] border border-white/10 rounded-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all shadow-inner font-bold text-sm md:text-base"
              />
            </div>

            {/* Category Dropdown (Only shows unselected) */}
            <div className="relative w-full md:w-64 shrink-0">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Filter className="h-4 w-4 text-gray-400" />
              </div>
              <select
                onChange={handleAddCategory}
                defaultValue=""
                className="block w-full pl-10 pr-10 py-4 bg-[#111827] border border-white/10 rounded-sm text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all shadow-inner font-bold text-sm uppercase appearance-none cursor-pointer"
              >
                <option value="" disabled>+ Add Category</option>
                {availableCategoryOptions.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>

            {/* Subcategory Dropdown (Only shows unselected) */}
            <div className="relative w-full md:w-64 shrink-0">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Filter className="h-4 w-4 text-gray-400" />
              </div>
              <select
                onChange={handleAddSubcategory}
                defaultValue=""
                className="block w-full pl-10 pr-10 py-4 bg-[#111827] border border-white/10 rounded-sm text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all shadow-inner font-bold text-sm uppercase appearance-none cursor-pointer"
              >
                <option value="" disabled>+ Add Subcategory</option>
                {availableSubcategoryOptions.map(sub => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

          {/* ACTIVE FILTERS MULTI-SELECT DISPLAY */}
          <AnimatePresence>
            {(activeCategories.length > 0 || activeSubcategories.length > 0) && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="flex flex-wrap gap-2 pt-3 border-t border-white/5 mt-4"
              >
                <span className="text-gray-500 text-xs font-bold uppercase tracking-widest py-1.5 mr-2 hidden sm:block">Active Filters:</span>
                
                {activeCategories.map(cat => (
                  <motion.button
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    key={`ac-${cat}`}
                    onClick={() => handleRemoveCategory(cat)}
                    className="flex items-center space-x-2 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 px-4 py-1.5 md:py-2 rounded-sm text-xs font-black uppercase hover:bg-[#D4AF37] hover:text-[#081225] transition-colors group shadow-sm"
                  >
                    <span>{cat}</span>
                    <X size={14} className="group-hover:scale-125 transition-transform" />
                  </motion.button>
                ))}

                {activeSubcategories.map(sub => (
                  <motion.button
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    key={`as-${sub}`}
                    onClick={() => handleRemoveSubcategory(sub)}
                    className="flex items-center space-x-2 bg-white/5 text-white border border-white/20 px-4 py-1.5 md:py-2 rounded-sm text-xs font-black uppercase hover:bg-white hover:text-[#081225] transition-colors group shadow-sm"
                  >
                    <span>{sub}</span>
                    <X size={14} className="group-hover:scale-125 transition-transform" />
                  </motion.button>
                ))}

                <button 
                  onClick={() => { setActiveCategories([]); setActiveSubcategories([]); }}
                  className="text-xs text-gray-500 hover:text-white uppercase font-bold ml-2 underline underline-offset-4 py-1.5"
                >
                  Clear All
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* SECTION 4: PRODUCT CATALOG GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 min-h-[600px]">
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 border-b border-white/5 pb-4">
          <h2 className="text-2xl font-black text-white uppercase tracking-wider border-l-4 border-[#D4AF37] pl-4">Industrial Catalog</h2>
          <span className="text-gray-400 font-bold text-sm uppercase tracking-widest bg-[#111827] px-3 py-1 rounded-sm border border-white/5">{filteredDesigns.length} Products Found</span>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <AnimatePresence mode='popLayout'>
            {filteredDesigns.map((design) => {
              const waLink = `https://wa.me/918877850203?text=${encodeURIComponent(`Hello Rajeev ENGINEERING Workshop, I am interested in ${design.code} - ${design.nameKey}. Please provide more details.`)}`;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={design.id}
                  onClick={() => navigate(`/designs/${design.slug}`)}
                  className="bg-[#111827] rounded-sm border border-white/5 flex flex-col group hover:border-[#D4AF37]/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(212,175,55,0.15)] overflow-hidden shadow-2xl cursor-pointer"
                >
                  {/* Fixed Ratio Image Container - 260px strictly */}
                  <div className="relative w-full h-[260px] overflow-hidden bg-[#081225]">
                    
                    {/* Floating Product Code & Badge Overlay */}
                    <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-start z-20 bg-gradient-to-b from-[#081225]/80 to-transparent">
                      <div className="bg-[#081225]/90 backdrop-blur-md px-3 py-1.5 text-xs font-black text-white uppercase tracking-widest border border-white/10 rounded-sm shadow-xl">
                        {design.code}
                      </div>
                      {design.customAvailable && (
                        <div className="bg-[#25D366]/90 backdrop-blur-md px-2 py-1.5 text-[10px] font-black text-[#081225] uppercase tracking-wider rounded-sm shadow-xl flex items-center space-x-1 border border-[#25D366]/20">
                          <CheckCircle2 size={12} />
                          <span>Custom Works</span>
                        </div>
                      )}
                    </div>
                    
                    <ImageWithSkeleton 
                      src={design.image} 
                      alt={design.nameKey} 
                      className="w-full h-full transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-100"></div>
                  </div>
                  
                  {/* Content Container (flex-grow keeps cards equal height) */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                    <h3 className="text-xl md:text-2xl font-black text-white mb-6 uppercase leading-tight line-clamp-2 drop-shadow-md group-hover:text-[#D4AF37] transition-colors">{design.nameKey}</h3>
                    
                    {/* Clean Metadata Block */}
                    <div className="space-y-4 mb-8 flex-grow">
                      <div className="flex justify-between items-center border-b border-white/5 pb-3">
                        <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Category</span>
                        <span className="text-white text-sm font-black text-right uppercase tracking-wider">{design.category}</span>
                      </div>
                      <div className="flex justify-between items-center pb-3">
                        <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Material</span>
                        <span className="text-[#D4AF37] text-sm font-black text-right uppercase tracking-wider bg-[#D4AF37]/10 px-2 py-1 rounded-sm border border-[#D4AF37]/20">{design.material}</span>
                      </div>
                    </div>
                    
                    {/* Premium WhatsApp CTA */}
                    <div className="mt-auto">
                      <a 
                        href={waLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#111827] to-[#1a2333] text-gray-300 hover:from-[#25D366] hover:to-[#20bd5a] hover:text-[#081225] px-4 py-4 rounded-sm font-black transition-all duration-300 border border-white/10 hover:border-transparent uppercase text-sm tracking-widest shadow-lg group/btn overflow-hidden relative"
                      >
                        <MessageCircle size={18} className="group-hover/btn:animate-bounce" />
                        <span>Inquire Now</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
        
        {filteredDesigns.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32 bg-gradient-to-b from-[#111827] to-[#081225] rounded-sm border border-white/5 shadow-inner"
          >
            <div className="bg-[#081225] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/5 shadow-xl">
              <Search className="h-10 w-10 text-gray-600" />
            </div>
            <h3 className="text-3xl font-black text-white uppercase mb-4 tracking-tighter">No Designs Found</h3>
            <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto">We couldn't find any industrial designs matching your current filter selection.</p>
            <button 
              onClick={() => {setSearchTerm(''); setActiveCategories([]); setActiveSubcategories([]);}}
              className="bg-[#D4AF37] text-[#081225] px-8 py-4 rounded-sm font-black uppercase hover:bg-yellow-500 transition-colors tracking-widest shadow-lg hover:shadow-[0_10px_20px_-10px_rgba(212,175,55,0.5)]"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}
      </section>

    </div>
  );
};

export default Designs;
