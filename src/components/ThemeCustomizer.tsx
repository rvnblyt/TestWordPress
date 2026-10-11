import React from 'react';
import { X, Check, RotateCcw, Palette, Type, Layout, SlidersHorizontal } from 'lucide-react';
import { ThemeSettings } from '../types/wordpress';

interface ThemeCustomizerProps {
  settings: ThemeSettings;
  setSettings: React.Dispatch<React.SetStateAction<ThemeSettings>>;
  isOpen: boolean;
  onClose: () => void;
}

export const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({
  settings,
  setSettings,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const accentColors = [
    { name: 'Warm Terracotta', value: '#c2410c' },
    { name: 'Classic Obsidian', value: '#1c1917' },
    { name: 'WordPress Blue', value: '#2271b1' },
    { name: 'Forest Moss', value: '#15803d' },
    { name: 'Burgundy Wine', value: '#831843' },
    { name: 'Gold Ochre', value: '#b45309' },
  ];

  const handleReset = () => {
    setSettings({
      siteTitle: 'TestWordPress',
      tagline: 'An Editorial Journal in Acherus Feral & Velour',
      headingFont: 'acherus',
      bodyFont: 'velour',
      primaryColor: '#1c1917',
      layoutStyle: 'editorial',
      darkMode: false,
      contentWidth: 'standard',
    });
  };

  return (
    <aside className="fixed inset-y-0 right-0 z-50 w-80 sm:w-96 bg-white dark:bg-stone-900 border-l border-stone-200 dark:border-stone-800 shadow-2xl flex flex-col transition-all">
      {/* Header */}
      <div className="p-4 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between bg-stone-50 dark:bg-stone-950">
        <div className="flex items-center space-x-2">
          <SlidersHorizontal className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          <h2 className="text-sm font-semibold text-stone-900 dark:text-stone-100">
            Theme Customizer
          </h2>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleReset}
            className="p-1 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200"
            title="Reset to defaults"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content scroll area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 text-xs">
        {/* Site Identity */}
        <div>
          <h3 className="font-semibold text-stone-900 dark:text-stone-100 flex items-center space-x-1.5 mb-2.5">
            <Layout className="w-3.5 h-3.5 text-stone-500" />
            <span>Site Identity</span>
          </h3>
          <div className="space-y-3">
            <div>
              <label className="block text-stone-500 dark:text-stone-400 mb-1">Site Title</label>
              <input
                type="text"
                value={settings.siteTitle}
                onChange={(e) => setSettings({ ...settings, siteTitle: e.target.value })}
                className="w-full px-2.5 py-1.5 rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-stone-500 dark:text-stone-400 mb-1">Tagline</label>
              <input
                type="text"
                value={settings.tagline}
                onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                className="w-full px-2.5 py-1.5 rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>
          </div>
        </div>

        {/* Typography Pairing */}
        <div className="pt-4 border-t border-stone-200 dark:border-stone-800">
          <h3 className="font-semibold text-stone-900 dark:text-stone-100 flex items-center space-x-1.5 mb-2.5">
            <Type className="w-3.5 h-3.5 text-stone-500" />
            <span>Custom Typography (Repo Fonts)</span>
          </h3>
          
          <div className="space-y-3">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-stone-500 dark:text-stone-400">Headings & Titles</span>
                <span className="text-[10px] text-amber-600 dark:text-amber-400 font-mono">Horizon-Type</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSettings({ ...settings, headingFont: 'acherus' })}
                  className={`p-2 rounded border text-left flex items-center justify-between transition-all ${
                    settings.headingFont === 'acherus'
                      ? 'border-amber-600 bg-amber-50/50 dark:bg-amber-950/20 text-stone-900 dark:text-white font-medium'
                      : 'border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400'
                  }`}
                >
                  <span className="font-heading tracking-wide">Acherus Feral</span>
                  {settings.headingFont === 'acherus' && <Check className="w-3.5 h-3.5 text-amber-600" />}
                </button>
                <button
                  onClick={() => setSettings({ ...settings, headingFont: 'system' })}
                  className={`p-2 rounded border text-left flex items-center justify-between transition-all ${
                    settings.headingFont === 'system'
                      ? 'border-amber-600 bg-amber-50/50 dark:bg-amber-950/20 text-stone-900 dark:text-white font-medium'
                      : 'border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400'
                  }`}
                >
                  <span className="font-sans">System Sans</span>
                  {settings.headingFont === 'system' && <Check className="w-3.5 h-3.5 text-amber-600" />}
                </button>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-stone-500 dark:text-stone-400">Body & Longform</span>
                <span className="text-[10px] text-amber-600 dark:text-amber-400 font-mono">Velour</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSettings({ ...settings, bodyFont: 'velour' })}
                  className={`p-2 rounded border text-left flex items-center justify-between transition-all ${
                    settings.bodyFont === 'velour'
                      ? 'border-amber-600 bg-amber-50/50 dark:bg-amber-950/20 text-stone-900 dark:text-white font-medium'
                      : 'border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400'
                  }`}
                >
                  <span className="font-velour">Velour Medium</span>
                  {settings.bodyFont === 'velour' && <Check className="w-3.5 h-3.5 text-amber-600" />}
                </button>
                <button
                  onClick={() => setSettings({ ...settings, bodyFont: 'system' })}
                  className={`p-2 rounded border text-left flex items-center justify-between transition-all ${
                    settings.bodyFont === 'system'
                      ? 'border-amber-600 bg-amber-50/50 dark:bg-amber-950/20 text-stone-900 dark:text-white font-medium'
                      : 'border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400'
                  }`}
                >
                  <span className="font-serif">System Serif</span>
                  {settings.bodyFont === 'system' && <Check className="w-3.5 h-3.5 text-amber-600" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Accent Color Palette */}
        <div className="pt-4 border-t border-stone-200 dark:border-stone-800">
          <h3 className="font-semibold text-stone-900 dark:text-stone-100 flex items-center space-x-1.5 mb-2.5">
            <Palette className="w-3.5 h-3.5 text-stone-500" />
            <span>Accent Tone</span>
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {accentColors.map((color) => (
              <button
                key={color.value}
                onClick={() => setSettings({ ...settings, primaryColor: color.value })}
                className={`flex items-center space-x-1.5 p-1.5 rounded border transition-all ${
                  settings.primaryColor === color.value
                    ? 'border-stone-800 dark:border-stone-200 ring-1 ring-stone-800 dark:ring-stone-200'
                    : 'border-stone-200 dark:border-stone-800 hover:border-stone-400'
                }`}
              >
                <span
                  className="w-3.5 h-3.5 rounded-full shrink-0 shadow-xs"
                  style={{ backgroundColor: color.value }}
                />
                <span className="truncate text-[10px] text-stone-700 dark:text-stone-300">
                  {color.name.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Layout Style */}
        <div className="pt-4 border-t border-stone-200 dark:border-stone-800">
          <label className="block font-semibold text-stone-900 dark:text-stone-100 mb-2">
            Magazine Layout Preset
          </label>
          <div className="space-y-1.5">
            {[
              { id: 'editorial', label: 'Editorial Broadsheet', desc: 'Large hero, asymmetrical column storytelling' },
              { id: 'grid', label: 'Card Grid Magazine', desc: 'Balanced multi-column visual rhythm' },
              { id: 'minimal', label: 'Monograph / Minimal', desc: 'Single reading column, high text density' }
            ].map((layout) => (
              <button
                key={layout.id}
                onClick={() => setSettings({ ...settings, layoutStyle: layout.id as any })}
                className={`w-full p-2 rounded border text-left transition-all ${
                  settings.layoutStyle === layout.id
                    ? 'border-amber-600 bg-amber-50/40 dark:bg-amber-950/20'
                    : 'border-stone-200 dark:border-stone-800 hover:border-stone-300'
                }`}
              >
                <div className="font-medium text-stone-900 dark:text-stone-100 flex items-center justify-between">
                  <span>{layout.label}</span>
                  {settings.layoutStyle === layout.id && <Check className="w-3 h-3 text-amber-600" />}
                </div>
                <div className="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5">{layout.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Content Width */}
        <div className="pt-4 border-t border-stone-200 dark:border-stone-800">
          <label className="block font-semibold text-stone-900 dark:text-stone-100 mb-2">
            Content Column Width
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { id: 'compact', label: 'Compact' },
              { id: 'standard', label: 'Standard' },
              { id: 'wide', label: 'Wide' },
            ].map((w) => (
              <button
                key={w.id}
                onClick={() => setSettings({ ...settings, contentWidth: w.id as any })}
                className={`py-1.5 px-2 rounded border text-center transition-all ${
                  settings.contentWidth === w.id
                    ? 'border-amber-600 bg-amber-50 dark:bg-amber-950/20 text-amber-900 dark:text-amber-200 font-medium'
                    : 'border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400'
                }`}
              >
                {w.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 flex justify-between items-center text-[11px]">
        <span className="text-stone-500">Auto-saved to preview</span>
        <button
          onClick={onClose}
          className="px-3 py-1 bg-[#2271b1] hover:bg-[#135e96] text-white rounded font-medium"
        >
          Done
        </button>
      </div>
    </aside>
  );
};
