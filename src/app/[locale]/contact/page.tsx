'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Failed to submit form', error);
      setStatus('error');
    }
  };

  return (
    <div className="container contact-container">
      <h1 className="section-title">{t('title')}</h1>
      <p className="contact-subtitle">{t('subtitle')}</p>

      {status === 'success' && (
        <div className="p-4 mb-6 text-[14px] font-medium text-[#111] bg-green-100 border border-green-200 rounded">
          Thank you! Your message has been sent successfully. I typically respond within 48 hours.
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 mb-6 text-[14px] font-medium text-[#111] bg-red-100 border border-red-200 rounded">
          Oops! Something went wrong. Please try again later or contact me directly via email.
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
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

        <button className="btn-black btn-submit disabled:opacity-50" type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending...' : t('btn.submit')}
        </button>
      </form>
    </div>
  );
}
