import React, { useState } from 'react';
import { ArrowLeft, Clock, Calendar, User, Share2, Bookmark, Check, MessageSquare } from 'lucide-react';
import { WPPost, ThemeSettings } from '../types/wordpress';

interface ArticleViewProps {
  post: WPPost;
  onBack: () => void;
  settings: ThemeSettings;
  relatedPosts: WPPost[];
  onSelectPost: (post: WPPost) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  post,
  onBack,
  settings,
  relatedPosts,
  onSelectPost,
}) => {
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Julian Thorne',
      date: '2 hours ago',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
      text: 'The geometric rhythm in the heading paired with Velour serif is sublime. Exactly how independent digital publications ought to look.'
    }
  ]);
  const [newComment, setNewComment] = useState('');

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setComments([
      ...comments,
      {
        id: Date.now(),
        author: 'Guest Reader',
        date: 'Just now',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
        text: newComment.trim()
      }
    ]);
    setNewComment('');
  };

  const headingFontClass = settings.headingFont === 'acherus' ? 'font-heading' : 'font-sans';
  const bodyFontClass = settings.bodyFont === 'velour' ? 'font-velour' : 'font-serif';

  return (
    <article className="max-w-4xl mx-auto px-4 py-8 space-y-10">
      {/* Back button and article meta toolbar */}
      <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-4 text-xs">
        <button
          onClick={onBack}
          className="flex items-center space-x-1.5 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Magazine Feed</span>
        </button>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setBookmarked(!bookmarked)}
            className={`p-1.5 rounded transition-colors ${
              bookmarked ? 'text-amber-600 bg-amber-50 dark:bg-amber-950/40' : 'text-stone-400 hover:text-stone-700'
            }`}
            title="Save article"
          >
            <Bookmark className="w-4 h-4" />
          </button>
          <button
            onClick={handleShare}
            className="p-1.5 rounded text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 flex items-center space-x-1"
            title="Copy link"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Article Header */}
      <header className="space-y-6 text-center max-w-3xl mx-auto">
        <div className="flex items-center justify-center space-x-2 text-xs uppercase tracking-widest text-amber-700 dark:text-amber-400 font-semibold">
          <span>{post.category}</span>
          <span>•</span>
          <span>{post.reading_time}</span>
        </div>

        <h1
          className={`text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 dark:text-white leading-tight ${headingFontClass}`}
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        <div className="flex items-center justify-center space-x-3 text-xs text-stone-500 pt-2 border-t border-stone-200/60 dark:border-stone-800/60 max-w-md mx-auto">
          <div className="flex items-center space-x-2">
            <img
              src={post.author_avatar}
              alt={post.author_name}
              className="w-7 h-7 rounded-full object-cover"
            />
            <span className="font-medium text-stone-700 dark:text-stone-300">{post.author_name}</span>
          </div>
          <span>•</span>
          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
        </div>
      </header>

      {/* Featured Media */}
      <div className="rounded-2xl overflow-hidden shadow-sm border border-stone-200 dark:border-stone-800 h-80 sm:h-[460px]">
        <img
          src={post.featured_media_url}
          alt={post.title.rendered}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Body */}
      <div className="max-w-2xl mx-auto">
        <div
          className={`prose prose-stone dark:prose-invert max-w-none text-base sm:text-lg text-stone-800 dark:text-stone-200 leading-relaxed ${bodyFontClass} space-y-6 [&>h2]:text-2xl [&>h2]:sm:text-3xl [&>h2]:font-bold [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:font-heading [&>blockquote]:border-l-4 [&>blockquote]:border-amber-600 [&>blockquote]:pl-6 [&>blockquote]:py-2 [&>blockquote]:italic [&>blockquote]:text-xl [&>blockquote]:my-8 [&>blockquote]:bg-amber-50/40 dark:[&>blockquote]:bg-amber-950/20 [&>blockquote]:rounded-r-lg`}
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-6 border-t border-stone-200 dark:border-stone-800 flex flex-wrap gap-2 items-center">
            <span className="text-xs text-stone-500 font-medium">Tags:</span>
            {post.tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-xs rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-mono"
              >
                #{t}
              </span>
            ))}
          </div>
        )}

        {/* Author Bio Box */}
        <div className="mt-10 p-6 rounded-xl bg-stone-100 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 flex items-start space-x-4">
          <img
            src={post.author_avatar}
            alt={post.author_name}
            className="w-12 h-12 rounded-full object-cover shrink-0"
          />
          <div className="space-y-1">
            <div className="font-bold text-sm text-stone-900 dark:text-white">
              Written by {post.author_name}
            </div>
            <p className="text-xs font-velour text-stone-600 dark:text-stone-400 leading-relaxed">
              Designer, typographer and creative technologist exploring responsive publishing systems and classical editorial craft.
            </p>
          </div>
        </div>

        {/* Comments Section */}
        <section className="mt-12 pt-8 border-t border-stone-200 dark:border-stone-800 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className={`text-xl font-bold text-stone-900 dark:text-white flex items-center space-x-2 ${headingFontClass}`}>
              <MessageSquare className="w-5 h-5 text-amber-600" />
              <span>Discussion ({comments.length})</span>
            </h3>
          </div>

          {/* Comment Form */}
          <form onSubmit={handleAddComment} className="space-y-3">
            <textarea
              rows={3}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Leave a reflection on this dispatch..."
              className="w-full p-3 text-sm rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!newComment.trim()}
                className="px-4 py-2 bg-[#2271b1] hover:bg-[#135e96] disabled:opacity-50 text-white rounded-lg text-xs font-medium transition-all"
              >
                Post Response
              </button>
            </div>
          </form>

          {/* Comments List */}
          <div className="space-y-4 pt-2">
            {comments.map((c) => (
              <div
                key={c.id}
                className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-2"
              >
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <img src={c.avatar} alt={c.author} className="w-5 h-5 rounded-full object-cover" />
                    <span className="font-semibold text-stone-800 dark:text-stone-200">{c.author}</span>
                  </div>
                  <span className="text-stone-400">{c.date}</span>
                </div>
                <p className="text-sm font-velour text-stone-700 dark:text-stone-300 leading-relaxed">
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Related Dispatches */}
      {relatedPosts.length > 0 && (
        <aside className="mt-16 pt-12 border-t border-stone-200 dark:border-stone-800 space-y-6">
          <h3 className={`text-2xl font-bold text-stone-900 dark:text-white ${headingFontClass}`}>
            Related Dispatches
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.slice(0, 2).map((rel) => (
              <div
                key={rel.id}
                onClick={() => onSelectPost(rel)}
                className="group cursor-pointer flex gap-4 p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:shadow-md transition-all"
              >
                <img
                  src={rel.featured_media_url}
                  alt={rel.title.rendered}
                  className="w-24 h-24 object-cover rounded-lg shrink-0 group-hover:scale-105 transition-transform"
                />
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                    {rel.category}
                  </span>
                  <h4
                    className={`font-bold text-sm text-stone-900 dark:text-white group-hover:text-amber-600 transition-colors line-clamp-2 ${headingFontClass}`}
                    dangerouslySetInnerHTML={{ __html: rel.title.rendered }}
                  />
                  <span className="text-xs text-stone-400 block">{rel.reading_time}</span>
                </div>
              </div>
            ))}
          </div>
        </aside>
      )}
    </article>
  );
};
