import { useTranslations } from 'next-intl';

export default function ArchivesPage() {
  const tNav = useTranslations('nav');

  return (
    <main className="min-h-screen pt-32 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">{tNav('archives')}</h1>
      <p className="text-gray-500">Coming soon.</p>
    </main>
  );
}
