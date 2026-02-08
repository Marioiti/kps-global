import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import DaisyMotif from './DaisyMotif';
import { Fuel, Flame, Diamond } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const services = [
  {
    titleKey: 'services.energy.title',
    descKey: 'services.energy.desc',
    detailsKey: 'services.energy.details',
    icon: Fuel,
  },
  {
    titleKey: 'services.gas.title',
    descKey: 'services.gas.desc',
    detailsKey: 'services.gas.details',
    icon: Flame,
  },
  {
    titleKey: 'services.metals.title',
    descKey: 'services.metals.desc',
    detailsKey: 'services.metals.details',
    icon: Diamond,
  },
];

const ALGORITHM_STEPS = [1, 2, 3, 4, 5] as const;

const scrollToMandate = () => {
  document.getElementById('mandate')?.scrollIntoView({ behavior: 'smooth' });
};

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <section id="services" className="py-32 bg-surface relative">
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
              <button
                key={service.titleKey}
                type="button"
                onClick={() => setOpenModal(service.titleKey)}
                className="text-left bg-secondary/50 border border-border/60 p-8 md:p-10 group hover:bg-secondary/70 hover:border-border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2 focus:ring-offset-background rounded-sm"
              >
                <Icon
                  size={24}
                  className="text-foreground/70 mb-6 group-hover:text-foreground transition-colors"
                  strokeWidth={1.5}
                />
                <h3 className="font-semibold text-base text-foreground mb-4">
                  {t(service.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(service.descKey)}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {services.map((service) => {
        const Icon = service.icon;
        return (
          <Dialog
            key={service.titleKey}
            open={openModal === service.titleKey}
            onOpenChange={(open) => !open && setOpenModal(null)}
          >
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3 text-xl font-serif pr-8">
                  <Icon className="h-6 w-6 text-primary" />
                  {t(service.titleKey)}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {t(service.detailsKey)}
                </p>

                <div className="border-t border-border pt-6">
                  <h4 className="font-serif font-semibold text-foreground mb-4">
                    {t('services.algorithm.title')}
                  </h4>
                  <ol className="space-y-3">
                    {ALGORITHM_STEPS.map((step) => (
                      <li key={step} className="flex gap-3 items-start">
                        <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold">
                          {step}
                        </span>
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {t(`services.algorithm.step${step}`)}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setOpenModal(null);
                    scrollToMandate();
                  }}
                  className="w-full py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-medium hover:bg-primary/90 transition-colors glow-gold mt-4"
                >
                  {t('mandate.submit')}
                </button>
              </div>
            </DialogContent>
          </Dialog>
        );
      })}
    </section>
  );
};

export default ServicesSection;
