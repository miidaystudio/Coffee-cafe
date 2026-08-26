'use client';

import React, { useRef, useState } from 'react';
import { MapPin, Clock, Phone, Mail, Calendar, Users, Send, Check, MessageSquare, Coffee } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

type FormTab = 'reserve' | 'message';

export default function ContactSection() {
  const containerRef = useRef<HTMLElement>(null);

  // Form states
  const [activeTab, setActiveTab] = useState<FormTab>('reserve');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form Fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState('2');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
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
        setDate('');
        setTime('');
      }, 5000);
    }, 1500);
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
      <div className="gsap-contact-header text-center mb-12 sm:mb-16 relative z-10 max-w-[600px]">
        {/* Eyebrow Script */}
        <div className="flex items-center justify-center gap-3 text-brand-gold font-script text-xl sm:text-2xl mb-2.5">
          <span>Connect With Us</span>
        </div>
        
        {/* Headline - Elegant Serif */}
        <h2 className="font-serif font-semibold text-brand-cream tracking-tight leading-[1.1] text-[34px] sm:text-[44px] lg:text-[48px] uppercase">
          RESERVE A TABLE & <br />
          <span className="text-brand-gold">VISIT LONDON COFFEE</span>
        </h2>
        
        {/* Minimal gold divider */}
        <div className="w-14 h-[1px] bg-brand-gold/35 mx-auto my-4 sm:my-5" />
        
        {/* Description */}
        <p className="text-brand-cream/75 font-sans text-xs sm:text-[13px] font-light leading-relaxed tracking-wide">
          Whether you are seeking a quiet corner for a morning pour-over, a curated afternoon tea experience, or planning an exclusive tasting session, we invite you to claim your space.
        </p>
      </div>

      {/* Main Content Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full max-w-[1140px] mx-auto items-stretch relative z-10">
        
        {/* Left Column: Info Card & Journal Image (5 Columns) */}
        <div className="gsap-contact-left lg:col-span-5 flex flex-col justify-between gap-6 w-full">
          {/* Information Card */}
          <div className="border border-brand-gold/20 p-6 sm:p-8 rounded-[24px] bg-brand-espresso/30 backdrop-blur-[4px] shadow-xl flex flex-col gap-6">
            <h3 className="font-serif text-[18px] sm:text-[20px] font-semibold text-brand-cream tracking-wider uppercase flex items-center gap-2.5">
              <Coffee className="w-4 h-4 text-brand-gold" />
              <span>THE CAFÉ LOCATION</span>
            </h3>
            <div className="h-[1px] bg-brand-cream/10 w-full" />
            
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full border border-brand-gold/25 flex items-center justify-center bg-brand-outer/50 flex-shrink-0 text-brand-gold font-bold">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-sans text-[10px] font-bold tracking-[0.15em] text-brand-gold uppercase mb-1">VISIT US</h4>
                <p className="text-brand-cream/80 font-sans text-[12px] font-light leading-relaxed">
                  42 Regent Street, Soho,<br />
                  London, W1B 5RL, United Kingdom
                </p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full border border-brand-gold/25 flex items-center justify-center bg-brand-outer/50 flex-shrink-0 text-brand-gold font-bold">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-sans text-[10px] font-bold tracking-[0.15em] text-brand-gold uppercase mb-1">HOURS OF SERVICE</h4>
                <p className="text-brand-cream/80 font-sans text-[12px] font-light leading-relaxed">
                  <span className="font-medium text-brand-cream">Monday – Friday:</span> 07:00 AM – 08:00 PM<br />
                  <span className="font-medium text-brand-cream">Saturday – Sunday:</span> 08:00 AM – 10:00 PM
                </p>
              </div>
            </div>

            {/* Phone & Email */}
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full border border-brand-gold/25 flex items-center justify-center bg-brand-outer/50 flex-shrink-0 text-brand-gold font-bold">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-sans text-[10px] font-bold tracking-[0.15em] text-brand-gold uppercase mb-1">GET IN TOUCH</h4>
                <p className="text-brand-cream/80 font-sans text-[12px] font-light leading-relaxed">
                  Phone: <a href="tel:+442079460192" className="hover:text-brand-gold transition-colors font-medium">+44 20 7946 0192</a><br />
                  Email: <a href="mailto:hello@londoncoffee.co.uk" className="hover:text-brand-gold transition-colors font-medium">hello@londoncoffee.co.uk</a>
                </p>
              </div>
            </div>
          </div>

          {/* Journal Image Frame */}
          <div className="group relative overflow-hidden rounded-[24px] border border-brand-gold/20 aspect-[4/3] w-full shadow-2xl flex-grow">
            <img
              src="/images/contact_journal.jpg"
              alt="London Coffee Reservation Journal"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-custom"
            />
            {/* Visual Frame overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-outer/80 via-brand-outer/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-6 z-10 flex flex-col">
              <span className="font-serif text-[16px] italic text-brand-cream">"A little London, in every cup."</span>
              <span className="font-sans text-[9px] tracking-[0.2em] font-bold text-brand-gold uppercase mt-1">ESTABLISHED 2023</span>
            </div>
          </div>
        </div>

        {/* Right Column: Reservation / Message Form (7 Columns) */}
        <div className="gsap-contact-right lg:col-span-7 flex flex-col">
          <div className="border border-brand-gold/20 p-6 sm:p-8 rounded-[24px] bg-brand-espresso/30 backdrop-blur-[4px] shadow-xl flex flex-col h-full relative overflow-hidden">
            
            {/* Form Mode Selector (Tabs) */}
            <div className="grid grid-cols-2 gap-3 mb-8 p-1 bg-brand-outer/50 border border-brand-gold/15 rounded-xl">
              <button
                type="button"
                onClick={() => { setActiveTab('reserve'); if(isSubmitted) setIsSubmitted(false); }}
                className={`py-2.5 rounded-lg font-sans text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === 'reserve'
                    ? 'bg-brand-gold text-brand-outer shadow-md'
                    : 'text-brand-cream/60 hover:text-brand-cream hover:bg-brand-cream/[0.03]'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>RESERVE TABLE</span>
              </button>
              <button
                type="button"
                onClick={() => { setActiveTab('message'); if(isSubmitted) setIsSubmitted(false); }}
                className={`py-2.5 rounded-lg font-sans text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === 'message'
                    ? 'bg-brand-gold text-brand-outer shadow-md'
                    : 'text-brand-cream/60 hover:text-brand-cream hover:bg-brand-cream/[0.03]'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>SEND MESSAGE</span>
              </button>
            </div>

            {/* Success State Overlay */}
            {isSubmitted && (
              <div className="absolute inset-0 bg-brand-outer/95 backdrop-blur-[2px] z-20 flex flex-col items-center justify-center p-8 text-center animate-fade-in">
                <div className="w-16 h-16 rounded-full border border-brand-gold bg-brand-espresso flex items-center justify-center text-brand-gold mb-6 shadow-[0_0_15px_rgba(184,138,36,0.3)] animate-fade-in-up">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-[24px] sm:text-[28px] font-semibold text-brand-cream uppercase tracking-wide mb-3">
                  {activeTab === 'reserve' ? 'Reservation Requested' : 'Message Sent Successfully'}
                </h4>
                <p className="text-brand-cream/80 font-sans text-[12px] sm:text-[13px] font-light leading-relaxed max-w-[380px] mb-8">
                  {activeTab === 'reserve'
                    ? 'Thank you for choosing London Coffee. We are preparing a perfect table for you. A confirmation email with booking details is on its way.'
                    : 'Your message has been received by our London team. We will review your inquiry and get back to you within 24 hours.'}
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 border border-brand-gold/30 hover:border-brand-gold text-brand-gold rounded-full font-sans text-[10px] font-bold tracking-[0.15em] uppercase hover:bg-brand-gold hover:text-brand-outer transition-all duration-300 cursor-pointer"
                >
                  Close & New Request
                </button>
              </div>
            )}

            {/* The Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-grow justify-between">
              
              <div className="flex flex-col gap-4">
                {/* Field Group: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="font-sans text-[9px] font-bold tracking-[0.2em] text-brand-gold uppercase pl-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full bg-brand-outer/35 border border-brand-gold/20 rounded-xl px-4 py-3 text-[13px] text-brand-cream placeholder-brand-cream/25 focus:outline-none focus:border-brand-gold/75 focus:ring-1 focus:ring-brand-gold/75 transition-all duration-300 font-sans font-light"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-sans text-[9px] font-bold tracking-[0.2em] text-brand-gold uppercase pl-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. eleanor@example.com"
                      className="w-full bg-brand-outer/35 border border-brand-gold/20 rounded-xl px-4 py-3 text-[13px] text-brand-cream placeholder-brand-cream/25 focus:outline-none focus:border-brand-gold/75 focus:ring-1 focus:ring-brand-gold/75 transition-all duration-300 font-sans font-light"
                    />
                  </div>
                </div>

                {/* Tab Content - Table Reservation Fields */}
                {activeTab === 'reserve' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in">
                    
                    {/* Date Picker */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="date" className="font-sans text-[9px] font-bold tracking-[0.2em] text-brand-gold uppercase pl-1">
                        Select Date *
                      </label>
                      <input
                        type="date"
                        id="date"
                        required={activeTab === 'reserve'}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-brand-outer/35 border border-brand-gold/20 rounded-xl px-4 py-3 text-[13px] text-brand-cream placeholder-brand-cream/25 focus:outline-none focus:border-brand-gold/75 focus:ring-1 focus:ring-brand-gold/75 transition-all duration-300 font-sans font-light"
                      />
                    </div>

                    {/* Time Picker */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="time" className="font-sans text-[9px] font-bold tracking-[0.2em] text-brand-gold uppercase pl-1">
                        Preferred Time *
                      </label>
                      <input
                        type="time"
                        id="time"
                        required={activeTab === 'reserve'}
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full bg-brand-outer/35 border border-brand-gold/20 rounded-xl px-4 py-3 text-[13px] text-brand-cream placeholder-brand-cream/25 focus:outline-none focus:border-brand-gold/75 focus:ring-1 focus:ring-brand-gold/75 transition-all duration-300 font-sans font-light"
                      />
                    </div>

                    {/* Guest Count */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="guests" className="font-sans text-[9px] font-bold tracking-[0.2em] text-brand-gold uppercase pl-1">
                        Guests *
                      </label>
                      <div className="relative">
                        <select
                          id="guests"
                          value={guests}
                          onChange={(e) => setGuests(e.target.value)}
                          className="w-full bg-brand-outer/35 border border-brand-gold/20 rounded-xl px-4 py-3 text-[13px] text-brand-cream focus:outline-none focus:border-brand-gold/75 focus:ring-1 focus:ring-brand-gold/75 transition-all duration-300 font-sans font-light appearance-none cursor-pointer"
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 People</option>
                          <option value="3">3 People</option>
                          <option value="4">4 People</option>
                          <option value="5">5 People</option>
                          <option value="6">6+ People (Event)</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-gold">
                          <Users className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>

                  </div>
                )}

                {/* Message Field (Textarea) */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-sans text-[9px] font-bold tracking-[0.2em] text-brand-gold uppercase pl-1">
                    {activeTab === 'reserve' ? 'Special Requests (Optional)' : 'Your Message *'}
                  </label>
                  <textarea
                    id="message"
                    rows={activeTab === 'reserve' ? 3 : 5}
                    required={activeTab === 'message'}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={activeTab === 'reserve' ? 'e.g. Window seat preferred, food allergies, celebrating a special occasion...' : 'How can we help you? Write your message here...'}
                    className="w-full bg-brand-outer/35 border border-brand-gold/20 rounded-xl px-4 py-3 text-[13px] text-brand-cream placeholder-brand-cream/25 focus:outline-none focus:border-brand-gold/75 focus:ring-1 focus:ring-brand-gold/75 transition-all duration-300 font-sans font-light resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-6 bg-brand-gold text-brand-outer border border-brand-gold hover:bg-transparent hover:text-brand-gold rounded-xl py-3.5 font-sans text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-[0_4px_20px_rgba(184,138,36,0.2)] disabled:opacity-60 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-brand-outer border-t-transparent rounded-full animate-spin" />
                ) : activeTab === 'reserve' ? (
                  <>
                    <Calendar className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    <span>CONFIRM TABLE RESERVATION</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <span>SEND MESSAGE</span>
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
