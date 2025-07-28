import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

// Import new components
import HeroSection from './components/HeroSection';
import StatisticsSection from './components/StatisticsSection';
import ServicesSection from './components/ServicesSection';
import ValuePropositionSection from './components/ValuePropositionSection';
import TestimonialsSection from './components/TestimonialsSection';
import GetFundedSection from './components/GetFundedSection';
import AcceleratorsSection from './components/AcceleratorsSection';
import RecognitionSection from './components/RecognitionSection';
import ContactFormSection from './components/ContactFormSection';
const Home = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="w-full bg-main overflow-x-hidden">
      <Header />

      <main className="w-full bg-main">
        <HeroSection />
        <StatisticsSection />
        <ServicesSection />
        <ValuePropositionSection />
        <TestimonialsSection />
        <GetFundedSection />
        <AcceleratorsSection />
        <RecognitionSection />
        <ContactFormSection
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
