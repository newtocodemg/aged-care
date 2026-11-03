import React from 'react';
import { Phone, ArrowRight, Shield, Heart, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative bg-gradient-to-b from-white via-[#F3F5F7] to-[#F3F5F7] pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden border-b border-slate-200">
      {/* Subtle organic green background accent */}
      <div 
        className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#079B70]/5 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-[#EAF7F2] blur-2xl pointer-events-none -z-0" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT SIDE: Eyebrow, Main Heading, Supporting Paragraph, Actions & Trust Element */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Small eyebrow text: SOUTHERN AGEDCARE */}
            <div className="flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#079B70] rounded-full" aria-hidden="true" />
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#079B70]">
                SOUTHERN AGEDCARE
              </p>
            </div>

            {/* Main heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] font-bold tracking-tight text-[#073B70] leading-[1.14] text-balance">
              Compassionate Care. Supporting Better Living.
            </h1>

            {/* Supporting paragraph */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Discover a caring approach that puts people first. Southern Agedcare is committed to supporting individuals and families with dignity, respect and compassion.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-7 py-3.5 bg-[#073B70] hover:bg-[#05294F] text-white font-semibold text-base rounded-xl shadow-sm hover:shadow-md transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#079B70]"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 text-[#EAF7F2]" aria-hidden="true" />
              </button>

              <a
                href="tel:+61423644313"
                className="px-6 py-3.5 bg-white hover:bg-[#EAF7F2]/60 text-[#073B70] border-2 border-[#073B70]/20 hover:border-[#079B70] font-bold text-base rounded-xl transition-all duration-150 flex items-center justify-center gap-2.5 shadow-xs"
                aria-label="Call Southern Agedcare at +61 423 644 313"
              >
                <Phone className="w-4 h-4 text-[#079B70]" aria-hidden="true" />
                <span>Call Us: +61 423 644 313</span>
              </a>
            </div>

            {/* Small trust-oriented text element below the buttons: "Care • Dignity • Respect" */}
            <div className="pt-2">
              <p className="text-xs sm:text-sm font-medium tracking-wide text-slate-500 flex items-center gap-2">
                <span className="text-[#073B70] font-semibold">Care</span>
                <span className="text-[#079B70] font-bold text-base leading-none">•</span>
                <span className="text-[#073B70] font-semibold">Dignity</span>
                <span className="text-[#079B70] font-bold text-base leading-none">•</span>
                <span className="text-[#073B70] font-semibold">Respect</span>
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: Large Premium Photograph with Subtle Decorative Green Elements */}
          <div className="lg:col-span-5 relative">
            {/* Subtle decorative green accents around the image container */}
            <div 
              className="absolute -top-4 -right-4 w-32 h-32 rounded-3xl bg-[#079B70]/15 -z-10 transform rotate-3 hidden sm:block" 
              aria-hidden="true" 
            />
            <div 
              className="absolute -bottom-4 -left-4 w-36 h-36 rounded-3xl bg-[#EAF7F2] border-2 border-[#079B70]/20 -z-10 transform -rotate-2 hidden sm:block" 
              aria-hidden="true" 
            />

            {/* Main photograph card */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <img
                src="/images/hero_aged_care_australia_1793377017924.jpg"
                alt="Compassionate Australian aged care worker conversing warmly with a senior gentleman in a sunlit home living room"
                className="w-full h-[380px] sm:h-[450px] lg:h-[480px] object-cover"
                decoding="async"
                referrerPolicy="no-referrer"
              />

              {/* Natural lighting vignette scrim */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-[#073B70]/60 via-transparent to-transparent pointer-events-none" 
                aria-hidden="true"
              />

              {/* Subtle decorative green corner highlight badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md py-1.5 px-3.5 rounded-full border border-[#079B70]/30 shadow-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#079B70]" aria-hidden="true" />
                <span className="text-xs font-semibold text-[#073B70]">Desert Springs, NT</span>
              </div>

              {/* Grounded caption strip */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-100 shadow-sm">
                <p className="text-xs font-bold text-[#073B70]">Personalised In-Home Care & Support</p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Supporting independence with trusted Central Australian carers.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
