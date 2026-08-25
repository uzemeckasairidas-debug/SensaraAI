import { motion } from 'framer-motion';
import { MessageCircle, ClipboardCheck, MapPin } from 'lucide-react';
import { useLanguage } from '../../../lib/i18n/LanguageContext';

const trustIcons = [MessageCircle, ClipboardCheck, MapPin];

export function Trust() {
  const { t } = useLanguage();
  const tr = t.trust;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-800/60">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-4">{tr.title}</h2>
          <p className="text-ink-600 max-w-2xl mx-auto">{tr.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {tr.items.map((item, index) => {
            const Icon = trustIcons[index];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent-500/10 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-accent-600" />
                </div>
                <h3 className="text-xl font-semibold text-ink-900 mb-3">{item.title}</h3>
                <p className="text-ink-600 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 glass-card p-8 text-center"
        >
          <p className="text-ink-800">{tr.banner}</p>
        </motion.div>
      </div>
    </section>
  );
}
