# Raven Trisha Baluyot — Senior WordPress & Headless React Developer Portfolio

A production-quality developer portfolio application designed to showcase custom WordPress development, page builder implementation (Elementor, Divi, WPBakery), website maintenance, and decoupled Headless WordPress + React architecture.

---

## 1. Overview & Architecture

This application decouples the content management layer from the presentation layer:

- **Frontend:** React 19 SPA built with Vite, TypeScript, and Tailwind CSS.
- **Backend CMS:** WordPress as a Headless CMS delivering structured content via the WordPress REST API (`/wp-json/wp/v2/`).
- **Typography:** Custom web fonts bundled in the repository:
  - `Horizon Type: Acherus Feral` (Bold 700 & Light 300) for high-impact headlines and mastheads.
  - `Velour` (Regular 400 & Medium 500) for sustained long-form editorial reading.
- **Routing:** React Router with client-side transitions and zero page reload lag.
- **Resilient Data Layer:** Dual-mode API adapter (`wordpressApi.ts`) that smoothly toggles between live remote WordPress endpoints and local verified ACF mock data for offline/development environments.

---

## 2. Developer Background

- **Developer:** Raven Trisha Baluyot
- **Location:** City of Dasmariñas, Cavite, Philippines (UTC+8)
- **Title:** WordPress Developer | Headless WordPress & React Developer
- **Experience:** ~5 Years of WordPress experience across white-label agencies.
  - **Growmodo** (Feb 2022 – Present): WordPress Developer.
  - **Go Crayons** (May 2021 – Jan 2022): WordPress Developer & Project Manager.
  - **Education:** BS in Information Technology, Cavite State University (2018).

---

## 3. Verified Portfolio Projects

1. **Yellow Tail Tech** (`https://yellowtail.tech`)
   - Marketing website & IT career accelerator funnel.
   - Technologies: WordPress, Elementor Pro, Custom PHP & CSS, GoHighLevel Forms, Responsive Design.
2. **Influencer Journalism** (`https://influencerjournalism.com`)
   - Digital publication & essay archive.
   - Technologies: WordPress, Custom Theme Hierarchy, Advanced Custom Fields, Speed Optimization.
3. **EightyEight Detailing** (`https://eightyeightdetailing.com.au`)
   - Luxury automotive detailing & inquiry portal.
   - Technologies: WordPress, Elementor / WPBakery, Custom CSS, Before/After image components, Local SEO.
4. **Journalism Mentors** (`https://journalismmentors.com`)
   - Nonprofit directory & mentorship booking hub.
   - Technologies: WordPress, Custom Post Types, Advanced Custom Fields, Calendly Integrations.
5. **Field Nine Group** (`https://fieldninegroup.com`)
   - Corporate real estate & advisory showcase.
   - Technologies: WordPress, Figma to WordPress, Elementor / Divi, Responsive Typography.
6. **Headless WordPress + React (This Portfolio)**
   - Decoupled single-page application demonstrating modern REST API consumption, client-side routing, and custom font integration.

---

## 4. Environment Variables

Create a `.env` file in the root directory:

```env
# Point to your WordPress REST API endpoint (defaults to mock fallback if unreachable)
VITE_WORDPRESS_API_URL=https://your-wordpress-domain.com/wp-json/wp/v2
```

---

## 5. WordPress Backend Configuration

To expose your WordPress Custom Post Type and Advanced Custom Fields to this React frontend, add the following snippet to your theme's `functions.php` or a custom site plugin:

```php
<?php
/**
 * Register 'portfolio_project' CPT with REST API exposure.
 */
add_action('init', function () {
    $labels = [
        'name'               => 'Portfolio Projects',
        'singular_name'      => 'Portfolio Project',
        'menu_name'          => 'Portfolio',
        'add_new'            => 'Add Project',
        'add_new_item'       => 'Add New Portfolio Project',
        'edit_item'          => 'Edit Portfolio Project',
        'all_items'          => 'All Projects',
    ];

    $args = [
        'labels'             => $labels,
        'public'             => true,
        'has_archive'        => true,
        'rewrite'            => ['slug' => 'projects'],
        'show_in_rest'       => true, // CRITICAL: Exposes to /wp-json/wp/v2/portfolio_project
        'rest_base'          => 'portfolio_project',
        'rest_controller_class' => 'WP_REST_Posts_Controller',
        'supports'           => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'],
        'menu_icon'          => 'dashicons-portfolio',
    ];

    register_post_type('portfolio_project', $args);
});

// Expose ACF Pro fields in REST responses
add_filter('acf/rest_api/portfolio_project/auto_enqueue', '__return_true');
```

---

## 6. Local Development & Build

```bash
# 1. Install dependencies
npm install

# 2. Run local development server (runs on port 3000)
npm run dev

# 3. Type check & lint
npm run lint

# 4. Production build
npm run build
```

---

## 7. Deployment

This React SPA is ready for static deployment on:
- **Vercel / Netlify / Cloudflare Pages:** Ensure client-side rewrites route all paths to `index.html`.
- **Google Cloud Run / Node.js 22:** Pre-configured for port 3000 container execution.
