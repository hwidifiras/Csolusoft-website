
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { Page } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                C
              </div>
              <span className="text-xl font-extrabold tracking-tighter text-white">
                CSolu<span className="text-blue-400">Soft</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Experts en transformation digitale, nous concevons des outils de gestion intelligents pour propulser votre croissance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Suivez-nous sur LinkedIn"><Linkedin className="w-5 h-5" aria-hidden="true" /></a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Suivez-nous sur Twitter"><Twitter className="w-5 h-5" aria-hidden="true" /></a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Voir notre GitHub"><Github className="w-5 h-5" aria-hidden="true" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Solutions</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to={Page.Billing} className="hover:text-blue-400">Facturation Électronique</Link></li>
              <li><Link to={Page.ERP} className="hover:text-blue-400">ERP sur mesure</Link></li>
              <li><Link to={Page.AI} className="hover:text-blue-400">Intelligence Artificielle</Link></li>
              <li><Link to={Page.Dev} className="hover:text-blue-400">Développement Web/Mobile</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Liens Utiles</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to={Page.About} className="hover:text-blue-400">À Propos</Link></li>
              <li><Link to={Page.Contact} className="hover:text-blue-400">Nous Contacter</Link></li>
              <li><a href="#" className="hover:text-blue-400">Support Client</a></li>
              <li><a href="#" className="hover:text-blue-400">Mentions Légales</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0" />
                <span>123 Avenue de l'Innovation,<br />75000 Paris, France</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                <span>+33 (0)1 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                <span>contact@csolusoft.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2026 Cloud Solu Soft (CSoluSoft). Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Confidentialité</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
