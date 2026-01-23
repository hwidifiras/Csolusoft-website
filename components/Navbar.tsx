
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Page } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
    {/* Skip to content link for accessibility */}
    <a 
      href="#main-content" 
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:outline-none"
    >
      Aller au contenu principal
    </a>
    <nav className="fixed top-0 left-0 w-full z-50 glass" role="navigation" aria-label="Navigation principale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to={Page.Home} className="flex items-center space-x-2 group" aria-label="CSoluSoft - Accueil">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform">
                C
              </div>
              <span className="text-2xl font-extrabold tracking-tighter text-slate-900">
                CSolu<span className="text-blue-600">Soft</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive(link.href) ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to={Page.Contact}
              className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-600 transition-all flex items-center space-x-2"
            >
              <span>Audit Gratuit</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-900 p-2 rounded-lg hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden glass border-t border-slate-200" role="menu" aria-label="Menu mobile">
          <div className="px-4 py-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-lg font-medium ${
                  isActive(link.href) ? 'text-blue-600' : 'text-slate-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to={Page.Contact}
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-blue-600 text-white py-3 rounded-xl font-bold"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;
