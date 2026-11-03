/**
 * Form validation utilities for Southern Agedcare
 */

export interface EnquiryFormState {
  fullName: string;
  phone: string;
  email: string;
  suburb: string;
  careFor: 'myself' | 'family-member' | 'client' | '';
  serviceType: string;
  urgency: 'immediate' | 'within-month' | 'planning' | '';
  message: string;
}

export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

export function isValidAustralianPhone(phone: string): boolean {
  if (!phone || typeof phone !== 'string') return false;
  // Allows +61 4XX XXX XXX, 04XX XXX XXX, (08) XXXX XXXX, or general AU 10-digit formats
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  const auMobileRegex = /^(\+?61|0)4\d{8}$/;
  const auLandlineRegex = /^(\+?61|0)[2378]\d{8}$/;
  const generalAuRegex = /^(\+?61|0)\d{9}$/;
  return auMobileRegex.test(cleaned) || auLandlineRegex.test(cleaned) || generalAuRegex.test(cleaned);
}

export function formatAustralianPhoneDisplay(phone: string): string {
  const cleaned = phone.replace(/[^\d+]/g, '');
  if (cleaned.startsWith('+614') && cleaned.length === 12) {
    return `+61 ${cleaned.slice(3, 6)} ${cleaned.slice(6, 9)} ${cleaned.slice(9)}`;
  }
  if (cleaned.startsWith('04') && cleaned.length === 10) {
    return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
  }
  return phone;
}

export function validateEnquiry(form: EnquiryFormState): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!form.fullName || form.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name';
  }

  if (!form.phone || !isValidAustralianPhone(form.phone)) {
    errors.phone = 'Please provide a valid Australian contact number (e.g. 0423 644 313)';
  }

  if (form.email && !isValidEmail(form.email)) {
    errors.email = 'Please provide a valid email address';
  }

  if (!form.careFor) {
    errors.careFor = 'Please select who the care is for';
  }

  if (!form.serviceType) {
    errors.serviceType = 'Please select a primary care service';
  }

  if (!form.message || form.message.trim().length < 5) {
    errors.message = 'Please provide a brief note on how we can assist';
  }

  return errors;
}
