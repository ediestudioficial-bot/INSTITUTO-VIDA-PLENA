import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { contentEn } from "@/content/en-US";
import { TreePine, Building2, Stethoscope, ArrowRight, Info, Globe } from "lucide-react";

export const metadata = {
  title: "Instituto Vida Plena | Life in Fullness Institute (English)",
  description:
    "Learn about Instituto Vida Plena — Life in Fullness Institute: a dignified Christian senior care initiative in Macapá, Brazil.",
};

export default function EnglishLandingPage() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="bg-brand-deep text-brand-cream py-20 lg:py-24 rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cream/10 border border-brand-gold/30 text-brand-gold text-xs font-semibold">
            <Globe className="w-4 h-4 text-brand-gold" />
            <span>{contentEn.hero.badge}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-warmWhite leading-tight">
            {contentEn.hero.title}
          </h1>

          <p className="text-lg md:text-xl text-brand-cream/90 font-light max-w-3xl leading-relaxed">
            {contentEn.hero.subtitle}
          </p>

          <div className="p-4 rounded-xl bg-brand-deepDark/80 border-l-4 border-brand-gold text-brand-cream/95 text-base italic font-serif max-w-xl">
            &quot;{contentEn.hero.quote}&quot;
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/parceiros"
              className="px-6 py-3.5 bg-brand-gold text-brand-deepDark font-bold rounded-xl hover:bg-amber-400 transition-colors text-sm"
            >
              Partner Interest Form <ArrowRight className="w-4 h-4 inline ml-1" />
            </Link>
            <Link
              href="/masterplan"
              className="px-6 py-3.5 bg-brand-cream/10 text-brand-cream font-medium rounded-xl border border-brand-cream/20 hover:bg-brand-cream/20 transition-colors text-sm"
            >
              View Masterplan Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Notice Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-4 text-sm">
          <Info className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-base text-amber-950">Ethical Notice for International Visitors:</h3>
            <p className="leading-relaxed">
              <strong>Instituto Vida Plena — Life in Fullness Institute</strong> is currently in its pre-construction planning stage. No financial donations or fundraising campaigns are open at this time. All future international partnerships will be conducted strictly through official institutional channels in compliance with Brazilian laws.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Concept */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          badge="Core Pillars"
          title="A Home Centered Around Human Dignity"
          description="Designed for 24 residents [Sizing hypothesis], fostering biophilic living, healthcare, and Christian love."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <TreePine className="w-8 h-8 text-brand-deep" />
            <h3 className="font-serif font-bold text-xl text-brand-deep">Central Garden</h3>
            <p className="text-sm text-brand-charcoal/80">
              The green heart of the home, providing natural sunlight, cross-ventilation, and peaceful walking paths.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <Building2 className="w-8 h-8 text-brand-deep" />
            <h3 className="font-serif font-bold text-xl text-brand-deep">Single-Story Design</h3>
            <p className="text-sm text-brand-charcoal/80">
              100% accessible single-story layout (ABNT NBR 9050) eliminating physical barriers and stair hazards.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-brand-warmWhite border border-brand-wood/15 space-y-3">
            <Stethoscope className="w-8 h-8 text-brand-deep" />
            <h3 className="font-serif font-bold text-xl text-brand-deep">24/7 Healthcare</h3>
            <p className="text-sm text-brand-charcoal/80">
              Discreet nursing, physical therapy, and nutrition monitoring preserving a cozy residential feel.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
