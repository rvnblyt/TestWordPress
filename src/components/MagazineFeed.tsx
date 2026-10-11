import React from 'react';
import { Calendar, Clock, User, ArrowRight, Tag, BookOpen } from 'lucide-react';
import { WPPost, ThemeSettings } from '../types/wordpress';

interface MagazineFeedProps {
  posts: WPPost[];
  categories: string[];
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  onSelectPost: (post: WPPost) => void;
  settings: ThemeSettings;
}

export const MagazineFeed: React.FC<MagazineFeedProps> = ({
  posts,
  categories,
  activeCategory,
  setActiveCategory,
  onSelectPost,
  settings
}) => {
  const filteredPosts =
    activeCategory === 'All Stories'
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const heroPost = filteredPosts[0];
  const secondaryPosts = filteredPosts.slice(1);

  const headingFontClass = settings.headingFont === 'acherus' ? 'font-heading' : 'font-sans';
  const bodyFontClass = settings.bodyFont === 'velour' ? 'font-velour' : 'font-serif';

  return (
    <div className="space-y-12 pb-16">
      {/* Editorial Masthead */}
      <header className="border-b border-stone-200 dark:border-stone-800 pt-8 pb-10 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-[11px] uppercase tracking-widest text-amber-700 dark:text-amber-400 font-semibold mb-2">
            Independent Editorial Journal • Vol. IV
          </div>
          <h1
            className={`text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-stone-900 dark:text-white ${headingFontClass}`}
            style={{ color: settings.primaryColor !== '#1c1917' ? settings.primaryColor : undefined }}
          >
            {settings.siteTitle}
          </h1>
          <p className={`text-base sm:text-lg text-stone-600 dark:text-stone-400 mt-3 max-w-xl mx-auto ${bodyFontClass}`}>
            {settings.tagline}
          </p>
        </div>

        {/* Category Navigation Bar */}
        <div className="mt-8 border-t border-b border-stone-200/80 dark:border-stone-800/80 py-2.5 overflow-x-auto">
          <div className="flex justify-center items-center space-x-2 sm:space-x-6 px-4 min-w-max text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-full transition-colors ${
                  activeCategory === cat
                    ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 font-medium'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-20 text-stone-500">
          <p className="text-sm font-velour">No articles found in this category.</p>
        </div>
      ) : (
        <main className="space-y-12">
          {/* Featured Hero Story */}
          {heroPost && (
            <article
              onClick={() => onSelectPost(heroPost)}
              className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-stone-900/60 p-6 sm:p-8 rounded-2xl border border-stone-200 dark:border-stone-800 hover:shadow-lg transition-all"
            >
              <div className="lg:col-span-7 overflow-hidden rounded-xl h-72 sm:h-96">
                <img
                  src={heroPost.featured_media_url}
                  alt={heroPost.title.rendered}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center space-x-2 text-xs text-amber-700 dark:text-amber-400 font-semibold uppercase tracking-wider">
                  <span>{heroPost.category}</span>
                  <span>•</span>
                  <span>{heroPost.reading_time}</span>
                </div>

                <h2
                  className={`text-2xl sm:text-4xl font-bold text-stone-900 dark:text-white group-hover:text-amber-600 transition-colors leading-tight ${headingFontClass}`}
                  dangerouslySetInnerHTML={{ __html: heroPost.title.rendered }}
                />

                <p
                  className={`text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed line-clamp-3 ${bodyFontClass}`}
                  dangerouslySetInnerHTML={{ __html: heroPost.excerpt.rendered }}
                />

                <div className="pt-2 flex items-center justify-between border-t border-stone-100 dark:border-stone-800 text-xs text-stone-500">
                  <div className="flex items-center space-x-2">
                    <img
                      src={heroPost.author_avatar}
                      alt={heroPost.author_name}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span className="font-medium text-stone-700 dark:text-stone-300">{heroPost.author_name}</span>
                  </div>
                  <span className="flex items-center space-x-1 text-amber-600 dark:text-amber-400 font-medium group-hover:translate-x-1 transition-transform">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          )}

          {/* Secondary Stories Grid */}
          {secondaryPosts.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-3">
                <h3 className={`text-xl font-bold text-stone-900 dark:text-white ${headingFontClass}`}>
                  Recent Dispatches
                </h3>
                <span className="text-xs text-stone-500">{secondaryPosts.length} Stories</span>
              </div>

              <div
                className={`grid gap-8 ${
                  settings.layoutStyle === 'minimal'
                    ? 'grid-cols-1 max-w-2xl mx-auto'
                    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                }`}
              >
                {secondaryPosts.map((post) => (
                  <article
                    key={post.id}
                    onClick={() => onSelectPost(post)}
                    className="group cursor-pointer flex flex-col bg-white dark:bg-stone-900/60 rounded-xl border border-stone-200 dark:border-stone-800 overflow-hidden hover:shadow-md transition-all"
                  >
                    <div className="h-52 overflow-hidden bg-stone-100 dark:bg-stone-800">
                      <img
                        src={post.featured_media_url}
                        alt={post.title.rendered}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs text-stone-500">
                          <span className="text-amber-700 dark:text-amber-400 font-medium uppercase tracking-wider text-[11px]">
                            {post.category}
                          </span>
                          <span>{post.reading_time}</span>
                        </div>

                        <h4
                          className={`text-xl font-bold text-stone-900 dark:text-white group-hover:text-amber-600 transition-colors leading-snug ${headingFontClass}`}
                          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        />

                        <p
                          className={`text-xs sm:text-sm text-stone-600 dark:text-stone-300 line-clamp-3 leading-relaxed ${bodyFontClass}`}
                          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                        />
                      </div>

                      <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs text-stone-500">
                        <span className="font-medium text-stone-700 dark:text-stone-300">{post.author_name}</span>
                        <span className="flex items-center space-x-1 text-amber-600 dark:text-amber-400 font-medium">
                          <span>Read</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </main>
      )}
    </div>
  );
};
