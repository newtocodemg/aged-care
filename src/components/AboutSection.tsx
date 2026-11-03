import React from 'react';
import { Heart, ShieldCheck, UserCheck, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const values = [
    {
      title: 'Compassion',
      description: 'Treating everyone with kindness and empathy.',
      icon: Heart,
    },
    {
      title: 'Dignity',
      description: 'Respecting personal choices and independence.',
      icon: ShieldCheck,
    },
    {
      title: 'Individuality',
      description: "Recognising that every person's needs are different.",
      icon: UserCheck,
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: High-quality photograph representing compassionate aged care and human connection */}
          <div className="lg:col-span-5 relative">
            {/* Subtle decorative emerald backdrop accent */}
            <div 
              className="absolute -top-3 -left-3 w-32 h-32 rounded-3xl bg-[#EAF7F2] -z-10 hidden sm:block border border-[#079B70]/20" 
              aria-hidden="true" 
            />
            <div 
              className="absolute -bottom-3 -right-3 w-36 h-36 rounded-3xl bg-[#079B70]/10 -z-10 hidden sm:block" 
              aria-hidden="true" 
            />

            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
              <img
                src="/images/service_community_engagement_1793377019567.jpg"
                alt="Compassionate aged care worker and smiling elderly woman walking together in a sunlit garden"
                className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />

              {/* Natural gradient scrim and contextual badge */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-[#073B70]/60 via-transparent to-transparent pointer-events-none" 
                aria-hidden="true"
              />

              {/* Location trust marker */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md py-1.5 px-3 rounded-full border border-slate-200 shadow-xs flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#079B70]" aria-hidden="true" />
                <span className="text-xs font-semibold text-[#073B70]">Desert Springs, NT</span>
              </div>

              {/* Caption pill */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-100 shadow-sm">
                <p className="text-xs font-bold text-[#073B70]">Connection & Genuine Companionship</p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Building meaningful, trusted relationships that enrich everyday life.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Introduction, Philosophy, Individualized Focus & 3 Value Cards */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#079B70] rounded-full" aria-hidden="true" />
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#079B70]">
                ABOUT SOUTHERN AGEDCARE
              </p>
            </div>

            {/* Main Section Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#073B70] tracking-tight leading-[1.2] text-balance">
              Care That Begins With Understanding
            </h2>

            {/* Narrative Body */}
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                At Southern Agedcare, our work is guided by a commitment to putting people first. Based in Desert Springs in the Northern Territory, we provide thoughtful, dependable in-home aged-care services tailored to the everyday lives of older Australians.
              </p>
              <p>
                We believe that quality care starts with genuine listening. By taking the time to understand each person&apos;s unique background, personal routines, and individual preferences, we shape support that upholds their dignity, autonomy, and independence in the comfort of home.
              </p>
              <p>
                Navigating care is a journey shared by the whole family. We work hand-in-hand with family members and individuals alike, offering steady support, open communication, and the reassurance that your loved one is treated with warmth, patience, and unwavering respect.
              </p>
            </div>

            {/* Three Visual Value Cards */}
            <div className="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {values.map((val) => {
                const IconComponent = val.icon;
                return (
                  <div
                    key={val.title}
                    className="p-4 rounded-2xl bg-[#F3F5F7] border border-slate-200/90 hover:border-[#079B70]/40 transition-colors shadow-2xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-white border border-slate-200/80 text-[#079B70] flex items-center justify-center mb-3 shadow-2xs">
                        <IconComponent className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <h3 className="text-sm font-bold text-[#073B70]">
                        {val.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
