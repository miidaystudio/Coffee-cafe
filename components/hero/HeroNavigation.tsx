'use client';

import React from 'react';

export default function HeroNavigation() {
  return (
    <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center w-full px-4 animate-fade-in delay-150">
      {/* Pill-shaped Navigation Bar Container */}
      <nav className="bg-brand-espresso text-brand-cream rounded-full px-6 py-2.5 flex items-center justify-between border border-brand-gold/15 shadow-xl relative w-full max-w-[540px] md:max-w-[680px] h-[52px]">
        
        {/* Left Side Links */}
        <div className="flex items-center gap-4 md:gap-7 flex-1 justify-end pr-10 md:pr-12 select-none">
          <a 
            href="#" 
            className="text-[9px] md:text-[10px] tracking-[0.2em] font-semibold text-brand-cream/80 hover:text-brand-gold transition-all duration-300 relative group uppercase"
          >
            ABOUT
            <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full" />
          </a>
          <a 
            href="#" 
            className="text-[9px] md:text-[10px] tracking-[0.2em] font-semibold text-brand-cream/80 hover:text-brand-gold transition-all duration-300 relative group uppercase"
          >
            MENU
            <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full" />
          </a>
          <a 
            href="#" 
            className="text-[9px] md:text-[10px] tracking-[0.2em] font-semibold text-brand-cream/80 hover:text-brand-gold transition-all duration-300 relative group uppercase"
          >
            EXPERIENCE
            <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full" />
          </a>
        </div>

        {/* Central Logo Overlapping the top/bottom pill border */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-brand-espresso border border-brand-gold/40 flex flex-col items-center justify-center p-2 shadow-2xl z-50 cursor-pointer group hover:border-brand-gold transition-all duration-500">
          {/* Minimal Architectural Crest Emblem */}
          <svg viewBox="0 0 24 24" className="w-7 h-7 text-brand-gold/90 transition-transform duration-500 group-hover:scale-105" fill="none" stroke="currentColor" strokeWidth="1.5">
            {/* Outline of Big Ben tower shape */}
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V9m0 0l-3 3m3-3l3 3M9 21h6M7 21h10M12 9V3m0 0L9 5m3-2l3 2M10 9h4M10 13h4M10 17h4" />
          </svg>
          <span className="text-[6px] tracking-[0.1em] font-bold text-brand-gold/80 mt-0.5 uppercase">EST. 2026</span>
        </div>

        {/* Right Side Links */}
        <div className="flex items-center gap-4 md:gap-7 flex-1 justify-start pl-10 md:pl-12 select-none">
          <a 
            href="#" 
            className="text-[9px] md:text-[10px] tracking-[0.2em] font-semibold text-brand-cream/80 hover:text-brand-gold transition-all duration-300 relative group uppercase"
          >
            GALLERY
            <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full" />
          </a>
          <a 
            href="#" 
            className="text-[9px] md:text-[10px] tracking-[0.2em] font-semibold text-brand-cream/80 hover:text-brand-gold transition-all duration-300 relative group uppercase"
          >
            CONTACT
            <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full" />
          </a>
          <a 
            href="#" 
            className="text-[9px] md:text-[10px] tracking-[0.15em] font-bold text-brand-gold hover:text-brand-gold-bright transition-colors duration-300 ml-1 uppercase"
          >
            CONNECT
          </a>
        </div>

      </nav>
    </div>
  );
}
