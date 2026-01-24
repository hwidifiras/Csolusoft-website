
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
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-500 focus:text-white focus:rounded-lg focus:outline-none"
    >
      Aller au contenu principal
    </a>
    <nav className="fixed top-0 left-0 w-full z-50 glass" role="navigation" aria-label="Navigation principale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to={Page.Home} className="flex items-center group" aria-label="CSoluSoft - Accueil">
              <img 
                src="/img/solusoft-logo-navbar-light.svg" 
                alt="CSoluSoft Logo" 
                className="h-12 w-auto group-hover:scale-105 transition-transform"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              link.href === Page.Billing ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="relative px-4 py-2 bg-accent-500 text-white text-sm font-bold rounded-full hover:bg-accent-600 hover:shadow-lg transition-all flex items-center space-x-1"
                >
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></span>
                  <span>{link.label}</span>
                </Link>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative text-sm font-medium transition-colors hover:text-primary-500 ${
                    isActive(link.href) ? 'text-primary-500' : 'text-slate-600'
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500 rounded-full"></span>
                  )}
                </Link>
              )
            ))}
            <Link
              to={Page.Contact}
              className="bg-primary-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-600 transition-all flex items-center space-x-2"
            >
              <span>Devis Gratuit</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-900 p-2 rounded-lg hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
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
      <div 
        id="mobile-menu" 
        className={`md:hidden glass border-t border-slate-200 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        role="menu" 
        aria-label="Menu mobile"
      >
          <div className="px-4 py-6 space-y-4">
            {NAV_LINKS.map((link) => (
              link.href === Page.Billing ? (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-accent-500 text-white py-3 rounded-xl font-bold"
                >
                  {link.label} - NOUVEAU
                </Link>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-medium ${
                    isActive(link.href) ? 'text-primary-500' : 'text-slate-700'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
            <Link
              to={Page.Contact}
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-primary-500 text-white py-3 rounded-xl font-bold"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
    </nav>
    </>
  );
};

export default Navbar;
