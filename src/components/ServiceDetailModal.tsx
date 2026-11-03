import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { CareService } from '../types';

interface ServiceDetailModalProps {
  service: CareService | null;
  onClose: () => void;
  onBookService: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && service) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Header with image banner */}
        {service.image && (
          <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-slate-100">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#073B70]/90 via-[#073B70]/40 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#EAF7F2]">
                {service.category}
              </span>
              <h3 id="service-modal-title" className="text-xl sm:text-2xl font-bold text-white mt-1">
                {service.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors cursor-pointer"
              aria-label="Close service details"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        <div className="p-6 sm:p-8 space-y-6">
          {!service.image && (
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <span className="text-xs font-semibold uppercase text-[#079B70]">{service.category}</span>
                <h3 id="service-modal-title" className="text-2xl font-bold text-[#073B70] mt-1">
                  {service.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-600 rounded-full"
                aria-label="Close service details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}

          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Service Overview</h4>
            <p className="mt-2 text-sm sm:text-base text-slate-700 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          <div className="bg-[#F3F5F7] p-4 rounded-xl border border-slate-200">
            <h4 className="text-xs font-semibold text-[#073B70] uppercase tracking-wider">Who this is suited for</h4>
            <p className="mt-1 text-sm text-slate-600">
              {service.suitedFor}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Key Inclusions</h4>
            <ul className="space-y-2.5">
              {service.features.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#079B70] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <a
              href="tel:+61423644313"
              className="w-full sm:w-auto px-4 py-2.5 text-sm font-semibold text-[#073B70] hover:text-[#05294F] flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#079B70]" />
              <span>Call +61 423 644 313</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onBookService(service.title);
              }}
              className="w-full sm:w-auto px-5 py-2.5 bg-[#073B70] hover:bg-[#05294F] text-white text-sm font-medium rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Enquire About This Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
