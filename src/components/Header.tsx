'use client';

import {useState} from 'react';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';

export default function Header() {
  const tNav = useTranslations('nav');
  const tWork = useTranslations('work');
  const [isWorkMenuOpen, setIsWorkMenuOpen] = useState(false);

  return (
    <header className="site-header" aria-label="Primary navigation">
      <Link href="/" className="brand" aria-label="HOIEST home">
        <Image src="/logo/logomark.svg" alt="HOIEST" width={100} height={40} style={{ height: '40px', width: 'auto' }} priority />
      </Link>
      <nav className="nav-links items-center" aria-label="Site sections">
        <div className={`work-nav-item relative group py-4 -my-4 flex items-center ${isWorkMenuOpen ? 'is-open' : ''}`}>
          <Link href="/work" className="work-nav-link hover:opacity-70 transition-opacity">{tNav('work')}</Link>
          <button
            className="work-nav-toggle"
            type="button"
            aria-label="Toggle work categories"
            aria-expanded={isWorkMenuOpen}
            onClick={() => setIsWorkMenuOpen((isOpen) => !isOpen)}
          />
          <div className="work-nav-menu absolute top-full left-0 mt-0 w-60 bg-white border border-gray-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col p-2 gap-1">
            <Link href="/work?tab=ui_ux" className="px-4 py-3 text-[11px] font-bold text-gray-800 hover:bg-gray-100 hover:text-black rounded-lg transition-colors">UI/UX</Link>
            <Link href="/work?tab=branding" className="px-4 py-3 text-[11px] font-bold text-gray-800 hover:bg-gray-100 hover:text-black rounded-lg transition-colors">{tWork('tabs.branding')}</Link>
          </div>
        </div>
        <Link href="/about" className="hover:opacity-70 transition-opacity">{tNav('about')}</Link>
        <Link href="/contact" className="bg-black text-white px-6 py-2.5 rounded-[40px] hover:opacity-80 transition-opacity flex items-center" style={{ color: 'white' }}>{tNav('contact')}</Link>
        <LanguageSwitcher />
      </nav>
    </header>
  );
}
