import React from 'react';
import { FileText, Wallet, Calendar } from 'lucide-react';

export const FundingGuide: React.FC = () => {

  const fundingOptions = [
    {
      title: 'Home Care Packages (HCP)',
      subtitle: 'Government-subsidised packages (Levels 1–4)',
      description: 'An Australian Government funded package of care and services for older Australians with more complex needs. Supports coordinated services so you can remain safely living at home.',
      levels: [
        { label: 'Level 1', desc: 'Basic care needs (companionship, light domestic chores)' },
        { label: 'Level 2', desc: 'Low-level care needs (personal care, meals, transport)' },
        { label: 'Level 3', desc: 'Intermediate care needs (nursing support, allied health, frequent visits)' },
        { label: 'Level 4', desc: 'High-level care needs (complex nursing, daily personal care, dementia support)' },
      ],
      icon: FileText
    },
    {
      title: 'Privately Funded Care',
      subtitle: 'Immediate access with zero assessment delays',
      description: 'Choose to pay privately for top-up hours or complete care schedules. There is no waiting list, no government income testing delays, and total flexibility to adjust hours as you wish.',
      levels: [
        { label: 'No Assessment Required', desc: 'Start service within days' },
        { label: 'Top-Up Packages', desc: 'Supplement an existing HCP with extra visits' },
        { label: 'Short-Term Relief', desc: 'Ideal for post-hospital discharge or temporary family holidays' }
      ],
      icon: Wallet
    },
    {
      title: 'Carer Support & Respite Subsidies',
      subtitle: 'Practical relief for dedicated primary carers',
      description: 'Support designed to give dedicated family members and friends regular respite from caring duties, preventing fatigue and preserving household stability.',
      levels: [
        { label: 'Planned Daytime Respite', desc: 'Regular scheduled morning or afternoon visits' },
        { label: 'Emergency Respite', desc: 'Cover during unexpected illness or family emergency' },
        { label: 'Overnight Companionship', desc: 'Reassurance and safety supervision through the night' }
      ],
      icon: Calendar
    }
  ];

  return (
    <section id="funding" className="py-16 lg:py-24 bg-white border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#079B70]">
            Navigating Aged Care Funding
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#073B70] mt-2 tracking-tight">
            Clear, Transparent Funding Pathways Explained
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Navigating aged care funding can feel daunting. We assist families in understanding their options, whether using an allocated Home Care Package, paying privately, or seeking respite support.
          </p>
        </div>

        {/* Funding Stream Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {fundingOptions.map((opt, i) => {
            const Icon = opt.icon;
            return (
              <div
                key={i}
                className="bg-[#F3F5F7] rounded-2xl border border-slate-200 p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-sm transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#079B70] flex items-center justify-center mb-4 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#073B70]">{opt.title}</h3>
                  <p className="text-xs font-semibold text-[#079B70] mt-0.5">{opt.subtitle}</p>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {opt.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-slate-200/90 space-y-2.5">
                    {opt.levels.map((lvl, lIdx) => (
                      <div key={lIdx} className="text-xs">
                        <strong className="text-slate-800">{lvl.label}:</strong>{' '}
                        <span className="text-slate-600">{lvl.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/90">
                  <a
                    href="#contact"
                    className="text-xs font-bold text-[#073B70] hover:text-[#05294F] hover:underline"
                  >
                    Discuss this option with our coordinator →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Funding Consultation Callout */}
        <div className="mt-12 p-6 sm:p-7 bg-[#EAF7F2] rounded-2xl border border-[#079B70]/25 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <h4 className="text-base font-bold text-[#073B70]">
              Unsure which funding model applies to you?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              We help Central Australian seniors navigate My Aged Care assessments and package transfers smoothly.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-[#073B70] hover:bg-[#05294F] text-white text-xs font-semibold rounded-xl transition-colors whitespace-nowrap shrink-0 shadow-xs"
          >
            Speak with a Funding Specialist
          </a>
        </div>
      </div>
    </section>
  );
};
