import { motion } from 'framer-motion';
import {
  Calendar,
  LayoutDashboard,
  Globe,
  MessageSquare,
  Workflow,
  Shield,
  type LucideIcon,
} from 'lucide-react';
import { useLanguage } from '../../lib/i18n/LanguageContext';
import { Button } from '../components/ui/Button';

const serviceIcons: LucideIcon[] = [
  Calendar,
  LayoutDashboard,
  Globe,
  MessageSquare,
  Workflow,
  Shield,
];

export function ServicesPage() {
  const { t } = useLanguage();
  const s = t.servicesPage;

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{s.title}</h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">{s.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {s.items.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-8 flex flex-col border border-white/10"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-accent-400" />
                </div>
                <h2 className="text-lg font-bold text-white mb-3">{service.title}</h2>
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <p className="text-accent-400 text-sm italic">{service.outcome}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-2">{s.ctaTitle}</h2>
          <p className="text-white/60 mb-8">{s.ctaSubtitle}</p>
          <Button href="/#assessment" size="lg">
            {s.ctaButton}
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
