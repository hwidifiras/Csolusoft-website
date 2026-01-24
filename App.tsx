
import React, { useEffect, Suspense, lazy, useState } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { BookOpen, X } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import { Page } from './types';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const ERP = lazy(() => import('./pages/ERP'));
const DevSurMesure = lazy(() => import('./pages/DevSurMesure'));
const AI = lazy(() => import('./pages/AI'));
const Services = lazy(() => import('./pages/Services'));
const ElectronicBilling = lazy(() => import('./pages/ElectronicBilling'));
const BillingGuide = lazy(() => import('./pages/BillingGuide'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading spinner component
const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-dark-900">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-primary-100 border-t-primary-500 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-slate-600 dark:text-slate-400 font-medium">Chargement...</p>
    </div>
  </div>
);

const AppContent: React.FC = () => {
  const { pathname } = useLocation();
  const [showBlogTooltip, setShowBlogTooltip] = useState(false);

  // Hide blog button on blog pages
  const isBlogPage = pathname.startsWith('/blog');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-dark-900 transition-colors">
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
            <Route path={Page.BillingGuide} element={<BillingGuide />} />
            <Route path={Page.Blog} element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path={Page.About} element={<About />} />
            <Route path={Page.Contact} element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />

      {/* Floating Blog Button */}
      {!isBlogPage && (
        <div className="fixed bottom-6 left-6 z-50">
          <div 
            className="relative"
            onMouseEnter={() => setShowBlogTooltip(true)}
            onMouseLeave={() => setShowBlogTooltip(false)}
          >
            {/* Tooltip */}
            {showBlogTooltip && (
              <div className="absolute bottom-full left-0 mb-3 whitespace-nowrap">
                <div className="bg-dark-900 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-lg">
                  📚 Découvrez notre blog
                  <div className="absolute top-full left-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-dark-900"></div>
                </div>
              </div>
            )}
            
            {/* Button */}
            <Link
              to={Page.Blog}
              className="flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              <BookOpen className="w-5 h-5" />
              <span className="font-semibold">Blog</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
