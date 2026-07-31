'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Props {
  title: string;
  folder: string;
  images: string[];
}

export default function TutorialGallery({ title, folder, images }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  
  // Pagination for thumbnails
  const [page, setPage] = useState(0);
  const THUMBNAILS_PER_PAGE = 4;
  const totalPages = Math.ceil(images.length / THUMBNAILS_PER_PAGE);
  
  const currentThumbnails = images.slice(page * THUMBNAILS_PER_PAGE, (page + 1) * THUMBNAILS_PER_PAGE);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const moveLightbox = (direction: number) => {
    setActiveIndex((prev) => (prev + direction + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowLeft') moveLightbox(-1);
      if (e.key === 'ArrowRight') moveLightbox(1);
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, images.length]);

  return (
    <div className="flex flex-col gap-4">
      {/* Large Main Image */}
      <div 
        className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 rounded-lg cursor-zoom-in group"
        onClick={() => openLightbox(activeIndex)}
      >
        <Image
          src={`${folder}/${images[activeIndex]}`}
          alt={`${title} - Main`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
          unoptimized
        />
      </div>

      {/* Thumbnails Gallery */}
      <div className="relative">
        <div className="grid grid-cols-4 gap-2">
          {currentThumbnails.map((img, idx) => {
            const realIndex = page * THUMBNAILS_PER_PAGE + idx;
            return (
              <button 
                key={realIndex}
                onClick={() => setActiveIndex(realIndex)}
                className={`relative aspect-square overflow-hidden rounded-md transition-all ${
                  realIndex === activeIndex ? 'ring-2 ring-black opacity-100' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <Image
                  src={`${folder}/${img}`}
                  alt={`${title} - Thumbnail ${realIndex + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 25vw, 12vw"
                  unoptimized
                />
              </button>
            );
          })}
        </div>
        
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-4">
            <button 
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0}
              className="p-2 disabled:opacity-30 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <div className="text-sm font-medium text-gray-500">
              {page + 1} / {totalPages}
            </div>
            <button 
              onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="p-2 disabled:opacity-30 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <dialog 
          className="lightbox-dialog m-0 fixed inset-0 w-full h-full max-w-full max-h-full bg-transparent z-[9999] flex items-center justify-center backdrop-blur-sm"
          open
          onClick={(e) => {
            const target = e.target as HTMLElement;
            if (target.classList.contains('lightbox-dialog') || target.classList.contains('lightbox-backdrop')) {
              closeLightbox();
            }
          }}
        >
          <div className="lightbox-backdrop fixed inset-0 bg-black/90" />
          
          <div className="lightbox-toolbar absolute top-0 left-0 w-full p-4 flex justify-between items-center z-10 bg-gradient-to-b from-black/50 to-transparent">
            <div className="lightbox-counter text-white/70 font-semibold tracking-wider text-sm ml-4 font-mono">
              {activeIndex + 1} / {images.length}
            </div>
            <button className="lightbox-close w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white border-none cursor-pointer transition-transform hover:scale-110 active:scale-95 mr-2" onClick={closeLightbox}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>

          <button className="lightbox-prev absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white border-none cursor-pointer z-10 transition-transform hover:scale-110 active:scale-95 max-md:w-10 max-md:h-10 max-md:left-2" onClick={(e) => { e.stopPropagation(); moveLightbox(-1); }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          
          <figure className="lightbox-figure relative z-[1] w-full h-full m-0 p-8 flex flex-col items-center justify-center max-md:p-4">
            <div className="relative w-full max-w-[90vw] h-[80vh] flex items-center justify-center">
              <Image 
                src={`${folder}/${images[activeIndex]}`}
                alt={`${title} - ${activeIndex + 1}`}
                fill
                unoptimized
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            <figcaption className="lightbox-caption mt-4 text-white/80 font-medium tracking-wide text-sm text-center max-w-[80%] max-md:text-xs">
              {title} - {activeIndex + 1}
            </figcaption>
          </figure>

          <button className="lightbox-next absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white border-none cursor-pointer z-10 transition-transform hover:scale-110 active:scale-95 max-md:w-10 max-md:h-10 max-md:right-2" onClick={(e) => { e.stopPropagation(); moveLightbox(1); }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </dialog>
      )}
    </div>
  );
}
