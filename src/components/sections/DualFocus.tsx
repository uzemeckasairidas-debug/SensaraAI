import { motion } from 'framer-motion';
import { Stethoscope, Settings } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export function DualFocus() {
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Two Paths to AI Transformation
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Whether you need industry-specific precision or custom enterprise automation,
            we have the solution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent-500/20 transition-colors" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-accent-500/20 flex items-center justify-center mb-6">
                <Stethoscope className="w-7 h-7 text-accent-400" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">Industry Specific</h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                High-precision AI agents built for Medical and Dental clinics. Automate patient
                booking, reduce no-shows, and provide 24/7 coverage with native-language support.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  '24/7 AI-powered booking agents',
                  'Native Lithuanian language support',
                  'HIPAA & GDPR compliant',
                  '42% average no-show reduction',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button to="/solutions/dental" variant="secondary">
                Explore Dental Solutions
              </Button>
            </div>
          </Card>

          <Card className="relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <Settings className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">Custom Automation</h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                Enterprise-grade workflow AI tailored to your unique business processes.
                From lead routing to complex multi-system integrations.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Custom AI agent development',
                  'CRM & tool integrations',
                  'Workflow automation pipelines',
                  'Scalable infrastructure',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button to="/#assessment" variant="secondary">
                Request Custom Solution
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
