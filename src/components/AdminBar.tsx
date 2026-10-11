import React from 'react';
import { 
  Sliders, 
  PenTool, 
  Type, 
  Globe, 
  Smartphone, 
  Tablet, 
  Monitor, 
  Moon, 
  Sun, 
  BookOpen,
  Plus
} from 'lucide-react';

interface AdminBarProps {
  currentTab: 'site' | 'editor' | 'typography' | 'api';
  setCurrentTab: (tab: 'site' | 'editor' | 'typography' | 'api') => void;
  openCustomizer: boolean;
  setOpenCustomizer: (open: boolean) => void;
  deviceView: 'desktop' | 'tablet' | 'mobile';
  setDeviceView: (mode: 'desktop' | 'tablet' | 'mobile') => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  onNewPost: () => void;
}

export const AdminBar: React.FC<AdminBarProps> = ({
  currentTab,
  setCurrentTab,
  openCustomizer,
  setOpenCustomizer,
  deviceView,
  setDeviceView,
  darkMode,
  setDarkMode,
  onNewPost
}) => {
  return (
    <header className="sticky top-0 z-50 bg-[#1d2327] text-[#f0f0f1] text-xs font-sans border-b border-[#2c3338] select-none">
      <div className="max-w-7xl mx-auto px-3 h-9 flex items-center justify-between">
        
        {/* Left Side: WP branding & primary navigation */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="flex items-center space-x-1.5 text-white font-medium hover:text-[#72aee6] cursor-pointer">
            <svg className="w-4 h-4 fill-current text-[#2271b1]" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm-6.85 10c0-1.42.42-2.74 1.15-3.85l3.96 10.84C7.03 17.58 5.15 15.01 5.15 12zm6.85 8c-.76 0-1.49-.1-2.18-.29l2.42-7.03 2.47 6.78c-.8.34-1.73.54-2.71.54zm1.18-12.87c.61 0 1.08.23 1.08.82 0 .5-.32.96-.82 1.37l-2.06 1.74-.29-.82 2.09-3.11zm-5.74.88c.84 0 1.25.43 1.25.96 0 .55-.38 1.05-.9 1.49l-1.39 1.18-.3-.83 1.34-2.8zm11.41 3.99c0 1.35-.38 2.61-1.04 3.69l-3.23-9.35c1.47 1.26 2.39 3.09 2.39 5.66z"/>
            </svg>
            <span className="font-semibold tracking-tight text-white hidden sm:inline">TestWordPress</span>
          </div>

          <div className="h-4 w-[1px] bg-stone-700 hidden sm:block" />

          {/* Navigation tabs */}
          <nav className="flex items-center space-x-1">
            <button
              onClick={() => setCurrentTab('site')}
              className={`px-2 py-1 rounded transition-colors flex items-center space-x-1.5 ${
                currentTab === 'site'
                  ? 'bg-[#2271b1] text-white font-medium'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800'
              }`}
              title="Editorial Magazine Front"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Magazine Front</span>
            </button>

            <button
              onClick={() => setCurrentTab('editor')}
              className={`px-2 py-1 rounded transition-colors flex items-center space-x-1.5 ${
                currentTab === 'editor'
                  ? 'bg-[#2271b1] text-white font-medium'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800'
              }`}
              title="Gutenberg Block Editor"
            >
              <PenTool className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Gutenberg Editor</span>
            </button>

            <button
              onClick={() => setCurrentTab('typography')}
              className={`px-2 py-1 rounded transition-colors flex items-center space-x-1.5 ${
                currentTab === 'typography'
                  ? 'bg-[#2271b1] text-white font-medium'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800'
              }`}
              title="Acherus & Velour Typography Lab"
            >
              <Type className="w-3.5 h-3.5 text-amber-300" />
              <span className="font-medium text-amber-200">Typography Lab</span>
            </button>

            <button
              onClick={() => setCurrentTab('api')}
              className={`px-2 py-1 rounded transition-colors flex items-center space-x-1.5 ${
                currentTab === 'api'
                  ? 'bg-[#2271b1] text-white font-medium'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800'
              }`}
              title="WP REST API Connector"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">WP REST API</span>
            </button>
          </nav>

          <button
            onClick={onNewPost}
            className="hidden sm:flex items-center space-x-1 px-2 py-1 bg-[#135e96] hover:bg-[#2271b1] text-white rounded font-medium"
            title="Compose new post"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>New Post</span>
          </button>
        </div>

        {/* Right Side: Device Preview, Customizer, User */}
        <div className="flex items-center space-x-2">
          {/* Device viewport switchers */}
          <div className="hidden md:flex items-center bg-[#2c3338] rounded p-0.5 space-x-0.5">
            <button
              onClick={() => setDeviceView('desktop')}
              className={`p-1 rounded ${deviceView === 'desktop' ? 'bg-[#1d2327] text-white shadow-xs' : 'text-stone-400 hover:text-white'}`}
              title="Desktop Preview"
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setDeviceView('tablet')}
              className={`p-1 rounded ${deviceView === 'tablet' ? 'bg-[#1d2327] text-white shadow-xs' : 'text-stone-400 hover:text-white'}`}
              title="Tablet Preview (768px)"
            >
              <Tablet className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setDeviceView('mobile')}
              className={`p-1 rounded ${deviceView === 'mobile' ? 'bg-[#1d2327] text-white shadow-xs' : 'text-stone-400 hover:text-white'}`}
              title="Mobile Preview (390px)"
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Theme Customizer Toggle */}
          <button
            onClick={() => setOpenCustomizer(!openCustomizer)}
            className={`px-2.5 py-1 rounded flex items-center space-x-1.5 transition-colors ${
              openCustomizer
                ? 'bg-amber-600 text-white font-medium'
                : 'text-stone-300 hover:text-white hover:bg-stone-800'
            }`}
            title="Customize Theme"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Customize</span>
          </button>

          {/* Dark Mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1.5 rounded text-stone-300 hover:text-white hover:bg-stone-800"
            title="Toggle Dark Mode"
          >
            {darkMode ? <Sun className="w-3.5 h-3.5 text-amber-300" /> : <Moon className="w-3.5 h-3.5" />}
          </button>

          {/* User status */}
          <div className="hidden xl:flex items-center space-x-2 pl-2 border-l border-stone-700 text-stone-300">
            <span>Howdy, <strong className="text-white">Raven</strong></span>
          </div>
        </div>
      </div>
    </header>
  );
};
