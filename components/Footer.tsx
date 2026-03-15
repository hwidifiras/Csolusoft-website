
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import { Page } from '../types';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-slate-300 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-5 space-y-6">
            <Link to={Page.Home} className="inline-flex items-center group" aria-label="CSoluSoft - Accueil">
              <img
                src="/img/solusoft-logo-footer-dark.svg"
                alt="CSoluSoft Logo"
                className="h-8 w-auto group-hover:opacity-90 transition-opacity"
              />
            </Link>

            <p className="text-sm md:text-base leading-relaxed text-slate-400 max-w-md">
              Nous concevons des solutions logicielles intelligentes pour accélérer la croissance des entreprises tunisiennes: facturation électronique, automatisation, ERP et IA.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to={Page.Contact}
                className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all"
              >
                Demander un devis
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/21658874825"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all"
              >
                WhatsApp
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-5">Solutions</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to={Page.Billing} className="text-slate-400 hover:text-accent-400 transition-colors">Facturation Électronique</Link></li>
              <li><Link to={Page.Dev} className="text-slate-400 hover:text-accent-400 transition-colors">Développement Sur Mesure</Link></li>
              <li><Link to={Page.AI} className="text-slate-400 hover:text-accent-400 transition-colors">Intelligence Artificielle</Link></li>
              <li><Link to={Page.CaseStudies} className="text-slate-400 hover:text-accent-400 transition-colors">Cas Clients</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-5">Entreprise</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to={Page.Home} className="text-slate-400 hover:text-accent-400 transition-colors">Accueil</Link></li>
              <li><Link to={Page.About} className="text-slate-400 hover:text-accent-400 transition-colors">À Propos</Link></li>
              <li><Link to={Page.Blog} className="text-slate-400 hover:text-accent-400 transition-colors">Blog & Ressources</Link></li>
              <li><Link to={Page.Contact} className="text-slate-400 hover:text-accent-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-5">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent-400 shrink-0 mt-0.5" />
                <span className="text-slate-400">Route Mahdia Km 3,<br />Imm Amal, Sfax, Tunisie</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent-400 shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+21628118244" className="text-slate-400 hover:text-accent-400 transition-colors">+216 28 118 244</a>
                  <a href="tel:+21626192219" className="text-slate-400 hover:text-accent-400 transition-colors">+216 26 192 219</a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent-400 shrink-0" />
                <a href="mailto:contact@csolusoft.com" className="text-slate-400 hover:text-accent-400 transition-colors">contact@csolusoft.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p>© {year} Cloud Solu Soft (CSoluSoft). Tous droits réservés.</p>
          <div className="flex items-center gap-5">
            <span className="cursor-default" title="Politique de confidentialité - Bientôt disponible">Confidentialité</span>
            <span className="cursor-default" title="Gestion des cookies - Bientôt disponible">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
