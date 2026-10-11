import React, { useState } from 'react';
import { 
  Plus, 
  Trash2, 
  ArrowUp, 
  ArrowDown, 
  Heading as HeadingIcon, 
  AlignLeft, 
  Quote, 
  Image as ImageIcon, 
  Layers, 
  Code, 
  Check, 
  Eye, 
  Edit3,
  Sparkles
} from 'lucide-react';
import { GutenbergBlock, WPPost } from '../types/wordpress';

interface BlockEditorProps {
  onPublishPost: (post: WPPost) => void;
  onCancel: () => void;
}

export const BlockEditor: React.FC<BlockEditorProps> = ({ onPublishPost, onCancel }) => {
  const [title, setTitle] = useState('New Editorial Perspective on Organic Craft');
  const [category, setCategory] = useState('Typography & Form');
  const [readingTime, setReadingTime] = useState('4 min read');
  const [featuredImage, setFeaturedImage] = useState(
    'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80'
  );
  const [isPreview, setIsPreview] = useState(false);
  const [published, setPublished] = useState(false);

  const [blocks, setBlocks] = useState<GutenbergBlock[]>([
    {
      id: 'block-1',
      type: 'paragraph',
      content:
        'When designing digital broadsheets, typographic pacing takes precedence over decorative excess. Here, every line break and indent allows the editorial voice to breathe.',
      attributes: { align: 'left', fontFamily: 'velour' }
    },
    {
      id: 'block-2',
      type: 'heading',
      content: 'The Architecture of Balanced Whitespace',
      attributes: { level: 2, fontFamily: 'acherus' }
    },
    {
      id: 'block-3',
      type: 'quote',
      content:
        'A typeface is not merely an alphabet; it is the atmospheric temperature of the page.',
      attributes: { caption: 'Raven Baluyot, TestWordPress Notes' }
    },
    {
      id: 'block-4',
      type: 'paragraph',
      content:
        'The juxtaposition of Acherus Feral in titles against Velour in body paragraphs establishes a dialogue between mid-century architectural geometry and classical European book craftsmanship.',
      attributes: { fontFamily: 'velour' }
    }
  ]);

  const addBlock = (type: GutenbergBlock['type']) => {
    const newId = `block-${Date.now()}`;
    let newBlock: GutenbergBlock;

    switch (type) {
      case 'heading':
        newBlock = {
          id: newId,
          type: 'heading',
          content: 'New Section Heading',
          attributes: { level: 2, fontFamily: 'acherus' }
        };
        break;
      case 'quote':
        newBlock = {
          id: newId,
          type: 'quote',
          content: 'Insert memorable quotation or thesis statement here.',
          attributes: { caption: 'Citation or speaker' }
        };
        break;
      case 'image':
        newBlock = {
          id: newId,
          type: 'image',
          content:
            'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
          attributes: { caption: 'Studio documentation, natural daylight.' }
        };
        break;
      case 'cover':
        newBlock = {
          id: newId,
          type: 'cover',
          content: 'Sublime Spaces & Typography',
          attributes: {
            bgUrl:
              'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
          }
        };
        break;
      case 'code':
        newBlock = {
          id: newId,
          type: 'code',
          content: '// WordPress theme functions\nadd_theme_support("editor-styles");\nadd_editor_style("custom-fonts.css");'
        };
        break;
      default:
        newBlock = {
          id: newId,
          type: 'paragraph',
          content: 'Start writing your next paragraph in tactile Velour serif...',
          attributes: { fontFamily: 'velour' }
        };
    }

    setBlocks([...blocks, newBlock]);
  };

  const moveBlock = (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index === 0) return;
    if (direction === 'down' && index === blocks.length - 1) return;

    const newBlocks = [...blocks];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    const temp = newBlocks[index];
    newBlocks[index] = newBlocks[targetIndex];
    newBlocks[targetIndex] = temp;
    setBlocks(newBlocks);
  };

  const removeBlock = (id: string) => {
    setBlocks(blocks.filter((b) => b.id !== id));
  };

  const updateBlockContent = (id: string, content: string) => {
    setBlocks(blocks.map((b) => (b.id === id ? { ...b, content } : b)));
  };

  const handlePublish = () => {
    // Generate HTML content from blocks
    const renderedHtml = blocks
      .map((b) => {
        if (b.type === 'heading') return `<h2>${b.content}</h2>`;
        if (b.type === 'quote')
          return `<blockquote><p>${b.content}</p><cite>${b.attributes?.caption || ''}</cite></blockquote>`;
        if (b.type === 'image')
          return `<figure><img src="${b.content}" alt="Media" /><figcaption>${b.attributes?.caption || ''}</figcaption></figure>`;
        if (b.type === 'code') return `<pre><code>${b.content}</code></pre>`;
        return `<p>${b.content}</p>`;
      })
      .join('\n');

    const newPost: WPPost = {
      id: Date.now(),
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      title: { rendered: title },
      excerpt: {
        rendered: blocks[0]?.content.slice(0, 160) + '...' || 'New editorial story published via Gutenberg editor.'
      },
      content: { rendered: renderedHtml },
      date: new Date().toISOString(),
      author_name: 'Raven Baluyot',
      author_avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      category: category,
      reading_time: readingTime,
      featured_media_url: featuredImage,
      tags: ['WordPress', 'Acherus Feral', 'Velour']
    };

    setPublished(true);
    setTimeout(() => {
      onPublishPost(newPost);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-950 pb-20">
      {/* Editor Sub-Header Toolbar */}
      <div className="sticky top-9 z-40 bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5 text-xs text-stone-600 dark:text-stone-400">
            <span className="font-semibold text-stone-900 dark:text-stone-100">Gutenberg Block Editor</span>
            <span>•</span>
            <span className="text-amber-600 dark:text-amber-400 font-mono text-[11px]">Acherus & Velour Mode</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-xs">
          <button
            onClick={() => setIsPreview(!isPreview)}
            className={`px-3 py-1.5 rounded flex items-center space-x-1.5 transition-colors ${
              isPreview
                ? 'bg-stone-200 dark:bg-stone-800 text-stone-900 dark:text-white font-medium'
                : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800'
            }`}
          >
            {isPreview ? <Edit3 className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>{isPreview ? 'Edit Mode' : 'Live Preview'}</span>
          </button>

          <button
            onClick={onCancel}
            className="px-3 py-1.5 rounded text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800"
          >
            Cancel
          </button>

          <button
            onClick={handlePublish}
            disabled={published || !title.trim()}
            className="px-4 py-1.5 bg-[#2271b1] hover:bg-[#135e96] disabled:opacity-50 text-white rounded font-medium flex items-center space-x-1.5 transition-all shadow-xs"
          >
            {published ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Published!</span>
              </>
            ) : (
              <span>Publish Post</span>
            )}
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-8">
        {/* Post Metadata Settings */}
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-6 shadow-xs mb-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block text-stone-500 dark:text-stone-400 mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100"
              >
                <option>Typography & Form</option>
                <option>Architecture</option>
                <option>Digital Culture</option>
                <option>Craft & Material</option>
              </select>
            </div>
            <div>
              <label className="block text-stone-500 dark:text-stone-400 mb-1">Estimated Reading Time</label>
              <input
                type="text"
                value={readingTime}
                onChange={(e) => setReadingTime(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100"
              />
            </div>
            <div>
              <label className="block text-stone-500 dark:text-stone-400 mb-1">Featured Hero Image URL</label>
              <input
                type="text"
                value={featuredImage}
                onChange={(e) => setFeaturedImage(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 truncate"
              />
            </div>
          </div>
        </div>

        {/* Article Title Input (rendered in Acherus Feral Bold) */}
        <div className="mb-8">
          <label className="block text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2">
            Post Title (Acherus Feral Bold)
          </label>
          <textarea
            rows={2}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-transparent text-3xl sm:text-5xl font-heading font-bold text-stone-900 dark:text-white border-b-2 border-stone-200 dark:border-stone-800 focus:border-amber-600 focus:outline-none resize-none placeholder:text-stone-300 dark:placeholder:text-stone-700 leading-tight"
            placeholder="Add title..."
          />
        </div>

        {/* Preview or Edit Area */}
        {isPreview ? (
          /* Live Render Preview */
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-8 sm:p-12 shadow-sm space-y-6">
            <div className="h-64 sm:h-80 rounded-lg overflow-hidden mb-6">
              <img src={featuredImage} alt="Featured" className="w-full h-full object-cover" />
            </div>

            {blocks.map((block) => (
              <div key={block.id}>
                {block.type === 'heading' && (
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-stone-900 dark:text-white mt-6 mb-3">
                    {block.content}
                  </h2>
                )}
                {block.type === 'paragraph' && (
                  <p className="text-base sm:text-lg font-velour text-stone-800 dark:text-stone-200 leading-relaxed my-4">
                    {block.content}
                  </p>
                )}
                {block.type === 'quote' && (
                  <blockquote className="my-6 border-l-4 border-amber-600 pl-5 py-2 italic text-lg sm:text-xl font-velour text-stone-900 dark:text-stone-100 bg-amber-50/30 dark:bg-amber-950/20 rounded-r-lg">
                    "{block.content}"
                    {block.attributes?.caption && (
                      <cite className="block text-xs not-italic font-sans text-stone-500 mt-2 font-medium">
                        — {block.attributes.caption}
                      </cite>
                    )}
                  </blockquote>
                )}
                {block.type === 'image' && (
                  <figure className="my-6">
                    <img src={block.content} alt="Media" className="rounded-lg w-full max-h-96 object-cover" />
                    {block.attributes?.caption && (
                      <figcaption className="text-xs text-stone-500 text-center mt-2 font-velour">
                        {block.attributes.caption}
                      </figcaption>
                    )}
                  </figure>
                )}
                {block.type === 'code' && (
                  <pre className="my-4 p-4 rounded-lg bg-stone-950 text-amber-200 font-mono text-xs overflow-x-auto">
                    <code>{block.content}</code>
                  </pre>
                )}
              </div>
            ))}
          </div>
        ) : (
          /* Gutenberg Blocks List */
          <div className="space-y-4">
            {blocks.map((block, index) => (
              <div
                key={block.id}
                className="group relative bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-5 shadow-xs transition-all hover:border-amber-500/60"
              >
                {/* Block header bar */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-100 dark:border-stone-800/80 text-xs text-stone-500">
                  <div className="flex items-center space-x-2">
                    {block.type === 'heading' && <HeadingIcon className="w-3.5 h-3.5 text-amber-600" />}
                    {block.type === 'paragraph' && <AlignLeft className="w-3.5 h-3.5 text-stone-600" />}
                    {block.type === 'quote' && <Quote className="w-3.5 h-3.5 text-purple-600" />}
                    {block.type === 'image' && <ImageIcon className="w-3.5 h-3.5 text-blue-600" />}
                    {block.type === 'code' && <Code className="w-3.5 h-3.5 text-emerald-600" />}
                    <span className="capitalize font-medium text-stone-700 dark:text-stone-300">
                      {block.type} Block
                    </span>
                    <span className="text-[10px] text-stone-400 font-mono">
                      {block.type === 'heading' ? 'Acherus Feral' : 'Velour'}
                    </span>
                  </div>

                  {/* Block Actions */}
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => moveBlock(index, 'up')}
                      disabled={index === 0}
                      className="p-1 hover:bg-stone-100 dark:hover:bg-stone-800 disabled:opacity-30 rounded text-stone-500"
                      title="Move Up"
                    >
                      <ArrowUp className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => moveBlock(index, 'down')}
                      disabled={index === blocks.length - 1}
                      className="p-1 hover:bg-stone-100 dark:hover:bg-stone-800 disabled:opacity-30 rounded text-stone-500"
                      title="Move Down"
                    >
                      <ArrowDown className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => removeBlock(block.id)}
                      className="p-1 hover:bg-red-50 dark:hover:bg-red-950/30 text-stone-400 hover:text-red-600 rounded ml-1"
                      title="Delete Block"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Block Content Editor */}
                {block.type === 'heading' ? (
                  <input
                    type="text"
                    value={block.content}
                    onChange={(e) => updateBlockContent(block.id, e.target.value)}
                    className="w-full text-xl sm:text-2xl font-heading font-bold text-stone-900 dark:text-white bg-transparent focus:outline-none"
                    placeholder="Enter section heading..."
                  />
                ) : block.type === 'quote' ? (
                  <div className="space-y-2">
                    <textarea
                      rows={2}
                      value={block.content}
                      onChange={(e) => updateBlockContent(block.id, e.target.value)}
                      className="w-full text-base sm:text-lg font-velour italic text-stone-900 dark:text-stone-100 bg-stone-50 dark:bg-stone-950 p-3 rounded-lg border border-stone-200 dark:border-stone-800 focus:outline-none"
                      placeholder="Quote copy..."
                    />
                    <input
                      type="text"
                      value={block.attributes?.caption || ''}
                      onChange={(e) => {
                        const newCaption = e.target.value;
                        setBlocks(
                          blocks.map((b) =>
                            b.id === block.id
                              ? { ...b, attributes: { ...b.attributes, caption: newCaption } }
                              : b
                          )
                        );
                      }}
                      className="w-full text-xs font-sans text-stone-500 bg-transparent focus:outline-none pl-2"
                      placeholder="Attribution / Citation author..."
                    />
                  </div>
                ) : block.type === 'code' ? (
                  <textarea
                    rows={3}
                    value={block.content}
                    onChange={(e) => updateBlockContent(block.id, e.target.value)}
                    className="w-full font-mono text-xs bg-stone-950 text-amber-200 p-3 rounded-lg focus:outline-none"
                  />
                ) : block.type === 'image' ? (
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={block.content}
                      onChange={(e) => updateBlockContent(block.id, e.target.value)}
                      className="w-full text-xs font-mono bg-stone-50 dark:bg-stone-950 p-2 rounded border border-stone-200 dark:border-stone-800"
                      placeholder="Image URL..."
                    />
                    {block.content && (
                      <img src={block.content} alt="Preview" className="h-32 object-cover rounded-md" />
                    )}
                  </div>
                ) : (
                  <textarea
                    rows={3}
                    value={block.content}
                    onChange={(e) => updateBlockContent(block.id, e.target.value)}
                    className="w-full text-base font-velour text-stone-800 dark:text-stone-200 leading-relaxed bg-transparent focus:outline-none resize-none"
                    placeholder="Type paragraph text..."
                  />
                )}
              </div>
            ))}

            {/* Block Inserter Bar */}
            <div className="bg-stone-200/70 dark:bg-stone-900/60 border border-dashed border-stone-300 dark:border-stone-700 rounded-xl p-4 text-center">
              <span className="text-xs font-semibold text-stone-600 dark:text-stone-400 block mb-3">
                Insert Gutenberg Block
              </span>
              <div className="flex flex-wrap justify-center gap-2 text-xs">
                <button
                  onClick={() => addBlock('paragraph')}
                  className="px-3 py-1.5 bg-white dark:bg-stone-800 hover:bg-stone-50 rounded-lg border border-stone-200 dark:border-stone-700 flex items-center space-x-1.5 text-stone-700 dark:text-stone-200 shadow-xs"
                >
                  <AlignLeft className="w-3.5 h-3.5 text-stone-500" />
                  <span>Paragraph (Velour)</span>
                </button>
                <button
                  onClick={() => addBlock('heading')}
                  className="px-3 py-1.5 bg-white dark:bg-stone-800 hover:bg-stone-50 rounded-lg border border-stone-200 dark:border-stone-700 flex items-center space-x-1.5 text-stone-700 dark:text-stone-200 shadow-xs"
                >
                  <HeadingIcon className="w-3.5 h-3.5 text-amber-600" />
                  <span>Heading (Acherus)</span>
                </button>
                <button
                  onClick={() => addBlock('quote')}
                  className="px-3 py-1.5 bg-white dark:bg-stone-800 hover:bg-stone-50 rounded-lg border border-stone-200 dark:border-stone-700 flex items-center space-x-1.5 text-stone-700 dark:text-stone-200 shadow-xs"
                >
                  <Quote className="w-3.5 h-3.5 text-purple-600" />
                  <span>Pullquote</span>
                </button>
                <button
                  onClick={() => addBlock('image')}
                  className="px-3 py-1.5 bg-white dark:bg-stone-800 hover:bg-stone-50 rounded-lg border border-stone-200 dark:border-stone-700 flex items-center space-x-1.5 text-stone-700 dark:text-stone-200 shadow-xs"
                >
                  <ImageIcon className="w-3.5 h-3.5 text-blue-600" />
                  <span>Image Media</span>
                </button>
                <button
                  onClick={() => addBlock('code')}
                  className="px-3 py-1.5 bg-white dark:bg-stone-800 hover:bg-stone-50 rounded-lg border border-stone-200 dark:border-stone-700 flex items-center space-x-1.5 text-stone-700 dark:text-stone-200 shadow-xs"
                >
                  <Code className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Code Snippet</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
