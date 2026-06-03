import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useLanguage } from '../../../lib/i18n/LanguageContext';
import { LanguageToggle } from '../i18n/LanguageToggle';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';

const navLinks = [
  {
    key: 'solutions' as const,
    dropdown: [
      { key: 'dentalMedical' as const, to: '/solutions/dental' },
      { key: 'customAutomation' as const, to: '/#services' },
    ],
  },
  { key: 'process' as const, to: '/#process' },
  { key: 'caseStudies' as const, to: '/case-studies' },
];

export function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
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
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.key}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.key)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 text-white/70 hover:text-white transition-colors">
                    {t.nav[link.key]}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <AnimatePresence>
                    {openDropdown === link.key && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 glass-card p-2"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.key}
                            to={item.to}
                            className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                          >
                            {t.nav[item.key]}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.key}
                  to={link.to || '#'}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t.nav[link.key]}
                </Link>
              )
            )}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle />
            <Button href="/#assessment" size="sm">
              {t.nav.bookDemo}
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
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.key}>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === link.key ? null : link.key)
                      }
                      className="flex items-center justify-between w-full text-white/70"
                    >
                      {t.nav[link.key]}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === link.key ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === link.key && (
                      <div className="mt-2 ml-4 space-y-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.key}
                            to={item.to}
                            className="block py-2 text-white/60 hover:text-white"
                          >
                            {t.nav[item.key]}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.key}
                    to={link.to || '#'}
                    className="block text-white/70 hover:text-white"
                  >
                    {t.nav[link.key]}
                  </Link>
                )
              )}
              <Button href="/#assessment" className="w-full">
                {t.nav.bookDemo}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
