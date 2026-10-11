import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Code, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Server, 
  Sparkles, 
  CheckCircle, 
  ExternalLink,
  Laptop,
  Check
} from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { ProjectCard } from '../components/projects/ProjectCard';
import { PORTFOLIO_PROJECTS } from '../data/projectsData';

export const Home: React.FC = () => {
  const featuredProjects = PORTFOLIO_PROJECTS.slice(0, 4);

  const expertiseCategories = [
    {
      title: 'WordPress Development',
      desc: 'Building custom websites from scratch, PHP template hierarchy, child themes, actions, filters, and clean semantic architecture.',
      skills: ['Custom PHP Templates', 'Child Themes', 'Hooks & Filters', 'Clean Semantic Markup', 'Gutenberg Blocks']
    },
    {
      title: 'Page Builders & Theming',
      desc: 'Deep hands-on agency proficiency executing pixel-perfect designs from Figma and Adobe XD without code bloat.',
      skills: ['Elementor & Elementor Pro', 'Divi Builder', 'WPBakery Page Builder', 'Custom CSS Overrides', 'Responsive Breakpoints']
    },
    {
      title: 'Modern Frontend & React',
      desc: 'Emerging focus building decoupled single-page applications with Vite, modern component-driven architectures, and Tailwind CSS.',
      skills: ['React SPA', 'Vite Bundler', 'Tailwind CSS', 'ES6+ JavaScript', 'TypeScript Basics', 'Client Routing']
    },
    {
      title: 'CMS & API Integrations',
      desc: 'Extending WordPress data architecture into a robust headless content engine with structured REST endpoints.',
      skills: ['WordPress REST API', 'Advanced Custom Fields (ACF Pro)', 'Custom Post Types (CPT)', 'Custom Taxonomies', 'Webhook Delivery']
    },
    {
      title: 'Maintenance & Troubleshooting',
      desc: 'Production issue diagnosis, plugin conflict isolation, PHP deprecation fixes, database cleanup, and proactive uptime support.',
      skills: ['Bug Fixing & Debugging', 'Plugin Compatibility QA', 'Core/Theme Updates', 'Performance Audits', 'Uptime Safeguards']
    },
    {
      title: 'Marketing & Technical Support',
      desc: 'Connecting marketing funnels, WooCommerce shops, domain DNS routing, and automated communication pipelines.',
      skills: ['GoHighLevel Funnels & Forms', 'WooCommerce Styling', 'Responsive HTML Emails', 'cPanel & Hosting Migrations', 'DNS Management']
    }
  ];

  const workflowSteps = [
    {
      num: '01',
      title: 'Understand Requirements',
      desc: 'Analyze project scope, stakeholder objectives, user journeys, and target timelines before writing code.'
    },
    {
      num: '02',
      title: 'Review Environment & Design',
      desc: 'Inspect existing WordPress installations, hosting limits, plugins, or Figma design tokens for technical feasibility.'
    },
    {
      num: '03',
      title: 'Architect & Implement',
      desc: 'Construct clean templates, page builder structures, or React components using standardized naming and responsive rules.'
    },
    {
      num: '04',
      title: 'Cross-Device QA & Testing',
      desc: 'Validate across real mobile viewports (iOS/Android), desktop screen resolutions, form validations, and keyboard accessibility.'
    },
    {
      num: '05',
      title: 'Performance & Optimization',
      desc: 'Minify payloads, compress assets, verify clean DOM structures, and eliminate render-blocking bottlenecks.'
    },
    {
      num: '06',
      title: 'Deliver, Document & Support',
      desc: 'Provide clear client walkthrough guides, documentation for internal teams, and reliable post-launch maintenance.'
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      
      {/* Hero Section */}
      <section className="pt-12 sm:pt-20 border-b border-stone-200 dark:border-stone-800 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            
            {/* Expertise Label */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/80 text-amber-900 dark:text-amber-200 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
              <span>WordPress Development • Custom PHP • React • Headless CMS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-stone-900 dark:text-white tracking-tight leading-[1.08]">
              Building better WordPress experiences through thoughtful development.
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl font-velour text-stone-600 dark:text-stone-300 leading-relaxed max-w-3xl">
              I'm a WordPress developer with hands-on experience building, customizing, maintaining, and optimizing websites for agencies and businesses. I combine practical WordPress expertise with modern frontend technologies to create flexible, responsive, and maintainable web experiences.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Button to="/projects" size="lg" variant="primary">
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button to="/contact" size="lg" variant="outline">
                <span>Let's Work Together</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Quick Experience Badges */}
            <div className="pt-8 border-t border-stone-200/60 dark:border-stone-800/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-stone-500">
              <div>
                <span className="text-stone-900 dark:text-white font-bold block text-sm">~5 Years</span>
                <span>WordPress Experience</span>
              </div>
              <div>
                <span className="text-stone-900 dark:text-white font-bold block text-sm">Agency Background</span>
                <span>Growmodo & Go Crayons</span>
              </div>
              <div>
                <span className="text-stone-900 dark:text-white font-bold block text-sm">Figma to Code</span>
                <span>Pixel-Accurate Builds</span>
              </div>
              <div>
                <span className="text-stone-900 dark:text-white font-bold block text-sm">Decoupled React</span>
                <span>Headless Architecture</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Introduction & Philosophy Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <SectionHeading
              eyebrow="Approach & Reliability"
              title="Practical problem solving, clean execution, and zero unnecessary complexity."
            />
          </div>
          <div className="lg:col-span-7 space-y-4 font-velour text-stone-700 dark:text-stone-300 text-base leading-relaxed">
            <p>
              In white-label agency environments, website development isn't just about making things look good on day one—it's about ensuring marketing teams can edit content without breaking layouts, plugins stay updated without white-screen errors, and mobile visitors experience zero lag.
            </p>
            <p>
              Whether engineering custom PHP page templates, configuring complex Elementor Pro layouts from Figma mockups, or building decoupled React frontends communicating with the WordPress REST API, I focus on clean code structure, cross-device responsiveness, and reliable communication.
            </p>
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
              <div className="flex items-center space-x-2 text-stone-800 dark:text-stone-200">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Respect existing codebases & theme hierarchies</span>
              </div>
              <div className="flex items-center space-x-2 text-stone-800 dark:text-stone-200">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pixel-accurate Figma & Adobe XD implementation</span>
              </div>
              <div className="flex items-center space-x-2 text-stone-800 dark:text-stone-200">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Airtight mobile testing down to 360px</span>
              </div>
              <div className="flex items-center space-x-2 text-stone-800 dark:text-stone-200">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Clear documentation for client teams</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
          <SectionHeading
            eyebrow="Selected Work"
            title="Real-world projects and technical case studies."
            description="Explore verified client websites, agency deliverables, and headless architecture prototypes."
          />
          <Button to="/projects" variant="outline" size="sm" className="self-start sm:self-auto">
            <span>View All Projects ({PORTFOLIO_PROJECTS.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>

        <div className="space-y-6">
          {/* Top featured case study banner */}
          <ProjectCard project={featuredProjects[0]} featured={true} />

          {/* Secondary grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {featuredProjects.slice(1, 4).map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Expertise Matrix */}
      <section className="bg-stone-100/70 dark:bg-stone-900/40 py-16 sm:py-24 border-y border-stone-200 dark:border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="Technical Capabilities"
            title="Structured expertise built across production environments."
            description="Clear service domains grouped by practical implementation value."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseCategories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-6 shadow-xs space-y-4 hover:border-stone-400 dark:hover:border-stone-700 transition-colors"
              >
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-lg text-stone-900 dark:text-white">
                    {cat.title}
                  </h3>
                  <p className="text-xs font-velour text-stone-600 dark:text-stone-300 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Workflow Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="How I Work"
          title="A reliable, step-by-step development process."
          description="Clear milestones ensuring high-quality output, smooth collaboration, and predictable delivery."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflowSteps.map((step) => (
            <div
              key={step.num}
              className="p-6 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 space-y-2 relative"
            >
              <span className="font-mono text-2xl font-bold text-amber-700 dark:text-amber-400 block">
                {step.num}
              </span>
              <h4 className="font-heading font-bold text-base text-stone-900 dark:text-white">
                {step.title}
              </h4>
              <p className="text-xs font-velour text-stone-600 dark:text-stone-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Contact CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 text-white rounded-2xl p-8 sm:p-12 lg:p-16 border border-stone-800 shadow-xl relative overflow-hidden">
          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="text-amber-400 text-xs font-mono uppercase tracking-wider font-semibold">
              Available for White-Label & Remote Projects
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight">
              Ready to bring clean, reliable WordPress development to your next project?
            </h2>
            <p className="text-sm sm:text-base font-velour text-stone-300 leading-relaxed">
              Whether you need an experienced developer to translate Figma designs into Elementor, build custom WordPress PHP templates, troubleshoot tricky production bugs, or explore headless React architectures—I’m ready to collaborate.
            </p>
            <div className="pt-4 flex flex-wrap gap-3">
              <Button to="/contact" size="lg" variant="secondary">
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <a
                href="mailto:raventrishabaluyot@gmail.com"
                className="inline-flex items-center justify-center text-sm font-medium px-5 py-2.5 rounded-lg border border-stone-700 hover:bg-stone-800 text-stone-200 transition-colors"
              >
                <span>Email Directly</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
