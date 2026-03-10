export interface ExampleSite {
  id: string;
  title: string;
  industry: string;
  funnelType: string;
  url: string;
  /** Optional CTA label for the primary button (defaults to “View Live Site”) */
  ctaLabel?: string;
  image: string;
  buildTime: string;
  loadSpeed: string;
  techStack: string[];
  conversionRate: string;
  description: string;
}

export const examples: ExampleSite[] = [
  {
    id: '1',
    title: 'Apex Fitness Studio',
    industry: 'Fitness',
    funnelType: 'Lead Generation',
    url: 'https://fit.hisubhadeep.com',
    image: 'https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg',
    buildTime: '48 hours',
    loadSpeed: '2s',
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    conversionRate: '+67%',
    description: 'High-converting fitness studio landing page with class booking system'
  },
  {
    id: '2',
    title: 'Digital Marketing Pro',
    industry: 'Marketing',
    funnelType: 'Sales Funnel',
    url: 'https://market.hisubhadeep.com',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
    buildTime: '72 hours',
    loadSpeed: '3s',
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    conversionRate: '+89%',
    description: 'Complete sales funnel for digital marketing agency with automated follow-ups'
  },
  {
    id: '3',
    title: 'Green Valley Dental',
    industry: 'Healthcare',
    funnelType: 'Appointment Booking',
    url: 'https://dental.hisubhadeep.com',
    image: 'https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg',
    buildTime: '36 hours',
    loadSpeed: '1.5s',
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    conversionRate: '+54%',
    description: 'Professional dental practice website with online appointment scheduling'
  },
  {
    id: '4',
    title: 'TechStart Solutions',
    industry: 'Technology',
    funnelType: 'SaaS Trial',
    url: 'https://saas.hisubhadeep.com',
    image: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg',
    buildTime: '96 hours',
    loadSpeed: '2s',
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    conversionRate: '+124%',
    description: 'SaaS product landing page with free trial signup and onboarding'
  },
  {
    id: '5',
    title: 'Luxury Real Estate',
    industry: 'Real Estate',
    funnelType: 'Lead Generation',
    url: 'https://realestate.hisubhadeep.com',
    image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg',
    buildTime: '120 hours',
    loadSpeed: '2.4s',
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    conversionRate: '+78%',
    description: 'High-end real estate showcasing premium properties with virtual tours'
  },
  {
    id: '6',
    title: 'Artisan Coffee Co.',
    industry: 'Food & Beverage',
    funnelType: 'E-commerce',
    url: 'https://coffee.hisubhadeep.com',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
    buildTime: '60 hours',
    loadSpeed: '1.5s',
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    conversionRate: '+92%',
    description: 'Coffee shop e-commerce site with subscription service and local delivery'
  }
];

export const industries = ['All', 'Fitness', 'Marketing', 'Healthcare', 'Technology', 'Real Estate', 'Food & Beverage'];
export const funnelTypes = ['All', 'Lead Generation', 'Sales Funnel', 'Appointment Booking', 'SaaS Trial', 'E-commerce'];
