'use client';

import AdditionalServicesSection from '@/components/AdditionalServicesSection';
import AIChatbotSection from '@/components/AIChatbotSection';
import AnnouncementBar from '@/components/AnnouncementBar';
import ConsultationPopup from '@/components/ConsultationPopup';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import IndustryApplicationsSection from '@/components/IndustryApplicationsSection';
import Navbar from '@/components/Navbar';
import PricingSection from '@/components/PricingSection';
import Sidebar from '@/components/Sidebar';
import SolutionsSection from '@/components/SolutionsSection';
import Testimonials from '@/components/Testimonials';
import TrustBadges from '@/components/TrustBadges';
import WhyUsSection from '@/components/WhyUsSection';
import {
  ConsultationProvider,
  useConsultation,
} from '@/contexts/ConsultationContext';
import { useState } from 'react';

function HomeContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isOpen, title, description, closeConsultation } = useConsultation();

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
      <AIChatbotSection />
      <SolutionsSection />
      <WhyUsSection />
      <IndustryApplicationsSection />
      <Testimonials />
      <PricingSection />
      <AdditionalServicesSection />
      <FAQ />
      <CTASection />
      <Footer />

      {/* Consultation Popup */}
      <ConsultationPopup
        isOpen={isOpen}
        onClose={closeConsultation}
        title={title}
        description={description}
      />
    </>
  );
}

export default function Home() {
  return (
    <ConsultationProvider>
      <HomeContent />
    </ConsultationProvider>
  );
}
