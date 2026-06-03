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
import { DentalPage } from './pages/DentalPage';

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
        <div className="min-h-screen bg-dark-900">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/solutions/dental" element={<DentalPage />} />
            <Route path="/book-demo" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
        <Toaster
          theme="dark"
          position="top-center"
          toastOptions={{
            style: {
              background: '#0f0f18',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff',
            },
          }}
        />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
