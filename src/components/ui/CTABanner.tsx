import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface CTABannerProps {
  title: string;
  subtitle?: string;
  buttonLabel: string;
  className?: string;
}

export function CTABanner({ title, subtitle, buttonLabel, className = '' }: CTABannerProps) {
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{title}</h2>
          {subtitle && <p className="text-white/60 mb-8 max-w-xl mx-auto">{subtitle}</p>}
          <Button to="/contact" size="lg">
            {buttonLabel}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
