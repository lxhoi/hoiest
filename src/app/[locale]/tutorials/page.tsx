import {useTranslations, useLocale} from 'next-intl';
import { tutorials } from '@/data/tutorials';
import Image from 'next/image';
import {Link} from '@/i18n/routing';

export default function TutorialsPage() {
  const t = useTranslations('tutorials');
  const locale = useLocale();

  return (
    <div className="projects-container container" style={{ paddingTop: '150px' }}>
      <h1 className="section-title">{t('title')}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {tutorials.map((tutorial) => (
          <Link href={`/tutorials/${tutorial.slug}`} key={tutorial.slug} className="group block">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 rounded-lg mb-4">
              <Image
                src={tutorial.thumbnail}
                alt={locale === 'vi' ? tutorial.title : tutorial.title_en}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h2 className="text-xl font-bold mt-4 uppercase group-hover:text-gray-600 transition-colors">
              {locale === 'vi' ? tutorial.title : tutorial.title_en}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
