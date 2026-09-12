import { ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { Reveal } from './Reveal';

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
        <Reveal className="glass-card p-8 md:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 mb-3">{title}</h2>
          {subtitle && <p className="text-ink-600 mb-8 max-w-xl mx-auto">{subtitle}</p>}
          <Button to="/contact" size="lg">
            {buttonLabel}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
