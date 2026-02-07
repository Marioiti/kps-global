import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import DaisyMotif from './DaisyMotif';

const AlgorithmSection: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    { num: '01', titleKey: 'algorithm.step1.title', descKey: 'algorithm.step1.desc' },
    { num: '02', titleKey: 'algorithm.step2.title', descKey: 'algorithm.step2.desc' },
    { num: '03', titleKey: 'algorithm.step3.title', descKey: 'algorithm.step3.desc' },
    { num: '04', titleKey: 'algorithm.step4.title', descKey: 'algorithm.step4.desc' },
    { num: '05', titleKey: 'algorithm.step5.title', descKey: 'algorithm.step5.desc' },
    { num: '06', titleKey: 'algorithm.step6.title', descKey: 'algorithm.step6.desc' },
  ];

  return (
    <section id="algorithm" className="py-32 bg-surface relative">
      <div className="absolute top-0 left-0 right-0 line-gold" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-6">
          <DaisyMotif size={16} className="text-primary" />
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
            {t('algorithm.sectionLabel')}
          </span>
        </div>

        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
          {t('algorithm.title')}
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mb-20">
          {t('algorithm.subtitle')}
        </p>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/30">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-background p-8 md:p-10 group hover:bg-secondary/20 transition-colors duration-500 relative"
            >
              {/* Step number */}
              <span className="text-5xl font-serif text-border/80 group-hover:text-primary/20 transition-colors duration-500 absolute top-6 right-8">
                {step.num}
              </span>

              <div className="relative z-10 mt-12">
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {t(step.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(step.descKey)}
                </p>
              </div>

              {/* Connector line (visual only) */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlgorithmSection;
