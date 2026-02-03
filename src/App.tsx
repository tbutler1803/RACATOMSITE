import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense, useState } from 'react';
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Events = lazy(() => import('./pages/Events'));
import PageLoader from './components/PageLoader';

function AppContent() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    
    // Shorter delay on mobile for better perceived performance
    const isMobile = window.innerWidth <= 768;
    const delay = isMobile ? 800 : 2000;
    const timer = setTimeout(() => setIsLoading(false), delay);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="page-textured-bg min-h-screen">
      <PageLoader isLoading={isLoading} />
      <Suspense fallback={<div />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;
