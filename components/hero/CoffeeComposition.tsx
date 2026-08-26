'use client';

import React from 'react';
import Image from 'next/image';

export default function CoffeeComposition() {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[300px] sm:h-[350px] md:h-[400px] z-40 overflow-visible flex items-end justify-center select-none pointer-events-none">
      
      {/* Center Cup: Caramel Coffee (coffee1.png) - Main Hero Coffee Cup that animates into Story Section */}
      <div 
        id="hero-coffee-cup"
        className="absolute left-[58%] sm:left-[56%] lg:left-[54%] -translate-x-1/2 bottom-[-90px] sm:bottom-[-100px] lg:bottom-[-110px] w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] aspect-[3/4] z-[100] origin-center pointer-events-auto transition-transform-gpu"
        style={{ transform: 'rotate(8deg) scale(1.0)' }}
      >
        <div className="relative w-full h-full origin-center">
          <Image
            src="/images/coffee1.png"
            alt="London Coffee caramel iced coffee"
            fill
            priority
            sizes="(max-width: 640px) 240px, (max-width: 1024px) 300px, 340px"
            className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]"
          />
        </div>
      </div>

    </div>
  );
}
