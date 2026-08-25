import { motion } from 'framer-motion';
import { Clock, Sparkles, Stethoscope, Wrench } from 'lucide-react';
import { useLanguage } from '../../lib/i18n/LanguageContext';
import { CTABanner } from '../components/ui/CTABanner';

const verticalIcons = [Sparkles, Stethoscope, Wrench];

export function CaseStudiesPage() {
  const { t } = useLanguage();
  const c = t.caseStudiesPage;

  return (
    <div className="pt-32 pb-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6">{c.title}</h1>
          <p className="text-lg text-ink-600 max-w-2xl mx-auto">{c.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {c.cards.map((card, index) => {
            const Icon = verticalIcons[index];
            return (
              <motion.div
                key={card.vertical}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-dashed border-black/15 bg-black/[0.015] p-8 min-h-[260px] flex flex-col items-center justify-center text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-ink-500" />
                </div>
                <span className="text-sm font-semibold text-ink-700 uppercase tracking-wide mb-2">
                  {card.vertical}
                </span>
                <h3 className="text-ink-900 font-medium mb-2">{card.title}</h3>
                <p className="text-ink-400 text-sm mb-4">{c.placeholderText}</p>
                <span className="inline-flex items-center gap-1.5 text-accent-600 text-xs font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  {c.comingSoon}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      <CTABanner
        title={t.servicesPage.ctaTitle}
        subtitle={t.servicesPage.ctaSubtitle}
        buttonLabel={t.servicesPage.ctaButton}
      />
    </div>
  );
}
