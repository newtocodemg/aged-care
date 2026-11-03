import React from 'react';
import { 
  MapPin, 
  Phone, 
  ExternalLink,
  Navigation,
  ArrowRight
} from 'lucide-react';

interface LocationContactSectionProps {
  initialService?: string;
}

export const LocationContactSection: React.FC<LocationContactSectionProps> = () => {
  const googleMapsSearchUrl = 'https://www.google.com/maps/search/?api=1&query=Unit+17%2F92+Barrett+Drive%2C+Desert+Springs+NT+0870%2C+Australia';
  const googleMapsDirectionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=Unit+17%2F92+Barrett+Drive%2C+Desert+Springs+NT+0870%2C+Australia';
  const googleMapsEmbedUrl = 'https://maps.google.com/maps?q=17%2F92+Barrett+Drive%2C+Desert+Springs+NT+0870%2C+Australia&t=&z=15&ie=UTF8&iwloc=&output=embed';

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-b border-slate-200 scroll-mt-16">
      <div id="location" className="scroll-mt-16" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
          <div className="flex items-center justify-center gap-2 mb-2.5">
            <span className="w-5 h-0.5 bg-[#079B70] rounded-full" aria-hidden="true" />
            <p className="text-xs font-bold uppercase tracking-widest text-[#079B70]">
              FIND US
            </p>
            <span className="w-5 h-0.5 bg-[#079B70] rounded-full" aria-hidden="true" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#073B70] tracking-tight text-balance">
            Visit Our Location
          </h2>

          <p className="mt-3.5 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            We&apos;re located in Desert Springs, Northern Territory. We welcome enquiries from individuals and families.
          </p>
        </div>

        {/* Balanced Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* 
            ====================================================================
            LEFT COLUMN – LOCATION INFORMATION CARD
            ====================================================================
          */}
          <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-2xl p-6 sm:p-8 lg:p-9 flex flex-col justify-between shadow-xs">
            <div>
              {/* Small Location Pin Icon */}
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#EAF7F2] text-[#079B70] mb-4">
                <MapPin className="w-5 h-5 text-[#079B70]" aria-hidden="true" />
              </div>

              {/* Heading */}
              <h3 className="text-2xl sm:text-3xl font-bold text-[#073B70] tracking-tight">
                Southern Agedcare
              </h3>

              {/* Address */}
              <div className="mt-3.5 text-slate-700 font-medium text-base sm:text-lg leading-relaxed">
                <p>Unit 17/92 Barrett Drive,</p>
                <p>Desert Springs, NT 0870,</p>
                <p>Australia.</p>
              </div>

              {/* Subtle Information Panel */}
              <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200/80 text-sm text-slate-700 flex items-center gap-3 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#079B70] shrink-0" aria-hidden="true" />
                <p className="font-medium text-slate-700">
                  Located in Desert Springs, Central Australia.
                </p>
              </div>
            </div>

            {/* Action Buttons: Open in Google Maps & Get Directions */}
            <div className="pt-6 mt-6 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              {/* Green "Open in Google Maps" Button */}
              <a
                href={googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#079B70] hover:bg-[#06835E] text-white font-semibold text-sm transition-colors shadow-xs group"
                aria-label="Open Southern Agedcare in Google Maps"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>

              {/* Second Text Link: "Get Directions" */}
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-semibold text-[#073B70] hover:text-[#079B70] transition-colors group"
                aria-label="Get Directions to Southern Agedcare"
              >
                <span>Get Directions</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* 
            ====================================================================
            RIGHT COLUMN – GOOGLE MAP CONTAINER
            Desktop height: ~400px, 16px rounded corners, subtle border & shadow,
            no excessive whitespace.
            ====================================================================
          */}
          <div className="relative w-full h-[360px] sm:h-[400px] lg:h-[400px] rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs sm:shadow-sm bg-slate-100">
            <iframe
              title="Google Maps Location - Unit 17/92 Barrett Drive, Desert Springs NT 0870"
              src={googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full block"
            />
          </div>

        </div>

        {/* 
          ======================================================================
          VISITING INFORMATION: Slim horizontal strip below the two columns
          ======================================================================
        */}
        <div className="mt-8 lg:mt-10 bg-[#F8FAFC] border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
            
            {/* Location */}
            <div className="flex items-center gap-3.5 pt-1 sm:pt-0">
              <div className="w-10 h-10 rounded-xl bg-[#EAF7F2] text-[#079B70] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#079B70]" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Location
                </p>
                <p className="text-sm sm:text-base font-semibold text-[#073B70] mt-0.5">
                  Desert Springs, NT
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-3.5 pt-3 md:pt-0 md:pl-6">
              <div className="w-10 h-10 rounded-xl bg-[#EAF7F2] text-[#079B70] flex items-center justify-center shrink-0">
                <Navigation className="w-5 h-5 text-[#079B70]" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Address
                </p>
                <p className="text-sm sm:text-base font-semibold text-[#073B70] mt-0.5">
                  17/92 Barrett Drive
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3.5 pt-3 md:pt-0 md:pl-6">
              <div className="w-10 h-10 rounded-xl bg-[#EAF7F2] text-[#079B70] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[#079B70]" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Phone
                </p>
                <a
                  href="tel:+61423644313"
                  className="text-sm sm:text-base font-bold text-[#073B70] hover:text-[#079B70] transition-colors mt-0.5 inline-block"
                  aria-label="Call Southern Agedcare at +61 423 644 313"
                >
                  +61 423 644 313
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
