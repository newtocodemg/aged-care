import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, MapPin } from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement / Contact Bar */}
      <div className="bg-[#073B70] text-white/90 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 lg:gap-x-6 gap-y-1 text-center sm:text-left">
            <span className="flex items-center gap-1.5 text-white/90 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#079B70] shrink-0" aria-hidden="true" />
              <span>17/92 Barrett Drive, Desert Springs, NT 0870</span>
            </span>
            <span className="text-white/40 hidden sm:inline" aria-hidden="true">|</span>
            <span className="text-white/80">
              Personalised In-Home Care & Support Across Central Australia
            </span>
          </div>

          <div className="flex items-center justify-center sm:justify-end shrink-0">
            <a
              href="tel:+61423644313"
              className="flex items-center gap-1.5 font-semibold text-white hover:text-[#EAF7F2] transition-colors py-0.5"
              aria-label="Call Southern Agedcare at +61 423 644 313"
            >
              <Phone className="w-3.5 h-3.5 text-[#079B70] shrink-0" aria-hidden="true" />
              <span>+61 423 644 313</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation - adhering strictly to the 3-zone contract */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 bg-white border-b ${
          isScrolled ? 'shadow-md border-slate-200/90 py-2.5' : 'border-slate-200 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Official Logo */}
            <a
              href="#"
              className="flex items-center shrink-0 focus-visible:ring-2 focus-visible:ring-[#079B70] rounded-lg"
              aria-label="Southern Agedcare Homepage"
            >
              <img
                src="/images/Southern_Agedcare_Support_Emblem_77aaec09.png"
                alt="Southern Agedcare"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </a>

            {/* Zone 2: Navigation Links (Single-line, clean prose) */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
              <a
                href="#services"
                className="hover:text-[#073B70] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
              >
                Care Services
              </a>
              <a
                href="#about"
                className="hover:text-[#073B70] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
              >
                About Us
              </a>
              <a
                href="#why-choose"
                className="hover:text-[#073B70] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
              >
                Why Choose Us
              </a>
              <a
                href="#funding"
                className="hover:text-[#073B70] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
              >
                Funding & Packages
              </a>
              <a
                href="#contact"
                className="hover:text-[#073B70] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
              >
                Contact & Location
              </a>
            </nav>

            {/* Zone 3: Primary Action & Mobile Menu Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:+61423644313"
                className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 text-sm font-semibold text-[#073B70] bg-[#EAF7F2] rounded-xl hover:bg-[#d8f0e6] transition-colors whitespace-nowrap shrink-0"
              >
                <Phone className="w-4 h-4 text-[#079B70]" aria-hidden="true" />
                <span>+61 423 644 313</span>
              </a>

              <button
                onClick={onOpenConsultation}
                className="px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-white bg-[#073B70] hover:bg-[#05294F] rounded-xl shadow-xs transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer min-h-[40px]"
              >
                <span className="hidden sm:inline">Request Consultation</span>
                <span className="sm:hidden">Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 lg:hidden text-slate-700 hover:text-[#073B70] rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#079B70] min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 mt-2.5 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col space-y-1">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 text-sm font-medium text-slate-800 hover:bg-[#EAF7F2] hover:text-[#073B70] rounded-xl transition-colors min-h-[44px] flex items-center"
              >
                Care Services
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 text-sm font-medium text-slate-800 hover:bg-[#EAF7F2] hover:text-[#073B70] rounded-xl transition-colors min-h-[44px] flex items-center"
              >
                About Us
              </a>
              <a
                href="#why-choose"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 text-sm font-medium text-slate-800 hover:bg-[#EAF7F2] hover:text-[#073B70] rounded-xl transition-colors min-h-[44px] flex items-center"
              >
                Why Choose Us
              </a>
              <a
                href="#funding"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 text-sm font-medium text-slate-800 hover:bg-[#EAF7F2] hover:text-[#073B70] rounded-xl transition-colors min-h-[44px] flex items-center"
              >
                Funding & Packages
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 text-sm font-medium text-slate-800 hover:bg-[#EAF7F2] hover:text-[#073B70] rounded-xl transition-colors min-h-[44px] flex items-center"
              >
                Frequently Asked Questions
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 text-sm font-medium text-slate-800 hover:bg-[#EAF7F2] hover:text-[#073B70] rounded-xl transition-colors min-h-[44px] flex items-center"
              >
                Contact & Location
              </a>
            </nav>

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <a
                href="tel:+61423644313"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 text-sm font-semibold text-[#073B70] bg-[#EAF7F2] hover:bg-[#d8f0e6] rounded-xl text-center min-h-[44px] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#079B70]" />
                Call +61 423 644 313
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
