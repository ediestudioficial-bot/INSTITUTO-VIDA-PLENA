import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  centered = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 ${centered ? "text-center max-w-3xl mx-auto" : "max-w-3xl"} ${className}`}
    >
      {badge && (
        <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-brand-gold uppercase bg-brand-deep/5 rounded-full border border-brand-gold/20">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-deep leading-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-brand-charcoal/80 leading-relaxed font-sans">
          {description}
        </p>
      )}
    </div>
  );
}
