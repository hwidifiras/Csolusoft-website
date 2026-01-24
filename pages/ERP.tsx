
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Database, LineChart, BarChart3, LayoutDashboard, Layers, TrendingUp,
  Globe, Smartphone, Monitor, CheckCircle2, ArrowRight, Zap, Shield,
  Users, Settings, Cloud, Package, CreditCard, Truck, FileText, PieChart,
  Building2, Factory, ShoppingCart, Stethoscope, Utensils
} from 'lucide-react';
import { Page } from '../types';

const ERP: React.FC = () => {
  const modules = [
    {
      title: "Gestion de stock & logistique",
      description: "Suivi des mouvements, inventaires tournants, alertes de seuil et gestion multi-entrepôts.",
      icon: <Database className="w-8 h-8 text-primary-500" />,
      features: ["Inventaire temps réel", "Multi-entrepôts", "Alertes automatiques", "Traçabilité complète"]
    },
    {
      title: "Gestion comptable & financière",
      description: "Saisie automatisée, écritures analytiques, bilans et intégration des flux bancaires.",
      icon: <LineChart className="w-8 h-8 text-primary-500" />,
      features: ["Plan comptable tunisien", "Déclarations fiscales", "Rapprochement bancaire", "Multi-devises"]
    },
    {
      title: "Gestion commerciale",
      description: "De la prospection à la facturation : CRM, devis, bons de commande et catalogues produits.",
      icon: <BarChart3 className="w-8 h-8 text-primary-500" />,
      features: ["CRM intégré", "Devis & factures", "Suivi des ventes", "Catalogue produits"]
    },
    {
      title: "Reporting & tableaux de bord",
      description: "Visualisation de données interactive et rapports personnalisables pour un pilotage agile.",
      icon: <LayoutDashboard className="w-8 h-8 text-primary-500" />,
      features: ["Dashboards temps réel", "KPIs personnalisés", "Export PDF/Excel", "Prévisions IA"]
    },
    {
      title: "Ressources humaines",
      description: "Gestion des employés, paie, congés, présences et évaluations de performance.",
      icon: <Users className="w-8 h-8 text-primary-500" />,
      features: ["Fiches employés", "Calcul paie CNSS", "Gestion congés", "Pointage digital"]
    },
    {
      title: "Production & Manufacturing",
      description: "Planification de production, ordres de fabrication, nomenclatures et contrôle qualité.",
      icon: <Settings className="w-8 h-8 text-primary-500" />,
      features: ["Ordres de fabrication", "Nomenclatures", "Contrôle qualité", "Planification MRP"]
    }
  ];

  const platforms = [
    {
      title: "Application Web",
      subtitle: "Accessible partout",
      icon: <Globe className="w-10 h-10" />,
      description: "Interface web responsive accessible depuis n'importe quel navigateur. Travaillez depuis le bureau, à domicile ou en déplacement.",
      features: ["Responsive design", "Multi-navigateur", "Accès sécurisé HTTPS", "Mises à jour automatiques"],
      gradient: "from-primary-500 to-primary-600"
    },
    {
      title: "Application Mobile",
      subtitle: "iOS & Android",
      icon: <Smartphone className="w-10 h-10" />,
      description: "Applications natives pour smartphone et tablette. Consultez vos données, validez des commandes et suivez votre activité en mobilité.",
      features: ["Mode hors-ligne", "Notifications push", "Scanner de codes-barres", "Signature électronique"],
      gradient: "from-accent-500 to-primary-500"
    },
    {
      title: "Logiciel Desktop",
      subtitle: "Windows, Mac, Linux",
      icon: <Monitor className="w-10 h-10" />,
      description: "Logiciel installable pour une utilisation intensive. Performance optimale pour les tâches lourdes comme la comptabilité et la production.",
      features: ["Performance maximale", "Raccourcis clavier", "Impression directe", "Connexion périphériques"],
      gradient: "from-dark-700 to-dark-900"
    }
  ];

  const industries = [
    { name: "Commerce & Distribution", icon: <ShoppingCart className="w-6 h-6" />, desc: "Retail, grossistes, e-commerce" },
    { name: "Industrie & Manufacturing", icon: <Factory className="w-6 h-6" />, desc: "Production, usines, ateliers" },
    { name: "Services & Consulting", icon: <Building2 className="w-6 h-6" />, desc: "Cabinets, agences, prestations" },
    { name: "Santé & Pharmacie", icon: <Stethoscope className="w-6 h-6" />, desc: "Cliniques, pharmacies, laboratoires" },
    { name: "Restauration & Hôtellerie", icon: <Utensils className="w-6 h-6" />, desc: "Restaurants, hôtels, catering" },
  ];

  const stats = [
    { value: "500+", label: "Entreprises équipées" },
    { value: "15+", label: "Modules disponibles" },
    { value: "99.9%", label: "Disponibilité garantie" },
    { value: "24/7", label: "Support technique" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section Enhanced */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-primary-50/30 to-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwNTU0YmQiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <Zap className="w-4 h-4" />
              <span>Solution ERP complète & modulaire</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
              L'ERP qui s'adapte à <span className="text-primary-500">vos besoins.</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
              Fini les logiciels rigides. Notre ERP sur mesure évolue avec votre entreprise : 
              <strong className="text-slate-800"> Web, Mobile ou Desktop</strong> — vous choisissez la plateforme, nous développons la solution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to={Page.Contact} className="px-8 py-4 bg-primary-500 text-white rounded-2xl font-bold hover:bg-primary-600 transition-all shadow-lg shadow-primary-200 flex items-center justify-center space-x-2">
                <span>Demander une démo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="#modules" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                Voir les modules
              </a>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-500 rounded-full blur-[100px] opacity-10"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent-500 rounded-full blur-[100px] opacity-10"></div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-white">{stat.value}</div>
                <div className="text-primary-100 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Choices Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent-50 text-accent-600 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-widest">
              Multi-plateforme
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Votre ERP, <span className="text-primary-500">partout.</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Selon vos besoins et votre façon de travailler, nous déployons votre solution sur la plateforme idéale — ou sur les trois à la fois.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, i) => (
              <div key={i} className="group relative bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
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
                  <p className="text-slate-600 mb-6 leading-relaxed">{platform.description}</p>
                  <ul className="space-y-3">
                    {platform.features.map((feature, j) => (
                      <li key={j} className="flex items-center space-x-3 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-3 bg-slate-100 px-6 py-4 rounded-2xl">
              <Shield className="w-6 h-6 text-primary-500" />
              <span className="text-slate-700 font-medium">Toutes les plateformes synchronisées en temps réel avec vos données centralisées</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section Enhanced */}
      <section id="modules" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary-50 text-primary-600 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-widest">
              Modules fonctionnels
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Une solution <span className="text-primary-500">complète.</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choisissez uniquement les modules dont vous avez besoin. Notre architecture modulaire vous permet de démarrer simple et d'évoluer progressivement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((m, i) => (
              <div key={i} className="group bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl hover:border-primary-200 transition-all">
                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-500 group-hover:scale-110 transition-all">
                  <div className="group-hover:text-white transition-colors">
                    {m.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{m.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{m.description}</p>
                <div className="flex flex-wrap gap-2">
                  {m.features.map((feature, j) => (
                    <span key={j} className="text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-500 mb-4">Besoin d'un module spécifique ?</p>
            <Link to={Page.Contact} className="inline-flex items-center space-x-2 text-primary-500 font-bold hover:text-primary-600 transition-colors">
              <span>Contactez-nous pour un développement sur mesure</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="inline-block bg-accent-50 text-accent-600 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-widest">
                Secteurs d'activité
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                Adapté à <span className="text-primary-500">votre métier.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Chaque secteur a ses spécificités. Notre ERP intègre des fonctionnalités métier préconfigurées pour vous faire gagner du temps dès le premier jour.
              </p>
              <div className="space-y-4">
                {industries.map((industry, i) => (
                  <div key={i} className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-50 hover:bg-primary-50 transition-colors group cursor-default">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all shadow-sm">
                      {industry.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{industry.name}</h4>
                      <p className="text-sm text-slate-500">{industry.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-[3rem] p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">Fonctionnalités clés incluses</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: <Package className="w-5 h-5" />, label: "Gestion des stocks" },
                      { icon: <CreditCard className="w-5 h-5" />, label: "Facturation TEIF" },
                      { icon: <Truck className="w-5 h-5" />, label: "Logistique & livraison" },
                      { icon: <FileText className="w-5 h-5" />, label: "Documents légaux" },
                      { icon: <PieChart className="w-5 h-5" />, label: "Analytics avancés" },
                      { icon: <Cloud className="w-5 h-5" />, label: "Sauvegarde Cloud" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-3 bg-white/10 rounded-xl px-4 py-3">
                        {item.icon}
                        <span className="text-sm font-medium">{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <p className="text-primary-100 text-sm mb-4">Conforme à la réglementation tunisienne</p>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-300" />
                      <span className="font-medium">Compatible facturation électronique 2026</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
             <h2 className="text-4xl font-bold mb-8">Un déploiement en 3 étapes.</h2>
             <div className="space-y-12">
                <div className="flex space-x-6">
                   <div className="text-4xl font-black text-accent-500 opacity-50">01</div>
                   <div>
                      <h4 className="text-xl font-bold mb-2">Analyse & Audit</h4>
                      <p className="text-slate-300">Nous étudions vos processus actuels pour identifier les zones d'optimisation.</p>
                   </div>
                </div>
                <div className="flex space-x-6">
                   <div className="text-4xl font-black text-accent-500 opacity-50">02</div>
                   <div>
                      <h4 className="text-xl font-bold mb-2">Paramétrage & Migration</h4>
                      <p className="text-slate-300">Configuration sur mesure et transfert sécurisé de vos données historiques.</p>
                   </div>
                </div>
                <div className="flex space-x-6">
                   <div className="text-4xl font-black text-accent-500 opacity-50">03</div>
                   <div>
                      <h4 className="text-xl font-bold mb-2">Formation & Support</h4>
                      <p className="text-slate-300">Accompagnement de vos collaborateurs pour une adoption rapide et efficace.</p>
                   </div>
                </div>
             </div>
          </div>
          <div className="lg:w-1/2">
             <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-12 rounded-[3rem] shadow-2xl relative">
                <Layers className="w-16 h-16 text-white/20 absolute top-8 right-8" />
                <h3 className="text-3xl font-bold mb-6">Évolutivité sans limite</h3>
                <p className="text-primary-50 leading-relaxed mb-8">
                   Notre ERP est conçu pour grandir avec vous. Ajoutez des modules, connectez des APIs tiers et faites évoluer vos outils au rythme de votre croissance.
                </p>
                <Link to="/contact" className="inline-block bg-white text-primary-600 px-8 py-3 rounded-xl font-bold hover:bg-primary-50 transition-all">
                  Discuter de vos besoins Cloud
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Pourquoi choisir <span className="text-primary-500">CSoluSoft</span> ?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: "🎯", 
                title: "Sur mesure", 
                desc: "Pas de solution générique. Votre ERP est développé selon vos processus métier." 
              },
              { 
                icon: "🇹🇳", 
                title: "Expertise locale", 
                desc: "Conformité tunisienne garantie : CNSS, TVA, facturation électronique TEIF." 
              },
              { 
                icon: "🚀", 
                title: "Déploiement rapide", 
                desc: "De l'analyse au go-live en 4 à 8 semaines selon la complexité du projet." 
              },
              { 
                icon: "🤝", 
                title: "Accompagnement", 
                desc: "Formation sur site, support dédié et évolutions continues post-déploiement." 
              },
            ].map((item, i) => (
              <div key={i} className="text-center p-6">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Relatifs */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Articles & Ressources ERP</h2>
            <p className="text-lg text-slate-600">Approfondissez vos connaissances sur la gestion d'entreprise</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/blog/erp-moderne-vs-excel-pourquoi-migrer" className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all">
              <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                <Database className="w-16 h-16 text-white/80" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-primary-500 uppercase tracking-wide">ERP & Gestion</span>
                <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3 group-hover:text-primary-500 transition-colors">ERP Moderne vs Excel : 7 Raisons de Migrer en 2026</h3>
                <p className="text-slate-600 text-sm">Découvrez pourquoi 2026 est l'année idéale pour adopter un ERP moderne.</p>
              </div>
            </Link>
            <Link to="/blog/transformation-digitale-pme-tunisie" className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all">
              <div className="h-48 bg-gradient-to-br from-accent-500 to-primary-500 flex items-center justify-center">
                <TrendingUp className="w-16 h-16 text-white/80" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-accent-500 uppercase tracking-wide">Transformation Digitale</span>
                <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3 group-hover:text-primary-500 transition-colors">Transformation Digitale des PME Tunisiennes</h3>
                <p className="text-slate-600 text-sm">Un guide pratique pour digitaliser votre entreprise étape par étape.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent-500 rounded-full blur-[150px] opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-300 rounded-full blur-[150px] opacity-20"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Prêt à digitaliser votre gestion ?
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Discutons de vos besoins. Nous vous proposerons une solution ERP parfaitement adaptée à votre activité, votre budget et vos ambitions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to={Page.Contact}
              className="px-10 py-5 bg-white text-primary-600 rounded-2xl font-bold text-lg hover:bg-primary-50 transition-all shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Demander une démo gratuite</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="tel:+21612345678"
              className="px-10 py-5 bg-white/10 text-white border border-white/30 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center space-x-2"
            >
              <span>📞 +216 12 345 678</span>
            </a>
          </div>
          <p className="text-primary-200 text-sm mt-8">
            ✓ Démo personnalisée &nbsp; ✓ Devis sous 24h &nbsp; ✓ Sans engagement
          </p>
        </div>
      </section>
    </div>
  );
};

export default ERP;
