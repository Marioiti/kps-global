import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import DaisyMotif from './DaisyMotif';
import AlgorithmTermsModal from './AlgorithmTermsModal';
import { toast } from 'sonner';

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

const MandateForm: React.FC = () => {
  const { t } = useLanguage();
  const [agreed, setAgreed] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    entity: '',
    role: '',
    commodity: '',
    financial: '',
    contactPerson: '',
    contactChannel: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;

    if (!FORMSPREE_ENDPOINT) {
      toast.error(t('mandate.error'));
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _subject: `Strategic Briefing Request - ${formData.entity}`,
          entity: formData.entity,
          role: formData.role,
          commodity: formData.commodity,
          financial: formData.financial,
          contactPerson: formData.contactPerson,
          contactChannel: formData.contactChannel,
        }),
      });

      if (!res.ok) throw new Error('Submit failed');
      setSubmitted(true);
      toast.success(t('mandate.success'));
    } catch {
      toast.error(t('mandate.error'));
    } finally {
      setSubmitting(false);
    }
  };

  const selectClasses =
    'w-full px-4 py-3 bg-secondary/50 border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors appearance-none';
  const inputClasses =
    'w-full px-4 py-3 bg-secondary/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors';

  if (submitted) {
    return (
      <section id="mandate" className="py-32 relative">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <DaisyMotif size={48} className="text-primary mx-auto mb-8" />
          <h2 className="font-serif text-3xl text-foreground mb-4">{t('mandate.success')}</h2>
        </div>
      </section>
    );
  }

  return (
    <section id="mandate" className="py-32 relative">
      <div className="absolute top-0 left-0 right-0 line-gold" />

      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-6">
          <DaisyMotif size={16} className="text-primary" />
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
            {t('mandate.sectionLabel')}
          </span>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
          {t('mandate.title')}
        </h2>
        <p className="text-muted-foreground mb-12">
          {t('mandate.subtitle')}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Entity */}
          <div>
            <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
              {t('mandate.entity')}
            </label>
            <input
              type="text"
              required
              maxLength={200}
              placeholder={t('mandate.entityPlaceholder')}
              value={formData.entity}
              onChange={(e) => setFormData({ ...formData, entity: e.target.value })}
              className={inputClasses}
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
              {t('mandate.role')}
            </label>
            <select
              required
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className={selectClasses}
            >
              <option value="" disabled>{t('mandate.rolePlaceholder')}</option>
              <option value="end_buyer">{t('mandate.roleEndBuyer')}</option>
              <option value="mandate">{t('mandate.roleMandate')}</option>
              <option value="intermediary">{t('mandate.roleIntermediary')}</option>
            </select>
          </div>

          {/* Commodity */}
          <div>
            <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
              {t('mandate.commodity')}
            </label>
            <select
              required
              value={formData.commodity}
              onChange={(e) => setFormData({ ...formData, commodity: e.target.value })}
              className={selectClasses}
            >
              <option value="" disabled>{t('mandate.commodityPlaceholder')}</option>
              <option value="en590">{t('mandate.commodityEN590')}</option>
              <option value="jet_a1">{t('mandate.commodityJetA1')}</option>
              <option value="d6">{t('mandate.commodityD6')}</option>
              <option value="espo">{t('mandate.commodityESPO')}</option>
              <option value="urals">{t('mandate.commodityUrals')}</option>
              <option value="lng">{t('mandate.commodityLNG')}</option>
              <option value="lpg">{t('mandate.commodityLPG')}</option>
              <option value="aluminum">{t('mandate.commodityAluminum')}</option>
              <option value="sulphur">{t('mandate.commoditySulphur')}</option>
            </select>
          </div>

          {/* Financial readiness */}
          <div>
            <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
              {t('mandate.financial')}
            </label>
            <select
              required
              value={formData.financial}
              onChange={(e) => setFormData({ ...formData, financial: e.target.value })}
              className={selectClasses}
            >
              <option value="" disabled>{t('mandate.financialPlaceholder')}</option>
              <option value="pof">{t('mandate.financialPOF')}</option>
              <option value="bcl">{t('mandate.financialBCL')}</option>
              <option value="sblc">{t('mandate.financialSBLC')}</option>
            </select>
          </div>

          {/* Contact Person */}
          <div>
            <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
              {t('mandate.contactPerson')}
            </label>
            <input
              type="text"
              required
              maxLength={200}
              placeholder={t('mandate.contactPersonPlaceholder')}
              value={formData.contactPerson}
              onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
              className={inputClasses}
            />
          </div>

          {/* Contact Channel */}
          <div>
            <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
              {t('mandate.contactChannel')}
            </label>
            <input
              type="text"
              required
              maxLength={200}
              placeholder={t('mandate.contactChannelPlaceholder')}
              value={formData.contactChannel}
              onChange={(e) => setFormData({ ...formData, contactChannel: e.target.value })}
              className={inputClasses}
            />
          </div>

          {/* Agreement checkbox */}
          <div className="flex items-start gap-3 pt-4">
            <input
              type="checkbox"
              id="agree"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 w-4 h-4 border border-border bg-secondary/50 accent-primary cursor-pointer"
              required
            />
            <label htmlFor="agree" className="text-sm text-muted-foreground cursor-pointer leading-relaxed">
              {t('mandate.agreePrefix')}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setTermsModalOpen(true);
                }}
                className="text-primary hover:underline underline-offset-2 font-medium"
              >
                {t('mandate.agreeLink')}
              </button>
              {t('mandate.agreeSuffix')}
            </label>
          </div>

          <AlgorithmTermsModal
            open={termsModalOpen}
            onOpenChange={setTermsModalOpen}
            onAccept={() => setAgreed(true)}
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={!agreed || submitting}
            className="w-full py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-medium hover:bg-primary/90 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed glow-gold mt-4"
          >
            {submitting ? t('mandate.submitting') : t('mandate.submit')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default MandateForm;
