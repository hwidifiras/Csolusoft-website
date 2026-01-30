
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, Cpu, AlertTriangle, BarChart3, Globe, Laptop, Smartphone, Monitor, BrainCircuit, MessageCircle, Cloud, Factory, ShoppingCart, HeartPulse, Landmark, Briefcase, ThumbsUp, Headphones } from 'lucide-react';
import { Page } from '../types';
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
              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Facturation<br />
                <span className="text-accent-400">Électronique</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                La <span className="text-accent-400 font-semibold">nouvelle réglementation</span> impose aux entreprises tunisiennes de passer au format TEIF.
                Avec CSoluSoft, soyez conforme en <strong className="text-white">24h</strong> — conversion automatique ou solution de facturation complète.
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
                <Link to={`${Page.Billing}#solutions`} className="px-8 py-4 bg-accent-500 text-white rounded-xl font-bold text-lg hover:bg-accent-600 transition-all shadow-lg shadow-accent-500/30 flex items-center justify-center space-x-2">
                  <span>Découvrir nos offres</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="https://wa.me/21658874825" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-green-600 text-white rounded-xl font-bold text-lg hover:bg-green-700 transition-all flex items-center justify-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
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

      {/* Services Sur Mesure */}
      <section className="py-20 bg-slate-50 dark:bg-dark-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-500 dark:text-accent-400 font-bold tracking-wider uppercase text-sm">Notre Expertise</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              Développement <span className="text-primary-500 dark:text-accent-400">Sur Mesure</span>
            </h2>
            <p className="mt-4 text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Des solutions technologiques adaptées à vos besoins spécifiques pour propulser votre activité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Systèmes de Gestion",
                icon: <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300"><BarChart3 className="w-7 h-7" /></div>,
                desc: "ERP, CRM et tableaux de bord personnalisés pour optimiser vos processus internes.",
                tags: ["Dashboards", "KPIs", "Suivi"]
              },
              {
                title: "Sites Web Pro",
                icon: <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300"><Globe className="w-7 h-7" /></div>,
                desc: "Vitrines digitales performantes, SEO-friendly et design moderne pour votre marque.",
                tags: ["Vitrine", "E-commerce", "Portfolio"]
              },
              {
                title: "Applications Web",
                icon: <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-transform duration-300"><Laptop className="w-7 h-7" /></div>,
                desc: "Solutions SaaS et plateformes web complexes accessibles partout.",
                tags: ["SaaS", "React", "Cloud"]
              },
              {
                title: "Applications Mobile",
                icon: <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300"><Smartphone className="w-7 h-7" /></div>,
                desc: "Apps iOS et Android natives ou hybrides pour toucher vos clients sur mobile.",
                tags: ["iOS", "Android", "Flutter"]
              },
              {
                title: "Software Desktop",
                icon: <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-teal-500/30 group-hover:scale-110 transition-transform duration-300"><Monitor className="w-7 h-7" /></div>,
                desc: "Logiciels de bureau robustes pour les environnements de travail exigeants.",
                tags: ["Windows", "Electron", "Sécurité"]
              },
              {
                title: "Modules AI",
                icon: <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-300"><BrainCircuit className="w-7 h-7" /></div>,
                desc: "Intégration d'intelligence artificielle pour automatiser et prédire.",
                tags: ["NLP", "Vision", "Prédiction"]
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white dark:bg-dark-900 mx-auto w-full p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-dark-700 group flex flex-col items-center text-center">
                <div className="flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
                  {service.desc}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-100 dark:bg-dark-800 text-xs font-medium text-slate-500 dark:text-slate-400 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bouton En savoir plus */}
          <div className="flex justify-center mt-12">
            <Link
              to={Page.Dev}
              className="px-8 py-4 bg-primary-500 text-white rounded-2xl font-bold text-lg hover:bg-primary-600 transition-all shadow-lg shadow-primary-500/30 flex items-center justify-center space-x-2 group"
            >
              <span>En savoir plus</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Automation & Cloud Section */}
      <section className="py-24 bg-white dark:bg-dark-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl transform rotate-3 blur-lg opacity-30"></div>
                <div className="relative bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl">
                  {/* Mockup visual for automation */}
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="text-xs text-slate-500 font-mono ml-4">workflow.n8n</div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                      <div className="w-10 h-10 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center">📧</div>
                      <div className="flex-1">
                        <div className="h-2 w-24 bg-slate-600 rounded mb-2"></div>
                        <div className="h-1.5 w-full bg-slate-700 rounded"></div>
                      </div>
                      <div className="text-xs text-slate-500">Trigger</div>
                    </div>
                    <div className="flex justify-center -my-2">
                      <div className="w-0.5 h-6 bg-slate-700"></div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                      <div className="w-10 h-10 bg-pink-500/20 text-pink-400 rounded-lg flex items-center justify-center">🧠</div>
                      <div className="flex-1">
                        <div className="h-2 w-32 bg-slate-600 rounded mb-2"></div>
                        <div className="h-1.5 w-3/4 bg-slate-700 rounded"></div>
                      </div>
                      <div className="text-xs text-slate-500">Process AI</div>
                    </div>
                    <div className="flex justify-center -my-2">
                      <div className="w-0.5 h-6 bg-slate-700"></div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                      <div className="w-10 h-10 bg-green-500/20 text-green-400 rounded-lg flex items-center justify-center"><Cloud className="w-5 h-5" /></div>
                      <div className="flex-1">
                        <div className="h-2 w-20 bg-slate-600 rounded mb-2"></div>
                        <div className="h-1.5 w-full bg-slate-700 rounded"></div>
                      </div>
                      <div className="text-xs text-slate-500">Cloud Save</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                <span>Gain de productivité x10</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
                Automatisation & <br /> Infrastructures Cloud
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Connectez vos applications favorites et automatisez vos tâches répétitives. Nous déployons des workflows intelligents via <strong className="text-slate-900 dark:text-white">n8n</strong> et sécurisons vos données sur le Cloud.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="border border-slate-200 dark:border-slate-700 p-4 rounded-xl hover:border-blue-500 transition-colors">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Workflows n8n</h4>
                  <p className="text-sm text-slate-500">Orchestration de tâches complexes sans code.</p>
                </div>
                <div className="border border-slate-200 dark:border-slate-700 p-4 rounded-xl hover:border-cyan-500 transition-colors">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Cloud Scalable</h4>
                  <p className="text-sm text-slate-500">AWS, Google Cloud ou Azure selon vos besoins.</p>
                </div>
              </div>

              <a href="#contact" className="group inline-flex items-center space-x-3 text-blue-600 dark:text-blue-400 font-bold text-lg hover:text-blue-700 transition-colors">
                <span>Démarrer l'automatisation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
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
                {/* Example Label */}
                <div className="text-xs font-mono text-slate-400 dark:text-slate-500 mb-4">// exemple</div>

                {/* Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Module Csolusoft AI</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Intelligence intégrée à vos systèmes</p>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="space-y-4">
                  {/* Optimisation Stock */}
                  <div className="p-4 bg-slate-50 dark:bg-dark-600 rounded-xl">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-bold text-slate-900 dark:text-white">Optimisation Stock</span>
                      <span className="text-sm text-green-600 dark:text-green-400">+12.4%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 dark:bg-dark-500 rounded-full overflow-hidden">
                      <div className="w-[85%] h-full bg-primary-500 rounded-full"></div>
                    </div>
                  </div>

                  {/* Réduction des Pertes - Money Saved */}
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-bold text-slate-900 dark:text-white">Réduction des Pertes</span>
                      <span className="text-sm text-green-600 dark:text-green-400 font-bold">-15 000 DT/an</span>
                    </div>
                    <p className="text-xs text-green-600 dark:text-green-400">Économies estimées sur l'année</p>
                  </div>

                  {/* Efficacité Logistique - In Progress */}
                  <div className="p-4 bg-slate-50 dark:bg-dark-600 rounded-xl">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-bold text-slate-900 dark:text-white">Efficacité Logistique</span>
                      <span className="text-sm text-primary-500 dark:text-accent-400 font-medium">En cours...</span>
                    </div>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(i => <div key={i} className="h-6 w-full bg-accent-100 dark:bg-accent-500/20 rounded animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>)}
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

      {/* Secteurs d'activité */}
      <section className="py-24 bg-white dark:bg-dark-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-12">Secteurs d'activité</h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {[
                { name: 'Industrie', icon: <Factory className="w-8 h-8" /> },
                { name: 'Commerce', icon: <ShoppingCart className="w-8 h-8" /> },
                { name: 'Santé', icon: <HeartPulse className="w-8 h-8" /> },
                { name: 'Finance', icon: <Landmark className="w-8 h-8" /> },
                { name: 'Services', icon: <Briefcase className="w-8 h-8" /> }
              ].map((sector, i) => (
                <div key={i} className="flex flex-col items-center p-6 rounded-2xl hover:bg-slate-50 dark:hover:bg-dark-800 transition-all group cursor-default">
                  <div className="w-16 h-16 bg-slate-100 dark:bg-dark-700 rounded-2xl flex items-center justify-center text-slate-500 dark:text-slate-400 mb-3 group-hover:bg-primary-50 dark:group-hover:bg-primary-500/20 group-hover:text-primary-500 dark:group-hover:text-accent-400 transition-all group-hover:scale-110">
                    {sector.icon}
                  </div>
                  <span className="text-sm font-semibold text-slate-600 dark:text-slate-400 group-hover:text-primary-500 dark:group-hover:text-accent-400 transition-colors">{sector.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Value Propositions - Honest for a new company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-3xl mx-auto">
            <div className="flex items-center space-x-6 p-6 bg-slate-50 dark:bg-dark-800 rounded-2xl">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-500/20 rounded-2xl flex items-center justify-center text-green-600 dark:text-green-400 shrink-0">
                <ThumbsUp className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">Satisfaction garantie</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Nous travaillons jusqu'à votre entière satisfaction.</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 p-6 bg-slate-50 dark:bg-dark-800 rounded-2xl">
              <div className="w-14 h-14 bg-primary-100 dark:bg-primary-500/20 rounded-2xl flex items-center justify-center text-primary-600 dark:text-primary-400 shrink-0">
                <Headphones className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">Support réactif</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Une équipe dédiée pour vous accompagner.</p>
              </div>
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
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
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
