import { motion } from 'framer-motion';
import { Lock, Sparkles, Stethoscope, Wrench } from 'lucide-react';
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
          <span className="text-accent-400 font-medium tracking-wider uppercase text-sm mb-4 block">
            {c.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{c.title}</h2>
          <p className="text-white/60 max-w-2xl mx-auto">{c.subtitle}</p>
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
                className="relative rounded-2xl border border-white/10 bg-dark-800/80 p-8 overflow-hidden min-h-[220px] flex items-center justify-center"
              >
                <div className="blur-sm select-none pointer-events-none opacity-40 text-center">
                  <Icon className="w-8 h-8 text-white/50 mx-auto mb-4" />
                  <span className="text-sm font-semibold text-white/50 uppercase tracking-wide">
                    {vertical}
                  </span>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center bg-dark-900/70 backdrop-blur-sm">
                  <Lock className="w-6 h-6 text-accent-400/80 mb-3" />
                  <span className="text-white font-medium tracking-wide text-sm">{c.comingSoon}</span>
                  <span className="text-white/40 text-xs mt-1">{vertical}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
