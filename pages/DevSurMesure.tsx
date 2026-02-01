
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code2, Settings2, HeartHandshake,
  MessageSquare, Layers,
  LifeBuoy, ArrowRight, CheckCircle2, Users,
  Database, Globe, Smartphone, Monitor,
  LayoutDashboard, LineChart, MessageCircle
} from 'lucide-react';
import { Page } from '../types';
import SEO from '../components/SEO';

const DevSurMesure: React.FC = () => {
  const projectPhases = [
    {
      phase: "Étape 1",
      title: "Compréhension du Besoin",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      description: "Nous prenons le temps de bien comprendre votre métier, vos défis quotidiens et vos objectifs.",
      activities: ["Écoute active de vos besoins métier", "Analyse de vos processus actuels", "Identification des points d'amélioration", "Définition claire des objectifs"],
      deliverables: ["Cahier des charges", "Vision claire du projet"]
    },
    {
      phase: "Étape 2",
      title: "Développement de la Solution",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      description: "Nous concevons et développons une solution personnalisée qui répond précisément à vos besoins.",
      activities: ["Conception sur mesure pour votre activité", "Développement de qualité professionnelle", "Interface intuitive et moderne", "Tests rigoureux à chaque étape"],
      deliverables: ["Solution fonctionnelle", "Documentation technique"]
    },
    {
      phase: "Étape 3",
      title: "Solution Évolutive",
      icon: <Layers className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      description: "Votre entreprise évolue, votre solution aussi. Une base solide et flexible qui grandit avec vous.",
      activities: ["Architecture pensée pour l'avenir", "Ajout facile de nouvelles fonctionnalités", "Adaptation à votre croissance", "Intégrations possibles avec vos autres outils"],
      deliverables: ["Solution scalable", "Roadmap évolutive"]
    },
    {
      phase: "Étape 4",
      title: "Formation & Maintenance",
      icon: <LifeBuoy className="w-6 h-6" />,
      color: "from-teal-500 to-teal-600",
      description: "Nous vous accompagnons pour maîtriser votre nouvel outil et restons disponibles.",
      activities: ["Formation complète de vos équipes", "Support technique réactif", "Maintenance préventive et corrective", "Mises à jour régulières"],
      deliverables: ["Guides utilisateurs", "Support continu"]
    }
  ];

  // Tech logos from CDN (devicons)
  const techLogos = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: ".NET", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
    { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
    { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" }
  ];

  return (
    <div className="bg-white dark:bg-dark-900 transition-colors">
      <SEO
        title="Développement Sur Mesure"
        description="Développement de logiciels sur mesure en Tunisie. Applications web, mobiles et desktop taillées pour vos besoins spécifiques."
        keywords="développement sur mesure, application web, application mobile, logiciel desktop, Tunisie"
        url="/developpement"
      />

      {/* 1. Hero Section - INTOUCHABLE */}
      <section className="relative py-24 bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <Code2 className="w-4 h-4" />
              <span>Solutions logicielles personnalisées</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Développement<br />
              <span className="text-primary-100">Sur Mesure.</span>
            </h1>

            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-white/90 font-bold text-lg">Web</span>
              <span className="text-white/40">|</span>
              <span className="text-white/90 font-bold text-lg">Mobile</span>
              <span className="text-white/40">|</span>
              <span className="text-white/90 font-bold text-lg">Logiciel</span>
            </div>

            <p className="text-xl text-primary-50 max-w-3xl mx-auto mb-10 leading-relaxed">
              Parce que votre entreprise est unique, vos logiciels doivent l'être aussi.
              Nous créons des solutions <strong className="text-white">taillées pour vos besoins spécifiques</strong>,
              de l'idée initiale jusqu'à la maintenance continue.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to={Page.Contact} className="px-8 py-4 bg-white text-primary-600 rounded-2xl font-bold hover:bg-primary-50 transition-all shadow-lg flex items-center justify-center space-x-2">
                <span>Discuter de mon projet</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#process"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-white/10 backdrop-blur text-white border border-white/30 rounded-2xl font-bold hover:bg-white/20 transition-all"
              >
                Voir le processus
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Systèmes de Gestion Sur Mesure */}
      <section className="py-24 bg-slate-50 dark:bg-dark-800 transition-colors overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary-50 dark:bg-primary-500/20 text-primary-600 dark:text-primary-300 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-widest">
              Expertise Métier
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
              Systèmes de Gestion Standard<span className="text-primary-500 dark:text-accent-400">Sur Mesure.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Nous concevons des outils de gestion puissants, exactement calibrés pour votre métier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Gestion de Stock & Logistique", desc: "Suivi temps réel, inventaires tournants, gestion multi-dépôts.", icon: <Database className="w-7 h-7" />, tags: ["Traceabilité", "QR Codes", "Alertes"] },
              { title: "CRM & Gestion Commerciale", desc: "De la prospection à la facturation. Suivi des opportunités.", icon: <Users className="w-7 h-7" />, tags: ["Pipeline", "Devis", "Factures"] },
              { title: "Finance & Comptabilité", desc: "Tableaux de bord financiers, suivi des dépenses, intégration bancaire.", icon: <LineChart className="w-7 h-7" />, tags: ["Trésorerie", "Bilan", "Rapprochement"] },
              { title: "Ressources Humaines (SIRH)", desc: "Portail employé, gestion des congés, notes de frais.", icon: <HeartHandshake className="w-7 h-7" />, tags: ["Paie", "Congés", "Onboarding"] },
              { title: "Reporting & BI", desc: "Centralisation des données et visualisation interactive.", icon: <LayoutDashboard className="w-7 h-7" />, tags: ["KPIs", "Export", "Prévisions"] }
            ].map((system, i) => (
              <div
                key={i}
                className="group relative bg-white dark:bg-dark-700 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-200 dark:border-slate-600"
              >
                {/* Subtle gradient top bar - brand colors */}
                <div className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>

                <div className="p-7">
                  {/* Header with icon and number */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-14 bg-primary-50 dark:bg-primary-500/20 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary-500 group-hover:to-accent-500 transition-all duration-300">
                      <div className="text-primary-500 dark:text-primary-400 group-hover:text-white transition-colors">
                        {system.icon}
                      </div>
                    </div>
                    <span className="text-5xl font-black text-slate-100 dark:text-slate-700 group-hover:text-primary-100 dark:group-hover:text-primary-300 transition-colors select-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white dark:group-hover:text-accent-300 transition-colors">
                    {system.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-5">
                    {system.desc}
                  </p>

                  {/* Tags - subtle and consistent */}
                  <div className="flex flex-wrap gap-2">
                    {system.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-600 text-slate-600 dark:text-slate-300 group-hover:bg-primary-50 group-hover:text-primary-600 dark:group-hover:bg-primary-500/20 dark:group-hover:text-primary-300 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subtle hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/5 group-hover:to-accent-500/5 transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Votre application partout */}
      <section className="py-24 bg-white dark:bg-dark-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent-50 dark:bg-accent-500/20 text-accent-600 dark:text-accent-300 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-widest">
              Multi-plateforme
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
              Votre application, <span className="text-primary-500 dark:text-accent-400">partout.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Selon vos contraintes techniques et usages, nous développons sur la plateforme idéale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Application Web", subtitle: "Accessible partout", icon: <Globe className="w-10 h-10" />, description: "Interface web responsive et sécurisée. Idéal pour le SaaS.", features: ["Zero installation", "Multi-navigateur", "Mises à jour instantanées", "PWA"], gradient: "from-primary-500 to-primary-600" },
              { title: "Application Mobile", subtitle: "iOS & Android", icon: <Smartphone className="w-10 h-10" />, description: "Applications natives pour le terrain. Expérience fluide.", features: ["Mode hors-ligne", "Notifications push", "Caméra/GPS", "Signature sur écran"], gradient: "from-accent-500 to-primary-500" },
              { title: "Logiciel Desktop", subtitle: "Windows, Mac, Linux", icon: <Monitor className="w-10 h-10" />, description: "Performance brute pour les tâches intensives.", features: ["Performance maximale", "Raccourcis clavier", "Gestion locale", "Connexion USB/Série"], gradient: "from-dark-700 to-dark-900" }
            ].map((platform, i) => (
              <div key={i} className="group relative bg-white dark:bg-dark-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-2xl transition-all">
                <div className={`h-48 bg-gradient-to-br ${platform.gradient} flex items-center justify-center text-white relative`}>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">{platform.icon}</div>
                    <h3 className="text-2xl font-bold">{platform.title}</h3>
                    <p className="text-white/80 text-sm">{platform.subtitle}</p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-slate-600 dark:text-slate-300 mb-6">{platform.description}</p>
                  <ul className="space-y-3">
                    {platform.features.map((feature, j) => (
                      <li key={j} className="flex items-center space-x-3 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span className="text-slate-700 dark:text-slate-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Technologies maîtrisées - CACHÉE pour simplifier la page
      <section className="py-16 bg-slate-100 dark:bg-dark-800 overflow-hidden">
        ...
      </section>
      */}

      {/* 5. Accompagnement Expert */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-500/15 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-accent-500/20 backdrop-blur border border-accent-400/30 text-accent-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></span>
                <span>Avantage Csolusoft</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                Un <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-primary-400">Accompagnement Expert</span> dédié à votre projet
              </h2>

              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Pour chaque projet, Csolusoft met à votre disposition <strong className="text-white">un expert métier expérimenté</strong> qui vous accompagne <strong className="text-white">de A à Z</strong>. Fort de plus de 20 ans d'expérience dans les systèmes de gestion, cet accompagnement vous garantit une solution parfaitement adaptée à vos besoins.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { title: "Clarification de vos besoins", desc: "Vous aide à formuler et prioriser vos besoins réels." },
                  { title: "Accompagnement continu", desc: "Présent à chaque étape clé du projet." },
                  { title: "Conseil stratégique", desc: "Recommande les fonctionnalités les plus pertinentes pour votre activité." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4 bg-white/5 backdrop-blur rounded-2xl p-4 border border-white/10">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-primary-500 rounded-xl flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/30 to-primary-500/30 rounded-[3rem] blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 md:p-10">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-500 rounded-2xl flex items-center justify-center text-white text-4xl font-serif shadow-lg">"</div>
                <div className="pt-4">
                  <p className="text-lg md:text-xl text-white/90 italic leading-relaxed mb-8">
                    « Beaucoup de clients savent qu'ils ont un problème, mais n'arrivent pas à le formuler clairement. Notre rôle est de les accompagner pour transformer leurs idées en un cahier des charges précis et actionnable. »
                  </p>
                  <div className="flex items-center space-x-4 pt-6 border-t border-white/10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                      <Users className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">Accompagnement Expert</h4>
                      <p className="text-accent-400 font-medium">+20 ans d'expérience métier</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
                  <div className="text-center"><div className="text-2xl font-extrabold text-white">20+</div><div className="text-xs text-slate-400 uppercase">Ans d'exp.</div></div>
                  <div className="text-center border-x border-white/10"><div className="text-2xl font-extrabold text-white">100%</div><div className="text-xs text-slate-400 uppercase">Dédié</div></div>
                  <div className="text-center"><div className="text-2xl font-extrabold text-white">A-Z</div><div className="text-xs text-slate-400 uppercase">Complet</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Comment nous travaillons - Amélioration visuelle */}
      <section id="process" className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-dark-900 dark:to-dark-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-accent-500 to-primary-500 text-white text-xs font-bold px-6 py-2 rounded-full mb-4 uppercase tracking-widest shadow-lg">
              📋 Notre approche
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
              Comment nous <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">travaillons</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Une méthodologie simple et efficace pour transformer vos besoins en solutions concrètes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectPhases.map((phase, i) => (
              <div key={i} className="group relative bg-white dark:bg-dark-800 rounded-3xl p-8 border-2 border-slate-100 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all hover:border-primary-300 dark:hover:border-primary-500/50 overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${phase.color} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                <div className="relative z-10 flex items-start gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                    {phase.icon}
                  </div>
                  <div className="flex-1">
                    <span className="inline-block text-xs font-bold text-white bg-slate-800 dark:bg-slate-600 px-3 py-1 rounded-full mb-2">{phase.phase}</span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{phase.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5">{phase.description}</p>
                    <ul className="space-y-2 mb-5">
                      {phase.activities.map((activity, j) => (
                        <li key={j} className="flex items-start space-x-2 text-sm text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-700">
                      {phase.deliverables.map((deliverable, j) => (
                        <span key={j} className="text-xs font-medium text-white bg-gradient-to-r from-primary-500 to-accent-500 px-3 py-1 rounded-full shadow-sm">{deliverable}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-500 to-accent-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[150px] opacity-10"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-300 rounded-full blur-[150px] opacity-20"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Prêt à concrétiser votre idée ?</h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Décrivez-nous votre projet. Nous vous recontactons sous 24h avec une première analyse et un devis estimatif gratuit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to={Page.Contact} className="px-10 py-5 bg-white text-primary-600 rounded-2xl font-bold text-lg hover:bg-primary-50 transition-all shadow-xl flex items-center justify-center space-x-2">
              <span>Démarrer mon projet</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="https://wa.me/21658874825" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white/10 text-white border border-white/30 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>
          <p className="text-primary-200 text-sm mt-8">✓ Analyse gratuite &nbsp; ✓ Devis sous 48h &nbsp; ✓ Sans engagement</p>
        </div>
      </section>
    </div>
  );
};

export default DevSurMesure;
