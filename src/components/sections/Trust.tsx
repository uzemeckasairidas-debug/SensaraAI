import { motion } from 'framer-motion';
import { Shield, Globe, Lock } from 'lucide-react';

const trustItems = [
  {
    icon: Shield,
    title: 'GDPR Compliant',
    description:
      'Full compliance with European data protection regulations. Your data is handled with the highest security standards.',
  },
  {
    icon: Globe,
    title: 'Lithuanian-Language Native AI',
    description:
      'Our AI agents are natively trained for Lithuanian language, ensuring natural conversations and cultural context.',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description:
      'Bank-grade encryption, secure data centers, and strict access controls protect your sensitive information.',
  },
];

export function Trust() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Compliance & Security
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Built for regulated industries. Your data security and compliance are our top priority.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent-500/10 flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-accent-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-white/60 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 glass-card p-8 text-center"
        >
          <p className="text-white/80 text-lg mb-4">
            Trusted by healthcare providers and enterprises across the Baltics
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-white/40 text-sm">
            <span>50+ Clinics</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span>100K+ Appointments Automated</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span>99.9% Uptime</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
