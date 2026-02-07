import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import DaisyMotif from './DaisyMotif';
import { Shield, TrendingUp } from 'lucide-react';

const CapabilitiesSection: React.FC = () => {
  const { t } = useLanguage();

  const capabilities = [
    {
      titleKey: 'capabilities.paymaster.title',
      descKey: 'capabilities.paymaster.desc',
      icon: Shield,
    },
    {
      titleKey: 'capabilities.investment.title',
      descKey: 'capabilities.investment.desc',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="capabilities" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-6">
          <DaisyMotif size={16} className="text-primary" />
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
            {t('capabilities.sectionLabel')}
          </span>
        </div>

        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
          {t('capabilities.title')}
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mb-20">
          {t('capabilities.subtitle')}
        </p>

        <div className="grid md:grid-cols-2 gap-px bg-border/30">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.titleKey}
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
