import { WPPost } from '../types/wordpress';

export const INITIAL_POSTS: WPPost[] = [
  {
    id: 101,
    slug: 'the-art-of-modern-typographic-restraint',
    title: { rendered: 'The Art of Modern Typographic Restraint in Editorial Design' },
    excerpt: { rendered: 'Exploring how stark geometric letterforms and warm renaissance curves balance contemporary digital publications.' },
    content: {
      rendered: `
        <p>In contemporary editorial design, the relationship between typography and white space defines the emotional resonance of the narrative. When geometric structure meets supple humanist stroke, the reader experiences a rare visual stillness.</p>
        
        <h2>Architectural Geometry & Soft Humanism</h2>
        <p>The tension between <strong>Acherus Feral</strong>’s crisp geometric angles and <strong>Velour</strong>’s tactile, bookish warmth produces a reading rhythm tailored for long-form essays, luxury monographs, and contemplative criticism.</p>
        
        <blockquote>"Good typography is like glass: it can be crystal clear and transparent, or stained with deliberate, sculptural texture that alters how we view the sunlight beyond."</blockquote>
        
        <p>Modern WordPress installations often drown in generic sans-serif uniformities. Introducing deliberate, custom web-type foundry cuts restores the tangible elegance of print broadsheets while honoring responsive screen mechanics.</p>
        
        <h2>Grid Discipline & Organic Composition</h2>
        <p>A resilient grid permits asymmetric balance. Notice how generous margins allow the eye to rest between paragraphs, allowing delicate serif details to sing against bold heading statements.</p>
      `
    },
    date: '2026-10-08T14:30:00',
    author_name: 'Raven Baluyot',
    author_avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    category: 'Typography & Form',
    reading_time: '4 min read',
    featured_media_url: 'https://images.unsplash.com/photo-1507842229451-7f01be8610ce?auto=format&fit=crop&w=1200&q=80',
    tags: ['Acherus Feral', 'Velour', 'Design Systems', 'Gutenberg']
  },
  {
    id: 102,
    slug: 'architectural-silence-monolithic-spaces',
    title: { rendered: 'Monolithic Spaces: Where Brutalism Meets Organic Timber' },
    excerpt: { rendered: 'A photographic journey into subterranean galleries and alpine pavilions defined by raw materials and daylight.' },
    content: {
      rendered: `
        <p>Concrete cast against weathered spruce boards retains the grain of the forest inside stone walls. In the high Engadin valley, architects are reclaiming thermal mass without abandoning human warmth.</p>
        <h2>The Poetry of Raw Substrates</h2>
        <p>Textures tell histories faster than words. When daylight rakes across board-marked concrete, the surface shifts from neutral stone into a living canvas of subtle shadows.</p>
        <blockquote>"Architecture begins when you place two bricks carefully together. Beauty begins when the mortar disappears into the shadow."</blockquote>
      `
    },
    date: '2026-10-06T11:15:00',
    author_name: 'Elena Rostova',
    author_avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    category: 'Architecture',
    reading_time: '6 min read',
    featured_media_url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    tags: ['Architecture', 'Brutalism', 'Materials']
  },
  {
    id: 103,
    slug: 'curating-the-ephemeral-digital-archives',
    title: { rendered: 'Curating the Ephemeral: Building Resilient Digital Archives' },
    excerpt: { rendered: 'How independent publishers use headless WordPress and immutable static assets to protect cultural literature.' },
    content: {
      rendered: `
        <p>The modern web degrades rapidly. Links rot, databases drift, and themes become deprecated. Preserving digital journals requires decoupling editorial intent from fragile runtime dependencies.</p>
        <h2>Headless Architecture as Preservation</h2>
        <p>By treating the WordPress content repository as an archival backend and pairing it with high-fidelity web typography, independent curators preserve typographical fidelity across decades.</p>
      `
    },
    date: '2026-10-04T09:45:00',
    author_name: 'Marcus Vance',
    author_avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    category: 'Digital Culture',
    reading_time: '5 min read',
    featured_media_url: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80',
    tags: ['Headless WP', 'Archiving', 'Web Culture']
  },
  {
    id: 104,
    slug: 'botanical-shadows-and-ceramic-sculpture',
    title: { rendered: 'Botanical Shadows and Ceramic Forms in Southern Kyoto' },
    excerpt: { rendered: 'Inside the wood-fired kiln studios where centuries of clay craft meet experimental glaze chemistries.' },
    content: {
      rendered: `
        <p>Every firing inside an anagama kiln takes seven days of constant feeding with red pine timber. The resulting ash glaze is entirely unrepeatable—painted by flame alone.</p>
      `
    },
    date: '2026-10-01T16:20:00',
    author_name: 'Raven Baluyot',
    author_avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    category: 'Craft & Material',
    reading_time: '3 min read',
    featured_media_url: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=80',
    tags: ['Ceramics', 'Kyoto', 'Artisan']
  }
];

export const CATEGORIES = ['All Stories', 'Typography & Form', 'Architecture', 'Digital Culture', 'Craft & Material'];
