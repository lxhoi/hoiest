import {useTranslations} from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import ProjectGallery from '@/components/ProjectGallery';
import ProjectCard from '@/components/ProjectCard';

interface Props {
  params: Promise<{ locale: string; id: string }>;
}


export async function generateMetadata({ params }: Props) {
  const { locale, id } = await params;
  const projectIndex = parseInt(id, 10);
  const project = projects[projectIndex];
  
  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.title} | HOIEST`,
    description: locale === 'en' ? project.description_en : project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { locale, id } = await params;
  const t = await getTranslations({locale, namespace: 'work'});
  const projectIndex = parseInt(id, 10);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const desc = locale === 'en' ? project.description_en : project.description;
  const tags = locale === 'en' ? project.tags_en : project.tags;

  // Filter other projects
  const otherProjects = projects
    .map((p, idx) => ({ ...p, idx }))
    .filter((_, idx) => idx !== projectIndex)
    .slice(0, 2);

  return (
    <div className="container">
      <div className="detail-header">
        <h1 className="detail-title">{project.title}</h1>
        <div className="detail-info">
          <p>{desc}</p>
          <div className="detail-tags">
            {tags.map((tag) => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <ProjectGallery project={project} />

      <section className="projects-container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <h2 className="section-title" style={{ fontSize: '24px' }}>{t('project_other')}</h2>
        <div className="projects-grid">
          {otherProjects.map((p) => (
            <ProjectCard key={p.idx} project={p} index={p.idx} />
          ))}
        </div>
      </section>
    </div>
  );
}
