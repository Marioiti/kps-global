import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/i18n/translations';
import Footer from '@/components/Footer';
import kpsLogo from '@/assets/kps-logo.png';

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'zh', label: '中文' },
];

const SECTION_KEYS = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10'] as const;

/** Inline **bold** → <strong>. */
function renderBold(text: string, keyPrefix: string): React.ReactNode {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={`${keyPrefix}-${i}`} className="font-semibold text-foreground">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <React.Fragment key={`${keyPrefix}-${i}`}>{part}</React.Fragment>
    ),
  );
}

/**
 * Renders a translation body string: blank-line-separated paragraphs, with
 * consecutive lines starting "- " grouped into a bullet list, and **bold**.
 */
function renderBody(body: string): React.ReactNode[] {
  const blocks = body.split(/\n\n+/).filter((b) => b.trim());
  return blocks.map((block, bi) => {
    const lines = block.split('\n');
    const isList = lines.every((l) => l.trim().startsWith('- '));

    if (isList) {
      return (
        <ul key={bi} className="my-4 space-y-1.5 list-disc pl-5 text-muted-foreground">
          {lines.map((l, li) => (
            <li key={li} className="leading-relaxed">
              {renderBold(l.trim().slice(2), `${bi}-${li}`)}
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p key={bi} className="my-4 leading-relaxed text-muted-foreground whitespace-pre-line">
        {renderBold(block, `${bi}`)}
      </p>
    );
  });
}

const PrivacyPolicy: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    document.title = `${t('privacy.title')} — KPS Global`;
    window.scrollTo(0, 0);
  }, [t]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Lightweight header (the main Navbar's in-page anchors don't apply here) */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3 group">
              <img src={kpsLogo} alt={t('footer.companyName')} className="h-10 w-auto" />
              <span className="text-lg font-semibold tracking-wide">KPS</span>
            </Link>

            <div className="flex items-center gap-1 border border-border rounded-sm">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-3 py-1.5 text-xs tracking-wider transition-all duration-300 ${
                    language === lang.code
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
          >
            <ArrowLeft size={16} />
            {t('privacy.backHome')}
          </Link>

          <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
            {t('privacy.title')}
          </h1>
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-10">
            {t('privacy.lastUpdatedLabel')}: {t('privacy.lastUpdatedDate')}
          </p>

          <div className="text-[15px]">
            {renderBody(t('privacy.intro'))}

            {SECTION_KEYS.map((s) => (
              <section key={s} className="mt-10">
                <h2 className="font-serif text-xl md:text-2xl text-foreground mb-2">
                  {t(`privacy.${s}.title`)}
                </h2>
                {renderBody(t(`privacy.${s}.body`))}
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
