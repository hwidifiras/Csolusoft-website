import React from 'react';
import { Award, Star, Crown } from 'lucide-react';
import SEO from '../components/SEO';

interface CaseStudy {
  tier: 'Silver' | 'Gold' | 'Platinum';
  title: string;
  clientName: string;
  challenge: string;
  solution: string;
  results: string;
}

const caseStudies: CaseStudy[] = [
  {
    tier: 'Silver',
    title: 'Automatisation des alertes chèques impayés & échéances',
    clientName: 'Promoteur Immobilier (Sfax)',
    challenge:
      'Le client devait consulter manuellement chaque jour les chèques impayés, les échéances et les encaissements, avec un risque élevé d’oubli et de retard de relance.',
    solution:
      'Mise en place d’une automatisation qui interroge la base de données à heure exacte planifiée, compile les listes critiques (impayés, échéances, encaissements) et envoie un rapport quotidien prêt à action.',
    results:
      'Suivi financier fiabilisé, meilleure régularité des relances et gain de temps opérationnel quotidien pour l’équipe administrative.',
  },
  {
    tier: 'Gold',
    title: 'Surveillance intelligente des stocks pour restaurant premium',
    clientName: 'Restaurant Coffee Lounge Haut de Gamme',
    challenge:
      'Des écarts de stock récurrents et des ruptures non anticipées impactaient la qualité de service, sans priorisation claire des urgences.',
    solution:
      'Développement d’une automatisation de suivi des mouvements de stock avec détection d’anomalies, estimation de criticité et notifications administrateur selon niveau de priorité.',
    results:
      'Réduction des pertes invisibles, meilleure anticipation des réapprovisionnements urgents et pilotage plus précis des ressources critiques.',
  },
  {
    tier: 'Platinum',
    title: 'Orchestrateur social media + e-commerce avec KPI & IA',
    clientName: 'Client multi-marques (projet en voie d’activation CSoluSoft)',
    challenge:
      'Publier de façon cohérente sur Instagram, Facebook et pages e-commerce demandait beaucoup de temps et ne permettait pas un suivi KPI centralisé.',
    solution:
      'Conception d’une automatisation cross-canal qui planifie les publications, suit les performances via KPI et propose des suggestions de contenu assistées par IA.',
    results:
      'Pipeline marketing structuré, régularité éditoriale renforcée et décisions de contenu plus rapides grâce aux recommandations IA.',
  },
];

const tierStyles: Record<
  CaseStudy['tier'],
  {
    panel: string;
    chip: string;
    text: string;
    iconWrap: string;
    Icon: React.ComponentType<{ className?: string }>;
    impact: string;
  }
> = {
  Silver: {
    panel: 'border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/70',
    chip: 'bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-100',
    text: 'text-slate-700 dark:text-slate-100',
    iconWrap: 'bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-100',
    Icon: Award,
    impact: 'Élevé',
  },
  Gold: {
    panel: 'border-amber-200 dark:border-amber-500/40 bg-amber-50 dark:bg-amber-500/10',
    chip: 'bg-amber-100 dark:bg-amber-500/30 text-amber-700 dark:text-amber-200',
    text: 'text-amber-700 dark:text-amber-200',
    iconWrap: 'bg-amber-100 dark:bg-amber-500/30 text-amber-700 dark:text-amber-200',
    Icon: Star,
    impact: 'Très élevé',
  },
  Platinum: {
    panel: 'border-primary-200 dark:border-primary-500/40 bg-primary-50 dark:bg-primary-500/10',
    chip: 'bg-primary-100 dark:bg-primary-500/30 text-primary-700 dark:text-primary-200',
    text: 'text-primary-700 dark:text-primary-200',
    iconWrap: 'bg-primary-100 dark:bg-primary-500/30 text-primary-700 dark:text-primary-200',
    Icon: Crown,
    impact: 'Transformationnel',
  },
};

const CaseStudies: React.FC = () => {
  return (
    <div className="bg-white dark:bg-dark-900 min-h-screen transition-colors">
      <SEO
        title="Cas Clients"
        description="Découvrez des cas clients CSoluSoft en automatisation: alertes financières planifiées, monitoring intelligent des stocks et orchestration social media avec KPI et IA."
        keywords="cas clients, automatisation Tunisie, alertes impayés, monitoring stock, social media automation, KPI, IA"
        url="/case-studies"
        image="/img/solusoft-logo-footer-light.svg"
      />

      <section className="py-24 bg-slate-50 dark:bg-dark-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-primary-50 dark:bg-primary-500/20 text-primary-600 dark:text-primary-300 text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
              Réalisations
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
              Nos <span className="text-primary-500 dark:text-accent-400">Cas Clients</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              3 projets d’automatisation livrés par CSoluSoft, classés par niveau de complexité et d’impact: Silver, Gold et Platinum.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((item) => {
              const tier = tierStyles[item.tier];
              const Icon = tier.Icon;

              return (
              <article
                key={item.title}
                className="bg-white dark:bg-dark-900 border border-slate-100 dark:border-slate-700 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all"
              >
                <div className={`mb-6 rounded-2xl border p-4 ${tier.panel}`}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tier.iconWrap}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className={`text-sm font-extrabold tracking-wide ${tier.text}`}>{item.tier}</p>
                      </div>
                    </div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${tier.chip}`}>
                      Impact {tier.impact}
                    </span>
                  </div>
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h2>
                <p className="text-sm text-primary-600 dark:text-accent-400 font-semibold mb-6">{item.clientName}</p>

                <div className="space-y-5">
                  <div>
                    <h3 className="text-sm uppercase tracking-wide font-bold text-slate-500 dark:text-slate-400 mb-2">Challenge</h3>
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{item.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wide font-bold text-slate-500 dark:text-slate-400 mb-2">Solution</h3>
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{item.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wide font-bold text-slate-500 dark:text-slate-400 mb-2">Résultats</h3>
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{item.results}</p>
                  </div>
                </div>
              </article>
            )})}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
