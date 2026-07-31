'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Props {
  folder: string;
  images: string[];
}

export default function TutorialSlider({ folder, images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!images || images.length === 0) return null;

  const nextSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="relative group w-full aspect-video bg-gray-100 rounded-xl overflow-hidden cursor-zoom-in" onClick={() => setLightboxOpen(true)}>
        <Image
          src={`${folder}/${images[currentIndex]}`}
          alt={`Slide ${currentIndex + 1}`}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 1024px) 100vw, 80vw"
        />
        
        {images.length > 1 && (
          <>
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-md z-10"
              aria-label="Previous"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-md z-10"
              aria-label="Next"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
            </button>
            
            <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2 z-10">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                  className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/80'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {lightboxOpen && (
        <dialog 
          className="m-0 fixed inset-0 w-full h-full max-w-full max-h-full bg-transparent z-[9999] flex items-center justify-center"
          open
          onClick={() => setLightboxOpen(false)}
        >
          <div className="fixed inset-0 bg-black/95 backdrop-blur-sm" />
          
          <button className="absolute top-4 right-4 z-50 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors" onClick={() => setLightboxOpen(false)}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
          
          <button className="absolute left-4 top-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center text-white/50 hover:text-white transition-colors z-50" onClick={(e) => { e.stopPropagation(); prevSlide(); }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          <div className="relative z-10 w-full max-w-[90vw] h-[85vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Image 
              src={`${folder}/${images[currentIndex]}`}
              alt={`Full Slide ${currentIndex + 1}`}
              fill
              unoptimized
              className="object-contain"
              sizes="100vw"
            />
          </div>

          <button className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center text-white/50 hover:text-white transition-colors z-50" onClick={(e) => { e.stopPropagation(); nextSlide(); }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </dialog>
      )}
    </>
  );
}
