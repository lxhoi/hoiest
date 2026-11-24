'use client';

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/routing';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, {locale: newLocale});
  };

  return (
    <div className="lang-switcher">
      <Globe className="globe-icon" size={14} />
      <button 
        className={`lang-btn ${locale === 'vi' ? 'active' : ''}`} 
        onClick={() => switchLocale('vi')}
      >
        VN
      </button>
      <span>|</span>
      <button 
        className={`lang-btn ${locale === 'en' ? 'active' : ''}`} 
        onClick={() => switchLocale('en')}
      >
        EN
      </button>
    </div>
  );
}
