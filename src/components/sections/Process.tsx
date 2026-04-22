import { motion } from 'framer-motion';
import { Search, Settings, Cpu, LineChart } from 'lucide-react';
import { Card } from '../ui/Card';

const steps = [
  {
    icon: Search,
    title: 'Analysis (Audit)',
    description:
      'Identifying bottlenecks in registrations, manual data entry, and uncovering opportunities for intelligent automation.',
  },
  {
    icon: Settings,
    title: 'Customization (Training)',
    description:
      'Training custom AI models on your business data (fully localized for the Lithuanian context and market specifics).',
  },
  {
    icon: Cpu,
    title: 'Integration (API/Web)',
    description:
      'Deploying intelligent agents directly into your CRM, existing website, and operational workflows with zero downtime.',
  },
  {
    icon: LineChart,
    title: 'Scaling (24/7 Support)',
    description:
      '24/7 continuous optimization, performance monitoring, and real-time reporting to ensure maximum ROI.',
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent-400 font-medium tracking-wider uppercase text-sm mb-4 block">
            Our Approach
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Four-Step Transformation
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A proven methodology to integrate AI seamlessly into your enterprise, 
            driving efficiency from day one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Mobile connecting line */}
          <div className="absolute left-[39px] top-10 bottom-10 w-0.5 bg-white/10 md:hidden" />
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-24 md:pl-0 md:text-center"
              >
                <div className="absolute left-0 top-0 md:relative md:mx-auto w-20 h-20 rounded-2xl bg-dark-800 border border-white/10 flex items-center justify-center mb-6 z-10 shadow-[0_0_30px_rgba(0,102,255,0.15)] glow-accent group">
                  <Icon className="w-8 h-8 text-accent-400 group-hover:text-white transition-colors" />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#0066FF] text-white font-bold flex items-center justify-center text-sm border-4 border-dark-900 shadow-lg shadow-[#0066FF]/40">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
