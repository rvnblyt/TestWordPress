import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle } from 'lucide-react';
import { PortfolioProject } from '../../types/project';
import { Badge } from '../ui/Badge';

interface ProjectCardProps {
  project: PortfolioProject;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false }) => {
  const { slug, title, excerpt, featured_media_url, category, acf } = project;

  return (
    <article
      className={`group bg-white dark:bg-stone-900/70 border border-stone-200 dark:border-stone-800 rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-md hover:border-stone-400 dark:hover:border-stone-600 ${
        featured ? 'lg:grid lg:grid-cols-12 lg:gap-6' : ''
      }`}
    >
      {/* Thumbnail */}
      <div
        className={`relative overflow-hidden bg-stone-100 dark:bg-stone-800 ${
          featured ? 'lg:col-span-6 h-64 sm:h-80 lg:h-full' : 'h-52 sm:h-60'
        }`}
      >
        <img
          src={featured_media_url}
          alt={title.rendered}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <Badge variant="accent">{category}</Badge>
          {acf.is_verified && (
            <Badge variant="success" className="gap-1">
              <CheckCircle className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
              <span>Verified Work</span>
            </Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <div
        className={`p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4 ${
          featured ? 'lg:col-span-6 lg:p-8' : ''
        }`}
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
            <span>{acf.client_or_industry}</span>
            <span>{acf.completion_year}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-heading font-bold text-stone-900 dark:text-white leading-snug group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
            <Link to={`/projects/${slug}`}>{title.rendered}</Link>
          </h3>

          <p
            className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-velour leading-relaxed line-clamp-3"
            dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
          />

          {/* Technology pills */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {acf.technologies_used.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400"
              >
                {tech}
              </span>
            ))}
            {acf.technologies_used.length > 4 && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 text-stone-400">
                +{acf.technologies_used.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between text-xs">
          <Link
            to={`/projects/${slug}`}
            className="flex items-center space-x-1.5 text-stone-900 dark:text-white font-semibold group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>

          {acf.live_url && (
            <a
              href={acf.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors"
              title="Open external live site"
            >
              <span>Live Site</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
