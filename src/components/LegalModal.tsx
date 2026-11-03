import React, { useState, useEffect } from 'react';
import { X, Shield, FileText, Printer, CheckCircle } from 'lucide-react';

export type LegalModalTab = 'privacy' | 'terms';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: LegalModalTab;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'privacy'
}) => {
  const [activeTab, setActiveTab] = useState<LegalModalTab>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-[#073B70] text-white flex items-center justify-between border-b border-blue-900/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#079B70]">
              {activeTab === 'privacy' ? (
                <Shield className="w-5 h-5 text-emerald-300" />
              ) : (
                <FileText className="w-5 h-5 text-emerald-300" />
              )}
            </div>
            <div>
              <h2 id="legal-modal-title" className="text-xl font-bold font-serif">
                {activeTab === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h2>
              <p className="text-xs text-blue-100">
                Southern Agedcare · Desert Springs, Northern Territory
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              aria-label="Print document"
              className="p-2 rounded-lg text-blue-100 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="Print Policy"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="p-2 rounded-lg text-blue-100 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-3 gap-4">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`pb-3 text-sm font-semibold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'privacy'
                ? 'border-[#079B70] text-[#073B70]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>Privacy Policy</span>
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`pb-3 text-sm font-semibold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'terms'
                ? 'border-[#079B70] text-[#073B70]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Terms & Conditions</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-700 leading-relaxed font-sans">
          {activeTab === 'privacy' ? (
            <div className="space-y-6">
              <div className="bg-[#EAF7F2] p-4 rounded-xl border border-emerald-100 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#079B70] shrink-0 mt-0.5" />
                <p className="text-xs text-slate-800">
                  Southern Agedcare is committed to protecting the privacy, dignity, and personal health information of our clients and their families in accordance with the <strong>Privacy Act 1988 (Cth)</strong> and the <strong>Australian Privacy Principles (APPs)</strong>.
                </p>
              </div>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-[#073B70]">1. Collection of Personal & Health Information</h3>
                <p>
                  To provide safe, person-centred care, Southern Agedcare collects personal information including your full name, contact information, emergency contacts, medical history, care preferences, and funding arrangements. Information is collected directly from you, your authorised representative, or nominated health practitioners with your informed consent.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-[#073B70]">2. Purpose and Use of Information</h3>
                <p>
                  We use your information solely to:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>Assess, plan, and deliver tailored aged-care and support services.</li>
                  <li>Coordinate with relevant medical and allied healthcare professionals.</li>
                  <li>Comply with Commonwealth and Northern Territory aged-care regulatory reporting obligations.</li>
                  <li>Respond to enquiries, feedback, and service requests submitted via our website or direct phone communications.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-[#073B70]">3. Storage and Data Security</h3>
                <p>
                  Southern Agedcare implements physical, technical, and administrative safeguards to protect your personal information against unauthorised access, alteration, loss, or misuse. All electronic records are securely stored and encrypted in Australian-based servers.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-[#073B70]">4. Access and Correction</h3>
                <p>
                  You have the right to request access to the personal information Southern Agedcare holds about you, and to request corrections if you believe the information is inaccurate, out of date, or incomplete.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-[#073B70]">5. Privacy Enquiries & Officer Contact</h3>
                <p>
                  If you have questions regarding this Privacy Policy or wish to make a privacy-related enquiry, please contact our team:
                </p>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs space-y-1">
                  <p><strong>Privacy Officer:</strong> Southern Agedcare</p>
                  <p><strong>Address:</strong> 17/92 Barrett Drive, Desert Springs, NT 0870, Australia</p>
                  <p><strong>Phone:</strong> +61 423 644 313</p>
                </div>
              </section>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-[#EAF7F2] p-4 rounded-xl border border-emerald-100 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#079B70] shrink-0 mt-0.5" />
                <p className="text-xs text-slate-800">
                  These Terms & Conditions outline the operational framework and principles governing engagement with Southern Agedcare services and website resources in Central Australia.
                </p>
              </div>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-[#073B70]">1. Service Provision & Individual Agreements</h3>
                <p>
                  All care and support services provided by Southern Agedcare are delivered subject to a formal, individualised Care Agreement developed collaboratively with the care recipient or their legally appointed decision-maker. Services are structured to uphold autonomy, choice, and dignity.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-[#073B70]">2. Website Information & Non-Medical Advice</h3>
                <p>
                  The informational materials on this website are provided for general guidance and educational purposes regarding aged-care options. They do not constitute formal medical diagnosis or replace consultation with licensed medical practitioners.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-[#073B70]">3. Care Plans, Reviews & Adjustments</h3>
                <p>
                  Care needs naturally evolve. Support schedules and service plans are reviewed routinely and can be adjusted by mutual agreement to ensure ongoing alignment with personal goals, comfort, and safety.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-[#073B70]">4. Respectful Workplace & Safe Environment</h3>
                <p>
                  Southern Agedcare is committed to providing a safe, respectful, and violence-free environment for both our clients and care staff. Mutual respect and clear communication form the cornerstone of every care partnership.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-[#073B70]">5. Feedback, Concerns & External Advocacy</h3>
                <p>
                  We welcome feedback and view comments as opportunities to improve. Clients and families can raise concerns directly with our management at +61 423 644 313. Independent advocacy is also available through the Older Persons Advocacy Network (OPAN) and the Aged Care Quality and Safety Commission.
                </p>
              </section>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <p className="text-xs text-slate-500">
            Last updated: 2026 · Southern Agedcare
          </p>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#073B70] text-white text-xs font-semibold hover:bg-[#05294F] transition-colors cursor-pointer shadow-xs"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
