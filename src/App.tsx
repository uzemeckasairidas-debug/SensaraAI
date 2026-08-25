import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import { LanguageProvider } from '../lib/i18n/LanguageContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    const scroll = () => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    requestAnimationFrame(() => requestAnimationFrame(scroll));
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToHash />
        <div className="min-h-screen bg-dark-900 relative">
          <div className="pointer-events-none fixed inset-0 z-[1] noise-overlay opacity-[0.03]" aria-hidden />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
          </Routes>
          <Footer />
        </div>
        <Toaster
          theme="light"
          position="top-center"
          toastOptions={{
            style: {
              background: '#ffffff',
              border: '1px solid rgba(24,24,27,0.08)',
              color: '#18181b',
            },
          }}
        />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
