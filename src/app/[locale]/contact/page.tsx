'use client';

import {useTranslations} from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <div className="container contact-container">
      <h1 className="section-title">{t('title')}</h1>
      <p className="contact-subtitle">{t('subtitle')}</p>

      <form className="contact-form" action="#" method="POST" onSubmit={(e) => { e.preventDefault(); alert('Thank you! Your message has been sent.'); }}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">{t('label.name')}</label>
          <input className="form-control" type="text" id="name" name="name" required />
        </div>
        
        <div className="form-group">
          <label className="form-label" htmlFor="email">{t('label.email')}</label>
          <input className="form-control" type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="brand">{t('label.brand')}</label>
          <input className="form-control" type="text" id="brand" name="brand" required />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="deadline">{t('label.deadline')}</label>
          <input className="form-control" type="text" id="deadline" name="deadline" />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="budget">{t('label.budget')}</label>
          <input className="form-control" type="text" id="budget" name="budget" />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="source">{t('label.source')}</label>
          <select className="form-control" id="source" name="source">
            <option value="Instagram">Instagram</option>
            <option value="Facebook">Facebook</option>
            <option value="Tiktok">Tiktok</option>
            <option value="Threads">Threads</option>
            <option value="Behance">Behance</option>
            <option value="Referral">Referral</option>
            <option value="Other">Khác</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="description">{t('label.desc')}</label>
          <textarea className="form-control" id="description" name="description" rows={5} required></textarea>
        </div>

        <button className="btn-black btn-submit" type="submit">{t('btn.submit')}</button>
      </form>
    </div>
  );
}
