
import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Heart, Eye, Users, Award, TrendingUp, Globe, ArrowRight } from 'lucide-react';
import { Page } from '../types';

const About: React.FC = () => {
  const stats = [
    { value: '150+', label: 'Projets livrés' },
    { value: '50+', label: 'Clients satisfaits' },
    { value: '99%', label: 'Taux de satisfaction' },
    { value: '24/7', label: 'Support client' },
  ];

  const team = [
    { name: 'Ahmed B.', role: 'CEO & Fondateur', initials: 'AB' },
    { name: 'Sophie M.', role: 'Directrice Technique', initials: 'SM' },
    { name: 'Lucas P.', role: 'Lead Developer', initials: 'LP' },
    { name: 'Marie D.', role: 'UX Designer', initials: 'MD' },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-24 bg-slate-50 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
            Qui sommes-nous
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">
            CSoluSoft : <br/><span className="text-blue-600">L'Architecte de votre Succès Digital.</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Fondée par des passionnés de technologie, notre mission est de simplifier la gestion des entreprises grâce à l'innovation logicielle.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission/Vision/Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                 <div className="aspect-square bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] flex items-center justify-center shadow-2xl relative overflow-hidden">
                   <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
                   <div className="text-center text-white relative z-10">
                     <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                       <Globe className="w-12 h-12" />
                     </div>
                     <div className="text-2xl font-bold">Présents en France</div>
                     <div className="text-blue-100">& à l'international</div>
                   </div>
                 </div>
              </div>
              <div className="space-y-10">
                 <div>
                    <div className="flex items-center space-x-4 mb-4">
                       <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                         <Target className="w-6 h-6 text-blue-600" />
                       </div>
                       <h3 className="text-2xl font-bold text-slate-900">Notre Mission</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                       Rendre la technologie complexe accessible et utile à toutes les entreprises, peu importe leur taille ou leur secteur d'activité.
                    </p>
                 </div>
                 <div>
                    <div className="flex items-center space-x-4 mb-4">
                       <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                         <Eye className="w-6 h-6 text-blue-600" />
                       </div>
                       <h3 className="text-2xl font-bold text-slate-900">Notre Vision</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                       Devenir le partenaire de référence pour la transformation digitale européenne en combinant ERP, IA et service client d'exception.
                    </p>
                 </div>
                 <div>
                    <div className="flex items-center space-x-4 mb-4">
                       <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                         <Heart className="w-6 h-6 text-blue-600" />
                       </div>
                       <h3 className="text-2xl font-bold text-slate-900">Nos Valeurs</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                       {['Intégrité', 'Innovation continue', 'Écoute client', 'Excellence technique'].map(v => (
                         <span key={v} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-bold text-sm">
                           {v}
                         </span>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Notre Équipe</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Des experts passionnés qui travaillent chaque jour pour votre succès.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="text-center group">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 text-white text-2xl md:text-3xl font-bold shadow-lg group-hover:scale-105 transition-transform">
                  {member.initials}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                <p className="text-slate-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Pourquoi nous choisir ?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all">
              <Award className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Expertise reconnue</h3>
              <p className="text-slate-600">Plus de 10 ans d'expérience dans le développement de solutions métiers.</p>
            </div>
            <div className="p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all">
              <Users className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Approche humaine</h3>
              <p className="text-slate-600">Un interlocuteur dédié et une communication transparente à chaque étape.</p>
            </div>
            <div className="p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all">
              <TrendingUp className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">ROI mesurable</h3>
              <p className="text-slate-600">Des solutions qui génèrent des résultats concrets et mesurables.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Rejoignez l'aventure CSoluSoft
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Que vous soyez client ou futur collaborateur, nous serions ravis d'échanger avec vous.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to={Page.Contact}
              className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-500 transition-all flex items-center justify-center space-x-2"
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
