import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Reveal from '@/hooks/use-reveal';
import { Layers, Globe } from 'lucide-react';

const CapabilitiesSection: React.FC = () => {
  const { t } = useLanguage();

  const capabilities = [
    {
      titleKey: 'sectors.industries.title',
      descKey: 'sectors.industries.desc',
      icon: Layers,
    },
    {
      titleKey: 'sectors.geographies.title',
      descKey: 'sectors.geographies.desc',
      icon: Globe,
    },
  ];

  return (
    <section id="sectors" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-6 h-px bg-accent" aria-hidden="true" />
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
            {t('sectors.sectionLabel')}
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          {t('sectors.title')}
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mb-20">
          {t('sectors.subtitle')}
        </p>

        <div className="grid md:grid-cols-2 gap-px bg-border/30 overflow-hidden rounded-sm">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <Reveal
                key={cap.titleKey}
                delay={i * 140}
                className="bg-background p-10 md:p-16 group hover:bg-secondary/20 transition-colors duration-500"
              >
                <Icon
                  size={32}
                  className="text-primary/40 mb-8 group-hover:text-primary transition-colors duration-500"
                  strokeWidth={1.5}
                />
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                  {t(cap.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(cap.descKey)}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
