export type Locale = "en" | "ar";

export type Solution = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  title: string;
  description: string;
  replaces: string;
  capabilities: string[];
  outcome: string;
  image: string;
  imageAlt: string;
  cardClass: string;
  href: string;
};

export const solutions: Solution[] = [
  {
    slug: "donation-hub",
    name: "Donation Hub",
    shortName: "Donation Hub",
    category: "Giving operations",
    title: "Every donation, channel and receipt in one live record.",
    description:
      "Bring campaigns, kiosks, cash, card and digital gifts into one operational ledger so finance and fundraising teams work from the same source.",
    replaces: "Disconnected terminals, spreadsheet reconciliation and delayed reporting.",
    capabilities: [
      "Campaign and fund management",
      "Kiosk, cash, card and online transaction capture",
      "Receipt and reconciliation workflows",
      "Role-based reporting and audit history",
    ],
    outcome:
      "A giving operation that can follow every transaction from the first touchpoint to the finance record.",
    image: "/assets/reference/uae-smart-giving-kiosk.webp",
    imageAlt: "Emirati visitors using a smart giving kiosk in a modern lobby",
    cardClass: "solution-card--cobalt",
    href: "/solutions/donation-hub",
  },
  {
    slug: "bunyan-cmms",
    name: "Bunyan + Twin AI",
    shortName: "Bunyan",
    category: "Facilities operations",
    title: "Move maintenance from reaction to a traceable plan.",
    description:
      "Give every asset, request, work order and service commitment one owner and one history—from the technician on site to the leader reviewing performance.",
    replaces: "Reactive maintenance, scattered requests and opaque service histories.",
    capabilities: [
      "Preventive and corrective work orders",
      "Asset, technician and SLA histories",
      "Mobile-ready field workflows",
      "Risk signals and operational reporting",
    ],
    outcome:
      "A facilities team that sees work early, assigns it clearly and keeps the evidence attached to the asset.",
    image: "/assets/reference/smart-facility-access-control.webp",
    imageAlt: "Smart access-control entrance inside a modern UAE facility",
    cardClass: "solution-card--ink",
    href: "/solutions/bunyan-cmms",
  },
  {
    slug: "visitor-management-system",
    name: "Smart VMS",
    shortName: "Smart VMS",
    category: "Visitor operations",
    title: "A composed arrival, from pre-invite to secure exit.",
    description:
      "Coordinate visitor and contractor registration, reception checks, host notifications and access rules without losing the human welcome.",
    replaces: "Paper logbooks, manual calls and disconnected gate records.",
    capabilities: [
      "Pre-registration and arrival workflows",
      "Identity, host and escort rules",
      "Kiosk and access-control integration",
      "Searchable visit and audit history",
    ],
    outcome:
      "A faster front desk and a reliable record of who was expected, admitted and checked out.",
    image: "/assets/reference/visitor-self-check-in-gate.webp",
    imageAlt: "Visitor completing self check-in at a secure facility entrance",
    cardClass: "solution-card--mist",
    href: "/solutions/visitor-management-system",
  },
  {
    slug: "communication-platform",
    name: "Communication Platform",
    shortName: "Communication AI",
    category: "Customer engagement",
    title: "One intelligent inbox for every conversation that becomes work.",
    description:
      "Bring web, email, messaging and phone requests into shared workflows where AI handles routine answers and the right team owns the rest.",
    replaces: "Channel silos, repeated answers and requests that disappear between teams.",
    capabilities: [
      "Unified multi-channel inbox",
      "Knowledge-grounded AI assistance",
      "Routing, escalation and follow-up workflows",
      "Shared customer and request context",
    ],
    outcome:
      "A consistent response across channels, with a clear handoff from automated service to accountable people.",
    image: "/assets/reference/innovatek-engineering-team.webp",
    imageAlt: "Innovatek engineering team developing operational software",
    cardClass: "solution-card--ice",
    href: "/solutions/communication-platform",
  },
];

export const solutionsAr: Solution[] = [
  {
    slug: "donation-hub",
    name: "Donation Hub",
    shortName: "Donation Hub",
    category: "عمليات العطاء",
    title: "كل تبرع وقناة وإيصال في سجل مباشر واحد.",
    description:
      "اجمع الحملات والأكشاك والتبرعات النقدية والبطاقات والقنوات الرقمية في سجل تشغيلي واحد، لتعمل المالية وتنمية الموارد من المصدر نفسه.",
    replaces: "الأجهزة المنفصلة والمطابقة اليدوية والتقارير المتأخرة.",
    capabilities: [
      "إدارة الحملات والصناديق",
      "تسجيل معاملات الأكشاك والنقد والبطاقات والإنترنت",
      "مسارات الإيصالات والمطابقة",
      "تقارير وصلاحيات وسجل تدقيق",
    ],
    outcome:
      "عملية عطاء تتبع كل معاملة من نقطة التفاعل الأولى إلى السجل المالي.",
    image: "/assets/reference/uae-smart-giving-kiosk.webp",
    imageAlt: "زوار إماراتيون يستخدمون كشك تبرع ذكي في ردهة حديثة",
    cardClass: "solution-card--cobalt",
    href: "/ar/solutions/donation-hub",
  },
  {
    slug: "bunyan-cmms",
    name: "بنيان + Twin AI",
    shortName: "بنيان",
    category: "عمليات المرافق",
    title: "انقل الصيانة من رد الفعل إلى خطة قابلة للتتبع.",
    description:
      "امنح كل أصل وطلب وأمر عمل والتزام خدمة مسؤولاً واحداً وتاريخاً واحداً، من الفني في الموقع إلى القائد الذي يراجع الأداء.",
    replaces: "الصيانة التفاعلية والطلبات المتناثرة وسجلات الخدمة الغامضة.",
    capabilities: [
      "أوامر العمل الوقائية والتصحيحية",
      "تاريخ الأصول والفنيين ومستويات الخدمة",
      "مسارات مهيأة للعمل الميداني",
      "إشارات المخاطر والتقارير التشغيلية",
    ],
    outcome:
      "فريق مرافق يرى العمل مبكراً، ويسنده بوضوح، ويبقي الدليل مرتبطاً بالأصل.",
    image: "/assets/reference/smart-facility-access-control.webp",
    imageAlt: "مدخل ذكي للتحكم بالدخول داخل منشأة حديثة في الإمارات",
    cardClass: "solution-card--ink",
    href: "/ar/solutions/bunyan-cmms",
  },
  {
    slug: "visitor-management-system",
    name: "Smart VMS",
    shortName: "Smart VMS",
    category: "عمليات الزوار",
    title: "وصول منظم، من الدعوة المسبقة حتى الخروج الآمن.",
    description:
      "نسّق تسجيل الزوار والمقاولين والتحقق في الاستقبال وإشعارات المضيف وقواعد الدخول دون فقدان حفاوة الترحيب.",
    replaces: "دفاتر الزوار الورقية والمكالمات اليدوية وسجلات البوابات المنفصلة.",
    capabilities: [
      "مسارات التسجيل المسبق والوصول",
      "قواعد الهوية والمضيف والمرافقة",
      "تكامل الأكشاك وأنظمة الدخول",
      "تاريخ قابل للبحث للزيارات والتدقيق",
    ],
    outcome:
      "استقبال أسرع وسجل موثوق لمن كان متوقعاً ومن دخل ومن غادر.",
    image: "/assets/reference/visitor-self-check-in-gate.webp",
    imageAlt: "زائر يُكمل إجراءات الدخول الذاتي عند مدخل منشأة آمن",
    cardClass: "solution-card--mist",
    href: "/ar/solutions/visitor-management-system",
  },
  {
    slug: "communication-platform",
    name: "منصة التواصل",
    shortName: "ذكاء التواصل",
    category: "تفاعل العملاء",
    title: "صندوق ذكي واحد لكل محادثة تتحول إلى عمل.",
    description:
      "اجمع طلبات الموقع والبريد والمراسلة والهاتف في مسارات مشتركة، يتعامل فيها الذكاء مع الإجابات المتكررة ويتولى الفريق المناسب ما تبقى.",
    replaces: "قنوات منعزلة وإجابات مكررة وطلبات تضيع بين الفرق.",
    capabilities: [
      "صندوق موحد متعدد القنوات",
      "مساعدة ذكية مبنية على المعرفة",
      "مسارات التوجيه والتصعيد والمتابعة",
      "سياق مشترك للعميل والطلب",
    ],
    outcome:
      "استجابة متسقة عبر القنوات وتسليم واضح من الخدمة المؤتمتة إلى الأشخاص المسؤولين.",
    image: "/assets/reference/innovatek-engineering-team.webp",
    imageAlt: "فريق إنوفاتك الهندسي يطور البرمجيات التشغيلية",
    cardClass: "solution-card--ice",
    href: "/ar/solutions/communication-platform",
  },
];

export const faqs = [
  {
    question: "Can we start with one solution?",
    answer:
      "Yes. Each flagship product is designed to solve a complete operational problem on its own. The shared architecture lets you connect more workflows later without forcing a full-platform rollout on day one.",
  },
  {
    question: "What does AI-native mean at Innovatek?",
    answer:
      "Intelligence is designed into the workflow, not added as a separate chat window. It can help classify requests, surface operational risk, retrieve the right knowledge and hand work to a person with context intact. The exact automation is agreed during solution design.",
  },
  {
    question: "Can Innovatek work with our current hardware and systems?",
    answer:
      "Integration is part of the discovery process. Innovatek maps the systems, devices and data boundaries already in place, then documents what can connect directly, what needs an adapter and what should remain independent.",
  },
  {
    question: "How do you approach Arabic and right-to-left workflows?",
    answer:
      "Arabic is treated as an interface and operational-design requirement, not a final translation pass. Navigation, forms, tables, notifications and generated outputs are reviewed in both reading directions with the people who will use them.",
  },
  {
    question: "What happens after go-live?",
    answer:
      "The product team stays involved through rollout, feedback and continuous improvement. Support scope, service expectations, environments and ownership are documented for each engagement before launch.",
  },
];

export const faqsAr = [
  {
    question: "هل يمكننا البدء بحل واحد؟",
    answer:
      "نعم. صُمّم كل منتج رئيسي ليحل مشكلة تشغيلية متكاملة بمفرده، ثم تسمح البنية المشتركة بربط مسارات عمل إضافية لاحقاً دون فرض تطبيق المنظومة كاملة من اليوم الأول.",
  },
  {
    question: "ماذا يعني أن المنصة مبنية على الذكاء الاصطناعي؟",
    answer:
      "الذكاء جزء من مسار العمل نفسه، وليس نافذة محادثة منفصلة. يمكنه تصنيف الطلبات وإظهار المخاطر واسترجاع المعرفة المناسبة وتسليم المهمة للشخص المسؤول مع كامل السياق. ويتم الاتفاق على الأتمتة الدقيقة أثناء تصميم الحل.",
  },
  {
    question: "هل تتكامل إنوفاتك مع أجهزتنا وأنظمتنا الحالية؟",
    answer:
      "يبدأ ذلك في مرحلة الاستكشاف. نرسم خريطة الأنظمة والأجهزة وحدود البيانات الحالية، ثم نوضح ما يتصل مباشرة وما يحتاج إلى موصل وما ينبغي أن يبقى مستقلاً.",
  },
  {
    question: "كيف تتعاملون مع العربية وتجارب الاستخدام من اليمين إلى اليسار؟",
    answer:
      "نتعامل مع العربية كمتطلب تصميم وتشغيل، لا كترجمة نهائية. نراجع التنقل والنماذج والجداول والإشعارات والمخرجات بالاتجاهين مع الأشخاص الذين سيستخدمون النظام.",
  },
  {
    question: "ماذا يحدث بعد الإطلاق؟",
    answer:
      "يبقى فريق المنتج مشاركاً خلال التطبيق والملاحظات والتحسين المستمر. ويتم توثيق نطاق الدعم وتوقعات الخدمة والبيئات والمسؤوليات لكل مشروع قبل الإطلاق.",
  },
];

export const homeCopy = {
  en: {
    locale: "en" as const,
    direction: "ltr" as const,
    nav: {
      solutions: "Solutions",
      approach: "Approach",
      about: "About",
      contact: "Contact",
      languageLabel: "العربية",
      languageHref: "/ar",
      cta: "Book a working session",
      menu: "Open menu",
      close: "Close menu",
    },
    hero: {
      kicker: "Technology for impact, built in the UAE",
      title: "AI software for giving and facilities.",
      body: "Innovatek connects donations, assets, visitors and customer conversations in modular, Arabic-ready platforms—designed, integrated and supported by one regional team.",
      primary: "Book a working session",
      secondary: "Explore the system",
      imageAlt: "Emirati visitors using a smart giving kiosk in a modern lobby",
      live: "Live operations",
      events: [
        ["Donation recorded", "Receipt and ledger updated"],
        ["Visitor expected", "Host and gate notified"],
        ["Asset request routed", "Owner and priority assigned"],
      ],
    },
    marqueeLead: "Built around the teams who carry the operation",
    marqueeItems: [
      "Foundations",
      "Awqaf",
      "Facilities",
      "Government",
      "Finance",
      "Visitor services",
      "Customer care",
      "Leadership",
    ],
    interest: {
      preface: "Operational ecosystems",
      titleStart: "One system for",
      titleEnd: "work that cannot wait.",
      body: "Begin with the pressure point you can see today. Each solution works alone; the shared core carries identity, communication, intelligence and reporting across the rest.",
      link: "See the working model",
    },
    story: {
      preface: "A connected operating model",
      title: "Start where it hurts. Connect what proves useful.",
      body: "Four focused products share the same design language and integration discipline. Your teams keep the tools they need while leadership gains a clearer operational picture.",
      cta: "View every solution",
    },
    core: {
      title: "A shared core, without the all-or-nothing platform.",
      body: "Identity, permissions, communication, audit history and intelligence can move with the work. The product stays modular; the experience feels connected.",
      items: ["Arabic-ready UI", "Role-based access", "Integration layer", "Operational intelligence"],
    },
    perspectives: {
      preface: "Designed around the operator",
      title: "A clearer day for every seat at the table.",
      previous: "Previous perspective",
      next: "Next perspective",
      items: [
        {
          role: "Facilities lead",
          title: "See the request, the asset and the accountable owner together.",
          body: "Bunyan turns maintenance into a visible queue with history, priority and a next action—not another collection of calls and spreadsheets.",
          initials: "FL",
        },
        {
          role: "Finance team",
          title: "Follow giving activity without rebuilding the record at month end.",
          body: "Donation Hub keeps channels and receipts attached to the same operational ledger, giving finance and fundraising a common view.",
          initials: "FT",
        },
        {
          role: "Reception team",
          title: "Welcome expected visitors without losing control of the gate.",
          body: "Smart VMS coordinates invitations, checks, hosts and access events in a flow built for both hospitality and governance.",
          initials: "RT",
        },
        {
          role: "Operations leader",
          title: "Read the operation across products, not across disconnected reports.",
          body: "A shared data and integration model makes it easier to see patterns, priorities and handoffs without flattening specialist workflows.",
          initials: "OL",
        },
      ],
    },
    approach: {
      preface: "One accountable path",
      title: "From the first workflow to continuous improvement.",
      body: "We design the rollout with the people who will operate it, document the boundaries and stay close after launch.",
      steps: [
        ["Discover", "Map the pressure point, users, systems and evidence of success."],
        ["Design", "Shape the workflow in English and Arabic before configuration hardens."],
        ["Connect", "Integrate the devices, data and approvals that the operation already depends on."],
        ["Operate", "Launch in controlled stages, support adoption and improve from real usage."],
      ],
    },
    faq: {
      preface: "Questions worth resolving early",
      title: "The practical details before a platform decision.",
    },
    contact: {
      preface: "Bring us one real workflow",
      title: "Let’s make the first working session useful.",
      body: "Tell us where work is slowing down. We’ll prepare a focused conversation around the people, systems and next decision involved—without a generic sales deck.",
      emailLabel: "Prefer email?",
      note: "Your form details stay in your browser until you choose to send the prepared email.",
    },
  },
  ar: {
    locale: "ar" as const,
    direction: "rtl" as const,
    nav: {
      solutions: "الحلول",
      approach: "منهج العمل",
      about: "عن إنوفاتك",
      contact: "تواصل معنا",
      languageLabel: "English",
      languageHref: "/",
      cta: "احجز جلسة عمل",
      menu: "افتح القائمة",
      close: "أغلق القائمة",
    },
    hero: {
      kicker: "تقنية للأثر، تُبنى في الإمارات",
      title: "برمجيات ذكية للعطاء وإدارة المرافق.",
      body: "تربط إنوفاتك التبرعات والأصول والزوار ومحادثات العملاء في منصات معيارية جاهزة للعربية، يصممها ويدمجها ويدعمها فريق إقليمي واحد.",
      primary: "احجز جلسة عمل",
      secondary: "استكشف المنظومة",
      imageAlt: "زوار إماراتيون يستخدمون كشك تبرع ذكي في ردهة حديثة",
      live: "عمليات مباشرة",
      events: [
        ["سُجّل التبرع", "تحديث الإيصال والسجل"],
        ["زيارة متوقعة", "إشعار المضيف والبوابة"],
        ["توجيه طلب الأصل", "تحديد المسؤول والأولوية"],
      ],
    },
    marqueeLead: "مصممة حول الفرق التي تحمل مسؤولية التشغيل",
    marqueeItems: [
      "المؤسسات",
      "الأوقاف",
      "المرافق",
      "الجهات الحكومية",
      "المالية",
      "خدمات الزوار",
      "خدمة العملاء",
      "الإدارة",
    ],
    interest: {
      preface: "منظومات تشغيلية",
      titleStart: "نظام واحد للعمل",
      titleEnd: "الذي لا يحتمل الانتظار.",
      body: "ابدأ من نقطة الضغط الواضحة اليوم. يعمل كل حل مستقلاً، بينما تحمل النواة المشتركة الهوية والتواصل والذكاء والتقارير عبر بقية المنظومة.",
      link: "شاهد نموذج العمل",
    },
    story: {
      preface: "نموذج تشغيل مترابط",
      title: "ابدأ من موضع الألم. واربط ما يثبت فائدته.",
      body: "أربعة منتجات مركّزة تشترك في لغة تصميم واحدة ومنهج تكامل واحد. تحتفظ فرقك بالأدوات التي تحتاجها، وتحصل الإدارة على صورة تشغيلية أوضح.",
      cta: "استعرض كل الحلول",
    },
    core: {
      title: "نواة مشتركة دون منصة جامدة تفرض كل شيء.",
      body: "تتحرك الهوية والصلاحيات والتواصل وسجل التدقيق والذكاء مع العمل. تبقى المنتجات معيارية، وتبدو التجربة مترابطة.",
      items: ["واجهة عربية", "صلاحيات حسب الدور", "طبقة تكامل", "ذكاء تشغيلي"],
    },
    perspectives: {
      preface: "مصممة حول المشغّل",
      title: "يوم أوضح لكل مسؤول حول الطاولة.",
      previous: "المنظور السابق",
      next: "المنظور التالي",
      items: [
        {
          role: "مسؤول المرافق",
          title: "شاهد الطلب والأصل والمسؤول عنه في مكان واحد.",
          body: "يحوّل بنيان الصيانة إلى قائمة عمل واضحة لها تاريخ وأولوية وخطوة تالية، بدلاً من المكالمات والجداول المتناثرة.",
          initials: "م ر",
        },
        {
          role: "فريق المالية",
          title: "تابع نشاط العطاء دون إعادة بناء السجل في نهاية الشهر.",
          body: "يبقي Donation Hub القنوات والإيصالات مرتبطة بسجل تشغيلي واحد، فتعمل المالية وتنمية الموارد من الصورة نفسها.",
          initials: "ف م",
        },
        {
          role: "فريق الاستقبال",
          title: "استقبل الزوار المتوقعين دون فقدان السيطرة على البوابة.",
          body: "ينسق Smart VMS الدعوات والتحقق والمضيفين وأحداث الدخول في مسار يجمع الضيافة والحوكمة.",
          initials: "ف س",
        },
        {
          role: "قائد العمليات",
          title: "اقرأ العملية عبر المنتجات، لا عبر تقارير منفصلة.",
          body: "يساعد نموذج البيانات والتكامل المشترك على رؤية الأنماط والأولويات وعمليات التسليم دون إلغاء تخصص كل فريق.",
          initials: "ق ع",
        },
      ],
    },
    approach: {
      preface: "مسار واحد بمسؤولية واضحة",
      title: "من أول مسار عمل إلى التحسين المستمر.",
      body: "نصمم التطبيق مع الأشخاص الذين سيشغّلونه، ونوثق الحدود، ونبقى قريبين بعد الإطلاق.",
      steps: [
        ["الاستكشاف", "نرسم نقطة الضغط والمستخدمين والأنظمة ودليل النجاح."],
        ["التصميم", "نصمم المسار بالعربية والإنجليزية قبل تثبيت الإعدادات."],
        ["الربط", "نصل الأجهزة والبيانات والموافقات التي تعتمد عليها العملية."],
        ["التشغيل", "نطلق على مراحل مضبوطة، وندعم التبنّي، ونحسّن من الاستخدام الحقيقي."],
      ],
    },
    faq: {
      preface: "أسئلة تستحق الحسم مبكراً",
      title: "التفاصيل العملية قبل قرار المنصة.",
    },
    contact: {
      preface: "أحضر لنا مسار عمل حقيقياً",
      title: "لنجعل جلسة العمل الأولى مفيدة.",
      body: "أخبرنا أين يتباطأ العمل. سنجهز نقاشاً مركّزاً حول الأشخاص والأنظمة والقرار التالي، من دون عرض مبيعات عام.",
      emailLabel: "تفضل البريد؟",
      note: "تبقى بيانات النموذج في متصفحك حتى تختار إرسال البريد المُعدّ.",
    },
  },
};

export type HomeCopy = (typeof homeCopy)[keyof typeof homeCopy];
