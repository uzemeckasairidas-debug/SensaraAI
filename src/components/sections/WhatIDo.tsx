import { motion } from 'framer-motion';
import { CheckCircle2, Search } from 'lucide-react';
import { useLanguage } from '../../../lib/i18n/LanguageContext';
import { Card } from '../ui/Card';

export function WhatIDo() {
  const { t } = useLanguage();
  const d = t.whatIDo;

  return (
    <section id="what-i-do" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent-600 font-medium tracking-wider uppercase text-sm mb-4 block">
            {d.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-4">{d.title}</h2>
          <p className="text-ink-600 max-w-2xl mx-auto">{d.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/[0.06] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-accent-500/10 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-7 h-7 text-accent-600" />
              </div>
              <h3 className="text-2xl font-bold text-ink-900 mb-6">{d.forWhoTitle}</h3>
              <ul className="space-y-4">
                {d.forWhoItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink-700 leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/[0.04] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center mb-6">
                <Search className="w-7 h-7 text-ink-800" />
              </div>
              <h3 className="text-2xl font-bold text-ink-900 mb-3">{d.howTitle}</h3>
              <p className="text-ink-600 leading-relaxed">{d.howText}</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
