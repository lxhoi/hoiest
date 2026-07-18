import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {Inter} from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'HOIEST Brand Identity',
  description: 'Portfolio of HOIEST Brand Identity',
  icons: {
    icon: '/logo/favicon.svg',
  },
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale} className={inter.variable}>
      <body className="font-sans antialiased text-[var(--black)] bg-[var(--bg)] min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <SmoothScroll>
            <Header />
            <main className="flex-1" id="top">
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
