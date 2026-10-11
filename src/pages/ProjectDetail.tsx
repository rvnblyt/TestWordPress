import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle, 
  Calendar, 
  Briefcase, 
  Layers, 
  ShieldCheck, 
  ArrowRight,
  Code2,
  Smartphone,
  Sparkles
} from 'lucide-react';
import { wpApi } from '../services/wordpressApi';
import { PortfolioProject } from '../types/project';
import { PORTFOLIO_PROJECTS } from '../data/projectsData';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ProjectCard } from '../components/projects/ProjectCard';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [project, setProject] = useState<PortfolioProject | null>(null);
  const [relatedProjects, setRelatedProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    wpApi.getProjects().then(({ projects }) => {
      if (!isMounted) return;
      const found = projects.find((p) => p.slug === slug);
      if (found) {
        setProject(found);
        setRelatedProjects(projects.filter((p) => p.slug !== slug).slice(0, 2));
      } else {
        setProject(null);
      }
      setLoading(false);
      window.scrollTo(0, 0);
    });

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-20 space-y-6 animate-pulse">
        <div className="h-6 w-32 bg-stone-200 dark:bg-stone-800 rounded" />
        <div className="h-12 w-3/4 bg-stone-200 dark:bg-stone-800 rounded" />
        <div className="h-96 w-full bg-stone-200 dark:bg-stone-800 rounded-2xl" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center space-y-4">
        <h1 className="text-3xl font-heading font-bold text-stone-900 dark:text-white">
          Case Study Not Found
        </h1>
        <p className="text-stone-600 dark:text-stone-400 font-velour">
          The requested portfolio project could not be located in the current database.
        </p>
        <div className="pt-4">
          <Button to="/projects" variant="primary">
            Back to All Projects
          </Button>
        </div>
      </div>
    );
  }

  const { title, excerpt, featured_media_url, category, acf } = project;

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Navigation Breadcrumb */}
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center space-x-1.5 text-xs font-mono text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Project Hero Header */}
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="accent">{category}</Badge>
          {acf.is_verified && (
            <Badge variant="success" className="gap-1">
              <CheckCircle className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
              <span>Verified Agency Contribution</span>
            </Badge>
          )}
          <span className="text-xs text-stone-500 font-mono ml-auto">
            {acf.completion_year}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold text-stone-900 dark:text-white leading-[1.1] tracking-tight">
          {title.rendered}
        </h1>

        <p
          className="text-base sm:text-lg font-velour text-stone-600 dark:text-stone-300 leading-relaxed max-w-3xl"
          dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
        />

        {/* Metadata Details Strip */}
        <div className="pt-6 border-t border-b border-stone-200 dark:border-stone-800 grid grid-cols-2 md:grid-cols-4 gap-4 py-4 text-xs font-mono">
          <div>
            <span className="text-stone-400 block mb-0.5">Client / Industry:</span>
            <span className="font-semibold text-stone-900 dark:text-stone-100">{acf.client_or_industry}</span>
          </div>
          <div>
            <span className="text-stone-400 block mb-0.5">Project Scope:</span>
            <span className="font-semibold text-stone-900 dark:text-stone-100">{acf.project_type}</span>
          </div>
          <div>
            <span className="text-stone-400 block mb-0.5">Primary Role:</span>
            <span className="font-semibold text-stone-900 dark:text-stone-100">WordPress Developer</span>
          </div>
          <div>
            <span className="text-stone-400 block mb-0.5">Live Presence:</span>
            {acf.live_url ? (
              <a
                href={acf.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Visit Live Site</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <span className="text-stone-500">Internal / Private</span>
            )}
          </div>
        </div>
      </header>

      {/* Featured Screenshot */}
      <div className="rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-lg h-72 sm:h-[480px] bg-stone-100 dark:bg-stone-900">
        <img
          src={featured_media_url}
          alt={title.rendered}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Technical Overview & Verified Contribution */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-4">
        
        {/* Left Column: Deep Dive */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* Overview */}
          <section className="space-y-3">
            <h2 className="text-2xl font-heading font-bold text-stone-900 dark:text-white">
              Project Overview
            </h2>
            <p className="font-velour text-stone-700 dark:text-stone-300 text-base leading-relaxed">
              {acf.overview}
            </p>
          </section>

          {/* Verified Developer Contribution */}
          <section className="p-6 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/60 space-y-2">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider font-semibold text-amber-900 dark:text-amber-300">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>Verified Developer Contribution</span>
            </div>
            <p className="font-velour text-stone-800 dark:text-stone-200 text-sm leading-relaxed">
              {acf.verified_contribution}
            </p>
          </section>

          {/* Challenges & Technical Requirements */}
          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-bold text-stone-900 dark:text-white">
              Technical Challenges
            </h2>
            <ul className="space-y-2.5">
              {acf.challenges.map((ch, idx) => (
                <li
                  key={idx}
                  className="flex items-start space-x-3 text-stone-700 dark:text-stone-300 font-velour text-sm leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                  <span>{ch}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Approach & Implementation */}
          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-bold text-stone-900 dark:text-white">
              Approach & Implementation
            </h2>
            <ul className="space-y-2.5">
              {acf.approach_and_implementation.map((step, idx) => (
                <li
                  key={idx}
                  className="flex items-start space-x-3 text-stone-700 dark:text-stone-300 font-velour text-sm leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-900 dark:bg-stone-100 mt-2 shrink-0" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Key Features */}
          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-bold text-stone-900 dark:text-white">
              Key Features Implemented
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {acf.key_features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-xs font-sans text-stone-800 dark:text-stone-200"
                >
                  {feat}
                </div>
              ))}
            </div>
          </section>

          {/* Responsive Considerations */}
          <section className="space-y-3">
            <div className="flex items-center space-x-2 text-stone-900 dark:text-white">
              <Smartphone className="w-5 h-5 text-amber-600" />
              <h2 className="text-2xl font-heading font-bold">
                Responsive & Mobile Considerations
              </h2>
            </div>
            <ul className="space-y-2">
              {acf.responsive_considerations.map((item, idx) => (
                <li
                  key={idx}
                  className="text-sm font-velour text-stone-700 dark:text-stone-300 leading-relaxed"
                >
                  • {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Verified Outcomes */}
          {acf.verified_outcomes && acf.verified_outcomes.length > 0 && (
            <section className="space-y-3 pt-4 border-t border-stone-200 dark:border-stone-800">
              <h2 className="text-2xl font-heading font-bold text-stone-900 dark:text-white">
                Verified Outcomes
              </h2>
              <div className="space-y-2">
                {acf.verified_outcomes.map((outcome, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-3 text-sm font-velour text-stone-700 dark:text-stone-300"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Gallery Images if available */}
          {acf.gallery_images && acf.gallery_images.length > 0 && (
            <section className="space-y-4 pt-4">
              <h2 className="text-2xl font-heading font-bold text-stone-900 dark:text-white">
                Project Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {acf.gallery_images.map((img, idx) => (
                  <div
                    key={idx}
                    className="h-60 rounded-xl overflow-hidden border border-stone-200 dark:border-stone-800"
                  >
                    <img src={img} alt="Gallery item" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>

        {/* Right Sidebar: Tech Stack & Services */}
        <aside className="lg:col-span-4 space-y-6">
          
          {/* Services Provided */}
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-6 shadow-xs space-y-3">
            <h3 className="font-heading font-bold text-sm text-stone-900 dark:text-white uppercase tracking-wider">
              Services Delivered
            </h3>
            <ul className="space-y-1.5 text-xs text-stone-600 dark:text-stone-300">
              {acf.services_provided.map((s) => (
                <li key={s} className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-6 shadow-xs space-y-3">
            <h3 className="font-heading font-bold text-sm text-stone-900 dark:text-white uppercase tracking-wider">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {acf.technologies_used.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Contact Box */}
          <div className="p-6 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-100/70 dark:bg-stone-900/40 space-y-3">
            <h4 className="font-heading font-bold text-base text-stone-900 dark:text-white">
              Have a similar project?
            </h4>
            <p className="text-xs font-velour text-stone-600 dark:text-stone-400 leading-relaxed">
              I can build, optimize, or troubleshoot your WordPress website with the same standard of technical care.
            </p>
            <Button to="/contact" size="sm" variant="primary" className="w-full">
              Discuss Your Project
            </Button>
          </div>

        </aside>

      </div>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="pt-12 border-t border-stone-200 dark:border-stone-800 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-heading font-bold text-stone-900 dark:text-white">
              More Case Studies
            </h3>
            <Link to="/projects" className="text-xs font-semibold text-amber-600 hover:underline">
              View All ({PORTFOLIO_PROJECTS.length})
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedProjects.map((rel) => (
              <ProjectCard key={rel.id} project={rel} />
            ))}
          </div>
        </section>
      )}

    </article>
  );
};
