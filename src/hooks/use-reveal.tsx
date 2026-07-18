import React, { useEffect, useRef, useState } from 'react';

/**
 * Reveals its children with a soft fade/rise the first time they scroll into
 * view. Respects `prefers-reduced-motion` by showing content immediately.
 */
interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Extra delay in ms, useful for staggering siblings. */
  delay?: number;
  as?: 'div' | 'section' | 'li' | 'article';
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  delay = 0,
  as = 'div',
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      className={`transition-all duration-700 ease-out will-change-[opacity,transform] ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
