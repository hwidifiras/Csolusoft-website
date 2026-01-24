
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, Cpu, AlertTriangle } from 'lucide-react';
import { Page } from '../types';
import { ERP_FEATURES } from '../constants';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden bg-white dark:bg-dark-900 transition-colors">
      <SEO 
        title="Accueil"
        description="CSoluSoft - Expert en solutions logicielles sur mesure en Tunisie. Facturation électronique, ERP, développement web/mobile et intelligence artificielle pour propulser votre entreprise."
        keywords="CSoluSoft, facturation électronique Tunisie, ERP Tunisie, logiciel de gestion, développement sur mesure, intelligence artificielle, transformation digitale"
        url="/"
      />
      {/* HERO: Facturation Électronique - Compact & Impactful */}
      <section className="relative pt-28 pb-20 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/10 rounded-full blur-[80px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left: Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Alert Badge */}
              <div className="inline-flex items-center space-x-2 bg-red-500/20 border border-red-400/30 text-red-300 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <AlertTriangle className="w-4 h-4" />
                <span>Obligation légale 2026</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Facturation<br />
                <span className="text-accent-400">Électronique</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                <strong className="text-white">380 000 entreprises</strong> doivent passer au format TEIF. 
                Conversion automatique ou solution complète — soyez conforme en <strong className="text-accent-400">24h</strong>.
              </p>

              {/* Key features */}
              <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
                <div className="flex items-center space-x-2 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>Export TEIF conforme</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>Signature électronique</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>Support 24/7</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to={Page.Billing} className="px-8 py-4 bg-accent-500 text-white rounded-xl font-bold text-lg hover:bg-accent-600 transition-all shadow-lg shadow-accent-500/30 flex items-center justify-center space-x-2">
                  <span>Découvrir nos offres</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="https://wa.me/21658874825" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-green-600 text-white rounded-xl font-bold text-lg hover:bg-green-700 transition-all flex items-center justify-center space-x-2">
                  <span>💬 WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right: Visual Process */}
            <div className="flex-1 w-full max-w-md">
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-6">
                <p className="text-center text-slate-400 text-sm mb-4 font-semibold uppercase tracking-wide">Processus simplifié</p>
                
                {/* 3 Steps Vertical */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                    <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400 font-bold">1</div>
                    <div>
                      <p className="text-white font-semibold">Vos factures actuelles</p>
                      <p className="text-slate-400 text-sm">PDF, Excel non conformes</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center text-slate-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                  </div>
                  
                  <div className="flex items-center space-x-4 bg-accent-500/10 border border-accent-500/20 rounded-xl p-4">
                    <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center text-accent-400 font-bold">2</div>
                    <div>
                      <p className="text-white font-semibold">CSoluSoft</p>
                      <p className="text-slate-400 text-sm">Conversion automatique</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center text-slate-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                  </div>
                  
                  <div className="flex items-center space-x-4 bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400 font-bold">✓</div>
                    <div>
                      <p className="text-white font-semibold">Conforme TEIF</p>
                      <p className="text-green-400 text-sm">Prêt pour l'administration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions ERP Summary */}
      <section className="py-24 bg-white dark:bg-dark-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">Nos Solutions ERP</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Une architecture modulaire qui s'adapte à vos besoins spécifiques. Ne payez que pour ce que vous utilisez.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ERP_FEATURES.map((feature, idx) => (
              <div key={idx} className="group p-8 rounded-3xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-dark-800 hover:bg-white dark:hover:bg-dark-700 hover:shadow-2xl hover:border-primary-100 dark:hover:border-primary-500/30 transition-all">
                <div className="w-12 h-12 bg-white dark:bg-dark-700 rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>
                <Link to={Page.ERP} className="text-primary-500 dark:text-accent-400 font-bold text-sm flex items-center group/link">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloc Intégration IA */}
      <section className="py-24 bg-slate-50 dark:bg-dark-800 overflow-hidden transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="w-16 h-1 bg-primary-500 dark:bg-accent-400 mb-8"></div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-8">L'Intelligence Artificielle au cœur de vos processus.</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Plus qu'un gadget, l'IA chez CSoluSoft est un véritable levier de croissance. Nous intégrons des algorithmes d'analyse prédictive et d'automatisation intelligente directement dans vos workflows.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start space-x-3">
                  <div className="mt-1 bg-accent-100 dark:bg-accent-500/20 p-1 rounded-full"><CheckCircle2 className="w-4 h-4 text-primary-500 dark:text-accent-400" /></div>
                  <span className="text-slate-700 dark:text-slate-200 font-medium">Prédiction des ventes et de la demande</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="mt-1 bg-accent-100 dark:bg-accent-500/20 p-1 rounded-full"><CheckCircle2 className="w-4 h-4 text-primary-500 dark:text-accent-400" /></div>
                  <span className="text-slate-700 dark:text-slate-200 font-medium">Automatisation des saisies comptables</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="mt-1 bg-accent-100 dark:bg-accent-500/20 p-1 rounded-full"><CheckCircle2 className="w-4 h-4 text-primary-500 dark:text-accent-400" /></div>
                  <span className="text-slate-700 dark:text-slate-200 font-medium">Assistance intelligente pour la prise de décision</span>
                </li>
              </ul>
              <Link to={Page.AI} className="px-8 py-4 bg-dark-900 dark:bg-accent-500 text-white rounded-2xl font-bold hover:bg-dark-800 dark:hover:bg-accent-600 transition-all inline-block">
                Découvrir l'offre IA
              </Link>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="relative z-10 bg-white dark:bg-dark-700 p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-600">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">CSoluBrain™ v2.0</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Moteur d'intelligence logicielle actif</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="p-4 bg-slate-50 dark:bg-dark-600 rounded-xl">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-bold text-slate-900 dark:text-white">Optimisation Stock</span>
                        <span className="text-sm text-green-600 dark:text-green-400">+12.4%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-200 dark:bg-dark-500 rounded-full overflow-hidden">
                        <div className="w-[85%] h-full bg-primary-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-dark-600 rounded-xl">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-bold text-slate-900 dark:text-white">Efficacité Logistique</span>
                        <span className="text-sm text-primary-500 dark:text-accent-400">En cours</span>
                      </div>
                      <div className="flex space-x-1">
                        {[1,2,3,4,5,6,7,8].map(i => <div key={i} className="h-6 w-full bg-accent-100 dark:bg-accent-500/20 rounded animate-pulse" style={{animationDelay: `${i*0.1}s`}}></div>)}
                      </div>
                    </div>
                  </div>
               </div>
               {/* Decorators */}
               <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary-500 rounded-[3rem] -z-0 rotate-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Secteurs / Social Proof */}
      <section className="py-24 bg-white dark:bg-dark-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-12">Secteurs d'activité</h2>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
               {[
                 { name: 'Industrie', icon: '🏭' },
                 { name: 'Commerce', icon: '🛒' },
                 { name: 'Santé', icon: '🏥' },
                 { name: 'Finance', icon: '🏦' },
                 { name: 'Services', icon: '💼' }
               ].map((sector, i) => (
                 <div key={i} className="flex flex-col items-center p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-dark-800 transition-all group cursor-default">
                   <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">{sector.icon}</span>
                   <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 group-hover:text-primary-500 dark:group-hover:text-accent-400 transition-colors">{sector.name}</span>
                 </div>
               ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24">
            <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-slate-50 dark:hover:bg-dark-800 transition-all group cursor-default">
              <div className="text-5xl font-black text-primary-500 dark:text-accent-400 group-hover:scale-110 transition-transform">500+</div>
              <p className="text-slate-600 dark:text-slate-300 font-bold">Entreprises équipées</p>
            </div>
            <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-slate-50 dark:hover:bg-dark-800 transition-all group cursor-default">
              <div className="text-5xl font-black text-primary-500 dark:text-accent-400 group-hover:scale-110 transition-transform">98%</div>
              <p className="text-slate-600 dark:text-slate-300 font-bold">Taux de satisfaction</p>
            </div>
            <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-slate-50 dark:hover:bg-dark-800 transition-all group cursor-default">
              <div className="text-5xl font-black text-primary-500 dark:text-accent-400 group-hover:scale-110 transition-transform">24/7</div>
              <p className="text-slate-600 dark:text-slate-300 font-bold">Support réactif</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-white dark:bg-dark-800 transition-colors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
             <div className="relative z-10">
               <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">Prêt à transformer votre entreprise ?</h2>
               <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                 Discutons de votre projet et élaborons ensemble la solution logicielle qui répondra parfaitement à vos enjeux.
               </p>
               <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                 <Link to={Page.Contact} className="px-10 py-5 bg-accent-500 text-white rounded-2xl font-bold text-lg hover:bg-accent-600 transition-all shadow-xl shadow-accent-500/20 flex items-center justify-center space-x-2">
                   <span>Demander un devis gratuit</span>
                   <ArrowRight className="w-5 h-5" />
                 </Link>
                 <a href="https://wa.me/21658874825" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white/10 text-white border border-white/20 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center space-x-2">
                   <span>💬 WhatsApp</span>
                 </a>
               </div>
             </div>
             {/* Background glow */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
