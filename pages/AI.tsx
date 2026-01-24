
import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Zap, BrainCircuit, Activity, ShieldCheck, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';

const AI: React.FC = () => {
  return (
    <div className="bg-white dark:bg-dark-900 transition-colors">
      <SEO 
        title="Intelligence Artificielle"
        description="Intégrez l'intelligence artificielle dans vos processus métiers. Analyse prédictive, automatisation intelligente et reporting IA pour des décisions éclairées."
        keywords="intelligence artificielle entreprise, IA Tunisie, analyse prédictive, automatisation IA, machine learning, CSoluBrain"
        url="/intelligence-artificielle"
      />
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-dark-800 dark:to-dark-900 overflow-hidden relative transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="w-20 h-20 bg-primary-500 rounded-[2rem] flex items-center justify-center text-white mb-10 mx-auto shadow-2xl shadow-primary-400/30 animate-pulse">
            <BrainCircuit className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">
            L'IA au service de <br/><span className="text-primary-500 dark:text-accent-400">votre stratégie.</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-10">
            Nous ne nous contentons pas d'ajouter des outils : nous réinventons votre efficacité opérationnelle grâce à l'intelligence artificielle appliquée.
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary-50 rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
      </section>

      <section className="py-24 bg-white dark:bg-dark-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-10 bg-slate-50 dark:bg-dark-800 rounded-[3rem] border border-slate-100 dark:border-slate-700 group hover:bg-white dark:hover:bg-dark-700 hover:shadow-2xl transition-all">
                 <div className="w-14 h-14 bg-white dark:bg-dark-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                    <Zap className="w-7 h-7 text-orange-500" />
                 </div>
                 <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Automatisation</h3>
                 <p className="text-slate-600 dark:text-slate-400">Supprimez les tâches répétitives à faible valeur ajoutée grâce à nos agents intelligents qui apprennent de vos données.</p>
              </div>
              <div className="p-10 bg-slate-50 dark:bg-dark-800 rounded-[3rem] border border-slate-100 dark:border-slate-700 group hover:bg-white dark:hover:bg-dark-700 hover:shadow-2xl transition-all">
                 <div className="w-14 h-14 bg-white dark:bg-dark-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                    <Activity className="w-7 h-7 text-primary-500 dark:text-accent-400" />
                 </div>
                 <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Analyse Prédictive</h3>
                 <p className="text-slate-600 dark:text-slate-400">Anticipez les tendances de marché et les besoins en stock avant même qu'ils ne se manifestent concrètement.</p>
              </div>
              <div className="p-10 bg-slate-50 dark:bg-dark-800 rounded-[3rem] border border-slate-100 dark:border-slate-700 group hover:bg-white dark:hover:bg-dark-700 hover:shadow-2xl transition-all">
                 <div className="w-14 h-14 bg-white dark:bg-dark-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-7 h-7 text-green-600 dark:text-green-400" />
                 </div>
                 <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Aide à la Décision</h3>
                 <p className="text-slate-600 dark:text-slate-400">Prenez des décisions éclairées grâce à des recommandations basées sur des millions de points de données croisés.</p>
              </div>
           </div>
        </div>
      </section>

      <section className="py-24 bg-dark-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                 <div className="inline-flex items-center space-x-2 bg-primary-500/20 text-primary-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-primary-300/20">
                    <Sparkles className="w-3 h-3" />
                    <span>Nouveau Service</span>
                 </div>
                 <h2 className="text-4xl font-extrabold mb-8">IA Générative pour l'Entreprise</h2>
                 <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                   Exploitez la puissance des grands modèles de langage (LLM) pour vos besoins internes : rédaction assistée, synthèse de rapports, assistants support client intelligents et personnalisés.
                 </p>
                 <Link to="/contact" className="inline-block px-10 py-4 bg-accent-500 text-white rounded-2xl font-bold hover:bg-accent-600 transition-all">
                    Demander une étude de cas
                 </Link>
              </div>
              <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4 sm:gap-6">
                 <div className="bg-white/5 border border-white/10 p-4 sm:p-8 rounded-2xl sm:rounded-3xl">
                    <div className="text-2xl sm:text-3xl font-black mb-2">+40%</div>
                    <p className="text-xs sm:text-sm text-slate-400">Productivité administrative</p>
                 </div>
                 <div className="bg-white/5 border border-white/10 p-4 sm:p-8 rounded-2xl sm:rounded-3xl">
                    <div className="text-2xl sm:text-3xl font-black mb-2">-25%</div>
                    <p className="text-xs sm:text-sm text-slate-400">Erreurs de saisie</p>
                 </div>
                 <div className="bg-white/5 border border-white/10 p-4 sm:p-8 rounded-2xl sm:rounded-3xl">
                    <div className="text-2xl sm:text-3xl font-black mb-2">99.9%</div>
                    <p className="text-xs sm:text-sm text-slate-400">Précision des modèles</p>
                 </div>
                 <div className="bg-white/5 border border-white/10 p-4 sm:p-8 rounded-2xl sm:rounded-3xl">
                    <div className="text-2xl sm:text-3xl font-black mb-2">2x</div>
                    <p className="text-xs sm:text-sm text-slate-400">Rapidité d'analyse</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Articles Relatifs IA */}
      <section className="py-24 bg-slate-50 dark:bg-dark-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Articles & Ressources IA</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">Explorez les possibilités de l'intelligence artificielle pour votre entreprise</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/blog/intelligence-artificielle-entreprise-tunisienne" className="group bg-white dark:bg-dark-700 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-600 hover:shadow-xl transition-all">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-primary-500 flex items-center justify-center">
                <BrainCircuit className="w-16 h-16 text-white/80" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-orange-500 dark:text-orange-400 uppercase tracking-wide">Intelligence Artificielle</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2 mb-3 group-hover:text-primary-500 dark:group-hover:text-accent-400 transition-colors">Comment l'IA Peut Transformer Votre Entreprise en 2026</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Découvrez des applications concrètes de l'IA pour votre PME.</p>
              </div>
            </Link>
            <Link to="/blog/erp-moderne-vs-excel-pourquoi-migrer" className="group bg-white dark:bg-dark-700 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-600 hover:shadow-xl transition-all">
              <div className="h-48 bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <Activity className="w-16 h-16 text-white/80" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-primary-500 dark:text-accent-400 uppercase tracking-wide">ERP & Gestion</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2 mb-3 group-hover:text-primary-500 dark:group-hover:text-accent-400 transition-colors">ERP Moderne avec IA Intégrée</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Combinez la puissance de l'ERP et de l'IA pour des décisions éclairées.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AI;
