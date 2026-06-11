export interface Service {
  id: string;
  title: string;
  description: string;
  benefit: string;
  iconName: string; // Used to dynamically map Lucide icons
}

export interface ClientType {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProblemSolve {
  id: string;
  problem: string;
  solution: string;
}

export interface PackageOffer {
  id: string;
  name: string;
  bestFor: string;
  priceTag: string;
  features: string[];
  ctaText: string;
}

export interface PortfolioProject {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  result: string;
}

export interface TechCategory {
  id: string;
  label: string;
  iconName: string; // Used to dynamically map Lucide icons
  skills: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}
