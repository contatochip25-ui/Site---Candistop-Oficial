
import React, { useEffect } from 'react';
import UrgencyBar from './components/UrgencyBar';
import Hero from './components/Hero';
import VideoTestimonials from './components/VideoTestimonials';
import PainSection from './components/PainSection';
import Solution from './components/Solution';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Guarantee from './components/Guarantee';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Observer para animações de fade-in
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section) => observer.observe(section));

    // Interceptor Global de Âncoras para garantir rolagem sem mudar a URL
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        const id = anchor.hash.substring(1);
        const element = document.getElementById(id);
        
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      observer.disconnect();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <UrgencyBar />
      <Hero />
      <VideoTestimonials />
      <PainSection />
      <Solution />
      <Testimonials />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Guarantee />
      <Footer />
    </div>
  );
};

export default App;
