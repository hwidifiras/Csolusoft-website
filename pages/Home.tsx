
import React from 'react';
import { Link } from 'react-router-dom';
// Added Cpu to the icon imports
import { ArrowRight, CheckCircle2, Star, Zap, Users, BarChart, Cpu } from 'lucide-react';
import { Page } from '../types';
import { ERP_FEATURES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-8 animate-bounce">
              <Zap className="w-4 h-4" />
              <span>Nouveau : Intégration IA générative dans vos outils</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
              L'excellence logicielle pour <span className="text-blue-600">votre performance.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Cloud Solu Soft conçoit les outils de gestion de demain. ERP intelligents, IA intégrée et développement sur mesure pour entreprises ambitieuses.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to={Page.Contact} className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center space-x-2">
                <span>Démarrer un projet</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to={Page.About} className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center">
                Voir nos solutions
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating elements décoratifs */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-400 opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-indigo-500 opacity-5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </section>

      {/* FEATURED: Facturation Électronique - INFO BANNER */}
      <section className="py-8 bg-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4 text-white">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="font-bold text-lg">Facturation électronique obligatoire en Tunisie</p>
                <p className="text-slate-400 text-sm">Convertissez vos factures au format TEIF conforme ou adoptez notre solution complète.</p>
              </div>
            </div>
            <Link to={Page.Billing} className="shrink-0 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 transition-all flex items-center space-x-2">
              <span>En savoir plus</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED: Facturation Électronique - MAIN SECTION */}
      <section className="py-24 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden shadow-2xl border border-slate-700">
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 text-white">
                <span className="bg-blue-500/20 border border-blue-400/30 px-4 py-2 rounded-full text-sm font-semibold text-blue-300 mb-6 inline-block">
                  Facturation électronique
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  Passez à la conformité<br />
                  <span className="text-blue-400">en toute simplicité</span>
                </h2>
                <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
                  Deux solutions adaptées à vos besoins : convertissez vos factures existantes au format <strong className="text-white">TEIF</strong>, ou adoptez notre logiciel de facturation conforme.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                  <div className="flex items-center space-x-3 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="font-medium">Module de conversion</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="font-medium">Export XML/TEIF conforme</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="font-medium">Logiciel complet</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="font-medium">Signature électronique</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to={Page.Billing} className="inline-flex items-center justify-center space-x-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-500 transition-all">
                    <span>Découvrir nos offres</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link to={Page.Contact} className="inline-flex items-center justify-center space-x-3 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
                    <span>Nous contacter</span>
                  </Link>
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                   <div className="text-center mb-6">
                     <div className="text-5xl mb-4">📄 → 📋</div>
                     <p className="text-slate-400 text-sm">Conversion automatique</p>
                   </div>
                   <div className="space-y-4">
                      <div className="bg-slate-700/50 border border-slate-600 rounded-2xl p-4 flex items-center space-x-4">
                        <div className="w-10 h-10 bg-slate-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">PDF</div>
                        <div className="flex-1">
                          <div className="text-white font-medium">facture_001.pdf</div>
                          <div className="text-slate-400 text-xs">Format actuel</div>
                        </div>
                      </div>
                      <div className="text-center text-slate-500 text-2xl">↓</div>
                      <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-4 flex items-center space-x-4">
                        <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">XML</div>
                        <div className="flex-1">
                          <div className="text-white font-medium">facture_TEIF.xml</div>
                          <div className="text-green-400 text-xs">✓ Conforme</div>
                        </div>
                      </div>
                   </div>
                </div>
                {/* Background glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions ERP Summary */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Nos Solutions ERP</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Une architecture modulaire qui s'adapte à vos besoins spécifiques. Ne payez que pour ce que vous utilisez.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ERP_FEATURES.map((feature, idx) => (
              <div key={idx} className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>
                <Link to={Page.ERP} className="text-blue-600 font-bold text-sm flex items-center group/link">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloc Intégration IA */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="w-16 h-1 bg-blue-600 mb-8"></div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8">L'Intelligence Artificielle au cœur de vos processus.</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Plus qu'un gadget, l'IA chez CSoluSoft est un véritable levier de croissance. Nous intégrons des algorithmes d'analyse prédictive et d'automatisation intelligente directement dans vos workflows.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start space-x-3">
                  <div className="mt-1 bg-blue-100 p-1 rounded-full"><CheckCircle2 className="w-4 h-4 text-blue-600" /></div>
                  <span className="text-slate-700 font-medium">Prédiction des ventes et de la demande</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="mt-1 bg-blue-100 p-1 rounded-full"><CheckCircle2 className="w-4 h-4 text-blue-600" /></div>
                  <span className="text-slate-700 font-medium">Automatisation des saisies comptables</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="mt-1 bg-blue-100 p-1 rounded-full"><CheckCircle2 className="w-4 h-4 text-blue-600" /></div>
                  <span className="text-slate-700 font-medium">Assistance intelligente pour la prise de décision</span>
                </li>
              </ul>
              <Link to={Page.AI} className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all inline-block">
                Découvrir l'offre IA
              </Link>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="relative z-10 bg-white p-12 rounded-[2.5rem] shadow-2xl border border-slate-100">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">CSoluBrain™ v2.0</h4>
                      <p className="text-xs text-slate-500">Moteur d'intelligence logicielle actif</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="p-4 bg-slate-50 rounded-xl">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-bold">Optimisation Stock</span>
                        <span className="text-sm text-green-600">+12.4%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="w-[85%] h-full bg-blue-600 rounded-full"></div>
                      </div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-bold">Efficacité Logistique</span>
                        <span className="text-sm text-blue-600">En cours</span>
                      </div>
                      <div className="flex space-x-1">
                        {[1,2,3,4,5,6,7,8].map(i => <div key={i} className="h-6 w-full bg-blue-100 rounded animate-pulse" style={{animationDelay: `${i*0.1}s`}}></div>)}
                      </div>
                    </div>
                  </div>
               </div>
               {/* Decorators */}
               <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600 rounded-[3rem] -z-0 rotate-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Secteurs / Social Proof */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-widest mb-12">Ils nous font confiance</h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               {['Logo A', 'Logo B', 'Logo C', 'Logo D', 'Logo E'].map((logo, i) => (
                 <span key={i} className="text-2xl font-black text-slate-400 hover:text-blue-600 cursor-default">{logo}</span>
               ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24">
            <div className="text-center space-y-4">
              <div className="text-5xl font-black text-blue-600">500+</div>
              <p className="text-slate-600 font-bold">Entreprises équipées</p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-5xl font-black text-blue-600">98%</div>
              <p className="text-slate-600 font-bold">Taux de satisfaction</p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-5xl font-black text-blue-600">24/7</div>
              <p className="text-slate-600 font-bold">Support réactif</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
             <div className="relative z-10">
               <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">Prêt à transformer votre entreprise ?</h2>
               <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                 Discutons de votre projet et élaborons ensemble la solution logicielle qui répondra parfaitement à vos enjeux.
               </p>
               <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                 <Link to={Page.Contact} className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20">
                   Demander un devis gratuit
                 </Link>
                 <Link to={Page.Contact} className="px-10 py-5 bg-white/10 text-white border border-white/20 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
                   Prendre rendez-vous
                 </Link>
               </div>
             </div>
             {/* Background glow */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
