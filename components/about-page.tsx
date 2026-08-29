import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Languages,
  Layers3,
  ShieldCheck,
  RefreshCcw,
  type LucideIcon,
} from "lucide-react";
import type { Locale } from "@/lib/content";
import { homeCopy } from "@/lib/content";
import { absoluteUrl, SITE_NAME, SITE_URL } from "@/lib/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactSection } from "@/components/contact-section";
import { JsonLd } from "@/components/json-ld";

type AboutPageProps = {
  locale: Locale;
};

export function AboutPage({ locale }: AboutPageProps) {
  const ar = locale === "ar";
  const prefix = ar ? "/ar" : "";
  const copy = homeCopy[locale];
  const principles: Array<[LucideIcon, string, string]> = ar
    ? [
        [Layers3, "معياري بالتصميم", "عشرة حلول مركّزة تعمل منفردة أو تتصل في منظومة كاملة. ابدأ بواحد — ولا نظام جامد بمقاس واحد للجميع."],
        [Languages, "عربي أولاً بواجهة RTL أصلية", "ليست طبقة ترجمة. كل شاشة مصممة للعربية والإنجليزية، فيقرأ موظف الاستقبال والإدارة كل بلغته."],
        [ShieldCheck, "جاهز للتدقيق افتراضياً", "كل تغيير ودخول وموافقة يُسجَّل باسم الشخص والوقت — بمواءمة GDPR وقانون حماية البيانات الإماراتي. فلا يصبح موسم التدقيق مشروعاً."],
        [RefreshCcw, "شريك بعد التشغيل", "دعم مستمر وتحديثات منتظمة وفريق يعرف القطاع — لا تسليم مشروع وفاتورة."],
      ]
    : [
        [Layers3, "Modular by design", "Ten focused solutions that work alone or connect into a full ecosystem. Start with one — never a rigid, one-size-fits-all platform."],
        [Languages, "Arabic-first, RTL native", "Not a translation layer. Every screen is laid out for Arabic and English, so reception staff and leadership each read their own language."],
        [ShieldCheck, "Audit-ready by default", "Every change, entry and approval is logged with a person and a timestamp — GDPR and UAE PDPL aligned. Audit season stops being a project."],
        [RefreshCcw, "A partner after go-live", "Continuous support, regular updates and a team that knows the sector — not a handover and an invoice."],
      ];
  const stats: Array<[string, string]> = ar
    ? [
        ["2024", "تأسست في الإمارات"],
        ["+15", "خبير تقني"],
        ["10", "حلول مترابطة"],
      ]
    : [
        ["2024", "Founded in the UAE"],
        ["15+", "Technology experts"],
        ["10", "Connected solutions"],
      ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: absoluteUrl(`${prefix}/about`),
    name: ar ? "عن إنوفاتك SWD" : "About Innovatek SWD",
    about: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    inLanguage: ar ? "ar-AE" : "en-AE",
  };

  return (
    <>
      <JsonLd data={schema} />
      <SiteHeader locale={locale} nav={copy.nav} alternateHref={ar ? "/about" : "/ar/about"} />
      <main className="overflow-x-hidden w-full max-w-full about-page">
        <section className="about-hero">
          <div className="shell about-hero__grid">
            <div className="about-hero__copy">
              <p className="eyebrow eyebrow--light">{ar ? "عن إنوفاتك SWD" : "About Innovatek SWD"}</p>
              <h1>{ar ? "شركة برمجيات تبقى معك بعد التشغيل." : "A software house that stays after go-live."}</h1>
              <p>
                {ar
                  ? "تأسسنا في الإمارات عام 2024، ونبني منظومات ذكية تتوسع بالذكاء الاصطناعي — للعطاء وإدارة المرافق وتفاعل العملاء في الإمارات والسعودية ومصر وعموم الشرق الأوسط. معيارية بالتصميم، وذكاء أصلي من اليوم الأول، وبمواءمة GDPR وقانون حماية البيانات الإماراتي، ومبنية للبقاء: دعم مستمر وتحديثات منتظمة وفريق يعرف القطاع."
                  : "Founded in the UAE in 2024, we build intelligent ecosystems that scale with AI — for giving, facility management and customer engagement across the UAE, KSA, Egypt and the wider MENA region. Modular by design, AI-native from day one, GDPR and UAE PDPL aligned, and built to stay: continuous support, regular updates, and a team that knows the sector."}
              </p>
              <div className="about-hero__stats">
                {stats.map(([value, label]) => (
                  <div key={label}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <Link href={`${prefix}/contact`} className="button button--light">
                {ar ? "تحدّث إلى فريقنا" : "Talk to our team"}
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
            <div className="about-hero__media">
              <Image
                src="/assets/reference/innovatek-engineering-team.webp"
                alt={ar ? "فريق إنوفاتك الهندسي يطور البرمجيات التشغيلية" : "Innovatek engineering team developing operational software"}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 54vw"
              />
            </div>
          </div>
        </section>

        <section className="about-statement section section--light">
          <div className="shell about-statement__grid">
            <p className="eyebrow">{ar ? "ما نؤمن به" : "What we believe"}</p>
            <h2>
              {ar
                ? "التقنية التشغيلية الجيدة تختفي داخل يوم عمل أوضح."
                : "Good operational technology disappears into a clearer working day."}
            </h2>
            <p>
              {ar
                ? "لا نبدأ بقائمة مزايا. نبدأ بالطلب الذي يتأخر، والقرار الذي يفتقد السياق، والسجل الذي لا يثق به فريقان بالطريقة نفسها. ثم نصمم المنتج والتكامل والدعم حول ذلك الواقع."
                : "We do not begin with a feature list. We begin with the request that stalls, the decision missing context and the record two teams cannot trust in the same way. Then we shape product, integration and support around that reality."}
            </p>
          </div>
        </section>

        <section className="about-principles section" aria-labelledby="about-principles-title">
          <div className="shell">
            <div className="section-intro section-intro--wide section-intro--inverse">
              <p className="eyebrow eyebrow--light">{ar ? "طريقة البناء" : "How we build"}</p>
              <h2 id="about-principles-title" className="display-heading">
                {ar ? "قرارات تصميم تحافظ على التشغيل في المقدمة." : "Design decisions that keep the operation in front."}
              </h2>
            </div>
            <div className="about-principles__grid">
              {principles.map(([Icon, title, body]) => (
                <article key={String(title)}>
                  <Icon aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-focus section section--light">
          <div className="shell about-focus__grid">
            <div className="about-focus__media">
              <Image
                src="/assets/reference/smart-facility-access-control.webp"
                alt={ar ? "مدخل منشأة حديث مع نظام دخول ذكي" : "Modern facility entrance with smart access control"}
                fill
                sizes="(max-width: 900px) 100vw, 48vw"
              />
            </div>
            <div>
              <p className="eyebrow">{ar ? "تركيزنا" : "Our focus"}</p>
              <h2>{ar ? "أعمال لها أثر واضح ومسؤولية واضحة." : "Work with visible impact and clear accountability."}</h2>
              <p>
                {ar
                  ? "نركز على المسارات التي تربط خدمة الناس بالحوكمة: إدارة التبرعات، صيانة الأصول، تجربة الزائر، والتواصل الذي يتحول إلى طلب ومهمة وقرار."
                  : "We focus on workflows where service and governance meet: donation management, asset maintenance, visitor experience and communication that becomes a request, task and decision."}
              </p>
              <Link href={`${prefix}/solutions`} className="text-link">
                {ar ? "استعرض منصاتنا" : "Explore our platforms"}
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <ContactSection locale={locale} copy={copy.contact} />
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
