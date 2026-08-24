import { Check, Circle } from "lucide-react";
import type { Locale, Solution } from "@/lib/content";

type ScreenRow = [string, string, string, string];

type ScreenContent = {
  url: string;
  title: string;
  stamp: string;
  nav: string[];
  stats: Array<[string, string]>;
  columns: string[];
  rows: ScreenRow[];
};

const successStatuses = new Set([
  "Recorded", "Matched", "Complete", "Answered",
  "مُسجّل", "مطابق", "مكتمل", "تم الرد",
]);

const attentionStatuses = new Set([
  "Review", "Escalated", "Expected", "AI draft",
  "مراجعة", "تم التصعيد", "متوقع", "مسودة ذكية",
]);

function statusTone(status: string) {
  if (successStatuses.has(status)) return "success";
  if (attentionStatuses.has(status)) return "attention";
  return "active";
}

const screenContent: Record<string, { en: ScreenContent; ar: ScreenContent }> = {
  "donation-hub": {
    en: {
      url: "giving.innovatek.app/projects",
      title: "Projects & transactions",
      stamp: "Live ledger",
      nav: ["Overview", "Projects", "Transactions", "Channels", "Receipts", "Reports"],
      stats: [["Active projects", "24"], ["Channels", "08"], ["Reconciled", "96%"], ["Pending", "12"]],
      columns: ["Project", "Channel", "Value", "Status"],
      rows: [
        ["Winter relief", "Kiosk 04", "AED 18.4K", "Recorded"],
        ["Water fund", "Online", "AED 9.2K", "Matched"],
        ["Family support", "Card", "AED 6.8K", "Recorded"],
        ["Education", "Cash desk", "AED 4.1K", "Review"],
        ["General fund", "Mobile", "AED 3.7K", "Matched"],
      ],
    },
    ar: {
      url: "giving.innovatek.app/projects",
      title: "المشاريع والمعاملات",
      stamp: "سجل مباشر",
      nav: ["نظرة عامة", "المشاريع", "المعاملات", "القنوات", "الإيصالات", "التقارير"],
      stats: [["مشاريع نشطة", "24"], ["القنوات", "08"], ["تمت المطابقة", "96%"], ["قيد المراجعة", "12"]],
      columns: ["المشروع", "القناة", "القيمة", "الحالة"],
      rows: [
        ["إغاثة الشتاء", "الكشك 04", "18.4K د.إ", "مُسجّل"],
        ["سقيا الماء", "الإنترنت", "9.2K د.إ", "مطابق"],
        ["دعم الأسرة", "بطاقة", "6.8K د.إ", "مُسجّل"],
        ["التعليم", "الصندوق", "4.1K د.إ", "مراجعة"],
        ["الصندوق العام", "الهاتف", "3.7K د.إ", "مطابق"],
      ],
    },
  },
  "bunyan-cmms": {
    en: {
      url: "bunyan.innovatek.app/work-orders",
      title: "Work orders",
      stamp: "Facilities live",
      nav: ["Overview", "Work orders", "Assets", "Teams", "SLA", "Reports"],
      stats: [["Open orders", "38"], ["Due today", "07"], ["SLA met", "94%"], ["Risk flags", "05"]],
      columns: ["Work order", "Asset", "Owner", "Status"],
      rows: [
        ["WO-1842", "AHU-04", "M. Kareem", "In progress"],
        ["WO-1841", "Lift 02", "A. Nasser", "Assigned"],
        ["WO-1838", "Pump 11", "S. Omar", "Review"],
        ["WO-1836", "Gate 03", "R. Ahmed", "Scheduled"],
        ["WO-1834", "Chiller 01", "M. Kareem", "Complete"],
      ],
    },
    ar: {
      url: "bunyan.innovatek.app/work-orders",
      title: "أوامر العمل",
      stamp: "المرافق مباشرة",
      nav: ["نظرة عامة", "أوامر العمل", "الأصول", "الفرق", "مستوى الخدمة", "التقارير"],
      stats: [["أوامر مفتوحة", "38"], ["مستحقة اليوم", "07"], ["ضمن الخدمة", "94%"], ["إشارات خطر", "05"]],
      columns: ["أمر العمل", "الأصل", "المسؤول", "الحالة"],
      rows: [
        ["WO-1842", "AHU-04", "م. كريم", "قيد التنفيذ"],
        ["WO-1841", "المصعد 02", "أ. ناصر", "تم الإسناد"],
        ["WO-1838", "المضخة 11", "س. عمر", "مراجعة"],
        ["WO-1836", "البوابة 03", "ر. أحمد", "مجدول"],
        ["WO-1834", "المبرد 01", "م. كريم", "مكتمل"],
      ],
    },
  },
  "visitor-management-system": {
    en: {
      url: "vms.innovatek.app/visiting-log",
      title: "Visiting log",
      stamp: "Gate connected",
      nav: ["Overview", "Expected", "At reception", "Hosts", "Access", "History"],
      stats: [["Expected", "42"], ["Checked in", "19"], ["On site", "14"], ["Exceptions", "02"]],
      columns: ["Visitor", "Host", "Gate", "Status"],
      rows: [
        ["Aisha Rahman", "Finance", "Gate 03", "On site"],
        ["Omar Khalid", "Operations", "Gate 01", "Expected"],
        ["Sara Nabil", "Facilities", "Gate 03", "Checked in"],
        ["Daniel Lee", "Digital", "Gate 02", "Expected"],
        ["Mariam Ali", "Executive", "Gate 01", "Complete"],
      ],
    },
    ar: {
      url: "vms.innovatek.app/visiting-log",
      title: "سجل الزيارات",
      stamp: "البوابة متصلة",
      nav: ["نظرة عامة", "الزيارات المتوقعة", "الاستقبال", "المضيفون", "الدخول", "السجل"],
      stats: [["متوقع", "42"], ["تم الدخول", "19"], ["في الموقع", "14"], ["استثناءات", "02"]],
      columns: ["الزائر", "المضيف", "البوابة", "الحالة"],
      rows: [
        ["عائشة رحمن", "المالية", "البوابة 03", "في الموقع"],
        ["عمر خالد", "العمليات", "البوابة 01", "متوقع"],
        ["سارة نبيل", "المرافق", "البوابة 03", "تم الدخول"],
        ["دانيال لي", "الرقمي", "البوابة 02", "متوقع"],
        ["مريم علي", "الإدارة", "البوابة 01", "مكتمل"],
      ],
    },
  },
  "communication-platform": {
    en: {
      url: "comms.innovatek.app/inbox",
      title: "Unified inbox",
      stamp: "AI assisted",
      nav: ["Overview", "Inbox", "Knowledge", "Automation", "Teams", "Reports"],
      stats: [["Open", "64"], ["AI resolved", "71%"], ["Escalated", "09"], ["SLA met", "97%"]],
      columns: ["Conversation", "Channel", "Owner", "Status"],
      rows: [
        ["Donation receipt", "WhatsApp", "Giving", "Answered"],
        ["Visitor update", "Web", "Reception", "Assigned"],
        ["Asset request", "Email", "Facilities", "Escalated"],
        ["Campaign query", "SMS", "Giving", "AI draft"],
        ["General request", "Phone", "Care", "Complete"],
      ],
    },
    ar: {
      url: "comms.innovatek.app/inbox",
      title: "صندوق التواصل الموحد",
      stamp: "بمساعدة الذكاء",
      nav: ["نظرة عامة", "الوارد", "المعرفة", "الأتمتة", "الفرق", "التقارير"],
      stats: [["مفتوح", "64"], ["حلها الذكاء", "71%"], ["تم التصعيد", "09"], ["ضمن الخدمة", "97%"]],
      columns: ["المحادثة", "القناة", "المسؤول", "الحالة"],
      rows: [
        ["إيصال تبرع", "واتساب", "العطاء", "تم الرد"],
        ["تحديث زيارة", "الموقع", "الاستقبال", "تم الإسناد"],
        ["طلب أصل", "البريد", "المرافق", "تم التصعيد"],
        ["استفسار حملة", "رسالة", "العطاء", "مسودة ذكية"],
        ["طلب عام", "الهاتف", "الخدمة", "مكتمل"],
      ],
    },
  },
};

export function ProductScreen({ solution, locale, compact = false }: { solution: Solution; locale: Locale; compact?: boolean }) {
  const content = screenContent[solution.slug]?.[locale] ?? screenContent["donation-hub"].en;
  const label = `${solution.name} ${locale === "ar" ? "واجهة تشغيلية توضيحية" : "illustrative operational interface"}`;

  return (
    <figure role="img" className={compact ? "product-screen product-screen--compact" : "product-screen"} aria-label={label}>
      <div aria-hidden="true">
        <div className="product-screen__chrome">
          <div aria-hidden="true"><span /><span /><span /></div>
          <span dir="ltr">{content.url}</span>
        </div>
        <div className="product-screen__shell">
          <div className="product-screen__nav">
            <div className="product-screen__brand"><strong>IN</strong><span>Innovatek OS</span></div>
            {content.nav.map((item, index) => (
              <span className={index === 1 ? "product-screen__nav-item product-screen__nav-item--active" : "product-screen__nav-item"} key={item}>
                <Circle aria-hidden="true" size={6} fill="currentColor" />
                {item}
              </span>
            ))}
          </div>
          <div className="product-screen__workspace">
            <div className="product-screen__heading">
              <strong>{content.title}</strong>
              <span>{content.stamp}</span>
            </div>
            <div className="product-screen__stats">
              {content.stats.map(([label, value]) => (
                <div key={label}><span>{label}</span><strong>{value}</strong></div>
              ))}
            </div>
            <div className="product-screen__table" role="presentation">
              <div className="product-screen__row product-screen__row--head">
                {content.columns.map((column) => <span key={column}>{column}</span>)}
              </div>
              {content.rows.map((row) => (
                <div className="product-screen__row" key={row.join("-")}>
                  <strong>{row[0]}</strong><span>{row[1]}</span><span>{row[2]}</span>
                  <span className={`product-screen__status product-screen__status--${statusTone(row[3])}`}>
                    {statusTone(row[3]) === "success"
                      ? <Check aria-hidden="true" size={10} strokeWidth={3} />
                      : <Circle aria-hidden="true" size={7} fill="currentColor" />}
                    {row[3]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}
