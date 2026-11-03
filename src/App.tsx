/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { CareApproachSection } from './components/CareApproachSection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { FundingGuide } from './components/FundingGuide';
import { FAQSection } from './components/FAQSection';
import { LocationContactSection } from './components/LocationContactSection';
import { ConsultationModal } from './components/ConsultationModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleOpenConsultation = (serviceName?: string) => {
    setSelectedService(serviceName || '');
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F3F5F7] text-slate-800 text-[15px]">
      {/* Header */}
      <Header
        onOpenConsultation={() => handleOpenConsultation()}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenConsultation={() => handleOpenConsultation()} />

        {/* Core Services Section */}
        <ServicesSection
          onSelectServiceForEnquiry={(serviceName) => handleOpenConsultation(serviceName)}
        />

        {/* Our Approach to Care (4-Step Process) */}
        <CareApproachSection
          onOpenConsultation={() => handleOpenConsultation('Care Approach Enquiry')}
        />

        {/* About Section & Guiding Principles */}
        <AboutSection />

        {/* Why Choose Southern Agedcare Section */}
        <WhyChooseSection
          onOpenConsultation={() => handleOpenConsultation('Why Choose Southern Agedcare Enquiry')}
        />

        {/* Funding Guide */}
        <FundingGuide />

        {/* Interactive Frequently Asked Questions */}
        <FAQSection
          onOpenConsultation={() => handleOpenConsultation('FAQ Enquiry')}
        />

        {/* Location & Contact Section */}
        <LocationContactSection initialService={selectedService} />
      </main>

      {/* Global Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        prefilledService={selectedService}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
