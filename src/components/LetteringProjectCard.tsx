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
  const tags = locale === 'en' ? project.tags_en : project.tags;

  return (
    <div className="group relative block w-full aspect-[4/5] overflow-hidden bg-gray-100">
      <Link href={`/project/${index}`} className="absolute inset-0 z-0">
        <Image
          src={`${project.folder}/${project.thumbnail || project.images[0]}`}
          alt={project.title}
          fill
          unoptimized
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8 pointer-events-none">
        <Link href={`/project/${index}`} className="pointer-events-auto inline-block">
          <h3 className="text-white text-2xl md:text-3xl font-medium tracking-wide mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {project.title}
          </h3>
        </Link>
        <div className="w-8 h-[2px] bg-[#F5F2EC] mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"></div>
        <div className="text-gray-300 text-xs md:text-sm font-semibold tracking-[0.15em] uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 pointer-events-auto">
          {tags.map((tag, i) => {
             let tab = 'branding';
             if (tag === 'UI/UX') tab = 'ui_ux';
             if (tag === 'Packaging' || tag === 'Bao bì') tab = 'packaging';

             return (
               <span key={tag}>
                 {i > 0 && ' / '}
                 <Link href={`/work?tab=${tab}`} className="hover:text-white transition-colors">{tag}</Link>
               </span>
             )
          })}
        </div>
      </div>
    </div>
  );
}
