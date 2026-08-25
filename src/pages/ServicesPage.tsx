import { motion } from 'framer-motion';
import { Megaphone, Workflow, Handshake, type LucideIcon } from 'lucide-react';
import { useLanguage } from '../../lib/i18n/LanguageContext';
import { CTABanner } from '../components/ui/CTABanner';

const serviceIcons: LucideIcon[] = [Megaphone, Workflow, Handshake];

export function ServicesPage() {
  const { t } = useLanguage();
  const s = t.servicesPage;

  return (
    <div className="pt-32 pb-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6">{s.title}</h1>
          <p className="text-lg text-ink-600 max-w-2xl mx-auto">{s.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-4">
          {s.items.map((service, index) => {
            const Icon = serviceIcons[index];
            const accent = index === 2;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-8 flex flex-col transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(24,24,27,0.1)]"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                    accent ? 'bg-accent-500/15' : 'bg-black/5'
                  }`}
                >
                  <Icon className={`w-6 h-6 ${accent ? 'text-accent-600' : 'text-ink-800'}`} />
                </div>
                <h2 className="text-xl font-bold text-ink-900 mb-3">{service.title}</h2>
                <p className="text-ink-600 text-sm leading-relaxed mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-ink-700 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <p className="text-accent-600 text-sm italic mt-auto">{service.outcome}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <CTABanner title={s.ctaTitle} subtitle={s.ctaSubtitle} buttonLabel={s.ctaButton} />
    </div>
  );
}
