
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Target, Heart, Eye, Users, Award, TrendingUp, Globe, ArrowRight,
  Crosshair, Handshake, Zap, ShieldCheck, Code2, Smartphone, Cloud,
  BrainCircuit, Workflow, Sparkles, Monitor
} from 'lucide-react';
import { Page } from '../types';
import SEO from '../components/SEO';

const About: React.FC = () => {
  // Engagements avec icônes vectorielles
  const commitments = [
    { icon: <Crosshair className="w-8 h-8" />, label: 'Sur mesure', desc: 'Solutions 100% adaptées' },
    { icon: <Handshake className="w-8 h-8" />, label: 'Transparence', desc: 'Prix clairs, sans surprise' },
    { icon: <Zap className="w-8 h-8" />, label: 'Réactivité', desc: 'Réponse sous 24h' },
    { icon: <ShieldCheck className="w-8 h-8" />, label: 'Garantie', desc: 'Satisfaction assurée' },
  ];

  return (
    <div className="bg-white dark:bg-dark-900 transition-colors">
      <SEO
        title="À Propos"
        description="Découvrez CSoluSoft, votre partenaire en transformation digitale basé à Sfax, Tunisie. Une équipe de développeurs expérimentés et innovants."
        keywords="CSoluSoft, à propos, entreprise, Sfax, Tunisie, transformation digitale, équipe, développeurs"
        url="/a-propos"
      />

      {/* Hero */}
      <section className="py-24 bg-slate-50 dark:bg-dark-800 text-center transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-primary-50 dark:bg-primary-500/20 text-primary-600 dark:text-primary-300 text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
            Qui sommes-nous
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter">
            CSoluSoft : <br /><span className="text-primary-500 dark:text-accent-400">L'Architecte de votre Succès Digital.</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Fondée par des passionnés de technologie, notre mission est de simplifier la gestion des entreprises grâce à l'innovation logicielle.
          </p>
        </div>
      </section>

      {/* Engagements avec icônes vectorielles */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {commitments.map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:bg-white/30 group-hover:scale-110 transition-all">
                  {item.icon}
                </div>
                <div className="text-xl font-bold text-white mb-1">{item.label}</div>
                <div className="text-primary-100 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nouvelle section : Qui sommes-nous - Introduction de l'équipe */}
      <section className="py-24 bg-white dark:bg-dark-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Texte d'introduction */}
            <div>
              <span className="inline-block bg-accent-50 dark:bg-accent-500/20 text-accent-600 dark:text-accent-300 text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
                Notre ADN
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
                L'alliance de <span className="text-primary-500 dark:text-accent-400">l'expérience</span> et de <span className="text-primary-500 dark:text-accent-400">l'innovation</span>
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  Chez <strong className="text-slate-900 dark:text-white">CSoluSoft</strong>, nous réunissons des développeurs chevronnés, forts de plusieurs années d'expérience sur des projets complexes, et de jeunes talents passionnés par les nouvelles technologies.
                </p>
                <p>
                  Ce mélange unique nous permet de conjuguer <strong className="text-slate-900 dark:text-white">rigueur technique</strong> et <strong className="text-slate-900 dark:text-white">créativité</strong> pour concevoir des solutions adaptées aux défis actuels des entreprises.
                </p>
                <p>
                  Nos compétences couvrent le développement <strong className="text-slate-900 dark:text-white">web, mobile et logiciel</strong> — en mode cloud ou en installation locale — ainsi que l'intégration d'<strong className="text-slate-900 dark:text-white">intelligence artificielle</strong> et d'<strong className="text-slate-900 dark:text-white">automatisation intelligente</strong> pour transformer durablement votre activité.
                </p>
              </div>
            </div>

            {/* Grille des compétences visuelles */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Code2 className="w-7 h-7" />, label: "Web", desc: "Applications modernes", color: "from-blue-500 to-blue-600" },
                { icon: <Smartphone className="w-7 h-7" />, label: "Mobile", desc: "iOS & Android", color: "from-pink-500 to-purple-500" },
                { icon: <Monitor className="w-7 h-7" />, label: "Desktop", desc: "Logiciels robustes", color: "from-slate-600 to-slate-800" },
                { icon: <Cloud className="w-7 h-7" />, label: "Cloud", desc: "Ou en local", color: "from-cyan-500 to-blue-500" },
                { icon: <BrainCircuit className="w-7 h-7" />, label: "IA & GenAI", desc: "Sur mesure", color: "from-purple-500 to-indigo-600" },
                { icon: <Workflow className="w-7 h-7" />, label: "Automatisation", desc: "Évolutive", color: "from-green-500 to-teal-500" },
              ].map((item, i) => (
                <div key={i} className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl text-white group hover:scale-105 transition-transform cursor-default`}>
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3 group-hover:bg-white/30 transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-lg">{item.label}</h4>
                  <p className="text-white/80 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Phrase d'accroche */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-3 bg-slate-100 dark:bg-dark-800 px-8 py-4 rounded-2xl">
              <Sparkles className="w-6 h-6 text-accent-500" />
              <p className="text-lg font-medium text-slate-700 dark:text-slate-200">
                <strong>Notre objectif</strong> : vous offrir des outils qui simplifient votre quotidien et accélèrent votre croissance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Vision/Values */}
      <section className="py-24 bg-slate-50 dark:bg-dark-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="aspect-square bg-gradient-to-br from-primary-500 to-primary-600 rounded-[3rem] flex items-center justify-center shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
                <div className="text-center text-white relative z-10">
                  <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Globe className="w-12 h-12" />
                  </div>
                  <div className="text-2xl font-bold">Présents en Tunisie</div>
                  <div className="text-primary-50">& à l'international</div>
                </div>
              </div>
            </div>
            <div className="space-y-10">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary-50 dark:bg-primary-500/20 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary-500 dark:text-primary-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Notre Mission</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Rendre la technologie complexe accessible et utile à toutes les entreprises, peu importe leur taille ou leur secteur d'activité.
                </p>
              </div>
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary-50 dark:bg-primary-500/20 rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-primary-500 dark:text-primary-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Notre Vision</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Devenir le partenaire de référence pour la transformation digitale en combinant solutions sur mesure, IA et service client d'exception.
                </p>
              </div>
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary-50 dark:bg-primary-500/20 rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary-500 dark:text-primary-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Nos Valeurs</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['Intégrité', 'Innovation continue', 'Écoute client', 'Excellence technique'].map(v => (
                    <span key={v} className="bg-primary-50 dark:bg-primary-500/20 text-primary-600 dark:text-primary-300 px-4 py-2 rounded-full font-bold text-sm">
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white dark:bg-dark-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">Pourquoi nous choisir ?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all bg-white dark:bg-dark-800">
              <Award className="w-10 h-10 text-primary-500 dark:text-accent-400 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Expertise solide</h3>
              <p className="text-slate-600 dark:text-slate-400">Une équipe qui combine expérience terrain et maîtrise des technologies modernes.</p>
            </div>
            <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all bg-white dark:bg-dark-800">
              <Users className="w-10 h-10 text-primary-500 dark:text-accent-400 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Approche humaine</h3>
              <p className="text-slate-600 dark:text-slate-400">Un interlocuteur dédié et une communication transparente à chaque étape.</p>
            </div>
            <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all bg-white dark:bg-dark-800">
              <TrendingUp className="w-10 h-10 text-primary-500 dark:text-accent-400 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">ROI mesurable</h3>
              <p className="text-slate-600 dark:text-slate-400">Des solutions qui génèrent des résultats concrets et mesurables.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Rejoignez l'aventure CSoluSoft
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Que vous soyez client ou futur collaborateur, nous serions ravis d'échanger avec vous.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to={Page.Contact}
              className="px-8 py-4 bg-accent-500 text-white rounded-2xl font-bold hover:bg-accent-600 transition-all flex items-center justify-center space-x-2"
            >
              <span>Nous contacter</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="mailto:careers@csolusoft.com"
              className="px-8 py-4 bg-white/10 text-white rounded-2xl font-bold hover:bg-white/20 transition-all"
            >
              Rejoindre l'équipe
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
