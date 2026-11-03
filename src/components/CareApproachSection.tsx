import React from 'react';
import { 
  HeartHandshake, 
  SlidersHorizontal, 
  ShieldCheck, 
  RefreshCw, 
  ArrowRight,
  Phone
} from 'lucide-react';

interface CareApproachProps {
  onOpenConsultation?: () => void;
}

export const CareApproachSection: React.FC<CareApproachProps> = ({ onOpenConsultation }) => {
  const steps = [
    {
      number: '01',
      title: 'Listen & Understand',
      description: "Understand the individual's preferences, goals and requirements.",
      icon: HeartHandshake,
      detail: 'We take the time to hear your personal story, daily habits, and what matters most to your wellbeing.',
    },
    {
      number: '02',
      title: 'Personalise',
      description: 'Explore suitable support options based on individual circumstances.',
      icon: SlidersHorizontal,
      detail: 'Together with you and your family, we design a flexible support schedule that fits your lifestyle.',
    },
    {
      number: '03',
      title: 'Support',
      description: 'Provide the agreed support with dignity, respect and compassion.',
      icon: ShieldCheck,
      detail: 'Our dependable, background-checked local carers arrive on time and deliver attentive, gentle care.',
    },
    {
      number: '04',
      title: 'Review & Communicate',
      description: 'Encourage regular communication and review changing needs.',
      icon: RefreshCw,
      detail: 'Care is never static. We maintain open communication and adjust visit times as circumstances evolve.',
    },
  ];

  return (
    <section id="approach" className="py-16 lg:py-24 bg-white border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-6 h-0.5 bg-[#079B70] rounded-full" aria-hidden="true" />
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#079B70]">
              HOW WE WORK
            </p>
            <span className="w-6 h-0.5 bg-[#079B70] rounded-full" aria-hidden="true" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#073B70] tracking-tight text-balance">
            Our Approach to Care
          </h2>

          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            A consistent, thoughtful methodology that places personal dignity, open communication, and your choices at the centre of every decision.
          </p>
        </div>

        {/* 
          ======================================================================
          DESKTOP VIEW: Horizontal Four-Step Process with Thin Connecting Line
          ======================================================================
        */}
        <div className="hidden lg:block relative">
          {/* Thin horizontal connecting line passing through the step circles */}
          <div 
            className="absolute top-7 left-12 right-12 h-0.5 bg-slate-200 -z-0" 
            aria-hidden="true"
          >
            <div className="h-full bg-gradient-to-r from-[#079B70]/30 via-[#079B70] to-[#079B70]/30 w-full" />
          </div>

          <div className="grid grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div key={step.number} className="flex flex-col items-center text-center group">
                  {/* Elegant Numbered Circle */}
                  <div className="relative mb-6">
                    <div className="w-14 h-14 rounded-full bg-white border-2 border-[#079B70] text-[#073B70] shadow-sm flex items-center justify-center group-hover:scale-105 group-hover:bg-[#EAF7F2] transition-all duration-200">
                      <span className="text-base font-bold tracking-tight">
                        {step.number}
                      </span>
                    </div>

                    {/* Small icon badge attached to circle */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#079B70] text-white flex items-center justify-center shadow-xs">
                      <IconComponent className="w-3.5 h-3.5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Step Card Content */}
                  <div className="w-full bg-[#F3F5F7] p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xs hover:border-[#079B70]/40 transition-all flex flex-col justify-between min-h-[220px]">
                    <div>
                      <h3 className="text-lg font-bold text-[#073B70] group-hover:text-[#05294F] transition-colors">
                        {step.title}
                      </h3>
                      <p className="mt-2.5 text-sm font-medium text-slate-700 leading-snug">
                        {step.description}
                      </p>
                    </div>

                    <p className="mt-4 pt-3 border-t border-slate-200/70 text-xs text-slate-500 leading-relaxed text-left">
                      {step.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 
          ======================================================================
          MOBILE & TABLET VIEW: Vertical Timeline with Connecting Lines
          ======================================================================
        */}
        <div className="lg:hidden relative">
          <div className="space-y-8 relative">
            {/* Vertical timeline spine */}
            <div 
              className="absolute top-6 bottom-6 left-6 w-0.5 bg-gradient-to-b from-[#079B70] via-[#079B70]/60 to-slate-200 -z-0" 
              aria-hidden="true" 
            />

            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div key={step.number} className="relative flex items-start gap-5">
                  {/* Numbered Circle on the timeline spine */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-[#079B70] text-[#073B70] shadow-sm flex items-center justify-center">
                      <span className="text-sm font-bold">{step.number}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-[#F3F5F7] p-5 rounded-2xl border border-slate-200 shadow-2xs">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="p-1 rounded bg-[#EAF7F2] text-[#079B70]">
                        <IconComponent className="w-3.5 h-3.5" aria-hidden="true" />
                      </div>
                      <h3 className="text-base font-bold text-[#073B70]">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-sm font-medium text-slate-700 leading-snug">
                      {step.description}
                    </p>

                    <p className="mt-2.5 pt-2 border-t border-slate-200/60 text-xs text-slate-500 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Supporting Callout */}
        <div className="mt-14 sm:mt-16 p-6 sm:p-7 bg-[#EAF7F2] rounded-2xl border border-[#079B70]/25 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <h4 className="text-base font-bold text-[#073B70]">
              Ready to take the first step together?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Start with step 01 today. We are always ready to listen and answer your questions.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            {onOpenConsultation && (
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#073B70] hover:bg-[#05294F] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#079B70]" aria-hidden="true" />
              </button>
            )}
            <a
              href="tel:+61423644313"
              className="p-2.5 bg-white text-[#073B70] border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors shadow-2xs"
              title="Call +61 423 644 313"
              aria-label="Call +61 423 644 313"
            >
              <Phone className="w-4 h-4 text-[#079B70]" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
