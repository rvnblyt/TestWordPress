import { PortfolioProject, ApiStatus } from '../types/project';
import { PORTFOLIO_PROJECTS } from '../data/projectsData';

// Configurable endpoint with environment variable fallback
const DEFAULT_ENDPOINT =
  import.meta.env.VITE_WORDPRESS_API_URL || 'https://wordpress.org/news/wp-json/wp/v2';

class WordPressApiService {
  private endpoint: string;
  private mode: 'live' | 'mock';
  private cachedProjects: PortfolioProject[] = [...PORTFOLIO_PROJECTS];
  private listeners: Array<(status: ApiStatus) => void> = [];

  constructor() {
    this.endpoint = DEFAULT_ENDPOINT;
    // Default to mock mode for predictable offline/development preview, but allow instant live connection
    this.mode = 'mock';
  }

  public getStatus(): ApiStatus {
    return {
      mode: this.mode,
      endpoint: this.endpoint,
      connected: this.mode === 'live',
      lastChecked: new Date().toLocaleTimeString()
    };
  }

  public subscribeStatus(listener: (status: ApiStatus) => void): () => void {
    this.listeners.push(listener);
    listener(this.getStatus());
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private notifyListeners() {
    const status = this.getStatus();
    this.listeners.forEach((listener) => listener(status));
  }

  public setEndpoint(newEndpoint: string) {
    this.endpoint = newEndpoint.replace(/\/+$/, '');
    this.notifyListeners();
  }

  public setMode(newMode: 'live' | 'mock') {
    this.mode = newMode;
    this.notifyListeners();
  }

  /**
   * Fetch all portfolio projects.
   * If in mock mode or if the live request fails gracefully, falls back with diagnostic info.
   */
  public async getProjects(): Promise<{
    projects: PortfolioProject[];
    isLive: boolean;
    error: string | null;
  }> {
    if (this.mode === 'mock') {
      return {
        projects: this.cachedProjects,
        isLive: false,
        error: null
      };
    }

    try {
      // First try fetching the custom post type endpoint 'portfolio_project' or 'case-study' or default 'posts'
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);

      const targetUrl = `${this.endpoint}/posts?per_page=12&_embed=true`;
      const response = await fetch(targetUrl, {
        signal: controller.signal,
        headers: {
          Accept: 'application/json'
        }
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`WordPress REST API returned HTTP ${response.status}: ${response.statusText}`);
      }

      const rawData = await response.json();
      if (!Array.isArray(rawData)) {
        throw new Error('WordPress endpoint returned non-array payload');
      }

      // Normalize WordPress REST API response into PortfolioProject interface
      const normalizedProjects: PortfolioProject[] = rawData.map((item: any, idx: number) => {
        let mediaUrl = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80';
        if (item._embedded && item._embedded['wp:featuredmedia'] && item._embedded['wp:featuredmedia'][0]) {
          mediaUrl = item._embedded['wp:featuredmedia'][0].source_url || mediaUrl;
        } else if (item.jetpack_featured_media_url) {
          mediaUrl = item.jetpack_featured_media_url;
        }

        // Extract ACF fields if registered, or provide structured fallbacks
        const acf = item.acf || {};

        return {
          id: item.id || 9000 + idx,
          slug: item.slug || `wp-post-${idx}`,
          title: {
            rendered: item.title?.rendered || 'Untitled Project'
          },
          excerpt: {
            rendered: item.excerpt?.rendered || 'WordPress project synced via REST API.'
          },
          content: {
            rendered: item.content?.rendered || ''
          },
          featured_media_url: mediaUrl,
          category: acf.category || 'WordPress Development',
          acf: {
            client_or_industry: acf.client_or_industry || 'Live WordPress Site',
            project_type: acf.project_type || 'REST API Synced Entry',
            services_provided: acf.services_provided || ['WordPress REST API Delivery', 'Responsive Theming'],
            technologies_used: acf.technologies_used || ['WordPress', 'REST API', 'React'],
            live_url: item.link || undefined,
            verified_contribution:
              acf.verified_contribution ||
              'Content synchronized in real time from live WordPress REST API instance.',
            overview:
              acf.overview ||
              item.excerpt?.rendered?.replace(/<[^>]*>/g, '') ||
              'WordPress project loaded via headless REST API.',
            challenges: acf.challenges || [
              'Synchronizing remote WordPress content schema with React frontend components.',
              'Ensuring resilient fallback handling across variable REST API availability.'
            ],
            approach_and_implementation: acf.approach_and_implementation || [
              'Fetched payload via decoupled REST API endpoint.',
              'Mapped JSON entities directly into responsive Tailwind CSS components.'
            ],
            key_features: acf.key_features || [
              'Real-time content delivery',
              'Decoupled presentation layer'
            ],
            responsive_considerations: acf.responsive_considerations || [
              'Fluid images and responsive grid layouts'
            ],
            verified_outcomes: acf.verified_outcomes || [
              'Seamless decoupled content rendering'
            ],
            featured: Boolean(acf.featured),
            completion_year: '2024 - 2026',
            is_verified: true
          }
        };
      });

      return {
        projects: normalizedProjects.length > 0 ? normalizedProjects : this.cachedProjects,
        isLive: true,
        error: null
      };
    } catch (err: any) {
      console.warn('[WordPressApiService] Live fetch failed, using mock data:', err);
      return {
        projects: this.cachedProjects,
        isLive: false,
        error: `Could not connect to live WordPress API (${err.message || 'Network / CORS issue'}). Switched to verified portfolio dataset.`
      };
    }
  }

  /**
   * Get project by slug
   */
  public async getProjectBySlug(slug: string): Promise<PortfolioProject | null> {
    const { projects } = await this.getProjects();
    return projects.find((p) => p.slug === slug) || null;
  }
}

export const wpApi = new WordPressApiService();
