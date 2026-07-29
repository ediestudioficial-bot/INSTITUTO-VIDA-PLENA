interface SectionHeadingProps { badge?: string; title: string; description?: string; centered?: boolean; className?: string; }
export function SectionHeading({ badge, title, description, centered=false, className="" }: SectionHeadingProps) {
  return <div className={`mb-12 ${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
    {badge && <span className="editorial-label mb-5 block">{badge}</span>}
    <h2 className="font-serif text-4xl font-medium leading-tight text-brand-deep md:text-5xl">{title}</h2>
    {description && <p className="mt-6 text-lg leading-8 text-brand-charcoal/70">{description}</p>}
  </div>;
}
