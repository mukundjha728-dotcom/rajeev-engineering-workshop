import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingContact from './components/FloatingContact';
import ErrorBoundary from './components/ErrorBoundary';

// Eager load Home for LCP optimization
import Home from './pages/home';

// Lazy loaded routes for Performance SEO (Code Splitting)
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Designs = lazy(() => import('./pages/Designs'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const BlogList = lazy(() => import('./pages/BlogList'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Location = lazy(() => import('./pages/Location'));

// Simple loading fallback
const PageLoader = () => (
  <div className="min-h-screen bg-[#081225] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-[#111827] border-t-[#D4AF37] rounded-full animate-spin"></div>
  </div>
);

const LOCATION_CITIES = [
  'darbhanga', 'ghanshyampur', 'benipur', 'biraul', 'madhubani', 
  'samastipur', 'laheriasarai', 'bahadurpur', 'hanuman-nagar', 
  'rosera', 'singhwara', 'hayaghat', 'jale', 'pandaul', 'kusheshwar-asthan'
];

function App() {
  return (
    <div className="bg-[#081225] min-h-screen font-sans text-white selection:bg-[#D4AF37] selection:text-[#081225]">
      <ScrollToTop />
      <Navbar />
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/designs" element={<Designs />} />
            <Route path="/designs/:slug" element={<ProductDetails />} />
            
            {/* Blog Authority System */}
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />

            {/* Location Domination Pages */}
            {LOCATION_CITIES.map(city => (
              <Route key={city} path={`/${city}`} element={<Location />} />
            ))}
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <FloatingContact />
      <Footer />
    </div>
  );
}

export default App;
