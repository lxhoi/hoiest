import {useTranslations} from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { tutorials } from '@/data/tutorials';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/routing';
import TutorialSlider from '@/components/TutorialSlider';
import TutorialFAQ from '@/components/TutorialFAQ';

export default async function TutorialDetailPage({
  params
}: {
  params: Promise<{ slug: string; locale: string }>
}) {
  const resolvedParams = await params;
  const { slug, locale } = resolvedParams;
  const t = await getTranslations({ locale, namespace: 'tutorials' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });
  
  const tutorial = tutorials.find(t => t.slug === slug);
  
  if (!tutorial) {
    notFound();
  }

  const title = locale === 'vi' ? tutorial.title : tutorial.title_en;
  const content = locale === 'vi' ? tutorial.content : tutorial.content_en;
  const benefits = locale === 'vi' ? tutorial.benefits : tutorial.benefits_en;
  const cost = locale === 'vi' ? tutorial.cost : tutorial.cost_en;
  const capacity = locale === 'vi' ? tutorial.capacity : tutorial.capacity_en;
  const format = locale === 'vi' ? tutorial.format : tutorial.format_en;
  const schedule = locale === 'vi' ? tutorial.schedule : tutorial.schedule_en;
  const duration = locale === 'vi' ? tutorial.duration : tutorial.duration_en;
  const faqs = locale === 'vi' ? tutorial.faqs : tutorial.faqs_en;

  return (
    <div className="container max-w-5xl mx-auto" style={{ paddingTop: '150px', paddingBottom: '100px' }}>
      <Link href="/tutorials" className="inline-block mb-12 text-sm font-bold hover:opacity-70 transition-opacity uppercase tracking-widest">
        ← {locale === 'vi' ? 'Quay lại' : 'Back'}
      </Link>
      
      <div className="space-y-16">
        {/* 1. Tiêu đề */}
        <h1 className="text-4xl md:text-5xl font-bold uppercase text-center px-4">{title}</h1>

        {/* 2. Cover ngang tỉ lệ 16:9 (ảnh đầu tiên) */}
        {tutorial.folder && tutorial.images && tutorial.images.length > 0 && (
          <div className="relative aspect-video w-full overflow-hidden bg-gray-100 rounded-2xl shadow-sm">
            <Image
              src={`${tutorial.folder}/${tutorial.images[0]}`}
              alt={`${title} - Cover`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
              unoptimized
            />
          </div>
        )}

        {/* 3. Mô tả nội dung khóa */}
        <div className="prose prose-lg md:prose-xl max-w-4xl mx-auto px-4 text-left">
          <div 
            className="text-gray-700 space-y-6 [&>p]:leading-relaxed [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-black [&>h3]:mt-10 [&>h3]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-3 [&>ul>li>strong]:text-black"
            dangerouslySetInnerHTML={{ __html: content }} 
          />
          <div className="mt-10 pt-8 border-t border-gray-100">
            <Link 
              href="/work?tab=branding" 
              className="inline-flex items-center gap-2 font-bold text-black border-b-2 border-black hover:text-gray-500 hover:border-gray-500 transition-colors uppercase tracking-wider text-sm"
            >
              {locale === 'vi' ? 'Xem dự án gốc RẠNG COFFEE' : 'View original RẠNG COFFEE project'} 
              <span className="text-xl leading-none">→</span>
            </Link>
          </div>
        </div>

        {/* 4. Slide ảnh của dự án */}
        {tutorial.folder && tutorial.images && tutorial.images.length > 1 && (
          <div className="w-full">
            <TutorialSlider folder={tutorial.folder} images={tutorial.images.slice(1)} />
          </div>
        )}

        {/* 5. Thông tin khóa học */}
        <div className="bg-gray-50/80 p-8 md:p-14 rounded-3xl border border-gray-100 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 uppercase text-center">{t('benefits')}</h2>
          <ul className="list-disc pl-5 mb-14 space-y-4 text-lg text-gray-700 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
          
          <h2 className="text-2xl font-bold mb-8 uppercase text-center">{t('detail_title')}</h2>
          <div className="space-y-0 text-gray-700 text-lg bg-white p-6 md:p-10 rounded-2xl border border-gray-100 shadow-sm max-w-3xl mx-auto mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 border-b border-gray-100 py-4 first:pt-0">
              <span className="font-bold">{t('cost')}</span>
              <span className="md:col-span-2">{cost}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 border-b border-gray-100 py-4">
              <span className="font-bold">{t('capacity')}</span>
              <span className="md:col-span-2">{capacity}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 border-b border-gray-100 py-4">
              <span className="font-bold">{t('format')}</span>
              <span className="md:col-span-2">{format}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 border-b border-gray-100 py-4">
              <span className="font-bold">{t('schedule')}</span>
              <span className="md:col-span-2">{schedule}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 py-4 last:pb-0">
              <span className="font-bold">{t('duration')}</span>
              <span className="md:col-span-2">{duration}</span>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t('btn_register')}
            </Link>
          </div>
        </div>

        {/* 6. FAQ */}
        {faqs && faqs.length > 0 && (
          <TutorialFAQ title={t('faqs_title')} faqs={faqs} />
        )}
      </div>
    </div>
  );
}
