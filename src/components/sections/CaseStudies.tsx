import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { TrendingUp, Clock, Users } from 'lucide-react';

const cases = [
  {
    icon: Users,
    vertical: 'Medical Vertical',
    title: 'Vilnius Dental Clinic',
    metric: '34%',
    metricLabel: 'Increase in patient registrations',
    description: 'Implemented an AI booking agent that handles inquiries 24/7, reducing front-desk overload and capturing after-hours appointments.',
    color: 'from-blue-500/20 to-accent-500/5',
    iconColor: 'text-blue-400',
  },
  {
    icon: Clock,
    vertical: 'Enterprise Vertical',
    title: 'Baltic Logistics Firm',
    metric: '80%',
    metricLabel: 'Automated support inquiries',
    description: 'Custom LLM trained on internal knowledge base, dramatically reducing response times and operational costs.',
    color: 'from-indigo-500/20 to-accent-500/5',
    iconColor: 'text-indigo-400',
  },
  {
    icon: TrendingUp,
    vertical: 'SME Vertical',
    title: 'Professional Services',
    metric: '€12k',
    metricLabel: 'Recovered monthly revenue',
    description: 'AI-driven follow-ups and automated reminders eliminated missed appointments and streamlined client onboarding.',
    color: 'from-emerald-500/20 to-accent-500/5',
    iconColor: 'text-emerald-400',
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent-400 font-medium tracking-wider uppercase text-sm mb-4 block">
            Proven Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Real Results, Delivered
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            See how SensaraAI transforms operations across different industries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((study, index) => {
            const Icon = study.icon;
            return (
              <motion.div
                key={study.vertical}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full relative overflow-hidden group bg-gradient-to-br ${study.color} border-white/5`}>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2.5 rounded-xl bg-dark-900 border border-white/10">
                        <Icon className={`w-5 h-5 ${study.iconColor}`} />
                      </div>
                      <span className="text-sm font-semibold text-white/80 uppercase tracking-wide">
                        {study.vertical}
                      </span>
                    </div>

                    <h3 className="text-5xl font-bold text-white mb-2">
                      {study.metric}
                    </h3>
                    <p className="text-accent-400 font-medium mb-6">
                      {study.metricLabel}
                    </p>

                    <h4 className="text-lg font-semibold text-white mb-2">
                      {study.title}
                    </h4>
                    <p className="text-white/60 text-sm leading-relaxed flex-grow">
                      "{study.description}"
                    </p>
                  </div>
                  
                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
