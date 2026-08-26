'use client';

import React, { useRef, useState } from 'react';
import { MapPin, Clock, Phone, Send, Check, Coffee } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const containerRef = useRef<HTMLElement>(null);

  // Form states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form Fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setTimeout(() => {
        setIsSubmitted(false);
        setName('');
        setEmail('');
        setMessage('');
      }, 6000);
    }, 1200);
  };

  useGSAP(() => {
    // 1. Entrance animation for the header title area
    gsap.from('.gsap-contact-header', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 30,
      duration: 1.2,
      ease: 'power3.out',
    });

    // 2. Entrance slide-in for left details card & image
    gsap.from('.gsap-contact-left', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      x: -40,
      duration: 1.2,
      ease: 'power3.out',
    });

    // 3. Entrance slide-in for right form card
    gsap.from('.gsap-contact-right', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      x: 40,
      duration: 1.2,
      ease: 'power3.out',
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative w-full py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-16 flex flex-col items-center justify-center select-none bg-transparent"
    >
      {/* Structural Editorial Gridlines */}
      <div className="absolute left-[8vw] top-0 w-[1px] h-full bg-brand-cream/[0.04] pointer-events-none hidden xl:block" />
      <div className="absolute right-[8vw] top-0 w-[1px] h-full bg-brand-cream/[0.04] pointer-events-none hidden xl:block" />

      {/* Header Area */}
      <div className="gsap-contact-header text-center mb-12 sm:mb-16 relative z-10 max-w-[680px]">
        {/* Eyebrow Script */}
        <div className="text-brand-gold font-script text-2xl sm:text-3xl mb-2">
          Connect With Us
        </div>
        
        {/* Headline - Elegant Serif */}
        <h2 className="font-serif font-bold text-brand-cream tracking-tight leading-[1.08] text-[32px] sm:text-[42px] lg:text-[48px] uppercase">
          GET IN TOUCH &<br />
          <span className="text-brand-gold">EXPLORE LONDON COFFEE</span>
        </h2>
        
        {/* Minimal gold divider */}
        <div className="w-14 h-[1px] bg-brand-gold/35 mx-auto my-4 sm:my-5" />
        
        {/* Description */}
        <p className="text-brand-cream/75 font-sans text-xs sm:text-[13px] font-light leading-relaxed tracking-wide max-w-[540px] mx-auto">
          For inquiries, special requests, feedback, or to learn more about our handcrafted coffee and curated experiences, we invite you to reach out. We look forward to connecting.
        </p>
      </div>

      {/* Main Content Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 w-full max-w-[1160px] mx-auto items-start relative z-10">
        
        {/* Left Column: Cafe Location Card & Photo (5 Columns) */}
        <div className="gsap-contact-left lg:col-span-5 flex flex-col gap-6 w-full">
          
          {/* Café Location Card */}
          <div className="border border-brand-gold/20 p-6 sm:p-8 rounded-[24px] bg-brand-espresso/35 backdrop-blur-md shadow-2xl flex flex-col gap-6">
            <h3 className="font-serif text-[18px] sm:text-[20px] font-bold text-brand-cream tracking-wider uppercase flex items-center gap-2.5">
              <Coffee className="w-4.5 h-4.5 text-brand-gold" />
              <span>THE CAFÉ LOCATION</span>
            </h3>
            <div className="h-[1px] bg-brand-cream/10 w-full" />
            
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full border border-brand-gold/30 flex items-center justify-center bg-brand-outer/60 flex-shrink-0 text-brand-gold">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-sans text-[10px] font-bold tracking-[0.18em] text-brand-gold uppercase mb-1">VISIT US</h4>
                <p className="text-brand-cream/85 font-sans text-[12px] font-light leading-relaxed">
                  42 Regent Street, Soho,<br />
                  London, W1B 5RL, United Kingdom
                </p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full border border-brand-gold/30 flex items-center justify-center bg-brand-outer/60 flex-shrink-0 text-brand-gold">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-sans text-[10px] font-bold tracking-[0.18em] text-brand-gold uppercase mb-1">HOURS OF SERVICE</h4>
                <p className="text-brand-cream/85 font-sans text-[12px] font-light leading-relaxed">
                  <span className="font-medium text-brand-cream">Monday – Friday:</span> 07:00 AM – 06:00 PM<br />
                  <span className="font-medium text-brand-cream">Saturday – Sunday:</span> 08:00 AM – 10:00 PM
                </p>
              </div>
            </div>

            {/* Phone & Email */}
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full border border-brand-gold/30 flex items-center justify-center bg-brand-outer/60 flex-shrink-0 text-brand-gold">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-sans text-[10px] font-bold tracking-[0.18em] text-brand-gold uppercase mb-1">GET IN TOUCH</h4>
                <p className="text-brand-cream/85 font-sans text-[12px] font-light leading-relaxed">
                  Phone: <a href="tel:+442879450192" className="hover:text-brand-gold transition-colors font-medium">+44 28 7945 0192</a><br />
                  Email: <a href="mailto:hello@londoncoffee.co.uk" className="hover:text-brand-gold transition-colors font-medium">hello@londoncoffee.co.uk</a>
                </p>
              </div>
            </div>
          </div>

          {/* Café Atmosphere Image Frame */}
          <div className="group relative overflow-hidden rounded-[24px] border border-brand-gold/20 aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/9] w-full shadow-2xl">
            <img
              src="/images/contact_journal.jpg"
              alt="London Coffee Café Atmosphere"
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-1000 ease-custom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-outer/85 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-6 z-10 flex flex-col">
              <span className="font-serif text-[15px] italic text-brand-cream">"A little London, in every cup."</span>
              <span className="font-sans text-[8px] tracking-[0.2em] font-bold text-brand-gold uppercase mt-0.5">ESTABLISHED 2026</span>
            </div>
          </div>

        </div>

        {/* Right Column: Send Us A Message Form (7 Columns) */}
        <div className="gsap-contact-right lg:col-span-7 flex flex-col h-full">
          <div className="border border-brand-gold/20 p-6 sm:p-8 rounded-[24px] bg-brand-espresso/35 backdrop-blur-md shadow-2xl flex flex-col h-full relative overflow-hidden">
            
            <h3 className="font-serif text-[18px] sm:text-[20px] font-bold text-brand-cream tracking-wider uppercase mb-6">
              SEND US A MESSAGE
            </h3>

            {/* Success State Overlay */}
            {isSubmitted && (
              <div className="absolute inset-0 bg-brand-outer/95 backdrop-blur-md z-20 flex flex-col items-center justify-center p-8 text-center animate-fade-in">
                <div className="w-16 h-16 rounded-full border border-brand-gold bg-brand-espresso flex items-center justify-center text-brand-gold mb-6 shadow-[0_0_20px_rgba(184,138,36,0.3)] animate-fade-in-up">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-[24px] sm:text-[28px] font-semibold text-brand-cream uppercase tracking-wide mb-3">
                  Message Sent Successfully
                </h4>
                <p className="text-brand-cream/80 font-sans text-[12px] sm:text-[13px] font-light leading-relaxed max-w-[380px] mb-8">
                  Your message has been received by our London team. We will review your inquiry and get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 border border-brand-gold/30 hover:border-brand-gold text-brand-gold rounded-full font-sans text-[10px] font-bold tracking-[0.15em] uppercase hover:bg-brand-gold hover:text-brand-outer transition-all duration-300 cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            )}

            {/* Message Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-grow justify-between">
              <div className="flex flex-col gap-4">
                
                {/* Two-column Input Row: Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="font-sans text-[9px] font-bold tracking-[0.2em] text-brand-gold uppercase pl-1">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Full Name"
                      className="w-full bg-brand-outer/50 border border-brand-gold/20 rounded-xl px-4 py-3 text-[13px] text-brand-cream placeholder-brand-cream/30 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all duration-300 font-sans font-light"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-sans text-[9px] font-bold tracking-[0.2em] text-brand-gold uppercase pl-1">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. eleanor@example.com"
                      className="w-full bg-brand-outer/50 border border-brand-gold/20 rounded-xl px-4 py-3 text-[13px] text-brand-cream placeholder-brand-cream/30 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all duration-300 font-sans font-light"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-sans text-[9px] font-bold tracking-[0.2em] text-brand-gold uppercase pl-1">
                    YOUR MESSAGE (OPTIONAL)
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message (optional)..."
                    className="w-full bg-brand-outer/50 border border-brand-gold/20 rounded-xl px-4 py-3 text-[13px] text-brand-cream placeholder-brand-cream/30 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all duration-300 font-sans font-light resize-none"
                  />
                </div>

              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 bg-brand-gold hover:bg-brand-gold-bright text-brand-outer font-sans text-[11px] font-bold tracking-[0.2em] uppercase py-3.5 px-6 rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:scale-[1.01] active:scale-95 disabled:opacity-60"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-brand-outer border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>SEND ENQUIRY</span>
                  </>
                )}
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
