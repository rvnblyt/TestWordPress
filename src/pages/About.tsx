import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone, 
  Code2, 
  CheckCircle, 
  ArrowRight,
  Terminal,
  Compass
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">
      
      {/* Intro Header */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-10 space-y-6">
        <SectionHeading
          eyebrow="Background & Experience"
          title="Practical WordPress craftsmanship, agency reliability, and modern frontend curiosity."
          description="A detailed look into my five years of production web development, white-label collaboration, and ongoing expansion into headless architectures."
        />

        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-stone-500 pt-2">
          <div className="flex items-center space-x-1.5">
            <MapPin className="w-3.5 h-3.5 text-stone-400" />
            <span>Cavite, Philippines (UTC+8)</span>
          </div>
          <span>•</span>
          <div className="flex items-center space-x-1.5">
            <Mail className="w-3.5 h-3.5 text-stone-400" />
            <span>raventrishabaluyot@gmail.com</span>
          </div>
          <span>•</span>
          <div className="flex items-center space-x-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-stone-400" />
            <span>BS Information Technology (2018)</span>
          </div>
        </div>
      </div>

      {/* Main Bio Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-8 space-y-6 font-velour text-stone-700 dark:text-stone-300 text-base sm:text-lg leading-relaxed">
          <p>
            I am a web developer with approximately five years of hands-on WordPress development experience. My primary background is rooted in fast-paced white-label agency workflows, where I have spent years transforming designs into responsive, high-performing websites and resolving technical roadblocks for businesses across diverse sectors.
          </p>

          <p>
            At agencies like <strong>Growmodo</strong> and <strong>Go Crayons</strong>, I’ve been responsible for delivering complex projects end-to-end: translating design files (Figma, Adobe XD, Photoshop) into functional WordPress websites using page builders like Elementor, Divi, and WPBakery, as well as crafting custom PHP theme templates, hooks, and ACF schemas when off-the-shelf tools fall short.
          </p>

          <p>
            Beyond initial launches, a substantial portion of my day-to-day work involves proactive website maintenance: resolving plugin conflicts, migrating hosting environments, troubleshooting broken layouts, configuring domain DNS records, and optimizing mobile load performance.
          </p>

          <div className="p-6 rounded-xl bg-stone-100/80 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 space-y-3 font-sans text-sm">
            <h3 className="font-heading font-bold text-stone-900 dark:text-white flex items-center space-x-2">
              <Compass className="w-4 h-4 text-amber-600" />
              <span>Emerging Technical Direction: Headless WordPress + React</span>
            </h3>
            <p className="font-velour text-stone-600 dark:text-stone-300 text-xs sm:text-sm leading-relaxed">
              While my commercial foundation is in WordPress and PHP, I am actively expanding into headless CMS architectures, React SPA development with Vite, and Tailwind CSS. Decoupling the frontend provides unprecedented design freedom, instantaneous page transitions, and cleaner codebases while allowing content editors to continue enjoying WordPress’s intuitive admin experience.
            </p>
          </div>

          <p>
            I believe in clear asynchronous communication, thoughtful documentation, and honest technical appraisal. I don’t believe in bloated plugins, fragile hacks, or promising capabilities that haven’t been thoroughly tested in production.
          </p>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-6 shadow-xs space-y-4">
            <h3 className="font-heading font-bold text-sm text-stone-900 dark:text-white uppercase tracking-wider">
              Core Principles
            </h3>
            <ul className="space-y-3 text-xs text-stone-600 dark:text-stone-300">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Simplicity first:</strong> Solve with native WordPress APIs before adding another plugin.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Mobile-first QA:</strong> Real device testing down to 360px viewport widths.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Client maintainability:</strong> Structure custom fields so clients never break layouts.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Honest timelines:</strong> Transparent updates and realistic delivery expectations.</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/60 rounded-xl p-6 space-y-3 text-xs">
            <span className="font-mono uppercase tracking-wider text-amber-900 dark:text-amber-200 font-semibold block">
              Agency Collaboration
            </span>
            <p className="font-velour text-stone-700 dark:text-stone-300 leading-relaxed">
              Experienced working with distributed creative teams across Slack, ClickUp, Asana, and Loom, accommodating US, European, and Australian timezones.
            </p>
          </div>
        </div>
      </div>

      {/* Career History Timeline */}
      <section className="space-y-8 pt-8 border-t border-stone-200 dark:border-stone-800">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-stone-900 dark:text-white">
          Professional Work Experience
        </h2>

        <div className="space-y-8 divide-y divide-stone-200/80 dark:divide-stone-800/80">
          
          {/* Growmodo */}
          <div className="pt-6 first:pt-0 grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-4 space-y-1">
              <span className="text-xs font-mono text-amber-700 dark:text-amber-400 font-semibold uppercase">
                Feb 2022 — Present
              </span>
              <h3 className="text-lg font-bold text-stone-900 dark:text-white font-heading">
                Growmodo
              </h3>
              <p className="text-xs text-stone-500">WordPress Developer (Remote Agency)</p>
            </div>
            <div className="md:col-span-8 space-y-3 text-xs sm:text-sm font-velour text-stone-700 dark:text-stone-300">
              <p>
                Develop functional, responsive websites from high-fidelity mockups using Elementor, Divi, and WPBakery.
              </p>
              <ul className="space-y-1.5 list-disc list-inside">
                <li>Implement ongoing client feature requests, bug fixes, and critical layout updates.</li>
                <li>Translate complex designs from Figma, Adobe XD, and Photoshop into clean frontend code.</li>
                <li>Maintain theme consistency, cross-browser compatibility, and mobile responsiveness.</li>
              </ul>
            </div>
          </div>

          {/* Go Crayons - Developer */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-4 space-y-1">
              <span className="text-xs font-mono text-stone-500 font-semibold uppercase">
                May 2021 — Jan 2022
              </span>
              <h3 className="text-lg font-bold text-stone-900 dark:text-white font-heading">
                Go Crayons
              </h3>
              <p className="text-xs text-stone-500">WordPress Developer & Project Manager</p>
            </div>
            <div className="md:col-span-8 space-y-3 text-xs sm:text-sm font-velour text-stone-700 dark:text-stone-300">
              <p>
                Delivered complex web projects end-to-end, translating client business requirements into high-quality technical outputs.
              </p>
              <ul className="space-y-1.5 list-disc list-inside">
                <li>Customized WordPress themes and wrote documentation guides to improve site usability.</li>
                <li>Managed client communication for 10–15 concurrent projects monthly.</li>
                <li>Monitored team task progress, deliverables, and quality assurance checkpoints.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-4 space-y-1">
              <span className="text-xs font-mono text-stone-500 font-semibold uppercase">
                Class of 2018
              </span>
              <h3 className="text-lg font-bold text-stone-900 dark:text-white font-heading">
                Cavite State University
              </h3>
              <p className="text-xs text-stone-500">Academic Foundation</p>
            </div>
            <div className="md:col-span-8 space-y-2 text-xs sm:text-sm font-velour text-stone-700 dark:text-stone-300">
              <p className="font-semibold text-stone-900 dark:text-white">
                Bachelor of Science in Information Technology (BSIT)
              </p>
              <p>
                Foundational coursework in database management, software development, object-oriented programming, and web systems.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <div className="p-8 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-heading font-bold text-stone-900 dark:text-white">
            Interested in working together?
          </h3>
          <p className="text-xs font-velour text-stone-600 dark:text-stone-400">
            I am available for agency contracts, white-label client projects, and full-time remote roles.
          </p>
        </div>
        <Button to="/contact" variant="primary">
          Get in Touch
        </Button>
      </div>

    </div>
  );
};
