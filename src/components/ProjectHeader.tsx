"use client";

import { useState, useEffect } from 'react';
import type { Project } from '@/data/projects';
import { Link } from '@/i18n/routing';

interface ProjectHeaderProps {
  project: Project;
  desc: string;
  tags: string[];
  aboutQuote?: string;
  aboutContent?: string;
  children?: React.ReactNode;
}

export default function ProjectHeader({ project, desc, tags, aboutQuote, aboutContent, children }: ProjectHeaderProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isMobileModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileModalOpen]);

  return (
    <div className="project-header-container relative">
      <div className="detail-header" style={{ borderBottom: 'none', marginBottom: '20px' }}>
        <h1 className="detail-title" style={{ width: '100%', marginBottom: '20px' }}>{project.title}</h1>
      </div>
      
      <div className="relative w-full h-full">
        <div className="hidden lg:flex sticky top-[30px] z-50 justify-end h-0 w-full" style={{ pointerEvents: 'none' }}>
          <button 
            className="about-project-btn bg-[#E7DDCA] text-black hover:opacity-80 transition-opacity rounded-md px-8 py-4 flex items-center gap-2 text-[15px] ml-5 cursor-pointer border-none shadow-[0_4px_20px_rgba(0,0,0,0.08)] font-medium"
            style={{ pointerEvents: 'auto' }}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            About the project {isExpanded ? 'x' : '+'}
          </button>
        </div>

        <div className="detail-info-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: isExpanded ? '40px' : '60px', paddingBottom: isExpanded ? '0' : '40px', borderBottom: isExpanded ? 'none' : '1px solid rgba(0,0,0,0.1)' }}>
          <div className="detail-info" style={{ flex: '1', maxWidth: '600px' }}>
            <p style={{ marginBottom: '15px' }}>{desc}</p>
            <div className="detail-tags" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {tags.map((tag) => {
                 let tab = 'branding';
                 if (tag === 'UI/UX') tab = 'ui_ux';
                 if (tag === 'Packaging' || tag === 'Bao bì') tab = 'packaging';
                 return (
                   <Link href={`/work?tab=${tab}`} key={tag} className="tag-pill hover:bg-black hover:text-white transition-colors cursor-pointer" style={{ fontSize: '12px', padding: '4px 12px', borderRadius: '4px' }}>
                     {tag}
                   </Link>
                 );
              })}
            </div>
          </div>
        </div>

        {/* Desktop expanded content */}
        <div className="hidden lg:block">
        {isExpanded ? (
          <div className="about-project-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '60px', paddingBottom: '40px', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
            <div className="about-left">
              {children}
              {aboutQuote ? (
                <p className="about-quote" style={{ fontSize: '24px', fontWeight: '500', lineHeight: '1.4', marginTop: '40px' }}>
                  “{aboutQuote}”
                </p>
              ) : null}
            </div>
            <div className="about-right" style={{ fontSize: '14px', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {aboutContent ? (
                <div className="about-project-text" dangerouslySetInnerHTML={{ __html: aboutContent }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} />
              ) : (
                <div className="about-project-text" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <p>This is the about project content area. Please add <strong>about_content</strong> and <strong>about_quote</strong> fields to this project data in <em>projects.ts</em> to populate this section.</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          children
        )}
      </div>

      {/* Mobile/Tablet content (always shows children in flow) */}
      <div className="block lg:hidden">
        {children}
      </div>

      {/* Mobile/Tablet floating button */}
      {!isMobileModalOpen && (
        <div className="lg:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-40">
          <button 
            className="bg-[#f2f2f2]/95 backdrop-blur-md px-6 py-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-[15px] flex items-center gap-2 border border-black/5 whitespace-nowrap font-medium text-black transition-transform active:scale-95"
            onClick={() => setIsMobileModalOpen(true)}
          >
            About the project +
          </button>
        </div>
      )}

      {/* Mobile/Tablet Modal */}
      {isMobileModalOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col justify-end">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={() => setIsMobileModalOpen(false)} />
          <div className="relative bg-[#F5F2EC] w-full max-h-[85vh] overflow-y-auto rounded-t-3xl shadow-2xl p-6 sm:p-8 transform transition-transform">
            <div className="flex justify-between items-center mb-6 sticky top-0 bg-[#F5F2EC] pb-2 z-10 border-b border-black/5">
              <h2 className="text-lg font-bold uppercase tracking-wider">About the project</h2>
              <button 
                className="w-10 h-10 flex items-center justify-center bg-black/5 rounded-full hover:bg-black/10 transition-colors"
                onClick={() => setIsMobileModalOpen(false)}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L13 13M1 13L1 13Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            <div className="mt-2">
              {aboutQuote ? (
                <p className="text-xl sm:text-2xl font-medium mb-8 leading-snug">
                  “{aboutQuote}”
                </p>
              ) : null}
              
              <div className="text-[15px] leading-relaxed flex flex-col gap-5 opacity-90 pb-8">
                {aboutContent ? (
                  <div dangerouslySetInnerHTML={{ __html: aboutContent }} className="flex flex-col gap-4" />
                ) : (
                  <p>This is the about project content area. Please add <strong>about_content</strong> and <strong>about_quote</strong> fields to this project data in <em>projects.ts</em> to populate this section.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
