export const languages = [
  { code: "en", label: "EN", name: "English", dir: "ltr" },
  { code: "fr", label: "FR", name: "Français", dir: "ltr" },
];

export const translations = {
  en: {
    meta: {
      title: "Business Setup SaaS Landing",
      description: "A landing website for business setup management software.",
    },
    nav: {
      logo: "SaaS",
      links: [
        { label: "Home", href: "#home", icon: "/icons/home.svg" },

        { label: "Our Packages", href: "#packages", icon: "/icons/box.svg" },
        { label: "Features", href: "#features", icon: "/icons/crown.svg" },
        { label: "Our Team", href: "#contact", icon: "/icons/users.svg" },
      ],
      bookDemo: "Book Demo",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      lightMode: "Light mode",
      darkMode: "Dark mode",
    },
    common: {
      sectionBadge: "Solution Section",
      learnMore: "Learn More",
      bookDemo: "Book a Free Call",
      viewPlatform: "View Platform",
      submit: "Send Request",
      next: "Next",
      included: "Included",
    },
    hero: {
      eyebrow: "Business Setup Management Platform",
      titleStart: "Manage Your Dubai Business Setup Tasks in",
      titleGradient: "One Platform",
      subtitle:
        "A complete client, document, task, package, and payment management system for business setup consultancies that want to replace scattered sheets with one clean operating dashboard.",
      primary: "Book Demo",
      secondary: "Book a Free Demo",
      stats: [
        { value: "78%", label: "Process visibility" },
        { value: "24/7", label: "Client tracking" },
        { value: "5+", label: "Core modules" },
      ],
    },
    problem: {
      badge: "Problem Section",
      title: "Still Managing Clients on WhatsApp, Excel, and Google Drive?",
      subtitle:
        "Manual business setup operations create delays, missing documents, unclear payments, and weak follow-up. Your team needs one place to see every lead, client, package, task, and payment status.",
      pains: [
        "Client data scattered across chats and spreadsheets",
        "Documents get missed, duplicated, or shared without structure",
        "Payment progress is hard to track across each package",
        "No clear view of lead status, assigned tasks, and conversion stage",
        "Clients keep asking for updates because they cannot see progress",
        "Clients keep asking for updates because they cannot see new",
        "Clients keep asking for updates because they cannot see old",
      ],
    },
    solution: {
      badge: "Solution",
      title: "A Complete Software for Business Setup Management",
      subtitle:
        "Designed for consultancies that manage Dubai company formation, visa, bank account, tax registration, documents, payments, and client communication.",
      cards: [
        {
          title: "Lead to Converted Client",
          text: "Capture leads, qualify them, manage their status, and convert them into active clients from one structured dashboard.",
          image: "/images/hero-dashboard.webp",
        },
        {
          title: "Package Selection",
          text: "Assign Basic, Standard, All-in, and Premium packages with clear service scope and progress visibility.",
          image: "/images/package-management.webp",
        },
        {
          title: "Document Collection",
          text: "Collect, review, and organize business and personal documents required for business setup workflows.",
          image: "/images/documents-management-wide.webp",
        },
        {
          title: "Payment Tracking",
          text: "Track total amount, paid amount, pending amount, collection progress, and payment history per client.",
          image: "/images/client-lead-profile.webp",
        },
        {
          title: "Task Completion",
          text: "Keep internal teams aligned with step-by-step operational tasks and clean progress indicators.",
          image: "/images/hero-dashboard-wide.webp",
        },
      ],
    },
    features: {
      badge: "Platform Features",
      title: "Everything You Need to Manage\nBusiness Setup Clients",
      subtitle:
        "Use the dashboard screenshots as real product visuals across each section. No recreated fake UI is needed.",
      rows: [
        {
          title: "Client Management",
          image: "/images/client.png",
          bullets: [
            "Convert lead into client",
            "View client details",
            "Assign package",
            "Track client progress",
            "Manage documents, payments, and tasks",
          ],
          para: "Manage every client from the first lead stage to final business setup completion in one organized dashboard.",
        },
        {
          title: "Package Management & Task Tracking",
          image: "/images/package-management.webp",
          bullets: [
            "Basic, Standard, All in One &  Premium Package",
            "Update task status",
            "Track pending, in-progress, and completed work",
            "Keep company and client updated",
            "Manage internal workflow",
          ],
          para: "Your team always knows what has been done, what is pending, and what needs attention.",
        },
        {
          title: "Document Management & Payment Tracking",
          image: "/images/m.png",

          bullets: [
            "Add and manage new leads",
            "Track lead status",
            "Convert leads into clients",
            "Store lead contact information",
            "Follow up with leads easily",
          ],
          para: "You get better visibility of your revenue, pending payments, and client payment status.",
        },
        {
          title: "Client Portal",
          image: "/images/super-admin-dashboard.webp",
          bullets: [
            "Client login access",
            "View service progress",
            "Upload required documents",
            "View assigned package",
            "Track tasks and updates",
          ],
          para: "Clients stop asking for updates again and again because they can check their progress directly.",
        },
        {
          title: "Super Admin / Company Dashboard",
          image: "/images/client-dashboard.webp",
          bullets: [
            "Manage leads & Clients",
            "Manage packages",
            "View payments",
            "Track documents",
            "Monitor tasks",
          ],
          para: "Clients stop asking for updates again and again because they can check their progress directly.",
        },
      ],
    },
    businessManagement: {
      title: "A Complete Software for Business Setup Management",
      cards: {
        lead: {
          title: "Lead To Converted Client",
          description:
            "Ideal for entrepreneurs who want to launch their company in Dubai and start their business journey quickly.",
          newLeads: "New Leads",
          qualified: "Qualified",
          converted: "Converted",
        },
        package: {
          title: "Package Selection",
          description:
            "Ideal for entrepreneurs who want to launch their company in Dubai and start their business journey quickly.",
          plans: ["Basic Plan", "Standard Plan", "All in One Plan"],
        },
        document: {
          title: "Document Collection",
          description:
            "Ideal for entrepreneurs who want to launch their company in Dubai and start their business journey quickly.",
        },
        payment: {
          title: "Payment Tracking",
          description:
            "Ideal for entrepreneurs who want to launch their company in Dubai and start their business journey quickly.",
        },
        task: {
          title: "Task Completion",
          description:
            "Ideal for entrepreneurs who want to launch their company in Dubai and start their business journey quickly.",
        },
      },
    },
    packages: {
      badge: "Packages",
      title: "Simple Plans for Every Consultancy Workflow",
      subtitle:
        "Show your software as a scalable system that can manage different business setup packages and internal team responsibilities.",
      plans: [
        {
          name: "Basic",
          price: "Starter",
          features: ["Lead management", "Client profile", "Basic tasks"],
        },
        {
          name: "Standard",
          price: "Growth",
          features: ["Document tracking", "Payment overview", "Package stages"],
        },
        {
          name: "All-in",
          price: "Advanced",
          features: [
            "Full process tracking",
            "Team workflow",
            "Client progress view",
          ],
        },
        {
          name: "Premium",
          price: "Enterprise",
          features: ["Complete dashboard", "Custom setup", "Priority support"],
        },
      ],
    },
    workflow: {
      badge: "Workflow",
      title: "From Lead Capture to Client Progress in One System",
      steps: [
        "Lead captured",
        "Package selected",
        "Documents uploaded",
        "Tasks completed",
        "Payment tracked",
        "Client updated",
      ],
    },
    solution: {
      badge: "Solution Section",
      title: "Everything You Need to Manage Business Setup Clients",
      steps: {
        one: {
          step: "Step 1",
          title: "Add Lead",
          description:
            "Add a new lead with contact and business setup details.",
        },
        two: {
          step: "Step 2",
          title: "Convert Lead to Client",
          description:
            "Once the lead is confirmed, convert them into a client.",
        },
        three: {
          step: "Step 3",
          title: "Assign Package",
          description:
            "Create and choose the package you have added to the system.",
        },
        four: {
          step: "Step 4",
          title: "Upload Documents",
          description: "Company and client can upload required documents.",
        },
        five: {
          step: "Step 5",
          title: "Track Tasks",
          description: "Manage each step of the business setup process.",
        },
        six: {
          step: "Step 6",
          title: "Keep Client Updated",
          description: "Record payments and view pending amounts.",
        },
      },
    },
    faq: {
      badge: "Solution Section",
      title: "Everything You Need to Manage\nBusiness Setup Clients",
      items: [
        {
          q: "Can this website use the dashboard screenshots as product visuals?",
          a: "Yes. The project uses your uploaded dashboard images directly as section visuals instead of rebuilding those dashboards as HTML.",
        },
        {
          q: "Is the website responsive?",
          a: "Yes. The layout is mobile-first and adapts for mobile, tablet, laptop, and large screen sizes.",
        },
        {
          q: "Does it support multiple languages?",
          a: "Yes. English, French, and Arabic are included, with RTL support for Arabic.",
        },
        {
          q: "Does it support light and dark mode?",
          a: "Yes. The theme toggle saves the selected preference in localStorage.",
        },
        {
          q: "Can I change the content easily?",
          a: "Yes. All major website copy is stored inside the translations file, and sections are reusable.",
        },
      ],
    },
    contact: {
      badge: "Contact us",
      title: "Let’s Connect! Reach Out Anytime!",
      subtitle:
        "Share your details and book a demo for your business setup management platform.",
      fields: { name: "Your Name", email: "Your Email", message: "Message" },
      button: "Book Demo",
    },
    footer: {
      text: "Business setup management software landing page built with Next.js and Tailwind CSS.",
      rights: "All rights reserved.",
    },
  },
  fr: {
    meta: {
      title: "Landing SaaS Business Setup",
      description:
        "Un site vitrine pour un logiciel de gestion business setup.",
    },
    businessManagement: {
      title: "Un logiciel complet pour la gestion de création d’entreprise",
      cards: {
        lead: {
          title: "Du prospect au client converti",
          description:
            "Idéal pour les entrepreneurs qui souhaitent lancer leur entreprise à Dubaï et démarrer rapidement leur parcours.",
          newLeads: "Nouveaux prospects",
          qualified: "Qualifiés",
          converted: "Convertis",
        },
        package: {
          title: "Sélection du forfait",
          description:
            "Idéal pour les entrepreneurs qui souhaitent lancer leur entreprise à Dubaï et démarrer rapidement leur parcours.",
          plans: ["Forfait Basic", "Forfait Standard", "Forfait All in One"],
        },
        document: {
          title: "Collecte des documents",
          description:
            "Idéal pour les entrepreneurs qui souhaitent lancer leur entreprise à Dubaï et démarrer rapidement leur parcours.",
        },
        payment: {
          title: "Suivi des paiements",
          description:
            "Idéal pour les entrepreneurs qui souhaitent lancer leur entreprise à Dubaï et démarrer rapidement leur parcours.",
        },
        task: {
          title: "Achèvement des tâches",
          description:
            "Idéal pour les entrepreneurs qui souhaitent lancer leur entreprise à Dubaï et démarrer rapidement leur parcours.",
        },
      },
    },
    nav: {
      logo: "SaaS",
      links: [
        { label: "Accueil", href: "#home", icon: "/icons/home.svg" },
        {
          label: "Fonctionnalités",
          href: "#features",
          icon: "/icons/crown.svg",
        },
        { label: "Packages", href: "#packages", icon: "/icons/box.svg" },
        { label: "Équipe", href: "#contact", icon: "/icons/users.svg" },
      ],
      bookDemo: "Réserver une démo",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      lightMode: "Mode clair",
      darkMode: "Mode sombre",
    },
    common: {
      sectionBadge: "Section Solution",
      learnMore: "En savoir plus",
      bookDemo: "Réserver une démo",
      viewPlatform: "Voir la plateforme",
      submit: "Envoyer",
      next: "Suivant",
      included: "Inclus",
    },
    hero: {
      eyebrow: "Plateforme de gestion business setup",
      titleStart: "Gérez toutes vos tâches Business Setup à Dubaï dans",
      titleGradient: "une seule plateforme",
      subtitle:
        "Un système complet pour gérer les clients, documents, tâches, packages et paiements des cabinets de conseil qui veulent remplacer les fichiers dispersés par un tableau de bord clair.",
      primary: "Réserver une démo",
      secondary: "Voir les fonctionnalités",
      stats: [
        { value: "78%", label: "Visibilité process" },
        { value: "24/7", label: "Suivi client" },
        { value: "5+", label: "Modules clés" },
      ],
    },
    problem: {
      badge: "Problème",
      title:
        "Vous gérez encore vos clients sur WhatsApp, Excel et Google Drive ?",
      subtitle:
        "Les opérations manuelles créent des retards, des documents manquants, des paiements peu clairs et un suivi difficile. Votre équipe a besoin d’un seul espace pour suivre les leads, clients, packages, tâches et paiements.",
      pains: [
        "Données clients dispersées entre chats et fichiers",
        "Documents oubliés, dupliqués ou mal organisés",
        "Paiements difficiles à suivre par package",
        "Manque de visibilité sur le statut des leads et des tâches",
        "Clients qui demandent souvent des mises à jour",
      ],
    },
    solution: {
      badge: "Solution",
      title: "Un logiciel complet pour gérer le Business Setup",
      subtitle:
        "Conçu pour les cabinets qui gèrent la création d’entreprise à Dubaï, les visas, les comptes bancaires, la fiscalité, les documents, les paiements et la relation client.",
      cards: [
        {
          title: "Du lead au client",
          text: "Capturez, qualifiez et convertissez vos leads en clients actifs depuis un tableau de bord structuré.",
          image: "/images/hero-dashboard.webp",
        },
        {
          title: "Sélection de package",
          text: "Attribuez les packages Basic, Standard, All-in et Premium avec une visibilité claire.",
          image: "/images/package-management.webp",
        },
        {
          title: "Collecte de documents",
          text: "Collectez, vérifiez et organisez les documents personnels et business nécessaires.",
          image: "/images/documents-management-wide.webp",
        },
        {
          title: "Suivi des paiements",
          text: "Suivez les montants totaux, payés, en attente et l’historique des paiements.",
          image: "/images/client-lead-profile.webp",
        },
        {
          title: "Validation des tâches",
          text: "Gardez les équipes alignées avec des étapes et indicateurs de progression.",
          image: "/images/hero-dashboard-wide.webp",
        },
      ],
    },
    features: {
      badge: "Fonctionnalités",
      title: "Tout ce qu’il faut pour gérer vos clients Business Setup",
      subtitle:
        "Les captures d’écran du produit sont utilisées comme visuels réels dans chaque section.",
      rows: [
        {
          title: "Gestion client",
          image: "/images/client-dashboard.webp",
          bullets: [
            "Pipeline des leads",
            "Bio client et package",
            "Informations business",
            "Workflow de conversion",
          ],
        },
        {
          title: "Suivi des tâches par package",
          image: "/images/package-management.webp",
          bullets: [
            "Étapes par package",
            "Indicateurs de progression",
            "Visibilité équipe",
            "Responsabilités claires",
          ],
          para: "new",
        },
        {
          title: "Gestion documentaire",
          image: "/images/documents-management.webp",
          bullets: [
            "Documents business",
            "Documents personnels",
            "Flux upload et revue",
            "Historique propre",
          ],
          para: "para",
        },
        {
          title: "Portail global",
          image: "/images/super-admin-dashboard.webp",
          bullets: [
            "Analyse des leads",
            "Suivi des sources",
            "Leads entrants et qualifiés",
            "Aperçu paiements",
          ],
          para: "old",
        },
      ],
    },
    packages: {
      badge: "Packages",
      title: "Des plans simples pour chaque workflow",
      subtitle:
        "Présentez votre logiciel comme un système capable de gérer plusieurs packages et responsabilités internes.",
      plans: [
        {
          name: "Basic",
          price: "Départ",
          features: ["Gestion des leads", "Profil client", "Tâches simples"],
        },
        {
          name: "Standard",
          price: "Croissance",
          features: ["Documents", "Paiements", "Étapes package"],
        },
        {
          name: "All-in",
          price: "Avancé",
          features: ["Suivi complet", "Workflow équipe", "Vue client"],
        },
        {
          name: "Premium",
          price: "Entreprise",
          features: [
            "Dashboard complet",
            "Configuration dédiée",
            "Support prioritaire",
          ],
        },
      ],
    },
    workflow: {
      badge: "Workflow",
      title: "Du lead au suivi client dans un seul système",
      steps: [
        "Lead capturé",
        "Package choisi",
        "Documents envoyés",
        "Tâches validées",
        "Paiement suivi",
        "Client informé",
      ],
    },
    solution: {
      badge: "Section Solution",
      title:
        "Tout ce dont vous avez besoin pour gérer vos clients de création d’entreprise",
      steps: {
        one: {
          step: "Étape 1",
          title: "Ajouter un prospect",
          description:
            "Ajoutez un nouveau prospect avec ses coordonnées et les détails de création d’entreprise.",
        },
        two: {
          step: "Étape 2",
          title: "Convertir le prospect en client",
          description:
            "Une fois le prospect confirmé, convertissez-le en client.",
        },
        three: {
          step: "Étape 3",
          title: "Attribuer un forfait",
          description:
            "Créez et choisissez le forfait que vous avez ajouté au système.",
        },
        four: {
          step: "Étape 4",
          title: "Téléverser les documents",
          description:
            "L’entreprise et le client peuvent téléverser les documents requis.",
        },
        five: {
          step: "Étape 5",
          title: "Suivre les tâches",
          description:
            "Gérez chaque étape du processus de création d’entreprise.",
        },
        six: {
          step: "Étape 6",
          title: "Tenir le client informé",
          description:
            "Enregistrez les paiements et consultez les montants en attente.",
        },
      },
    },
    faq: {
      badge: "FAQ",
      title: "Tout ce que vous devez savoir",
      items: [
        {
          q: "Le site utilise-t-il les captures du dashboard ?",
          a: "Oui. Les images fournies sont utilisées directement comme visuels produit.",
        },
        {
          q: "Le site est-il responsive ?",
          a: "Oui. Le layout est mobile-first et fonctionne sur mobile, tablette, laptop et grands écrans.",
        },
        {
          q: "Y a-t-il plusieurs langues ?",
          a: "Oui. Anglais, français et arabe sont inclus avec RTL pour l’arabe.",
        },
        {
          q: "Le mode clair/sombre est-il inclus ?",
          a: "Oui. La préférence est sauvegardée dans localStorage.",
        },
        {
          q: "Puis-je modifier le contenu facilement ?",
          a: "Oui. Le texte principal est centralisé dans le fichier de traductions.",
        },
      ],
    },
    contact: {
      badge: "Contact",
      title: "Restons en contact !",
      subtitle:
        "Partagez vos informations et réservez une démo de la plateforme.",
      fields: { name: "Votre nom", email: "Votre email", message: "Message" },
      button: "Réserver une démo",
    },
    footer: {
      text: "Landing page SaaS Business Setup créée avec Next.js et Tailwind CSS.",
      rights: "Tous droits réservés.",
    },
  },
};

export function getDictionary(locale) {
  return translations[locale] || translations.en;
}

export function getDirection(locale) {
  return languages.find((language) => language.code === locale)?.dir || "ltr";
}
