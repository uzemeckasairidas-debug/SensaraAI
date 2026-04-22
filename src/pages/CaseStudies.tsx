import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const caseStudies = [
  {
    id: 'case-1',
    client: 'Vilnius Dental Clinic',
    metric: '40%',
    metricLabel: 'Reduction in no-shows',
    solution: 'AI Voice Agents',
    description:
      'Implemented an intelligent voice assistant capable of handling inbound calls, rescheduling appointments natively in Lithuanian, and sending proactive SMS reminders. This fundamentally reduced empty calendar slots.',
    tags: ['Healthcare', 'Voice AI', 'Scheduling'],
  },
  {
    id: 'case-2',
    client: 'Baltic Logistics Hub',
    metric: '2,000+',
    metricLabel: 'Monthly emails automated',
    solution: 'NLP Email Parser & Responder',
    description:
      'Deployed an AI system to parse complex logistics inquiries, instantly providing tracking updates and quoting estimates to clients 24/7 without human intervention.',
    tags: ['Logistics', 'NLP', 'Customer Support'],
  },
  {
    id: 'case-3',
    client: 'Private Health Center',
    metric: '25%',
    metricLabel: 'Increase in total bookings',
    solution: '24/7 Registration Bot',
    description:
      'Replaced standard static lead forms with an interactive, omnichannel registration bot that handles patient intake and routes complex medical cases to specialists immediately.',
    tags: ['Healthcare', 'Chat Automation', 'Lead Routing'],
  },
];

export function CaseStudies() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#0066FF] font-medium tracking-wider uppercase text-sm mb-4 block">
            Success Stories
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            Transforming Operations with AI
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            See how high-growth enterprises are leveraging SensaraAI to automate
            workflows, enhance patient acquisition, and drive measurable ROI.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card flex flex-col p-8 group hover:border-[#0066FF]/30 transition-colors relative overflow-hidden"
            >
              {/* Electric blue glow on hover */}
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-[#0066FF]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">
                  {study.client}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6 flex-grow">
                <p className="text-white/60 text-sm leading-relaxed">
                  {study.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-auto">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#0066FF]">
                    {study.metric}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
                  <span className="text-sm font-medium text-white/80">
                    {study.metricLabel}
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <div className="flex items-center gap-2 text-sm text-[#0066FF] font-medium group-hover:text-white transition-colors cursor-pointer w-fit">
                  <span>Read Full Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
