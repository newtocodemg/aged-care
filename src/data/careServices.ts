import { CareService, FAQItem, CareStandardItem } from '../types';

/**
 * ============================================================================
 * EDITABLE SERVICE CARD DEFINITIONS (PLACEHOLDERS)
 * ----------------------------------------------------------------------------
 * IMPORTANT: As requested, the services below are provided as structured,
 * editable placeholders so that Southern Agedcare's official service titles,
 * descriptions, and inclusions can be inserted without assuming unconfirmed offerings.
 *
 * To customize:
 * 1. Update the `title` with the official service name.
 * 2. Update `shortDescription` for the card overview.
 * 3. Update `fullDescription`, `suitedFor`, and `features` for the "Learn More" view.
 * 4. Update or replace `image` and `iconName`.
 * ============================================================================
 */
export const EDITABLE_SERVICES: CareService[] = [
  {
    id: 'placeholder-service-1',
    title: 'Personal Care Support',
    category: 'Home Support',
    shortDescription: 'Assistance with daily personal routines, grooming, bathing, and mobility tailored to individual preferences and lifestyle.',
    fullDescription: 'Compassionate assistance with daily personal routines. Our care workers work at your pace, respecting your privacy, choices, and dignity to help you feel comfortable and confident at home.',
    iconName: 'HeartHandshake',
    image: '/images/service_in_home_support_1793377019253.jpg',
    suitedFor: 'Individuals needing gentle, dignified support with personal grooming, dressing, and daily personal hygiene routines.',
    features: [
      'Personal grooming, showering, and dressing assistance',
      'Assistance with morning routines and evening preparations',
      'Gentle mobility transfers and movement support at home',
      'Respectful, person-centred assistance at your own pace'
    ]
  },
  {
    id: 'placeholder-service-2',
    title: 'In-Home Companionship',
    category: 'Home Support',
    shortDescription: 'Friendly, regular visits, social connection, and assistance with day-to-day living activities in the comfort of home.',
    fullDescription: 'Regular companionship visits that foster meaningful connection and conversation. Whether sharing a cup of tea, enjoying a hobby together, or providing peace-of-mind check-ins, we support positive wellbeing.',
    iconName: 'Users',
    image: '/images/hero_aged_care_australia_1793377017924.jpg',
    suitedFor: 'Seniors living at home who value friendly conversation, shared companionship, and dependable everyday connection.',
    features: [
      'Social companionship, conversation, and shared interests',
      'Assistance with correspondence, reading, and gentle hobbies',
      'Peace-of-mind check-ins and reassurance for family members',
      'Flexible visit durations scheduled around your rhythm'
    ]
  },
  {
    id: 'placeholder-service-3',
    title: 'Respite Care & Carer Relief',
    category: 'Specialised',
    shortDescription: 'Flexible short-term relief for family carers, providing attentive and familiar support for loved ones.',
    fullDescription: 'Caring for a loved one is rewarding, but taking time to recharge is vital. Our respite support gives primary carers dependable peace of mind, knowing their loved one is cared for with patience and warmth.',
    iconName: 'Clock',
    image: '/images/facility_consultation_space_1793377019793.jpg',
    suitedFor: 'Family members and primary carers seeking scheduled hours or overnight relief while maintaining trusted care routines.',
    features: [
      'Scheduled daytime care and companionship in your home',
      'Overnight support for sleep stability and carer reassurance',
      'Weekend and short-term relief tailored to family schedules',
      'Consistent care routines that preserve daily familiarity'
    ]
  },
  {
    id: 'placeholder-service-4',
    title: 'Community & Social Access',
    category: 'Community',
    shortDescription: 'Supported transport and accompaniment for local community outings, shopping, appointments, and social gatherings.',
    fullDescription: 'Remaining connected to the local community is essential for quality of life. We provide accompanied transport to appointments, local shops, scenic walks, and social gatherings.',
    iconName: 'Compass',
    image: '/images/service_community_engagement_1793377019567.jpg',
    suitedFor: 'Older adults who wish to stay active in their neighbourhood, attend appointments safely, and connect with community activities.',
    features: [
      'Safe transport and accompaniment to medical and therapy appointments',
      'Grocery shopping assistance and local errand runs',
      'Visits to community clubs, libraries, and scenic parks',
      'Support with accessing local social events and gatherings'
    ]
  },
  {
    id: 'placeholder-service-5',
    title: 'Nursing & Health Support',
    category: 'Clinical',
    shortDescription: 'Clinical oversight, medication coordination, and wellbeing checks delivered in collaboration with healthcare professionals.',
    fullDescription: 'Professional clinical support delivered in the familiar comfort of your home. We coordinate with your local GP, pharmacists, and health practitioners to support health maintenance and safety.',
    iconName: 'Stethoscope',
    image: '/images/facility_consultation_space_1793377019793.jpg',
    suitedFor: 'Clients managing health conditions who require regular monitoring, medication assistance, or professional clinical visits.',
    features: [
      'Medication reminders, administration, and blister pack support',
      'Wound care assistance and skin integrity monitoring',
      'Vital signs checks and health status coordination',
      'Communication with GPs, pharmacists, and allied health'
    ]
  },
  {
    id: 'placeholder-service-6',
    title: 'Domestic & Home Assistance',
    category: 'Home Support',
    shortDescription: 'Support with light household tasks, laundry, and meal preparation to keep living spaces comfortable and safe.',
    fullDescription: 'A clean, organised, and nourishing home environment supports independence and peace of mind. We assist with preparing wholesome meals, washing and folding laundry, and maintaining tidy living spaces.',
    iconName: 'UtensilsCrossed',
    image: '/images/service_in_home_support_1793377019253.jpg',
    suitedFor: 'Individuals who find household chores or meal prep difficult and wish to keep their home tidy, clean, and comfortable.',
    features: [
      'Fresh, balanced meal preparation according to your tastes',
      'Light housekeeping, dusting, vacuuming, and surface tidying',
      'Washing, hanging, folding laundry, and fresh bed linen changes',
      'Keeping home pathways clear and comfortable'
    ]
  }
];

export const CARE_SERVICES = EDITABLE_SERVICES;

export const CARE_PILLARS: CareStandardItem[] = [
  {
    number: '01',
    title: 'Person-Centred Respect',
    description: 'Every individual has a unique story, cultural background, and personal preference. We listen first and shape care around what matters most to you.'
  },
  {
    number: '02',
    title: 'Choice and Autonomy',
    description: 'You maintain control over your schedule, your routines, and your support workers. We support your choices rather than imposing rigid institutional routines.'
  },
  {
    number: '03',
    title: 'Local Central Australian Presence',
    description: 'Based directly in Desert Springs, Northern Territory, our team understands the unique regional climate, community fabric, and local healthcare landscape.'
  },
  {
    number: '04',
    title: 'Open Communication & Continuity',
    description: 'We believe in dependable, familiar carers who arrive on time, communicate clearly with families, and build trusted, ongoing relationships.'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'getting-started',
    question: 'How do I begin services with Southern Agedcare?',
    answer: 'Getting started is straightforward. You can contact us directly by phone on +61 423 644 313 or submit our online consultation request. We will arrange a friendly, obligation-free chat to understand your needs, discuss funding options, and design a personalised support plan.'
  },
  {
    category: 'funding',
    question: 'Can I use my Home Care Package (HCP) with Southern Agedcare?',
    answer: 'Yes. We support self-managed, plan-managed, and provider-managed Home Care Packages across Levels 1 through 4. If you already have an allocated package, we can assist you with transitioning smoothly without interruption to your care.'
  },
  {
    category: 'funding',
    question: 'Can I pay privately if I don’t have government funding yet?',
    answer: 'Yes. Many clients start with privately funded services while waiting for their My Aged Care assessment or package allocation, ensuring immediate support with zero waiting list delays.'
  },
  {
    category: 'services',
    question: 'Can I choose the days and times of my visits?',
    answer: 'Absolutely. We coordinate visit times that align with your daily rhythm, whether that is an early morning visit for breakfast and dressing, an afternoon outing, or evening assistance.'
  },
  {
    category: 'family',
    question: 'How are family members kept informed about care updates?',
    answer: 'With your consent, our care coordinators provide regular updates to nominated family members, ensuring complete transparency, peace of mind, and timely communication if any care needs evolve.'
  }
];
