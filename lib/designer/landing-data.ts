// Landing content and product demonstrations shared by both languages.
import { APP_HOST } from "@/lib/site";

export const T = {
  panels: [
    {
      url: `${APP_HOST}/donation-hub/projects`,
      group: { en: "Giving ecosystem", ar: "منظومة العطاء" },
      tagline: { en: "Run every campaign, device and dirham from one screen.", ar: "أدر كل حملة وجهاز ودرهم من شاشة واحدة." },
      replaces: { en: "Replaces spreadsheets + disconnected terminals", ar: "يستبدل الجداول والأجهزة غير المترابطة" },
      buyer: { en: "Charities, awqaf departments and non-profits", ar: "الجمعيات الخيرية ودوائر الأوقاف والمؤسسات غير الربحية" },
      title: { en: "Projects & devices", ar: "المشاريع والأجهزة" },
      stamp: { en: "Updated 2 min ago", ar: "حُدّث قبل دقيقتين" },
      nav: ["Overview", "Projects", "Devices", "Transactions", "Campaigns", "Reports"],
      navAr: ["نظرة عامة", "المشاريع", "الأجهزة", "المعاملات", "الحملات", "التقارير"],
      stats: [
        { label: { en: "Projects", ar: "المشاريع" }, value: "18", ink: "var(--color-text-primary)" },
        { label: { en: "Devices", ar: "الأجهزة" }, value: "142", ink: "var(--color-text-primary)" },
        { label: { en: "Today", ar: "اليوم" }, value: "86.4k", ink: "var(--color-green-600)" },
        { label: { en: "Failed", ar: "فاشلة" }, value: "3", ink: "var(--color-orange-700)" }
      ],
      cols: { en: ["Donation project", "Channel", "Collected", "Status"], ar: ["مشروع التبرع", "القناة", "المُحصّل", "الحالة"] },
      rows: [
        { a: "Iftar meals programme", aAr: "برنامج وجبات الإفطار", b: { en: "Kiosk — Deira", ar: "كشك — ديرة" }, c: "24,180", d: { en: "Live", ar: "نشط" }, s: "ok" },
        { a: "Zakat fund", aAr: "صندوق الزكاة", b: { en: "Card terminal", ar: "نقطة بطاقات" }, c: "41,050", d: { en: "Live", ar: "نشط" }, s: "ok" },
        { a: "Orphan sponsorship", aAr: "كفالة الأيتام", b: { en: "Online + SMS", ar: "أونلاين + نصية" }, c: "12,900", d: { en: "Live", ar: "نشط" }, s: "ok" },
        { a: "Winter blankets", aAr: "بطانيات الشتاء", b: { en: "Kiosk — Al Quoz", ar: "كشك — القوز" }, c: "8,270", d: { en: "Scheduled", ar: "مجدول" }, s: "info" },
        { a: "Mosque renovation", aAr: "ترميم المسجد", b: { en: "Bank transfer", ar: "حوالة بنكية" }, c: "—", d: { en: "Draft", ar: "مسودة" }, s: "warn" }
      ],
      panelTitle: { en: "Donation management software for every campaign.", ar: "برنامج إدارة التبرعات لكل حملة." },
      panelBody: { en: "Donation Hub replaces the spreadsheets, disconnected terminals and manual reporting that cost teams time and donor trust. Cash, card and digital transactions post to the same live record.", ar: "يستبدل Donation Hub الجداول والأجهزة غير المترابطة والتقارير اليدوية التي تُكلّف الفرق وقتها وثقة المتبرعين. المعاملات النقدية والبطاقات والرقمية تُسجَّل في السجل الحي نفسه." },
      points: {
        en: ["Real-time transactions across cash, card and digital channels", "Projects, devices, layout and media managed from one screen", "Campaign scheduling with live reporting leadership actually opens"],
        ar: ["معاملات فورية عبر النقد والبطاقات والقنوات الرقمية", "إدارة المشاريع والأجهزة والتصميم والوسائط من شاشة واحدة", "جدولة الحملات مع تقارير حية تفتحها الإدارة فعلاً"]
      }
    },
    {
      url: `${APP_HOST}/bunyan/work-orders`,
      group: { en: "Facilities ecosystem", ar: "منظومة المرافق" },
      tagline: { en: "One system from the work order to the boardroom.", ar: "نظام واحد من أمر العمل إلى قاعة الإدارة." },
      replaces: { en: "Replaces reactive, manual maintenance", ar: "يستبدل الصيانة التفاعلية اليدوية" },
      buyer: { en: "Facility management companies, real estate operators, property owners", ar: "شركات إدارة المرافق ومشغّلو العقارات وأصحاب الأملاك" },
      title: { en: "Work orders", ar: "أوامر العمل" },
      stamp: { en: "This week", ar: "هذا الأسبوع" },
      nav: ["Overview", "Work orders", "Assets", "Preventive", "Teams", "Reports"],
      navAr: ["نظرة عامة", "أوامر العمل", "الأصول", "الوقائية", "الفرق", "التقارير"],
      stats: [
        { label: { en: "Open", ar: "مفتوحة" }, value: "31", ink: "var(--color-text-primary)" },
        { label: { en: "Overdue", ar: "متأخرة" }, value: "4", ink: "var(--color-red-600)" },
        { label: { en: "PPM done", ar: "الوقائية" }, value: "96%", ink: "var(--color-green-600)" },
        { label: { en: "Avg. close", ar: "متوسط الإغلاق" }, value: "1.8d", ink: "var(--color-text-primary)" }
      ],
      cols: { en: ["Work order", "Assigned to", "Stage", "SLA"], ar: ["أمر العمل", "المسؤول", "المرحلة", "الخدمة"] },
      rows: [
        { a: "AC unit — Floor 2 meeting room", aAr: "مكيف — قاعة الطابق الثاني", b: { en: "M. Rashed", ar: "م. راشد" }, c: { en: "Dispatched", ar: "أُرسل" }, d: { en: "On time", ar: "في الوقت" }, s: "ok" },
        { a: "Chiller 02 — preventive service", aAr: "مبرّد 02 — صيانة وقائية", b: { en: "Gulf MEP", ar: "غلف MEP" }, c: { en: "Scheduled", ar: "مجدول" }, d: { en: "On time", ar: "في الوقت" }, s: "ok" },
        { a: "Water leak — Store room", aAr: "تسرب مياه — المخزن", b: { en: "A. Yousef", ar: "أ. يوسف" }, c: { en: "Escalated", ar: "مُصعّد" }, d: { en: "Overdue", ar: "متأخر" }, s: "bad" },
        { a: "Lighting — Car park B", aAr: "إضاءة — مواقف B", b: { en: "Unassigned", ar: "غير مُسند" }, c: { en: "Triage", ar: "فرز" }, d: { en: "Due today", ar: "مستحق اليوم" }, s: "warn" },
        { a: "Door reader — Clinic wing", aAr: "قارئ الباب — جناح العيادة", b: { en: "S. Faisal", ar: "س. فيصل" }, c: { en: "Verifying", ar: "تحقق" }, d: { en: "On time", ar: "في الوقت" }, s: "info" }
      ],
      panelTitle: { en: "CMMS and CAFM software for facility maintenance.", ar: "برنامج لإدارة المرافق والصيانة CMMS وCAFM." },
      panelBody: { en: "Bunyan gives every request, asset and task one owner and one traceable history — preventive and corrective, from the technician on site to the executive reading the report.", ar: "يمنح Bunyan كل طلب وأصل ومهمة مسؤولاً واحداً وسجلاً واحداً قابلاً للتتبع — وقائية وتصحيحية، من الفني في الموقع إلى المدير الذي يقرأ التقرير." },
      points: {
        en: ["Preventive and corrective schedules with SLA tracking", "Asset history and multi-stakeholder workflows in one place", "Compliance and audit-ready reporting without a data project"],
        ar: ["جداول وقائية وتصحيحية مع تتبع مستوى الخدمة", "سجل الأصول ومسارات العمل لكل الأطراف في مكان واحد", "تقارير امتثال جاهزة للتدقيق دون مشروع بيانات"]
      }
    },
    {
      url: `${APP_HOST}/vms/visiting-log`,
      group: { en: "Facilities ecosystem", ar: "منظومة المرافق" },
      tagline: { en: "From gate to exit, logged and reportable.", ar: "من البوابة حتى الخروج، موثّق وقابل للتقرير." },
      replaces: { en: "Replaces paper logs and reception books", ar: "يستبدل السجلات الورقية ودفاتر الاستقبال" },
      buyer: { en: "Any facility with controlled access — offices, communities, industrial sites", ar: "أي منشأة بدخول مُقيَّد — مكاتب ومجتمعات ومواقع صناعية" },
      title: { en: "Visiting log", ar: "سجل الزيارات" },
      stamp: { en: "Today", ar: "اليوم" },
      nav: ["Overview", "Pre-registration", "Visiting log", "Contractors", "Access rules", "Reports"],
      navAr: ["نظرة عامة", "التسجيل المسبق", "سجل الزيارات", "المقاولون", "قواعد الدخول", "التقارير"],
      stats: [
        { label: { en: "On site", ar: "داخل الموقع" }, value: "58", ink: "var(--color-text-primary)" },
        { label: { en: "Expected", ar: "متوقعون" }, value: "23", ink: "var(--color-text-primary)" },
        { label: { en: "Pre-reg.", ar: "مسجل مسبقاً" }, value: "94%", ink: "var(--color-green-600)" },
        { label: { en: "Denied", ar: "مرفوضون" }, value: "2", ink: "var(--color-red-600)" }
      ],
      cols: { en: ["Visitor", "Host", "Checked in", "Status"], ar: ["الزائر", "المستضيف", "وقت الدخول", "الحالة"] },
      rows: [
        { a: "Khalid Al Marri", aAr: "خالد المري", b: { en: "Facilities", ar: "المرافق" }, c: "09:12", d: { en: "On site", ar: "بالموقع" }, s: "ok" },
        { a: "Noura Al Hashimi", aAr: "نورة الهاشمي", b: { en: "Finance", ar: "المالية" }, c: "09:40", d: { en: "On site", ar: "بالموقع" }, s: "ok" },
        { a: "Contractor — Gulf MEP", aAr: "مقاول — غلف MEP", b: { en: "Maintenance", ar: "الصيانة" }, c: "10:05", d: { en: "Escorted", ar: "بمرافق" }, s: "warn" },
        { a: "Sara Ibrahim", aAr: "سارة إبراهيم", b: { en: "Programmes", ar: "البرامج" }, c: "—", d: { en: "Expected", ar: "متوقع" }, s: "info" },
        { a: "Unregistered walk-in", aAr: "زائر غير مسجل", b: { en: "Reception", ar: "الاستقبال" }, c: "11:18", d: { en: "Denied", ar: "مرفوض" }, s: "bad" }
      ],
      panelTitle: { en: "A visitor management system from invitation to exit.", ar: "نظام إدارة الزوار من الدعوة إلى المغادرة." },
      panelBody: { en: "VMS digitises visitor and external-worker access — pre-registration, smart check-in, identity verification and integration with the access control you already run. Paper logs become a full audit trail.", ar: "يرقمن VMS دخول الزوار والعاملين الخارجيين — تسجيل مسبق، دخول سريع، تحقق من الهوية، وتكامل مع أنظمة التحكم بالدخول التي تشغّلها. فتتحول السجلات الورقية إلى مسار تدقيق كامل." },
      points: {
        en: ["Pre-registration link staff can send from a phone", "External worker and contractor tracking with escort rules", "Full audit trail and reporting, from gate to exit"],
        ar: ["رابط تسجيل مسبق يرسله الموظف من هاتفه", "تتبع العاملين الخارجيين والمقاولين بقواعد المرافقة", "مسار تدقيق وتقارير كاملة، من البوابة حتى الخروج"]
      }
    },
    {
      url: `${APP_HOST}/communication/inbox`,
      group: { en: "Shared core", ar: "النواة المشتركة" },
      tagline: { en: "Answer everyone, everywhere — with AI on the front line.", ar: "أجب على الجميع في كل مكان — بالذكاء الاصطناعي في الصف الأول." },
      replaces: { en: "Replaces four separate inboxes", ar: "يستبدل أربعة صناديق منفصلة" },
      buyer: { en: "Any organisation fielding high message volume across channels", ar: "أي جهة تتعامل مع حجم رسائل كبير عبر القنوات" },
      title: { en: "Unified inbox", ar: "صندوق موحّد" },
      stamp: { en: "Last 7 days", ar: "آخر 7 أيام" },
      nav: ["Overview", "Unified inbox", "AI replies", "Automations", "Campaigns", "Reports"],
      navAr: ["نظرة عامة", "الصندوق الموحّد", "ردود الذكاء", "الأتمتة", "الحملات", "التقارير"],
      stats: [
        { label: { en: "Messages", ar: "الرسائل" }, value: "18.4k", ink: "var(--color-text-primary)" },
        { label: { en: "AI handled", ar: "بالذكاء" }, value: "82%", ink: "var(--color-green-600)" },
        { label: { en: "First reply", ar: "أول رد" }, value: "24s", ink: "var(--color-text-primary)" },
        { label: { en: "Open", ar: "مفتوحة" }, value: "37", ink: "var(--color-orange-700)" }
      ],
      cols: { en: ["Conversation", "Channel", "Handled by", "State"], ar: ["المحادثة", "القناة", "المعالج", "الحالة"] },
      rows: [
        { a: "Donation receipt request", aAr: "طلب إيصال تبرع", b: { en: "WhatsApp", ar: "واتساب" }, c: { en: "AI reply", ar: "رد ذكي" }, d: { en: "Resolved", ar: "مُغلق" }, s: "ok" },
        { a: "Visit booking — Tuesday", aAr: "حجز زيارة — الثلاثاء", b: { en: "WhatsApp", ar: "واتساب" }, c: { en: "AI reply", ar: "رد ذكي" }, d: { en: "Resolved", ar: "مُغلق" }, s: "ok" },
        { a: "Maintenance complaint", aAr: "شكوى صيانة", b: { en: "Facebook", ar: "فيسبوك" }, c: { en: "A. Yousef", ar: "أ. يوسف" }, d: { en: "Escalated", ar: "مُصعّد" }, s: "bad" },
        { a: "Ramadan campaign replies", aAr: "ردود حملة رمضان", b: { en: "SMS", ar: "رسالة نصية" }, c: { en: "Automation", ar: "أتمتة" }, d: { en: "Running", ar: "يعمل" }, s: "info" },
        { a: "In-kind pickup question", aAr: "استفسار استلام عيني", b: { en: "WhatsApp", ar: "واتساب" }, c: { en: "Unassigned", ar: "غير مُسند" }, d: { en: "Waiting", ar: "بالانتظار" }, s: "warn" }
      ],
      panelTitle: { en: "An AI customer engagement platform for every channel.", ar: "منصة تفاعل العملاء بالذكاء الاصطناعي لكل قناة." },
      panelBody: { en: "WhatsApp, Facebook and SMS arrive in one AI-powered inbox with automated replies and workflows — so nothing is dropped, and the answer is the same whoever asks.", ar: "واتساب وفيسبوك والرسائل النصية تصل إلى صندوق واحد مدعوم بالذكاء الاصطناعي مع ردود ومسارات مؤتمتة — فلا تُهمل رسالة، ويبقى الجواب واحداً لكل من يسأل." },
      points: {
        en: ["AI answers the routine questions, people take the rest", "One inbox across WhatsApp, Facebook and SMS", "Campaign messaging at scale from the same audience data"],
        ar: ["الذكاء الاصطناعي يجيب على الأسئلة المتكررة، والفريق يتولى الباقي", "صندوق واحد لواتساب وفيسبوك والرسائل النصية", "حملات رسائل واسعة النطاق من بيانات الجمهور نفسها"]
      }
    }
  ],
  features: [
    { icon: "LayersLayersBold", en: ["Modular by design", "Ten focused solutions that work alone or connect into a full ecosystem. Start with one; never a rigid, one-size-fits-all platform."], ar: ["معياري بالتصميم", "عشرة حلول مركّزة تعمل منفردة أو تتصل في منظومة كاملة. ابدأ بواحد؛ ولا نظام جامد بمقاس واحد للجميع."] },
    { icon: "LanguageLanguageBold", en: ["Arabic-first, RTL native", "Not a translation layer. Every screen is laid out for Arabic and English, so reception staff and leadership each read their own language."], ar: ["عربي أولاً بواجهة RTL أصلية", "ليست طبقة ترجمة. كل شاشة مصممة للعربية والإنجليزية، فيقرأ موظف الاستقبال والإدارة كل بلغته."] },
    { icon: "CertificateCertificateBold", en: ["Audit-ready by default", "Every change, entry and approval is logged with a person and a timestamp — GDPR and UAE PDPL aligned. Audit season stops being a project."], ar: ["جاهز للتدقيق افتراضياً", "كل تغيير ودخول وموافقة يُسجَّل باسم الشخص والوقت — بمواءمة GDPR وقانون حماية البيانات الإماراتي. فلا يصبح موسم التدقيق مشروعاً."] },
    { icon: "HighlightHighlightBold", en: ["AI-native, not AI-added", "Intelligence is built into every module from day one: predictive risk on your assets, AI replies on your channels, cross-solution forecasting for leadership."], ar: ["ذكاء أصلي لا مُضاف", "الذكاء مدمج في كل وحدة من اليوم الأول: تنبؤ بالمخاطر على أصولك، ردود ذكية على قنواتك، وتوقعات شاملة للإدارة."] },
    { icon: "MultiUserMultiUserBold", en: ["Roles that match your org chart", "Reception, facilities, finance and audit each see exactly what they need — and nothing they shouldn't."], ar: ["صلاحيات تطابق هيكلكم التنظيمي", "الاستقبال والمرافق والمالية والتدقيق، كل جهة ترى ما تحتاجه بالضبط — ولا شيء غير ذلك."] },
    { icon: "GroupGroupBold", en: ["A partner after go-live", "Continuous support, regular updates and a team that knows the sector — not a handover and an invoice."], ar: ["شريك بعد التشغيل", "دعم مستمر وتحديثات منتظمة وفريق يعرف القطاع — لا تسليم مشروع وفاتورة."] }
  ],
  faqs: [
    { en: ["What does a donation system manage?", "A donation management system connects fundraising campaigns, donation channels, transactions and receipts. Donation Hub brings cash, card and digital donations into one record, with kiosk management and reconciliation for charities and foundations. Tajir supports in-kind giving, while Agent Management and Jood cover field collection and outreach."], ar: ["ماذا يدير نظام التبرعات؟", "يربط نظام إدارة التبرعات حملات جمع التبرعات والقنوات والمعاملات والإيصالات. يجمع Donation Hub التبرعات النقدية والبطاقات والرقمية في سجل واحد مع إدارة الأكشاك والمطابقة للجمعيات والمؤسسات. ويدعم Tajir التبرعات العينية، بينما يغطي Agent Management وJood التحصيل الميداني والتواصل."] },
    { en: ["How do Bunyan, Twin AI and Insight 360 work together?", "Bunyan provides CMMS and CAFM workflows for work orders, preventive maintenance and asset history. Twin AI adds a digital twin and risk signals for predictive maintenance. Insight 360 brings reporting and forecasts across giving and facilities into an operational analytics dashboard. Each addresses a different part of the operation."], ar: ["كيف تعمل بنيان وTwin AI وInsight 360 معاً؟", "توفر بنيان مسارات CMMS وCAFM لأوامر العمل والصيانة الوقائية وسجل الأصول. ويضيف Twin AI التوأم الرقمي وإشارات المخاطر للصيانة التنبؤية. وتجمع Insight 360 التقارير والتوقعات عبر العطاء والمرافق في لوحة تحليلات تشغيلية. كل منها يعالج جانباً مختلفاً من التشغيل."] },
    { en: ["Can we start with one solution only?", "Yes, and most clients do. Donation Hub, Bunyan or VMS is the usual entry point because each shows value on its own. The other modules connect later without re-implementation — that is what modular by design means."], ar: ["هل يمكننا البدء بحل واحد فقط؟", "نعم، وهذا ما يفعله معظم عملائنا. Donation Hub أو Bunyan أو VMS هي نقطة البداية المعتادة لأن كل واحد منها يُثبت قيمته منفرداً. وتتصل الوحدات الأخرى لاحقاً دون إعادة تنفيذ — وهذا معنى التصميم المعياري."] },
    { en: ["What does “AI-native” actually mean here?", "Intelligence sits inside the modules, not in a chat window bolted on top: Twin AI shows asset risk forming before failure, the Communication Platform answers routine messages, and Insight 360 forecasts across giving and facilities together."], ar: ["ما معنى «الذكاء الأصلي» عملياً؟", "الذكاء داخل الوحدات، لا في نافذة محادثة مُضافة فوقها: Twin AI يكشف تكوّن مخاطر الأصول قبل الأعطال، ومنصة التواصل تجيب على الرسائل المتكررة، وInsight 360 يتوقع عبر العطاء والمرافق معاً."] },
    { en: ["Where is our data hosted, and are you compliant?", "Deployments are GDPR and UAE PDPL aligned, hosted in the region. We document the exact hosting and data-processing arrangement in your proposal before anything is signed."], ar: ["أين تُستضاف بياناتنا، وهل أنتم ممتثلون؟", "عملياتنا متوافقة مع GDPR وقانون حماية البيانات الشخصية الإماراتي، والاستضافة داخل المنطقة. ونوثّق ترتيب الاستضافة ومعالجة البيانات بالتفصيل في العرض قبل أي توقيع."] },
    { en: ["Do you integrate with the hardware and systems we already own?", "In most cases, yes — donation terminals, card readers, gates and access-control systems, plus your finance or ERP. Where new hardware is needed, our Smart Kiosk family covers donation and check-in touchpoints."], ar: ["هل تتكاملون مع الأجهزة والأنظمة التي نملكها؟", "في معظم الحالات، نعم — أجهزة التبرع وقارئات البطاقات والبوابات وأنظمة التحكم بالدخول، إضافة إلى نظامكم المالي أو ERP. وحين يلزم جهاز جديد، تغطي عائلة Smart Kiosk نقاط التبرع والدخول."] },
    { en: ["How long does implementation take?", "A single solution on a single site is usually live in two to three weeks. A multi-site or multi-module rollout with data migration typically runs six to eight weeks, in phases you approve one at a time."], ar: ["كم يستغرق التنفيذ؟", "حل واحد في موقع واحد يعمل عادة في أسبوعين إلى ثلاثة. أما التطبيق على عدة مواقع أو وحدات مع ترحيل البيانات فيستغرق عادة ستة إلى ثمانية أسابيع، على مراحل تعتمدونها واحدة تلو الأخرى."] }
  ]
};

export const HERO = [
  {
    tab: { en: "Donation Hub", ar: "Donation Hub" },
    eyebrow: { en: "Donation Hub · Giving ecosystem", ar: "Donation Hub · منظومة العطاء" },
    title: { en: "We build the systems your operation runs on.", ar: "نبني الأنظمة التي تُدير عملياتك." },
    body: { en: "Donation Hub is our donation management system for UAE charities and foundations. Manage campaigns, donation kiosks, receipts and reconciliation in one place.", ar: "Donation Hub هو نظام إدارة التبرعات للجمعيات الخيرية والمؤسسات في الإمارات، يجمع الحملات وأكشاك التبرع والإيصالات والمطابقة في مكان واحد." }
  },
  {
    tab: { en: "Bunyan + Twin AI", ar: "بنيان + Twin AI" },
    eyebrow: { en: "Bunyan + Twin AI · Facilities ecosystem", ar: "بنيان + Twin AI · منظومة المرافق" },
    title: { en: "Software that thinks ahead of your operation.", ar: "برمجيات تسبق عملياتك بخطوة." },
    body: { en: "We put intelligence inside the modules: Bunyan and Twin AI read sensor and work-order history, then open the preventive order before anything breaks.", ar: "نضع الذكاء داخل الوحدات: بنيان وTwin AI يقرأان بيانات المستشعرات وسجل أوامر العمل، ثم يفتحان أمر الصيانة الوقائية قبل أي عطل." }
  },
  {
    tab: { en: "Smart VMS", ar: "Smart VMS" },
    eyebrow: { en: "Smart VMS · Visitor management", ar: "Smart VMS · إدارة الزوار" },
    title: { en: "One partner, from the gate to the boardroom.", ar: "شريك واحد، من البوابة إلى قاعة الإدارة." },
    body: { en: "Ten solutions we design, integrate and support in-house — here, Smart VMS logs every visit from pre-invite to exit, audit trail included.", ar: "عشرة حلول نصممها وندمجها وندعمها بأنفسنا — وهنا يوثّق Smart VMS كل زيارة من الدعوة حتى الخروج، مع سجل تدقيق." }
  },
  {
    tab: { en: "Communication AI", ar: "منصة التواصل" },
    eyebrow: { en: "Communication Platform · Shared core", ar: "منصة التواصل · النواة المشتركة" },
    title: { en: "AI-native platforms, built and run by one team.", ar: "منصات ذكاء اصطناعي أصلية، يبنيها ويشغّلها فريق واحد." },
    body: { en: "Our Communication Platform fronts WhatsApp, email, web and phone with AI — shared core across every module we deliver.", ar: "منصة التواصل لدينا تتصدّر واتساب والبريد والموقع والهاتف بالذكاء الاصطناعي — نواة مشتركة لكل وحدة نسلّمها." }
  }
];

export const TINT = {
  ok:   { tint: "var(--color-surface-success)", ink: "var(--color-green-700)" },
  bad:  { tint: "var(--color-surface-error)",   ink: "var(--color-red-700)" },
  warn: { tint: "var(--color-surface-warning)", ink: "var(--color-orange-700)" },
  info: { tint: "var(--color-surface-brand)",   ink: "var(--color-blue-700)" }
};

export type Lang = "en" | "ar";

// Mirrors the design export: {en,ar} dictionaries resolve by language;
// everything else (including arrays) passes through untouched.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function pick(v: any, lang: Lang): any {
  if (v && typeof v === "object" && !Array.isArray(v)) {
    const rec = v as Record<string, unknown>;
    return (lang in rec ? rec[lang] : rec.en) ?? "";
  }
  return v;
}
