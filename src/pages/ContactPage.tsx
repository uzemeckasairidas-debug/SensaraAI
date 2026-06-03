import { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '../../lib/i18n/LanguageContext';
import { Button } from '../components/ui/Button';

const inputClass =
  'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors';

export function ContactPage() {
  const { t } = useLanguage();
  const c = t.contactPage;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [need, setNeed] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !need) return;

    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, need, message }),
      });

      if (!res.ok) throw new Error('Failed');

      toast.success(c.success);
      setName('');
      setEmail('');
      setCompany('');
      setNeed('');
      setMessage('');
    } catch {
      toast.error(c.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{c.title}</h1>
          <p className="text-lg text-white/60 leading-relaxed">{c.subtitle}</p>
        </motion.div>

        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6 max-w-xl mx-auto">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
              {c.fullName}
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
              {c.email}
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
              {c.company}
            </label>
            <input
              id="company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="need" className="block text-sm font-medium text-white/80 mb-2">
              {c.need}
            </label>
            <select
              id="need"
              value={need}
              onChange={(e) => setNeed(e.target.value)}
              required
              className={`${inputClass} appearance-none cursor-pointer`}
            >
              <option value="" disabled className="bg-dark-900">
                {c.need}
              </option>
              {c.needs.map((option) => (
                <option key={option} value={option} className="bg-dark-900">
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
              {c.message}
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className={`${inputClass} resize-y min-h-[120px]`}
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading || !need}>
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                {c.sending}
              </>
            ) : (
              c.send
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
