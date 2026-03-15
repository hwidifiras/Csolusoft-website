import React from 'react';

interface Testimonial {
  name: string;
  company: string;
  photo: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Nour Ben Salem',
    company: 'Sfax Logistique Express',
    photo: 'https://ui-avatars.com/api/?name=Nour+Ben+Salem&background=0ea5e9&color=fff&size=128',
    quote: 'L’équipe CSoluSoft a livré un outil ERP clair et fiable. Nous avons réduit les erreurs de saisie et gagné en visibilité sur nos opérations.',
  },
  {
    name: 'Hatem Kallel',
    company: 'Retail Plus Tunisie',
    photo: 'https://ui-avatars.com/api/?name=Hatem+Kallel&background=6366f1&color=fff&size=128',
    quote: 'Notre plateforme e-commerce est plus rapide et mieux référencée. Les commandes en ligne ont progressé dès les premières semaines.',
  },
  {
    name: 'Amel Trabelsi',
    company: 'Pharmacie El Amal',
    photo: 'https://ui-avatars.com/api/?name=Amel+Trabelsi&background=14b8a6&color=fff&size=128',
    quote: 'La solution de facturation électronique nous a simplifié la conformité TEIF. Le support est disponible et très réactif.',
  },
  {
    name: 'Yassine Gharbi',
    company: 'Cabinet Horizon Conseil',
    photo: 'https://ui-avatars.com/api/?name=Yassine+Gharbi&background=f97316&color=fff&size=128',
    quote: 'Nous avions besoin d’un partenaire technique de confiance. CSoluSoft nous accompagne avec méthode et transparence.',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-dark-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-primary-500 dark:text-accent-400 font-bold tracking-wider uppercase text-sm">Ils nous font confiance</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">Témoignages Clients</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Des retours concrets d’entreprises tunisiennes accompagnées dans leur digitalisation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item) => (
            <article
              key={`${item.name}-${item.company}`}
              className="bg-white dark:bg-dark-900 border border-slate-100 dark:border-dark-700 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4 mb-5">
                <img
                  src={item.photo}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary-100 dark:border-primary-500/30"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.company}</p>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">“{item.quote}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
