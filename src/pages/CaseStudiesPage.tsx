import { motion } from 'framer-motion';
import { Lock, Sparkles, Stethoscope, Wrench } from 'lucide-react';
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{c.title}</h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">{c.subtitle}</p>
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
                className="relative rounded-2xl border border-white/10 bg-dark-800/80 p-8 overflow-hidden min-h-[280px]"
              >
                <div className="blur-md select-none pointer-events-none opacity-50">
                  <Icon className="w-8 h-8 text-white/50 mb-4" />
                  <span className="text-sm font-semibold text-white/50 uppercase tracking-wide">
                    {card.vertical}
                  </span>
                  <h3 className="text-lg font-semibold text-white mt-4">{card.title}</h3>
                  <p className="text-white/40 text-sm mt-4">{c.placeholderText}</p>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center bg-dark-900/80 backdrop-blur-sm border border-white/5 rounded-2xl">
                  <Lock className="w-8 h-8 text-accent-400/80 mb-3" />
                  <span className="text-white font-medium tracking-wide">{c.comingSoon}</span>
                  <span className="text-white/40 text-sm mt-1">{card.vertical}</span>
                </div>
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
