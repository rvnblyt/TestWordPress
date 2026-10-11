import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { 
  Database, 
  Code, 
  Cpu, 
  Globe, 
  Copy, 
  Check, 
  RefreshCw, 
  AlertCircle, 
  CheckCircle,
  ExternalLink,
  Layers,
  ArrowRight
} from 'lucide-react';
import { wpApi } from '../services/wordpressApi';

export const HeadlessArchitecture: React.FC = () => {
  const [testUrl, setTestUrl] = useState(
    'https://wordpress.org/news/wp-json/wp/v2/posts?per_page=3&_embed=true'
  );
  const [loading, setLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copiedPhp, setCopiedPhp] = useState(false);
  const [responseTime, setResponseTime] = useState<number | null>(null);

  const phpSnippet = `<?php
/**
 * Plugin / functions.php snippet to register Headless Portfolio Custom Post Type
 * and expose Advanced Custom Fields (ACF) to the WordPress REST API.
 */

add_action('init', function () {
    $labels = [
        'name'               => 'Portfolio Projects',
        'singular_name'      => 'Portfolio Project',
        'menu_name'          => 'Portfolio',
        'add_new'            => 'Add Project',
        'add_new_item'       => 'Add New Portfolio Project',
        'edit_item'          => 'Edit Portfolio Project',
        'all_items'          => 'All Projects',
    ];

    $args = [
        'labels'             => $labels,
        'public'             => true,
        'has_archive'        => true,
        'rewrite'            => ['slug' => 'projects'],
        'show_in_rest'       => true, // CRITICAL: Exposes post type to /wp-json/wp/v2/portfolio_project
        'rest_base'          => 'portfolio_project',
        'rest_controller_class' => 'WP_REST_Posts_Controller',
        'supports'           => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'],
        'menu_icon'          => 'dashicons-portfolio',
    ];

    register_post_type('portfolio_project', $args);
});

// Ensure ACF Pro fields are exposed in REST API responses
add_filter('acf/rest_api/portfolio_project/auto_enqueue', '__return_true');
`;

  const handleCopyPhp = () => {
    navigator.clipboard.writeText(phpSnippet);
    setCopiedPhp(true);
    setTimeout(() => setCopiedPhp(false), 2000);
  };

  const handleTestEndpoint = async (url = testUrl) => {
    setLoading(true);
    setError(null);
    setApiResponse(null);
    setResponseTime(null);

    const startTime = performance.now();
    try {
      const res = await fetch(url);
      const endTime = performance.now();
      setResponseTime(Math.round(endTime - startTime));

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }

      const json = await res.json();
      setApiResponse(json);
    } catch (err: any) {
      setError(
        err.message ||
          'Failed to connect to WordPress REST API. Target server must allow CORS headers.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">
      
      {/* Header */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-10 max-w-3xl space-y-4">
        <SectionHeading
          eyebrow="Decoupled Engineering"
          title="Headless WordPress + React Architecture."
          description="How this portfolio decouples content authoring in WordPress from high-performance presentation in React, Vite, and Tailwind CSS."
        />
      </div>

      {/* Architecture Breakdown Diagram Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Backend Card */}
        <div className="p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-4 shadow-xs">
          <div className="flex items-center space-x-2 text-xs font-mono text-amber-700 dark:text-amber-400 font-semibold uppercase">
            <Database className="w-4 h-4" />
            <span>Layer 1: Headless CMS (WordPress)</span>
          </div>

          <h3 className="text-xl font-heading font-bold text-stone-900 dark:text-white">
            Content Authoring & Data Store
          </h3>

          <p className="font-velour text-stone-600 dark:text-stone-300 text-sm leading-relaxed">
            WordPress handles what it does best: intuitive content editing, rich media uploads, user permissions, and structured metadata schemas via Advanced Custom Fields (ACF).
          </p>

          <ul className="space-y-2 text-xs text-stone-700 dark:text-stone-300 pt-2 border-t border-stone-100 dark:border-stone-800">
            <li className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
              <span>Custom Post Type: <code>portfolio_project</code></span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
              <span>ACF Pro Field Group: Project Overview, Challenges, Tech Stack</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
              <span>REST API Endpoint: <code>/wp-json/wp/v2/portfolio_project</code></span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
              <span>Read-only public delivery without exposing WP admin credentials</span>
            </li>
          </ul>
        </div>

        {/* Frontend Card */}
        <div className="p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-4 shadow-xs">
          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold uppercase">
            <Cpu className="w-4 h-4" />
            <span>Layer 2: Frontend SPA (React + Vite)</span>
          </div>

          <h3 className="text-xl font-heading font-bold text-stone-900 dark:text-white">
            Interactive Presentation Layer
          </h3>

          <p className="font-velour text-stone-600 dark:text-stone-300 text-sm leading-relaxed">
            The React application runs independently from the WordPress PHP theme layer, delivering instantaneous client-side navigation, responsive components, and custom typography.
          </p>

          <ul className="space-y-2 text-xs text-stone-700 dark:text-stone-300 pt-2 border-t border-stone-100 dark:border-stone-800">
            <li className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>React 19 SPA bundled with Vite for sub-second hot reloading</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>Client-side routing via React Router with zero page flashes</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>Tailwind CSS design system with custom typography (Acherus Feral & Velour)</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>Resilient data adapter with live/mock fallback handling</span>
            </li>
          </ul>
        </div>

      </div>

      {/* WordPress Backend PHP Configuration */}
      <section className="bg-stone-900 text-white rounded-2xl p-6 sm:p-8 border border-stone-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-4">
          <div>
            <h3 className="text-lg font-heading font-bold text-white">
              WordPress CPT & REST API Registration Snippet
            </h3>
            <p className="text-xs text-stone-400 font-velour">
              Add this snippet to your WordPress child theme's <code>functions.php</code> or a custom site plugin to mirror this portfolio schema.
            </p>
          </div>

          <button
            onClick={handleCopyPhp}
            className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg text-xs font-mono flex items-center space-x-1.5 self-start sm:self-auto transition-colors"
          >
            {copiedPhp ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy PHP Code</span>
              </>
            )}
          </button>
        </div>

        <pre className="text-xs font-mono bg-stone-950 p-4 rounded-xl overflow-x-auto text-amber-200/90 leading-relaxed max-h-96">
          {phpSnippet}
        </pre>
      </section>

      {/* Live REST API Explorer */}
      <section className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="space-y-1">
          <h3 className="text-xl font-heading font-bold text-stone-900 dark:text-white">
            Live WordPress REST API Explorer
          </h3>
          <p className="text-xs font-velour text-stone-600 dark:text-stone-400">
            Test live query requests against real WordPress REST endpoints directly from this browser instance.
          </p>
        </div>

        {/* Quick Presets */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-stone-400 font-mono text-[11px]">Presets:</span>
          {[
            {
              name: 'WordPress.org News',
              url: 'https://wordpress.org/news/wp-json/wp/v2/posts?per_page=3&_embed=true'
            },
            {
              name: 'TechCrunch',
              url: 'https://techcrunch.com/wp-json/wp/v2/posts?per_page=3'
            }
          ].map((preset) => (
            <button
              key={preset.name}
              onClick={() => {
                setTestUrl(preset.url);
                handleTestEndpoint(preset.url);
              }}
              className="px-2.5 py-1 rounded bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 text-[11px]"
            >
              {preset.name}
            </button>
          ))}
        </div>

        {/* URL Input Form */}
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="url"
            value={testUrl}
            onChange={(e) => setTestUrl(e.target.value)}
            placeholder="https://your-domain.com/wp-json/wp/v2/posts"
            className="flex-1 px-3 py-2 text-xs font-mono rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-amber-500"
          />
          <button
            onClick={() => handleTestEndpoint()}
            disabled={loading}
            className="px-5 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-medium flex items-center justify-center space-x-2 transition-all disabled:opacity-50"
          >
            {loading ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Executing REST Call...</span>
              </>
            ) : (
              <>
                <Globe className="w-3.5 h-3.5" />
                <span>Execute Request</span>
              </>
            )}
          </button>
        </div>

        {/* Diagnostics & Result */}
        {error && (
          <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 text-xs text-red-700 dark:text-red-300 flex items-start space-x-2">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-semibold">Request Failed</strong>
              <span>{error}</span>
            </div>
          </div>
        )}

        {apiResponse && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-stone-500">
              <span className="flex items-center space-x-1 text-emerald-600 dark:text-emerald-400">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>HTTP 200 OK • Response Time: {responseTime}ms</span>
              </span>
              <span>{Array.isArray(apiResponse) ? `${apiResponse.length} records returned` : 'Payload returned'}</span>
            </div>

            <pre className="max-h-80 overflow-y-auto p-4 rounded-xl bg-stone-950 text-emerald-300 font-mono text-[11px] leading-relaxed">
              {JSON.stringify(apiResponse, null, 2)}
            </pre>
          </div>
        )}

      </section>

    </div>
  );
};
