import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

interface FormData {
  businessName: string;
  industry: string;
  bottleneck: string;
  volume: string;
  name: string;
  email: string;
  phone: string;
}

export function BookDemo() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    businessName: '',
    industry: '',
    bottleneck: '',
    volume: '',
    name: '',
    email: '',
    phone: '',
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep((prev) => prev + 1);
    } else {
      setIsSubmitted(true);
      // Here you would normally submit formData to an API
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.businessName.trim() !== '' && formData.industry.trim() !== '';
      case 2:
        return formData.bottleneck.trim() !== '';
      case 3:
        return formData.volume.trim() !== '';
      case 4:
        return (
          formData.name.trim() !== '' &&
          formData.email.trim() !== '' &&
          formData.phone.trim() !== ''
        );
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Book Your Free Demo
          </h1>
          <p className="text-lg text-white/60">
            Let's find out how SensaraAI can automate your growth.
          </p>
        </div>

        <div className="glass-card p-6 md:p-10 relative overflow-hidden">
          {/* Progress Bar */}
          {!isSubmitted && (
            <div className="absolute top-0 left-0 right-0 h-1bg-white/10">
              <div className="h-1 bg-white/10 w-full absolute top-0 left-0" />
              <motion.div
                className="h-1 absolute top-0 left-0 bg-[#0066FF]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8 mt-4"
              >
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-white">
                      What is your business name and industry?
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-white/70 mb-2">
                          Business Name
                        </label>
                        <input
                          type="text"
                          value={formData.businessName}
                          onChange={(e) => updateField('businessName', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#0066FF] transition-all"
                          placeholder="Acme Corp"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/70 mb-2">
                          Industry
                        </label>
                        <input
                          type="text"
                          value={formData.industry}
                          onChange={(e) => updateField('industry', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#0066FF] transition-all"
                          placeholder="e.g. Healthcare, Retail, Technology"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-white">
                      What is your biggest bottleneck?
                    </h2>
                    <p className="text-white/60 text-sm">
                      (e.g., missed calls, manual data entry, low lead conversion)
                    </p>
                    <textarea
                      value={formData.bottleneck}
                      onChange={(e) => updateField('bottleneck', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#0066FF] transition-all"
                      placeholder="Tell us about the challenges you're facing..."
                    />
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-white">
                      Estimated monthly appointment volume?
                    </h2>
                    <div className="space-y-3">
                      {['0-50', '51-200', '201-500', '500+'].map((vol) => (
                        <button
                          key={vol}
                          onClick={() => updateField('volume', vol)}
                          className={`w-full text-left px-4 py-4 rounded-xl border transition-all ${
                            formData.volume === vol
                              ? 'bg-[#0066FF]/20 border-[#0066FF] text-white'
                              : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          {vol} appointments
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-white">
                      How can we reach you?
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-white/70 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => updateField('name', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#0066FF] transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/70 mb-2">
                          Work Email
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateField('email', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#0066FF] transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/70 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => updateField('phone', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#0066FF] transition-all"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-8 mt-8 border-t border-white/10">
                  <button
                    onClick={handleBack}
                    disabled={step === 1}
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
                      step === 1
                        ? 'text-white/20 cursor-not-allowed'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                  
                  <button
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
                      !isStepValid()
                        ? 'bg-white/10 text-white/40 cursor-not-allowed'
                        : 'bg-[#0066FF] text-white hover:bg-[#0055DD] shadow-lg shadow-[#0066FF]/25'
                    }`}
                  >
                    {step === totalSteps ? 'Submit Request' : 'Continue'}
                    {step < totalSteps && <ChevronRight className="w-4 h-4" />}
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-[#0066FF]/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[#0066FF]" />
                </div>
                <h2 className="text-3xl font-bold text-white">Request Received!</h2>
                <p className="text-white/60 max-w-md mx-auto">
                  Thank you, {formData.name}. We've received your request and our team will be in touch shortly to schedule your demo.
                </p>
                <div className="pt-8">
                  <button
                    onClick={() => window.location.href = '/'}
                    className="px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all text-sm font-medium"
                  >
                    Return to Homepage
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
