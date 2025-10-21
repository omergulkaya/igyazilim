import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import WebDesign from './pages/services/WebDesign';
import MobileApp from './pages/services/MobileApp';
import Ecommerce from './pages/services/Ecommerce';
import DigitalMarketing from './pages/services/DigitalMarketing';
import BrandingDesign from './pages/services/BrandingDesign';
import Support from './pages/services/Support';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/web-design" element={<WebDesign />} />
        <Route path="/services/mobile-app" element={<MobileApp />} />
        <Route path="/services/ecommerce" element={<Ecommerce />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/branding-design" element={<BrandingDesign />} />
        <Route path="/services/support" element={<Support />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;

