import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, Loader2 } from 'lucide-react';
import { Button } from '../ui/Button';

const steps = [
  {
    id: 'name',
    title: 'What should we call you?',
    subtitle: 'Let us know your name',
    fields: [
      { name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Smith' },
      { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@company.com' },
    ],
  },
  {
    id: 'industry',
    title: 'What industry are you in?',
    subtitle: 'This helps us tailor our AI solutions',
    field: {
      name: 'industry',
      type: 'select',
      options: ['Medical', 'Dental', 'SaaS', 'E-commerce', 'Professional Services', 'Other'],
    },
  },
  {
    id: 'size',
    title: 'How large is your team?',
    subtitle: 'We scale solutions for any size',
    field: {
      name: 'companySize',
      type: 'select',
      options: ['1-10 employees', '11-50 employees', '51-200 employees', '200+ employees'],
    },
  },
  {
    id: 'pain',
    title: 'What is your main challenge?',
    subtitle: 'Select your primary pain point',
    field: {
      name: 'painPoint',
      type: 'select',
      options: [
        'Patient/Lead Booking',
        'Manual Data Entry',
        'Customer Support Overload',
        'No-shows & Cancellations',
        'Other',
      ],
    },
  },
  {
    id: 'tools',
    title: 'Any current tools?',
    subtitle: 'Optional - helps us understand your stack',
    field: {
      name: 'currentTools',
      type: 'text',
      placeholder: 'e.g., Salesforce, HubSpot, Calendly...',
      optional: true,
    },
  },
];

interface FormData {
  name: string;
  email: string;
  industry: string;
  companySize: string;
  painPoint: string;
  currentTools: string;
}

interface ContactProps {
  prefillIndustry?: string;
}

export function Contact({ prefillIndustry }: ContactProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    industry: prefillIndustry || '',
    companySize: '',
    painPoint: '',
    currentTools: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const canProceed = () => {
    const step = steps[currentStep];
    if (step.fields) {
      return step.fields.every(
        (f) => formData[f.name as keyof FormData].trim() !== ''
      );
    }
    if (step.field) {
      if (step.field.optional) return true;
      return formData[step.field.name as keyof FormData].trim() !== '';
    }
    return false;
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsComplete(true);
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  if (isComplete) {
    return (
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-12 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Assessment Submitted</h3>
            <p className="text-white/60 mb-6">
              We will analyze your needs and get back to you within 24 hours with a personalized AI
              strategy.
            </p>
            <Button to="/" variant="secondary">
              Return Home
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get Your Free AI Assessment
          </h2>
          <p className="text-white/60">
            Answer a few questions and we will provide a tailored AI strategy for your business.
          </p>
        </motion.div>

        <div className="glass-card p-8">
          <div className="mb-8">
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="flex justify-between mt-2 text-xs text-white/40">
              <span>Step {currentStep + 1} of {steps.length}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {steps[currentStep].title}
              </h3>
              <p className="text-white/60 mb-6">{steps[currentStep].subtitle}</p>

              {steps[currentStep].fields && (
                <div className="space-y-4">
                  {steps[currentStep].fields?.map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.name as keyof FormData]}
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors"
                      />
                    </div>
                  ))}
                </div>
              )}

              {steps[currentStep].field?.type === 'select' && (
                <div className="grid grid-cols-2 gap-3">
                  {steps[currentStep].field?.options?.map((option) => (
                    <button
                      key={option}
                      onClick={() =>
                        handleInputChange(steps[currentStep].field!.name, option)
                      }
                      className={`px-4 py-3 rounded-xl text-left transition-all ${
                        formData[steps[currentStep].field!.name as keyof FormData] === option
                          ? 'bg-accent-500/20 border-accent-500 text-white'
                          : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                      } border`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}

              {steps[currentStep].field?.type === 'text' && steps[currentStep].field && (
                <div>
                  <input
                    type="text"
                    placeholder={steps[currentStep].field.placeholder}
                    value={formData[steps[currentStep].field!.name as keyof FormData]}
                    onChange={(e) =>
                      handleInputChange(steps[currentStep].field!.name, e.target.value)
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors"
                  />
                  {steps[currentStep].field.optional && (
                    <p className="text-xs text-white/40 mt-2">Optional field</p>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between mt-8">
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 text-white/60 hover:text-white transition-colors ${
                currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>

            <Button onClick={handleNext} disabled={!canProceed() || isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Processing...
                </>
              ) : currentStep === steps.length - 1 ? (
                <>
                  Submit Assessment
                  <Check className="w-4 h-4" />
                </>
              ) : (
                <>
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
