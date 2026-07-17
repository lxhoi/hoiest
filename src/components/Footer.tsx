import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import Image from 'next/image';


export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-cta">
            <h2>{t('cta')}</h2>
          </div>
          <div className="footer-email">
            <Link href="/contact">lxhoi.2k@gmail.com &rarr;</Link>
          </div>
        </div>

        <div className="footer-middle">
          <div className="footer-socials">
            <h4 className="meta-label">{t('social')}</h4>
            <div className="footer-links">
              <a href="https://www.tiktok.com/@hoiest.design" target="_blank" rel="noopener noreferrer">Tiktok</a>
              <a href="https://www.facebook.com/hoiest.design/" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.instagram.com/hoiest.design/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.threads.com/@hoiest.design" target="_blank" rel="noopener noreferrer">Threads</a>
              <a href="https://www.youtube.com/@hoiest" target="_blank" rel="noopener noreferrer">Youtube</a>
              <a href="mailto:lxhoi.2k@gmail.com">Email</a>
              <a href="tel:081291478">Phone</a>
              <a href="https://zalo.me/081291478" target="_blank" rel="noopener noreferrer">Zalo</a>
              <a href="https://wa.me/081291478" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-logotype">
            <Image src="/logo/logotype.svg" alt="HOIEST" width={800} height={150} className="w-full h-auto block invert" />
          </div>
        </div>
      </div>
    </footer>
  );
}
