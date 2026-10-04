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
    all?: number;
    branding?: number;
    ui_ux?: number;
    packaging?: number;
  };
  showViewMore?: boolean;
}

function ProjectTabsContent({ projects, limits, showViewMore }: ProjectTabsProps) {
  const [activeTab, setActiveTab] = useState('all');
  const tCommon = useTranslations('common');
  const searchParams = useSearchParams();

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && ['branding', 'ui_ux', 'packaging'].includes(tabParam)) {
      setActiveTab(tabParam);
    } else {
      setActiveTab('all');
    }
  }, [searchParams]);

  const getProjectsForTab = () => {
    let filtered = projects
      .map((p, index) => ({ project: p, index }))
      .filter(({ project }) => {
        if (activeTab === 'all') return true;
        const tags = project.tags_en || [];
        if (activeTab === 'branding' && tags.includes('Branding')) return true;
        if (activeTab === 'ui_ux' && tags.includes('UI/UX')) return true;
        if (activeTab === 'packaging' && tags.includes('Packaging')) return true;
        return false;
      });
    
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
      <div className={activeTab === 'ui_ux' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}>
        {currentProjects.length > 0 ? (
          currentProjects.map(({ project, index }) => (
            activeTab === 'ui_ux' ? (
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
            {tCommon('btn_read_more')}
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
