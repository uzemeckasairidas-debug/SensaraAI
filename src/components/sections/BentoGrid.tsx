import { motion } from 'framer-motion';
import { Phone, Workflow, Brain } from 'lucide-react';

const services = [
  {
    icon: Phone,
    title: 'Agentic Booking',
    description:
      '24/7 AI voice and chat agents that handle patient registrations, appointment scheduling, and follow-ups. Never miss a booking opportunity.',
    features: ['Voice & Chat AI', 'Multi-language', 'Calendar Sync'],
    accent: true,
  },
  {
    icon: Workflow,
    title: 'Workflow Autopilot',
    description:
      'Eliminate manual data entry between your CRM, email marketing, and internal tools. Seamless automation that scales with your business.',
    features: ['CRM Integration', 'Email Automation', 'Data Sync'],
    accent: false,
  },
  {
    icon: Brain,
    title: 'Answer Engines',
    description:
      'Custom-trained AI knowledge bases for internal teams or customer-facing support. Instant answers from your documentation.',
    features: ['Custom Training', 'Internal/External', 'Real-time Updates'],
    accent: false,
  },
];

export function BentoGrid() {
  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Core AI Services
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Purpose-built AI solutions designed to eliminate bottlenecks and accelerate growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`glass-card p-8 relative overflow-hidden group ${
                service.accent ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {service.accent && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent-500/20 transition-colors" />
              )}

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                    service.accent ? 'bg-accent-500/20' : 'bg-white/10'
                  }`}
                >
                  <service.icon
                    className={`w-7 h-7 ${service.accent ? 'text-accent-400' : 'text-white'}`}
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/60 mb-6 leading-relaxed">{service.description}</p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        service.accent
                          ? 'bg-accent-500/20 text-accent-400'
                          : 'bg-white/10 text-white/70'
                      }`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
