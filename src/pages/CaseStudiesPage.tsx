import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import { useLanguage } from '../../lib/i18n/LanguageContext';

export function CaseStudiesPage() {
  const { t } = useLanguage();
  const c = t.caseStudiesPage;

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
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
          {c.cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-dark-800/80 p-8 overflow-hidden min-h-[300px]"
            >
              <div className="blur-md select-none pointer-events-none opacity-50">
                <span className="text-sm font-semibold text-white/50 uppercase tracking-wide">
                  {card.vertical}
                </span>
                <h2 className="text-5xl font-bold text-white mt-4 mb-2">{card.metric}</h2>
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="text-white/40 text-sm mt-4">{c.placeholderText}</p>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center bg-dark-900/80 backdrop-blur-sm border border-white/5 rounded-2xl">
                <Lock className="w-8 h-8 text-accent-400/80 mb-3" />
                <span className="text-white font-medium tracking-wide">{c.comingSoon}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
