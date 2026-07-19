'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function AboutAwwward() {
  const tAbout = useTranslations('about');
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const yImage = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yText = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const marqueeX = useTransform(scrollYProgress, [0, 1], [200, -800]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full overflow-hidden bg-[#111] text-white py-40 mt-20"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-20">
          <motion.div 
            style={{ y: yText }}
            className="w-full md:w-1/2 flex flex-col justify-center"
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-8 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-gray-400"></span>
              {tAbout('title')}
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-[1.6] tracking-wide text-gray-200 max-w-xl text-pretty">
              {tAbout('text')}
            </p>
          </motion.div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            <div className="relative w-full max-w-[400px] aspect-square overflow-hidden rounded-full">
              <motion.div 
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, -30]) }}
                className="w-full h-full"
              >
                <Image 
                  src="/about/profile me.webp" 
                  alt="HOIEST Profile" 
                  fill 
                  unoptimized
                  className="object-cover object-top"
                />
              </motion.div>
            </div>
          </div>
        </div>

      </div>



    </section>
  );
}
