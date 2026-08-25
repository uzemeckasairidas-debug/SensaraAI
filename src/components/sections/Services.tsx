import { motion } from 'framer-motion';
import { Megaphone, Workflow, Handshake } from 'lucide-react';
import { useLanguage } from '../../../lib/i18n/LanguageContext';

const serviceIcons = [Megaphone, Workflow, Handshake];

export function Services() {
  const { t } = useLanguage();
  const b = t.services;

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent-600 font-medium tracking-wider uppercase text-sm mb-4 block">
            {b.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-4">{b.title}</h2>
          <p className="text-ink-600 max-w-2xl mx-auto">{b.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {b.items.map((service, index) => {
            const Icon = serviceIcons[index];
            const accent = index === 2;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card p-8 relative overflow-hidden group flex flex-col transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(24,24,27,0.1)]"
              >
                <div
                  className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-colors ${
                    accent
                      ? 'bg-accent-500/10 group-hover:bg-accent-500/[0.18]'
                      : 'bg-accent-500/[0.04] group-hover:bg-accent-500/[0.08]'
                  }`}
                />

                <div className="relative z-10 flex flex-col flex-grow">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                      accent ? 'bg-accent-500/15' : 'bg-black/5'
                    }`}
                  >
                    <Icon className={`w-7 h-7 ${accent ? 'text-accent-600' : 'text-ink-800'}`} />
                  </div>

                  <h3 className="text-xl font-bold text-ink-900 mb-3">{service.title}</h3>
                  <p className="text-ink-600 mb-6 leading-relaxed flex-grow">{service.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          accent ? 'bg-accent-500/15 text-accent-600' : 'bg-black/5 text-ink-700'
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <p className="text-accent-600 text-sm italic mt-auto">{service.outcome}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
