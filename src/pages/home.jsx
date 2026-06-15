import React from 'react';
import Hero from '../components/Hero';
import PopularCategories from '../components/PopularCategories';
import FeaturedDesigns from '../components/FeaturedDesigns';
import WhyChooseUs from '../components/WhyChooseUs';
import ProjectGallery from '../components/ProjectGallery';
import CustomerReviews from '../components/CustomerReviews';
import ServiceAreas from '../components/ServiceAreas';
import CTABanner from '../components/CTABanner';
import SEO from '../components/SEO';

const Home = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Rajeev Engineering Workshop",
    "url": "https://rajeev-engineering-workshop.vercel.app/",
    "logo": "https://rajeev-engineering-workshop.vercel.app/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-88778-50203",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi", "mai"]
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rajeev Engineering Workshop",
    "image": "https://rajeev-engineering-workshop.vercel.app/assets/images/hero-welding.jpg",
    "url": "https://rajeev-engineering-workshop.vercel.app/",
    "telephone": "+918877850203",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ghanshyam Pur",
      "addressLocality": "Darbhanga",
      "addressRegion": "Bihar",
      "postalCode": "847427",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.1522",
      "longitude": "85.8971"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "Rajeev Engineering Workshop",
    "url": "https://rajeev-engineering-workshop.vercel.app/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://rajeev-engineering-workshop.vercel.app/designs?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <main>
      <SEO 
        title="Rajeev Engineering Workshop | Premium Iron Fabrication in Darbhanga Bihar"
        description="Rajeev Engineering Workshop provides premium iron gates, rolling shutters, railings, and industrial sheds in Darbhanga. Expert fabricators with 10+ years experience."
        keywords="iron gate maker darbhanga, rolling shutter bihar, custom iron works, grill fabrication, best welding shop near me, mukund kumar jha"
        canonical="/"
        schemaList={[organizationSchema, localBusinessSchema, websiteSchema]}
      />
      <Hero />
      <PopularCategories />
      <FeaturedDesigns />
      <WhyChooseUs />
      <ProjectGallery />
      <CustomerReviews />
      <ServiceAreas />
      <CTABanner />
    </main>
  );
};

export default Home;
