import { useLanguage } from '../../../lib/i18n/LanguageContext';

export function LanguageToggle({ className = '' }: { className?: string }) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className={`px-3 py-1.5 text-xs font-medium rounded-full border border-black/10 bg-black/[0.03] text-ink-600 hover:text-ink-900 hover:bg-black/[0.06] hover:border-black/20 transition-colors ${className}`}
      aria-label={language === 'lt' ? 'Switch to English' : 'Perjungti į lietuvių'}
    >
      {language === 'lt' ? 'EN' : 'LT'}
    </button>
  );
}
