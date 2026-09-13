import type { Locale } from "@/lib/content";

type Localized = Record<Locale, string>;
type Product = {
  id: string;
  group: "giving" | "facilities" | "shared";
  name: Localized;
  category: Localized;
  description: Localized;
};

// Shared by the visible ecosystem and JSON-LD. Keep claims tied to product capabilities.
export const PRODUCT_CATALOG: Product[] = [
  {
    id: "donation-hub", group: "giving",
    name: { en: "Donation Hub", ar: "Donation Hub" },
    category: { en: "Donation management system", ar: "نظام إدارة التبرعات" },
    description: {
      en: "A donation system for charities and foundations: manage fundraising campaigns, donation kiosks, cash and card transactions, receipts and reconciliation in one record.",
      ar: "نظام تبرعات للجمعيات الخيرية والمؤسسات، يجمع إدارة حملات جمع التبرعات وأكشاك التبرع والمعاملات النقدية والبطاقات والإيصالات والمطابقة في سجل واحد.",
    },
  },
  {
    id: "tajir", group: "giving",
    name: { en: "Tajir", ar: "Tajir" },
    category: { en: "In-kind donation management software", ar: "برنامج إدارة التبرعات العينية" },
    description: {
      en: "In-kind donation software that gives charities an online shopping-style experience for giving goods, with a clear journey from the donor's choice to the donation request.",
      ar: "برنامج للتبرعات العينية يمنح الجمعيات الخيرية تجربة تبرع بالسلع تشبه التسوق الإلكتروني، بمسار واضح من اختيار المتبرع إلى طلب التبرع.",
    },
  },
  {
    id: "agent-management", group: "giving",
    name: { en: "Agent Management", ar: "Agent Management" },
    category: { en: "Field agent management software", ar: "برنامج إدارة المندوبين الميدانيين" },
    description: {
      en: "Field agent management for donation collection teams. Track attendance and reconcile custody records so field activity and collected funds stay connected.",
      ar: "برنامج لإدارة مندوبي جمع التبرعات الميدانيين، يتابع الحضور ويطابق سجلات الأمانات لربط النشاط الميداني بالأموال المحصلة.",
    },
  },
  {
    id: "jood", group: "giving",
    name: { en: "Jood", ar: "Jood" },
    category: { en: "SMS fundraising campaign software", ar: "برنامج حملات التبرعات بالرسائل النصية" },
    description: {
      en: "SMS campaign management and lead management for charitable outreach. Connect fundraising messages with donor follow-up so campaign responses lead to clear next actions.",
      ar: "برنامج لإدارة حملات الرسائل النصية والعملاء المحتملين في العمل الخيري، يربط رسائل جمع التبرعات بمتابعة المتبرعين وخطوات واضحة للاستجابة للحملات.",
    },
  },
  {
    id: "bunyan-cmms", group: "facilities",
    name: { en: "Bunyan · CMMS / CAFM", ar: "بنيان · CMMS / CAFM" },
    category: { en: "Facility and maintenance management software", ar: "برنامج إدارة المرافق والصيانة" },
    description: {
      en: "CMMS and CAFM software for facility management teams. Manage work orders, preventive and corrective maintenance, asset history and service-level tracking across your sites.",
      ar: "برنامج CMMS وCAFM لفرق إدارة المرافق، يجمع أوامر العمل والصيانة الوقائية والتصحيحية وسجل الأصول وتتبع مستويات الخدمة عبر المواقع.",
    },
  },
  {
    id: "twin-ai", group: "facilities",
    name: { en: "Twin AI", ar: "Twin AI" },
    category: { en: "Digital twin for predictive maintenance", ar: "توأم رقمي للصيانة التنبؤية" },
    description: {
      en: "Digital twin software for facilities that uses sensor and asset history to identify developing risks and support predictive maintenance alongside Bunyan's work-order workflows.",
      ar: "برنامج توأم رقمي للمرافق يستخدم بيانات المستشعرات وسجل الأصول لرصد المخاطر المتنامية ودعم الصيانة التنبؤية إلى جانب مسارات أوامر العمل في بنيان.",
    },
  },
  {
    id: "visitor-management-system", group: "facilities",
    name: { en: "Smart VMS", ar: "Smart VMS" },
    category: { en: "Visitor management system", ar: "نظام إدارة الزوار" },
    description: {
      en: "Visitor management software for pre-registration, visitor check-in and contractor access. Connect reception with access control and keep a reportable record from entry to exit.",
      ar: "نظام لإدارة الزوار والتسجيل المسبق وتسجيل الدخول ودخول المقاولين، يربط الاستقبال بالتحكم بالدخول ويحفظ سجلاً قابلاً للتقرير من الوصول إلى المغادرة.",
    },
  },
  {
    id: "smart-kiosk", group: "shared",
    name: { en: "Smart Kiosk", ar: "Smart Kiosk" },
    category: { en: "Donation kiosks and visitor check-in kiosks", ar: "أكشاك التبرع وتسجيل دخول الزوار" },
    description: {
      en: "Self-service donation kiosk systems and visitor check-in terminals. Connect the physical donation or reception touchpoint with the software that manages the operation.",
      ar: "أنظمة أكشاك تبرع ذاتية الخدمة وأجهزة لتسجيل دخول الزوار، تربط نقطة التبرع أو الاستقبال بالبرمجيات التي تدير العملية.",
    },
  },
  {
    id: "insight-360", group: "shared",
    name: { en: "Insight 360", ar: "Insight 360" },
    category: { en: "Operational analytics and reporting dashboard", ar: "لوحة تحليلات وتقارير تشغيلية" },
    description: {
      en: "An operational analytics dashboard for donation and facility management. Bring cross-system reporting and forecasts together so leadership can review giving and facilities in one place.",
      ar: "لوحة تحليلات تشغيلية لإدارة التبرعات والمرافق، تجمع التقارير والتوقعات عبر الأنظمة لتراجع الإدارة العطاء والمرافق من مكان واحد.",
    },
  },
  {
    id: "communication-platform", group: "shared",
    name: { en: "Communication Platform", ar: "منصة التواصل" },
    category: { en: "AI customer engagement platform", ar: "منصة تفاعل العملاء بالذكاء الاصطناعي" },
    description: {
      en: "An omnichannel customer communication platform with a unified inbox for WhatsApp, Facebook and SMS. Use AI replies and automated workflows to handle routine enquiries and route the rest to your team.",
      ar: "منصة تواصل متعددة القنوات مع صندوق وارد موحد لواتساب وفيسبوك والرسائل النصية، تستخدم الردود الذكية ومسارات العمل المؤتمتة للأسئلة المتكررة وتحويل الباقي إلى الفريق.",
    },
  },
];
