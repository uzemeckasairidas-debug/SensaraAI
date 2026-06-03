import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { TrendingUp, Clock, Users } from 'lucide-react';
import { useLanguage } from '../../../lib/i18n/LanguageContext';

const caseIcons = [Users, Clock, TrendingUp];

export function CaseStudies() {
  const { t } = useLanguage();
  const c = t.results;

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

        <div className="grid md:grid-cols-3 gap-8">
          {c.cards.map((study, index) => {
            const Icon = caseIcons[index];
            const colors = [
              'from-blue-500/20 to-accent-500/5',
              'from-indigo-500/20 to-accent-500/5',
              'from-emerald-500/20 to-accent-500/5',
            ];
            const iconColors = ['text-blue-400', 'text-indigo-400', 'text-emerald-400'];
            return (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={`h-full relative overflow-hidden group bg-gradient-to-br ${colors[index]} border-white/5`}
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2.5 rounded-xl bg-dark-900 border border-white/10">
                        <Icon className={`w-5 h-5 ${iconColors[index]}`} />
                      </div>
                      <span className="text-sm font-semibold text-white/80 uppercase tracking-wide">
                        {study.vertical}
                      </span>
                    </div>

                    <h3 className="text-5xl font-bold text-white mb-2">{study.metric}</h3>
                    <p className="text-accent-400 font-medium mb-6">{study.metricLabel}</p>

                    <h4 className="text-lg font-semibold text-white mb-2">{study.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed flex-grow">
                      &ldquo;{study.description}&rdquo;
                    </p>
                  </div>

                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
