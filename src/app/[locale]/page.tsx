import {useTranslations} from 'next-intl';
import ProjectTabs from '@/components/ProjectTabs';
import { projects } from '@/data/projects';

export default function HomePage() {
  const t = useTranslations('work');

  return (
    <>
      <section className="projects-container container" id="projects">
        <h2 className="section-title">{t('title')}</h2>
        <ProjectTabs projects={projects} limits={{ all: 6, branding: 6, ui_ux: 6, packaging: 6 }} showViewMore={true} />
      </section>
    </>
  );
}
