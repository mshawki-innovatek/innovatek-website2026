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
    category: "Giving ecosystem",
    title: "Every donation project, device and campaign — in one system.",
    description:
      "Donation Hub replaces the spreadsheets, disconnected terminals and manual reporting that cost teams time and donor trust. Cash, card and digital transactions post to the same live record.",
    replaces: "Spreadsheets and disconnected terminals",
    capabilities: [
      "Real-time transactions across cash, card and digital channels",
      "Projects, devices, layout and media managed from one screen",
      "Campaign scheduling with live reporting leadership actually opens",
    ],
    outcome: "Run every campaign, device and dirham from one screen.",
    image: "/assets/reference/uae-smart-giving-kiosk.webp",
    imageAlt: "Emirati visitors using a smart giving kiosk in a modern lobby",
    cardClass: "solution-card--cobalt",
    href: "/solutions/donation-hub",
  },
  {
    slug: "bunyan-cmms",
    name: "Bunyan + Twin AI",
    shortName: "Bunyan",
    category: "Facilities ecosystem",
    title: "From reactive maintenance to operational certainty.",
    description:
      "Bunyan gives every request, asset and task one owner and one traceable history — preventive and corrective, from the technician on site to the executive reading the report.",
    replaces: "Reactive, manual maintenance",
    capabilities: [
      "Preventive and corrective schedules with SLA tracking",
      "Asset history and multi-stakeholder workflows in one place",
      "Compliance and audit-ready reporting without a data project",
    ],
    outcome: "One system from the work order to the boardroom.",
    image: "/assets/reference/smart-facility-access-control.webp",
    imageAlt: "Smart access-control entrance inside a modern UAE facility",
    cardClass: "solution-card--ink",
    href: "/solutions/bunyan-cmms",
  },
  {
    slug: "visitor-management-system",
    name: "Smart VMS",
    shortName: "Smart VMS",
    category: "Facilities ecosystem",
    title: "Every visitor, secured and accounted for.",
    description:
      "VMS digitises visitor and external-worker access — pre-registration, smart check-in, identity verification and integration with the access control you already run. Paper logs become a full audit trail.",
    replaces: "Paper logs and reception books",
    capabilities: [
      "Pre-registration link staff can send from a phone",
      "External worker and contractor tracking with escort rules",
      "Full audit trail and reporting, from gate to exit",
    ],
    outcome: "From gate to exit, logged and reportable.",
    image: "/assets/reference/visitor-self-check-in-gate.webp",
    imageAlt: "Visitor completing self check-in at a secure facility entrance",
    cardClass: "solution-card--mist",
    href: "/solutions/visitor-management-system",
  },
  {
    slug: "communication-platform",
    name: "Communication Platform",
    shortName: "Communication AI",
    category: "Shared core",
    title: "One AI layer for every conversation.",
    description:
      "WhatsApp, Facebook and SMS arrive in one AI-powered inbox with automated replies and workflows — so nothing is dropped, and the answer is the same whoever asks.",
    replaces: "Four separate inboxes",
    capabilities: [
      "AI answers the routine questions, people take the rest",
      "One inbox across WhatsApp, Facebook and SMS",
      "Campaign messaging at scale from the same audience data",
    ],
    outcome: "Answer everyone, everywhere — with AI on the front line.",
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
    category: "منظومة العطاء",
    title: "كل مشروع تبرع وجهاز وحملة — في نظام واحد.",
    description:
      "يستبدل Donation Hub الجداول والأجهزة غير المترابطة والتقارير اليدوية التي تُكلّف الفرق وقتها وثقة المتبرعين. المعاملات النقدية والبطاقات والرقمية تُسجَّل في السجل الحي نفسه.",
    replaces: "الجداول والأجهزة غير المترابطة",
    capabilities: [
      "معاملات فورية عبر النقد والبطاقات والقنوات الرقمية",
      "إدارة المشاريع والأجهزة والتصميم والوسائط من شاشة واحدة",
      "جدولة الحملات مع تقارير حية تفتحها الإدارة فعلاً",
    ],
    outcome: "أدر كل حملة وجهاز ودرهم من شاشة واحدة.",
    image: "/assets/reference/uae-smart-giving-kiosk.webp",
    imageAlt: "زوار إماراتيون يستخدمون كشك تبرع ذكي في ردهة حديثة",
    cardClass: "solution-card--cobalt",
    href: "/ar/solutions/donation-hub",
  },
  {
    slug: "bunyan-cmms",
    name: "بنيان + Twin AI",
    shortName: "بنيان",
    category: "منظومة المرافق",
    title: "من الصيانة التفاعلية إلى يقين تشغيلي.",
    description:
      "يمنح Bunyan كل طلب وأصل ومهمة مسؤولاً واحداً وسجلاً واحداً قابلاً للتتبع — وقائية وتصحيحية، من الفني في الموقع إلى المدير الذي يقرأ التقرير.",
    replaces: "الصيانة التفاعلية اليدوية",
    capabilities: [
      "جداول وقائية وتصحيحية مع تتبع مستوى الخدمة",
      "سجل الأصول ومسارات العمل لكل الأطراف في مكان واحد",
      "تقارير امتثال جاهزة للتدقيق دون مشروع بيانات",
    ],
    outcome: "نظام واحد من أمر العمل إلى قاعة الإدارة.",
    image: "/assets/reference/smart-facility-access-control.webp",
    imageAlt: "مدخل ذكي للتحكم بالدخول داخل منشأة حديثة في الإمارات",
    cardClass: "solution-card--ink",
    href: "/ar/solutions/bunyan-cmms",
  },
  {
    slug: "visitor-management-system",
    name: "Smart VMS",
    shortName: "Smart VMS",
    category: "منظومة المرافق",
    title: "كل زائر، مؤمَّن وموثّق.",
    description:
      "يرقمن VMS دخول الزوار والعاملين الخارجيين — تسجيل مسبق، دخول سريع، تحقق من الهوية، وتكامل مع أنظمة التحكم بالدخول التي تشغّلها. فتتحول السجلات الورقية إلى مسار تدقيق كامل.",
    replaces: "السجلات الورقية ودفاتر الاستقبال",
    capabilities: [
      "رابط تسجيل مسبق يرسله الموظف من هاتفه",
      "تتبع العاملين الخارجيين والمقاولين بقواعد المرافقة",
      "مسار تدقيق وتقارير كاملة، من البوابة حتى الخروج",
    ],
    outcome: "من البوابة حتى الخروج، موثّق وقابل للتقرير.",
    image: "/assets/reference/visitor-self-check-in-gate.webp",
    imageAlt: "زائر يُكمل إجراءات الدخول الذاتي عند مدخل منشأة آمنة",
    cardClass: "solution-card--mist",
    href: "/ar/solutions/visitor-management-system",
  },
  {
    slug: "communication-platform",
    name: "منصة التواصل",
    shortName: "ذكاء التواصل",
    category: "النواة المشتركة",
    title: "طبقة ذكاء واحدة لكل محادثة.",
    description:
      "واتساب وفيسبوك والرسائل النصية تصل إلى صندوق واحد مدعوم بالذكاء الاصطناعي مع ردود ومسارات مؤتمتة — فلا تُهمل رسالة، ويبقى الجواب واحداً لكل من يسأل.",
    replaces: "أربعة صناديق منفصلة",
    capabilities: [
      "الذكاء الاصطناعي يجيب على الأسئلة المتكررة، والفريق يتولى الباقي",
      "صندوق واحد لواتساب وفيسبوك والرسائل النصية",
      "حملات رسائل واسعة النطاق من بيانات الجمهور نفسها",
    ],
    outcome: "أجب على الجميع في كل مكان — بالذكاء الاصطناعي في الصف الأول.",
    image: "/assets/reference/innovatek-engineering-team.webp",
    imageAlt: "فريق إنوفاتك الهندسي يطور البرمجيات التشغيلية",
    cardClass: "solution-card--ice",
    href: "/ar/solutions/communication-platform",
  },
];

export const faqs = [
  {
    question: "Can we start with one solution only?",
    answer:
      "Yes, and most clients do. Donation Hub, Bunyan or VMS is the usual entry point because each shows value on its own. The other modules connect later without re-implementation — that is what modular by design means.",
  },
  {
    question: "What does “AI-native” actually mean here?",
    answer:
      "Intelligence sits inside the modules, not in a chat window bolted on top: Twin AI shows asset risk forming before failure, the Communication Platform answers routine messages, and Insight 360 forecasts across giving and facilities together.",
  },
  {
    question: "Where is our data hosted, and are you compliant?",
    answer:
      "Deployments are GDPR and UAE PDPL aligned, hosted in the region. We document the exact hosting and data-processing arrangement in your proposal before anything is signed.",
  },
  {
    question: "Do you integrate with the hardware and systems we already own?",
    answer:
      "In most cases, yes — donation terminals, card readers, gates and access-control systems, plus your finance or ERP. Where new hardware is needed, our Smart Kiosk family covers donation and check-in touchpoints.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "A single solution on a single site is usually live in two to three weeks. A multi-site or multi-module rollout with data migration typically runs six to eight weeks, in phases you approve one at a time.",
  },
];

export const faqsAr = [
  {
    question: "هل يمكننا البدء بحل واحد فقط؟",
    answer:
      "نعم، وهذا ما يفعله معظم عملائنا. Donation Hub أو Bunyan أو VMS هي نقطة البداية المعتادة لأن كل واحد منها يُثبت قيمته منفرداً. وتتصل الوحدات الأخرى لاحقاً دون إعادة تنفيذ — وهذا معنى التصميم المعياري.",
  },
  {
    question: "ما معنى «الذكاء الأصلي» عملياً؟",
    answer:
      "الذكاء داخل الوحدات، لا في نافذة محادثة مُضافة فوقها: Twin AI يكشف تكوّن مخاطر الأصول قبل الأعطال، ومنصة التواصل تجيب على الرسائل المتكررة، وInsight 360 يتوقع عبر العطاء والمرافق معاً.",
  },
  {
    question: "أين تُستضاف بياناتنا، وهل أنتم ممتثلون؟",
    answer:
      "عملياتنا متوافقة مع GDPR وقانون حماية البيانات الشخصية الإماراتي، والاستضافة داخل المنطقة. ونوثّق ترتيب الاستضافة ومعالجة البيانات بالتفصيل في العرض قبل أي توقيع.",
  },
  {
    question: "هل تتكاملون مع الأجهزة والأنظمة التي نملكها؟",
    answer:
      "في معظم الحالات، نعم — أجهزة التبرع وقارئات البطاقات والبوابات وأنظمة التحكم بالدخول، إضافة إلى نظامكم المالي أو ERP. وحين يلزم جهاز جديد، تغطي عائلة Smart Kiosk نقاط التبرع والدخول.",
  },
  {
    question: "كم يستغرق التنفيذ؟",
    answer:
      "حل واحد في موقع واحد يعمل عادة في أسبوعين إلى ثلاثة. أما التطبيق على عدة مواقع أو وحدات مع ترحيل البيانات فيستغرق عادة ستة إلى ثمانية أسابيع، على مراحل تعتمدونها واحدة تلو الأخرى.",
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
      cta: "Book a demo",
      menu: "Open menu",
      close: "Close menu",
    },
    hero: {
      kicker: "Donation Hub · Giving ecosystem",
      title: "We build the systems your operation runs on.",
      body: "Innovatek SWD builds and runs Donation Hub — campaigns, kiosks and receipts in one ledger, reconciled the moment a donation is made.",
      primary: "Book a demo",
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
      preface: "Flagship solutions",
      titleStart: "Four flagship solutions.",
      titleEnd: "One AI core.",
      body: "These four carry most of our deployments. Pick one to see the working screen, what it replaces, and where it sits in the ecosystem.",
      link: "See the working screen",
    },
    story: {
      preface: "Why now",
      title: "Four problems. One system.",
      body: "Nobody planned the fragmentation. Tools were added one problem at a time.",
      cta: "View every solution",
    },
    core: {
      title: "Ten solutions. Built to work alone or together.",
      body: "Two ecosystems, one shared AI core. Start where it hurts most; connect the rest later.",
      items: ["Modular by design", "Arabic-first, RTL native", "Audit-ready by default", "AI-native, not AI-added"],
    },
    perspectives: {
      preface: "Impact, not promises",
      title: "Numbers our clients actually measure.",
      previous: "Previous perspective",
      next: "Next perspective",
      stats: [
        { value: "+82%", label: "increase in total donations" },
        { value: "90%", label: "less processing time" },
        { value: "25%", label: "fewer recurring failures" },
        { value: "20%", label: "faster response times" },
      ],
      items: [
        {
          role: "Head of Facilities · Government department, Sharjah",
          title: "The first week, I stopped asking three people where a request had gone. It was on the screen.",
          body: "Government department, Sharjah",
          initials: "HF",
        },
        {
          role: "Operations Manager · Charity foundation, Dubai",
          title: "Our reception staff had it in a day. The Arabic interface is the reason — it wasn’t translated, it was designed.",
          body: "Charity foundation, Dubai",
          initials: "OM",
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
      title: "Questions we get before every rollout.",
    },
    contact: {
      preface: "Bring us one real workflow",
      title: "See it running on your own sites.",
      body: "A 30-minute walkthrough with the team that will run your rollout. No slides — the actual system, with your projects, your sites and your channels.",
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
      cta: "احجز عرضاً",
      menu: "افتح القائمة",
      close: "أغلق القائمة",
    },
    hero: {
      kicker: "Donation Hub · منظومة العطاء",
      title: "نبني الأنظمة التي تُدير عملياتك.",
      body: "تبني إنوفاتك SWD وتشغّل Donation Hub — الحملات والأكشاك والإيصالات في سجل واحد، تُطابَق لحظة التبرع.",
      primary: "احجز عرضاً توضيحياً",
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
      preface: "الحلول الرئيسية",
      titleStart: "أربعة حلول رئيسية.",
      titleEnd: "نواة ذكاء واحدة.",
      body: "هذه الأربعة تحمل معظم تطبيقاتنا. اختر واحداً لترى الشاشة الفعلية، وما الذي يستبدله، وموقعه في المنظومة.",
      link: "شاهد الشاشة الفعلية",
    },
    story: {
      preface: "لماذا الآن",
      title: "أربع مشكلات. نظام واحد.",
      body: "لم يخطط أحد لهذا التشتت. أُضيفت الأدوات مشكلة بعد مشكلة.",
      cta: "استعرض كل الحلول",
    },
    core: {
      title: "عشرة حلول. مبنية لتعمل منفردة — أو معاً.",
      body: "منظومتان ونواة ذكاء واحدة. ابدأ من الأكثر إلحاحاً، وأضف الباقي لاحقاً.",
      items: ["معياري بالتصميم", "عربي أولاً بواجهة RTL أصلية", "جاهز للتدقيق افتراضياً", "ذكاء أصلي لا مُضاف"],
    },
    perspectives: {
      preface: "أثر لا وعود",
      title: "أرقام يقيسها عملاؤنا فعلاً.",
      previous: "المنظور السابق",
      next: "المنظور التالي",
      stats: [
        { value: "+82%", label: "زيادة في إجمالي التبرعات" },
        { value: "90%", label: "انخفاض في وقت المعالجة" },
        { value: "25%", label: "انخفاض في الأعطال المتكررة" },
        { value: "20%", label: "أسرع في زمن الاستجابة" },
      ],
      items: [
        {
          role: "مدير إدارة المرافق · دائرة حكومية، الشارقة",
          title: "في الأسبوع الأول توقفت عن سؤال ثلاثة أشخاص عن مصير أي طلب. صار أمامي على الشاشة.",
          body: "دائرة حكومية، الشارقة",
          initials: "م م",
        },
        {
          role: "مديرة العمليات · مؤسسة خيرية، دبي",
          title: "أتقن موظفو الاستقبال النظام في يوم واحد. السبب هو الواجهة العربية — لم تكن مترجمة، بل مصمّمة.",
          body: "مؤسسة خيرية، دبي",
          initials: "م ع",
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
      title: "أسئلة تُطرح قبل كل عملية تطبيق.",
    },
    contact: {
      preface: "أحضر لنا مسار عمل حقيقي",
      title: "شاهدها تعمل على مواقعك أنت.",
      body: "جلسة 30 دقيقة مع الفريق الذي سينفّذ مشروعك. بلا عروض تقديمية — النظام الفعلي، بمشاريعك ومواقعك وقنواتك.",
      emailLabel: "تفضل البريد؟",
      note: "تبقى بيانات النموذج في متصفحك حتى تختار إرسال البريد المُعدّ.",
    },
  },
};

export type HomeCopy = (typeof homeCopy)[keyof typeof homeCopy];
