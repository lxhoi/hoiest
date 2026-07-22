import Image from 'next/image';
import {Link} from '@/i18n/routing';
import { Project } from '@/data/projects';
import { useLocale } from 'next-intl';

interface Props {
  project: Project;
  index: number;
}

export default function LetteringProjectCard({ project, index }: Props) {
  const locale = useLocale();
  const desc = locale === 'en' ? project.description_en : project.description;

  return (
    <Link href={`/project/${index}`} className="group relative block w-full aspect-[4/5] overflow-hidden bg-gray-100">
      <Image
        src={`${project.folder}/${project.images[0]}`}
        alt={project.title}
        fill
        unoptimized
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      
      {/* Hover Info Box */}
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-6 py-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-w-[80%] shadow-lg">
        <h3 className="text-sm font-bold uppercase tracking-wider text-black">{project.title}</h3>
        <p className="text-[11px] text-gray-600 mt-1 italic">{desc}</p>
      </div>
    </Link>
  );
}
