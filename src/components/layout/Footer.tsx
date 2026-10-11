import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ExternalLink, ArrowUpRight, Code, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Col 1 & 2: Bio & Direct Contact */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="text-xl font-heading font-bold text-white tracking-tight block">
                Raven Trisha Baluyot
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400">
                WordPress Developer • Headless & React
              </span>
            </div>
            
            <p className="text-stone-400 font-velour leading-relaxed max-w-sm">
              Hands-on WordPress specialist with five years of production experience across white-label agencies, custom PHP theming, page builders (Elementor, Divi, WPBakery), and modern headless React architectures.
            </p>

            <div className="space-y-1.5 pt-2 text-stone-300">
              <a
                href="mailto:raventrishabaluyot@gmail.com"
                className="flex items-center space-x-2 text-stone-200 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-amber-500" />
                <span className="font-mono text-xs">raventrishabaluyot@gmail.com</span>
              </a>
              <div className="flex items-center space-x-2 text-stone-400">
                <MapPin className="w-3.5 h-3.5 text-stone-500" />
                <span>City of Dasmariñas, Cavite, Philippines (UTC+8)</span>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h3 className="font-semibold text-white tracking-wider uppercase text-[11px] font-mono">
              Portfolio
            </h3>
            <ul className="space-y-2 text-stone-400">
              <li>
                <Link to="/projects" className="hover:text-white transition-colors">
                  All Case Studies
                </Link>
              </li>
              <li>
                <Link to="/projects?category=Headless+WordPress+%26+React" className="hover:text-white transition-colors">
                  Headless & React Work
                </Link>
              </li>
              <li>
                <Link to="/projects?category=Elementor+%26+Page+Builders" className="hover:text-white transition-colors">
                  Elementor & Builders
                </Link>
              </li>
              <li>
                <Link to="/projects?category=Custom+Theme+Development" className="hover:text-white transition-colors">
                  Custom Theme Dev
                </Link>
              </li>
              <li>
                <Link to="/architecture" className="hover:text-white transition-colors">
                  REST API Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div className="space-y-3">
            <h3 className="font-semibold text-white tracking-wider uppercase text-[11px] font-mono">
              Core Offerings
            </h3>
            <ul className="space-y-2 text-stone-400">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  WordPress Website Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Figma to WordPress
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Website Maintenance & Bug Fixing
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Hosting & DNS Migrations
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  GoHighLevel CRM Lead Funnels
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Professional Trust */}
          <div className="space-y-3">
            <h3 className="font-semibold text-white tracking-wider uppercase text-[11px] font-mono">
              Agency Experience
            </h3>
            <div className="space-y-2 text-stone-400">
              <div>
                <strong className="text-stone-200 block">Growmodo</strong>
                <span className="text-[11px] text-stone-400">WordPress Developer (2022 – Present)</span>
              </div>
              <div>
                <strong className="text-stone-200 block">Go Crayons</strong>
                <span className="text-[11px] text-stone-400">WordPress Dev & PM (2021 – 2022)</span>
              </div>
              <div className="pt-2 flex items-center space-x-1.5 text-emerald-400 text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Available for Agency & Remote Roles</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Tech Badge */}
        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} Raven Trisha Baluyot. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-mono text-stone-400">
              Stack: React 19 • Vite • Tailwind CSS • Headless WordPress REST API
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
