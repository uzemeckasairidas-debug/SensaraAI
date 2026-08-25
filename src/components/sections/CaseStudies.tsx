import { motion } from 'framer-motion';
import { Clock, Sparkles, Stethoscope, Wrench } from 'lucide-react';
import { useLanguage } from '../../../lib/i18n/LanguageContext';

const verticalIcons = [Sparkles, Stethoscope, Wrench];

export function CaseStudies() {
  const { t } = useLanguage();
  const c = t.proof;

  return (
    <section id="case-studies" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent-600 font-medium tracking-wider uppercase text-sm mb-4 block">
            {c.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-4">{c.title}</h2>
          <p className="text-ink-600 max-w-2xl mx-auto">{c.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {c.verticals.map((vertical, index) => {
            const Icon = verticalIcons[index];
            return (
              <motion.div
                key={vertical}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-dashed border-black/15 bg-black/[0.015] p-8 min-h-[220px] flex flex-col items-center justify-center text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-ink-500" />
                </div>
                <span className="text-sm font-semibold text-ink-700 uppercase tracking-wide mb-2">
                  {vertical}
                </span>
                <span className="inline-flex items-center gap-1.5 text-ink-400 text-xs">
                  <Clock className="w-3.5 h-3.5" />
                  {c.comingSoon}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
