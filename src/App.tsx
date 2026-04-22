import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { DentalPage } from './pages/DentalPage';
import { BookDemo } from './pages/BookDemo';
import { CaseStudies } from './pages/CaseStudies';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dark-900">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions/dental" element={<DentalPage />} />
          <Route path="/book-demo" element={<BookDemo />} />
          <Route path="/case-studies" element={<CaseStudies />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
