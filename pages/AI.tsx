
import React from 'react';
import { Cpu, Zap, BrainCircuit, Activity, ShieldCheck, Sparkles } from 'lucide-react';

const AI: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="w-20 h-20 bg-blue-600 rounded-[2rem] flex items-center justify-center text-white mb-10 mx-auto shadow-2xl shadow-blue-500/30 animate-pulse">
            <BrainCircuit className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">
            L'IA au service de <br/><span className="text-blue-600">votre stratégie.</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            Nous ne nous contentons pas d'ajouter des outils : nous réinventons votre efficacité opérationnelle grâce à l'intelligence artificielle appliquée.
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-blue-100 rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all">
                 <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                    <Zap className="w-7 h-7 text-orange-500" />
                 </div>
                 <h3 className="text-2xl font-bold mb-4">Automatisation</h3>
                 <p className="text-slate-600">Supprimez les tâches répétitives à faible valeur ajoutée grâce à nos agents intelligents qui apprennent de vos données.</p>
              </div>
              <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all">
                 <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                    <Activity className="w-7 h-7 text-blue-600" />
                 </div>
                 <h3 className="text-2xl font-bold mb-4">Analyse Prédictive</h3>
                 <p className="text-slate-600">Anticipez les tendances de marché et les besoins en stock avant même qu'ils ne se manifestent concrètement.</p>
              </div>
              <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all">
                 <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-7 h-7 text-green-600" />
                 </div>
                 <h3 className="text-2xl font-bold mb-4">Aide à la Décision</h3>
                 <p className="text-slate-600">Prenez des décisions éclairées grâce à des recommandations basées sur des millions de points de données croisés.</p>
              </div>
           </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                 <div className="inline-flex items-center space-x-2 bg-blue-600/20 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-blue-400/20">
                    <Sparkles className="w-3 h-3" />
                    <span>Nouveau Service</span>
                 </div>
                 <h2 className="text-4xl font-extrabold mb-8">IA Générative pour l'Entreprise</h2>
                 <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                   Exploitez la puissance des grands modèles de langage (LLM) pour vos besoins internes : rédaction assistée, synthèse de rapports, assistants support client intelligents et personnalisés.
                 </p>
                 <button className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-500 transition-all">
                    Demander une étude de cas
                 </button>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                 <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                    <div className="text-3xl font-black mb-2">+40%</div>
                    <p className="text-sm text-slate-400">Productivité administrative</p>
                 </div>
                 <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                    <div className="text-3xl font-black mb-2">-25%</div>
                    <p className="text-sm text-slate-400">Erreurs de saisie</p>
                 </div>
                 <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                    <div className="text-3xl font-black mb-2">99.9%</div>
                    <p className="text-sm text-slate-400">Précision des modèles</p>
                 </div>
                 <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                    <div className="text-3xl font-black mb-2">2x</div>
                    <p className="text-sm text-slate-400">Rapidité d'analyse</p>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default AI;
