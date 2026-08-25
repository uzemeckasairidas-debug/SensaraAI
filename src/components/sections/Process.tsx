import { motion } from 'framer-motion';
import { Search, Settings, Cpu, LineChart } from 'lucide-react';
import { useLanguage } from '../../../lib/i18n/LanguageContext';

const stepIcons = [Search, Settings, Cpu, LineChart];

export function Process() {
  const { t } = useLanguage();
  const p = t.process;

  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-500/[0.05] rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent-600 font-medium tracking-wider uppercase text-sm mb-4 block">
            {p.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-4">{p.title}</h2>
          <p className="text-ink-600 max-w-2xl mx-auto">{p.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="absolute left-[39px] top-10 bottom-10 w-0.5 bg-black/10 md:hidden" />
          <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-black/10 to-transparent" />

          {p.steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-24 md:pl-0 md:text-center"
              >
                <div className="absolute left-0 top-0 md:relative md:mx-auto w-20 h-20 rounded-2xl bg-white border border-black/[0.06] flex items-center justify-center mb-6 z-10 shadow-[0_8px_24px_rgba(24,24,27,0.06)] glow-accent group">
                  <Icon className="w-8 h-8 text-accent-600 group-hover:text-accent-500 transition-colors" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#0066FF] text-white font-bold flex items-center justify-center text-sm border-4 border-dark-900 shadow-lg shadow-[#0066FF]/30">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-ink-900 mb-3">{step.title}</h3>
                <p className="text-ink-600 leading-relaxed text-sm">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
