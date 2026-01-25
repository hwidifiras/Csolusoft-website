
import React from 'react';
import {
  BarChart3,
  Code2,
  Cpu,
  Globe,
  Smartphone,
  Database,
  ShieldCheck,
  FileText,
  Workflow,
  LineChart,
  Settings,
  Cloud
} from 'lucide-react';
import { NavLink, Page } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Accueil', href: Page.Home },
  { label: 'Facturation Élec.', href: Page.Billing },
  // { label: 'Solutions ERP', href: Page.ERP },
  { label: 'Sur Mesure', href: Page.Dev },
  { label: 'IA', href: Page.AI },
  { label: 'À Propos', href: Page.About },
  { label: 'Contact', href: Page.Contact },
];

export const ERP_FEATURES = [
  {
    title: "Stock & Logistique",
    description: "Optimisation des flux et traçabilité en temps réel.",
    icon: <Database className="w-6 h-6 text-primary-500" />,
    blogSlug: "erp-moderne-vs-excel-pourquoi-migrer"
  },
  {
    title: "Comptabilité & Finance",
    description: "Maîtrise totale de vos chiffres et conformité fiscale.",
    icon: <LineChart className="w-6 h-6 text-primary-500" />,
    blogSlug: "erp-moderne-vs-excel-pourquoi-migrer"
  },
  {
    title: "Gestion Commerciale",
    description: "Accélérez vos ventes et simplifiez vos achats.",
    icon: <BarChart3 className="w-6 h-6 text-primary-500" />,
    blogSlug: "erp-moderne-vs-excel-pourquoi-migrer"
  },
  {
    title: "Reporting IA",
    description: "Tableaux de bord prédictifs pour décider mieux.",
    icon: <Cpu className="w-6 h-6 text-primary-500" />,
    blogSlug: "intelligence-artificielle-entreprise-tunisienne"
  }
];

export const SERVICE_LIST = [
  {
    title: "Applications Web",
    description: "SaaS et plateformes complexes haute performance.",
    icon: <Globe className="w-6 h-6" />,
    pageLink: Page.Dev,
    blogSlug: "developpement-sur-mesure-avantages"
  },
  {
    title: "Apps Mobiles",
    description: "Solutions iOS & Android natives et hybrides.",
    icon: <Smartphone className="w-6 h-6" />,
    pageLink: Page.Dev,
    blogSlug: "developpement-sur-mesure-avantages"
  },
  {
    title: "Logiciels Desktop",
    description: "Outils métiers robustes pour Windows, Mac & Linux.",
    icon: <Settings className="w-6 h-6" />,
    pageLink: Page.Dev,
    blogSlug: "developpement-sur-mesure-avantages"
  },
  {
    title: "Cloud & APIs",
    description: "Intégration transparente de vos écosystèmes.",
    icon: <Cloud className="w-6 h-6" />,
    pageLink: Page.Dev,
    blogSlug: "transformation-digitale-pme-tunisie"
  }
];
