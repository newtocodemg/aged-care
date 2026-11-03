import React, { useState } from 'react';
import { 
  ChevronDown, 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  MapPin, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface FAQItemData {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface FAQSectionProps {
  onOpenConsultation: () => void;
}

/**
 * ============================================================================
 * EDITABLE FREQUENTLY ASKED QUESTIONS
 * ----------------------------------------------------------------------------
 * Replace or refine the placeholder text below as Southern Agedcare confirms
 * specific service policies, operating guidelines, or organization details.
 * ============================================================================
 */
const FAQ_ITEMS: FAQItemData[] = [
  {
    id: 'faq-1',
    category: 'About Us',
    question: 'What is Southern Agedcare?',
    answer: 'Southern Agedcare is an Australian aged-care organisation dedicated to providing compassionate, person-centred support for older adults and their families. Our guiding philosophy is that care begins with understanding—focusing on dignity, personal autonomy, and tailored in-home living assistance.'
  },
  {
    id: 'faq-2',
    category: 'Services & Enquiries',
    question: 'How can I enquire about available services?',
    answer: 'Enquiring is simple and pressure-free. You can call our Desert Springs coordination team directly on +61 423 644 313 or submit our online Care Consultation form. We will arrange a friendly chat to understand your circumstances and explain suitable support options with zero obligation.'
  },
  {
    id: 'faq-3',
    category: 'Communication',
    question: 'How can families get in touch?',
    answer: 'Families can reach us by phone at +61 423 644 313 (Monday to Friday, 8:00 AM – 5:00 PM ACST), submit an enquiry online 24/7, or request a meeting at our office. We believe family involvement is essential and maintain transparent, regular communication with nominated representatives.'
  },
  {
    id: 'faq-4',
    category: 'Care Planning',
    question: 'How do I discuss individual care requirements?',
    answer: 'We begin with an attentive listening consultation—either over the phone or in person at your home. We explore daily schedules, personal routines, mobility or clinical needs, and specific preferences to collaboratively shape a care plan designed around you.'
  },
  {
    id: 'faq-5',
    category: 'Location',
    question: 'Where is Southern Agedcare located?',
    answer: 'Our coordination office is located at 17/92 Barrett Drive, Desert Springs, Northern Territory 0870, Australia. We provide dedicated aged-care services across Desert Springs and surrounding Central Australian communities.'
  }
];

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenConsultation }) => {
  // Allow opening one FAQ at a time, or toggling
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white border-b border-slate-200 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-6 h-0.5 bg-[#079B70] rounded-full" aria-hidden="true" />
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#079B70]">
              CLEAR ANSWERS
            </p>
            <span className="w-6 h-0.5 bg-[#079B70] rounded-full" aria-hidden="true" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#073B70] tracking-tight text-balance">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Find answers to common questions about our aged-care approach, how to enquire, and our local presence in Desert Springs.
          </p>
        </div>

        {/* Modern Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;
            const buttonId = `faq-btn-${item.id}`;
            const panelId = `faq-panel-${item.id}`;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#079B70]/60 bg-[#F3F5F7] shadow-sm'
                    : 'border-slate-200/90 bg-white hover:border-slate-300 shadow-2xs'
                }`}
              >
                {/* Accordion Trigger Header */}
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggleAccordion(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079B70]"
                  >
                    <div className="flex items-center gap-3.5 pr-2">
                      <span className="text-xs font-bold text-[#079B70] bg-[#EAF7F2] w-7 h-7 rounded-lg flex items-center justify-center shrink-0">
                        0{index + 1}
                      </span>
                      <span className="text-base sm:text-lg font-bold text-[#073B70]">
                        {item.question}
                      </span>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? 'rotate-180 bg-[#079B70] text-white shadow-2xs'
                          : 'bg-[#F3F5F7] text-slate-500 hover:text-[#073B70]'
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                </h3>

                {/* Animated Accordion Panel */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-200 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-1 text-sm sm:text-base text-slate-700 leading-relaxed border-t border-slate-200/60 mt-1">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 
          ======================================================================
          SECTION CTA: "Still Have Questions? Contact Our Team"
          ======================================================================
        */}
        <div className="mt-14 sm:mt-16 p-6 sm:p-8 bg-[#EAF7F2] rounded-3xl border border-[#079B70]/25 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-[#073B70]">
              Still Have Questions?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md">
              Our local team in Desert Springs is here to assist with any questions about services, funding, or scheduling.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
            <a
              href="tel:+61423644313"
              className="w-full sm:w-auto px-4 py-3 bg-white hover:bg-slate-50 text-[#073B70] font-semibold text-xs sm:text-sm rounded-xl border border-slate-200 transition-colors flex items-center justify-center gap-2 shadow-2xs"
            >
              <Phone className="w-4 h-4 text-[#079B70]" aria-hidden="true" />
              <span>Call +61 423 644 313</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-5 py-3 bg-[#073B70] hover:bg-[#05294F] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#079B70]"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="w-4 h-4 text-[#EAF7F2]" aria-hidden="true" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
