import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PhilosophySection from '@/components/PhilosophySection';
import ServicesSection from '@/components/ServicesSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import AlgorithmSection from '@/components/AlgorithmSection';
import MandateForm from '@/components/MandateForm';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <PhilosophySection />
        <ServicesSection />
        <CapabilitiesSection />
        <AlgorithmSection />
        <MandateForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
