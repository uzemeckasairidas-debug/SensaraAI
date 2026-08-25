import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../../../lib/i18n/LanguageContext';
import { LanguageToggle } from '../i18n/LanguageToggle';
import { Logo } from '../ui/Logo';

export function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  const footerLinks = [
    { label: f.services, to: '/services' },
    { label: f.process, to: '/#process' },
    { label: f.about, to: '/about' },
    { label: f.caseStudies, to: '/case-studies' },
    { label: f.contact, to: '/contact' },
  ];

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="mb-4">
              <Logo size="sm" />
            </div>
            <p className="text-ink-600 max-w-sm leading-relaxed">{f.tagline}</p>
          </div>

          <div>
            <h4 className="text-ink-900 font-semibold mb-4">{f.links}</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-ink-600 hover:text-ink-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-ink-900 font-semibold mb-4">{f.contact}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${f.email}`}
                  className="flex items-center gap-2 text-ink-600 hover:text-ink-900 transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  {f.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${f.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 text-ink-600 hover:text-ink-900 transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  {f.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-ink-600">
                <MapPin className="w-4 h-4 shrink-0" />
                {f.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-black/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-ink-400 text-sm">
            &copy; {new Date().getFullYear()} {f.copyright}
          </p>
          <div className="flex items-center gap-6">
            <LanguageToggle />
            <div className="flex gap-6 text-ink-400 text-sm">
              <Link to="#" className="hover:text-ink-900 transition-colors">
                {f.privacy}
              </Link>
              <Link to="#" className="hover:text-ink-900 transition-colors">
                {f.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
