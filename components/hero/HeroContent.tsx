'use client';

import React from 'react';

export default function HeroContent() {
  return (
    <div className="relative flex flex-col items-center text-center z-10 pt-20 sm:pt-24 md:pt-28 max-w-[90vw] md:max-w-[650px] mx-auto select-none mt-2">

      {/* 1. Script Accent above the title with gold decorative horizontal rules */}
      <div className="flex items-center justify-center gap-3 text-brand-gold font-script text-lg sm:text-xl md:text-2xl mb-2.5 animate-fade-in-up delay-300">
        <span className="w-8 sm:w-10 h-[1.2px] bg-brand-gold/45" />
        <span>Coffee Bliss</span>
        <span className="w-8 sm:w-10 h-[1.2px] bg-brand-gold/45" />
      </div>

      {/* 2. Headline - Two lines, elegant serif, dark espresso */}
      <h1 id="hero-title" className="font-serif font-bold text-brand-espresso tracking-[-0.03em] leading-[0.93] text-[34px] sm:text-[44px] md:text-[56px] lg:text-[66px] uppercase animate-fade-in-up delay-450">
        LIFE BEGINS<br />
        AFTER <span className="text-brand-gold">COFFEE</span>
      </h1>

      {/* 3. Supporting Editorial Copy */}
      <p className="mt-4 text-brand-espresso/85 font-sans text-[11px] sm:text-xs md:text-[13px] max-w-[320px] sm:max-w-[380px] leading-relaxed animate-fade-in-up delay-650 px-4">
        Handcrafted coffee, rich flavour, and a little London soul.
      </p>

      {/* 4. Minimal Dual CTAs */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-7 animate-fade-in-up delay-800">
        <a
          href="#"
          className="bg-brand-espresso hover:bg-brand-brown text-brand-cream text-[10px] sm:text-xs font-semibold tracking-[0.16em] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 hover:-translate-y-[1px] uppercase shadow-md focus:outline-none focus:ring-1 focus:ring-brand-gold"
        >
          CONNECT WITH US
        </a>
        <a
          href="#"
          className="border border-brand-espresso/50 hover:bg-brand-espresso/5 text-brand-espresso text-[10px] sm:text-xs font-semibold tracking-[0.16em] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 uppercase focus:outline-none focus:ring-1 focus:ring-brand-gold"
        >
          EXPLORE OUR COFFEE
        </a>
      </div>

    </div>
  );
}
