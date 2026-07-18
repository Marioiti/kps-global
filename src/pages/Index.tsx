import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/PhilosophySection';
import ServicesSection from '@/components/ServicesSection';
import ApproachSection from '@/components/AlgorithmSection';
import SectorsSection from '@/components/CapabilitiesSection';
import GovernanceSection from '@/components/GovernanceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ApproachSection />
        <SectorsSection />
        <GovernanceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
