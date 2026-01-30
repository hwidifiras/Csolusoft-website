
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Calendar,
  Building2,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Scale,
  FileCode,
  Shield,
  HelpCircle,
  ChevronDown,
  BookOpen,
  Target,
  Clock,
  Users,
  Landmark,
  BadgeCheck,
  FileWarning,
  Banknote,
  ScrollText
} from 'lucide-react';
import { Page } from '../types';
import SEO from '../components/SEO';

const BillingGuide: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  const timeline = [
    {
      year: '2016',
      title: 'Cadre légal initial',
      description: 'Loi de Finances 2016 (article 22) et Décret n°2016-1066 : introduction du concept de facture électronique et désignation de Tunisie TradeNet (TTN) comme opérateur.',
      status: 'past',
      icon: <Scale className="w-5 h-5" />
    },
    {
      year: 'Jusqu\'au 30/06/2025',
      title: 'Grandes entreprises (DGE)',
      description: 'Obligation pour les grandes entreprises (Direction des Grandes Entreprises), transactions avec l\'État, collectivités locales, établissements publics, ventes de médicaments et carburants B2B.',
      status: 'active',
      icon: <Building2 className="w-5 h-5" />
    },
    {
      year: '01/07/2025',
      title: 'Sanctions en vigueur',
      description: 'Application stricte des sanctions (Loi Finances 2025, article 71) : amendes de 100 à 500 TND par facture papier, 250 à 10 000 TND pour factures non conformes.',
      status: 'active',
      icon: <AlertTriangle className="w-5 h-5" />
    },
    {
      year: '01/01/2026',
      title: 'Services & Professions libérales',
      description: 'Extension à l\'ensemble des prestations de services, professions libérales et activités secondaires (Loi Finances 2026, article 53). Mise en œuvre progressive.',
      status: 'active',
      icon: <Users className="w-5 h-5" />
    }
  ];

  const teifRequirements = [
    {
      title: 'Structure XML obligatoire',
      description: 'La facture doit suivre un schéma XML strictement défini par l\'administration fiscale tunisienne.',
      icon: <FileCode className="w-6 h-6 text-primary-500" />
    },
    {
      title: 'Identifiants fiscaux',
      description: 'Matricule fiscal complet de l\'émetteur et du destinataire, avec code TVA et code catégorie.',
      icon: <BadgeCheck className="w-6 h-6 text-primary-500" />
    },
    {
      title: 'Signature électronique',
      description: 'Signature numérique qualifiée garantissant l\'authenticité et l\'intégrité de la facture.',
      icon: <Shield className="w-6 h-6 text-primary-500" />
    },
    {
      title: 'Numérotation séquentielle',
      description: 'Numéros de facture uniques et consécutifs, sans rupture de séquence.',
      icon: <ScrollText className="w-6 h-6 text-primary-500" />
    },
    {
      title: 'Détail des lignes',
      description: 'Chaque ligne de facture avec désignation, quantité, prix unitaire HT, taux TVA et montant.',
      icon: <FileText className="w-6 h-6 text-primary-500" />
    },
    {
      title: 'Archivage légal',
      description: 'Conservation pendant 10 ans minimum dans un format garantissant la lisibilité.',
      icon: <BookOpen className="w-6 h-6 text-primary-500" />
    }
  ];

  const penalties = [
    { amount: '100 - 500 TND', description: 'Amende par facture papier émise alors que l\'électronique est obligatoire (plafond 50 000 TND)' },
    { amount: '250 - 10 000 TND', description: 'Amende par facture électronique non conforme au format TEIF' },
    { amount: 'Jusqu\'à 50 000 TND', description: 'Plafond cumulé des amendes par exercice fiscal' },
    { amount: 'Redressement fiscal', description: 'Rejet des charges en cas de factures non conformes ou absence de preuve d\'enregistrement' }
  ];

  const faqs = [
    {
      question: 'Qu\'est-ce que le format TEIF exactement ?',
      answer: 'Le TEIF (Tunisian Electronic Invoice Format) est le format XML standardisé défini par l\'administration fiscale tunisienne. Chaque facture doit être signée électroniquement avec un certificat qualifié TUNTRUST, puis validée et enregistrée via la plateforme nationale "El Fatoora" gérée par Tunisie TradeNet (TTN). Elle doit contenir un QR Code signé (cachet électronique visible) et la signature de TTN confirmant son enregistrement.'
    },
    {
      question: 'Ma société est-elle concernée par l\'obligation ?',
      answer: 'Depuis le 1er juillet 2025, les grandes entreprises (DGE), les transactions avec l\'État et les établissements publics sont concernées. Depuis le 1er janvier 2026, l\'obligation s\'étend aux prestations de services et professions libérales (Loi Finances 2026, article 53). Contactez-nous pour un diagnostic gratuit de votre situation.'
    },
    {
      question: 'Comment adhérer au système de facturation électronique ?',
      answer: 'L\'adhésion se fait via Tunisie TradeNet (TTN). Vous devez obtenir un certificat électronique qualifié TUNTRUST et vous abonner au service "El Fatoora". Notre solution simplifie ce processus en gérant l\'intégration technique avec la plateforme.'
    },
    {
      question: 'Puis-je continuer à utiliser mon ancien logiciel de facturation ?',
      answer: 'Oui, grâce à notre module de conversion. Vous pouvez continuer à créer vos factures avec vos outils actuels et utiliser notre solution pour les convertir au format TEIF, les signer et les transmettre à El Fatoora automatiquement.'
    },
    {
      question: 'Quels sont les risques si je ne suis pas conforme ?',
      answer: 'Depuis le 1er juillet 2025, les sanctions sont strictes (Loi Finances 2025, article 71) : amende de 100 à 500 TND par facture papier émise, 250 à 10 000 TND pour facture électronique non conforme, avec un plafond de 50 000 TND. De plus, le rejet des charges peut entraîner un redressement fiscal significatif.'
    },
    {
      question: 'Combien de temps faut-il pour se mettre en conformité ?',
      answer: 'Avec notre module de conversion, la mise en conformité peut être effective en quelques jours. Pour l\'adoption de notre logiciel complet, comptez 1 à 2 semaines incluant la formation et l\'obtention du certificat TUNTRUST.'
    },
    {
      question: 'Comment archiver mes factures électroniques ?',
      answer: 'Les factures électroniques doivent être conservées pendant 10 ans dans leur format original (XML signé). La plateforme El Fatoora conserve une copie, mais vous devez également assurer votre propre archivage. Notre solution propose un archivage automatique sécurisé et conforme.'
    },
    {
      question: 'Quelles sont les références légales de cette obligation ?',
      answer: 'Les textes de référence sont : la Loi de Finances 2016 (article 22), le Décret n°2016-1066, l\'article 18 § II ter du Code de la TVA, l\'article 94 du Code des Droits et Procédures Fiscaux, la Loi de Finances 2025 (article 71 pour les sanctions), et la Loi de Finances 2026 (article 53 pour l\'extension aux services).'
    }
  ];

  const benefits = [
    {
      title: 'Réduction des coûts',
      description: 'Élimination des frais d\'impression, d\'envoi postal et de stockage physique.',
      stat: '-70%',
      statLabel: 'de coûts administratifs'
    },
    {
      title: 'Gain de temps',
      description: 'Automatisation du processus de facturation et de suivi des paiements.',
      stat: '5h',
      statLabel: 'économisées par semaine'
    },
    {
      title: 'Paiements accélérés',
      description: 'Réception instantanée par vos clients et rappels automatiques.',
      stat: '-40%',
      statLabel: 'de délais de paiement'
    },
    {
      title: 'Zéro erreur',
      description: 'Validation automatique des données et calculs garantis.',
      stat: '99.9%',
      statLabel: 'de fiabilité'
    }
  ];

  return (
    <div className="bg-white dark:bg-dark-900 transition-colors">
      <SEO
        title="Guide Facturation Électronique Tunisie"
        description="Guide complet sur la facturation électronique en Tunisie. Loi de Finances 2016, Décret 2016-1066, sanctions 2025, plateforme El Fatoora, format TEIF et mise en conformité."
        keywords="facturation électronique Tunisie, TEIF, El Fatoora, TTN, Tunisie TradeNet, Loi Finances 2025, sanctions, TUNTRUST"
        url="/guide-facturation-electronique"
      />
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-primary-100 px-5 py-2 rounded-full mb-8 border border-white/20">
              <BookOpen className="w-4 h-4" />
              <span className="font-semibold text-sm">Guide Complet</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Tout savoir sur la<br />
              <span className="text-primary-200">Facturation Électronique</span><br />
              en Tunisie
            </h1>
            <p className="text-xl text-primary-50 mb-10 leading-relaxed max-w-3xl mx-auto">
              Comprendre la réglementation, les obligations légales, le format TEIF et la plateforme El Fatoora. Guide complet basé sur la Loi de Finances 2016-2026.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#timeline"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-white text-primary-800 rounded-xl font-bold hover:bg-primary-50 transition-all flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Voir le calendrier</span>
              </a>
              <Link
                to={Page.Billing}
                className="px-8 py-4 bg-accent-500 text-white rounded-xl font-bold hover:bg-accent-600 transition-all flex items-center justify-center space-x-2"
              >
                <span>Nos solutions</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-400 rounded-full blur-[100px] opacity-20 -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-[120px] opacity-10 translate-x-1/2 -translate-y-1/2"></div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-slate-50 dark:bg-dark-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Contexte Réglementaire</h2>
            </div>

            <div className="prose prose-lg max-w-none text-slate-600 dark:text-slate-400">
              <p className="text-xl leading-relaxed mb-6">
                Dans le cadre de la <strong className="text-slate-900 dark:text-white">modernisation du système fiscal tunisien</strong> et de la lutte contre la fraude, le gouvernement a instauré la facturation électronique via la <strong className="text-slate-900 dark:text-white">Loi de Finances 2016 (article 22)</strong> et le <strong className="text-slate-900 dark:text-white">Décret n°2016-1066</strong>.
              </p>
              <p className="leading-relaxed mb-6">
                Le système est géré par <strong className="text-slate-900 dark:text-white">Tunisie TradeNet (TTN)</strong> via la plateforme nationale <strong className="text-slate-900 dark:text-white">"El Fatoora"</strong>. L'objectif est triple : améliorer la <strong className="text-slate-900 dark:text-white">traçabilité des transactions</strong>, réduire l'économie informelle et simplifier les contrôles fiscaux.
              </p>
              <p className="leading-relaxed">
                Le format adopté est le <strong className="text-slate-900 dark:text-white">TEIF (Tunisian Electronic Invoice Format)</strong>, un standard XML signé électroniquement avec un certificat qualifié <strong className="text-slate-900 dark:text-white">TUNTRUST</strong>.
              </p>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white dark:bg-dark-700 p-6 rounded-2xl border border-slate-200 dark:border-slate-600 text-center">
                <div className="text-3xl font-black text-primary-500 dark:text-accent-400 mb-2">2016</div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Cadre légal initial</p>
              </div>
              <div className="bg-white dark:bg-dark-700 p-6 rounded-2xl border border-slate-200 dark:border-slate-600 text-center">
                <div className="text-3xl font-black text-primary-500 dark:text-accent-400 mb-2">2025</div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Sanctions en vigueur (1er juillet)</p>
              </div>
              <div className="bg-white dark:bg-dark-700 p-6 rounded-2xl border border-slate-200 dark:border-slate-600 text-center">
                <div className="text-3xl font-black text-primary-500 dark:text-accent-400 mb-2">TTN</div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Opérateur El Fatoora</p>
              </div>
              <div className="bg-white dark:bg-dark-700 p-6 rounded-2xl border border-slate-200 dark:border-slate-600 text-center">
                <div className="text-3xl font-black text-primary-500 dark:text-accent-400 mb-2">10 ans</div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Durée d'archivage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-white dark:bg-dark-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary-50 dark:bg-primary-500/20 text-primary-600 dark:text-primary-300 text-sm font-bold px-4 py-2 rounded-full mb-4">
              CALENDRIER D'APPLICATION
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
              Quand êtes-vous concerné ?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              L'obligation de facturation électronique s'applique progressivement selon la taille et le secteur d'activité de votre entreprise.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 md:left-1/2 md:-translate-x-0.5"></div>

              {timeline.map((item, idx) => (
                <div key={idx} className={`relative flex items-start mb-12 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className={`bg-white dark:bg-dark-700 p-6 rounded-2xl border ${item.status === 'active' ? 'border-primary-200 dark:border-primary-500/30 shadow-lg shadow-primary-50 dark:shadow-primary-500/10' : 'border-slate-200 dark:border-slate-600'}`}>
                      <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold mb-3 ${item.status === 'active' ? 'bg-primary-50 dark:bg-primary-500/20 text-primary-600 dark:text-primary-300' :
                        item.status === 'upcoming' ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400' :
                          'bg-slate-100 dark:bg-slate-600 text-slate-600 dark:text-slate-300'
                        }`}>
                        {item.status === 'active' && <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>}
                        <span>{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                    </div>
                  </div>

                  {/* Circle marker */}
                  <div className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center ${item.status === 'active' ? 'bg-primary-500 text-white' :
                    item.status === 'upcoming' ? 'bg-amber-500 text-white' :
                      'bg-slate-300 text-slate-600'
                    }`}>
                    {item.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">Vous ne savez pas si vous êtes concerné ?</p>
            <Link
              to={Page.Contact}
              className="inline-flex items-center space-x-2 bg-accent-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-accent-600 transition-all"
            >
              <span>Demander un devis gratuit</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* TEIF Requirements Section */}
      <section className="py-20 bg-dark-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary-400/20 text-primary-200 text-sm font-bold px-4 py-2 rounded-full mb-4 border border-primary-300/30">
              SPÉCIFICATIONS TECHNIQUES
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Exigences du Format TEIF
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Pour être conforme, votre facture électronique doit respecter ces critères définis par l'administration fiscale tunisienne.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teifRequirements.map((req, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-14 h-14 bg-primary-500/20 rounded-xl flex items-center justify-center mb-6">
                  {React.cloneElement(req.icon, { className: 'w-7 h-7 text-primary-300' })}
                </div>
                <h3 className="text-xl font-bold mb-3">{req.title}</h3>
                <p className="text-slate-400 leading-relaxed">{req.description}</p>
              </div>
            ))}
          </div>

          {/* XML Example */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-6 text-center">Exemple simplifié de structure TEIF</h3>
            <div className="bg-dark-800 rounded-2xl p-6 overflow-x-auto border border-dark-700">
              <pre className="text-sm text-slate-300 font-mono">
                {`<?xml version="1.0" encoding="UTF-8"?>
<Invoice xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2">
  <ID>FAC-2024-00001</ID>
  <IssueDate>2024-01-15</IssueDate>
  <InvoiceTypeCode>380</InvoiceTypeCode>
  
  <AccountingSupplierParty>
    <Party>
      <PartyTaxScheme>
        <CompanyID>1234567ABC000</CompanyID> <!-- Matricule fiscal -->
      </PartyTaxScheme>
      <PartyName>
        <Name>Votre Entreprise SARL</Name>
      </PartyName>
    </Party>
  </AccountingSupplierParty>
  
  <InvoiceLine>
    <InvoicedQuantity>10</InvoicedQuantity>
    <LineExtensionAmount currencyID="TND">1000.000</LineExtensionAmount>
    <TaxTotal>
      <TaxAmount currencyID="TND">190.000</TaxAmount>
      <TaxSubtotal>
        <Percent>19</Percent>
      </TaxSubtotal>
    </TaxTotal>
  </InvoiceLine>
  
  <Signature>...</Signature> <!-- Signature électronique -->
</Invoice>`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Penalties Section */}
      <section className="py-20 bg-slate-50 dark:bg-dark-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 dark:bg-amber-500/20 rounded-2xl mb-6">
              <AlertTriangle className="w-8 h-8 text-amber-600 dark:text-amber-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
              Points d'attention réglementaires
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Pour assurer la conformité de votre entreprise, voici les aspects réglementaires à connaître concernant la facturation électronique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {penalties.map((penalty, idx) => (
              <div key={idx} className="bg-white dark:bg-dark-700 p-6 rounded-2xl border border-slate-200 dark:border-slate-600 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-2 mb-4">
                  <FileWarning className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <span className="text-base font-bold text-slate-900 dark:text-white">{penalty.amount}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{penalty.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-700 dark:text-slate-300 font-medium mb-6">
              Nous vous accompagnons pour une mise en conformité sereine et efficace.
            </p>
            <Link
              to={Page.Billing}
              className="inline-flex items-center space-x-2 bg-primary-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-600 transition-all shadow-lg"
            >
              <Shield className="w-5 h-5" />
              <span>Découvrir nos solutions</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-dark-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 text-sm font-bold px-4 py-2 rounded-full mb-4">
              AVANTAGES
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
              La facturation électronique, c'est aussi des bénéfices
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Au-delà de la conformité, la facturation électronique apporte des avantages concrets à votre entreprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center p-8 rounded-3xl border border-slate-100 dark:border-slate-700 hover:shadow-xl dark:hover:shadow-dark-700/50 transition-all group bg-white dark:bg-dark-800">
                <div className="text-4xl font-black text-primary-500 dark:text-accent-400 mb-2 group-hover:scale-110 transition-transform">{benefit.stat}</div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">{benefit.statLabel}</p>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50 dark:bg-dark-800 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 dark:bg-primary-500/20 rounded-2xl mb-6">
              <HelpCircle className="w-8 h-8 text-primary-500 dark:text-primary-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
              Questions Fréquentes
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Tout ce que vous devez savoir sur la facturation électronique en Tunisie.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white dark:bg-dark-700 rounded-2xl border border-slate-200 dark:border-slate-600 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-dark-600 transition-colors"
                >
                  <span className="font-bold text-slate-900 dark:text-white pr-8">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 dark:text-slate-400 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6">
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Prêt à passer à la facturation électronique ?
          </h2>
          <p className="text-xl text-primary-50 mb-10 max-w-2xl mx-auto">
            Nos experts vous accompagnent dans votre mise en conformité. Devis gratuit et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to={Page.Billing}
              className="px-10 py-4 bg-white text-primary-500 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all flex items-center justify-center space-x-2"
            >
              <span>Voir nos solutions</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to={Page.Contact}
              className="px-10 py-4 bg-primary-400 text-white rounded-xl font-bold text-lg hover:bg-primary-300 transition-all border border-primary-300"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BillingGuide;
