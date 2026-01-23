
import React from 'react';
import { Database, LineChart, BarChart3, Users, LayoutDashboard, Layers } from 'lucide-react';

const ERP: React.FC = () => {
  const modules = [
    {
      title: "Gestion de stock & logistique",
      description: "Suivi des mouvements, inventaires tournants, alertes de seuil et gestion multi-entrepôts.",
      icon: <Database className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Gestion comptable & financière",
      description: "Saisie automatisée, écritures analytiques, bilans et intégration des flux bancaires.",
      icon: <LineChart className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Gestion commerciale",
      description: "De la prospection à la facturation : CRM, devis, bons de commande et catalogues produits.",
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Reporting & tableaux de bord",
      description: "Visualisation de données interactive et rapports personnalisables pour un pilotage agile.",
      icon: <LayoutDashboard className="w-8 h-8 text-blue-600" />
    }
  ];

  return (
    <div className="bg-white">
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            L'ERP <span className="text-blue-600">Revisité.</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Fini les logiciels rigides et complexes. Découvrez une solution fluide, modulaire et ultra-performante.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {modules.map((m, i) => (
              <div key={i} className="flex items-start space-x-6 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all">
                <div className="shrink-0 w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                  {m.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{m.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
             <h2 className="text-4xl font-bold mb-8">Un déploiement en 3 étapes.</h2>
             <div className="space-y-12">
                <div className="flex space-x-6">
                   <div className="text-4xl font-black text-blue-500 opacity-50">01</div>
                   <div>
                      <h4 className="text-xl font-bold mb-2">Analyse & Audit</h4>
                      <p className="text-slate-400">Nous étudions vos processus actuels pour identifier les zones d'optimisation.</p>
                   </div>
                </div>
                <div className="flex space-x-6">
                   <div className="text-4xl font-black text-blue-500 opacity-50">02</div>
                   <div>
                      <h4 className="text-xl font-bold mb-2">Paramétrage & Migration</h4>
                      <p className="text-slate-400">Configuration sur mesure et transfert sécurisé de vos données historiques.</p>
                   </div>
                </div>
                <div className="flex space-x-6">
                   <div className="text-4xl font-black text-blue-500 opacity-50">03</div>
                   <div>
                      <h4 className="text-xl font-bold mb-2">Formation & Support</h4>
                      <p className="text-slate-400">Accompagnement de vos collaborateurs pour une adoption rapide et efficace.</p>
                   </div>
                </div>
             </div>
          </div>
          <div className="lg:w-1/2">
             <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-12 rounded-[3rem] shadow-2xl relative">
                <Layers className="w-16 h-16 text-white/20 absolute top-8 right-8" />
                <h3 className="text-3xl font-bold mb-6">Évolutivité sans limite</h3>
                <p className="text-blue-50 leading-relaxed mb-8">
                   Notre ERP est conçu pour grandir avec vous. Ajoutez des modules, connectez des APIs tiers et faites évoluer vos outils au rythme de votre croissance.
                </p>
                <button className="bg-white text-blue-700 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all">
                  En savoir plus sur le Cloud
                </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ERP;
