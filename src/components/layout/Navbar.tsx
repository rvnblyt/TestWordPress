import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Featured Work', path: '/projects' },
    { label: 'About & Background', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Headless Architecture', path: '/architecture' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="sticky top-0 z-40 bg-stone-50/90 dark:bg-stone-950/90 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo / Developer Name */}
          <Link
            to="/"
            className="group flex flex-col focus:outline-none"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="flex items-center space-x-2">
              <span className="text-xl sm:text-2xl font-heading font-bold text-stone-900 dark:text-white tracking-tight group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                Raven Trisha Baluyot
              </span>
            </div>
            <span className="text-[11px] font-mono tracking-wider text-stone-500 uppercase">
              WordPress Developer • Headless & React
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-stone-900 dark:text-white bg-stone-200/60 dark:bg-stone-800/70 font-semibold'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-900'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pl-3">
              <Button to="/contact" size="sm" variant="primary">
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-900 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                isActive(link.path)
                  ? 'bg-stone-200 dark:bg-stone-800 text-stone-900 dark:text-white font-semibold'
                  : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3">
            <Button
              to="/contact"
              size="md"
              variant="primary"
              className="w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Discuss a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
