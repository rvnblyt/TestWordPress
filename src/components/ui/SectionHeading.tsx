import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}) => {
  return (
    <div
      className={`space-y-3 ${
        align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'
      } ${className}`}
    >
      {eyebrow && (
        <div className="flex items-center gap-2">
          {align === 'center' && <span className="w-6 h-px bg-amber-600/60" />}
          <span className="text-[11px] font-mono tracking-widest uppercase text-amber-700 dark:text-amber-400 font-semibold">
            {eyebrow}
          </span>
          <span className="w-6 h-px bg-amber-600/60" />
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-stone-900 dark:text-white tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base font-velour text-stone-600 dark:text-stone-300 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
