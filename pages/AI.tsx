
import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Zap, BrainCircuit, Activity, ShieldCheck, Sparkles, Workflow, Bot, Search, FileText } from 'lucide-react';
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
            L'IA au service de <br /><span className="text-primary-500 dark:text-accent-400">votre stratégie.</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-10">
            Nous ne nous contentons pas d'ajouter des outils : nous réinventons votre efficacité opérationnelle grâce à l'intelligence artificielle appliquée.
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary-50 rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
      </section>

      {/* Intelligent Automation Section */}
      <section className="py-24 bg-white dark:bg-dark-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center space-x-2 bg-orange-500/10 text-orange-600 dark:text-orange-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-orange-200 dark:border-orange-500/20">
                <Workflow className="w-3 h-3" />
                <span>Automatisation Intelligente</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
                <span className="text-orange-500">Automatisez</span> vos flux, libérez votre potentiel.
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Connectez vos applications existantes et orchestrez des workflows complexes sans friction.
                Notre expertise en intégration permet de faire dialoguer vos CRM, ERP et outils marketing pour une entreprise interconnectée et réactive.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Synchronisation bidirectionnelle de données",
                  "Traitement automatique des leads entrants",
                  "Génération de documents administratifs",
                  "Notifications et alertes intelligentes"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center text-orange-600 dark:text-orange-400">
                      <Zap className="w-3 h-3" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-200 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-slate-50 dark:bg-dark-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl relative overflow-hidden">
                {/* Abstract Workflow Visualization */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>

                <div className="flex flex-col space-y-6 relative z-10">
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-dark-700 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-600">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold">CRM</div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">Nouveau Client</div>
                        <div className="text-xs text-slate-500">Source: Site Web</div>
                      </div>
                    </div>
                    <div className="text-green-500 text-xs font-bold px-2 py-1 bg-green-500/10 rounded">Reçu</div>
                  </div>

                  <div className="flex justify-center -my-2">
                    <div className="w-0.5 h-8 bg-slate-300 dark:bg-slate-600"></div>
                  </div>

                  <div className="flex items-center justify-center p-3 bg-orange-500 text-white rounded-xl shadow-lg shadow-orange-500/30 font-bold text-sm">
                    <BrainCircuit className="w-4 h-4 mr-2" />
                    Traitement IA & Enrichissement
                  </div>

                  <div className="flex justify-center -my-2">
                    <div className="w-0.5 h-8 bg-slate-300 dark:bg-slate-600"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white dark:bg-dark-700 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-600">
                      <div className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-2">ERP</div>
                      <div className="text-xs font-medium text-slate-900 dark:text-white">Création Devis</div>
                    </div>
                    <div className="p-4 bg-white dark:bg-dark-700 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-600">
                      <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-2">Slack</div>
                      <div className="text-xs font-medium text-slate-900 dark:text-white">Notif Équipe</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Generative AI Section */}
      <section className="py-24 bg-dark-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/95 to-dark-900/50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center space-x-2 bg-primary-500/20 text-primary-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-primary-300/20">
                <Sparkles className="w-3 h-3" />
                <span>L'Ère Générative</span>
              </div>
              <h2 className="text-4xl font-extrabold mb-8">Déployez votre propre <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Intelligence d'Entreprise.</span></h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Ne laissez pas vos connaissances dormir dans des documents. Nous intégrons des modèles de langage (LLM) sécurisés directement connectés à vos données internes (RAG).
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 shrink-0">
                    <Bot className="w-6 h-6 text-accent-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Assistants Métiers</h4>
                    <p className="text-sm text-slate-400">Support client automatisé, assistant RH ou juridique, entraînés sur votre propre base de connaissances.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 shrink-0">
                    <Search className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Extraction de Données</h4>
                    <p className="text-sm text-slate-400">Transformez automatiquement vos PDF, factures et contrats en données structurées exploitables.</p>
                  </div>
                </div>
              </div>

              <Link to="/contact" className="inline-block px-10 py-4 bg-white text-dark-900 rounded-2xl font-bold hover:bg-slate-200 transition-all shadow-lg hover:shadow-white/20">
                Demander une démo GenAI
              </Link>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] shadow-2xl">
                <div className="flex items-center space-x-3 mb-6 border-b border-white/10 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-4 text-xs text-slate-400 bg-black/20 px-3 py-1 rounded w-full font-mono">CSoluBrain - Assistant Interne</div>
                </div>

                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded bg-slate-700 flex-shrink-0"></div>
                    <div className="bg-slate-800 p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl text-slate-300">
                      Quelle est la procédure de remboursement des notes de frais pour les déplacements internationaux ?
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 flex-row-reverse space-x-reverse">
                    <div className="w-6 h-6 rounded bg-primary-600 flex-shrink-0 flex items-center justify-center"><Sparkles className="w-3 h-3 text-white" /></div>
                    <div className="bg-primary-900/50 border border-primary-500/30 p-3 rounded-tl-xl rounded-br-xl rounded-bl-xl text-white">
                      <p className="mb-2">D'après le document <strong>Politique_Voyages_2025.pdf</strong> :</p>
                      <ul className="list-disc pl-4 space-y-1 text-slate-300">
                        <li>Plafond journalier : 150€ (hébergement) + 40€ (repas)</li>
                        <li>Délai de soumission : 5 jours ouvrés après retour</li>
                        <li>Validation requise : Manager N+1</li>
                      </ul>
                      <div className="mt-3 text-xs text-primary-300 flex items-center cursor-pointer hover:underline">
                        <FileText className="w-3 h-3 mr-1" />
                        Voir la source (Page 12)
                      </div>
                    </div>
                  </div>
                </div>
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
