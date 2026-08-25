'use client';

import React from 'react';
import Image from 'next/image';

export default function CoffeeComposition() {
  return (
    <div className="absolute bottom-[-165px] sm:bottom-[-185px] lg:bottom-[-215px] left-1/2 -translate-x-1/2 w-[90vw] max-w-[900px] h-[400px] sm:h-[450px] md:h-[500px] lg:h-[580px] z-20 overflow-visible flex items-end justify-center select-none pointer-events-none">
      
      {/* Center Cup: Caramel Coffee (coffee1.png) - Humongous & Off-Center Right Upright (No Hover, No Tilt, Positioned Lower, Shifted Slightly Further Right) */}
      <div className="absolute left-[63%] sm:left-[62%] lg:left-[61%] -translate-x-1/2 bottom-[-50px] sm:bottom-[-70px] lg:bottom-[-100px] w-[72%] sm:w-[65%] lg:w-[58%] aspect-[3/4] z-30 origin-bottom animate-cup-center delay-1000">
        <div className="relative w-full h-full origin-bottom pointer-events-auto">
          <Image
            src="/images/coffee1.png"
            alt="London Coffee caramel iced coffee"
            fill
            priority
            sizes="(max-width: 640px) 70vw, (max-width: 1024px) 60vw, 520px"
            className="object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.35)]"
          />
        </div>
      </div>

    </div>
  );
}
