'use client';

import React, { useState } from 'react';
import { Mail, ArrowRight, Check, Coffee } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }, 1200);
  };

  return (
    <footer className="relative w-[98vw] lg:w-[97.5vw] bg-brand-brown border border-brand-gold/15 rounded-[28px] sm:rounded-[36px] overflow-hidden py-12 sm:py-16 md:py-20 px-6 md:px-12 lg:px-16 select-none mt-6 shadow-2xl">
      {/* Background Watermark */}
      <div className="absolute right-[-5vw] bottom-[-2vw] w-[35%] h-[60%] opacity-[0.02] pointer-events-none select-none z-[0] hidden lg:block">
        <svg viewBox="0 0 24 24" className="w-full h-full text-brand-gold fill-none stroke-current" strokeWidth="1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V9m0 0l-3 3m3-3l3 3M9 21h6M7 21h10M12 9V3m0 0L9 5m3-2l3 2M10 9h4M10 13h4M10 17h4" />
        </svg>
      </div>

      <div className="max-w-[1140px] mx-auto relative z-10">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 sm:pb-16 border-b border-brand-cream/10">
          
          {/* Column 1: Brand & Philosophy (spans 4 Columns) */}
          <div className="lg:col-span-4 flex flex-col items-start gap-5">
            {/* Logo Crest */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center bg-brand-outer text-brand-gold">
                <svg viewBox="0 0 24 24" className="w-5.5 h-5.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V9m0 0l-3 3m3-3l3 3M9 21h6M7 21h10M12 9V3m0 0L9 5m3-2l3 2M10 9h4M10 13h4M10 17h4" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-[13px] tracking-[0.2em] font-bold text-brand-cream uppercase leading-none">LONDON COFFEE</span>
                <span className="text-[8px] tracking-[0.1em] text-brand-gold uppercase mt-1 font-bold">ESTABLISHED 2023</span>
              </div>
            </div>

            <p className="text-brand-cream/65 font-sans text-[12px] font-light leading-[1.65] tracking-wide max-w-[320px]">
              Handcrafted coffee brewed with attention, rich aromas, and a touch of London soul. Step into our spaces for an editorial café experience.
            </p>

            {/* Socials Text Links */}
            <div className="flex items-center gap-6 mt-2">
              <a href="#" className="font-sans text-[10px] font-bold tracking-[0.15em] text-brand-gold hover:text-brand-gold-bright transition-all duration-300 relative group uppercase">
                INSTAGRAM
                <span className="absolute bottom-[-1px] left-0 w-0 h-[1px] bg-brand-gold-bright transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#" className="font-sans text-[10px] font-bold tracking-[0.15em] text-brand-gold hover:text-brand-gold-bright transition-all duration-300 relative group uppercase">
                PINTEREST
                <span className="absolute bottom-[-1px] left-0 w-0 h-[1px] bg-brand-gold-bright transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#" className="font-sans text-[10px] font-bold tracking-[0.15em] text-brand-gold hover:text-brand-gold-bright transition-all duration-300 relative group uppercase">
                FACEBOOK
                <span className="absolute bottom-[-1px] left-0 w-0 h-[1px] bg-brand-gold-bright transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (spans 2 Columns) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-serif text-[11px] font-bold tracking-[0.2em] text-brand-cream uppercase border-l-2 border-brand-gold pl-3">
              EXPLORE
            </h4>
            <div className="flex flex-col gap-2.5 pl-3">
              <a href="#story" className="text-[12px] font-sans font-light text-brand-cream/70 hover:text-brand-gold transition-colors">
                Our Story
              </a>
              <a href="#menu" className="text-[12px] font-sans font-light text-brand-cream/70 hover:text-brand-gold transition-colors">
                Signature Menu
              </a>
              <a href="#experience" className="text-[12px] font-sans font-light text-brand-cream/70 hover:text-brand-gold transition-colors">
                The Experience
              </a>
              <a href="#contact" className="text-[12px] font-sans font-light text-brand-cream/70 hover:text-brand-gold transition-colors">
                Reservations
              </a>
            </div>
          </div>

          {/* Column 3: Locations (spans 3 Columns) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-serif text-[11px] font-bold tracking-[0.2em] text-brand-cream uppercase border-l-2 border-brand-gold pl-3">
              LONDON CAFÉS
            </h4>
            <div className="flex flex-col gap-3.5 pl-3 font-sans text-[11px] font-light text-brand-cream/70 leading-relaxed">
              <div>
                <span className="font-medium text-brand-gold uppercase tracking-wider block text-[9px] mb-0.5">SOHO (FLAGSHIP)</span>
                42 Regent St, London W1B 5RL
              </div>
              <div>
                <span className="font-medium text-brand-gold uppercase tracking-wider block text-[9px] mb-0.5">COVENT GARDEN</span>
                18 Floral St, London WC2E 9DS
              </div>
              <div>
                <span className="font-medium text-brand-gold uppercase tracking-wider block text-[9px] mb-0.5">CHELSEA</span>
                88 King's Rd, London SW3 4TZ
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter Subscription (spans 3 Columns) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-serif text-[11px] font-bold tracking-[0.2em] text-brand-cream uppercase border-l-2 border-brand-gold pl-3">
              THE GAZETTE
            </h4>
            <div className="pl-3">
              <p className="text-brand-cream/65 font-sans text-[12px] font-light leading-relaxed mb-4">
                Subscribe to receive seasonal menu details, recipes, and event invites from London.
              </p>

              {isSubscribed ? (
                <div className="flex items-center gap-2 text-brand-gold text-[12px] font-sans font-medium py-3 border border-brand-gold/20 rounded-xl px-4 bg-brand-outer/40 animate-fade-in">
                  <Check className="w-4 h-4 flex-shrink-0" />
                  <span>Subscribed to Gazette!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="relative flex items-center">
                  <input
                    type="email"
                    required
                    placeholder="Email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full bg-brand-outer/40 border border-brand-gold/20 rounded-xl py-3 pl-4 pr-12 text-[12px] text-brand-cream placeholder-brand-cream/30 focus:outline-none focus:border-brand-gold/75 focus:ring-1 focus:ring-brand-gold/75 transition-all duration-300 font-sans font-light"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="absolute right-1 w-9 h-9 rounded-lg bg-brand-gold hover:bg-brand-gold-bright text-brand-outer flex items-center justify-center transition-colors duration-300 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-3.5 h-3.5 border-2 border-brand-outer border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <ArrowRight className="w-4 h-4" />
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Footer Base Info & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] font-sans font-light text-brand-cream/40">
          <div>
            © 2026 London Coffee Co. All rights reserved. Registered in England & Wales.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <span className="w-1 h-1 bg-brand-cream/20 rounded-full" />
            <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
            <span className="w-1 h-1 bg-brand-cream/20 rounded-full" />
            <span className="font-script text-[16px] text-brand-gold">A little London, in every cup.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
