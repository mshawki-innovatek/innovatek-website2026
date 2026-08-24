import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Languages,
  Layers3,
  MapPinned,
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
        [Languages, "العربية جزء من المنتج", "نراجع مسار العمل واللغة والاتجاه معاً، لأن الترجمة وحدها لا تصنع تجربة تشغيل عربية."],
        [Layers3, "معيارية بلا تجزئة", "يحل كل منتج مشكلة كاملة، ثم يتصل ببقية المنظومة فقط عندما تكون هناك فائدة واضحة."],
        [MapPinned, "قريبون من سياق المنطقة", "نصمم حول واقع الجهات في الإمارات والمنطقة، من البوابة والكشك إلى المالية ومكتب الإدارة."],
        [RefreshCcw, "شراكة بعد الإطلاق", "يبقى فريق المنتج قريباً من الاستخدام الحقيقي والدعم والتحسين، وفق نطاق واضح لكل مشروع."],
      ]
    : [
        [Languages, "Arabic belongs in the product", "We review workflow, language and reading direction together because translation alone does not create an Arabic operational experience."],
        [Layers3, "Modular without fragmentation", "Each product solves a complete problem, then connects to the wider ecosystem only when the operational value is clear."],
        [MapPinned, "Close to regional context", "We design around the reality of organizations in the UAE and region—from the gate and kiosk to finance and leadership."],
        [RefreshCcw, "A partner after launch", "The product team stays close to real usage, support and improvement within a clear engagement scope."],
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
              <p className="eyebrow eyebrow--light">{ar ? "عن إنوفاتك SWD" : "Innovatek SWD"}</p>
              <h1>{ar ? "فريق منتج يبقى قريباً من العملية." : "A product team that stays close to the operation."}</h1>
              <p>
                {ar
                  ? "نبني منصات للعطاء والمرافق والزوار وتفاعل العملاء، ونربط البرمجيات بالأجهزة والأنظمة والأشخاص الذين يعتمد عليهم التشغيل كل يوم."
                  : "We build platforms for giving, facilities, visitors and customer engagement, connecting software with the devices, systems and people the operation relies on every day."}
              </p>
              <Link href={`${prefix}/contact`} className="button button--light">
                {ar ? "تحدث إلى فريق المنتج" : "Talk to the product team"}
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
