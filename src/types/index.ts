export interface CareService {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  category: 'Home Support' | 'Clinical' | 'Specialised' | 'Community';
  features: string[];
  suitedFor: string;
  image?: string;
}

export interface CareStandardItem {
  number: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'getting-started' | 'funding' | 'services' | 'family';
}
