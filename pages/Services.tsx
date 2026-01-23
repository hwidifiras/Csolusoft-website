
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICE_LIST } from '../constants';
import { ArrowRight, CheckCircle2, Rocket, HeadphonesIcon, Shield, Clock } from 'lucide-react';
import { Page } from '../types';

const Services: React.FC = () => {
  const processSteps = [
    { step: '01', title: 'Découverte', description: 'Analyse approfondie de vos besoins et objectifs métiers.' },
    { step: '02', title: 'Conception', description: 'Design UX/UI et architecture technique sur mesure.' },
    { step: '03', title: 'Développement', description: 'Code propre, tests automatisés et livraisons itératives.' },
    { step: '04', title: 'Déploiement', description: 'Mise en production sécurisée et formation de vos équipes.' },
  ];

  const guarantees = [
    { icon: <Rocket className="w-6 h-6" />, title: 'Livraison rapide', description: 'Méthodologie agile pour des résultats visibles rapidement.' },
    { icon: <Shield className="w-6 h-6" />, title: 'Code sécurisé', description: 'Bonnes pratiques OWASP et audits de sécurité réguliers.' },
    { icon: <HeadphonesIcon className="w-6 h-6" />, title: 'Support 24/7', description: 'Équipe dédiée pour répondre à vos urgences.' },
    { icon: <Clock className="w-6 h-6" />, title: 'Maintenance évolutive', description: 'Mises à jour continues et évolutions fonctionnelles.' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
            Expertise Technique
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Nos Services Digitaux</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            De la conception à la maintenance, nous vous accompagnons sur l'ensemble de votre cycle de vie technologique.
          </p>
          <Link 
            to={Page.Contact}
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
          >
            <span>Discuter de votre projet</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICE_LIST.map((service, i) => (
              <div key={i} className="group p-10 rounded-[2.5rem] border border-slate-100 bg-white hover:shadow-2xl transition-all flex flex-col items-start">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                   {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8">{service.description}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                   <span className="text-xs font-bold text-slate-400 px-3 py-1 bg-slate-50 rounded-full border border-slate-100">Performance</span>
                   <span className="text-xs font-bold text-slate-400 px-3 py-1 bg-slate-50 rounded-full border border-slate-100">Sécurité</span>
                   <span className="text-xs font-bold text-slate-400 px-3 py-1 bg-slate-50 rounded-full border border-slate-100">Scalable</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Notre Méthodologie</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Un processus éprouvé pour garantir le succès de chaque projet.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-black text-blue-600/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-600/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Nos Garanties</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Des engagements concrets pour une collaboration sereine.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guarantees.map((item, i) => (
              <div key={i} className="text-center p-8">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Prêt à transformer votre idée en réalité ?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Contactez-nous pour un premier échange gratuit et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to={Page.Contact}
              className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold hover:bg-blue-50 transition-all flex items-center justify-center space-x-2"
            >
              <span>Demander un devis</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to={Page.About}
              className="px-8 py-4 bg-blue-500 text-white rounded-2xl font-bold hover:bg-blue-400 transition-all"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
