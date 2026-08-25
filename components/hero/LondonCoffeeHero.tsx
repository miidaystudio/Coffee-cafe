'use client';

import React from 'react';
import HeroNavigation from './HeroNavigation';
import HeroContent from './HeroContent';
import CoffeeComposition from './CoffeeComposition';
import HeroDecorations from './HeroDecorations';

export default function LondonCoffeeHero() {
  return (
    <section className="relative w-[98vw] lg:w-[97.5vw] h-[96vh] lg:h-[92vh] lg:max-h-[860px] min-h-[640px] sm:min-h-[700px] rounded-[28px] sm:rounded-[36px] bg-brand-cream border border-brand-espresso/10 overflow-hidden shadow-2xl flex flex-col justify-between p-6 md:p-8 select-none">
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
