'use client';

import React from 'react';
import Image from 'next/image';

export default function HeroDecorations() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none z-[0]">
      {/* London Skyline Watermark Texture (z-index 0) */}
      <div 
        className="absolute inset-0 w-full h-full saturate-[0.2] mix-blend-mode-multiply animate-fade-in"
        style={{ opacity: 0.12 }}
      >
        <Image
          src="/images/background.png"
          alt="London skyline with Big Ben"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center block"
          style={{ opacity: 0.12 }}
        />
      </div>
    </div>
  );
}
