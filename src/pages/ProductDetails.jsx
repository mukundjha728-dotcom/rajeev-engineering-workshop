import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { catalogData } from '../data/catalog';
import { 
  ChevronRight, 
  ArrowLeft,
  Phone, 
  MessageCircle, 
  CheckCircle2,
  ShieldCheck,
  Award,
  Zap,
  Wrench,
  Image as ImageIcon
} from 'lucide-react';
import { motion } from 'framer-motion';

// Image component with built-in pulse skeleton loader
const ImageWithSkeleton = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  
  return (
    <div className={`relative ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-[#111827] animate-pulse flex items-center justify-center">
          <ImageIcon className="text-[#1a2333] w-12 h-12" />
        </div>
      )}
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

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  // Find product
  const product = catalogData.find(item => item.id === parseInt(productId));

  // Handle 404
  if (!product) {
    return (
      <div className="min-h-screen bg-[#081225] flex flex-col items-center justify-center pt-24 px-4 text-center">
        <h1 className="text-6xl font-black text-white mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8">Product design not found.</p>
        <Link to="/designs" className="bg-[#D4AF37] text-[#081225] px-8 py-3 rounded-sm font-black uppercase tracking-widest hover:bg-yellow-500 transition-colors">
          Back to Catalog
        </Link>
      </div>
    );
  }

  // Find related products (same category, different id, max 4)
  const relatedProducts = catalogData
    .filter(item => item.category === product.category && item.id !== product.id)
    .slice(0, 4);

  const waMessage = encodeURIComponent(`Hello Rajeev ENGINEERING Workshop, I am interested in ${product.code} - ${product.nameKey}. Please provide more details.`);
  const waLink = `https://wa.me/918877850203?text=${waMessage}`;

  return (
    <div className="bg-[#081225] min-h-screen pt-24 pb-24 font-sans text-white">
      
      {/* SECTION 1: BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex items-center space-x-2 text-sm font-bold text-gray-400 uppercase tracking-wider">
          <Link to="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
          <ChevronRight size={14} className="text-gray-600" />
          <Link to="/designs" className="hover:text-[#D4AF37] transition-colors">All Designs</Link>
          <ChevronRight size={14} className="text-gray-600" />
          <span className="text-[#D4AF37] truncate max-w-[200px] sm:max-w-none">{product.nameKey}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-400 hover:text-white mb-6 font-bold uppercase tracking-widest transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back</span>
        </button>

        {/* SECTION 2: HERO LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          
          {/* Left: Large Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full relative"
          >
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-white/10 shadow-2xl">
              <ImageWithSkeleton src={product.image} alt={product.nameKey} className="w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081225]/80 via-transparent to-transparent"></div>
              
              {/* Product Code overlay */}
              <div className="absolute bottom-4 left-4 bg-[#111827]/90 backdrop-blur-md px-4 py-2 border border-white/10 rounded-sm shadow-xl">
                <span className="text-sm font-black text-[#D4AF37] tracking-widest uppercase">{product.code}</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Product Details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            {product.customAvailable && (
              <div className="inline-flex items-center space-x-2 bg-[#25D366]/10 text-[#25D366] px-3 py-1.5 rounded-sm border border-[#25D366]/20 mb-6 w-fit">
                <CheckCircle2 size={14} />
                <span className="text-xs font-black uppercase tracking-wider">Custom Work Available</span>
              </div>
            )}
            
            <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight mb-6">{product.nameKey}</h1>
            
            <div className="grid grid-cols-2 gap-6 mb-10 p-6 bg-[#111827] border border-white/5 rounded-sm shadow-inner">
              <div>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Category</p>
                <p className="text-white text-base font-black tracking-wide uppercase">{product.category}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Type</p>
                <p className="text-white text-base font-black tracking-wide uppercase">{product.subcategory}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Material</p>
                <p className="text-[#D4AF37] text-base font-black tracking-wide uppercase">{product.material}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Size Reference</p>
                <p className="text-white text-base font-black tracking-wide uppercase">{product.size}</p>
              </div>
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="tel:+918877850203" className="flex-1 flex items-center justify-center space-x-2 bg-transparent text-white border-2 border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#081225] px-8 py-5 rounded-sm font-black text-sm uppercase transition-all shadow-lg">
                <Phone size={20} />
                <span>Call Now</span>
              </a>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center space-x-2 bg-[#25D366] text-white px-8 py-5 rounded-sm font-black text-sm hover:bg-[#20bd5a] transition-all shadow-lg uppercase">
                <MessageCircle size={20} />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* SECTION 3 & 4: DESCRIPTION & FEATURES */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24 border-t border-white/5 pt-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6 border-l-4 border-[#D4AF37] pl-4">Product Details</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-medium">
              This premium <span className="text-[#D4AF37]">{product.nameKey.toLowerCase()}</span> is designed for residential and commercial spaces requiring top-tier security and aesthetic appeal. Fabricated using high-grade <span className="font-bold text-white">{product.material.toLowerCase()}</span>, this structure guarantees long-lasting durability, weather resistance, and an impeccable finish.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              At Rajeev Engineering Workshop, every piece is welded by master craftsmen to ensure maximum structural integrity. As part of our <span className="text-white">{product.category}</span> collection, this design combines heavy-duty industrial strength with a refined, polished exterior.
            </p>
          </div>
          
          <div className="bg-[#111827] p-8 border border-white/5 rounded-sm shadow-xl">
            <h3 className="text-lg font-black text-white uppercase tracking-widest mb-6">Premium Features</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-300">
                <ShieldCheck className="text-[#D4AF37] shrink-0" size={20} />
                <span className="font-bold text-sm">Heavy Duty Build Quality</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-300">
                <Zap className="text-[#D4AF37] shrink-0" size={20} />
                <span className="font-bold text-sm">Rust Resistant Coating</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-300">
                <Award className="text-[#D4AF37] shrink-0" size={20} />
                <span className="font-bold text-sm">Premium Welding Finish</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-300">
                <Wrench className="text-[#D4AF37] shrink-0" size={20} />
                <span className="font-bold text-sm">Customizable Dimensions</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SECTION 5: RELATED PRODUCTS */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-white/5 pt-16">
            <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-10 border-l-4 border-[#D4AF37] pl-4">Related Designs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(related => (
                <Link 
                  key={related.id} 
                  to={`/designs/${related.id}`}
                  className="bg-[#111827] rounded-sm border border-white/5 flex flex-col group hover:border-[#D4AF37]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)] overflow-hidden"
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#081225]">
                    <div className="absolute top-3 left-3 z-20 bg-[#081225]/90 px-2 py-1 text-[10px] font-black text-[#D4AF37] uppercase tracking-widest border border-white/10 rounded-sm">
                      {related.code}
                    </div>
                    <ImageWithSkeleton src={related.image} alt={related.nameKey} className="w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-out" />
                  </div>
                  <div className="p-5 flex-grow flex flex-col">
                    <h3 className="text-sm font-black text-white uppercase tracking-wide leading-tight mb-2 group-hover:text-[#D4AF37] transition-colors line-clamp-2">{related.nameKey}</h3>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mt-auto">{related.subcategory}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* MOBILE STICKY CTAS */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#081225]/95 backdrop-blur-md border-t border-white/10 p-4 flex space-x-3 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <a href="tel:+918877850203" className="flex-1 flex items-center justify-center space-x-2 bg-[#111827] text-white border border-[#D4AF37] px-4 py-3.5 rounded-sm font-black text-xs uppercase shadow-lg">
          <Phone size={16} />
          <span>Call</span>
        </a>
        <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex-2 flex items-center justify-center space-x-2 bg-[#25D366] text-[#081225] px-6 py-3.5 rounded-sm font-black text-xs uppercase shadow-lg text-center whitespace-nowrap">
          <MessageCircle size={16} />
          <span>WhatsApp Inquiry</span>
        </a>
      </div>

    </div>
  );
};

export default ProductDetails;
