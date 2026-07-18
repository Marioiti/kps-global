import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import DaisyMotif from './DaisyMotif';
import { toast } from 'sonner';
import { Mail, MessageCircle, Linkedin } from 'lucide-react';

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

const EMAIL = 'main@kpsglobal.id';
const WHATSAPP_NUMBER = '6281337056615';
const LINKEDIN_URL = 'https://www.linkedin.com/in/anorlov/';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    area: '',
    message: '',
    // Honeypot — must stay empty for real users.
    company_website: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyConsent) return;

    // Silently drop bot submissions that fill the honeypot.
    if (formData.company_website) {
      setSubmitted(true);
      return;
    }

    if (!FORMSPREE_ENDPOINT) {
      toast.error(t('contact.error'));
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _subject: `Website enquiry — ${formData.name}${formData.company ? ` (${formData.company})` : ''}`,
          name: formData.name,
          company: formData.company,
          area: formData.area,
          message: formData.message,
          privacyConsent: true,
          consentAt: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error('Submit failed');
      setSubmitted(true);
      toast.success(t('contact.success'));
    } catch {
      toast.error(t('contact.error'));
    } finally {
      setSubmitting(false);
    }
  };

  const inputClasses =
    'w-full px-4 py-3 bg-secondary/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors';
  const selectClasses =
    'w-full px-4 py-3 bg-secondary/50 border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors appearance-none';

  if (submitted) {
    return (
      <section id="contact" className="py-32 relative">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <DaisyMotif size={48} className="text-primary mx-auto mb-8" />
          <h2 className="font-serif text-3xl text-foreground mb-4">{t('contact.success')}</h2>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute top-0 left-0 right-0 line-gold" />

      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-6 h-px bg-accent" aria-hidden="true" />
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
            {t('contact.sectionLabel')}
          </span>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
          {t('contact.title')}
        </h2>
        <p className="text-muted-foreground mb-12">{t('contact.subtitle')}</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
              {t('contact.name')}
            </label>
            <input
              type="text"
              required
              maxLength={200}
              placeholder={t('contact.namePlaceholder')}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={inputClasses}
            />
          </div>

          {/* Company & jurisdiction */}
          <div>
            <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
              {t('contact.company')}
            </label>
            <input
              type="text"
              maxLength={200}
              placeholder={t('contact.companyPlaceholder')}
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className={inputClasses}
            />
          </div>

          {/* Area of interest */}
          <div>
            <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
              {t('contact.area')}
            </label>
            <select
              required
              value={formData.area}
              onChange={(e) => setFormData({ ...formData, area: e.target.value })}
              className={selectClasses}
            >
              <option value="" disabled>{t('contact.areaPlaceholder')}</option>
              <option value="trade">{t('contact.areaTrade')}</option>
              <option value="coo">{t('contact.areaCOO')}</option>
              <option value="compliance">{t('contact.areaCompliance')}</option>
              <option value="other">{t('contact.areaOther')}</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
              {t('contact.message')}
            </label>
            <textarea
              required
              maxLength={2000}
              rows={5}
              placeholder={t('contact.messagePlaceholder')}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`${inputClasses} resize-y`}
            />
          </div>

          {/* Honeypot (hidden from users) */}
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={formData.company_website}
            onChange={(e) => setFormData({ ...formData, company_website: e.target.value })}
            className="hidden"
          />

          {/* Personal-data processing consent */}
          <div className="flex items-start gap-3 pt-2">
            <input
              type="checkbox"
              id="privacyConsent"
              checked={privacyConsent}
              onChange={(e) => setPrivacyConsent(e.target.checked)}
              className="mt-1 w-4 h-4 border border-border bg-secondary/50 accent-primary cursor-pointer"
              required
            />
            <label htmlFor="privacyConsent" className="text-sm text-muted-foreground cursor-pointer leading-relaxed">
              {t('contact.privacyPrefix')}
              <Link
                to="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline underline-offset-2 font-medium"
              >
                {t('contact.privacyLink')}
              </Link>
              {t('contact.privacySuffix')}
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!privacyConsent || submitting}
            className="w-full py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-medium hover:bg-primary/90 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed glow-gold mt-2"
          >
            {submitting ? t('contact.submitting') : t('contact.submit')}
          </button>
        </form>

        {/* Direct channels */}
        <div className="mt-14 pt-10 border-t border-border/60">
          <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-6">
            {t('contact.directLabel')}
          </span>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              <Mail size={16} className="text-primary" />
              {EMAIL}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              <MessageCircle size={16} className="text-primary" />
              {t('contact.whatsappLabel')}
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              <Linkedin size={16} className="text-primary" />
              {t('contact.linkedinLabel')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
