
import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Workflow, Lightbulb, Settings2, ShieldCheck, HeartHandshake } from 'lucide-react';

const DevSurMesure: React.FC = () => {
  const steps = [
    {
      title: "Étude & Analyse",
      desc: "Compréhension profonde de votre métier et de vos points de friction.",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: "Développement",
      desc: "Codage agile avec des technologies modernes et robustes.",
      icon: <Code2 className="w-6 h-6" />
    },
    {
      title: "Maintenance & Évolution",
      desc: "Support continu et mises à jour régulières pour pérenniser vos outils.",
      icon: <Settings2 className="w-6 h-6" />
    }
  ];

  return (
    <div className="bg-white">
      <section className="py-24 bg-primary-500 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-black mb-8">Développement <span className="text-primary-100">Sur Mesure.</span></h1>
          <p className="text-xl text-primary-50 max-w-3xl mx-auto leading-relaxed">
            Parce que votre entreprise est unique, vos logiciels doivent l'être aussi. Nous créons des solutions taillées pour vos besoins spécifiques.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            {steps.map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 bg-primary-50 text-primary-500 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 rounded-[3rem] p-12 lg:p-20">
             <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2">
                   <h2 className="text-4xl font-extrabold mb-8 text-slate-900">Une méthodologie axée sur le résultat.</h2>
                   <div className="space-y-8">
                      <div className="flex items-start space-x-4">
                         <div className="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-sm shrink-0">A</div>
                         <div>
                            <p className="font-bold text-slate-900 mb-1">Approche Agile</p>
                            <p className="text-slate-600 text-sm">Livraisons fréquentes et feedback continu pour un produit final parfait.</p>
                         </div>
                      </div>
                      <div className="flex items-start space-x-4">
                         <div className="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-sm shrink-0">S</div>
                         <div>
                            <p className="font-bold text-slate-900 mb-1">Scalabilité Native</p>
                            <p className="text-slate-600 text-sm">Des architectures conçues pour supporter des millions d'utilisateurs sans faillir.</p>
                         </div>
                      </div>
                      <div className="flex items-start space-x-4">
                         <div className="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-sm shrink-0">Q</div>
                         <div>
                            <p className="font-bold text-slate-900 mb-1">Qualité de Code</p>
                            <p className="text-slate-600 text-sm">Tests automatisés et revues de code systématiques pour une robustesse absolue.</p>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="lg:w-1/2">
                   <div className="p-8 bg-white rounded-3xl shadow-xl space-y-4">
                      <div className="flex items-center space-x-3 mb-4">
                         <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                         <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                         <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                      <div className="h-4 bg-slate-100 rounded w-1/2"></div>
                      <div className="h-20 bg-primary-50 rounded border-l-4 border-primary-400 flex items-center px-4">
                         <p className="text-primary-600 font-mono text-sm tracking-tighter">// Déploiement optimisé...</p>
                      </div>
                      <div className="h-4 bg-slate-100 rounded w-full"></div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Articles Relatifs Développement */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Articles & Ressources</h2>
            <p className="text-lg text-slate-600">Guides et conseils pour vos projets de développement</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/blog/developpement-sur-mesure-avantages" className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all">
              <div className="h-40 bg-gradient-to-br from-pink-500 to-primary-500 flex items-center justify-center">
                <Code2 className="w-12 h-12 text-white/80" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-pink-500 uppercase tracking-wide">Développement</span>
                <h3 className="text-lg font-bold text-slate-900 mt-2 mb-2 group-hover:text-primary-500 transition-colors">Quand Opter pour le Sur Mesure ?</h3>
                <p className="text-slate-600 text-sm">Les avantages d'une solution personnalisée.</p>
              </div>
            </Link>
            <Link to="/blog/transformation-digitale-pme-tunisie" className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all">
              <div className="h-40 bg-gradient-to-br from-accent-500 to-primary-500 flex items-center justify-center">
                <Workflow className="w-12 h-12 text-white/80" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-accent-500 uppercase tracking-wide">Transformation Digitale</span>
                <h3 className="text-lg font-bold text-slate-900 mt-2 mb-2 group-hover:text-primary-500 transition-colors">Digitaliser Votre Entreprise</h3>
                <p className="text-slate-600 text-sm">Par où commencer votre transformation.</p>
              </div>
            </Link>
            <Link to="/blog/securite-donnees-entreprise-bonnes-pratiques" className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all">
              <div className="h-40 bg-gradient-to-br from-green-500 to-primary-500 flex items-center justify-center">
                <ShieldCheck className="w-12 h-12 text-white/80" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-green-500 uppercase tracking-wide">Sécurité</span>
                <h3 className="text-lg font-bold text-slate-900 mt-2 mb-2 group-hover:text-primary-500 transition-colors">Sécurité des Données</h3>
                <p className="text-slate-600 text-sm">Les bonnes pratiques à adopter.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevSurMesure;
