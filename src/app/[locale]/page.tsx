import {useTranslations} from 'next-intl';
import Image from 'next/image';
import HeroSlider from '@/components/HeroSlider';
import ProjectTabs from '@/components/ProjectTabs';
import { projects } from '@/data/projects';
import { Link } from '@/i18n/routing';
import AboutAwwward from '@/components/AboutAwwward';

export default function HomePage() {
  const t = useTranslations('work');
  const tAbout = useTranslations('about');
  const tCommon = useTranslations('common');
  const tHero = useTranslations('hero');

  return (
    <>
      <section className="hero-slider-section">
        <HeroSlider />
        <div className="hero-contact">
          <Link href="/contact" className="btn-black">{tHero('contact')}</Link>
        </div>
      </section>

      <section className="projects-container container" id="projects">
        <h2 className="section-title">{t('title')}</h2>
        <ProjectTabs projects={projects} limits={{ branding: 4, lettering: 3, motion: 0 }} showViewMore={true} />
      </section>

      <AboutAwwward />
    </>
  );
}
