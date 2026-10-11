export interface ProjectACF {
  client_or_industry: string;
  project_type: string;
  services_provided: string[];
  technologies_used: string[];
  live_url?: string;
  verified_contribution: string;
  overview: string;
  challenges: string[];
  approach_and_implementation: string[];
  key_features: string[];
  responsive_considerations: string[];
  verified_outcomes?: string[];
  gallery_images?: string[];
  featured: boolean;
  completion_year: string;
  is_verified: boolean;
  notes_for_review?: string;
}

export interface PortfolioProject {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content?: {
    rendered: string;
  };
  featured_media_url: string;
  category: 'WordPress Development' | 'Elementor & Page Builders' | 'Custom Theme Development' | 'Headless WordPress & React' | 'Website Maintenance' | 'Landing Pages & Integrations';
  acf: ProjectACF;
}

export interface WPPageContent {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

export interface ApiStatus {
  mode: 'live' | 'mock';
  endpoint: string;
  connected: boolean;
  lastChecked?: string;
  error?: string | null;
}
