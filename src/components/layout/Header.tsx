import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../../lib/i18n/LanguageContext';
import { LanguageToggle } from '../i18n/LanguageToggle';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';

const navLinks = [
  { key: 'services' as const, to: '/services' },
  { key: 'process' as const, to: '/#process' },
  { key: 'caseStudies' as const, to: '/case-studies' },
  { key: 'about' as const, to: '/about' },
];

export function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <Logo variant="navbar" />

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.to}
                className="text-white/70 hover:text-white transition-colors"
              >
                {t.nav[link.key]}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle />
            <Button to="/contact" size="sm">
              {t.nav.bookCall}
            </Button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <LanguageToggle />
            <button
              className="p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-2 mx-4 rounded-2xl overflow-hidden"
          >
            <div className="p-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  to={link.to}
                  className="block text-white/70 hover:text-white"
                >
                  {t.nav[link.key]}
                </Link>
              ))}
              <Button to="/contact" className="w-full">
                {t.nav.bookCall}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
