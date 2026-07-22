'use client';

import { useState, useEffect, Suspense } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { Project } from '@/data/projects';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';

interface ProjectTabsProps {
  projects: Project[];
}

function ProjectTabsContent({ projects }: ProjectTabsProps) {
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
    return projects
      .map((p, index) => ({ project: p, index }))
      .filter(({ project }) => project.category === activeTab);
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

      <div className="projects-grid">
        {currentProjects.length > 0 ? (
          currentProjects.map(({ project, index }) => (
            <ProjectCard key={index} project={project} index={index} />
          ))
        ) : (
          <div className="col-span-1 md:col-span-2 text-center py-32 text-black/40 font-medium text-[15px]">
            Updating...
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectTabs({ projects }: ProjectTabsProps) {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
      <ProjectTabsContent projects={projects} />
    </Suspense>
  );
}
