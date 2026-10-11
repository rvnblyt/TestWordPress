import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Database, CheckCircle, AlertTriangle, ArrowRight, RefreshCw, X, Settings2 } from 'lucide-react';
import { wpApi } from '../../services/wordpressApi';
import { ApiStatus } from '../../types/project';

export const ApiStatusBar: React.FC = () => {
  const [status, setStatus] = useState<ApiStatus>(wpApi.getStatus());
  const [isOpen, setIsOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState(status.endpoint);

  useEffect(() => {
    const unsubscribe = wpApi.subscribeStatus((newStatus) => {
      setStatus(newStatus);
      setInputUrl(newStatus.endpoint);
    });
    return unsubscribe;
  }, []);

  const handleToggleMode = () => {
    const nextMode = status.mode === 'mock' ? 'live' : 'mock';
    wpApi.setMode(nextMode);
  };

  const handleSaveEndpoint = (e: React.FormEvent) => {
    e.preventDefault();
    wpApi.setEndpoint(inputUrl);
    setIsOpen(false);
  };

  return (
    <>
      {/* Top micro banner */}
      <div className="bg-stone-900 text-stone-300 text-[11px] border-b border-stone-800 px-3 py-1.5 flex items-center justify-between select-none">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="flex h-2 w-2 relative">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  status.mode === 'live' ? 'bg-emerald-400' : 'bg-amber-400'
                }`}
              />
              <span
                className={`relative inline-flex rounded-full h-2 w-2 ${
                  status.mode === 'live' ? 'bg-emerald-500' : 'bg-amber-500'
                }`}
              />
            </span>
            <span className="font-mono text-stone-200">
              WordPress Headless API:{' '}
              <strong className={status.mode === 'live' ? 'text-emerald-400' : 'text-amber-400'}>
                {status.mode === 'live' ? 'Live REST API Mode' : 'Local Verified Dataset'}
              </strong>
            </span>
            <span className="hidden sm:inline text-stone-500">•</span>
            <span className="hidden md:inline text-stone-400 truncate max-w-xs">
              {status.endpoint}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleToggleMode}
              className="text-stone-300 hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
            >
              Switch to {status.mode === 'mock' ? 'Live API' : 'Mock Mode'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 text-stone-400 hover:text-stone-200 transition-colors"
              title="Configure WordPress API endpoint"
            >
              <Settings2 className="w-3.5 h-3.5" />
            </button>
            <Link
              to="/architecture"
              className="hidden lg:flex items-center space-x-1 text-amber-400 hover:text-amber-300 font-medium"
            >
              <span>Architecture Docs</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Endpoint configuration modal drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-3">
              <div className="flex items-center space-x-2">
                <Database className="w-4 h-4 text-amber-600" />
                <h3 className="font-semibold text-sm text-stone-900 dark:text-white">
                  Headless WordPress REST API Configuration
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveEndpoint} className="space-y-4 text-xs">
              <div>
                <label className="block text-stone-700 dark:text-stone-300 font-medium mb-1">
                  WordPress REST API Base URL (VITE_WORDPRESS_API_URL)
                </label>
                <input
                  type="url"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  placeholder="https://your-wordpress-domain.com/wp-json/wp/v2"
                  className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 rounded-lg bg-stone-50 dark:bg-stone-800 font-mono text-stone-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
                <span className="block text-stone-500 mt-1 text-[11px]">
                  Point to any public WordPress site with REST API enabled (e.g. <code>https://wordpress.org/news/wp-json/wp/v2</code>).
                </span>
              </div>

              <div className="bg-stone-100 dark:bg-stone-800/60 p-3 rounded-lg text-stone-600 dark:text-stone-400 space-y-1 text-[11px]">
                <div className="font-semibold text-stone-800 dark:text-stone-200">
                  Current Execution State:
                </div>
                <div>Mode: <strong className="text-amber-600 dark:text-amber-400">{status.mode.toUpperCase()}</strong></div>
                <div>Last Synchronized: {status.lastChecked}</div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={handleToggleMode}
                  className="px-3 py-1.5 rounded border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 font-medium"
                >
                  Toggle {status.mode === 'mock' ? 'Live Mode' : 'Mock Mode'}
                </button>
                <div className="space-x-2">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-3 py-1.5 text-stone-500 hover:text-stone-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 bg-stone-900 hover:bg-stone-800 text-white rounded font-medium shadow-xs"
                  >
                    Save Endpoint
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
