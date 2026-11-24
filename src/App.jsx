import React, { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Doctors from './components/Doctors';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';

function MainContent() {
  // Setup subtle scroll fade-in observer for sections
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.12
    });

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="clinic-app-wrapper">
      {/* 1. Sticky Header */}
      <Header />

      <main id="main-content">
        {/* 2. Hero Section */}
        <Hero />

        {/* About / Clinical Philosophy Brief */}
        <div className="fade-in-section">
          <About />
        </div>

        {/* 3. Doctors Section */}
        <div className="fade-in-section">
          <Doctors />
        </div>

        {/* 4. Services Section */}
        <div className="fade-in-section">
          <Services />
        </div>

        {/* 5. Gallery Section */}
        <div className="fade-in-section">
          <Gallery />
        </div>

        {/* 6. Reviews Section */}
        <div className="fade-in-section">
          <Reviews />
        </div>

        {/* 7. Patient FAQ Section */}
        <div className="fade-in-section">
          <FAQ />
        </div>

        {/* 8. Contact & Location Section */}
        <div className="fade-in-section">
          <Contact />
        </div>
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* Floating Call Button (Mobile Viewports Only) */}
      <FloatingCallButton />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
      <Analytics />
    </LanguageProvider>
  );
}
