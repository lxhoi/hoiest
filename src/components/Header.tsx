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
        <div className="relative group py-4 -my-4">
          <Link href="/work" className="hover:opacity-70 transition-opacity">{t('work')}</Link>
          <div className="absolute top-full left-0 mt-0 w-60 bg-white border border-gray-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col p-2 gap-1">
            <Link href="/work?tab=branding" className="px-4 py-3 text-[11px] font-bold text-gray-800 hover:bg-gray-100 hover:text-black rounded-lg transition-colors">NHẬN DIỆN THƯƠNG HIỆU</Link>
            <Link href="/work?tab=lettering" className="px-4 py-3 text-[11px] font-bold text-gray-800 hover:bg-gray-100 hover:text-black rounded-lg transition-colors">LETTERING</Link>
            <Link href="/work?tab=motion" className="px-4 py-3 text-[11px] font-bold text-gray-800 hover:bg-gray-100 hover:text-black rounded-lg transition-colors">MOTION</Link>
          </div>
        </div>
        <Link href="/contact" className="hover:opacity-70 transition-opacity">{t('contact')}</Link>
        <LanguageSwitcher />
      </nav>
    </header>
  );
}
