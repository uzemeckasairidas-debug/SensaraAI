import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../lib/i18n/LanguageContext';
import { Button } from '../components/ui/Button';

export function AboutPage() {
  const { t } = useLanguage();
  const a = t.about;
  const [hasPhoto, setHasPhoto] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = '/airidas.jpg';
    img.onload = () => setHasPhoto(true);
    img.onerror = () => setHasPhoto(false);
  }, []);

  const sections = [
    { title: a.backgroundTitle, body: a.background },
    { title: a.whyTitle, body: a.why },
    { title: a.howTitle, body: a.how },
  ];

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6">{a.heroTitle}</h1>
          <p className="text-lg text-ink-600 max-w-2xl mx-auto leading-relaxed">
            {a.heroSubtitle}
          </p>
        </motion.div>

        <div className="flex justify-center mb-16">
          {hasPhoto ? (
            <img
              src="/airidas.jpg"
              alt={a.photoAlt}
              className="w-48 h-48 rounded-2xl object-cover border border-black/[0.06] shadow-[0_8px_30px_rgba(24,24,27,0.08)]"
            />
          ) : (
            <div
              className="w-48 h-48 rounded-2xl bg-dark-700 border border-black/[0.06] flex items-center justify-center text-ink-400 text-sm text-center px-4"
              role="img"
              aria-label={a.photoAlt}
            >
              {a.photoPlaceholder}
            </div>
          )}
        </div>

        <div className="space-y-12 mb-16">
          {sections.map((section, index) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8"
            >
              <h2 className="text-xl font-bold text-ink-900 mb-4">{section.title}</h2>
              <p className="text-ink-600 leading-relaxed">{section.body}</p>
            </motion.section>
          ))}

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h2 className="text-xl font-bold text-ink-900 mb-4">{a.techTitle}</h2>
            <div className="flex flex-wrap gap-3">
              {a.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-accent-500/10 text-accent-600 text-sm font-medium border border-accent-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.section>
        </div>

        <div className="text-center">
          <Button to="/contact" size="lg">
            {a.cta}
          </Button>
        </div>
      </div>
    </div>
  );
}
