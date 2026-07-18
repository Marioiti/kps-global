import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import kpsLogo from '@/assets/kps-logo.png';
import { ArrowDown, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient gradient wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 80% at 50% 0%, hsl(222 47% 96%) 0%, hsl(var(--background)) 55%)',
        }}
      />

      {/* Background motif */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04]">
        <img
          src={kpsLogo}
          alt=""
          aria-hidden="true"
          className="w-[800px] h-[800px] max-w-[130vw] object-contain animate-petal-rotate motion-reduce:animate-none"
        />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="w-8 h-px bg-primary/50" />
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
            {t('hero.since')}
          </span>
          <div className="w-8 h-px bg-primary/50" />
        </div>

        {/* Title */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <span className="text-gradient-gold">{t('hero.title')}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          {t('hero.subtitle')}
        </p>

        {/* CTA */}
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '1.1s' }}>
          <a
            href="#mandate"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-medium hover:bg-primary/90 hover:gap-4 transition-all duration-300 glow-gold rounded-sm"
          >
            {t('hero.cta')}
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* History line */}
        <div className="mt-20 opacity-0 animate-fade-in" style={{ animationDelay: '1.4s' }}>
          <p className="text-xs text-muted-foreground/60 max-w-md mx-auto leading-relaxed">
            {t('history.text')}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '2s' }}>
        <ArrowDown size={16} className="text-muted-foreground animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
