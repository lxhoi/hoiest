"use client";

import { useState } from 'react';
import type { Project } from '@/data/projects';

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

  return (
    <div className="project-header-container">
      <div className="detail-header" style={{ borderBottom: 'none', marginBottom: '20px' }}>
        <h1 className="detail-title" style={{ width: '100%', marginBottom: '20px' }}>{project.title}</h1>
      </div>
      
      <div className="detail-info-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: isExpanded ? '40px' : '60px', paddingBottom: isExpanded ? '0' : '40px', borderBottom: isExpanded ? 'none' : '1px solid rgba(0,0,0,0.1)' }}>
        <div className="detail-info" style={{ flex: '1', maxWidth: '600px' }}>
          <p style={{ marginBottom: '15px' }}>{desc}</p>
          <div className="detail-tags" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {tags.map((tag) => (
              <span key={tag} className="tag-pill" style={{ fontSize: '12px', padding: '4px 12px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>{tag}</span>
            ))}
          </div>
        </div>
        
        <button 
          className="about-project-btn bg-[#E7DDCA] text-black hover:opacity-80 transition-opacity rounded-md px-4 py-2 flex items-center gap-2 text-sm ml-5 cursor-pointer border-none"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          About the project {isExpanded ? 'x' : '+'}
        </button>
      </div>

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
  );
}
