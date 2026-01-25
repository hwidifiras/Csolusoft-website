
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code2, Workflow, Lightbulb, Settings2, ShieldCheck, HeartHandshake,
  MessageSquare, FileSearch, Palette, Layers, TestTube, Rocket,
  LifeBuoy, ArrowRight, CheckCircle2, Clock, Users, Zap, Target,
  GitBranch, Database, Globe, Smartphone, Monitor, Server,
  BarChart3, LayoutDashboard, LineChart, Table, MessageCircle
} from 'lucide-react';
import { Page } from '../types';
import SEO from '../components/SEO';

const DevSurMesure: React.FC = () => {
  // Detailed project phases for case study
  const projectPhases = [
    {
      phase: "Phase 1",
      title: "Découverte & Cadrage",
      duration: "1-2 semaines",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "bg-blue-500",
      description: "Nous commençons par comprendre en profondeur votre métier, vos défis et vos objectifs.",
      activities: [
        "Réunion de lancement avec vos équipes clés",
        "Analyse de vos processus métier actuels",
        "Identification des points de friction",
        "Définition des objectifs mesurables",
        "Étude de votre environnement technique existant"
      ],
      deliverables: ["Compte-rendu de cadrage", "Liste des besoins prioritaires", "Planning prévisionnel"]
    },
    {
      phase: "Phase 2",
      title: "Analyse & Spécifications",
      duration: "2-3 semaines",
      icon: <FileSearch className="w-6 h-6" />,
      color: "bg-purple-500",
      description: "Nous traduisons vos besoins en spécifications techniques détaillées.",
      activities: [
        "Rédaction des user stories détaillées",
        "Modélisation des flux de données",
        "Définition de l'architecture technique",
        "Choix des technologies adaptées",
        "Estimation des coûts et délais"
      ],
      deliverables: ["Cahier des charges fonctionnel", "Architecture technique", "Devis détaillé"]
    },
    {
      phase: "Phase 3",
      title: "Design UX/UI",
      duration: "1-2 semaines",
      icon: <Palette className="w-6 h-6" />,
      color: "bg-pink-500",
      description: "Nous concevons des interfaces intuitives et esthétiques adaptées à vos utilisateurs.",
      activities: [
        "Création des wireframes (maquettes fil de fer)",
        "Design de l'interface utilisateur complète",
        "Prototypage interactif cliquable",
        "Tests d'ergonomie préliminaires",
        "Validation du design avec vos équipes"
      ],
      deliverables: ["Maquettes Figma/Adobe XD", "Prototype interactif", "Guide de style"]
    },
    {
      phase: "Phase 4",
      title: "Développement Agile",
      duration: "4-12 semaines",
      icon: <Code2 className="w-6 h-6" />,
      color: "bg-green-500",
      description: "Nous développons votre solution par itérations avec des démonstrations régulières.",
      activities: [
        "Sprints de développement de 2 semaines",
        "Démonstrations bi-hebdomadaires",
        "Intégration continue et tests automatisés",
        "Revues de code systématiques",
        "Feedback et ajustements en temps réel"
      ],
      deliverables: ["Versions intermédiaires fonctionnelles", "Rapports de sprint", "Documentation technique"]
    },
    {
      phase: "Phase 5",
      title: "Tests & Qualité",
      duration: "1-2 semaines",
      icon: <TestTube className="w-6 h-6" />,
      color: "bg-orange-500",
      description: "Nous vérifions rigoureusement que tout fonctionne parfaitement avant la mise en production.",
      activities: [
        "Tests fonctionnels complets",
        "Tests de performance et charge",
        "Tests de sécurité (OWASP)",
        "Tests sur différents appareils/navigateurs",
        "Correction des bugs identifiés"
      ],
      deliverables: ["Rapport de tests", "Certificat de conformité", "Version candidate finale"]
    },
    {
      phase: "Phase 6",
      title: "Déploiement & Lancement",
      duration: "1 semaine",
      icon: <Rocket className="w-6 h-6" />,
      color: "bg-red-500",
      description: "Nous mettons votre solution en production et formons vos équipes.",
      activities: [
        "Configuration des serveurs de production",
        "Migration des données existantes",
        "Formation des utilisateurs finaux",
        "Documentation utilisateur",
        "Surveillance post-déploiement"
      ],
      deliverables: ["Application en production", "Guides utilisateurs", "Accès administrateur"]
    },
    {
      phase: "Phase 7",
      title: "Support & Évolution",
      duration: "Continu",
      icon: <LifeBuoy className="w-6 h-6" />,
      color: "bg-teal-500",
      description: "Nous restons à vos côtés pour maintenir et faire évoluer votre solution.",
      activities: [
        "Support technique réactif",
        "Maintenance corrective et préventive",
        "Mises à jour de sécurité",
        "Développement de nouvelles fonctionnalités",
        "Optimisations continues"
      ],
      deliverables: ["Contrat de maintenance", "SLA garanti", "Roadmap évolutive"]
    }
  ];

  const techStack = [
    { category: "Frontend", techs: ["React", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"] },
    { category: "Mobile", techs: ["React Native", "Flutter", "Swift", "Kotlin"] },
    { category: "Backend", techs: ["Node.js", "Python", "Java", ".NET", "PHP"] },
    { category: "Base de données", techs: ["PostgreSQL", "MongoDB", "MySQL", "Redis"] },
    { category: "Cloud", techs: ["AWS", "Azure", "Google Cloud", "DigitalOcean"] },
    { category: "DevOps", techs: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions"] }
  ];

  const projectTypes = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Applications Web",
      description: "Plateformes SaaS, portails clients, applications métier complexes accessibles depuis n'importe quel navigateur.",
      examples: ["ERP sur mesure", "Portail client B2B", "Plateforme e-commerce", "Dashboard analytics"],
      gradient: "from-blue-500 to-primary-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Applications Mobiles",
      description: "Applications iOS et Android natives ou hybrides pour accompagner vos équipes et clients en mobilité.",
      examples: ["App de gestion terrain", "Application client", "App de livraison", "Scanner inventaire"],
      gradient: "from-pink-500 to-purple-500"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Logiciels Desktop",
      description: "Logiciels installables Windows, Mac et Linux pour une utilisation intensive et hors-ligne.",
      examples: ["Logiciel de caisse", "Outil de production", "Application comptable", "Gestion d'atelier"],
      gradient: "from-slate-600 to-slate-800"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "APIs & Intégrations",
      description: "Connectez vos systèmes existants et automatisez vos flux de données entre applications.",
      examples: ["API REST/GraphQL", "Connecteurs ERP", "Webhooks", "Synchronisation cloud"],
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <div className="bg-white dark:bg-dark-900 transition-colors">
      <SEO
        title="Développement Sur Mesure"
        description="Développement de logiciels sur mesure en Tunisie. Applications web, mobiles et desktop taillées pour vos besoins spécifiques. De l'analyse à la maintenance."
        keywords="développement sur mesure, application web, application mobile, logiciel desktop, Tunisie, développeur"
        url="/developpement"
      />

      {/* Hero Section */}
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

            {/* Platform Highlights */}
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
              <a href="#process" className="px-8 py-4 bg-white/10 backdrop-blur text-white border border-white/30 rounded-2xl font-bold hover:bg-white/20 transition-all">
                Voir le processus
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 bg-white dark:bg-dark-900 border-b border-slate-100 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Target className="w-6 h-6" />, title: "100% sur mesure", desc: "Adapté à VOS processus" },
              { icon: <Clock className="w-6 h-6" />, title: "Livraisons rapides", desc: "Sprints de 2 semaines" },
              { icon: <Users className="w-6 h-6" />, title: "Équipe dédiée", desc: "Interlocuteur unique" },
              { icon: <Zap className="w-6 h-6" />, title: "Technologies modernes", desc: "Stack performant" },
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-4 p-4">
                <div className="w-12 h-12 bg-primary-50 dark:bg-primary-500/20 rounded-xl flex items-center justify-center text-primary-500 dark:text-primary-400">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Choices Section - from ERP */}
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
              Selon vos contraintes techniques et usages, nous développons sur la plateforme idéale pour votre activité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Application Web",
                subtitle: "Accessible partout",
                icon: <Globe className="w-10 h-10" />,
                description: "Interface web responsive et sécurisée. Idéal pour le SaaS, les portails clients et la gestion à distance.",
                features: ["Zero installation", "Multi-navigateur", "Mises à jour instantanées", "PWA (Progressive Web App)"],
                gradient: "from-primary-500 to-primary-600"
              },
              {
                title: "Application Mobile",
                subtitle: "iOS & Android",
                icon: <Smartphone className="w-10 h-10" />,
                description: "Applications natives pour le terrain. Offrez une expérience fluide à vos équipes mobiles et clients.",
                features: ["Mode hors-ligne", "Notifications push", "Utilisation caméra/GPS", "Signature sur écran"],
                gradient: "from-accent-500 to-primary-500"
              },
              {
                title: "Logiciel Desktop",
                subtitle: "Windows, Mac, Linux",
                icon: <Monitor className="w-10 h-10" />,
                description: "Performance brute pour les tâches intensives. Connexion directe aux machines et périphériques matériels.",
                features: ["Performance maximale", "Raccourcis clavier", "Gestion locale fichiers", "Connexion périphériques USB/Série"],
                gradient: "from-dark-700 to-dark-900"
              }
            ].map((platform, i) => (
              <div key={i} className="group relative bg-white dark:bg-dark-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className={`h-48 bg-gradient-to-br ${platform.gradient} flex items-center justify-center text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      {platform.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{platform.title}</h3>
                    <p className="text-white/80 text-sm">{platform.subtitle}</p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{platform.description}</p>
                  <ul className="space-y-3">
                    {platform.features.map((feature, j) => (
                      <li key={j} className="flex items-center space-x-3 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 dark:text-green-400 shrink-0" />
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

      {/* Systèmes complexes Section - Replacement for Project Types */}
      <section className="py-24 bg-slate-50 dark:bg-dark-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary-50 dark:bg-primary-500/20 text-primary-600 dark:text-primary-300 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-widest">
              Expertise Métier
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
              Systèmes de Gestion <span className="text-primary-500 dark:text-accent-400">Sur Mesure.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Nous concevons des outils de gestion puissants, capables de remplacer ou de compléter un ERP standard, exactement calibrés pour votre métier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Gestion de Stock & Logistique",
                desc: "Suivi temps réel, inventaires tournants, gestion multi-dépôts et expéditions.",
                icon: <Database className="w-8 h-8" />,
                tags: ["Traceabilité", "QR Codes", "Alertes"]
              },
              {
                title: "CRM & Gestion Commerciale",
                desc: "De la prospection à la facturation. Suivi des opportunités et pipe commercial.",
                icon: <Users className="w-8 h-8" />,
                tags: ["Pipeline", "Devis", "Factures"]
              },
              {
                title: "Finance & Comptabilité",
                desc: "Tableaux de bord financiers, suivi des dépenses, intégration bancaire et déclarations.",
                icon: <LineChart className="w-8 h-8" />,
                tags: ["Trésorerie", "Bilan", "Rapprochement"]
              },
              {
                title: "Production (GPAO)",
                desc: "Ordres de fabrication, nomenclatures, planification et suivi qualité.",
                icon: <Settings2 className="w-8 h-8" />,
                tags: ["Planning", "Coûts", "Qualité"]
              },
              {
                title: "Ressources Humaines (SIRH)",
                desc: "Portail employé, gestion des congés, notes de frais et évaluations.",
                icon: <HeartHandshake className="w-8 h-8" />,
                tags: ["Paie", "Congés", "Onboarding"]
              },
              {
                title: "Reporting & BI",
                desc: "Centralisation des données et visualisation interactive pour la décision.",
                icon: <LayoutDashboard className="w-8 h-8" />,
                tags: ["KPIs", "Export", "Prévisions"]
              }
            ].map((system, i) => (
              <div key={i} className="group bg-white dark:bg-dark-700 p-8 rounded-3xl border border-slate-200 dark:border-slate-600 hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-500/30 transition-all">
                <div className="w-16 h-16 bg-primary-50 dark:bg-primary-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-500 group-hover:scale-110 transition-all">
                  <div className="text-primary-500 dark:text-primary-400 group-hover:text-white transition-colors">
                    {system.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{system.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">{system.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {system.tags.map((tag, j) => (
                    <span key={j} className="text-xs font-medium text-primary-600 dark:text-primary-300 bg-primary-50 dark:bg-primary-500/20 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-slate-100 dark:bg-dark-700 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Pourquoi développer votre propre système ?</h3>
            <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              Contrairement aux ERP standards coûteux et rigides, une solution sur mesure s'adapte à 100% à vos processus, sans fonctionnalités superflues, et évolue à votre rythme. Pas de licence par utilisateur, le logiciel vous appartient.
            </p>
            <Link to={Page.Contact} className="inline-flex items-center space-x-2 bg-primary-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-primary-600 hover:shadow-white/20 hover:shadow-lg transition-all border-2 border-transparent hover:border-primary-100">
              <span>Étudier mon besoin ERP</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CASE STUDY: Step by Step Process */}
      <section id="process" className="py-24 bg-white dark:bg-dark-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent-50 dark:bg-accent-500/20 text-accent-600 dark:text-accent-300 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-widest">
              📋 Notre méthodologie
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
              Comment se déroule <span className="text-primary-500 dark:text-accent-400">votre projet ?</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Du premier contact jusqu'à la mise en production, voici les étapes clés de notre collaboration.
              <strong className="text-slate-800 dark:text-white"> Transparence totale sur le processus.</strong>
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Central line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500 transform -translate-x-1/2"></div>

            <div className="space-y-12 lg:space-y-24">
              {projectPhases.map((phase, i) => (
                <div key={i} className={`relative flex flex-col lg:flex-row items-center gap-8 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                  {/* Phase indicator (center on desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-16 h-16 ${phase.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                      {phase.icon}
                    </div>
                  </div>

                  {/* Content card */}
                  <div className={`w-full lg:w-5/12 ${i % 2 === 1 ? 'lg:text-right' : ''}`}>
                    <div className="bg-white dark:bg-dark-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-shadow">
                      {/* Mobile phase indicator */}
                      <div className="lg:hidden flex items-center space-x-4 mb-6">
                        <div className={`w-12 h-12 ${phase.color} rounded-xl flex items-center justify-center text-white`}>
                          {phase.icon}
                        </div>
                        <div>
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{phase.phase}</span>
                          <p className="text-sm text-slate-500 dark:text-slate-400">⏱️ {phase.duration}</p>
                        </div>
                      </div>

                      {/* Desktop header */}
                      <div className={`hidden lg:flex items-center space-x-3 mb-4 ${i % 2 === 1 ? 'justify-end' : ''}`}>
                        <span className={`text-xs font-bold text-white ${phase.color} px-3 py-1 rounded-full`}>{phase.phase}</span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">⏱️ {phase.duration}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{phase.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{phase.description}</p>

                      {/* Activities */}
                      <div className="mb-6">
                        <h4 className={`text-sm font-bold text-slate-700 dark:text-slate-200 mb-3 ${i % 2 === 1 ? 'lg:text-right' : ''}`}>
                          Ce que nous faisons :
                        </h4>
                        <ul className="space-y-2">
                          {phase.activities.map((activity, j) => (
                            <li key={j} className={`flex items-start space-x-2 text-sm text-slate-600 dark:text-slate-400 ${i % 2 === 1 ? 'lg:flex-row-reverse lg:space-x-reverse' : ''}`}>
                              <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Deliverables */}
                      <div className={`pt-4 border-t border-slate-100 dark:border-slate-700 ${i % 2 === 1 ? 'lg:text-right' : ''}`}>
                        <h4 className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-2">📦 Livrables :</h4>
                        <div className={`flex flex-wrap gap-2 ${i % 2 === 1 ? 'lg:justify-end' : ''}`}>
                          {phase.deliverables.map((deliverable, j) => (
                            <span key={j} className="text-xs font-medium text-primary-600 dark:text-primary-300 bg-primary-50 dark:bg-primary-500/20 px-3 py-1 rounded-full">
                              {deliverable}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Example Case Study */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent-500/20 text-accent-300 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-widest">
              💼 Exemple concret
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Cas client : Application de gestion pour une PME industrielle
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Découvrez comment nous avons accompagné une entreprise de 50 employés dans sa digitalisation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Context */}
            <div className="bg-white/5 backdrop-blur rounded-3xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center text-red-400 mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">🎯 Le problème</h3>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-red-400">•</span>
                  <span>Gestion des stocks sur Excel avec erreurs fréquentes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-400">•</span>
                  <span>Pas de visibilité temps réel sur la production</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-400">•</span>
                  <span>Factures manuelles non conformes TEIF</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-400">•</span>
                  <span>Communication difficile entre ateliers et bureau</span>
                </li>
              </ul>
            </div>

            {/* Solution */}
            <div className="bg-white/5 backdrop-blur rounded-3xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center text-primary-400 mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">💡 Notre solution</h3>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-primary-400">✓</span>
                  <span>Application web pour le bureau (gestion centralisée)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-400">✓</span>
                  <span>Application tablette pour les ateliers (saisie temps réel)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-400">✓</span>
                  <span>Module facturation conforme TEIF intégré</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-400">✓</span>
                  <span>Dashboards de suivi production en temps réel</span>
                </li>
              </ul>
            </div>

            {/* Results */}
            <div className="bg-white/5 backdrop-blur rounded-3xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">📈 Les résultats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-sm">Erreurs de stock</span>
                  <span className="text-green-400 font-bold">-85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-sm">Temps de facturation</span>
                  <span className="text-green-400 font-bold">-70%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-sm">Productivité équipes</span>
                  <span className="text-green-400 font-bold">+35%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-sm">Délai de livraison projet</span>
                  <span className="text-accent-400 font-bold">8 semaines</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-4">Vous avez un projet similaire ?</p>
            <Link to={Page.Contact} className="inline-flex items-center space-x-2 bg-accent-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-accent-600 transition-all">
              <span>Discutons de votre projet</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-white dark:bg-dark-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
              Technologies <span className="text-primary-500 dark:text-accent-400">maîtrisées</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Nous choisissons toujours la technologie la plus adaptée à votre projet, pas notre préférée.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((stack, i) => (
              <div key={i} className="bg-slate-50 dark:bg-dark-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-4">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.techs.map((tech, j) => (
                    <span key={j} className="text-sm font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-dark-700 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-600">
                      {tech}
                    </span>
                  ))}
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
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Prêt à concrétiser votre idée ?
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Décrivez-nous votre projet. Nous vous recontactons sous 24h avec une première analyse et un devis estimatif gratuit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to={Page.Contact}
              className="px-10 py-5 bg-white text-primary-600 rounded-2xl font-bold text-lg hover:bg-primary-50 transition-all shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Démarrer mon projet</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/21658874825"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-white/10 text-white border border-white/30 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>
          <p className="text-primary-200 text-sm mt-8">
            ✓ Analyse gratuite &nbsp; ✓ Devis sous 48h &nbsp; ✓ Sans engagement
          </p>
        </div>
      </section>
    </div>
  );
};

export default DevSurMesure;
