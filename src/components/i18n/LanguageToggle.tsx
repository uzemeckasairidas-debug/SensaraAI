import { useLanguage } from '../../../lib/i18n/LanguageContext';

export function LanguageToggle({ className = '' }: { className?: string }) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className={`px-3 py-1.5 text-xs font-medium rounded-full border border-white/15 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/25 transition-colors ${className}`}
      aria-label={language === 'lt' ? 'Switch to English' : 'Perjungti į lietuvių'}
    >
      {language === 'lt' ? 'EN' : 'LT'}
    </button>
  );
}
