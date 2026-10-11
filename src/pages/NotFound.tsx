import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const NotFound: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 sm:py-32 text-center space-y-6">
      <div className="inline-block px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs font-mono">
        HTTP 404 • Page Not Found
      </div>

      <h1 className="text-4xl sm:text-5xl font-heading font-bold text-stone-900 dark:text-white">
        The requested dispatch or case study could not be found.
      </h1>

      <p className="font-velour text-stone-600 dark:text-stone-300 text-base max-w-lg mx-auto leading-relaxed">
        The link may have moved or the route was not found in the portfolio router.
      </p>

      <div className="pt-4 flex justify-center gap-3">
        <Button to="/" variant="primary" size="md">
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Button>
        <Button to="/projects" variant="outline" size="md">
          <span>Explore Projects</span>
        </Button>
      </div>
    </div>
  );
};
