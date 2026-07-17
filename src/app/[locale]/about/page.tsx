import {useTranslations} from 'next-intl';
import Image from 'next/image';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <div className="about-container">
      <h1 className="section-title">{t('title')}</h1>
      
      <div className="relative w-full aspect-video mb-12 bg-gray-100 overflow-hidden">
        <Image 
          src="/about/profile me.webp" 
          alt="HOIEST Profile" 
          fill 
          unoptimized
          className="object-cover"
          priority
        />
      </div>

      <p className="about-text">{t('text')}</p>

      <div className="about-section">
        <h2 className="about-section-title">{t('expertise.title')}</h2>
        <div className="expertise-grid">
          <div className="expertise-item">
            <h3 className="expertise-heading">{t('expertise.identity')}</h3>
            <p className="expertise-desc">{t('expertise.identity_desc')}</p>
          </div>
          <div className="expertise-item">
            <h3 className="expertise-heading">{t('expertise.visual')}</h3>
            <p className="expertise-desc">{t('expertise.visual_desc')}</p>
          </div>
          <div className="expertise-item">
            <h3 className="expertise-heading">{t('expertise.strategy')}</h3>
            <p className="expertise-desc">{t('expertise.strategy_desc')}</p>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2 className="about-section-title">{t('services.title')}</h2>
        <div className="services-grid">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="service-item">
              <span className="service-number">0{num}</span>
              <p>{t(`services.list${num}` as any)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-section approach-section">
        <h2 className="about-section-title">{t('approach.title')}</h2>
        <p className="approach-text">{t('approach.text')}</p>
      </div>
    </div>
  );
}
