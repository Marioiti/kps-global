import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import DaisyMotif from './DaisyMotif';
import { Fuel, Flame, Gem } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      titleKey: 'services.energy.title',
      descKey: 'services.energy.desc',
      icon: Fuel,
    },
    {
      titleKey: 'services.gas.title',
      descKey: 'services.gas.desc',
      icon: Flame,
    },
    {
      titleKey: 'services.metals.title',
      descKey: 'services.metals.desc',
      icon: Gem,
    },
  ];

  return (
    <section id="services" className="py-32 bg-surface relative">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 line-gold" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-6">
          <DaisyMotif size={16} className="text-primary" />
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
            {t('services.sectionLabel')}
          </span>
        </div>

        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
          {t('services.title')}
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mb-20">
          {t('services.subtitle')}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.titleKey}
                className="border border-border/50 p-8 md:p-10 group hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <Icon
                    size={24}
                    className="text-primary/60 mb-6 group-hover:text-primary transition-colors duration-500"
                  />
                  <h3 className="font-serif text-xl text-foreground mb-4">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(service.descKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
