import Image from 'next/image';
import {Link} from '@/i18n/routing';
import { Project } from '@/data/projects';
import { useLocale } from 'next-intl';

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const locale = useLocale();
  const desc = locale === 'en' ? project.description_en : project.description;
  const tags = locale === 'en' ? project.tags_en : project.tags;

  return (
    <Link href={`/project/${index}`} className="project-card">
      <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
        <Image
          src={`${project.folder}/${project.images[0]}`}
          alt={project.title}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc line-clamp-2 mt-2">{desc}</p>
        <div className="project-tags mt-3">
          {tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
