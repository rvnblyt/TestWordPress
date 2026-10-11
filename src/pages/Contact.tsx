import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  Copy, 
  Check, 
  MessageSquare,
  ShieldAlert
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    projectType: 'WordPress Website Development',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('raventrishabaluyot@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    setErrorMsg(null);
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">
      
      {/* Header */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-10 max-w-3xl space-y-4">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's discuss your next WordPress or frontend project."
          description="I am actively available for agency white-label partnerships, custom WordPress development, website troubleshooting, and remote opportunities."
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left Column: Direct Contact & Availability Info */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-bold text-stone-900 dark:text-white">
              Direct Contact Channels
            </h3>
            <p className="font-velour text-stone-600 dark:text-stone-300 text-sm leading-relaxed">
              Feel free to email me directly or fill out the inquiry form. I typically respond within 24 hours on business days.
            </p>

            <div className="space-y-3 pt-2">
              {/* Email Card */}
              <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 flex items-center justify-between">
                <div className="flex items-center space-x-3 truncate">
                  <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-600 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] font-mono text-stone-400 block">Email Address</span>
                    <a
                      href="mailto:raventrishabaluyot@gmail.com"
                      className="text-xs font-semibold text-stone-900 dark:text-white hover:text-amber-600 truncate block"
                    >
                      raventrishabaluyot@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-600 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-stone-400 block">Primary Location</span>
                  <span className="text-xs font-semibold text-stone-900 dark:text-white">
                    City of Dasmariñas, Cavite, Philippines
                  </span>
                </div>
              </div>

              {/* Timezone Card */}
              <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-600 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-stone-400 block">Timezone & Overlap</span>
                  <span className="text-xs font-semibold text-stone-900 dark:text-white">
                    Philippine Standard Time (UTC+8) • Flexible for US/EU/AU overlaps
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Agency Working Arrangement Card */}
          <div className="p-6 rounded-xl bg-stone-100 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 space-y-3 text-xs">
            <h4 className="font-heading font-bold text-stone-900 dark:text-white text-sm">
              Collaboration Types
            </h4>
            <ul className="space-y-2 text-stone-600 dark:text-stone-300">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>White-Label Agency Retainers & Overflow Dev</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Fixed-Scope Website Builds (Figma to WordPress)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Emergency Bug Fixing, Performance & Hosting Migrations</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Full-time or Part-time Remote Development Positions</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Right Column: Contact Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-8 shadow-xs space-y-6">
            
            <div>
              <h3 className="text-xl font-heading font-bold text-stone-900 dark:text-white">
                Send an Inquiry
              </h3>
              <p className="text-xs font-velour text-stone-500 dark:text-stone-400 mt-1">
                Fill in the details below, and this will format a ready-to-send brief directly to my inbox.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <div className="space-y-1">
                  <h4 className="text-lg font-heading font-bold text-emerald-900 dark:text-emerald-100">
                    Message Prepared!
                  </h4>
                  <p className="text-xs font-velour text-emerald-800 dark:text-emerald-200 max-w-md mx-auto">
                    Thank you, {formData.name}. You can also open your mail client directly using the button below to dispatch this message immediately.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={`mailto:raventrishabaluyot@gmail.com?subject=${encodeURIComponent(
                      `[Portfolio Inquiry] ${formData.projectType} — ${formData.name}`
                    )}&body=${encodeURIComponent(
                      `From: ${formData.name} (${formData.email})\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`
                    )}`}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold shadow-xs"
                  >
                    <span>Launch in Mail App</span>
                    <Send className="w-3.5 h-3.5" />
                  </a>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="block mx-auto text-xs text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 underline pt-2"
                >
                  Compose another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                {errorMsg && (
                  <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-700 dark:text-stone-300 font-medium mb-1">
                      Your Name <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 rounded-lg bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-700 dark:text-stone-300 font-medium mb-1">
                      Your Email <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 rounded-lg bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-stone-700 dark:text-stone-300 font-medium mb-1">
                    Project Service Area
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 rounded-lg bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                  >
                    <option>WordPress Website Development</option>
                    <option>Figma to Elementor / Divi Implementation</option>
                    <option>Custom Theme & PHP Development</option>
                    <option>Headless WordPress & React Frontend</option>
                    <option>Website Maintenance & Bug Fixing</option>
                    <option>Hosting Migration & DNS Setup</option>
                    <option>White-Label Agency Collaboration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-700 dark:text-stone-300 font-medium mb-1">
                    Project Details & Scope <span className="text-amber-600">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your website, timeline, design files, or specific technical challenges..."
                    className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 rounded-lg bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" size="md" variant="primary" className="w-full">
                    <span>Submit Project Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </Button>
                </div>

                <p className="text-[11px] text-stone-400 text-center pt-1 font-mono">
                  Messages are sent directly without spam or marketing lists.
                </p>

              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
};
