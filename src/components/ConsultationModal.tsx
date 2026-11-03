import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, CheckCircle2, Send, Clock, MapPin } from 'lucide-react';
import { EnquiryFormState, validateEnquiry } from '../utils/validation';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  prefilledService = ''
}) => {
  const [formData, setFormData] = useState<EnquiryFormState>({
    fullName: '',
    phone: '',
    email: '',
    suburb: 'Desert Springs',
    careFor: 'family-member',
    serviceType: prefilledService || 'personal-care',
    urgency: 'within-month',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState<string>('');
  const [serverError, setServerError] = useState<string | null>(null);

  useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({ ...prev, serviceType: prefilledService }));
    }
  }, [prefilledService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
    if (serverError) setServerError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateEnquiry(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          subject: `Care Consultation: ${formData.serviceType || 'General In-Home Support'}`,
          message: `Consultation request for ${formData.careFor}. Location: ${formData.suburb}. Urgency: ${formData.urgency}. ${formData.message || 'Client requested consultation via website modal.'}`
        })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit enquiry. Please try again.');
      }

      setReferenceNumber(data.referenceNumber || `SA-ENQ-${Date.now().toString().slice(-6)}`);
      setIsSubmitted(true);
    } catch (err: any) {
      setServerError(err.message || 'An unexpected error occurred. Please call us directly on +61 423 644 313.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setErrors({});
    setServerError(null);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Top Header */}
        <div className="bg-[#073B70] text-white p-6 sm:p-7 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-[#EAF7F2]">
              Southern Agedcare
            </span>
            <h3 id="consultation-modal-title" className="text-xl font-bold mt-1">
              Book a Care Consultation
            </h3>
            <p className="text-xs text-white/80 mt-1">
              Obligation-free discussion at home or via phone with our Desert Springs coordinator.
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 bg-[#EAF7F2] text-[#079B70] rounded-full flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-[#073B70]">Consultation Requested</h4>
              
              <div className="inline-block px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700">
                <span className="text-slate-500 font-medium">Reference Code:</span>{' '}
                <strong className="font-mono text-[#073B70] text-sm">{referenceNumber}</strong>
              </div>

              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Your request has been recorded. Our Desert Springs care coordinator will contact you at <strong>{formData.phone}</strong> to confirm your consultation details.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-2.5 bg-[#073B70] hover:bg-[#05294F] text-white text-xs font-semibold rounded-xl cursor-pointer shadow-xs transition-colors"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {serverError && (
                <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-start gap-2">
                  <span className="font-bold shrink-0">Error:</span>
                  <span>{serverError}</span>
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full name"
                    className={`w-full px-3.5 py-2 text-sm rounded-xl border bg-white focus:outline-none focus:ring-2 ${
                      errors.fullName ? 'border-red-400 focus:ring-red-300' : 'border-slate-300 focus:ring-[#079B70]'
                    }`}
                  />
                  {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                    Contact Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 0423 644 313"
                    className={`w-full px-3.5 py-2 text-sm rounded-xl border bg-white focus:outline-none focus:ring-2 ${
                      errors.phone ? 'border-red-400 focus:ring-red-300' : 'border-slate-300 focus:ring-[#079B70]'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@domain.com"
                    className={`w-full px-3.5 py-2 text-sm rounded-xl border bg-white focus:outline-none focus:ring-2 ${
                      errors.email ? 'border-red-400 focus:ring-red-300' : 'border-slate-300 focus:ring-[#079B70]'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="modal-carefor" className="block text-xs font-semibold text-slate-700 mb-1">
                    Care Recipient <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="modal-carefor"
                    name="careFor"
                    value={formData.careFor}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#079B70]"
                  >
                    <option value="family-member">My Mother / Father / Family</option>
                    <option value="myself">Myself</option>
                    <option value="client">Client / Patient Referral</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="modal-service" className="block text-xs font-semibold text-slate-700 mb-1">
                  Primary Service or Care Topic <span className="text-red-500">*</span>
                </label>
                <input
                  id="modal-service"
                  type="text"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  placeholder="e.g. In-Home Support, Respite Care, HCP Transfer"
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#079B70]"
                />
              </div>

              <div>
                <label htmlFor="modal-message" className="block text-xs font-semibold text-slate-700 mb-1">
                  Brief notes or preferred days/times <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us a little about your situation or when you would prefer us to call..."
                  className={`w-full px-3.5 py-2 text-sm rounded-xl border bg-white focus:outline-none focus:ring-2 ${
                    errors.message ? 'border-red-400 focus:ring-red-300' : 'border-slate-300 focus:ring-[#079B70]'
                  }`}
                />
                {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 bg-[#073B70] hover:bg-[#05294F] text-white font-medium text-sm rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-75"
                >
                  <Send className="w-4 h-4 text-[#079B70]" />
                  <span>{isSubmitting ? 'Submitting...' : 'Confirm Consultation Request'}</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <a
                  href="tel:+61423644313"
                  className="inline-flex items-center gap-1.5 text-xs text-[#073B70] font-semibold hover:underline"
                >
                  <Phone className="w-3.5 h-3.5 text-[#079B70]" />
                  <span>Prefer to speak immediately? Call +61 423 644 313</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
