import React from 'react';
import { 
  Heart, 
  ShieldCheck, 
  UserCheck, 
  SlidersHorizontal, 
  MessageCircle, 
  Sparkles,
  Quote,
  CheckCircle2,
  Phone
} from 'lucide-react';

interface WhyChooseProps {
  onOpenConsultation: () => void;
}

export const WhyChooseSection: React.FC<WhyChooseProps> = ({ onOpenConsultation }) => {
  const coreValues = [
    {
      title: 'Person-Centred Approach',
      description: 'Care tailored around your unique daily rhythms, personal interests, and home environment rather than rigid routines.',
      icon: UserCheck,
    },
    {
      title: 'Respect & Dignity',
      description: 'Upholding personal privacy, autonomy, and genuine courtesy in every interaction and every home visit.',
      icon: ShieldCheck,
    },
    {
      title: 'Compassionate Support',
      description: 'Delivered with warmth, patience, and heartfelt empathy from dedicated local carers who listen first.',
      icon: Heart,
    },
    {
      title: 'Focus on Individual Preferences',
      description: 'Honouring your specific habits, dietary needs, cherished hobbies, and cultural values at all times.',
      icon: SlidersHorizontal,
    },
    {
      title: 'Clear Communication',
      description: 'Open, dependable dialogue with you and nominated family members, backed by direct local coordination in Desert Springs.',
      icon: MessageCircle,
    },
    {
      title: 'Respect for Independence',
      description: 'Empowering you to stay in control of your choices, routines, and decisions in the familiar comfort of home.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="why-choose" className="py-16 lg:py-24 bg-white border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-6 h-0.5 bg-[#079B70] rounded-full" aria-hidden="true" />
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#079B70]">
              OUR COMMITMENT
            </p>
            <span className="w-6 h-0.5 bg-[#079B70] rounded-full" aria-hidden="true" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#073B70] tracking-tight text-balance">
            Why Choose Southern Agedcare?
          </h2>

          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            We are dedicated to providing support that is grounded in trust, reliability, and human connection, ensuring you and your family feel supported every step of the way.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* COLUMN 1: High-Quality Photograph & Highlighted Quote Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
              <img
                src="/src/assets/images/why_choose_southern_agedcare_1793436690377.jpg"
                alt="Support worker holding hands reassuringly with an older Australian gentleman in a bright living room"
                className="w-full h-[380px] sm:h-[440px] lg:h-[470px] object-cover"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />

              {/* Gradient scrim */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-[#073B70]/40 via-transparent to-transparent pointer-events-none" 
                aria-hidden="true" 
              />
            </div>

            {/* Highlighted Quote Callout Card */}
            <div className="relative bg-[#EAF7F2] p-6 sm:p-7 rounded-2xl border border-[#079B70]/30 shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#079B70] text-white shrink-0 mt-0.5 shadow-2xs">
                  <Quote className="w-5 h-5 fill-current" aria-hidden="true" />
                </div>
                <div>
                  <blockquote className="text-base sm:text-lg font-bold text-[#073B70] leading-snug tracking-tight">
                    &ldquo;Every individual deserves to feel valued, respected and supported.&rdquo;
                  </blockquote>
                  <p className="mt-2 text-xs font-semibold text-[#057A57] uppercase tracking-wider">
                    — Southern Agedcare Guiding Philosophy
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Six Core Values in a Spacious, Structured Grid */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {coreValues.map((val) => {
                const IconComponent = val.icon;
                return (
                  <div
                    key={val.title}
                    className="p-5 rounded-2xl bg-[#F3F5F7] border border-slate-200/90 hover:border-[#079B70]/40 hover:shadow-xs transition-all duration-150 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/90 text-[#079B70] flex items-center justify-center mb-3.5 shadow-2xs">
                        <IconComponent className="w-5 h-5 text-[#079B70]" aria-hidden="true" />
                      </div>

                      {/* Navy Blue Heading */}
                      <h3 className="text-base font-bold text-[#073B70]">
                        {val.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                        {val.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-[#079B70]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#079B70]" aria-hidden="true" />
                      <span>Consistent standard</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Direct Consultation prompt below values */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="text-xs text-slate-600">
                <strong className="text-[#073B70] block sm:inline font-semibold">Speak directly with our local team:</strong>{' '}
                We are always available to discuss how our values translate into daily support for your family.
              </div>
              <button
                onClick={onOpenConsultation}
                className="px-4 py-2.5 bg-[#073B70] hover:bg-[#05294F] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer self-start sm:self-auto"
              >
                Request Care Discussion
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
