'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function CraftAndStory() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // 1. Scroll-driven Coffee Cup transition from Hero to Story target frame
    const cup = document.querySelector('#hero-coffee-cup') as HTMLElement;
    const target = document.querySelector('#story-cup-target') as HTMLElement;

    if (cup && target) {
      gsap.to(cup, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 95%',
          end: 'top 25%',
          scrub: 1,
          invalidateOnRefresh: true,
        },
        x: () => {
          const cupRect = cup.getBoundingClientRect();
          const targetRect = target.getBoundingClientRect();
          const cupCenterX = cupRect.left + cupRect.width / 2;
          const targetCenterX = targetRect.left + targetRect.width / 2;
          return targetCenterX - cupCenterX;
        },
        y: () => {
          const cupRect = cup.getBoundingClientRect();
          const targetRect = target.getBoundingClientRect();
          const cupCenterY = cupRect.top + cupRect.height / 2;
          const targetCenterY = targetRect.top + targetRect.height / 2;
          return targetCenterY - cupCenterY - 28;
        },
        scale: 1.05,
        rotate: 0,
        ease: 'none',
      });
    }

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
        
        {/* Left Column — Coffee Cup Destination Target Frame */}
        <div className="gsap-story-col-left lg:col-span-5 w-full flex items-center justify-center lg:justify-start gap-4">
          {/* Vertical caption aligned next to container */}
          <div className="hidden sm:block text-[8px] tracking-[0.3em] text-brand-cream/30 font-sans uppercase [writing-mode:vertical-lr] rotate-180 select-none pb-4">
            ITEM REF. LC-001 // SIGNATURE BREW
          </div>

          {/* Destination Target Card Frame for Coffee Cup */}
          <div 
            id="story-cup-target"
            className="w-full max-w-[340px] sm:max-w-[360px] lg:max-w-[380px] aspect-[4/5] relative rounded-[24px] sm:rounded-[32px] bg-gradient-to-b from-[#132620]/90 via-brand-outer to-brand-outer border border-brand-gold/25 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col items-center justify-between p-6 sm:p-7 group z-10"
          >
            {/* Soft ambient radial highlight */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-gold/20 via-transparent to-transparent pointer-events-none" />

            {/* Subtle Architectural Crest / Seal Stamp Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full border border-brand-gold/15 pointer-events-none flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border border-brand-gold/10 flex items-center justify-center">
                <span className="text-[7px] tracking-[0.3em] font-sans text-brand-gold/20 uppercase font-bold">EST. 2026</span>
              </div>
            </div>

            {/* Top Header Tag inside Card */}
            <div className="w-full flex items-center justify-between z-10">
              <span className="text-[8px] tracking-[0.25em] font-sans font-semibold text-brand-gold/80 uppercase">LONDON ROASTERY</span>
              <span className="text-[8px] tracking-[0.2em] font-sans font-bold text-brand-cream/40 uppercase">NO. 01</span>
            </div>

            {/* Center area reserved for landing coffee cup */}
            <div className="w-full h-full flex-1" />

            {/* Bottom Label Tag */}
            <div className="w-full text-center z-10 pt-3 border-t border-brand-gold/15">
              <span className="text-[10px] sm:text-[11px] tracking-[0.25em] font-sans font-bold text-brand-gold uppercase block mb-0.5">
                CARAMEL ICED LATTE
              </span>
              <span className="font-serif italic text-brand-cream/70 text-xs sm:text-sm">
                Handcrafted with London Soul
              </span>
            </div>
          </div>
        </div>

        {/* Right Column — Editorial Brand Story */}
        <div className="gsap-story-col-right lg:col-span-7 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Eyebrow Accent - High-end light italic serif */}
          <div className="text-brand-gold font-serif italic text-base sm:text-lg tracking-wide mb-2 font-light">
            Handcrafted Coffee
          </div>

          {/* Headline - Staggered lines with mid-label */}
          <h2 className="font-serif font-light text-brand-cream tracking-tight leading-[1.06] text-[30px] sm:text-[36px] md:text-[44px] lg:text-[50px] max-w-[500px] uppercase">
            <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.35em] uppercase text-brand-cream/35 block mb-2 sm:mb-2.5 font-semibold select-none">
              — THE ARTISANAL APPROACH
            </span>
            WITH A <span className="font-serif italic text-brand-gold font-normal">LONDON SOUL</span>
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
