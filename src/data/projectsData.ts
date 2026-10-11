import { PortfolioProject } from '../types/project';

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 1,
    slug: 'yellowtail-tech',
    title: { rendered: 'Yellow Tail Tech — Career Accelerator Platform' },
    excerpt: {
      rendered: 'High-converting responsive educational website and marketing funnel for an IT career training accelerator with CRM automation integration.'
    },
    featured_media_url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    category: 'Landing Pages & Integrations',
    acf: {
      client_or_industry: 'EdTech / Professional Training Accelerator',
      project_type: 'Marketing Website & Student Acquisition Funnel',
      services_provided: [
        'Responsive WordPress Implementation',
        'Elementor Pro Custom Templates',
        'GoHighLevel CRM Lead Funnel Integration',
        'Mobile Usability Optimization',
        'Page Speed & Asset Optimization'
      ],
      technologies_used: [
        'WordPress',
        'Elementor Pro',
        'Custom PHP & CSS',
        'GoHighLevel Automations',
        'Figma to WordPress',
        'REST Webhooks'
      ],
      live_url: 'https://yellowtail.tech',
      verified_contribution: 'Developed and maintained responsive landing pages from Figma mockups, built interactive curriculum accordions and program comparison tables, configured GoHighLevel inquiry forms and automated notification workflows.',
      overview: 'Yellow Tail Tech helps non-technical professionals transition into high-growth cloud computing and Linux careers. The project demanded high-trust visual presentation, seamless mobile responsiveness, and airtight lead capture mechanisms connected directly to automated sales follow-up sequences.',
      challenges: [
        'Ensuring lead generation forms embedded via GoHighLevel and external scripts did not degrade Google PageSpeed metrics.',
        'Building dense technical curriculum tables that maintain exceptional legibility on compact mobile screens (375px - 414px).',
        'Preserving pixel fidelity from Figma while accommodating frequent marketing copy updates by the internal team without code regressions.'
      ],
      approach_and_implementation: [
        'Implemented modular Elementor Pro theme templates with strict custom CSS classes to standardize typography, spacing tokens, and button hierarchies.',
        'Integrated asynchronous loading for marketing scripts and optimized form payload delivery to prevent blocking the main thread.',
        'Engineered responsive CSS grid containers that dynamically stack curriculum milestones into progressive disclosure accordions on smaller viewports.',
        'Created custom WordPress admin fields for marketing staff to easily swap program dates, tuition information, and intake cohort statuses.'
      ],
      key_features: [
        'Multi-step program qualification and inquiry capture workflow',
        'Dynamic program overview tabs and syllabus breakdown drawers',
        'Student success stories and video testimonial slider modules',
        'Fast-loading FAQ accordions with schema markup compatibility',
        'Unified global color palette and typography rules enforced across 20+ subpages'
      ],
      responsive_considerations: [
        'Tested across iOS Safari and Android Chrome down to 360px viewport widths to guarantee form inputs remain fully accessible without awkward auto-zooming.',
        'Optimized sticky mobile navigation bars with touch-friendly targets adhering to 48px minimum guidelines.',
        'Reduced hero media payload on cellular connections using responsive image srcset attributes.'
      ],
      verified_outcomes: [
        'Streamlined mobile form completion experience with zero layout shift during CRM iframe rendering.',
        'Empowered client marketing team to roll out weekly cohort updates without requiring developer intervention for basic text adjustments.',
        'Maintained cross-device brand consistency across paid search campaign landing pages.'
      ],
      gallery_images: [
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80'
      ],
      featured: true,
      completion_year: '2023 - 2024',
      is_verified: true,
      notes_for_review: 'Verified agency contribution: responsive development, Elementor template construction, and CRM form styling.'
    }
  },
  {
    id: 2,
    slug: 'influencer-journalism',
    title: { rendered: 'Influencer Journalism — Digital Media Publishing Platform' },
    excerpt: {
      rendered: 'Modern, content-centric digital publication designed for long-form editorial essays, author profiles, and rapid reader immersion.'
    },
    featured_media_url: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80',
    category: 'Custom Theme Development',
    acf: {
      client_or_industry: 'Digital Journalism & Media Research',
      project_type: 'Editorial Publication & Essay Archive',
      services_provided: [
        'WordPress Theme Customization',
        'Custom Post Types & Taxonomy Architecture',
        'Editorial Typography & Layout Design',
        'Content Hierarchy Restructuring',
        'Mobile Reading Experience Optimization'
      ],
      technologies_used: [
        'WordPress',
        'PHP Template Hierarchy',
        'Advanced Custom Fields (ACF)',
        'Custom CSS / BEM',
        'Responsive Web Design'
      ],
      live_url: 'https://influencerjournalism.com',
      verified_contribution: 'Restructured WordPress editorial template hierarchy, customized article reading views, implemented custom ACF metadata for author affiliations and citation sidebars, and refined mobile typography scaling.',
      overview: 'Influencer Journalism bridges academic media analysis with contemporary creator economy journalism. The platform required a distraction-free, highly readable layout capable of presenting long-form investigative reports alongside multimedia embeds and structured source references.',
      challenges: [
        'Balancing high-density text readability with aesthetic elegance across varying screen dimensions and device aspect ratios.',
        'Organizing multifaceted articles with multiple contributing authors, academic citations, and publication dates without cluttering the view.',
        'Preventing reader fatigue during deep-read articles through careful typographic vertical rhythm and line-length containment.'
      ],
      approach_and_implementation: [
        'Customized WordPress single template files (`single.php`, `archive.php`) utilizing clean semantic HTML5 markup.',
        'Established an optical typography scale with strict character-per-line measures (65-75 characters) to maximize reading comfort.',
        'Utilized ACF Pro to generate structured citation callout blocks, author profile badges, and related research recommendations.',
        'Implemented lazy-loading mechanisms for editorial illustrations and embedded social media references.'
      ],
      key_features: [
        'Customizable author dossier templates with linked essay bibliographies',
        'Dynamic reading time estimator and reading progress indicator',
        'Categorized archive filtering by media topic, year, and research theme',
        'Subtle dark-mode friendly typographic styling and minimal distractions',
        'Clean, accessible breadcrumb navigation structure'
      ],
      responsive_considerations: [
        'Fluid typography scaling using modern CSS clamp formulas to prevent abrupt heading size jumps between breakpoints.',
        'Collapsible table of contents on mobile screens that automatically highlights the active section heading during scroll.',
        'Padding and margin adjustments specifically tuned for portrait tablet reading.'
      ],
      verified_outcomes: [
        'Significantly enhanced reading engagement and article time-on-page metrics.',
        'Simplified publication workflow for editors submitting multi-author research pieces.',
        'Delivered clean, valid semantic markup verified against accessibility and SEO linters.'
      ],
      gallery_images: [
        'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1000&q=80'
      ],
      featured: true,
      completion_year: '2023',
      is_verified: true,
      notes_for_review: 'Verified contribution: custom theme template enhancements, ACF structuring, and typography tuning.'
    }
  },
  {
    id: 3,
    slug: 'eightyeight-detailing',
    title: { rendered: 'EightyEight Detailing — Prestige Automotive Detailing' },
    excerpt: {
      rendered: 'Luxury automotive care website featuring comprehensive ceramic coating packages, interactive service galleries, and customer booking inquiry flows.'
    },
    featured_media_url: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80',
    category: 'Elementor & Page Builders',
    acf: {
      client_or_industry: 'Luxury Automotive Services (Australia)',
      project_type: 'Local Service Brand & Inquiry Portal',
      services_provided: [
        'Custom WordPress Page Development',
        'Elementor & WPBakery Template Customization',
        'Interactive Before & After Image Sliders',
        'Service Package Comparison Architecture',
        'Local SEO & Technical Performance Optimization'
      ],
      technologies_used: [
        'WordPress',
        'Elementor / WPBakery',
        'Custom JavaScript',
        'Custom CSS',
        'Google Maps Integration',
        'Responsive Image Handling'
      ],
      live_url: 'https://eightyeightdetailing.com.au',
      verified_contribution: 'Developed high-impact service tier pages, implemented interactive vehicle detailing portfolio filters, configured contact forms with vehicle model pickers, and optimized high-resolution gallery images for fast Australian load times.',
      overview: 'EightyEight Detailing caters to supercar and prestige vehicle owners seeking high-end paint protection, ceramic coatings, and interior restoration. The website needed to evoke luxury craftsmanship, establish immediate trust, and guide visitors smoothly into requesting customized quotes.',
      challenges: [
        'Showcasing dozens of high-resolution vehicle transformation photos without crushing mobile page load speeds on cellular data.',
        'Displaying detailed multi-tier package comparison matrices clearly on smaller mobile viewports.',
        'Translating dark luxury branding into high-contrast, fully readable typography adhering to accessibility guidelines.'
      ],
      approach_and_implementation: [
        'Configured Next-Gen WebP image compression pipelines and responsive srcset definitions for all detailing galleries.',
        'Engineered an interactive before/after split slider allowing clients to swipe across paint correction comparisons in real time.',
        'Created custom responsive pricing cards that feature sticky highlights on recommended packages while maintaining clean vertical stacking on mobile.',
        'Implemented custom form validation ensuring potential customers provide vehicle year, make, and package preferences before submission.'
      ],
      key_features: [
        'High-resolution detailing showcase filtered by vehicle category (Exotic, SUV, Sedan)',
        'Interactive Paint Correction before/after visual comparison component',
        'Comprehensive multi-step quote calculator and booking inquiry form',
        'Google Maps integration with clear service area radius indicators',
        'Customer satisfaction guarantee and warranty certification badges'
      ],
      responsive_considerations: [
        'Touch-enabled swipe gestures for vehicle galleries with hardware-accelerated CSS transitions.',
        'Direct "Click to Call" and WhatsApp consultation buttons pinned for mobile users.',
        'Eliminated horizontal scroll bugs across complex vehicle specification comparison tables.'
      ],
      verified_outcomes: [
        'Clear increase in mobile quote requests driven by friction-free booking inquiry flows.',
        'Sub-2 second initial page render times despite heavy media requirements.',
        'Positive client feedback praising the ease of updating service pricing and gallery pictures.'
      ],
      gallery_images: [
        'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80'
      ],
      featured: true,
      completion_year: '2022 - 2023',
      is_verified: true,
      notes_for_review: 'Verified contribution: page builder implementation, interactive gallery components, and responsive mobile optimization.'
    }
  },
  {
    id: 4,
    slug: 'journalism-mentors',
    title: { rendered: 'Journalism Mentors — Mentorship & Professional Network' },
    excerpt: {
      rendered: 'Nonprofit educational directory connecting emerging journalists with veteran media professionals through searchable mentor profiles and booking flows.'
    },
    featured_media_url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    category: 'WordPress Development',
    acf: {
      client_or_industry: 'Nonprofit Educational Network',
      project_type: 'Directory Platform & Mentor Booking Hub',
      services_provided: [
        'Custom Post Types & ACF Field Modeling',
        'Facet & Filter Directory Architecture',
        'Mentor Profile Page Templates',
        'Calendly / Scheduling Embed Integration',
        'Accessibility & Screen-Reader Optimization'
      ],
      technologies_used: [
        'WordPress',
        'PHP & MySQL',
        'Advanced Custom Fields (ACF)',
        'Custom Taxonomy Modeling',
        'Calendly Embed API',
        'Custom CSS'
      ],
      live_url: 'https://journalismmentors.com',
      verified_contribution: 'Architected the custom `mentor` post type and corresponding ACF fields (beats, publications, mentorship availability, scheduling link), created responsive profile cards with live search filtering, and integrated automated appointment scheduling.',
      overview: 'Journalism Mentors provides free mentorship sessions to early-career and underrepresented journalists. The site required an intuitive, approachable directory where mentees could filter mentors by newsroom beat (investigative, audio, broadcast, photojournalism) and book sessions with zero friction.',
      challenges: [
        'Managing hundreds of individual mentor profiles with varying levels of availability and specialties.',
        'Enabling fast, client-side or low-latency filtering across multiple taxonomic dimensions without cumbersome page refreshes.',
        'Ensuring the booking flow remained completely accessible to screen readers and keyboard-only navigators.'
      ],
      approach_and_implementation: [
        'Structured a centralized `mentor` Custom Post Type with dedicated taxonomies for "Media Beats", "News Organizations", and "Mentorship Type".',
        'Developed reusable profile card templates with standardized badge colors and headshot aspect ratios.',
        'Integrated seamless modal booking drawers embedding each mentor’s custom Calendly scheduling link.',
        'Created custom admin columns in the WordPress backend so site managers can quickly toggle mentor availability on and off.'
      ],
      key_features: [
        'Interactive real-time mentor directory filterable by journalism focus and expertise',
        'Dedicated mentor profile pages with biography, past reporting links, and booking widget',
        'Application submission portal for new volunteer mentors to register their credentials',
        'Automated confirmation email triggers and scheduling calendar sync',
        'WCAG 2.1 AA accessible color contrast and keyboard navigable controls'
      ],
      responsive_considerations: [
        'Collapsible filter drawer on mobile devices with sticky "Apply Filters" feedback button.',
        'Responsive grid transitioning smoothly from 4 columns on desktop to 2 columns on tablet and 1 column on mobile.',
        'Safe tap targets for all category filter pills and external biography links.'
      ],
      verified_outcomes: [
        'Enabled hundreds of fruitful mentorship connections between aspiring journalists and leading newsrooms.',
        'Reduced administrative overhead by 80% via self-serve profile availability toggles and direct calendar integrations.',
        'Zero reported accessibility or usability complaints across diverse user groups.'
      ],
      gallery_images: [
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80'
      ],
      featured: true,
      completion_year: '2023',
      is_verified: true,
      notes_for_review: 'Verified contribution: CPT & ACF architecture, directory templating, and scheduling integrations.'
    }
  },
  {
    id: 5,
    slug: 'fieldnine-group',
    title: { rendered: 'Field Nine Group — Corporate Advisory & Asset Management' },
    excerpt: {
      rendered: 'Sophisticated corporate digital presence developed from Figma mockups, featuring restrained typography, architectural grid structures, and multi-service showcases.'
    },
    featured_media_url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    category: 'WordPress Development',
    acf: {
      client_or_industry: 'Corporate Real Estate & Investment Advisory',
      project_type: 'Corporate Brand Identity & Service Showcase',
      services_provided: [
        'Figma to WordPress Development',
        'Custom Theme Template Assembly',
        'Page Builder Precision Styling',
        'Cross-Browser & Device Compatibility QA',
        'Client Handover & Documentation Guides'
      ],
      technologies_used: [
        'WordPress',
        'Figma to Web',
        'Elementor / Divi Customization',
        'Modern CSS Flexbox & Grid',
        'Responsive Web Design'
      ],
      live_url: 'https://fieldninegroup.com',
      verified_contribution: 'Translated Figma design files into pixel-accurate WordPress templates, implemented subtle scroll interactions, tested across modern desktop and mobile browsers, and authored comprehensive client editing documentation.',
      overview: 'Field Nine Group advises institutional investors and developers on strategic real estate ventures. The web presence needed to convey quiet authority, structural integrity, and institutional trust through crisp alignments and understated interactive details.',
      challenges: [
        'Translating nuanced asymmetric grid alignments from Figma into responsive CSS that behaves predictably across unusual desktop resolutions (1440px to 4K).',
        'Maintaining clean, unbloated markup within a page builder ecosystem.',
        'Providing the non-technical internal executive team with an intuitive backend experience for publishing corporate announcements.'
      ],
      approach_and_implementation: [
        'Built a custom design token system in CSS variables to ensure strict adherence to Figma spacing, typography, and monochromatic color values.',
        'Constructed custom template parts for corporate leadership bios, advisory service pillars, and representative transaction case studies.',
        'Rigidly audited DOM depth and eliminated redundant wrapper containers often generated by default builder configurations.',
        'Wrote a step-by-step PDF & video user guide detailing how to update portfolio transactions and upload press releases.'
      ],
      key_features: [
        'Asymmetrical architectural layout with generous breathing room and typographic refinement',
        'Interactive advisory services matrix with progressive content reveals',
        'Corporate leadership profiles featuring high-fidelity portrait photography',
        'Fast, accessible contact inquiry form with anti-spam honeypot security',
        'Strict adherence to institutional brand guidelines across all breakpoints'
      ],
      responsive_considerations: [
        'Fluid viewport-based padding preventing awkward text wrapping on laptop screens.',
        'Refined typography hierarchy tested on high-DPI retina displays and standard LCD panels.',
        'Clean mobile hamburger navigation with smooth transitions and high touch-target visibility.'
      ],
      verified_outcomes: [
        'Flawless sign-off from corporate stakeholders on pixel fidelity compared against original Figma files.',
        'Successful client onboarding with internal marketing team autonomously managing new announcements.',
        'Zero cross-browser rendering inconsistencies reported during multi-platform QA testing.'
      ],
      gallery_images: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80'
      ],
      featured: false,
      completion_year: '2022',
      is_verified: true,
      notes_for_review: 'Verified contribution: Figma design translation, responsive theme templating, and client user documentation.'
    }
  },
  {
    id: 6,
    slug: 'headless-wordpress-react-portfolio',
    title: { rendered: 'Headless WordPress + React — Modern Decoupled Portfolio' },
    excerpt: {
      rendered: 'High-performance decoupled web application combining WordPress as an editorial REST API backend with a custom React SPA frontend powered by Vite and Tailwind CSS.'
    },
    featured_media_url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    category: 'Headless WordPress & React',
    acf: {
      client_or_industry: 'Developer Engineering Architecture & Demonstration',
      project_type: 'Headless CMS Architecture & React Single-Page Application',
      services_provided: [
        'Headless WordPress Architecture Design',
        'WordPress REST API Endpoint Modeling',
        'ACF Pro REST API Field Registration',
        'React SPA Development with Vite & TypeScript',
        'Tailwind CSS Typography & Design System',
        'Client-Side Routing & State Management'
      ],
      technologies_used: [
        'Headless WordPress',
        'WordPress REST API',
        'React 19 & Vite',
        'TypeScript',
        'Tailwind CSS',
        'React Router DOM',
        'ACF Pro REST Extension',
        'Acherus Feral & Velour Web Fonts'
      ],
      live_url: 'https://ais-dev-pnd2q666cgzozrv5ap5tps-446732338429.asia-southeast1.run.app',
      verified_contribution: 'Designed and built the entire decoupled system from scratch: registered the custom WordPress REST API schemas, built the React component architecture, integrated custom typography fonts, created real-time live/mock API switching, and authored full developer deployment documentation.',
      overview: 'This project serves as both Raven Trisha Baluyot’s production portfolio and a live proof-of-concept demonstrating how modern WordPress developers can bridge traditional CMS authoring with cutting-edge frontend performance. By decoupling the presentation layer from WordPress PHP rendering, the application achieves instant client-side route transitions and pristine visual control.',
      challenges: [
        'Handling asynchronous WordPress REST API network latencies gracefully with loading skeletons, fallback states, and zero layout shift.',
        'Designing a flexible data normalizer capable of handling both raw WordPress core responses and enriched ACF custom fields without runtime errors.',
        'Retaining the editorial power of WordPress (Custom Post Types, media library, WYSIWYG editing) while executing an ultra-modern, editorial React design system.'
      ],
      approach_and_implementation: [
        'Constructed a centralized `wordpressApi.ts` service with automatic environment variable fallback (`VITE_WORDPRESS_API_URL`), request timeouts, and error handling.',
        'Implemented a dual-mode data adapter allowing seamless switching between live public WordPress REST endpoints and structured in-memory mock datasets for local development.',
        'Integrated proprietary custom web fonts (`Acherus Feral` and `Velour`) via modern `@font-face` definitions for distinct editorial presence.',
        'Utilized React Router for instant SPA navigation without full page reloads, accompanied by scroll-to-top automation and route-level meta tag updates.'
      ],
      key_features: [
        'Decoupled architecture: WordPress manages content; React renders the interactive UI',
        'Real-time WordPress REST API Explorer with live endpoint switcher & JSON response viewer',
        'Filterable portfolio grid with animated category switching and responsive layouts',
        'In-depth technical case study template displaying challenges, solutions, and code architecture',
        'Interactive developer contact form with client-side validation and instant feedback',
        'Custom typography pairing featuring Horizon Type Acherus Feral and Velour Serif'
      ],
      responsive_considerations: [
        'Responsive navigation with mobile drawer and keyboard accessibility.',
        'Fluid typography and margin tokens scaling gracefully from mobile phones (375px) to wide 4K displays.',
        'Strict mobile-first layout rules ensuring zero horizontal scrollbars across all screen widths.'
      ],
      verified_outcomes: [
        'Near-instantaneous route transitions and silky 60fps scrolling performance.',
        'Full decoupling enables hosting the frontend on modern edge static networks (Vercel, Netlify) with minimal hosting costs.',
        'Direct tangible proof of senior-level capability spanning both classical WordPress and modern React ecosystems.'
      ],
      gallery_images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80'
      ],
      featured: true,
      completion_year: '2025 - 2026',
      is_verified: true,
      notes_for_review: 'Production headless implementation demonstrated directly within this application.'
    }
  }
];

export const PROJECT_CATEGORIES = [
  'All Projects',
  'WordPress Development',
  'Elementor & Page Builders',
  'Custom Theme Development',
  'Headless WordPress & React',
  'Landing Pages & Integrations'
] as const;
