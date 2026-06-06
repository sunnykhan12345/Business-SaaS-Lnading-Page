export const languages = [
  { code: "en", label: "EN", name: "English", dir: "ltr" },
  { code: "fr", label: "FR", name: "Français", dir: "ltr" },
  { code: "ar", label: "AR", name: "العربية", dir: "rtl" },
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
        { label: "Features", href: "#features", icon: "/icons/crown.svg" },
        { label: "Our Packages", href: "#packages", icon: "/icons/box.svg" },
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
        "Clients keep asking for updates because they cannot see progress",
        "Clients keep asking for updates because they cannot see progress",
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
      title: "Everything You Need to Manage Business Setup Clients",
      subtitle:
        "Use the dashboard screenshots as real product visuals across each section. No recreated fake UI is needed.",
      rows: [
        {
          title: "Client Management",
          image: "/images/client-dashboard.webp",
          bullets: [
            "Lead status pipeline",
            "Client bio and package details",
            "Business information fields",
            "Conversion workflow",
          ],
        },
        {
          title: "Package-wise Task Tracking",
          image: "/images/package-management.webp",
          bullets: [
            "Package based steps",
            "Task progress indicators",
            "Department visibility",
            "Operational accountability",
          ],
        },
        {
          title: "Document Management",
          image: "/images/documents-management.webp",
          bullets: [
            "Business documents",
            "Personal documents",
            "Upload and review flow",
            "Clean client document history",
          ],
        },
        {
          title: "Global Portal",
          image: "/images/super-admin-dashboard.webp",
          bullets: [
            "Lead analytics",
            "Source tracking",
            "Inbound and qualified leads",
            "Payment overview",
          ],
        },
      ],
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
    faq: {
      badge: "FAQ",
      title: "Everything You Need to Know",
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
      badge: "Contact",
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
  ar: {
    meta: {
      title: "صفحة SaaS لإدارة تأسيس الأعمال",
      description: "موقع تعريفي لبرنامج إدارة تأسيس الشركات.",
    },
    nav: {
      logo: "SaaS",
      links: [
        { label: "الرئيسية", href: "#home", icon: "/icons/home.svg" },
        { label: "المزايا", href: "#features", icon: "/icons/crown.svg" },
        { label: "الباقات", href: "#packages", icon: "/icons/box.svg" },
        { label: "الفريق", href: "#contact", icon: "/icons/users.svg" },
      ],
      bookDemo: "احجز عرضاً",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
      lightMode: "الوضع الفاتح",
      darkMode: "الوضع الداكن",
    },
    common: {
      sectionBadge: "قسم الحل",
      learnMore: "اعرف المزيد",
      bookDemo: "احجز عرضاً",
      viewPlatform: "مشاهدة المنصة",
      submit: "إرسال الطلب",
      next: "التالي",
      included: "مشمول",
    },
    hero: {
      eyebrow: "منصة إدارة تأسيس الأعمال",
      titleStart: "أدر مهام تأسيس الأعمال في دبي عبر",
      titleGradient: "منصة واحدة",
      subtitle:
        "نظام كامل لإدارة العملاء والوثائق والمهام والباقات والمدفوعات لشركات الاستشارات التي تريد استبدال الملفات المتفرقة بلوحة تشغيل واضحة.",
      primary: "احجز عرضاً",
      secondary: "شاهد المزايا",
      stats: [
        { value: "78%", label: "وضوح العملية" },
        { value: "24/7", label: "متابعة العملاء" },
        { value: "5+", label: "وحدات أساسية" },
      ],
    },
    problem: {
      badge: "المشكلة",
      title: "هل ما زلت تدير العملاء عبر واتساب وإكسل وجوجل درايف؟",
      subtitle:
        "الإدارة اليدوية تسبب تأخيراً ووثائق ناقصة ومدفوعات غير واضحة ومتابعة ضعيفة. تحتاج فرقك إلى مكان واحد لمتابعة العملاء المحتملين والعملاء والباقات والمهام والمدفوعات.",
      pains: [
        "بيانات العملاء موزعة بين المحادثات والملفات",
        "وثائق مفقودة أو مكررة أو غير منظمة",
        "صعوبة متابعة المدفوعات لكل باقة",
        "عدم وضوح حالة العميل والمهام",
        "كثرة طلبات التحديث من العملاء",
      ],
    },
    solution: {
      badge: "الحل",
      title: "برنامج كامل لإدارة تأسيس الأعمال",
      subtitle:
        "مصمم للشركات التي تدير تأسيس الشركات في دبي، التأشيرات، الحسابات البنكية، التسجيل الضريبي، الوثائق، المدفوعات والتواصل مع العملاء.",
      cards: [
        {
          title: "من عميل محتمل إلى عميل فعلي",
          text: "اجمع العملاء المحتملين وقيّمهم وحوّلهم إلى عملاء نشطين من لوحة منظمة.",
          image: "/images/hero-dashboard.webp",
        },
        {
          title: "اختيار الباقة",
          text: "عيّن باقات Basic و Standard و All-in و Premium مع وضوح كامل للخدمات.",
          image: "/images/package-management.webp",
        },
        {
          title: "جمع الوثائق",
          text: "اجمع وراجع ونظم الوثائق الشخصية والتجارية المطلوبة.",
          image: "/images/documents-management-wide.webp",
        },
        {
          title: "متابعة المدفوعات",
          text: "تابع المبلغ الكلي والمدفوع والمتبقي وسجل المدفوعات لكل عميل.",
          image: "/images/client-lead-profile.webp",
        },
        {
          title: "إنجاز المهام",
          text: "حافظ على تنسيق الفرق من خلال مراحل واضحة ومؤشرات تقدم.",
          image: "/images/hero-dashboard-wide.webp",
        },
      ],
    },
    features: {
      badge: "مزايا المنصة",
      title: "كل ما تحتاجه لإدارة عملاء تأسيس الأعمال",
      subtitle:
        "يتم استخدام صور الداشبورد الحقيقية داخل كل قسم بدون إعادة تصميم وهمية.",
      rows: [
        {
          title: "إدارة العملاء",
          image: "/images/client-dashboard.webp",
          bullets: [
            "مسار حالة العميل",
            "بيانات العميل والباقة",
            "معلومات العمل",
            "تدفق التحويل",
          ],
        },
        {
          title: "متابعة المهام حسب الباقة",
          image: "/images/package-management.webp",
          bullets: [
            "مراحل حسب الباقة",
            "مؤشرات تقدم",
            "وضوح للفرق",
            "مسؤوليات واضحة",
          ],
        },
        {
          title: "إدارة الوثائق",
          image: "/images/documents-management.webp",
          bullets: ["وثائق تجارية", "وثائق شخصية", "رفع ومراجعة", "سجل واضح"],
        },
        {
          title: "بوابة شاملة",
          image: "/images/super-admin-dashboard.webp",
          bullets: [
            "تحليلات العملاء",
            "مصادر العملاء",
            "عملاء واردون ومؤهلون",
            "نظرة على المدفوعات",
          ],
        },
      ],
    },
    packages: {
      badge: "الباقات",
      title: "خطط بسيطة لكل طريقة عمل",
      subtitle:
        "اعرض البرنامج كنظام قابل للتوسع لإدارة باقات مختلفة ومسؤوليات داخلية.",
      plans: [
        {
          name: "Basic",
          price: "بداية",
          features: ["إدارة العملاء المحتملين", "ملف العميل", "مهام أساسية"],
        },
        {
          name: "Standard",
          price: "نمو",
          features: ["متابعة الوثائق", "نظرة المدفوعات", "مراحل الباقة"],
        },
        {
          name: "All-in",
          price: "متقدم",
          features: ["متابعة كاملة", "عمل الفريق", "عرض تقدم العميل"],
        },
        {
          name: "Premium",
          price: "مؤسسات",
          features: ["لوحة كاملة", "إعداد مخصص", "دعم أولوية"],
        },
      ],
    },
    workflow: {
      badge: "سير العمل",
      title: "من التقاط العميل إلى متابعة التقدم في نظام واحد",
      steps: [
        "تسجيل العميل",
        "اختيار الباقة",
        "رفع الوثائق",
        "إنجاز المهام",
        "متابعة الدفع",
        "تحديث العميل",
      ],
    },
    faq: {
      badge: "الأسئلة",
      title: "كل ما تحتاج معرفته",
      items: [
        {
          q: "هل يستخدم الموقع صور الداشبورد؟",
          a: "نعم، المشروع يستخدم الصور المرفوعة مباشرة كصور للمنتج.",
        },
        {
          q: "هل الموقع متجاوب؟",
          a: "نعم، التصميم يعمل على الهاتف والتابلت واللابتوب والشاشات الكبيرة.",
        },
        {
          q: "هل يدعم عدة لغات؟",
          a: "نعم، الإنجليزية والفرنسية والعربية متوفرة مع دعم RTL للعربية.",
        },
        {
          q: "هل يوجد وضع فاتح وداكن؟",
          a: "نعم، ويتم حفظ التفضيل في localStorage.",
        },
        {
          q: "هل يمكن تعديل المحتوى بسهولة؟",
          a: "نعم، النصوص الرئيسية موجودة في ملف الترجمة.",
        },
      ],
    },
    contact: {
      badge: "تواصل",
      title: "تواصل معنا في أي وقت",
      subtitle: "أرسل بياناتك واحجز عرضاً لمنصة إدارة تأسيس الأعمال.",
      fields: { name: "اسمك", email: "بريدك الإلكتروني", message: "رسالتك" },
      button: "احجز عرضاً",
    },
    footer: {
      text: "صفحة تعريفية لبرنامج إدارة تأسيس الأعمال مبنية بـ Next.js و Tailwind CSS.",
      rights: "جميع الحقوق محفوظة.",
    },
  },
};

export function getDictionary(locale) {
  return translations[locale] || translations.en;
}

export function getDirection(locale) {
  return languages.find((language) => language.code === locale)?.dir || "ltr";
}
