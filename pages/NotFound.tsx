
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Page } from '../types';
import SEO from '../components/SEO';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-900 flex items-center justify-center px-4 transition-colors">
      <SEO 
        title="Page Non Trouvée"
        description="La page que vous recherchez n'existe pas ou a été déplacée."
        url="/404"
      />
      <div className="max-w-2xl w-full text-center">
        {/* 404 Illustration */}
        <div className="relative mb-12">
          <div className="text-[200px] md:text-[280px] font-black text-slate-100 dark:text-dark-800 select-none leading-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-primary-500 rounded-[2rem] flex items-center justify-center shadow-2xl shadow-primary-500/30 animate-bounce">
              <Search className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>

        {/* Content */}
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
          Page introuvable
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-md mx-auto leading-relaxed">
          Oups ! La page que vous recherchez semble avoir disparu dans le cloud. 
          Pas de panique, nous pouvons vous ramener en lieu sûr.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={Page.Home}
            className="w-full sm:w-auto px-8 py-4 bg-accent-500 text-white rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-accent-600 transition-all shadow-lg shadow-accent-200 dark:shadow-accent-500/20">
            <Home className="w-5 h-5" />
            <span>Retour à l'accueil</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-dark-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-600 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-slate-50 dark:hover:bg-dark-600 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Page précédente</span>
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Ou consultez nos pages populaires :</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to={Page.Billing} className="text-sm text-primary-500 dark:text-accent-400 hover:underline font-medium">
              Facturation Électronique
            </Link>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <Link to={Page.ERP} className="text-sm text-primary-500 dark:text-accent-400 hover:underline font-medium">
              Solutions ERP
            </Link>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <Link to={Page.Contact} className="text-sm text-primary-500 dark:text-accent-400 hover:underline font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
