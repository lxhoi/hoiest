'use client';

import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';

export default function WorkTitle() {
  const t = useTranslations('work');
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab');

  let title = t('title'); // "TẤT CẢ DỰ ÁN"
  if (tab === 'branding') {
    title = t('tabs.branding');
  } else if (tab === 'ui_ux') {
    title = t('tabs.ui_ux') || 'UI/UX';
  } else if (tab === 'packaging') {
    title = t('tabs.packaging');
  }

  return <h1 className="section-title">{title}</h1>;
}
