import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Designs from './pages/Designs';
import ProductDetails from './pages/ProductDetails';
import FloatingContact from './components/FloatingContact';

function App() {
  return (
    <div className="bg-brand-navy min-h-screen font-sans text-white selection:bg-brand-gold selection:text-brand-navy">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/designs/:productId" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FloatingContact />
      <Footer />
    </div>
  );
}

export default App;
