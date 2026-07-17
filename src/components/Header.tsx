import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';

export default function Header() {
  const t = useTranslations('nav');

  return (
    <header className="site-header" aria-label="Primary navigation">
      <Link href="/" className="brand" aria-label="HOIEST home">
        <Image src="/logo/logomark.svg" alt="HOIEST" width={100} height={40} style={{ height: '40px', width: 'auto' }} priority />
      </Link>
      <nav className="nav-links" aria-label="Site sections">
        <Link href="/work">{t('work')}</Link>
        <Link href="/about">{t('about')}</Link>
        <Link href="/contact">{t('contact')}</Link>
        <LanguageSwitcher />
      </nav>
    </header>
  );
}
