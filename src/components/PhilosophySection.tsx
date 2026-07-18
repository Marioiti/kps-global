import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Reveal from '@/hooks/use-reveal';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const principles = [
    { titleKey: 'about.p1.title', descKey: 'about.p1.desc' },
    { titleKey: 'about.p2.title', descKey: 'about.p2.desc' },
    { titleKey: 'about.p3.title', descKey: 'about.p3.desc' },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-5">
          <span className="w-6 h-px bg-accent" aria-hidden="true" />
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
            {t('about.sectionLabel')}
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          {t('about.title')}
        </h2>

        {/* Lead */}
        <div className="mb-20 max-w-3xl">
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t('about.lead')}
          </p>
        </div>

        {/* Three principles */}
        <div className="grid md:grid-cols-3 gap-px bg-border/30 overflow-hidden rounded-sm">
          {principles.map((p, i) => (
            <Reveal
              key={p.titleKey}
              delay={i * 120}
              className="bg-background p-8 md:p-12 group hover:bg-secondary/30 transition-colors duration-500"
            >
              <span className="text-xs tracking-[0.2em] uppercase text-primary mb-4 block">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-serif text-2xl text-foreground mb-3">
                {t(p.titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {t(p.descKey)}
              </p>
            </Reveal>
          ))}
        </div>

        {/* What we are not */}
        <Reveal className="mt-8 border border-primary/20 bg-primary/[0.03] rounded-sm p-8 md:p-10">
          <span className="text-xs tracking-[0.2em] uppercase text-primary block mb-3">
            {t('about.notLabel')}
          </span>
          <p className="text-foreground/80 leading-relaxed max-w-3xl">
            {t('about.notDesc')}
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutSection;
