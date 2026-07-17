'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Project } from '@/data/projects';

interface Props {
  project: Project;
}

export default function ProjectGallery({ project }: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const moveLightbox = (direction: number) => {
    setActiveIndex((prev) => (prev + direction + project.images.length) % project.images.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowLeft') moveLightbox(-1);
      if (e.key === 'ArrowRight') moveLightbox(1);
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  const handleLightboxClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    // Close if clicking outside the image and interactive elements
    if (
      target.classList.contains('lightbox-dialog') ||
      (target.closest('.lightbox-figure') && !target.closest('img') && !target.closest('figcaption'))
    ) {
      closeLightbox();
    }
  };

  return (
    <>
      <div className="project-gallery mt-10">
        {project.images.map((img, idx) => (
          <button 
            key={idx} 
            className="gallery-item cursor-zoom-in border-none bg-transparent p-0 w-full h-full relative group overflow-hidden bg-gray-100"
            onClick={() => openLightbox(idx)}
            data-index={idx}
          >
            <Image 
              src={`${project.folder}/${img}`}
              alt={`${project.title} - ${idx + 1}`}
              width={1200}
              height={800}
              unoptimized
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </button>
        ))}
      </div>

      {lightboxOpen && (
        <dialog 
          className="lightbox-dialog m-0 fixed inset-0 w-full h-full max-w-full max-h-full bg-transparent z-[9999] flex items-center justify-center backdrop-blur-sm"
          open
          onClick={handleLightboxClick}
        >
          <div className="lightbox-backdrop fixed inset-0 bg-black/90" />
          
          <div className="lightbox-toolbar absolute top-0 left-0 w-full p-4 flex justify-between items-center z-10 bg-gradient-to-b from-black/50 to-transparent">
            <div className="lightbox-counter text-white/70 font-semibold tracking-wider text-sm ml-4 font-mono">
              {activeIndex + 1} / {project.images.length}
            </div>
            <button className="lightbox-close w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white border-none cursor-pointer transition-transform hover:scale-110 active:scale-95 mr-2" onClick={closeLightbox} aria-label="Close lightbox">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>

          <button className="lightbox-prev absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white border-none cursor-pointer z-10 transition-transform hover:scale-110 active:scale-95 max-md:w-10 max-md:h-10 max-md:left-2" onClick={(e) => { e.stopPropagation(); moveLightbox(-1); }} aria-label="Previous image">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          
          <figure className="lightbox-figure relative z-[1] w-full h-full m-0 p-8 flex flex-col items-center justify-center max-md:p-4">
            <div className="relative w-full max-w-[90vw] h-[80vh] flex items-center justify-center">
              <Image 
                src={`${project.folder}/${project.images[activeIndex]}`}
                alt={`${project.title} - ${activeIndex + 1}`}
                fill
                unoptimized
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            <figcaption className="lightbox-caption mt-4 text-white/80 font-medium tracking-wide text-sm text-center max-w-[80%] max-md:text-xs">
              {project.title} - {activeIndex + 1}
            </figcaption>
          </figure>

          <button className="lightbox-next absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white border-none cursor-pointer z-10 transition-transform hover:scale-110 active:scale-95 max-md:w-10 max-md:h-10 max-md:right-2" onClick={(e) => { e.stopPropagation(); moveLightbox(1); }} aria-label="Next image">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </dialog>
      )}
    </>
  );
}
