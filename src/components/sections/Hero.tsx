import { motion } from 'framer-motion';
import { useLanguage } from '../../../lib/i18n/LanguageContext';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';

export function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-500/5 via-transparent to-transparent" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <Logo variant="hero" linkToHome={false} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-accent-400 glass rounded-full">
            {h.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="text-white">{h.titleLine1}</span>
          <br />
          <span className="text-gradient">{h.titleLine2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          {h.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button to="/contact" size="lg">
            {h.primaryCta}
          </Button>
          <Button href="/#what-i-do" variant="secondary" size="lg">
            {h.secondaryCta}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20"
        >
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-white/40 text-sm">
            {h.trust.map((item, i) => (
              <span key={item} className="flex items-center gap-4 sm:gap-8">
                {i > 0 && <span className="hidden sm:block w-1 h-1 rounded-full bg-white/40" />}
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 rounded-full bg-white/40" />
        </motion.div>
      </div>
    </section>
  );
}
