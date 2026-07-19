import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  const markets = [
    'geo.singapore', 'geo.china', 'geo.hongkong', 'geo.malaysia',
    'geo.usa', 'geo.uae', 'geo.india', 'geo.indonesia',
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden border-b border-border">
      {/* Ambient wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(110% 90% at 15% 0%, hsl(222 47% 95%) 0%, hsl(var(--background)) 55%)',
        }}
      />

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-16">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.15s' }}>
            <span className="w-6 h-px bg-accent" />
            <span className="text-xs tracking-[0.25em] uppercase text-primary/70 font-semibold">
              {t('hero.badge')}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-[4.4rem] font-extrabold leading-[1.04] tracking-tight text-foreground mb-7 max-w-3xl text-balance opacity-0 animate-fade-in" style={{ animationDelay: '0.35s' }}>
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.55s' }}>
            {t('hero.subtitle')}
          </p>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-5 opacity-0 animate-fade-in" style={{ animationDelay: '0.75s' }}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-primary text-primary-foreground text-sm tracking-wide font-semibold hover:bg-primary/90 hover:gap-4 transition-all duration-300 rounded-sm"
            >
              {t('hero.cta')}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#services" className="text-sm font-medium text-primary/80 hover:text-primary underline-offset-4 hover:underline transition-colors">
              {t('hero.secondaryCta')}
            </a>
          </div>
        </div>

        {/* Reach bar */}
        <div className="mt-20 pt-8 border-t border-border/70 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
          <span className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground/70 font-semibold">
            {t('hero.reachLabel')}
          </span>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {markets.map((m) => (
              <span key={m} className="text-sm text-foreground/70 font-medium">
                {t(m)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
