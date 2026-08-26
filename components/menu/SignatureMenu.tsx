'use client';

import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

type Category = 'all' | 'hot' | 'iced' | 'frappe' | 'tea';

const categories: { id: Category; label: string }[] = [
  { id: 'all', label: 'ALL DRINKS' },
  { id: 'hot', label: 'HOT COFFEE' },
  { id: 'iced', label: 'ICED COFFEE' },
  { id: 'frappe', label: 'FRAPPE' },
  { id: 'tea', label: 'TEA & MORE' }
];

const products = [
  {
    index: '01',
    title: 'Caramel Latte',
    category: 'hot',
    price: '₹249',
    subtext: 'Rich Espresso & Steamed Milk • 300 ml',
    image: '/images/menu_caramel_latte.jpg',
    isFavorite: true
  },
  {
    index: '02',
    title: 'London Cappuccino',
    category: 'hot',
    price: '₹229',
    subtext: 'Double Shot & Velvet Foam • 250 ml',
    image: '/images/menu_london_cappuccino.jpg',
    isFavorite: false
  },
  {
    index: '03',
    title: 'Iced Hazelnut Latte',
    category: 'iced',
    price: '₹269',
    subtext: 'Chilled Espresso & Hazelnut • 350 ml',
    image: '/images/menu_iced_hazelnut.jpg',
    isFavorite: false
  },
  {
    index: '04',
    title: 'Mocha Frappe',
    category: 'frappe',
    price: '₹279',
    subtext: 'Blended Chocolate Mocha • 400 ml',
    image: '/images/menu_mocha_frappe.jpg',
    isFavorite: false
  },
  {
    index: '05',
    title: 'English Breakfast Tea',
    category: 'tea',
    price: '₹149',
    subtext: 'Artisanal Black Tea Blend • 300 ml',
    image: '/images/menu_breakfast_tea.jpg',
    isFavorite: false
  }
];

export default function SignatureMenu() {
  const [activeTab, setActiveTab] = useState<Category>('all');
  const containerRef = useRef<HTMLElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);

  // 1. Entrance animation for header and categories
  useGSAP(() => {
    gsap.from('.gsap-menu-header', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 35,
      duration: 1.2,
      ease: 'power3.out',
    });

    gsap.from('.gsap-menu-tab', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 20,
      stagger: 0.08,
      duration: 0.8,
      ease: 'power2.out',
    });
  }, { scope: containerRef });

  // 2. Cascade stagger animation on activeTab update
  useGSAP(() => {
    if (cardsGridRef.current) {
      gsap.fromTo(
        '.gsap-menu-card',
        { opacity: 0, y: 20, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.08,
          duration: 0.6,
          ease: 'power3.out',
        }
      );
    }
  }, { dependencies: [activeTab], scope: cardsGridRef });

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <section
      id="menu"
      ref={containerRef}
      className="relative w-[98vw] lg:w-[97.5vw] rounded-[28px] sm:rounded-[36px] bg-brand-cream/80 backdrop-blur-xl border border-[#B88A24]/18 shadow-2xl overflow-hidden py-16 md:py-20 px-6 md:px-12 lg:px-16 flex flex-col items-center justify-center select-none"
    >
      {/* Background Contrast Softening Overlay */}
      <div className="absolute inset-0 bg-brand-outer/5 backdrop-blur-[1px] pointer-events-none z-[1]" />

      {/* Background Watermark 1: London Skyline spanning the entire box */}
      <div className="absolute inset-0 w-full h-full opacity-[0.16] mix-blend-multiply pointer-events-none select-none z-[0] overflow-hidden rounded-[28px] sm:rounded-[36px]">
        <img
          src="/images/background.png"
          alt="London Skyline watermark"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Background Watermark 2: Coffee Beans on the right */}
      <div className="absolute right-0 top-0 w-[30%] max-w-[280px] h-[340px] opacity-[0.55] pointer-events-none select-none z-[1] overflow-hidden rounded-tr-[28px] sm:rounded-tr-[36px]">
        <img
          src="/images/bean.png"
          alt="Roasted Coffee Beans watermark"
          className="w-full h-full object-contain object-right-top"
        />
      </div>

      {/* Coffee Beans absolute metadata badge (Top Right) */}
      <div className="hidden md:flex flex-col items-center text-center absolute right-[8vw] lg:right-[10vw] top-[10%] z-20 pointer-events-none select-none">
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-brand-gold fill-current mb-1 opacity-70">
          <path d="M12 2a4 4 0 014 4c0 .88-.29 1.7-.78 2.37C16.32 9.25 17 10.53 17 12a4 4 0 01-4 4c-.88 0-1.7-.29-2.37-.78C9.75 16.32 8.47 17 7 17a4 4 0 01-4-4c0-.88.29-1.7.78-2.37C2.68 9.75 2 8.47 2 7a4 4 0 014-4c.88 0 1.7.29 2.37.78C9.25 2.68 10.53 2 12 2z" opacity="0.15"/>
          <path d="M6 3c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6.5C4.62 9.5 3.5 8.38 3.5 7S4.62 4.5 6 4.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zm6-7c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" stroke="currentColor" strokeWidth="1"/>
        </svg>
        <span className="font-sans text-[7px] tracking-[0.2em] font-semibold text-brand-gold uppercase block">PREMIUM BEANS</span>
        <span className="font-sans text-[7px] tracking-[0.2em] font-semibold text-brand-gold uppercase block mt-0.5">SLOW ROASTED</span>
        <span className="font-sans text-[8px] tracking-[0.2em] font-bold text-brand-espresso/60 uppercase block mt-1">PERFECTLY CRAFTED</span>
      </div>

      {/* 1. Header block */}
      <div className="gsap-menu-header flex flex-col items-center text-center mb-3 relative z-10">
        {/* Eyebrow Script */}
        <div className="flex items-center justify-center gap-3 text-brand-gold font-script text-xl sm:text-2xl mb-1">
          <span className="w-8 sm:w-10 h-[1px] bg-brand-gold/30" />
          <span>Our Signature Menu</span>
          <span className="w-8 sm:w-10 h-[1px] bg-brand-gold/30" />
        </div>

        {/* Main Headline */}
        <h2 className="font-serif font-bold text-brand-espresso tracking-tight leading-[1.05] text-[34px] sm:text-[44px] md:text-[52px] lg:text-[60px] uppercase select-none">
          CRAFTED FOR<br />
          <span className="text-brand-gold">EVERY MOMENT</span>
        </h2>

        {/* Small cup divider */}
        <div className="flex items-center justify-center gap-3 text-brand-gold my-2">
          <span className="w-12 h-[1px] bg-brand-gold/30" />
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75H14.25M9.75 12H14.25M6 18H18M18 6v9a3 3 0 01-3 3H9a3 3 0 01-3-3V6h12z" />
          </svg>
          <span className="w-12 h-[1px] bg-brand-gold/30" />
        </div>
      </div>

      {/* 2. Menu Category Tabs Buttons Row */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-5 sm:mb-6 relative z-10 w-full max-w-[800px] px-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`gsap-menu-tab font-sans text-[10px] sm:text-xs font-bold tracking-[0.18em] uppercase transition-all duration-300 focus:outline-none cursor-pointer ${
              activeTab === cat.id
                ? 'bg-brand-green text-brand-cream rounded-full px-5 py-2.5 shadow-md scale-[1.02]'
                : 'text-brand-espresso/65 hover:text-brand-espresso px-4 py-2.5'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 3. Products Cards Grid */}
      <div ref={cardsGridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6 w-full max-w-[1240px] mx-auto items-stretch relative z-10 px-2 sm:px-0">
        {filteredProducts.map((item) => (
          <div
            key={item.index}
            className="gsap-menu-card flex flex-col bg-brand-cream/90 backdrop-blur-md border border-brand-gold/20 rounded-[20px] overflow-hidden shadow-[0_12px_24px_-6px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_35px_-8px_rgba(0,0,0,0.22)] hover:-translate-y-1 transition-all duration-500 ease-custom relative group"
          >
            {/* Top-Left Frosted-Glass Pill Badge */}
            {item.isFavorite && (
              <div className="absolute top-3 left-3 z-20 px-3 py-1 rounded-full bg-brand-espresso/70 backdrop-blur-md border border-brand-gold/30 text-brand-gold text-[10px] font-sans font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-md select-none">
                <span className="text-brand-gold text-[11px]">★</span>
                <span>Best Seller</span>
              </div>
            )}

            {/* Product Image Frame */}
            <div className="relative w-full aspect-square overflow-hidden border-b border-[#B88A24]/10 bg-brand-espresso/5">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-custom"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col p-4 flex-grow justify-between gap-3">
              <div>
                {/* Fixed height title container for 100% consistent vertical alignment */}
                <div className="min-h-[44px] flex flex-col justify-start">
                  <h3 className="font-serif text-[15px] sm:text-base font-bold text-brand-espresso leading-snug tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-brand-espresso/60 font-sans text-[11px] leading-tight font-normal truncate mt-1">
                    {item.subtext}
                  </p>
                </div>
              </div>

              {/* Price and Solid Action Button */}
              <div className="flex items-center justify-between w-full pt-2 border-t border-brand-espresso/10">
                <span className="font-serif text-brand-gold text-base sm:text-lg font-semibold tracking-wide">
                  {item.price}
                </span>
                <button
                  aria-label={`Add ${item.title} to order`}
                  className="w-8 h-8 rounded-full bg-brand-espresso hover:bg-brand-brown text-brand-cream flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-md focus:outline-none focus:ring-2 focus:ring-brand-gold cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
