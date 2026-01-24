
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { Page } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center">
              <img 
                src="/img/solusoft-logo-footer-dark.svg" 
                alt="CSoluSoft Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Experts en transformation digitale, nous concevons des outils de gestion intelligents pour propulser votre croissance.
            </p>
            <div className="flex space-x-4">
              <span className="text-slate-500 hover:text-slate-400 transition-colors cursor-not-allowed" title="Bientôt disponible"><Linkedin className="w-5 h-5" aria-hidden="true" /></span>
              <span className="text-slate-500 hover:text-slate-400 transition-colors cursor-not-allowed" title="Bientôt disponible"><Twitter className="w-5 h-5" aria-hidden="true" /></span>
              <span className="text-slate-500 hover:text-slate-400 transition-colors cursor-not-allowed" title="Bientôt disponible"><Github className="w-5 h-5" aria-hidden="true" /></span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Solutions</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to={Page.Billing} className="hover:text-accent-500">Facturation Électronique</Link></li>
              <li><Link to={Page.ERP} className="hover:text-accent-500">ERP sur mesure</Link></li>
              <li><Link to={Page.AI} className="hover:text-accent-500">Intelligence Artificielle</Link></li>
              <li><Link to={Page.Dev} className="hover:text-accent-500">Développement Web/Mobile</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Liens Utiles</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to={Page.About} className="hover:text-accent-500">À Propos</Link></li>
              <li><Link to={Page.Contact} className="hover:text-accent-500">Nous Contacter</Link></li>
              <li><Link to={Page.Contact} className="hover:text-accent-500">Support Client</Link></li>
              <li><Link to={Page.Blog} className="hover:text-accent-500">Blog & Ressources</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent-500 shrink-0" />
                <span>Route Mahdia Km 3,<br />Imm Amal, Sfax, Tunisie</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent-500 shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+21628118244" className="hover:text-accent-500">+216 28 118 244</a>
                  <a href="tel:+21626192219" className="hover:text-accent-500">+216 26 192 219</a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-accent-500 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <a href="https://wa.me/21658874825" target="_blank" rel="noopener noreferrer" className="hover:text-accent-500">+216 58 874 825</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent-500 shrink-0" />
                <a href="mailto:contact@csolusoft.com" className="hover:text-accent-500">contact@csolusoft.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2026 Cloud Solu Soft (CSoluSoft). Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="cursor-default" title="Politique de confidentialité - Bientôt disponible">Confidentialité</span>
            <span className="cursor-default" title="Gestion des cookies - Bientôt disponible">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
