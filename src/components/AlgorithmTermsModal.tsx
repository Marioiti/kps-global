import React, { useState, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

function renderBold(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, j) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={j} className="font-semibold text-foreground">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );
}

function formatTermsText(text: string) {
  const paragraphs = text.split(/\n\n/).filter((p) => p.trim());
  const elements: React.ReactNode[] = [];

  paragraphs.forEach((para, i) => {
    const numberedMatch = para.match(/^(\d+)\.\s+(.+)$/);
    if (numberedMatch) {
      const [, num, content] = numberedMatch;
      const colonIndex = content.search(/[:：]/);
      const title = colonIndex > 0 ? content.slice(0, colonIndex) : content;
      const body = colonIndex > 0 ? content.slice(colonIndex + 1).trim() : '';

      elements.push(
        <div
          key={i}
          className="flex gap-4 py-4 border-b border-border/60 last:border-b-0"
        >
          <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary font-serif font-semibold text-sm">
            {num}
          </span>
          <div className="flex-1 min-w-0">
            <h4 className="font-serif font-semibold text-foreground mb-1.5 text-[15px]">
              {renderBold(title)}
            </h4>
            {body && (
              <p className="text-muted-foreground text-[13px] leading-relaxed">
                {renderBold(body)}
              </p>
            )}
          </div>
        </div>
      );
    } else if (
      para.toUpperCase() === para &&
      (para.includes('NOTICE') || para.includes('AGREEMENT') || para.includes('SOLUTIONS'))
    ) {
      elements.push(
        <h3
          key={i}
          className="font-serif text-base font-semibold text-foreground tracking-wide mb-3 mt-6 first:mt-0 pb-2 border-b border-primary/20"
        >
          {para}
        </h3>
      );
    } else {
      elements.push(
        <p
          key={i}
          className="text-muted-foreground text-[13px] leading-[1.7] mb-4"
        >
          {renderBold(para)}
        </p>
      );
    }
  });

  return elements;
}

interface AlgorithmTermsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAccept: () => void;
}

export const AlgorithmTermsModal: React.FC<AlgorithmTermsModalProps> = ({
  open,
  onOpenChange,
  onAccept,
}) => {
  const { t, language } = useLanguage();
  const [hasScrolledToEnd, setHasScrolledToEnd] = useState(false);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const threshold = 20;
    const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight <= threshold;
    setHasScrolledToEnd((prev) => prev || atBottom);
  }, []);

  const handleAccept = useCallback(async () => {
    if (!hasScrolledToEnd) return;

    if (FORMSPREE_ENDPOINT) {
      try {
        await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            _subject: 'KPS Algorithm Terms Accepted',
            type: 'terms_acceptance',
            acceptedAt: new Date().toISOString(),
            language,
            userAgent: navigator.userAgent,
            sessionId: crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`,
          }),
        });
      } catch {
        // Silently fail - acceptance is still recorded locally
      }
    }

    onAccept();
    onOpenChange(false);
  }, [hasScrolledToEnd, onAccept, onOpenChange, language]);

  const handleDownloadPdf = useCallback(() => {
    const terms = t('algorithm.termsFull');
    const title = 'KPS GLOBAL SOLUTIONS: TERMS OF SERVICE & TRANSACTION ALGORITHM';
    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${title}</title>
  <style>
    body { font-family: Georgia, serif; max-width: 700px; margin: 2rem auto; padding: 1rem; line-height: 1.6; }
    h1 { font-size: 1.25rem; margin-bottom: 1rem; }
    p { margin-bottom: 1rem; }
    strong { font-weight: bold; }
  </style>
</head>
<body>
  <h1>${title}</h1>
  ${terms
    .split(/\n\n/)
    .map(
      (p) =>
        `<p>${p.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/\n/g, ' ')}</p>`
    )
    .join('')}
</body>
</html>`;
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(html);
      printWindow.document.close();
      printWindow.print();
      printWindow.close();
    }
  }, [t]);

  const termsText = t('algorithm.termsFull');

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col gap-4">
        <DialogHeader className="space-y-1">
          <DialogTitle className="text-lg font-serif pr-8 leading-tight text-foreground">
            KPS GLOBAL SOLUTIONS: TERMS OF SERVICE & TRANSACTION ALGORITHM
          </DialogTitle>
        </DialogHeader>

        <div
          className="flex-1 overflow-y-auto border border-border rounded-lg p-6 bg-gradient-to-b from-secondary/40 to-secondary/20 min-h-[280px] max-h-[50vh] text-sm text-foreground"
          onScroll={handleScroll}
        >
          <div className="space-y-0">{formatTermsText(termsText)}</div>
        </div>

        <p className="text-xs text-muted-foreground">{t('algorithm.scrollHint')}</p>

        <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:justify-between">
          <button
            type="button"
            onClick={handleDownloadPdf}
            className="text-sm text-primary hover:underline underline-offset-2"
          >
            {t('mandate.downloadPdf')}
          </button>
          <button
            type="button"
            onClick={handleAccept}
            disabled={!hasScrolledToEnd}
            className={cn(
              'px-6 py-2 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-medium transition-all',
              hasScrolledToEnd
                ? 'hover:bg-primary/90 cursor-pointer glow-gold'
                : 'opacity-40 cursor-not-allowed'
            )}
          >
            {t('mandate.acceptTerms')}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AlgorithmTermsModal;
