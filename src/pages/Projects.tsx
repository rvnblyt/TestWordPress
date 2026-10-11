import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProjectFilters } from '../components/projects/ProjectFilters';
import { ProjectCard } from '../components/projects/ProjectCard';
import { wpApi } from '../services/wordpressApi';
import { PortfolioProject } from '../types/project';
import { Database, AlertCircle, RefreshCw } from 'lucide-react';

export const Projects: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All Projects';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [apiError, setApiError] = useState<string | null>(null);
  const [isLive, setIsLive] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    wpApi.getProjects().then(({ projects: fetched, isLive: live, error }) => {
      if (isMounted) {
        setProjects(fetched);
        setIsLive(live);
        setApiError(error);
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All Projects') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const filteredProjects = projects.filter((p) => {
    const matchesCategory =
      selectedCategory === 'All Projects' || p.category === selectedCategory;

    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const matchesSearch =
      p.title.rendered.toLowerCase().includes(query) ||
      p.excerpt.rendered.toLowerCase().includes(query) ||
      p.acf.technologies_used.some((tech) => tech.toLowerCase().includes(query)) ||
      p.acf.client_or_industry.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
      
      {/* Header */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-8 space-y-4">
        <SectionHeading
          eyebrow="Portfolio & Case Studies"
          title="Verified WordPress and frontend engineering projects."
          description="A curated catalog of production agency builds, custom PHP themes, page builder landing pages, and decoupled React applications."
        />

        {apiError && (
          <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200 text-xs flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
            <span>{apiError}</span>
          </div>
        )}
      </div>

      {/* Filter Controls */}
      <ProjectFilters
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryChange}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalCount={filteredProjects.length}
      />

      {/* Projects Grid or Loading Skeleton */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-96 rounded-xl bg-stone-200 dark:bg-stone-800" />
          ))}
        </div>
      ) : filteredProjects.length === 0 ? (
        <div className="text-center py-20 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl space-y-4">
          <p className="text-stone-500 font-velour text-sm">
            No case studies found matching the selected filters.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All Projects');
              setSearchQuery('');
              searchParams.delete('category');
              setSearchParams(searchParams);
            }}
            className="px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-medium"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      {/* Bottom Technical Source Note */}
      <div className="pt-8 border-t border-stone-200 dark:border-stone-800 text-xs text-stone-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <Database className="w-3.5 h-3.5 text-stone-400" />
          <span>
            Data Layer:{' '}
            <strong className="text-stone-700 dark:text-stone-300">
              {isLive ? 'Live WordPress REST API' : 'WordPress Custom Post Type & ACF Mock Model'}
            </strong>
          </span>
        </div>
        <div className="text-[11px] font-mono">
          Endpoint: <code>/wp-json/wp/v2/portfolio_project</code>
        </div>
      </div>

    </div>
  );
};
