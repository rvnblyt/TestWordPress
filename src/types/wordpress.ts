export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  author_name: string;
  author_avatar?: string;
  category: string;
  reading_time: string;
  featured_media_url: string;
  tags: string[];
}

export interface GutenbergBlock {
  id: string;
  type: 'heading' | 'paragraph' | 'quote' | 'image' | 'cover' | 'code';
  content: string;
  attributes?: {
    level?: number;
    caption?: string;
    align?: 'left' | 'center' | 'right';
    fontFamily?: 'acherus' | 'velour';
    bgUrl?: string;
  };
}

export interface ThemeSettings {
  siteTitle: string;
  tagline: string;
  headingFont: 'acherus' | 'system';
  bodyFont: 'velour' | 'system';
  primaryColor: string;
  layoutStyle: 'editorial' | 'grid' | 'minimal';
  darkMode: boolean;
  contentWidth: 'compact' | 'standard' | 'wide';
}
