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
    description: 'Smooth espresso with creamy milk & rich caramel.',
    image: '/images/menu_caramel_latte.jpg',
    isFavorite: true
  },
  {
    index: '02',
    title: 'London Cappuccino',
    category: 'hot',
    price: '₹229',
    description: 'Classic cappuccino with the perfect balance of foam.',
    image: '/images/menu_london_cappuccino.jpg',
    isFavorite: false
  },
  {
    index: '03',
    title: 'Iced Hazelnut Latte',
    category: 'iced',
    price: '₹269',
    description: 'Chilled espresso with hazelnut & smooth milk over ice.',
    image: '/images/menu_iced_hazelnut.jpg',
    isFavorite: false
  },
  {
    index: '04',
    title: 'Mocha Frappe',
    category: 'frappe',
    price: '₹279',
    description: 'Rich mocha blended with ice, topped with whipped cream.',
    image: '/images/menu_mocha_frappe.jpg',
    isFavorite: false
  },
  {
    index: '05',
    title: 'English Breakfast Tea',
    category: 'tea',
    price: '₹149',
    description: 'A robust & aromatic tea blend. Perfect to relax.',
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
      className="relative w-[98vw] lg:w-[97.5vw] rounded-[28px] sm:rounded-[36px] bg-brand-cream border border-[#B88A24]/18 shadow-2xl overflow-hidden py-16 md:py-20 px-6 md:px-12 lg:px-16 flex flex-col items-center justify-center select-none"
    >
      {/* Background Watermark 1: London Skyline spanning the entire box */}
      <div className="absolute inset-0 w-full h-full opacity-[0.05] mix-blend-multiply pointer-events-none select-none z-[0] overflow-hidden rounded-[28px] sm:rounded-[36px]">
        <img
          src="/images/background.png"
          alt="London Skyline watermark"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Background Watermark 2: Coffee Beans on the right */}
      <div className="absolute right-0 top-0 w-[30%] max-w-[280px] h-[340px] opacity-[0.25] pointer-events-none select-none z-[1] overflow-hidden rounded-tr-[28px] sm:rounded-tr-[36px]">
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
      <div className="gsap-menu-header flex flex-col items-center text-center mb-10 relative z-10">
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
        <div className="flex items-center justify-center gap-3 text-brand-gold my-3.5">
          <span className="w-12 h-[1px] bg-brand-gold/30" />
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75H14.25M9.75 12H14.25M6 18H18M18 6v9a3 3 0 01-3 3H9a3 3 0 01-3-3V6h12z" />
          </svg>
          <span className="w-12 h-[1px] bg-brand-gold/30" />
        </div>

        {/* Supporting description */}
        <p className="text-brand-espresso/85 font-sans text-xs sm:text-[13px] max-w-[480px] leading-relaxed px-4">
          From rich espresso to creamy indulgences, every drink is handcrafted with premium beans and passion.
        </p>
      </div>

      {/* 2. Menu Category Tabs Buttons Row */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 relative z-10 w-full max-w-[800px] px-4">
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
            className="gsap-menu-card flex flex-col bg-brand-cream border border-[#B88A24]/20 rounded-[20px] overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.015] transition-all duration-500 ease-custom relative group"
          >
            {/* Customer Favorite Circle Badge overlay */}
            {item.isFavorite && (
              <div className="absolute top-3 right-3 z-20 w-11 h-11 rounded-full bg-brand-gold text-brand-cream flex flex-col items-center justify-center shadow-md select-none">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-brand-cream">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span className="text-[5px] font-bold tracking-widest uppercase text-center leading-[1] mt-0.5">FAVORITE</span>
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
            <div className="flex flex-col p-4 flex-grow justify-between">
              <div>
                <h3 className="font-serif text-[13px] sm:text-[14px] font-bold text-brand-espresso tracking-wide uppercase mb-1">
                  {item.title}
                </h3>
                <p className="text-brand-espresso/75 font-sans text-[11px] leading-relaxed font-light mb-4">
                  {item.description}
                </p>
              </div>

              {/* Price and Add button */}
              <div className="flex items-center justify-between w-full pt-1.5 border-t border-brand-espresso/5">
                <span className="font-serif text-brand-gold text-base sm:text-lg font-light tracking-wide">
                  {item.price}
                </span>
                <button
                  className="w-7.5 h-7.5 rounded-full border border-[#B88A24]/35 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-cream hover:border-transparent transition-all duration-300 focus:outline-none cursor-pointer shadow-sm active:scale-95"
                >
                  <span className="text-sm font-semibold mt-[-2px]">+</span>
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
