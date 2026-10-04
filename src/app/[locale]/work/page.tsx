import { Suspense } from 'react';
import ProjectTabs from '@/components/ProjectTabs';
import WorkTitle from '@/components/WorkTitle';
import { projects } from '@/data/projects';

export default function WorkPage() {
  return (
    <div className="projects-container container" style={{ paddingTop: '150px' }}>
      <Suspense fallback={<h1 className="section-title">...</h1>}>
        <WorkTitle />
      </Suspense>
      <ProjectTabs projects={projects} />
    </div>
  );
}
