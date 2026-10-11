import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { 
  Code, 
  Layers, 
  Smartphone, 
  Wrench, 
  Zap, 
  Server, 
  Network, 
  Cpu, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export const Services: React.FC = () => {
  const serviceList = [
    {
      icon: <Code className="w-5 h-5 text-amber-600" />,
      title: 'Custom WordPress Website Development',
      badge: 'From Scratch & Custom PHP',
      value: 'Turn ideas or brand mockups into clean, custom WordPress sites that load fast and remain easy for non-technical editors to update.',
      deliverables: [
        'Custom theme template hierarchy development',
        'Custom Post Types (CPT) and structured ACF fields',
        'Clean semantic HTML5 markup and organized stylesheets',
        'Zero reliance on bloated third-party multi-purpose themes'
      ],
      stack: ['WordPress', 'PHP 8+', 'ACF Pro', 'CSS3', 'MySQL']
    },
    {
      icon: <Layers className="w-5 h-5 text-amber-600" />,
      title: 'Elementor, Divi & WPBakery Theming',
      badge: 'Agency Page Builder Expertise',
      value: 'Pixel-perfect translation of Figma or Adobe XD designs into reliable page-builder layouts without messy nesting or slow render times.',
      deliverables: [
        'Modular Elementor Pro & Divi section templates',
        'Custom CSS overrides for strict brand alignment',
        'Dynamic query loops and custom archive layouts',
        'Standardized design tokens (typography, colors, button styles)'
      ],
      stack: ['Elementor Pro', 'Divi', 'WPBakery', 'Figma to WordPress', 'Custom CSS']
    },
    {
      icon: <Smartphone className="w-5 h-5 text-amber-600" />,
      title: 'Responsive Design & Cross-Device Optimization',
      badge: 'Mobile First Quality Assurance',
      value: 'Ensure your website renders flawlessly across iPhones, Android devices, iPads, laptops, and ultra-wide desktop monitors.',
      deliverables: [
        'Rigid testing down to 360px viewport widths',
        'Touch-optimized tap targets (48px+ touch minimums)',
        'Fluid typography scaling via modern CSS clamp formulas',
        'No horizontal overflow or broken form viewports'
      ],
      stack: ['Responsive Web Design', 'CSS Flexbox/Grid', 'Mobile QA', 'Touch Interactions']
    },
    {
      icon: <Wrench className="w-5 h-5 text-amber-600" />,
      title: 'WordPress Maintenance & Bug Fixing',
      badge: 'Troubleshooting & Support',
      value: 'Quick, calm resolution of production white screens, broken layouts, plugin update conflicts, and PHP version deprecations.',
      deliverables: [
        'Plugin conflict diagnosis and staged updates',
        'PHP fatal error and database query debugging',
        'Security hardening and database table cleanup',
        'Theme update testing in staging environments'
      ],
      stack: ['Debug Bar', 'Query Monitor', 'PHP Error Logs', 'WordPress Core']
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-600" />,
      title: 'Website Performance & Technical Optimization',
      badge: 'Speed & Core Web Vitals',
      value: 'Speed up sluggish WordPress sites to improve visitor retention, lower bounce rates, and support technical search rankings.',
      deliverables: [
        'Next-Gen image conversion (WebP) and responsive srcset',
        'CSS/JS minification and critical asset prioritization',
        'Caching policy configuration and database query optimization',
        'Elimination of render-blocking script dependencies'
      ],
      stack: ['Google PageSpeed', 'Lighthouse', 'Asset Optimization', 'Caching Engines']
    },
    {
      icon: <Server className="w-5 h-5 text-amber-600" />,
      title: 'Hosting Configuration & Website Migrations',
      badge: 'Infrastructure & DevOps',
      value: 'Frictionless, zero-downtime website transfers between hosts, plus complete DNS and email record configuration.',
      deliverables: [
        'Full database and wp-content site migrations',
        'DNS records routing (A records, CNAME, MX, SPF, DKIM)',
        'SSL certificate installation and HTTPS redirection',
        'cPanel, SiteGround, WP Engine, Cloudflare setup'
      ],
      stack: ['cPanel', 'Cloudflare DNS', 'SSL/TLS', 'Site Migrations']
    },
    {
      icon: <Network className="w-5 h-5 text-amber-600" />,
      title: 'Marketing & CRM Automations',
      badge: 'Funnel & Lead Integrations',
      value: 'Seamlessly capture leads and sync client data into external marketing pipelines and automated sales sequences.',
      deliverables: [
        'GoHighLevel landing pages, forms, and calendar funnels',
        'Webhook triggers to Zapier / Make / CRM systems',
        'Responsive HTML email newsletter templates',
        'WooCommerce checkout customizations and payment gateways'
      ],
      stack: ['GoHighLevel', 'WooCommerce', 'Webhooks', 'HTML Emails']
    },
    {
      icon: <Cpu className="w-5 h-5 text-amber-600" />,
      title: 'Headless WordPress & React Frontends',
      badge: 'Emerging Architecture',
      value: 'Leverage WordPress as a content management backend while serving a lightning-fast React SPA frontend with custom typography.',
      deliverables: [
        'WordPress REST API endpoint modeling and security',
        'ACF REST API integration for structured JSON payloads',
        'Modern React SPA built with Vite and Tailwind CSS',
        'Instantaneous client-side navigation without full reloads'
      ],
      stack: ['Headless WordPress', 'React 19', 'Vite', 'Tailwind CSS', 'WP REST API']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">
      
      {/* Header */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-10 max-w-3xl space-y-4">
        <SectionHeading
          eyebrow="Services & Capabilities"
          title="Practical WordPress solutions built for agency speed and long-term stability."
          description="Every service is backed by hands-on production experience, clear deliverables, and straightforward communication."
        />
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {serviceList.map((svc, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-8 shadow-xs flex flex-col justify-between space-y-6 hover:border-stone-400 dark:hover:border-stone-700 transition-colors"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-lg bg-stone-100 dark:bg-stone-800">
                  {svc.icon}
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 font-semibold">
                  {svc.badge}
                </span>
              </div>

              <h3 className="text-xl font-heading font-bold text-stone-900 dark:text-white">
                {svc.title}
              </h3>

              <p className="text-sm font-velour text-stone-600 dark:text-stone-300 leading-relaxed">
                {svc.value}
              </p>

              <div className="pt-2 space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block font-mono">
                  Key Deliverables:
                </span>
                <ul className="space-y-1.5 text-xs text-stone-700 dark:text-stone-300">
                  {svc.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start space-x-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 dark:border-stone-800/80 flex flex-wrap gap-1.5">
              {svc.stack.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="bg-stone-900 text-white rounded-2xl p-8 sm:p-12 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h3 className="text-2xl font-heading font-bold">
            Need a reliable developer for your team?
          </h3>
          <p className="text-sm font-velour text-stone-300 leading-relaxed">
            I work flexibly with agencies, marketing teams, and businesses for one-off projects, ongoing retainers, or full-time remote roles.
          </p>
        </div>
        <Button to="/contact" size="lg" variant="secondary" className="shrink-0">
          <span>Discuss Requirements</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

    </div>
  );
};
