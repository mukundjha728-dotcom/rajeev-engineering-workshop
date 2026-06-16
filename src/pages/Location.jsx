import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { MapPin, Phone, ShieldCheck, Wrench, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { catalogData } from '../data/catalog';
import fallbackImage from '../assets/fallback.jpg';

const formatCityName = (city) => {
  return city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

const Location = () => {
  const { city } = useParams();
  const formattedCity = formatCityName(city || 'darbhanga');

  // Get 4 premium products to showcase
  const topProducts = catalogData.slice(0, 4);

  // SCHEMA MARKUP
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Rajeev Engineering Workshop ${formattedCity}`,
    "image": "https://rajeev-engineering-workshop.vercel.app/assets/images/hero-welding.jpg",
    "url": `https://rajeev-engineering-workshop.vercel.app/${city}`,
    "telephone": "+918877850203",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": formattedCity,
      "addressRegion": "Bihar",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.1522",
      "longitude": "85.8971"
    },
    "areaServed": formattedCity,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Iron Fabrication Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Iron Gate Fabrication"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Rolling Shutter Manufacturing"
          }
        }
      ]
    }
  };

  return (
    <div className="bg-[#081225] min-h-screen pt-24 pb-24 font-sans text-white">
      
      <SEO 
        title={`Best Iron Gate & Fabrication in ${formattedCity} | Rajeev Engineering`}
        description={`Looking for the best iron gate fabricator, rolling shutters, and custom welding in ${formattedCity}? Rajeev Engineering Workshop provides premium quality steel works.`}
        keywords={`iron gate ${formattedCity}, rolling shutter ${formattedCity}, welding shop ${formattedCity}, grill maker ${formattedCity}, steel shed ${formattedCity}`}
        canonical={`/${city}`}
        schemaList={[localBusinessSchema]}
      />

      {/* Hero Section */}
      <div className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 border-b border-white/5 bg-[#081225]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#D4AF37] opacity-20 blur-[100px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-2 rounded-sm border border-[#D4AF37]/20 mb-8">
            <MapPin size={16} />
            <span className="text-xs font-black uppercase tracking-widest">Serving {formattedCity} & Surrounding Areas</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.1] mb-8">
            Premium Iron Fabrication in <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-yellow-200">{formattedCity}</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-medium mb-10 leading-relaxed">
            Rajeev Engineering Workshop provides the highest quality custom iron gates, rolling shutters, window grills, and industrial sheds to homes and businesses across {formattedCity}.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="tel:+918877850203" className="w-full sm:w-auto bg-[#D4AF37] text-[#081225] px-8 py-4 rounded-sm font-black uppercase tracking-widest hover:bg-yellow-500 transition-colors flex items-center justify-center space-x-2">
              <Phone size={20} />
              <span>Call For Free Quote</span>
            </a>
            <Link to="/designs" className="w-full sm:w-auto bg-transparent border-2 border-white/20 text-white px-8 py-4 rounded-sm font-black uppercase tracking-widest hover:border-white hover:bg-white/5 transition-all">
              View Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* Trust Factors */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#111827] p-8 border border-white/5 rounded-sm text-center">
            <ShieldCheck className="text-[#D4AF37] w-12 h-12 mx-auto mb-6" />
            <h3 className="text-xl font-black uppercase tracking-wide mb-3">10+ Years Experience</h3>
            <p className="text-gray-400">Trusted by hundreds of families in {formattedCity} for durable, lifetime security structures.</p>
          </div>
          <div className="bg-[#111827] p-8 border border-white/5 rounded-sm text-center">
            <Wrench className="text-[#D4AF37] w-12 h-12 mx-auto mb-6" />
            <h3 className="text-xl font-black uppercase tracking-wide mb-3">Custom Fabrication</h3>
            <p className="text-gray-400">If you can design it, we can build it. Heavy MS sheets, cast iron, and wrought iron works.</p>
          </div>
          <div className="bg-[#111827] p-8 border border-white/5 rounded-sm text-center">
            <Award className="text-[#D4AF37] w-12 h-12 mx-auto mb-6" />
            <h3 className="text-xl font-black uppercase tracking-wide mb-3">Premium Quality</h3>
            <p className="text-gray-400">We use top-grade Tata/Apollo steel pipes and ensure deep penetration arc welding for maximum strength.</p>
          </div>
        </div>
      </div>

      {/* Services in this City */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-6">
              Our Services in <span className="text-[#D4AF37]">{formattedCity}</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              We operate a fully equipped, modern fabrication workshop capable of handling both residential and large-scale commercial engineering projects. Our transportation network allows us to safely deliver and install heavy structures anywhere in {formattedCity}.
            </p>
            <ul className="space-y-4">
              {['Premium Iron Main Gates', 'Motorized & Manual Rolling Shutters', 'Modern Window Grills & Safety Doors', 'Balcony & Staircase Railings', 'Industrial Steel Sheds & Warehouses', 'Custom Iron Furniture & Racks'].map((service, i) => (
                <li key={i} className="flex items-start space-x-3 text-gray-300">
                  <CheckCircle2 className="text-[#D4AF37] shrink-0 mt-0.5" size={20} />
                  <span className="font-bold">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            {topProducts.map((product) => (
              <div key={product.id} className="aspect-square relative rounded-sm overflow-hidden border border-white/10">
                <img src={product.image} alt={`${product.name} Rajeev Engineering Workshop`} loading="lazy" decoding="async" onError={(e) => { e.target.src = fallbackImage; }} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081225] to-transparent opacity-80"></div>
                <div className="absolute bottom-3 left-3 text-white text-xs font-black uppercase">{product.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#D4AF37] p-10 md:p-16 rounded-sm">
          <h2 className="text-3xl md:text-5xl font-black text-[#081225] uppercase tracking-tight mb-6">
            Ready to secure your property?
          </h2>
          <p className="text-[#081225]/80 font-bold text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Contact Rajeev Engineering Workshop today for the best fabrication rates and quality in {formattedCity}.
          </p>
          <a href="tel:+918877850203" className="inline-block bg-[#081225] text-white px-10 py-5 rounded-sm font-black text-lg uppercase tracking-widest hover:bg-[#111827] transition-colors shadow-2xl">
            Call +91 88778 50203
          </a>
        </div>
      </div>

    </div>
  );
};

export default Location;
