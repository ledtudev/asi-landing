'use client';

import AdditionalServicesSection from '@/components/AdditionalServicesSection';
import AnnouncementBar from '@/components/AnnouncementBar';
import BookingSection from '@/components/BookingSection';
import ConversionKillers from '@/components/ConversionKillers';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HowItWorksSection from '@/components/HowItWorksSection';
import IndustryApplicationsSection from '@/components/IndustryApplicationsSection';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import SolutionsSection from '@/components/SolutionsSection';
import Testimonials from '@/components/Testimonials';
import TrustBadges from '@/components/TrustBadges';
import WhyUsSection from '@/components/WhyUsSection';

import { useState } from 'react';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const { isOpen, title, description, closeConsultation } = useConsultation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <AnnouncementBar />
      <Navbar onMobileMenuToggle={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <Hero />
      <TrustBadges />
      {/* <AIChatbotSection /> */}
      <SolutionsSection />
      <ConversionKillers />
      <HowItWorksSection />
      <WhyUsSection />
      <IndustryApplicationsSection />
      <Testimonials />
      {/* <PricingSection /> */}
      <AdditionalServicesSection />
      <FAQ />
      <BookingSection />
      <CTASection />
      <Footer />

      {/* Consultation Popup */}
      {/* <ConsultationPopup
        isOpen={isOpen}
        onClose={closeConsultation}
        title={title}
        description={description}
      /> */}
    </>
  );
}
