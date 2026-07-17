import {useTranslations} from 'next-intl';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export default function WorkPage() {
  const t = useTranslations('work');

  return (
    <div className="projects-container container" style={{ paddingTop: '150px' }}>
      <h1 className="section-title">{t('title')}</h1>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} index={idx} />
        ))}
      </div>
    </div>
  );
}
