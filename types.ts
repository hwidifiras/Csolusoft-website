
// Added React import to resolve missing namespace error
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  tag?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export enum Page {
  Home = '/',
  ERP = '/solutions-erp',
  Dev = '/developpement',
  AI = '/intelligence-artificielle',
  Services = '/services',
  Billing = '/facturation-electronique',
  About = '/a-propos',
  Contact = '/contact'
}
