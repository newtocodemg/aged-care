import React, { useState } from 'react';
import { Phone, MapPin, ArrowUp, ExternalLink, Heart } from 'lucide-react';
import { LegalModal, LegalModalTab } from './LegalModal';

export const Footer: React.FC = () => {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<LegalModalTab>('privacy');

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLegal = (tab: LegalModalTab, e: React.MouseEvent) => {
    e.preventDefault();
    setLegalTab(tab);
    setLegalModalOpen(true);
  };

  return (
    <>
      <footer className="bg-[#073B70] text-white border-t border-white/10 selection:bg-[#079B70] selection:text-white">
        {/* Main Footer Columns */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            
            {/* COLUMN 1: Logo & Short Brand Description */}
            <div className="space-y-5">
              <div className="flex items-center">
                <a 
                  href="#" 
                  onClick={scrollToTop}
                  className="inline-block transition-transform duration-200 hover:scale-[1.02] focus:outline-hidden focus:ring-2 focus:ring-[#079B70] rounded-xl"
                  aria-label="Southern Agedcare Homepage"
                >
                  <img
                    src="/assets/aistudio/Southern_Agedcare_Support_Emblem_77aaec09.png"
                    alt="Southern Agedcare"
                    className="h-16 sm:h-20 w-auto object-contain bg-white rounded-2xl p-1.5 shadow-md"
                  />
                </a>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed max-w-sm">
                Southern Agedcare provides compassionate, person-centred care designed around individuality, dignity and respect for older adults and families in Central Australia.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-emerald-300 font-medium tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#079B70]"></span>
                <span>Compassionate Care · Supporting Better Living</span>
              </div>
            </div>

            {/* COLUMN 2: Quick Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold tracking-wider uppercase text-white pb-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-xs bg-[#079B70]"></span>
                <span>Quick Links</span>
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-200 font-medium">
                <li>
                  <a
                    href="#"
                    onClick={scrollToTop}
                    className="inline-flex items-center py-1 hover:text-[#079B70] hover:translate-x-1 transition-all duration-150 focus:outline-hidden focus:text-[#079B70]"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="inline-flex items-center py-1 hover:text-[#079B70] hover:translate-x-1 transition-all duration-150 focus:outline-hidden focus:text-[#079B70]"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="inline-flex items-center py-1 hover:text-[#079B70] hover:translate-x-1 transition-all duration-150 focus:outline-hidden focus:text-[#079B70]"
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="#why-choose"
                    className="inline-flex items-center py-1 hover:text-[#079B70] hover:translate-x-1 transition-all duration-150 focus:outline-hidden focus:text-[#079B70]"
                  >
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="inline-flex items-center py-1 hover:text-[#079B70] hover:translate-x-1 transition-all duration-150 focus:outline-hidden focus:text-[#079B70]"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="inline-flex items-center py-1 hover:text-[#079B70] hover:translate-x-1 transition-all duration-150 focus:outline-hidden focus:text-[#079B70]"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* COLUMN 3: Contact Information */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold tracking-wider uppercase text-white pb-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-xs bg-[#079B70]"></span>
                <span>Contact Information</span>
              </h3>
              
              <div className="space-y-3.5 text-sm text-slate-200">
                {/* Physical Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5 text-[#079B70]">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-0.5">Address</span>
                    <a
                      href="https://maps.google.com/?q=17/92+Barrett+Drive,+Desert+Springs,+Northern+Territory+0870,+Australia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-300 transition-colors inline-block leading-relaxed"
                    >
                      17/92 Barrett Drive, Desert Springs, Northern Territory 0870, Australia.
                    </a>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5 text-[#079B70]">
                    <Phone className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-0.5">Phone</span>
                    <a
                      href="tel:+61423644313"
                      className="text-base font-semibold text-white hover:text-emerald-300 transition-colors inline-block tracking-wide"
                    >
                      +61 423 644 313
                    </a>
                    <span className="block text-xs text-slate-300 mt-0.5">Direct phone line & enquiries</span>
                  </div>
                </div>

                {/* Service Availability Note */}
                <div className="pt-2">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 leading-relaxed">
                    <span className="font-semibold text-white">Community Inquiries:</span> We welcome individuals and family members seeking supportive aged-care advice in Desert Springs.
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Australian Acknowledgment of Country */}
          <div className="mt-12 pt-8 border-t border-white/10 text-xs text-slate-300 leading-relaxed">
            <p className="font-semibold text-white mb-1">Acknowledgment of Country</p>
            <p className="max-w-4xl text-slate-300">
              Southern Agedcare respectfully acknowledges the Traditional Custodians of the lands across Central Australia on which we operate and deliver care, including the Arrernte people of Desert Springs and Alice Springs. We pay our respect to Elders past and present.
            </p>
          </div>

          {/* BOTTOM: Copyright & Legal Links */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
            <p className="order-2 sm:order-1 text-center sm:text-left">
              Copyright © 2026 Southern Agedcare. All rights reserved.
            </p>

            <div className="order-1 sm:order-2 flex flex-wrap items-center justify-center gap-6">
              <button
                onClick={(e) => handleOpenLegal('privacy', e)}
                className="hover:text-emerald-300 transition-colors cursor-pointer underline-offset-4 hover:underline focus:outline-hidden focus:text-emerald-300"
              >
                Privacy Policy
              </button>
              <span className="text-white/20 select-none">•</span>
              <button
                onClick={(e) => handleOpenLegal('terms', e)}
                className="hover:text-emerald-300 transition-colors cursor-pointer underline-offset-4 hover:underline focus:outline-hidden focus:text-emerald-300"
              >
                Terms & Conditions
              </button>
              <span className="text-white/20 select-none">•</span>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 hover:text-emerald-300 transition-colors cursor-pointer"
                aria-label="Back to top of page"
              >
                <ArrowUp className="w-3.5 h-3.5 text-[#079B70]" />
                <span>Top</span>
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Accessible Interactive Legal Dialog for Privacy Policy and Terms & Conditions */}
      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        initialTab={legalTab}
      />
    </>
  );
};
