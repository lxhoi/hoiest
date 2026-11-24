'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

const brandSkills = ['brand_identity', 'packaging', 'editorial_layout', 'social_media', 'illustration'] as const;
const brandSpecialties = ['gen_ai_vibe_coding', 'visual_design_systems_scaling', 'typography', 'art_direction'] as const;
const kobizoFocus = ['brand_identity', 'art_direction', 'packaging', 'ui_design', 'social_media', 'illustration'] as const;
const particulaFocus = ['brand_identity', 'ui_system', 'motion_graphics'] as const;
const uiUxSkills = [
  'research_synthesis',
  'design_systems',
  'high_fidelity_ui',
  'user_research_discovery',
  'information_architecture',
  'interactive_prototyping',
  'responsive_design',
  'user_modeling',
  'ideation_wireframing',
] as const;

export default function AboutAwwward() {
  const t = useTranslations('about');

  return (
    <section className="about-profile">
      <div className="container about-profile__container">
        <div className="about-profile__intro">
          <div className="about-profile__portrait">
            <Image src="/about/profile me.webp" alt="Lê Xuân Hội" fill priority unoptimized sizes="(max-width: 900px) 100vw, 40vw" className="object-cover object-top" />
          </div>
          <div className="about-profile__bio">
            <p>{t('intro.role')}</p>
            <p>{t('intro.summary')}</p>
            <p>{t('intro.philosophy')}</p>
            <p className="about-profile__location">● {t('intro.location')}</p>
          </div>
        </div>

        <div className="about-profile__timeline">
          <p className="about-profile__eyebrow">{t('timeline.eyebrow')}</p>
          <h1>{t('title')}</h1>
          <article className="about-profile__timeline-item">
            <p className="about-profile__date">{t('timeline.current.date')}</p>
            <h2>{t('timeline.current.role')}</h2>
            <p>{t('timeline.current.company')}</p>
            <p>{t('timeline.current.description')}</p>
            <ul className="about-profile__responsibilities">
              {kobizoFocus.map((focus) => <li key={focus}>{t(`timeline.current.focus.${focus}`)}</li>)}
            </ul>
          </article>
          <article className="about-profile__timeline-item">
            <p className="about-profile__date">{t('timeline.particula.date')}</p>
            <h2>{t('timeline.particula.role')}</h2>
            <p>{t('timeline.particula.company')}</p>
            <p>{t('timeline.particula.description')}</p>
            <ul className="about-profile__responsibilities">
              {particulaFocus.map((focus) => <li key={focus}>{t(`timeline.particula.focus.${focus}`)}</li>)}
            </ul>
          </article>
        </div>

        <div className="about-profile__details">
          <div>
            <h2>{t('personal.title')}</h2>
            <p className="about-profile__detail-strong">{t('personal.name')}</p>
            <p>{t('personal.birth')}</p>
            <p>{t('personal.location')}</p>
          </div>
          <div>
            <h2>{t('education.title')}</h2>
            <p className="about-profile__detail-strong">{t('education.school')}</p>
            <p>{t('education.years')}</p>
            <p>{t('education.degree')}</p>
          </div>
          <div>
            <h2>{t('skills.title')}</h2>
            <h3 className="about-profile__skill-group-title">{t('skills.ui_ux_design')}</h3>
            <ul>{uiUxSkills.map((skill) => <li key={skill}>{t(`skills.${skill}`)}</li>)}</ul>
            <h3 className="about-profile__skill-group-title">{t('skills.brand_design')}</h3>
            <ul>
              {brandSkills.map((skill) => <li key={skill}>{t(`skills.${skill}`)}</li>)}
              {brandSpecialties.map((skill) => <li key={skill}>{t(`additional_skills.${skill}`)}</li>)}
            </ul>
          </div>
          <div>
            <h2>{t('contact.title')}</h2>
            <a href="mailto:lxhoi.2k@gmail.com">lxhoi.2k@gmail.com</a>
            <a href="tel:+84812914786">+84 812 914 786</a>
            <a href="https://hoiest.vercel.app" target="_blank" rel="noreferrer">hoiest.vercel.app</a>
          </div>
        </div>
      </div>
    </section>
  );
}
