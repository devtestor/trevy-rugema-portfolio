import { 
  Service, 
  ClientType, 
  ProblemSolve, 
  PackageOffer, 
  PortfolioProject, 
  ProcessStep, 
  Testimonial 
} from "../types";

export const SERVICES: Service[] = [
  {
    id: "custom-web-dev",
    title: "Custom Web Application Development",
    description: "Build dashboards, SaaS platforms, business portals, landing pages, internal tools, and client-facing web applications.",
    benefit: "Turn ideas into professional, scalable digital products.",
    iconName: "Globe"
  },
  {
    id: "ai-workflow-automation",
    title: "AI Workflow Automation",
    description: "Automate repetitive business tasks using AI, APIs, workflow tools, custom scripts, and intelligent systems.",
    benefit: "Save time, reduce manual work, and improve business efficiency.",
    iconName: "Cpu"
  },
  {
    id: "agentic-ai-solutions",
    title: "Agentic AI Solutions",
    description: "Build AI agents that can research, summarize, handle workflows, connect to tools, support customers, and assist business operations.",
    benefit: "Give businesses intelligent digital workers that support daily operations.",
    iconName: "BrainCircuit"
  },
  {
    id: "chatbots-ai-assistants",
    title: "Chatbots & AI Assistants",
    description: "Create AI chatbots and assistants for customer support, lead qualification, internal knowledge bases, and business communication.",
    benefit: "Respond faster to customers and capture more leads.",
    iconName: "MessageSquareText"
  },
  {
    id: "crm-whatsapp-email",
    title: "CRM, WhatsApp & Email Automation",
    description: "Build automation systems for customer follow-ups, sales pipelines, WhatsApp messaging, email campaigns, notifications, and lead tracking.",
    benefit: "Improve sales follow-up and reduce missed opportunities.",
    iconName: "MailCheck"
  },
  {
    id: "landing-page-lead-capture",
    title: "Landing Page & Lead Capture Systems",
    description: "Design and build high-converting landing pages with contact forms, lead magnets, booking CTAs, and analytics-ready structure.",
    benefit: "Help businesses attract and convert more customers.",
    iconName: "MousePointerClick"
  },
  {
    id: "mvp-saas-dev",
    title: "MVP & SaaS Development",
    description: "Build startup MVPs, SaaS dashboards, authentication systems, databases, admin panels, subscriptions, and backend APIs.",
    benefit: "Help founders launch faster with a working product.",
    iconName: "Rocket"
  },
  {
    id: "api-integration-backend",
    title: "API Integration & Backend Systems",
    description: "Build secure backend services, REST APIs, payment integrations, CRM integrations, third-party tool integrations, and database-driven systems.",
    benefit: "Connect business tools and make systems work together.",
    iconName: "Layers"
  },
  {
    id: "devops-cloud",
    title: "DevOps, Cloud Deployment & Maintenance",
    description: "Deploy and manage applications using Docker, VPS, cloud servers, CI/CD pipelines, monitoring, backups, and environment configuration.",
    benefit: "Keep applications reliable, fast, and easier to maintain.",
    iconName: "Server"
  },
  {
    id: "cybersecurity-dev",
    title: "Cybersecurity-Aware Development",
    description: "Build applications with secure authentication, authorization, input validation, environment protection, and basic security best practices.",
    benefit: "Protect business systems and customer data from common security risks.",
    iconName: "ShieldCheck"
  }
];

export const CLIENT_TYPES: ClientType[] = [
  {
    id: "startups",
    title: "Startups",
    description: "We help turn ideas into fast, reliable MVPs to acquire users or raise modern funding.",
    iconName: "Zap"
  },
  {
    id: "small-businesses",
    title: "Small Businesses",
    description: "We modernize manual systems to optimize back-office speed and client interaction.",
    iconName: "Store"
  },
  {
    id: "real-estate",
    title: "Real Estate Businesses",
    description: "We create listing databases and set up auto-responders for property seekers.",
    iconName: "Home"
  },
  {
    id: "ecommerce",
    title: "E-commerce Businesses",
    description: "We help bridge stores with custom dashboards, shipping tracking, and payment gateways.",
    iconName: "ShoppingBag"
  },
  {
    id: "agencies",
    title: "Agencies",
    description: "We automate custom pipeline alerts, client onboarding tools, and executive summaries.",
    iconName: "Briefcase"
  },
  {
    id: "coaches-consultants",
    title: "Coaches & Consultants",
    description: "We install automatic self-booking pages and content marketing resource deliverers.",
    iconName: "Award"
  },
  {
    id: "local-service",
    title: "Local Service Businesses",
    description: "We deploy Google booking maps, phone automated callback pages, and SMS calendars.",
    iconName: "MapPin"
  },
  {
    id: "crypto-web3",
    title: "Crypto & Web3 Startups",
    description: "We construct reliable wallet integrations, explorers, and decentralized auth structures.",
    iconName: "Coins"
  },
  {
    id: "needs-automation",
    title: "Businesses Needing Automation",
    description: "We wipe out dry, dual data entries and replace them with instantaneous system linkages.",
    iconName: "Repeat"
  },
  {
    id: "founders-mvps",
    title: "Founders Building MVPs",
    description: "We compile dynamic full-stack boilerplate software so you can begin receiving client checkout fees immediately.",
    iconName: "Activity"
  }
];

export const PROBLEMS_SOLVED: ProblemSolve[] = [
  {
    id: "p1",
    problem: "Manual work is wasting too much time",
    solution: "I build automation systems that handle repetitive tasks."
  },
  {
    id: "p2",
    problem: "The business does not have a professional website or platform",
    solution: "I build modern websites, dashboards, and web applications."
  },
  {
    id: "p3",
    problem: "Leads are being lost or not followed up",
    solution: "I create lead capture systems, CRM workflows, WhatsApp automation, and email automation."
  },
  {
    id: "p4",
    problem: "The business needs an AI chatbot or assistant",
    solution: "I build AI assistants that answer questions, qualify leads, and support operations."
  },
  {
    id: "p5",
    problem: "Tools and systems are disconnected",
    solution: "I integrate APIs, CRMs, payment systems, databases, and business tools."
  },
  {
    id: "p6",
    problem: "The business has an idea but no working MVP",
    solution: "I turn product ideas into usable MVPs and SaaS platforms."
  },
  {
    id: "p7",
    problem: "Apps are slow, unreliable, or hard to deploy",
    solution: "I set up DevOps, cloud deployment, Docker, CI/CD, and monitoring basics."
  },
  {
    id: "p8",
    problem: "The business is worried about security",
    solution: "I use cybersecurity-aware development practices to reduce common risks."
  }
];

export const PACKAGES: PackageOffer[] = [
  {
    id: "pkg-starter",
    name: "Starter Business Website",
    bestFor: "Small businesses that need a professional, trustworthy online presence.",
    priceTag: "Starting from $1,500",
    features: [
      "Responsive bespoke landing page",
      "Instant secure Contact form",
      "Interactive Service outline cards",
      "Basic SEO search meta tagging",
      "Social media link sync",
      "Highly visible Lead capture CTA",
      "Deployment & hosting support"
    ],
    ctaText: "Request Website Quote"
  },
  {
    id: "pkg-lead-gen",
    name: "Lead Generation System",
    bestFor: "Businesses that want to capture and follow up with more high-intent clients.",
    priceTag: "Starting from $2,500",
    features: [
      "Optimized high-converting landing page",
      "Intelligent lead capture web forms",
      "Automated CRM or Google Sheets synchronization",
      "WhatsApp, SMS or Email notification triggering",
      "Calendar booking software integration",
      "Advanced conversions-analytics ready layout"
    ],
    ctaText: "Build My Lead System"
  },
  {
    id: "pkg-ai-automation",
    name: "AI Business Automation",
    bestFor: "Businesses that want to reclaim lost hours and automate tedious data entries.",
    priceTag: "Custom Quote",
    features: [
      "AI workflow automations with Make/Zapier/Scripts",
      "Custom conversational Customer Support Chatbot",
      "Third-party REST API integration hooks",
      "Automatic email responses or WhatsApp follow-up pipelines",
      "Operational summary reporting dashboard",
      "Complete workflow execution documentation"
    ],
    ctaText: "Automate My Business"
  },
  {
    id: "pkg-mvp-saas",
    name: "MVP / SaaS Development",
    bestFor: "Early-stage founders and visionary startups building scalable web applications.",
    priceTag: "Custom Quote",
    features: [
      "Multi-role user authentication setup (Auth)",
      "Interactive modern client & admin dashboards",
      "Relational SQL or NoSQL production database structure",
      "Robust RESTful Backend endpoints & routing",
      "Complete admin management dashboard panel",
      "Stripe or payment processing gateway placeholders",
      "Comprehensive cloud VPS deployment config"
    ],
    ctaText: "Build My MVP"
  },
  {
    id: "pkg-devops",
    name: "DevOps & Cloud Setup",
    bestFor: "Teams that need reliable, high-speed continuous deployments.",
    priceTag: "Custom Quote",
    features: [
      "Lightweight Docker containerization",
      "Scalable VPS Linux or Cloud Instance deployment",
      "Automated GitHub Actions CI/CD deployment pipelines",
      "Secure production environment variables layout",
      "Web service state health monitoring basics",
      "Automatic regular database backup strategies",
      "Post-launch infrastructure maintenance guides"
    ],
    ctaText: "Set Up My Deployment"
  }
];

export const PROJECTS: PortfolioProject[] = [
  {
    id: "proj-1",
    name: "AI Customer Support Assistant",
    description: "An AI assistant that handles tier-1 customer questions, collects qualified leads, and forwards complex inquiries directly to the business owner via instant alerts.",
    technologies: ["Next.js", "OpenAI SDK", "Node.js", "PostgreSQL"],
    result: "Reduced repetitive manual support load by 45% and improved speed to lead from 4 hours to instantaneous."
  },
  {
    id: "proj-2",
    name: "Real Estate Listing Platform",
    description: "A professional portal featuring interactive searches for properties, high-impact photo galleries, land listings, and rental vacancies.",
    technologies: ["Next.js", "Django REST Framework", "PostgreSQL", "AWS S3 / VPS"],
    result: "Allowed local prospects to search properties friction-free, translating to a 30% increase in monthly property tour schedules."
  },
  {
    id: "proj-3",
    name: "Business Automation Dashboard",
    description: "A dashboard syncing sales reps, inbound leads, and multi-step tasks across isolated communication channels.",
    technologies: ["React", "TypeScript", "REST APIs", "PostgreSQL"],
    result: "Replaced 3 spreadsheets with a fast single source of truth, removing lead loss and boosting coordinator accountability."
  },
  {
    id: "proj-4",
    name: "Crypto Wallet / Exchange Prototype",
    description: "A modern proof-of-concept wallet and swap system supporting user accounts, transaction histories, simulated ledger actions, deposits, and withdrawal orders.",
    technologies: ["Django", "React Component Core", "Web3.js", "PostgreSQL"],
    result: "Engineered a reliable, highly secure visual structure for a startup to successfully pitch seed investors with real working features."
  },
  {
    id: "proj-5",
    name: "DevOps Deployment Pipeline",
    description: "An automated, Zero-Downtime production stack utilizing containers, configurations protection, and integrated load balancing.",
    technologies: ["Docker", "GitHub Actions", "VPS hosting", "Nginx Reverse Proxy"],
    result: "Reduced deployment cycles from 35-minute manual commands into a 120-second automated merge pipeline with zero customer interruption."
  },
  {
    id: "proj-6",
    name: "Lead Capture Landing Page",
    description: "High-contrast conversion environment targeted specifically for local service agencies with calendar slot embedding.",
    technologies: ["Next.js", "Talwind CSS", "Web Form API"],
    result: "Boosted cold visitor-to-consultation conversion rate by 18% over the previous legacy layout."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery Call",
    description: "We discuss your business model, persistent workflow bottlenecks, product ideas, and what you aim to build."
  },
  {
    step: 2,
    title: "Requirement Analysis",
    description: "I define the core application features, workflow diagrams, external APIs, databases, and secure technical structure needed."
  },
  {
    step: 3,
    title: "Proposal & Timeline",
    description: "You receive a transparent project scope of work, step-by-step milestone deliverables, and estimated launch dates."
  },
  {
    step: 4,
    title: "Design & Development",
    description: "I write modern production code and construct the automated interfaces, updating you at each milestone."
  },
  {
    step: 5,
    title: "Testing & Deployment",
    description: "I perform deep end-to-end functionality checks, security validation, and host the final product live in your production cloud server."
  },
  {
    step: 6,
    title: "Support & Improvements",
    description: "I support you post-launch with speed audits, structural backups setup, and operational guidance as your systems expand."
  }
];

export const WHY_WORK_WITH_ME: string[] = [
  "I understand both software architecture and business conversion needs",
  "I build highly practical systems that save money, not just abstract dashboards",
  "I can automate tedious, repeatable manual workflows using AI and API middleware",
  "I can rapidly construct clean, fully functioning MVPs and SaaS platforms",
  "I set up reliable cloud docker deployment networks containing backups",
  "I implement cybersecurity-aware practices to prevent common input risks",
  "I communicate clearly and break updates into transparent milestones",
  "I prioritize system speed, clean typography, and client-acquiring user flows"
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    quote: "Trevy helped us turn a manual data entry process into a simple automated system. It saved our team over 15 hours every week and eliminated coordinate errors completely.",
    author: "William Henderson",
    role: "Chief Operating Officer",
    company: "Apex Agency Group"
  },
  {
    id: "t-2",
    quote: "The web application Trevy designed gave our real estate team a beautiful, ultra-quick source of truth for listing inquiries. Our speed-to-response rates plummeted down to minutes.",
    author: "Elena Petrova",
    role: "Founding Partner",
    company: "Vanguard Asset Management"
  },
  {
    id: "t-3",
    quote: "Working with Trevy is stellar. He translated our abstract SaaS ideas into a secure working MVP with Stripe and database configurations faster than we thought possible.",
    author: "Marc Dupond",
    role: "Co-Founder",
    company: "Signia AI SaaS"
  }
];
