
import React from 'react';
import { ShieldCheck, Zap, FileCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Page } from '../types';

const ElectronicBilling: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-20 pb-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            Expertise & Conformité
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8">
            Facturation Électronique : <span className="text-blue-600">Obligatoire en 2026</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            Simplifiez votre transition vers la dématérialisation fiscale avec une solution sécurisée, automatisée et nativement connectée à votre ERP.
          </p>
          <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all">
            Réserver un audit de conformité
          </button>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 border border-slate-100 rounded-[2rem] bg-slate-50">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">100% Conforme</h3>
              <p className="text-slate-600 leading-relaxed">
                Notre solution est déjà compatible avec les plateformes PDP et PPF pour vous garantir une tranquillité d'esprit totale face à la législation.
              </p>
            </div>
            <div className="p-8 border border-slate-100 rounded-[2rem] bg-slate-50">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Gain de temps</h3>
              <p className="text-slate-600 leading-relaxed">
                Automatisez l'envoi, la réception et le rapprochement comptable de vos factures. Divisez par 3 votre temps de traitement administratif.
              </p>
            </div>
            <div className="p-8 border border-slate-100 rounded-[2rem] bg-slate-50">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                <FileCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Économies réelles</h3>
              <p className="text-slate-600 leading-relaxed">
                Supprimez les coûts d'impression, d'affranchissement et de stockage physique. Le coût d'une facture électronique est 70% inférieur à une facture papier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Details */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-extrabold mb-8">Pourquoi choisir CSoluSoft pour votre transition ?</h2>
                <div className="space-y-6">
                  {[
                    "Accompagnement personnalisé de vos équipes",
                    "Interfaçage natif avec vos logiciels actuels",
                    "Archivage légal à valeur probante (10 ans)",
                    "Sécurité des données certifiée ISO 27001",
                    "Tableaux de bord de suivi en temps réel"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center space-x-4">
                       <CheckCircle2 className="w-6 h-6 text-blue-400" />
                       <span className="text-lg text-slate-300">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2">
                 <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/10">
                    <h3 className="text-2xl font-bold mb-6">Le calendrier de la réforme</h3>
                    <div className="space-y-8">
                       <div className="flex space-x-4">
                          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white shrink-0">1</div>
                          <div>
                             <h4 className="font-bold text-white">Septembre 2024</h4>
                             <p className="text-slate-400 text-sm">Ouverture progressive de l'annuaire PPF et tests pilotes PDP.</p>
                          </div>
                       </div>
                       <div className="flex space-x-4">
                          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white shrink-0">2</div>
                          <div>
                             <h4 className="font-bold text-white">2026 : Généralisation</h4>
                             <p className="text-slate-400 text-sm">Obligation de réception pour toutes les entreprises et émission pour les GE/ETI.</p>
                          </div>
                       </div>
                       <div className="flex space-x-4">
                          <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center font-bold text-white shrink-0">3</div>
                          <div>
                             <h4 className="font-bold text-white">2027 : PME & TPE</h4>
                             <p className="text-slate-400 text-sm">Obligation d'émission étendue à l'ensemble des structures.</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="py-24 text-center">
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-extrabold mb-8">Préparez demain, dès aujourd'hui.</h2>
            <p className="text-xl text-slate-600 mb-10">
               Nos experts sont à votre disposition pour une démonstration personnalisée de notre module de facturation électronique.
            </p>
            <Link to={Page.Contact} className="inline-flex items-center space-x-3 bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
               <span>Demander une démonstration</span>
               <ArrowRight className="w-5 h-5" />
            </Link>
         </div>
      </section>
    </div>
  );
};

export default ElectronicBilling;
