import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Reveal from '@/hooks/use-reveal';
import { Handshake, Compass, ShieldCheck } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const services = [
  {
    titleKey: 'services.trade.title',
    descKey: 'services.trade.desc',
    detailsKey: 'services.trade.details',
    icon: Handshake,
  },
  {
    titleKey: 'services.coo.title',
    descKey: 'services.coo.desc',
    detailsKey: 'services.coo.details',
    icon: Compass,
  },
  {
    titleKey: 'services.compliance.title',
    descKey: 'services.compliance.desc',
    detailsKey: 'services.compliance.details',
    icon: ShieldCheck,
  },
];

const PROCESS_STEPS = [1, 2, 3, 4, 5] as const;

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <section id="services" className="py-32 bg-surface relative">
      <div className="absolute top-0 left-0 right-0 line-gold" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-6 h-px bg-accent" aria-hidden="true" />
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
            {t('services.sectionLabel')}
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          {t('services.title')}
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mb-20">
          {t('services.subtitle')}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.titleKey} delay={i * 120} as="div">
                <button
                  type="button"
                  onClick={() => setOpenModal(service.titleKey)}
                  className="w-full h-full text-left bg-secondary/50 border border-border/60 p-8 md:p-10 group hover:bg-secondary/70 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2 focus:ring-offset-background rounded-sm"
                >
                  <Icon
                    size={24}
                    className="text-foreground/70 mb-6 group-hover:text-primary transition-colors"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-semibold text-base text-foreground mb-4">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(service.descKey)}
                  </p>
                </button>
              </Reveal>
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
                    {t('services.process.title')}
                  </h4>
                  <ol className="space-y-3">
                    {PROCESS_STEPS.map((step) => (
                      <li key={step} className="flex gap-3 items-start">
                        <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold">
                          {step}
                        </span>
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {t(`services.process.step${step}`)}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setOpenModal(null);
                    scrollToContact();
                  }}
                  className="w-full py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-medium hover:bg-primary/90 transition-colors glow-gold mt-4"
                >
                  {t('services.cta')}
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
