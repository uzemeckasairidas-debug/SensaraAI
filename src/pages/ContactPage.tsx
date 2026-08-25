import { useLanguage } from '../../lib/i18n/LanguageContext';
import { Contact } from '../components/sections/Contact';

export function ContactPage() {
  const { language } = useLanguage();

  return (
    <div className="pt-32 pb-4">
      <Contact key={language} />
    </div>
  );
}
