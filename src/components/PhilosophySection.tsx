import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import DaisyMotif from './DaisyMotif';

const PhilosophySection: React.FC = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      titleKey: 'philosophy.kusuma.title',
      meaningKey: 'philosophy.kusuma.meaning',
      descKey: 'philosophy.kusuma.desc',
      icon: '❀',
    },
    {
      titleKey: 'philosophy.petak.title',
      meaningKey: 'philosophy.petak.meaning',
      descKey: 'philosophy.petak.desc',
      icon: '▦',
    },
    {
      titleKey: 'philosophy.sari.title',
      meaningKey: 'philosophy.sari.meaning',
      descKey: 'philosophy.sari.desc',
      icon: '◈',
    },
  ];

  return (
    <section id="philosophy" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <DaisyMotif size={16} className="text-primary" />
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
            {t('philosophy.sectionLabel')}
          </span>
        </div>

        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
          {t('philosophy.title')}
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mb-20">
          {t('philosophy.subtitle')}
        </p>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-px bg-border/30">
          {pillars.map((pillar) => (
            <div
              key={pillar.titleKey}
              className="bg-background p-8 md:p-12 group hover:bg-secondary/30 transition-colors duration-500"
            >
              <span className="text-2xl mb-6 block opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                {pillar.icon}
              </span>
              <h3 className="font-serif text-2xl text-foreground mb-1">
                {t(pillar.titleKey)}
              </h3>
              <span className="text-xs tracking-[0.2em] uppercase text-primary mb-6 block">
                {t(pillar.meaningKey)}
              </span>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {t(pillar.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
