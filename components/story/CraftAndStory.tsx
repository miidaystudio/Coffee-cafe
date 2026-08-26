'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function CraftAndStory() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // 1. Entrance animation for the image column
    gsap.from('.gsap-story-col-left', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 40,
      duration: 1.2,
      ease: 'power3.out',
    });

    // 2. Entrance animation for the story content column
    gsap.from('.gsap-story-col-right', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 40,
      duration: 1.2,
      delay: 0.15,
      ease: 'power3.out',
    });

    // 3. Staggered metrics fade-in
    gsap.from('.gsap-story-metric', {
      scrollTrigger: {
        trigger: '.gsap-story-metrics-grid',
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power2.out',
    });

    // 4. Parallax effect on the image
    gsap.to('.gsap-story-img', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
      yPercent: 12,
      ease: 'none',
    });
  }, { scope: containerRef });

  return (
    <section
      id="story"
      ref={containerRef}
      className="relative w-full py-10 md:py-14 lg:py-16 px-6 md:px-12 lg:px-16 flex items-center justify-center select-none bg-transparent"
    >
      {/* Structural Editorial Gridlines */}
      <div className="absolute left-[8vw] top-0 w-[1px] h-full bg-brand-cream/[0.04] pointer-events-none hidden xl:block" />
      <div className="absolute right-[8vw] top-0 w-[1px] h-full bg-brand-cream/[0.04] pointer-events-none hidden xl:block" />

      {/* Floating Section Metadata (Coordinates & Labels) */}
      <div className="absolute left-[8vw] top-8 text-[8px] tracking-[0.3em] font-sans font-medium text-brand-cream/35 pointer-events-none hidden xl:flex items-center gap-3">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/45" />
        <span>LONDON, UK — 51.5074° N, 0.1278° W</span>
      </div>
      <div className="absolute right-[8vw] top-8 text-[8px] tracking-[0.3em] font-sans font-medium text-brand-cream/35 pointer-events-none hidden xl:block">
        <span>SECTION // 02 — THE ROASTERY STORY</span>
      </div>

      {/* Editorial Content Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full max-w-[1140px] mx-auto items-center relative z-10">
        
        {/* Left Column — Barista/Craft Image with Curator Tag */}
        <div className="gsap-story-col-left lg:col-span-5 w-full flex items-center justify-center lg:justify-start gap-4">
          {/* Vertical caption aligned next to image */}
          <div className="hidden sm:block text-[8px] tracking-[0.3em] text-brand-cream/30 font-sans uppercase [writing-mode:vertical-lr] rotate-180 select-none pb-4">
            IMAGE REF. LC-049 // CRAFT IN FOCUS
          </div>

          <div className="w-full max-w-[360px] lg:max-w-[380px] aspect-[4/5] relative overflow-hidden rounded-[20px] sm:rounded-[28px] shadow-2xl border border-brand-cream/5 group">
            <img
              src="/images/coffee_roast_craft.jpg"
              alt="Handcrafted Coffee Brewing Craft"
              className="gsap-story-img w-full h-full object-cover scale-[1.12] opacity-90 group-hover:opacity-100 group-hover:scale-[1.14] transition-opacity duration-1000 ease-custom"
            />
            {/* Soft ambient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-outer/70 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Right Column — Editorial Brand Story */}
        <div className="gsap-story-col-right lg:col-span-7 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Eyebrow Accent - High-end light italic serif */}
          <div className="text-brand-gold font-serif italic text-base sm:text-lg tracking-wide mb-2 font-light">
            The Art of Slow Brewing
          </div>

          {/* Headline - Staggered lines with mid-label */}
          <h2 className="font-serif font-light text-brand-cream tracking-tight leading-[1.06] text-[30px] sm:text-[36px] md:text-[44px] lg:text-[50px] max-w-[500px] uppercase">
            Handcrafted <span className="font-serif italic text-brand-gold font-normal">Coffee</span><br />
            <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.35em] uppercase text-brand-cream/35 block my-2 sm:my-2.5 font-semibold select-none">
              — THE ARTISANAL APPROACH
            </span>
            with a <span className="font-serif italic text-brand-gold font-normal">London Soul</span>
          </h2>

          {/* Minimal gold horizontal divider */}
          <div className="w-14 h-[1px] bg-brand-gold/35 my-4 sm:my-5" />

          {/* Descriptive story copy */}
          <p className="text-brand-cream/70 font-sans text-xs sm:text-[13px] font-light leading-[1.7] tracking-wide max-w-[460px] px-2 sm:px-0">
            Every cup begins long before the first pour. We carefully select quality beans, roast with patience, and craft every drink with the character of London in mind. The result is coffee made not just to be enjoyed, but to be remembered.
          </p>

          {/* Architectural Metrics Panel Grid */}
          <div className="gsap-story-metrics-grid w-full max-w-[480px] grid grid-cols-3 gap-4 mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-brand-cream/10 text-center lg:text-left">
            {/* Column 1 */}
            <div className="gsap-story-metric flex flex-col">
              <span className="text-[8px] tracking-[0.25em] font-bold text-brand-gold/50 mb-1 block font-sans">/ 01</span>
              <span className="font-serif text-xl sm:text-2xl text-brand-gold font-light tracking-tight">100%</span>
              <span className="font-sans text-[9px] font-medium tracking-[0.2em] uppercase text-brand-cream/40 mt-1.5">Crafted with Care</span>
            </div>
            {/* Column 2 */}
            <div className="gsap-story-metric flex flex-col border-l border-brand-cream/[0.06] pl-5 sm:pl-6">
              <span className="text-[8px] tracking-[0.25em] font-bold text-brand-gold/50 mb-1 block font-sans">/ 02</span>
              <span className="font-serif text-xl sm:text-2xl text-brand-gold font-light tracking-tight">Micro-Lot</span>
              <span className="font-sans text-[9px] font-medium tracking-[0.2em] uppercase text-brand-cream/40 mt-1.5">Slow Roasted</span>
            </div>
            {/* Column 3 */}
            <div className="gsap-story-metric flex flex-col border-l border-brand-cream/[0.06] pl-5 sm:pl-6">
              <span className="text-[8px] tracking-[0.25em] font-bold text-brand-gold/50 mb-1 block font-sans">/ 03</span>
              <span className="font-serif text-xl sm:text-2xl text-brand-gold font-light tracking-tight">Est. 2023</span>
              <span className="font-sans text-[9px] font-medium tracking-[0.2em] uppercase text-brand-cream/40 mt-1.5">London Inspired</span>
            </div>
          </div>

          {/* Bottom Interactive CTA Link */}
          <div className="gsap-story-metric mt-6 sm:mt-8">
            <a
              href="#"
              className="font-sans text-[10px] sm:text-xs tracking-[0.25em] font-semibold text-brand-gold hover:text-brand-gold-bright transition-colors uppercase relative group flex items-center gap-3 w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold group-hover:scale-150 transition-all duration-300 ease-custom" />
              <span>Explore the Selection</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              <span className="absolute bottom-[-4px] left-4 w-0 h-[1.2px] bg-brand-gold transition-all duration-300 group-hover:w-[calc(100%-28px)]" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
