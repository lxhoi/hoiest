import {useTranslations} from 'next-intl';
import ProjectTabs from '@/components/ProjectTabs';
import { projects } from '@/data/projects';

export default function WorkPage() {
  const t = useTranslations('work');

  return (
    <div className="projects-container container" style={{ paddingTop: '150px' }}>
      <h1 className="section-title">{t('title')}</h1>
      <ProjectTabs projects={projects} />
    </div>
  );
}
