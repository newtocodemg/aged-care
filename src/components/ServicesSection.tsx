import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Users, 
  Clock, 
  Compass, 
  Stethoscope, 
  UtensilsCrossed, 
  ArrowRight, 
  Calendar,
  Sparkles
} from 'lucide-react';
import { EDITABLE_SERVICES } from '../data/careServices';
import { CareService } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  onSelectServiceForEnquiry: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForEnquiry }) => {
  const [activeModalService, setActiveModalService] = useState<CareService | null>(null);

  /**
   * Helper to render appropriate icon with emerald green accent
   */
  const renderIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-[#079B70]", 'aria-hidden': true as const };
    switch (iconName) {
      case 'HeartHandshake': return <HeartHandshake {...props} />;
      case 'Users': return <Users {...props} />;
      case 'Clock': return <Clock {...props} />;
      case 'Compass': return <Compass {...props} />;
      case 'Stethoscope': return <Stethoscope {...props} />;
      case 'UtensilsCrossed': return <UtensilsCrossed {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-[#F3F5F7] border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-6 h-0.5 bg-[#079B70] rounded-full" aria-hidden="true" />
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#079B70]">
              OUR SERVICES
            </p>
            <span className="w-6 h-0.5 bg-[#079B70] rounded-full" aria-hidden="true" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#073B70] tracking-tight text-balance">
            Support Designed Around You
          </h2>

          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Every person&apos;s lifestyle and care needs are unique. We offer flexible, respectful support options designed to help you remain independent, comfortable, and connected in your home.
          </p>
        </div>

        {/* 
          ======================================================================
          RESPONSIVE GRID OF SERVICE CARDS
          - 3 cards per row on desktop (lg:grid-cols-3)
          - 2 cards per row on tablet (md:grid-cols-2)
          - 1 card per row on mobile (grid-cols-1)
          - White cards with subtle shadows & hover translation
          - Emerald green icon accents (#079B70)
          - Navy blue headings (#073B70)
          ======================================================================
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {EDITABLE_SERVICES.map((service, index) => {
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between overflow-hidden"
              >
                {/* Optional Photographic Header (Clean & Professional) */}
                {service.image && (
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Emerald Accent Icon Floating Badge */}
                    <div className="absolute top-3.5 right-3.5 p-2.5 rounded-xl bg-white/95 backdrop-blur-md shadow-sm border border-slate-100 text-[#079B70]">
                      {renderIcon(service.iconName)}
                    </div>
                  </div>
                )}

                {/* Card Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {!service.image && (
                      <div className="w-12 h-12 rounded-xl bg-[#EAF7F2] border border-[#079B70]/20 flex items-center justify-center mb-4 text-[#079B70]">
                        {renderIcon(service.iconName)}
                      </div>
                    )}

                    {/* Navy Blue Heading */}
                    <h3 className="text-xl font-bold text-[#073B70] group-hover:text-[#05294F] transition-colors leading-snug">
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Actions & Learn More Link */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setActiveModalService(service)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#073B70] hover:text-[#079B70] transition-colors cursor-pointer"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 text-[#079B70] group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    <button
                      onClick={() => onSelectServiceForEnquiry(service.title)}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#EAF7F2] text-[#057A57] hover:bg-[#d4f0e4] transition-colors cursor-pointer"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 
          ======================================================================
          SECTION CTA: "Enquire About Our Services"
          Prominent, accessible action block inviting the user to speak with the
          Southern Agedcare team in Desert Springs, NT.
          ======================================================================
        */}
        <div className="mt-14 sm:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 p-4 sm:p-5 bg-white rounded-2xl border border-slate-200/90 shadow-sm max-w-2xl mx-auto">
            <div className="text-center sm:text-left">
              <h4 className="text-base font-bold text-[#073B70]">
                Looking for a tailored support plan?
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Our local coordinators are here to discuss your needs with zero obligation.
              </p>
            </div>

            <button
              onClick={() => onSelectServiceForEnquiry('Our Services Enquiry')}
              className="px-6 py-3 bg-[#073B70] hover:bg-[#05294F] text-white font-semibold text-sm rounded-xl shadow-xs transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2 shrink-0 focus-visible:ring-2 focus-visible:ring-[#079B70]"
            >
              <Calendar className="w-4 h-4 text-[#079B70]" aria-hidden="true" />
              <span>Enquire About Our Services</span>
            </button>
          </div>
        </div>

      </div>

      {/* Service Detail Modal for "Learn More" Interaction */}
      <ServiceDetailModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onBookService={onSelectServiceForEnquiry}
      />
    </section>
  );
};
