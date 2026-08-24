import Link from "next/link";
import {
  ArrowUpRight,
  CircleDot,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import type { Locale, Solution } from "@/lib/content";
import { homeCopy, solutions, solutionsAr } from "@/lib/content";
import { absoluteUrl, SITE_NAME, SITE_URL } from "@/lib/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactSection } from "@/components/contact-section";
import { JsonLd } from "@/components/json-ld";
import { ProductScreen } from "@/components/product-screen";

type SolutionDetailPageProps = {
  locale: Locale;
  solution: Solution;
};

const operatingPrinciples = [Workflow, Network, ShieldCheck];

export function SolutionDetailPage({ locale, solution }: SolutionDetailPageProps) {
  const ar = locale === "ar";
  const prefix = ar ? "/ar" : "";
  const copy = homeCopy[locale];
  const localizedSolutions = ar ? solutionsAr : solutions;
  const related = localizedSolutions.filter((item) => item.slug !== solution.slug).slice(0, 3);
  const alternateHref = ar
    ? `/solutions/${solution.slug}`
    : `/ar/solutions/${solution.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${absoluteUrl(solution.href)}/#service`,
        name: solution.name,
        serviceType: solution.category,
        description: solution.description,
        url: absoluteUrl(solution.href),
        provider: {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: SITE_NAME,
          url: SITE_URL,
        },
        areaServed: {
          "@type": "Country",
          name: "United Arab Emirates",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: ar ? "الرئيسية" : "Home",
            item: absoluteUrl(prefix || "/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: ar ? "الحلول" : "Solutions",
            item: absoluteUrl(`${prefix}/solutions`),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: solution.name,
            item: absoluteUrl(solution.href),
          },
        ],
      },
    ],
  };

  const principles = ar
    ? [
        ["مسار العمل أولاً", "نبدأ بالأشخاص والقرار وحركة البيانات، ثم نضبط التقنية حول العملية الفعلية."],
        ["تكامل موثّق", "يتم تحديد الأجهزة والأنظمة وحدود الملكية قبل أن تصبح وعود التكامل جزءاً من التطبيق."],
        ["حوكمة واضحة", "تُصمم الصلاحيات والتاريخ ومسؤولية كل خطوة في المنتج منذ البداية."],
      ]
    : [
        ["Workflow first", "We start with the people, decision and movement of data, then configure technology around the real operation."],
        ["Documented integration", "Devices, systems and ownership boundaries are mapped before integration promises become rollout scope."],
        ["Clear governance", "Permissions, history and accountability are designed into the product from the beginning."],
      ];

  return (
    <>
      <JsonLd data={schema} />
      <SiteHeader locale={locale} nav={copy.nav} alternateHref={alternateHref} />
      <main className="overflow-x-hidden w-full max-w-full solution-page">
        <section className="solution-hero">
          <div className="solution-hero__ambient" aria-hidden="true" />
          <div className="shell">
            <nav className="breadcrumbs breadcrumbs--dark" aria-label={ar ? "مسار الصفحة" : "Breadcrumb"}>
              <Link href={prefix || "/"}>{ar ? "الرئيسية" : "Home"}</Link>
              <span aria-hidden="true">/</span>
              <Link href={`${prefix}/solutions`}>{ar ? "الحلول" : "Solutions"}</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{solution.name}</span>
            </nav>

            <div className="solution-hero__grid">
              <div className="solution-hero__copy">
                <p className="eyebrow eyebrow--light">{solution.category}</p>
                <h1>{solution.title}</h1>
                <p>{solution.description}</p>
                <div className="solution-hero__actions">
                  <Link href={`${prefix}/contact`} className="button button--light">
                    {ar ? "ناقش مسار العمل" : "Discuss your workflow"}
                    <ArrowUpRight aria-hidden="true" size={18} />
                  </Link>
                  <a href="#capabilities" className="button button--ghost-light">
                    {ar ? "استعرض الإمكانات" : "Explore capabilities"}
                  </a>
                </div>
              </div>

              <div className="solution-hero__visual">
                <ProductScreen solution={solution} locale={locale} />
              </div>
            </div>
          </div>
        </section>

        <section className="solution-shift section section--light">
          <div className="shell solution-shift__grid">
            <div>
              <p className="eyebrow">{ar ? "التغيير التشغيلي" : "The operational shift"}</p>
              <h2>
                {ar ? "استبدل العمل المتناثر بسجل واضح للقرار." : "Replace scattered work with a clear record of the decision."}
              </h2>
            </div>
            <div className="solution-shift__comparison">
              <article>
                <span>{ar ? "اليوم" : "What it replaces"}</span>
                <p>{solution.replaces}</p>
              </article>
              <article>
                <span>{ar ? "بعد الربط" : "What becomes possible"}</span>
                <p>{solution.outcome}</p>
              </article>
            </div>
          </div>
        </section>

        <section id="capabilities" className="solution-capabilities section" aria-labelledby="capabilities-title">
          <div className="shell">
            <div className="section-intro section-intro--split section-intro--inverse">
              <div>
                <p className="eyebrow eyebrow--light">{solution.name}</p>
                <h2 id="capabilities-title" className="display-heading">
                  {ar ? "القدرات التي تحمل مسار العمل." : "The capabilities that carry the workflow."}
                </h2>
              </div>
              <p>
                {ar
                  ? "تُضبط كل قدرة حول الأدوار والأجهزة وحدود البيانات في جهتك. لا توجد حزمة افتراضية تتجاهل الواقع التشغيلي."
                  : "Each capability is configured around your roles, devices and data boundaries. There is no default bundle that ignores operational reality."}
              </p>
            </div>
            <div className="solution-capabilities__grid">
              {solution.capabilities.map((capability) => (
                <article key={capability}>
                  <CircleDot aria-hidden="true" />
                  <h3>{capability}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="solution-principles section section--light">
          <div className="shell">
            <div className="section-intro section-intro--wide">
              <p className="eyebrow">{ar ? "مصمم ليتلاءم" : "Designed to fit"}</p>
              <h2 className="display-heading">
                {ar ? "يبقى المنتج مركزاً. ويتصل بما حوله بعناية." : "The product stays focused. Its connections stay deliberate."}
              </h2>
            </div>
            <div className="solution-principles__grid">
              {principles.map(([title, body], index) => {
                const Icon = operatingPrinciples[index];
                return (
                  <article key={title}>
                    <Icon aria-hidden="true" />
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="related-solutions section" aria-labelledby="related-title">
          <div className="shell">
            <div className="section-intro section-intro--split section-intro--inverse">
              <div>
                <p className="eyebrow eyebrow--light">{ar ? "عندما يحين وقت الربط" : "When it is time to connect"}</p>
                <h2 id="related-title" className="display-heading">
                  {ar ? "حلول قريبة من مسار العمل." : "Adjacent solutions, ready when useful."}
                </h2>
              </div>
              <p>
                {ar
                  ? "ابدأ بحل واحد. أضف التالي عندما تكون علاقة العمل والبيانات واضحة."
                  : "Begin with one product. Add the next when the workflow and data relationship are clear."}
              </p>
            </div>
            <div className="related-solutions__grid">
              {related.map((item) => (
                <Link href={item.href} key={item.slug}>
                  <span>{item.category}</span>
                  <h3>{item.shortName}</h3>
                  <p>{item.title}</p>
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContactSection locale={locale} copy={copy.contact} />
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
