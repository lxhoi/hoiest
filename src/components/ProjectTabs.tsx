'use client';

import { useState, useEffect, Suspense } from 'react';
import ProjectCard from '@/components/ProjectCard';
import LetteringProjectCard from '@/components/LetteringProjectCard';
import { Project } from '@/data/projects';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';

import { Link } from '@/i18n/routing';

interface ProjectTabsProps {
  projects: Project[];
  limits?: {
    branding?: number;
    lettering?: number;
    motion?: number;
  };
  showViewMore?: boolean;
}

function ProjectTabsContent({ projects, limits, showViewMore }: ProjectTabsProps) {
  const [activeTab, setActiveTab] = useState('branding');
  const t = useTranslations('work');
  const searchParams = useSearchParams();

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && ['branding', 'lettering', 'motion'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  const tabs = [
    { id: 'branding', label: 'NHẬN DIỆN THƯƠNG HIỆU' },
    { id: 'lettering', label: 'LETTERING' },
    { id: 'motion', label: 'MOTION' },
  ];

  const getProjectsForTab = () => {
    let filtered = projects
      .map((p, index) => ({ project: p, index }))
      .filter(({ project }) => project.category === activeTab);
    
    if (limits && activeTab in limits) {
      const limit = limits[activeTab as keyof typeof limits];
      if (limit !== undefined) {
        filtered = filtered.slice(0, limit);
      }
    }
    
    return filtered;
  };

  const currentProjects = getProjectsForTab();

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-3 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-[0.05em] transition-all border ${
              activeTab === tab.id
                ? 'bg-black text-white border-black'
                : 'bg-transparent text-black/60 border-black/10 hover:border-black/30 hover:text-black'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={activeTab === 'lettering' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0" : "projects-grid"}>
        {currentProjects.length > 0 ? (
          currentProjects.map(({ project, index }) => (
            activeTab === 'lettering' ? (
              <LetteringProjectCard key={index} project={project} index={index} />
            ) : (
              <ProjectCard key={index} project={project} index={index} />
            )
          ))
        ) : (
          <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-32 text-black/40 font-medium text-[15px]">
            Updating...
          </div>
        )}
      </div>

      {showViewMore && (
        <div className="flex justify-center mt-12">
          <Link href={`/work?tab=${activeTab}`} className="px-8 py-3 rounded-full border border-black text-black text-[13px] font-bold uppercase tracking-wider hover:bg-black hover:!text-white transition-colors duration-300">
            {useTranslations('common')('btn_read_more')}
          </Link>
        </div>
      )}
    </div>
  );
}

export default function ProjectTabs({ projects, limits, showViewMore }: ProjectTabsProps) {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
      <ProjectTabsContent projects={projects} limits={limits} showViewMore={showViewMore} />
    </Suspense>
  );
}
