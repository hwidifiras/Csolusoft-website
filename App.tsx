
import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Page } from './types';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const ERP = lazy(() => import('./pages/ERP'));
const DevSurMesure = lazy(() => import('./pages/DevSurMesure'));
const AI = lazy(() => import('./pages/AI'));
const Services = lazy(() => import('./pages/Services'));
const ElectronicBilling = lazy(() => import('./pages/ElectronicBilling'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading spinner component
const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-slate-600 font-medium">Chargement...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main id="main-content" className="flex-grow pt-20" role="main">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path={Page.Home} element={<Home />} />
            <Route path={Page.ERP} element={<ERP />} />
            <Route path={Page.Dev} element={<DevSurMesure />} />
            <Route path={Page.AI} element={<AI />} />
            <Route path={Page.Services} element={<Services />} />
            <Route path={Page.Billing} element={<ElectronicBilling />} />
            <Route path={Page.About} element={<About />} />
            <Route path={Page.Contact} element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;
