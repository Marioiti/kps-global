import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Reveal from '@/hooks/use-reveal';
import { Layers, Globe } from 'lucide-react';

const offices = [
  { cityKey: 'city.sanya', countryKey: 'geo.china' },
  { cityKey: 'city.denpasar', countryKey: 'geo.indonesia' },
  { cityKey: 'city.moscow', countryKey: 'geo.russia' },
  { cityKey: 'city.chicago', countryKey: 'geo.usa' },
  { cityKey: 'city.dubai', countryKey: 'geo.uae' },
];

const markets = [
  'geo.singapore', 'geo.china', 'geo.hongkong', 'geo.malaysia',
  'geo.usa', 'geo.uae', 'geo.india', 'geo.indonesia',
];

const CapabilitiesSection: React.FC = () => {
  const { t } = useLanguage();

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
        <p className="text-muted-foreground text-lg max-w-2xl mb-16">
          {t('sectors.subtitle')}
        </p>

        {/* Sectors + Global presence */}
        <div className="grid lg:grid-cols-2 gap-px bg-border/30 overflow-hidden rounded-sm mb-12">
          {/* Sectors */}
          <Reveal className="bg-background p-10 md:p-14">
            <Layers size={30} className="text-primary/40 mb-8" strokeWidth={1.5} />
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">
              {t('sectors.industries.title')}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('sectors.industries.desc')}
            </p>
          </Reveal>

          {/* Global presence */}
          <Reveal delay={140} className="bg-background p-10 md:p-14">
            <Globe size={30} className="text-primary/40 mb-8" strokeWidth={1.5} />
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-6">
              {t('sectors.presenceTitle')}
            </h3>
            <span className="text-xs tracking-[0.2em] uppercase text-primary/70 font-semibold block mb-4">
              {t('sectors.officesLabel')}
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4">
              {offices.map((o) => (
                <div key={o.cityKey}>
                  <div className="text-foreground font-semibold">{t(o.cityKey)}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">{t(o.countryKey)}</div>
                </div>
              ))}
            </div>
            <p className="mt-8 pt-6 border-t border-border/60 text-sm text-muted-foreground">
              {t('sectors.entitiesNote')}
            </p>
          </Reveal>
        </div>

        {/* Markets */}
        <Reveal className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <span className="text-xs tracking-[0.2em] uppercase text-primary/70 font-semibold shrink-0">
            {t('sectors.marketsLabel')}
          </span>
          <div className="flex flex-wrap gap-2">
            {markets.map((m) => (
              <span
                key={m}
                className="px-3 py-1.5 text-sm text-foreground/80 border border-border rounded-sm bg-background"
              >
                {t(m)}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
