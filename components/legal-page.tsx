import Link from "next/link";
import type { Locale } from "@/lib/content";
import { homeCopy } from "@/lib/content";
import { CONTACT_EMAIL } from "@/lib/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

type LegalPageProps = {
  locale: Locale;
  type: "privacy" | "terms";
};

export function LegalPage({ locale, type }: LegalPageProps) {
  const ar = locale === "ar";
  const prefix = ar ? "/ar" : "";
  const copy = homeCopy[locale];
  const privacy = type === "privacy";

  const privacySections = ar
    ? [
        ["ما الذي يجمعه هذا الموقع", "لا يستخدم هذا الإصدار حسابات مستخدمين أو تحليلات تسويقية أو ملفات تتبع. نموذج التواصل يجهز مسودة بريد داخل متصفحك ولا يرسل بياناتك إلى خادم إنوفاتك."],
        ["عندما تختار إرسال البريد", `تنتقل المعلومات التي ترسلها عبر تطبيق البريد ومزود الخدمة لديك إلى ${CONTACT_EMAIL}. استخدم فقط التفاصيل التي ترغب في مشاركتها معنا.`],
        ["ملفات التشغيل", "قد يحتفظ مزود الاستضافة بسجلات تقنية أساسية مثل عنوان الشبكة ووقت الطلب ونوع المتصفح لحماية الخدمة وتشغيلها. يجب تأكيد مزود الاستضافة وفترة الاحتفاظ قبل الإطلاق العام."],
        ["حقوقك وتواصلك معنا", `يمكنك طلب الاستفسار عن معلومات أرسلتها مباشرة أو تصحيحها أو حذفها عبر ${CONTACT_EMAIL}. يجب مراجعة هذا الإشعار قانونياً عند ربط نموذج إنتاج أو أداة تحليلات.`],
      ]
    : [
        ["What this website collects", "This build does not use user accounts, marketing analytics or tracking cookies. The contact form prepares an email draft in your browser and does not transmit your details to an Innovatek server."],
        ["When you choose to send an email", `Information you send travels through your email application and provider to ${CONTACT_EMAIL}. Include only the details you want to share with us.`],
        ["Operational logs", "A future hosting provider may keep basic technical logs such as network address, request time and browser type to operate and protect the service. The provider and retention period must be confirmed before public launch."],
        ["Your choices and contact", `You can ask about, correct or delete information you sent directly by writing to ${CONTACT_EMAIL}. This notice must receive legal review when a production form endpoint or analytics tool is connected.`],
      ];

  const termsSections = ar
    ? [
        ["غرض الموقع", "يقدم الموقع معلومات عامة عن منصات إنوفاتك ومنهج العمل. لا يشكل عرضاً تعاقدياً أو ضماناً لميزة أو تكامل أو مدة تنفيذ محددة."],
        ["نطاق المنتجات", "تُحدد الإمكانات والتكاملات والاستضافة والدعم والنتائج المتوقعة في عرض واتفاق مكتوبين لكل مشروع. لا تعتمد على نموذج واجهة أو مثال تشغيلي باعتباره بيانات حية."],
        ["المحتوى والهوية", "علامة إنوفاتك ومواد الموقع مملوكة لأصحابها. لا يمنح استخدام الموقع حق نسخ الهوية أو إعادة نشر المواد خارج الاستخدام العادل أو الإذن المكتوب."],
        ["المراجعة قبل الإطلاق", `هذه صياغة تشغيلية أولية وليست بديلاً عن مراجعة قانونية. للاستفسار تواصل عبر ${CONTACT_EMAIL}.`],
      ]
    : [
        ["Purpose of this website", "The website provides general information about Innovatek platforms and ways of working. It is not a contractual offer or a guarantee of any particular feature, integration or delivery time."],
        ["Product scope", "Capabilities, integrations, hosting, support and expected outcomes are defined in a written proposal and agreement for each engagement. Interface mockups and operational examples should not be treated as live customer data."],
        ["Content and identity", "Innovatek branding and website materials belong to their respective owners. Using the site does not grant permission to copy the identity or republish materials beyond fair use or written authorization."],
        ["Review before launch", `This is an operational draft and does not replace legal review. Questions can be sent to ${CONTACT_EMAIL}.`],
      ];

  const sections = privacy ? privacySections : termsSections;
  const title = privacy
    ? ar ? "إشعار خصوصية الموقع" : "Website privacy notice"
    : ar ? "شروط استخدام الموقع" : "Website terms of use";

  return (
    <>
      <SiteHeader
        locale={locale}
        nav={copy.nav}
        alternateHref={ar ? `/${type}` : `/ar/${type}`}
      />
      <main className="legal-page overflow-x-hidden w-full max-w-full">
        <section className="legal-page__hero">
          <div className="shell">
            <p className="eyebrow eyebrow--light">Innovatek SWD</p>
            <h1>{title}</h1>
            <p>
              {ar
                ? "صياغة تشغيلية لهذا الإصدار من الموقع. يلزم اعتماد قانوني قبل الإطلاق العام."
                : "Operational copy for this website build. Legal approval is required before public launch."}
            </p>
          </div>
        </section>
        <section className="legal-page__body section section--light">
          <div className="shell legal-page__grid">
            <aside>
              <span>{ar ? "الحالة" : "Status"}</span>
              <strong>{ar ? "مسودة للمراجعة" : "Draft for review"}</strong>
              <Link href={`${prefix}/contact`}>{ar ? "تواصل معنا" : "Contact us"}</Link>
            </aside>
            <div className="legal-page__sections">
              {sections.map(([heading, body]) => (
                <section key={heading}>
                  <h2>{heading}</h2>
                  <p>{body}</p>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}

