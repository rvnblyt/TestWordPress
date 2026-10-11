import React, { useState } from 'react';
import { Type, Sliders, Copy, Check, Sparkles, BookOpen } from 'lucide-react';

export const FontSpecimen: React.FC = () => {
  const [selectedFont, setSelectedFont] = useState<'acherus' | 'velour'>('acherus');
  const [activeWeight, setActiveWeight] = useState<string>('bold');
  const [fontSize, setFontSize] = useState<number>(44);
  const [letterSpacing, setLetterSpacing] = useState<number>(0);
  const [lineHeight, setLineHeight] = useState<number>(1.2);
  const [customText, setCustomText] = useState<string>(
    'Architecture is frozen music, etched in typographic silence.'
  );
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const pangrams = [
    'Architecture is frozen music, etched in typographic silence.',
    'Pack my box with five dozen liquor jugs & vintage porcelain.',
    'Sphinx of black quartz, judge my vow under the autumn moonlight.',
    'The quick brown fox jumps gracefully over the slumbering hound.',
    'Typography exists to honor content with clarity, rhythm and grace.'
  ];

  const glyphsUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const glyphsLower = 'abcdefghijklmnopqrstuvwxyz';
  const glyphsNum = '0123456789 .,:;!?&%$#@*()[]{}';

  const fontConfig = {
    acherus: {
      name: 'Horizon Type: Acherus Feral',
      classification: 'Geometric Editorial Sans-Serif',
      foundry: 'Horizon Type',
      files: ['Horizon-Type-AcherusFeral-Light.woff2', 'Horizon-Type-AcherusFeral-Bold.woff2'],
      weights: [
        { id: 'light', label: 'Light 300', cssWeight: 300 },
        { id: 'bold', label: 'Bold 700', cssWeight: 700 }
      ],
      description:
        'A striking contemporary geometric sans with high-fashion proportions, sharp terminals, and architectural clarity. Ideal for magazine mastheads, luxury identity, and commanding headlines.',
      bestPairing: 'Velour Medium or Garamond for editorial body'
    },
    velour: {
      name: 'Velour',
      classification: 'Contemporary Humanist Serif',
      foundry: 'Velour Type Specimen',
      files: ['Velour-Regular.woff2', 'Velour-medium.woff2'],
      weights: [
        { id: 'regular', label: 'Regular 400', cssWeight: 400 },
        { id: 'medium', label: 'Medium 500', cssWeight: 500 }
      ],
      description:
        'A warm, tactile serif designed for sustained long-form immersion. Subtle calligraphic bracketings and balanced optical kerning make reading effortless in bookish editorial layouts.',
      bestPairing: 'Acherus Feral Bold for titles and pullquotes'
    }
  };

  const currentConfig = fontConfig[selectedFont];

  const wpThemeSnippet = `/* WordPress theme.json / custom CSS snippet */
@font-face {
  font-family: 'Acherus Feral';
  src: url('/fonts/Horizon-Type-AcherusFeral-Bold.woff2') format('woff2');
  font-weight: 700;
  font-display: swap;
}
@font-face {
  font-family: 'Velour';
  src: url('/fonts/Velour-medium.woff2') format('woff2');
  font-weight: 500;
  font-display: swap;
}

/* In WordPress Gutenberg theme.json */
{
  "settings": {
    "typography": {
      "fontFamilies": [
        {
          "fontFamily": "'Acherus Feral', sans-serif",
          "slug": "acherus-feral",
          "name": "Acherus Feral"
        },
        {
          "fontFamily": "'Velour', Georgia, serif",
          "slug": "velour",
          "name": "Velour"
        }
      ]
    }
  }
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(wpThemeSnippet);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-10">
      {/* Intro Header */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-amber-700 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Repository Typographic Assets</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-stone-900 dark:text-white tracking-tight">
            Custom Font Specimen Lab
          </h1>
          <p className="text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-2xl font-velour">
            Real-time interactive testing and specimen inspector for the proprietary WOFF2 fonts bundled in this WordPress theme.
          </p>
        </div>

        {/* Font Selector Tabs */}
        <div className="flex bg-stone-200 dark:bg-stone-800 p-1 rounded-lg self-start md:self-auto">
          <button
            onClick={() => {
              setSelectedFont('acherus');
              setActiveWeight('bold');
            }}
            className={`px-4 py-2 rounded-md text-xs font-medium transition-all ${
              selectedFont === 'acherus'
                ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-white shadow-xs font-bold'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
            }`}
          >
            Acherus Feral (Headings)
          </button>
          <button
            onClick={() => {
              setSelectedFont('velour');
              setActiveWeight('medium');
            }}
            className={`px-4 py-2 rounded-md text-xs font-medium transition-all ${
              selectedFont === 'velour'
                ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-white shadow-xs font-medium font-serif'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
            }`}
          >
            Velour (Editorial Serif)
          </button>
        </div>
      </div>

      {/* Font Meta Details Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-stone-100 dark:bg-stone-900/60 p-6 rounded-xl border border-stone-200 dark:border-stone-800">
        <div className="md:col-span-2 space-y-2">
          <span className="text-xs uppercase tracking-wider font-semibold text-stone-500">
            {currentConfig.classification}
          </span>
          <h2 className="text-2xl font-bold text-stone-900 dark:text-white">
            {currentConfig.name}
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-velour">
            {currentConfig.description}
          </p>
        </div>

        <div className="border-t md:border-t-0 md:border-l border-stone-200 dark:border-stone-800 pt-4 md:pt-0 md:pl-6 space-y-3 text-xs">
          <div>
            <span className="text-stone-500 block">Available Bundled Cuts:</span>
            <div className="flex flex-wrap gap-2 mt-1">
              {currentConfig.weights.map((w) => (
                <button
                  key={w.id}
                  onClick={() => setActiveWeight(w.id)}
                  className={`px-2.5 py-1 rounded border text-xs font-medium transition-all ${
                    activeWeight === w.id
                      ? 'border-amber-600 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200'
                      : 'border-stone-300 dark:border-stone-700 text-stone-600 dark:text-stone-400'
                  }`}
                >
                  {w.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <span className="text-stone-500 block">Recommended Pairing:</span>
            <span className="font-medium text-stone-800 dark:text-stone-200">
              {currentConfig.bestPairing}
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Controls Bar */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-5 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs font-semibold text-stone-700 dark:text-stone-300">
            <Sliders className="w-4 h-4 text-amber-600" />
            <span>Interactive Type Controls</span>
          </div>
          {/* Quick Pangram Selector */}
          <div className="flex items-center space-x-1.5 overflow-x-auto py-1">
            <span className="text-[11px] text-stone-500 whitespace-nowrap">Presets:</span>
            {pangrams.slice(0, 3).map((p, idx) => (
              <button
                key={idx}
                onClick={() => setCustomText(p)}
                className="px-2 py-0.5 text-[11px] rounded bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 truncate max-w-[120px]"
              >
                Sample {idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 border-t border-stone-100 dark:border-stone-800 text-xs">
          <div>
            <div className="flex justify-between text-stone-500 mb-1">
              <span>Size</span>
              <span className="font-mono">{fontSize}px</span>
            </div>
            <input
              type="range"
              min="16"
              max="96"
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-full accent-amber-600"
            />
          </div>

          <div>
            <div className="flex justify-between text-stone-500 mb-1">
              <span>Tracking / Letter Spacing</span>
              <span className="font-mono">{letterSpacing}px</span>
            </div>
            <input
              type="range"
              min="-2"
              max="8"
              step="0.5"
              value={letterSpacing}
              onChange={(e) => setLetterSpacing(Number(e.target.value))}
              className="w-full accent-amber-600"
            />
          </div>

          <div>
            <div className="flex justify-between text-stone-500 mb-1">
              <span>Line Height</span>
              <span className="font-mono">{lineHeight}</span>
            </div>
            <input
              type="range"
              min="0.9"
              max="2.0"
              step="0.05"
              value={lineHeight}
              onChange={(e) => setLineHeight(Number(e.target.value))}
              className="w-full accent-amber-600"
            />
          </div>
        </div>

        {/* Editable Text Area */}
        <div className="pt-2">
          <label className="block text-[11px] text-stone-400 mb-1">Type or paste test text below:</label>
          <input
            type="text"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-stone-200 dark:border-stone-700 rounded-lg bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-amber-500"
            placeholder="Type custom specimen..."
          />
        </div>
      </div>

      {/* Live Specimen Stage */}
      <div className="bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl p-8 sm:p-12 shadow-sm min-h-[220px] flex items-center justify-center text-center overflow-x-hidden">
        <p
          className={`text-stone-900 dark:text-stone-100 transition-all ${
            selectedFont === 'acherus' ? 'font-heading' : 'font-velour'
          }`}
          style={{
            fontSize: `${fontSize}px`,
            letterSpacing: `${letterSpacing}px`,
            lineHeight: lineHeight,
            fontWeight:
              selectedFont === 'acherus'
                ? activeWeight === 'bold'
                  ? 700
                  : 300
                : activeWeight === 'medium'
                ? 500
                : 400
          }}
        >
          {customText}
        </p>
      </div>

      {/* Waterfall Scale Display */}
      <div className="space-y-4 bg-stone-50 dark:bg-stone-900/40 p-6 rounded-xl border border-stone-200 dark:border-stone-800">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 flex items-center space-x-1.5">
          <Type className="w-3.5 h-3.5" />
          <span>Typographic Waterfall Scale</span>
        </h3>
        <div className="space-y-6 pt-2 divide-y divide-stone-200/60 dark:divide-stone-800/60">
          {[64, 48, 36, 24, 18, 14].map((size) => (
            <div key={size} className="pt-4 flex flex-col md:flex-row md:items-baseline gap-2">
              <span className="w-16 shrink-0 font-mono text-[11px] text-stone-400">{size}px</span>
              <p
                className={`truncate text-stone-900 dark:text-stone-100 ${
                  selectedFont === 'acherus' ? 'font-heading' : 'font-velour'
                }`}
                style={{
                  fontSize: `${size}px`,
                  fontWeight:
                    selectedFont === 'acherus'
                      ? activeWeight === 'bold'
                        ? 700
                        : 300
                      : activeWeight === 'medium'
                      ? 500
                      : 400
                }}
              >
                {customText}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Character Glyph Matrix */}
      <div className="space-y-4 bg-white dark:bg-stone-900 p-6 rounded-xl border border-stone-200 dark:border-stone-800">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
          Glyph Set Inspector
        </h3>
        <div
          className={`space-y-4 text-stone-800 dark:text-stone-200 ${
            selectedFont === 'acherus' ? 'font-heading' : 'font-velour'
          }`}
          style={{
            fontWeight:
              selectedFont === 'acherus'
                ? activeWeight === 'bold'
                  ? 700
                  : 300
                : activeWeight === 'medium'
                ? 500
                : 400
          }}
        >
          <div>
            <span className="block text-[11px] text-stone-400 font-sans mb-1 font-normal">Majuscules</span>
            <div className="tracking-widest text-lg sm:text-xl break-all">{glyphsUpper}</div>
          </div>
          <div>
            <span className="block text-[11px] text-stone-400 font-sans mb-1 font-normal">Minuscules</span>
            <div className="tracking-widest text-lg sm:text-xl break-all">{glyphsLower}</div>
          </div>
          <div>
            <span className="block text-[11px] text-stone-400 font-sans mb-1 font-normal">Figures & Symbols</span>
            <div className="tracking-widest text-base sm:text-lg break-all">{glyphsNum}</div>
          </div>
        </div>
      </div>

      {/* WordPress Theme Integration Code */}
      <div className="bg-stone-900 text-stone-200 rounded-xl p-6 border border-stone-800 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs">
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span className="font-semibold text-white">WordPress theme.json & CSS Integration</span>
          </div>
          <button
            onClick={handleCopy}
            className="px-2.5 py-1 text-xs bg-stone-800 hover:bg-stone-700 text-stone-200 rounded flex items-center space-x-1.5 transition-colors"
          >
            {copiedSnippet ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Code</span>
              </>
            )}
          </button>
        </div>
        <pre className="text-xs font-mono bg-stone-950 p-4 rounded-lg overflow-x-auto text-amber-200/90 leading-relaxed">
          {wpThemeSnippet}
        </pre>
      </div>
    </div>
  );
};
