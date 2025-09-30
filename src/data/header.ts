export interface NavigationItem {
  id: string;
  label: string;
  href?: string;
  hasDropdown: boolean;
  megaMenuComponent?: string;
}

export interface MegaMenuItem {
  id: string;
  label: string;
  href: string;
}

export interface MegaMenuColumn {
  id: string;
  items: MegaMenuItem[];
}

export const navigationItems: NavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '#',
    hasDropdown: true,
    megaMenuComponent: 'HomeMegaMenu',
  },
  {
    id: 'pages',
    label: 'Pages',
    href: '#',
    hasDropdown: true,
    megaMenuComponent: 'PageMegaMenu',
  },
  {
    id: 'about',
    label: 'About',
    href: '#',
    hasDropdown: true,
    megaMenuComponent: 'AboutMenu',
  },
  {
    id: 'services',
    label: 'Services',
    href: '#',
    hasDropdown: true,
    megaMenuComponent: 'ServicesMenu',
  },
  {
    id: 'blog',
    label: 'Blog',
    href: '#',
    hasDropdown: true,
    megaMenuComponent: 'BlogMenu',
  },
  {
    id: 'contact',
    label: 'Contact Us',
    href: '/contact-us',
    hasDropdown: false,
  },
];

// About Menu Data
export const aboutMenuItems: MegaMenuItem[] = [
  { id: 'about-1', label: 'About 01', href: '/about-01' },
  { id: 'about-2', label: 'About 02', href: '/about-02' },
  { id: 'about-3', label: 'About 03', href: '/about-03' },
];

// Blog Menu Data
export const blogMenuItems: MegaMenuItem[] = [
  { id: 'blog-1', label: 'Blog 01', href: '/blog-01' },
  { id: 'blog-2', label: 'Blog 02', href: '/blog-02' },
  { id: 'blog-3', label: 'Blog 03', href: '/blog-03' },
  { id: 'blog-details', label: 'Blog Details', href: '/blog/5-strategies-for-effective-brand-storytelling' },
];

// Services Menu Data
export const servicesMenuItems: MegaMenuItem[] = [
  { id: 'services-1', label: 'Services Page 01', href: '/our-services-01' },
  { id: 'services-2', label: 'Services Page 02', href: '/our-services-02' },
  { id: 'services-3', label: 'Services Page 03', href: '/our-services-03' },
  { id: 'services-details', label: 'Services Details', href: '/our-services/business-analysis' },
];

// Home Mega Menu Data (3 columns)
export const homeMegaMenuColumns: MegaMenuColumn[] = [
  {
    id: 'column-1',
    items: [
      { id: 'home-1', label: '01. Crypto Marketing', href: '/' },
      { id: 'home-2', label: '02. AI Software', href: '/homepage-02' },
      { id: 'home-3', label: '03. AI Chatbot', href: '/homepage-03' },
      { id: 'home-4', label: '04. Web Hosting', href: '/homepage-04' },
      { id: 'home-5', label: '05. Analytics & Reporting', href: '/homepage-05' },
      { id: 'home-6', label: '06. Financial Application', href: '/homepage-06' },
      { id: 'home-7', label: '07. Payment Solutions', href: '/homepage-07' },
    ],
  },
  {
    id: 'column-2',
    items: [
      { id: 'home-8', label: '08. Online Banking', href: '/homepage-08' },
      { id: 'home-9', label: '09. Cloud Based Software', href: '/homepage-09' },
      { id: 'home-10', label: '10. Cyber Security', href: './homepage-10' },
      { id: 'home-11', label: '11. Email Marketing', href: '/homepage-11' },
      { id: 'home-12', label: '12. Lead Capture', href: '/homepage-12' },
      { id: 'home-13', label: '13. Messaging Platform', href: '/homepage-13' },
      { id: 'home-14', label: '14. Mortgage Services', href: '/homepage-14' },
    ],
  },
  {
    id: 'column-3',
    items: [
      { id: 'home-15', label: '15. Creative Portfolio', href: '/homepage-15' },
      { id: 'home-16', label: '16. App Builder', href: '/homepage-16' },
      { id: 'home-17', label: '17. App Development', href: '/homepage-17' },
      { id: 'home-18', label: '18. AI Agency', href: '/homepage-18' },
      { id: 'home-19', label: '19. Smart Solutions', href: '/homepage-19' },
      { id: 'home-20', label: '20. Risk Management Software', href: '/homepage-20' },
    ],
  },
];

// Page Mega Menu Data (4 columns)
export const pageMegaMenuColumns: MegaMenuColumn[] = [
  {
    id: 'column-1',
    items: [
      { id: 'tutorial', label: 'Tutorial Page', href: '/tutorial' },
      { id: 'documentation', label: 'Documentation Page', href: '/documentation' },
      { id: 'faq', label: 'FAQ Page', href: '/faq' },
      { id: 'support', label: 'Support', href: '/support' },
      { id: 'career', label: 'Career Page', href: '/career' },
      { id: 'career-details', label: 'Career Details', href: '/career-details' },
      { id: 'changelog', label: 'Changelog Page', href: '/changelog' },
      { id: 'terms', label: 'Terms & Conditions', href: '/terms-conditions' },
      { id: 'privacy', label: 'Privacy Policy', href: '/privacy' },
      { id: 'refund', label: 'Refund Policy', href: '/refund-policy' },
    ],
  },
  {
    id: 'column-2',
    items: [
      { id: 'features-1', label: 'Features Page 01', href: '/features-01' },
      { id: 'features-2', label: 'Features Page 02', href: '/features-02' },
      { id: 'integration-1', label: 'Integration Page 01', href: '/integration-01' },
      { id: 'integration-2', label: 'Integration Page 02', href: '/integration-02' },
      { id: 'integration-3', label: 'Integration Page 03', href: '/integration-03' },
      { id: 'process-1', label: 'Process Page 01', href: '/process-01' },
      { id: 'process-2', label: 'Process Page 02', href: '/process-02' },
      { id: 'analytics', label: 'Analytics Page', href: '/analytics' },
      { id: 'affiliate', label: 'Affiliate Policy', href: '/affiliate-policy' },
      { id: 'gdpr', label: 'GDPR Page', href: '/gdpr' },
    ],
  },
  {
    id: 'column-3',
    items: [
      { id: 'testimonial-1', label: 'Testimonials Page 01', href: '/testimonial-01' },
      { id: 'testimonial-2', label: 'Testimonials Page 02', href: '/testimonial-02' },
      { id: 'case-study', label: 'Case Study Page', href: '/case-study' },
      { id: 'case-study-details', label: 'Case Study Details', href: '/case-study/case-study-5-eduflow' },
      { id: 'team-1', label: 'Our team 01', href: '/our-team-01' },
      { id: 'team-2', label: 'Our team 02', href: '/our-team-02' },
      { id: 'team-details', label: 'Team details', href: '/team/2' },
      { id: 'pricing-1', label: 'Pricing Page 01', href: '/pricing-01' },
      { id: 'pricing-2', label: 'Pricing Page 02', href: '/pricing-02' },
      { id: 'pricing-3', label: 'Pricing Page 03', href: '/pricing-03' },
    ],
  },
  {
    id: 'column-4',
    items: [
      { id: 'login-1', label: 'Login Page 01', href: '/login-01' },
      { id: 'login-2', label: 'Login Page 02', href: '/login-02' },
      { id: 'login-3', label: 'Login Page 03', href: '/login-03' },
      { id: 'login-4', label: 'Login Page 04', href: '/login-04' },
      { id: 'signup-1', label: 'Signup Page 01', href: '/signup-01' },
      { id: 'signup-2', label: 'Signup Page 02', href: '/signup-02' },
      { id: 'signup-3', label: 'Signup Page 03', href: '/signup-03' },
      { id: 'signup-4', label: 'Signup Page 04', href: '/signup-04' },
    ],
  },
];

export const headerConfig = {
  logo: {
    alt: 'NextSaaS',
    mainLogoPath: '../../../../public/images/shared/main-logo.svg',
    logoPath: '../../../../public/images/shared/logo.svg',
    logoDarkPath: '../../../../public/images/shared/logo-dark.svg',
  },
  cta: {
    label: 'Get started',
    href: '/signup-01',
  },
};
