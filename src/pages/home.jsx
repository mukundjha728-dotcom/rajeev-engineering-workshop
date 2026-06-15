import React from 'react';
import Hero from '../components/Hero';
import PopularCategories from '../components/PopularCategories';
import FeaturedDesigns from '../components/FeaturedDesigns';
import WhyChooseUs from '../components/WhyChooseUs';
import ProjectGallery from '../components/ProjectGallery';
import CustomerReviews from '../components/CustomerReviews';
import ServiceAreas from '../components/ServiceAreas';
import CTABanner from '../components/CTABanner';

const Home = () => {
  return (
    <main>
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
