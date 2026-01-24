
import React from 'react';
import { ShieldCheck, Zap, FileCheck, CheckCircle2, ArrowRight, FileSpreadsheet, FileOutput, Upload, RefreshCw, Package, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Page } from '../types';
import SEO from '../components/SEO';

const ElectronicBilling: React.FC = () => {
  return (
    <div className="bg-white dark:bg-dark-900 transition-colors">
      <SEO 
        title="Facturation Électronique"
        description="Solutions de facturation électronique conformes à la loi tunisienne 2026. Convertissez vos factures au format TEIF ou adoptez notre logiciel de facturation complet. Mise en conformité en 24h."
        keywords="facturation électronique Tunisie, TEIF, loi finances 2026, conformité fiscale, facture électronique, conversion facture"
        url="/facturation-electronique"
      />
      {/* HERO - Professional, not aggressive */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-primary-500/20 text-primary-300 px-5 py-2 rounded-full mb-8 border border-primary-400/30">
            <Clock className="w-4 h-4" />
            <span className="font-semibold text-sm">Obligation légale en vigueur</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            Facturation Électronique<br/>
            <span className="text-primary-400">Conforme au TEIF</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            La facturation électronique est désormais <strong className="text-white">obligatoire pour les sociétés de services</strong> et sera bientôt étendue à toutes les entreprises. 
            Assurez-vous d'être conforme au guide tunisien et au format TEIF.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to={Page.Contact} className="group px-10 py-4 bg-accent-500 text-white rounded-xl font-bold text-lg hover:bg-accent-600 transition-all shadow-lg flex items-center justify-center space-x-2">
              <span>Obtenez votre solution</span>
              <ArrowRight className="w-5 h-5 animate-bounce-x" />
            </Link>
            <Link 
              to={Page.BillingGuide}
              className="px-10 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center space-x-2"
            >
              <span>📚 Guide complet</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 1: Le Contexte */}
      <section className="py-20 bg-slate-50 dark:bg-dark-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary-50 dark:bg-primary-500/20 text-primary-600 dark:text-primary-300 text-sm font-bold px-4 py-2 rounded-full mb-4">
              LE CONTEXTE
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
              Pourquoi la facturation électronique ?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Dans le cadre de la modernisation fiscale, la Tunisie impose progressivement la facturation électronique conforme au format <strong>TEIF</strong>.
            </p>
            <Link to={Page.BillingGuide} className="inline-flex items-center space-x-2 text-primary-500 dark:text-accent-400 font-semibold mt-4 hover:underline">
              <span>En savoir plus sur la réglementation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-dark-700 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-600">
              <div className="w-12 h-12 bg-primary-50 dark:bg-primary-500/20 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 className="w-6 h-6 text-primary-500 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Aujourd'hui</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Les <strong>sociétés de services</strong> sont déjà soumises à l'obligation d'émettre des factures électroniques conformes.
              </p>
            </div>
            <div className="bg-white dark:bg-dark-700 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-600">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-600 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-slate-600 dark:text-slate-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Prochainement</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                L'obligation sera <strong>étendue à toutes les entreprises</strong>, quel que soit leur secteur d'activité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Le Problème */}
      <section className="py-20 bg-white dark:bg-dark-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-bold px-4 py-2 rounded-full mb-4">
              LE CONSTAT
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
              Beaucoup d'entreprises ne sont pas prêtes
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              De nombreuses sociétés utilisent encore des méthodes qui ne respectent pas le guide de conformité tunisien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileSpreadsheet className="w-8 h-8 text-slate-500 dark:text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Fichiers Excel</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Facturation manuelle sur tableur, sans structure normalisée ni traçabilité.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Package className="w-8 h-8 text-slate-500 dark:text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Anciens ERP</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Logiciels de gestion non mis à jour, qui n'exportent pas au format TEIF requis.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileOutput className="w-8 h-8 text-slate-500 dark:text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Formats non conformes</h3>
              <p className="text-slate-600 dark:text-slate-400">
                PDF, CSV ou autres exports qui ne respectent pas les exigences du guide tunisien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Nos Solutions */}
      <section id="solutions" className="py-20 bg-dark-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary-500/20 text-primary-300 text-sm font-bold px-4 py-2 rounded-full mb-4">
              NOS SOLUTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Deux options pour être conforme
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Gardez vos méthodes actuelles ou passez à notre solution complète. Dans les deux cas, vous serez conforme.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Option 1: Conversion */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-4 py-2 rounded-bl-xl">
                GARDEZ VOS OUTILS
              </div>
              <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mb-8">
                <RefreshCw className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Module de Conversion</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Continuez à utiliser vos outils actuels (Excel, ancien ERP, PDF...). Notre module convertit automatiquement vos factures au format <strong className="text-white">XML/TEIF conforme</strong>.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                  <span className="text-slate-300">Import de vos fichiers existants</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                  <span className="text-slate-300">Conversion automatique vers TEIF</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                  <span className="text-slate-300">Prêt pour la signature électronique</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                  <span className="text-slate-300">Aucun changement de vos habitudes</span>
                </li>
              </ul>
              <Link to={Page.Contact} className="inline-flex items-center space-x-2 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-primary-50 transition-all">
                <span>Demander une démo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Option 2: Logiciel complet */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 bg-white text-primary-500 text-xs font-bold px-4 py-2 rounded-bl-xl">
                RECOMMANDÉ
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
                <FileCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Logiciel de Facturation Conforme</h3>
              <p className="text-primary-100 mb-8 leading-relaxed">
                Passez à notre solution de facturation <strong className="text-white">nativement conforme</strong>. Créez, gérez et émettez vos factures directement au bon format.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-300 mt-0.5 shrink-0" />
                  <span className="text-primary-100">Création de factures simplifiée</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-300 mt-0.5 shrink-0" />
                  <span className="text-primary-100">Format TEIF natif</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-300 mt-0.5 shrink-0" />
                  <span className="text-primary-100">Signature électronique intégrée</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-300 mt-0.5 shrink-0" />
                  <span className="text-primary-100">Tableau de bord et reporting</span>
                </li>
              </ul>
              <Link to={Page.Contact} className="inline-flex items-center space-x-2 bg-white text-primary-500 px-8 py-4 rounded-xl font-bold hover:bg-primary-50 transition-all">
                <span>Découvrir le logiciel</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Avantages */}
      <section className="py-20 bg-white dark:bg-dark-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
              Pourquoi choisir CSoluSoft ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-primary-50 dark:bg-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-7 h-7 text-primary-500 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">Sécurisé</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Données chiffrées et archivage sécurisé de vos factures.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-primary-50 dark:bg-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-7 h-7 text-primary-500 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">Rapide</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Conversion instantanée, sans temps d'attente.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-primary-50 dark:bg-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileCheck className="w-7 h-7 text-primary-500 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">Conforme</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Respect strict du guide tunisien et du format TEIF.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-primary-50 dark:bg-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Upload className="w-7 h-7 text-primary-500 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">Simple</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Interface intuitive, aucune formation requise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-slate-50 dark:bg-dark-800 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
            Prêt à être conforme ?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre situation et trouver la solution adaptée à vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to={Page.Contact}
              className="px-10 py-4 bg-accent-500 text-white rounded-xl font-bold text-lg hover:bg-accent-600 transition-all shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Contactez-nous</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="https://wa.me/21658874825"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white dark:bg-dark-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-600 rounded-xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-dark-600 transition-all flex items-center justify-center space-x-2"
            >
              <span>💬 WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElectronicBilling;
