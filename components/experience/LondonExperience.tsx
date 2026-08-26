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
      yPercent: 8,
      ease: 'none',
    });
  }, { scope: containerRef });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full py-16 md:py-20 lg:py-28 px-6 md:px-12 lg:px-16 flex items-center justify-center select-none bg-transparent"
    >
      {/* Structural Editorial Gridlines */}
      <div className="absolute left-[8vw] top-0 w-[1px] h-full bg-brand-cream/[0.04] pointer-events-none hidden xl:block" />
      <div className="absolute right-[8vw] top-0 w-[1px] h-full bg-brand-cream/[0.04] pointer-events-none hidden xl:block" />

      {/* Editorial Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 w-full max-w-[1180px] mx-auto items-center relative z-10">
        
        {/* Left Column — 4-Image Photo Collage (spans 6 Columns) */}
        <div className="gsap-exp-left lg:col-span-6 w-full flex flex-col gap-3">
          {/* Top Large Image (Table overlooking Big Ben) */}
          <div className="w-full aspect-[16/10] overflow-hidden rounded-[16px] sm:rounded-[20px] relative group border border-brand-cream/10 shadow-2xl">
            <img
              src="/images/experience_top.jpg"
              alt="Cozy London café table overlooking Big Ben"
              className="gsap-exp-top-img w-full h-full object-cover scale-[1.08] group-hover:scale-[1.1] transition-transform duration-1000 ease-custom"
            />
            
            {/* Overlay Glass Watermark Badge */}
            <div className="absolute top-1/2 right-[18%] -translate-y-1/2 bg-brand-espresso/65 border border-brand-gold/30 backdrop-blur-md rounded-xl px-4 py-2.5 flex flex-col items-center justify-center shadow-xl select-none">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-brand-gold fill-none stroke-current mb-0.5" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V9m0 0l-3 3m3-3l3 3M9 21h6M7 21h10M12 9V3m0 0L9 5m3-2l3 2M10 9h4M10 13h4M10 17h4" />
              </svg>
              <span className="font-serif text-[8px] tracking-[0.18em] font-bold text-brand-cream uppercase">LONDON COFFEE</span>
              <span className="text-[6px] tracking-[0.12em] text-brand-gold uppercase font-bold">EST. 2026</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-outer/50 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Bottom Row (3 Equal-Width Columns) */}
          <div className="grid grid-cols-3 gap-3">
            {/* 1. Barista Pour */}
            <div className="aspect-[4/3] overflow-hidden rounded-[12px] sm:rounded-[14px] relative group border border-brand-cream/10 shadow-lg">
              <img
                src="/images/experience_bottom_left.jpg"
                alt="Barista pouring milk latte art"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-custom"
              />
              <div className="absolute inset-0 bg-brand-outer/20 pointer-events-none" />
            </div>
            {/* 2. Plaque */}
            <div className="aspect-[4/3] overflow-hidden rounded-[12px] sm:rounded-[14px] relative group border border-brand-cream/10 shadow-lg">
              <img
                src="/images/experience_bottom_center.jpg"
                alt="Good Coffee plaque on brick wall"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-custom"
              />
              <div className="absolute inset-0 bg-brand-outer/20 pointer-events-none" />
            </div>
            {/* 3. Cozy Lamp */}
            <div className="aspect-[4/3] overflow-hidden rounded-[12px] sm:rounded-[14px] relative group border border-brand-cream/10 shadow-lg">
              <img
                src="/images/experience_bottom_right.jpg"
                alt="Cozy café corner table with lamp"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-custom"
              />
              <div className="absolute inset-0 bg-brand-outer/20 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Right Column — Editorial Details (spans 6 Columns) */}
        <div className="gsap-exp-right lg:col-span-6 w-full flex flex-col justify-center items-start text-left relative z-10 lg:pl-4 xl:pl-6">
          
          {/* Eyebrow Script */}
          <div className="text-brand-gold font-script text-xl sm:text-xl mb-2">
            The London Coffee Experience
          </div>

          {/* Headline - Multi-line Serif */}
          <h2 className="font-serif text-brand-cream tracking-tight leading-[1.1] text-[26px] sm:text-[30px] md:text-[40px] lg:text-[44px] uppercase max-w-[500px] mb-3">
            Crafted Moments.<br />
            Made To Be<br />
            <span className="text-brand-gold font-bold">REMEMBERED.</span>
          </h2>

          {/* Description Paragraph */}
          <p className="text-brand-cream/75 font-sans text-xs sm:text-[13px] font-light leading-[1.7] tracking-wide max-w-[480px] mb-6">
            Step into a warm, welcoming space inspired by London. Where every detail is thoughtful, every cup is crafted, and every moment feels a little more special.
          </p>

          {/* Top Divider Line */}
          <div className="w-full h-[1px] bg-brand-cream/10 my-2" />

          {/* Three-Column Features Row */}
          <div className="gsap-exp-features-grid w-full grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 py-5 text-left relative z-10">
            {/* Feature 1: Armchair */}
            <div className="gsap-exp-feature flex flex-col items-start">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-brand-gold fill-none stroke-current mb-3" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 12V8H4v4m16 0H4m16 0v5a1 1 0 01-1 1H5a1 1 0 01-1-1v-5m16 0h1a1 1 0 001-1V9a1 1 0 00-1-1h-1M4 12H3a1 1 0 01-1-1V9a1 1 0 011-1h1" />
              </svg>
              <span className="font-sans text-[10px] sm:text-[11px] font-bold tracking-[0.18em] uppercase text-brand-gold mb-1.5">WELCOMING SPACES</span>
              <p className="text-brand-cream/65 font-sans text-[11px] font-light leading-relaxed">
                Comfortable corners designed for conversations, connections, and calm.
              </p>
            </div>

            {/* Feature 2: Crafted with Care */}
            <div className="gsap-exp-feature flex flex-col items-start sm:border-l sm:border-brand-cream/10 sm:pl-5">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-brand-gold fill-none stroke-current mb-3" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 000 18M12 3c-2.5 0-4.5 4-4.5 9s2 9 4.5 9M12 3c2.5 0 4.5 4 4.5 9s-2 9-4.5 9M3 12h18" />
              </svg>
              <span className="font-sans text-[10px] sm:text-[11px] font-bold tracking-[0.18em] uppercase text-brand-gold mb-1.5">CRAFTED WITH CARE</span>
              <p className="text-brand-cream/65 font-sans text-[11px] font-light leading-relaxed">
                Made by skilled hands, using the finest beans and time-honoured methods.
              </p>
            </div>

            {/* Feature 3: Moments Together */}
            <div className="gsap-exp-feature flex flex-col items-start sm:border-l sm:border-brand-cream/10 sm:pl-5">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-brand-gold fill-none stroke-current mb-3" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
              <span className="font-sans text-[10px] sm:text-[11px] font-bold tracking-[0.18em] uppercase text-brand-gold mb-1.5">MOMENTS TOGETHER</span>
              <p className="text-brand-cream/65 font-sans text-[11px] font-light leading-relaxed">
                Coffee brings people closer. We just make the moments better.
              </p>
            </div>
          </div>

          {/* Bottom Divider Line */}
          <div className="w-full h-[1px] bg-brand-cream/10 my-2" />

          {/* Bottom Quote Box Frame (No Diamond) */}
          <div className="gsap-exp-feature w-full border border-brand-gold/35 rounded-[16px] p-4 sm:p-5 mt-6 flex items-center justify-between gap-4 bg-brand-espresso/20 z-10 shadow-lg">
            
            {/* Left: London Emblem & Slogan */}
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-brand-gold/80 fill-none stroke-current flex-shrink-0" strokeWidth="1.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V9m0 0l-3 3m3-3l3 3M9 21h6M7 21h10M12 9V3m0 0L9 5m3-2l3 2M10 9h4M10 13h4M10 17h4" />
              </svg>
              <div className="flex flex-col text-left">
                <span className="font-sans text-[7px] sm:text-[8px] tracking-[0.2em] font-bold text-brand-gold uppercase">INSPIRED BY LONDON.</span>
                <span className="font-sans text-[7px] sm:text-[8px] tracking-[0.2em] font-bold text-brand-gold uppercase">MADE FOR YOU.</span>
              </div>
            </div>

            {/* Right: Tagline */}
            <span className="font-serif italic text-brand-gold text-base sm:text-lg md:text-xl text-right">
              A little London, in every cup.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
