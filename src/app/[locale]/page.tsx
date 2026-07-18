import {useTranslations} from 'next-intl';
import Image from 'next/image';
import HeroSlider from '@/components/HeroSlider';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { Link } from '@/i18n/routing';

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

      <section className="about-preview-section container mt-32 mb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full aspect-square md:aspect-[4/5] bg-gray-100 overflow-hidden">
            <Image 
              src="/about/profile me.webp" 
              alt="HOIEST Profile" 
              fill 
              unoptimized
              className="object-cover"
            />
          </div>
          <div className="about-preview-content">
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>{tAbout('title')}</h2>
            <p className="text-lg leading-relaxed mb-8">{tAbout('text')}</p>
          </div>
        </div>
      </section>
    </>
  );
}
