import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, Loader2 } from 'lucide-react';
import { useLanguage } from '../../../lib/i18n/LanguageContext';
import { Button } from '../ui/Button';

const stepMeta = [
  {
    id: 'name',
    fields: [
      { name: 'name', type: 'text' },
      { name: 'email', type: 'email' },
    ],
  },
  { id: 'industry', field: { name: 'industry', type: 'select' as const } },
  { id: 'size', field: { name: 'companySize', type: 'select' as const } },
  { id: 'pain', field: { name: 'painPoint', type: 'select' as const } },
  { id: 'tools', field: { name: 'currentTools', type: 'text' as const, optional: true } },
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
  const { t } = useLanguage();
  const c = t.cta;
  const steps = c.steps;

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
    const meta = stepMeta[currentStep];
    if (meta.fields) {
      return meta.fields.every((f) => formData[f.name as keyof FormData].trim() !== '');
    }
    if (meta.field) {
      if (meta.field.optional) return true;
      return formData[meta.field.name as keyof FormData].trim() !== '';
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
  const step = steps[currentStep];
  const meta = stepMeta[currentStep];

  if (isComplete) {
    return (
      <section id="assessment" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-12 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{c.successTitle}</h3>
            <p className="text-white/60 mb-6">{c.successMessage}</p>
            <Button to="/" variant="secondary">
              {c.returnHome}
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="assessment" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{c.title}</h2>
          <p className="text-white/60">{c.subtitle}</p>
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
              <span>
                {c.stepOf} {currentStep + 1} {c.of} {steps.length}
              </span>
              <span>
                {Math.round(progress)}% {c.complete}
              </span>
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
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-white/60 mb-6">{step.subtitle}</p>

              {meta.fields && 'fields' in step && (
                <div className="space-y-4">
                  {step.fields.map((field, i) => (
                    <div key={meta.fields![i].name}>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        {field.label}
                      </label>
                      <input
                        type={meta.fields![i].type}
                        placeholder={field.placeholder}
                        value={formData[meta.fields![i].name as keyof FormData]}
                        onChange={(e) => handleInputChange(meta.fields![i].name, e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors"
                      />
                    </div>
                  ))}
                </div>
              )}

              {meta.field?.type === 'select' && 'options' in step && (
                <div className="grid grid-cols-2 gap-3">
                  {step.options.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleInputChange(meta.field!.name, option)}
                      className={`px-4 py-3 rounded-xl text-left transition-all ${
                        formData[meta.field!.name as keyof FormData] === option
                          ? 'bg-accent-500/20 border-accent-500 text-white'
                          : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                      } border`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}

              {meta.field?.type === 'text' && 'placeholder' in step && (
                <div>
                  <input
                    type="text"
                    placeholder={step.placeholder}
                    value={formData[meta.field!.name as keyof FormData]}
                    onChange={(e) => handleInputChange(meta.field!.name, e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors"
                  />
                  {meta.field.optional && (
                    <p className="text-xs text-white/40 mt-2">{c.optionalField}</p>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 text-white/60 hover:text-white transition-colors ${
                currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              {c.back}
            </button>

            <Button onClick={handleNext} disabled={!canProceed() || isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {c.processing}
                </>
              ) : currentStep === steps.length - 1 ? (
                <>
                  {c.submit}
                  <Check className="w-4 h-4" />
                </>
              ) : (
                <>
                  {c.continue}
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
