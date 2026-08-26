'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function LondonExperience() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // 1. Entrance animation for the image grid column
    gsap.from('.gsap-exp-left', {
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

    // 2. Entrance animation for the text content column
    gsap.from('.gsap-exp-right', {
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

    // 3. Staggered animation for three features & the bottom panel
    gsap.from('.gsap-exp-feature', {
      scrollTrigger: {
        trigger: '.gsap-exp-features-grid',
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 20,
      stagger: 0.12,
      duration: 0.8,
      ease: 'power2.out',
    });

    // 4. Parallax scroll effect on the large top image in the grid
    gsap.to('.gsap-exp-top-img', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
      yPercent: 10,
      ease: 'none',
    });
  }, { scope: containerRef });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-16 flex items-center justify-center select-none bg-transparent"
    >
      {/* Structural Editorial Gridlines */}
      <div className="absolute left-[8vw] top-0 w-[1px] h-full bg-brand-cream/[0.04] pointer-events-none hidden xl:block" />
      <div className="absolute right-[8vw] top-0 w-[1px] h-full bg-brand-cream/[0.04] pointer-events-none hidden xl:block" />

      {/* Editorial Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 w-full max-w-[1140px] mx-auto items-center relative z-10">
        
        {/* Left Column — 4-Image Masonry/Collage Collage (spans 6 Columns) */}
        <div className="gsap-exp-left lg:col-span-6 w-full">
          <div className="flex flex-col gap-1.5 sm:gap-2 border border-brand-gold/20 p-2 sm:p-2.5 rounded-[24px] sm:rounded-[32px] bg-brand-espresso/30 shadow-2xl relative w-full overflow-hidden">
            {/* Top Large Image (Table overlooking Big Ben) */}
            <div className="w-full aspect-[3/2] overflow-hidden rounded-[16px] sm:rounded-[22px] relative group border border-brand-gold/10">
              <img
                src="/images/experience_top.jpg"
                alt="Cozy London café table overlooking Big Ben"
                className="gsap-exp-top-img w-full h-full object-cover scale-[1.1] group-hover:scale-[1.12] transition-transform duration-1000 ease-custom"
              />
              
              {/* Overlay Glass Watermark Logo */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none">
                <div className="bg-brand-espresso/50 border border-brand-gold/25 backdrop-blur-[2px] rounded-xl px-4 py-3 flex flex-col items-center justify-center shadow-lg max-w-[150px] text-center scale-90 sm:scale-100 mt-2 sm:mt-4 opacity-80">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-brand-gold fill-none stroke-current" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V9m0 0l-3 3m3-3l3 3M9 21h6M7 21h10M12 9V3m0 0L9 5m3-2l3 2M10 9h4M10 13h4M10 17h4" />
                  </svg>
                  <span className="font-serif text-[8px] tracking-[0.15em] font-bold text-brand-cream uppercase mt-1">LONDON COFFEE</span>
                  <span className="text-[5px] tracking-[0.1em] text-brand-gold uppercase mt-0.5 font-bold">EST. 2023</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-outer/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Bottom Row (3 Equal-Width Columns) */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
              {/* 1. Barista Pour */}
              <div className="aspect-square overflow-hidden rounded-[12px] sm:rounded-[18px] relative group border border-brand-gold/10">
                <img
                  src="/images/experience_bottom_left.jpg"
                  alt="Barista pouring milk latte art"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-custom"
                />
                <div className="absolute inset-0 bg-brand-outer/25 pointer-events-none" />
              </div>
              {/* 2. Plaque */}
              <div className="aspect-square overflow-hidden rounded-[12px] sm:rounded-[18px] relative group border border-brand-gold/10">
                <img
                  src="/images/experience_bottom_center.jpg"
                  alt="Good Coffee plaque on brick wall"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-custom"
                />
                <div className="absolute inset-0 bg-brand-outer/25 pointer-events-none" />
              </div>
              {/* 3. Cozy Lamp */}
              <div className="aspect-square overflow-hidden rounded-[12px] sm:rounded-[18px] relative group border border-brand-gold/10">
                <img
                  src="/images/experience_bottom_right.jpg"
                  alt="Cozy café corner table with lamp"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-custom"
                />
                <div className="absolute inset-0 bg-brand-outer/25 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column — Editorial Details (spans 6 Columns) */}
        <div className="gsap-exp-right lg:col-span-6 w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left relative z-10 lg:pl-6 xl:pl-8">
          {/* Big Ben Skyline Watermark in background */}
          <div className="absolute right-[-4vw] bottom-0 w-[40%] h-[75%] opacity-[0.03] pointer-events-none select-none z-[0] hidden lg:block">
            <img
              src="/images/background.png"
              alt="London Skyline watermark"
              className="w-full h-full object-contain object-right-bottom saturate-[0.1]"
            />
          </div>

          {/* Eyebrow Script */}
          <div className="flex items-center gap-3 text-brand-gold font-script text-xl sm:text-2xl mb-2.5">
            <span>The London Coffee Experience</span>
            <span className="w-16 h-[1.5px] bg-brand-gold/30 hidden lg:block" />
          </div>

          {/* Headline - Elegant Serif */}
          <h2 className="font-serif font-semibold text-brand-cream tracking-tight leading-[1.08] text-[34px] sm:text-[44px] md:text-[50px] lg:text-[54px] uppercase max-w-[500px]">
            Crafted Moments.<br />
            Made to Be <span className="text-brand-gold">Remembered.</span>
          </h2>

          {/* Minimal gold divider */}
          <div className="w-14 h-[1px] bg-brand-gold/35 my-5 sm:my-6" />

          {/* Description */}
          <p className="text-brand-cream/75 font-sans text-xs sm:text-[13px] font-light leading-[1.7] tracking-wide max-w-[480px] mb-8 sm:mb-10 px-2 sm:px-0">
            Step into a warm, welcoming space inspired by London. Where every detail is thoughtful, every cup is crafted, and every moment feels a little more special.
          </p>

          {/* Three-Column Features Row */}
          <div className="gsap-exp-features-grid w-full grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 lg:gap-6 border-t border-b border-brand-cream/10 py-8 sm:py-10 text-center sm:text-left relative z-10">
            {/* Feature 1: Armchair */}
            <div className="gsap-exp-feature flex flex-col items-center sm:items-start">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-brand-gold fill-none stroke-current mb-3" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0a3 3 0 11-6 0v-1.5m6 1.5a3 3 0 10-6 0v1.5m15 0a3 3 0 116 0v-1.5m-6 1.5a3 3 0 106 0v1.5M4.5 9V5.25a2.25 2.25 0 012.25-2.25h10.5A2.25 2.25 0 0119.5 5.25V9M4.5 15v3.75A2.25 2.25 0 006.75 21h10.5a2.25 2.25 0 002.25-2.25V15" />
              </svg>
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-brand-gold mb-2">WELCOMING SPACES</span>
              <p className="text-brand-cream/60 font-sans text-[11px] font-light leading-relaxed max-w-[150px] sm:max-w-none">
                Comfortable corners designed for conversations, connections, and calm.
              </p>
            </div>

            {/* Feature 2: Latte Art */}
            <div className="gsap-exp-feature flex flex-col items-center sm:items-start sm:border-l sm:border-brand-cream/10 sm:pl-6 lg:pl-8">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-brand-gold fill-none stroke-current mb-3" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" />
              </svg>
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-brand-gold mb-2">CRAFTED WITH CARE</span>
              <p className="text-brand-cream/60 font-sans text-[11px] font-light leading-relaxed max-w-[150px] sm:max-w-none">
                Made by skilled hands, using the finest beans and time-honoured methods.
              </p>
            </div>

            {/* Feature 3: Cup */}
            <div className="gsap-exp-feature flex flex-col items-center sm:items-start sm:border-l sm:border-brand-cream/10 sm:pl-6 lg:pl-8">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-brand-gold fill-none stroke-current mb-3" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75H14.25M9.75 12H14.25M6 18H18M18 6v9a3 3 0 01-3 3H9a3 3 0 01-3-3V6h12z" />
              </svg>
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-brand-gold mb-2">MOMENTS TOGETHER</span>
              <p className="text-brand-cream/60 font-sans text-[11px] font-light leading-relaxed max-w-[150px] sm:max-w-none">
                Coffee brings people closer. We just make the moments better.
              </p>
            </div>
          </div>

          {/* Bottom Architectural Panel Gold Frame */}
          <div className="gsap-exp-feature w-full max-w-[500px] border border-brand-gold/30 rounded-2xl p-4 sm:p-5 mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden bg-brand-espresso/25 z-10 shadow-lg">
            
            {/* Big Ben Tower Sketch & Slogan */}
            <div className="flex items-center gap-4">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-brand-gold/75 fill-none stroke-current flex-shrink-0" strokeWidth="1.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V9m0 0l-3 3m3-3l3 3M9 21h6M7 21h10M12 9V3m0 0L9 5m3-2l3 2M10 9h4M10 13h4M10 17h4" />
              </svg>
              <span className="font-sans text-[9px] tracking-[0.2em] font-bold text-brand-gold uppercase leading-relaxed max-w-[150px] text-center sm:text-left">
                INSPIRED BY LONDON. MADE FOR YOU.
              </span>
            </div>

            {/* Vertical Divider Line */}
            <span className="hidden sm:block h-10 w-[1px] bg-brand-gold/25" />

            {/* Cursive tagline script */}
            <span className="font-script text-brand-gold text-2xl whitespace-nowrap">
              A little London, in every cup.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
