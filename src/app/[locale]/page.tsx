import {useTranslations} from 'next-intl';
import ProjectTabs from '@/components/ProjectTabs';
import { projects } from '@/data/projects';

export default function HomePage() {
  const t = useTranslations('work');

  return (
    <>
      <section className="projects-container container-narrow" id="projects">
        <h2 className="section-title">{t('title')}</h2>
        <ProjectTabs projects={projects} limits={{ branding: 4, ui_ux: 3, packaging: 4 }} showViewMore={true} />
      </section>
    </>
  );
}
