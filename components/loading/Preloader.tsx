'use client';

import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Preloader() {
  // Premium Preloader with custom GSAP animations for logo stagger, progress bar, and steam outline effects
  const containerRef = useRef<HTMLDivElement>(null);
  const cupPathRef = useRef<SVGPathElement>(null);
  const handlePathRef = useRef<SVGPathElement>(null);
  const saucerPathRef = useRef<SVGPathElement>(null);
  const steam1Ref = useRef<SVGPathElement>(null);
  const steam2Ref = useRef<SVGPathElement>(null);
  const steam3Ref = useRef<SVGPathElement>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressTextRef = useRef<HTMLDivElement>(null);
  
  const [isVisible, setIsVisible] = useState(true);

  // Helper to add letters to refs array
  const addToLettersRef = (el: HTMLSpanElement | null) => {
    if (el && !lettersRef.current.includes(el)) {
      lettersRef.current.push(el);
    }
  };

  useGSAP(() => {
    // 1. Initial states
    gsap.set([cupPathRef.current, handlePathRef.current, saucerPathRef.current], {
      strokeDasharray: 200,
      strokeDashoffset: 200,
    });
    gsap.set([steam1Ref.current, steam2Ref.current, steam3Ref.current], {
      strokeDasharray: 50,
      strokeDashoffset: 50,
      opacity: 0,
    });
    gsap.set(lettersRef.current, { opacity: 0, y: 15 });
    gsap.set(subtitleRef.current, { opacity: 0, y: 10 });
    gsap.set(progressBarRef.current, { width: '0%' });

    const tl = gsap.timeline({
      onComplete: () => {
        // Fade out/slide out preloader container
        const exitTl = gsap.timeline({
          onComplete: () => {
            // Remove loading class from html tag to trigger page animations
            document.documentElement.classList.remove('loading');
            setIsVisible(false);
          }
        });

        exitTl.to([progressBarRef.current?.parentElement, progressTextRef.current, subtitleRef.current], {
          opacity: 0,
          y: -10,
          duration: 0.4,
          stagger: 0.05,
          ease: 'power2.in',
        })
        .to([lettersRef.current, '.preloader-cup'], {
          opacity: 0,
          y: -20,
          scale: 0.95,
          duration: 0.5,
          ease: 'power2.in',
        }, '-=0.2')
        .to(containerRef.current, {
          yPercent: -100,
          duration: 1.0,
          ease: 'power4.inOut',
        }, '-=0.1');
      }
    });

    // 2. Animate SVG cup outlines
    tl.to([cupPathRef.current, handlePathRef.current, saucerPathRef.current], {
      strokeDashoffset: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power2.out',
    });

    // 3. Animate steam lines rising & looping
    tl.to([steam1Ref.current, steam2Ref.current, steam3Ref.current], {
      strokeDashoffset: 0,
      opacity: 0.6,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power1.out',
    }, '-=0.6');

    // Create a side timeline to loop the steam lines rising continuously
    const steamTl = gsap.timeline({ repeat: -1 });
    steamTl.to([steam1Ref.current, steam2Ref.current, steam3Ref.current], {
      y: -6,
      opacity: 0.2,
      duration: 1.5,
      stagger: 0.2,
      ease: 'sine.inOut',
    })
    .to([steam1Ref.current, steam2Ref.current, steam3Ref.current], {
      opacity: 0.8,
      y: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: 'sine.inOut',
    });

    // 4. Stagger letters of "LONDON COFFEE"
    tl.to(lettersRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.04,
      ease: 'back.out(1.7)',
    }, '-=0.4');

    // 5. Fade in Subtitle
    tl.to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out',
    }, '-=0.2');

    // 6. Simulate Progress Bar loading & Counter
    const obj = { value: 0 };
    tl.to(obj, {
      value: 100,
      duration: 1.8,
      ease: 'power2.out',
      onUpdate: () => {
        const roundedVal = Math.round(obj.value);
        if (progressBarRef.current) {
          progressBarRef.current.style.width = `${roundedVal}%`;
        }
        if (progressTextRef.current) {
          progressTextRef.current.textContent = `${roundedVal}%`;
        }
      }
    }, '-=0.5');

  }, { scope: containerRef });

  if (!isVisible) return null;

  const brandName = "LONDON COFFEE";

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full bg-brand-outer z-[9999] flex flex-col items-center justify-center select-none overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center">
        {/* Animated Premium Coffee Cup SVG */}
        <div className="preloader-cup w-24 h-24 mb-6 relative flex items-center justify-center">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Steam Line 1 */}
            <path
              ref={steam1Ref}
              d="M 38,32 C 36,22 43,18 40,10"
              stroke="#C59E3F"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Steam Line 2 */}
            <path
              ref={steam2Ref}
              d="M 48,32 C 46,20 53,16 50,8"
              stroke="#C59E3F"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Steam Line 3 */}
            <path
              ref={steam3Ref}
              d="M 58,32 C 56,22 63,18 60,10"
              stroke="#C59E3F"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Cup Body Outline */}
            <path
              ref={cupPathRef}
              d="M 28,40 C 28,40 68,40 68,40 C 68,60 63,70 48,70 C 33,70 28,60 28,40 Z"
              stroke="#C59E3F"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Cup Handle */}
            <path
              ref={handlePathRef}
              d="M 68,45 C 76,45 76,57 68,60"
              stroke="#C59E3F"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Saucer */}
            <path
              ref={saucerPathRef}
              d="M 18,76 C 18,76 78,76 78,76"
              stroke="#C59E3F"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Text Logo with Letter Staggering */}
        <h2 className="font-serif tracking-[0.25em] text-brand-cream text-xl sm:text-2xl md:text-3xl uppercase font-bold flex items-center justify-center">
          {brandName.split('').map((char, index) => (
            <span
              key={index}
              ref={addToLettersRef}
              className={`inline-block ${char === ' ' ? 'w-3' : ''}`}
            >
              {char}
            </span>
          ))}
        </h2>

        {/* Subtitle Accent */}
        <div
          ref={subtitleRef}
          className="font-script text-brand-gold text-lg sm:text-xl md:text-2xl mt-2 tracking-wide"
        >
          Brewing your experience
        </div>

        {/* Progress Bar & Numeric Counter Container */}
        <div className="flex flex-col items-center mt-8 gap-2 w-48">
          <div className="w-full h-[2px] bg-brand-cream/10 rounded-full overflow-hidden relative">
            <div
              ref={progressBarRef}
              className="h-full bg-brand-gold absolute left-0 top-0 rounded-full"
            />
          </div>
          <div
            ref={progressTextRef}
            className="text-[10px] tracking-[0.15em] text-brand-cream/55 font-mono uppercase mt-1"
          >
            0%
          </div>
        </div>
      </div>
    </div>
  );
}
