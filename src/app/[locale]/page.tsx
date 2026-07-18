import {useTranslations} from 'next-intl';
import Image from 'next/image';
import HeroSlider from '@/components/HeroSlider';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { Link } from '@/i18n/routing';
import AboutAwwward from '@/components/AboutAwwward';

export default function HomePage() {
  const t = useTranslations('work');
  const tAbout = useTranslations('about');
  const tCommon = useTranslations('common');

  return (
    <>
      <section className="hero-slider-section">
        <HeroSlider />
        <div className="hero-contact">
          <Link href="/contact" className="btn-black">Liên hệ</Link>
        </div>
      </section>

      <section className="projects-container container" id="projects">
        <h2 className="section-title">{t('title')}</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </section>

      <AboutAwwward />
    </>
  );
}
