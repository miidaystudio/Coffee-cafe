'use client';

import React from 'react';
import HeroNavigation from './HeroNavigation';
import HeroContent from './HeroContent';
import CoffeeComposition from './CoffeeComposition';
import HeroDecorations from './HeroDecorations';

export default function LondonCoffeeHero() {
  return (
    <section className="relative w-full h-[96vh] lg:h-[92vh] lg:max-h-[860px] min-h-[640px] sm:min-h-[700px] bg-brand-cream border-b border-brand-espresso/10 overflow-visible shadow-2xl flex flex-col justify-between select-none z-30">
      {/* 1. Background textures, Skyline watermark, and bean accent */}
      <HeroDecorations />

      {/* 2. Overlapping Pill Navigation Bar */}
      <HeroNavigation />

      {/* 3. Central Editorial Typography Header & CTA links */}
      <HeroContent />

      {/* 4. Bottom Emerging Coffee cups, flower, and chocolate */}
      <CoffeeComposition />
    </section>
  );
}
