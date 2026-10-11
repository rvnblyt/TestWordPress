import React, { useState } from 'react';
import { Globe, ArrowRight, RefreshCw, CheckCircle, AlertCircle, Code, Layers, ExternalLink } from 'lucide-react';
import { WPPost } from '../types/wordpress';

interface RestApiExplorerProps {
  onLoadExternalPosts: (posts: WPPost[], sourceName: string) => void;
}

export const RestApiExplorer: React.FC<RestApiExplorerProps> = ({ onLoadExternalPosts }) => {
  const [apiUrl, setApiUrl] = useState('https://wordpress.org/news/wp-json/wp/v2/posts?per_page=6&_embed=true');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rawJson, setRawJson] = useState<any[] | null>(null);
  const [importedCount, setImportedCount] = useState<number | null>(null);

  const presets = [
    {
      name: 'WordPress.org News',
      url: 'https://wordpress.org/news/wp-json/wp/v2/posts?per_page=6&_embed=true'
    },
    {
      name: 'TechCrunch',
      url: 'https://techcrunch.com/wp-json/wp/v2/posts?per_page=6'
    },
    {
      name: 'Decanter Wine Journal',
      url: 'https://www.decanter.com/wp-json/wp/v2/posts?per_page=6'
    }
  ];

  const fetchPosts = async (targetUrl = apiUrl) => {
    setLoading(true);
    setError(null);
    setRawJson(null);
    setImportedCount(null);

    try {
      const response = await fetch(targetUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      if (!Array.isArray(data)) {
        throw new Error('Endpoint returned non-array JSON. Ensure the endpoint points to a WP posts endpoint (/wp-json/wp/v2/posts).');
      }

      setRawJson(data);

      // Transform into our WPPost format
      const parsedPosts: WPPost[] = data.map((item: any, index: number) => {
        let mediaUrl = 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80';
        
        // Extract embedded media if available
        if (item._embedded && item._embedded['wp:featuredmedia'] && item._embedded['wp:featuredmedia'][0]) {
          mediaUrl = item._embedded['wp:featuredmedia'][0].source_url || mediaUrl;
        } else if (item.jetpack_featured_media_url) {
          mediaUrl = item.jetpack_featured_media_url;
        }

        return {
          id: item.id || 5000 + index,
          slug: item.slug || `post-${index}`,
          title: { rendered: item.title?.rendered || 'Untitled Post' },
          excerpt: { rendered: item.excerpt?.rendered || '' },
          content: { rendered: item.content?.rendered || '' },
          date: item.date || new Date().toISOString(),
          author_name: item._embedded?.author?.[0]?.name || 'WordPress Contributor',
          category: 'Live WP API',
          reading_time: '5 min read',
          featured_media_url: mediaUrl,
          tags: ['WordPress REST API', 'Live Data']
        };
      });

      setImportedCount(parsedPosts.length);
      onLoadExternalPosts(parsedPosts, targetUrl);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to fetch from WordPress REST API. CORS or network restrictions might apply.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-6">
        <div className="flex items-center space-x-2 text-amber-700 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
          <Globe className="w-3.5 h-3.5" />
          <span>Headless WordPress Connector</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-heading font-bold text-stone-900 dark:text-white">
          WordPress REST API Explorer
        </h1>
        <p className="text-sm font-velour text-stone-600 dark:text-stone-400 mt-1 max-w-2xl">
          Connect this theme live to any headless WordPress instance or public REST API endpoint. Posts fetched will instantly inherit the Acherus Feral & Velour typographic styles!
        </p>
      </div>

      {/* Connection Card */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-6 shadow-xs space-y-5">
        <div>
          <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-2">
            Preset Public WordPress Endpoints
          </label>
          <div className="flex flex-wrap gap-2">
            {presets.map((p) => (
              <button
                key={p.name}
                onClick={() => {
                  setApiUrl(p.url);
                  fetchPosts(p.url);
                }}
                className={`px-3 py-1.5 text-xs rounded-lg border transition-all ${
                  apiUrl === p.url
                    ? 'border-amber-600 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 font-medium'
                    : 'border-stone-200 dark:border-stone-700 hover:border-stone-400 text-stone-700 dark:text-stone-300'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
            Target WordPress Endpoint URL
          </label>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={apiUrl}
              onChange={(e) => setApiUrl(e.target.value)}
              placeholder="https://your-wordpress-site.com/wp-json/wp/v2/posts"
              className="flex-1 px-3 py-2 text-xs font-mono border border-stone-200 dark:border-stone-700 rounded-lg bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
            <button
              onClick={() => fetchPosts()}
              disabled={loading || !apiUrl.trim()}
              className="px-5 py-2 bg-[#2271b1] hover:bg-[#135e96] disabled:opacity-50 text-white rounded-lg text-xs font-medium flex items-center justify-center space-x-2 transition-all shadow-xs shrink-0"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Querying WP API...</span>
                </>
              ) : (
                <>
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Fetch & Render</span>
                </>
              )}
            </button>
          </div>
          <span className="text-[11px] text-stone-500 dark:text-stone-400 mt-1.5 block">
            Note: The target WordPress site must allow cross-origin requests (CORS enabled by default on standard WP REST APIs).
          </span>
        </div>

        {/* Status Alerts */}
        {error && (
          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-xs flex items-start space-x-2.5">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold block mb-0.5">API Request Error</strong>
              <span>{error}</span>
            </div>
          </div>
        )}

        {importedCount !== null && (
          <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>
                Successfully fetched <strong>{importedCount} articles</strong> from WordPress! Rendered live in Acherus Feral & Velour.
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Raw JSON Inspector */}
      {rawJson && (
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs font-semibold text-stone-800 dark:text-stone-200">
              <Code className="w-4 h-4 text-amber-600" />
              <span>WP REST API Response Payload ({rawJson.length} items)</span>
            </div>
            <span className="text-[11px] font-mono text-stone-500">JSON (200 OK)</span>
          </div>

          <pre className="max-h-96 overflow-y-auto p-4 rounded-lg bg-stone-950 text-emerald-300 font-mono text-[11px] leading-relaxed">
            {JSON.stringify(rawJson.slice(0, 2), null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};
