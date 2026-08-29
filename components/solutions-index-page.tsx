import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Cable, Sparkles } from "lucide-react";
import type { Locale, Solution } from "@/lib/content";
import { homeCopy } from "@/lib/content";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactSection } from "@/components/contact-section";

type SolutionsIndexPageProps = {
  locale: Locale;
  solutions: Solution[];
};

const ecosystemGroups = {
  ar: [
      {
        title: "العطاء",
        tagline: "رحلة واحدة منسجمة لكل متبرع — من أول رسالة إلى آخر إيصال.",
        items: [
          { name: "Donation Hub", description: "المشاريع والأجهزة والمعاملات والحملات في نظام واحد." },
          { name: "Tajir", description: "التبرع العيني بسهولة الشراء الإلكتروني." },
          { name: "Agent Management", description: "المندوبون الميدانيون ومطابقة الأمانات والحضور في الوقت الفعلي." },
          { name: "Jood", description: "حملات الرسائل وإدارة العملاء المحتملين تحوّل التواصل إلى نتيجة." },
        ],
      },
      {
        title: "المرافق",
        tagline: "من الصيانة التفاعلية إلى يقين تشغيلي في الوقت الفعلي.",
        items: [
          { name: "Bunyan · CMMS / CAFM", description: "صيانة وقائية وتصحيحية مع مستوى خدمة وسجل للأصول." },
          { name: "Twin AI", description: "توأم رقمي حي يكشف تكوّن المخاطر قبل العطل." },
          { name: "VMS", description: "دخول الزوار والمقاولين، مؤمَّن وموثّق بالكامل." },
        ],
      },
      {
        title: "النواة المشتركة",
        tagline: "طبقة الأجهزة والتحليلات والتفاعل التي تُشغّل كل شيء.",
        items: [
          { name: "Smart Kiosk", description: "أجهزة تبرع ذاتية الخدمة وأجهزة تسجيل دخول الزوار." },
          { name: "Insight 360", description: "لوحة ذكاء واحدة للعطاء والمرافق، مع تنبؤات." },
          { name: "Communication Platform", description: "واتساب وفيسبوك والرسائل النصية في صندوق واحد بالذكاء الاصطناعي." },
        ],
      },
    ],
  en: [
      {
        title: "Giving",
        tagline: "One harmonised journey for every donor — first message to final receipt.",
        items: [
          { name: "Donation Hub", description: "Projects, devices, transactions and campaigns in one system." },
          { name: "Tajir", description: "In-kind giving with the simplicity of online shopping." },
          { name: "Agent Management", description: "Field agents, custody reconciliation and attendance in real time." },
          { name: "Jood", description: "SMS campaigns and lead management that convert outreach into action." },
        ],
      },
      {
        title: "Facilities",
        tagline: "From reactive maintenance to real-time operational certainty.",
        items: [
          { name: "Bunyan · CMMS / CAFM", description: "Preventive and corrective maintenance with SLA and asset history." },
          { name: "Twin AI", description: "A live digital twin that shows risk forming before failure." },
          { name: "VMS", description: "Visitor and contractor access, secured and fully logged." },
        ],
      },
      {
        title: "Shared core",
        tagline: "The hardware, analytics and engagement layer powering everything.",
        items: [
          { name: "Smart Kiosk", description: "Self-service donation terminals and visitor check-in hardware." },
          { name: "Insight 360", description: "One AI dashboard across giving and facilities, with predictions." },
          { name: "Communication Platform", description: "WhatsApp, Facebook and SMS in one AI-powered inbox." },
        ],
      },
    ],
};

export function SolutionsIndexPage({ locale, solutions }: SolutionsIndexPageProps) {
  const ar = locale === "ar";
  const prefix = ar ? "/ar" : "";
  const copy = homeCopy[locale];
  const groups = ar ? ecosystemGroups.ar : ecosystemGroups.en;

  return (
    <>
      <SiteHeader locale={locale} nav={copy.nav} alternateHref={ar ? "/solutions" : "/ar/solutions"} />
      <main className="overflow-x-hidden w-full max-w-full solutions-index">
        <section className="index-hero">
          <div className="index-hero__ambient" aria-hidden="true" />
          <div className="shell index-hero__grid">
            <div>
              <p className="eyebrow eyebrow--light">{ar ? "منظومة إنوفاتك" : "The Innovatek ecosystem"}</p>
              <h1>
                {ar ? "أربعة منتجات مركزة. نموذج تشغيل واحد مترابط." : "Four focused products. One connected operating model."}
              </h1>
            </div>
            <div>
              <p>
                {ar
                  ? "اختر المشكلة التشغيلية التي تستحق الحل أولاً. كل منصة مكتملة بمفردها، وتشترك جميعها في منهج التصميم والتكامل والدعم."
                  : "Choose the operational problem worth solving first. Each platform is complete on its own and shares the same design, integration and support discipline."}
              </p>
              <a href="#all-solutions" className="button button--light">
                {ar ? "استعرض الحلول" : "Explore the solutions"}
                <ArrowDownRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="all-solutions" className="solution-list section section--light">
          <div className="shell solution-list__items">
            {solutions.map((solution) => (
              <article className="solution-list__item" key={solution.slug}>
                <div className="solution-list__copy">
                  <p>{solution.category}</p>
                  <h2>{solution.name}</h2>
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                  <Link href={solution.href} className="text-link">
                    {ar ? "افتح صفحة الحل" : "Open the solution"}
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                </div>
                <Link href={solution.href} className="solution-list__media" aria-label={solution.name}>
                  <Image
                    src={solution.image}
                    alt={solution.imageAlt}
                    fill
                    sizes="(max-width: 900px) 100vw, 48vw"
                  />
                  <span aria-hidden="true">
                    <ArrowUpRight />
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="ecosystem" className="ecosystem section section--light" aria-labelledby="ecosystem-title">
          <div className="shell">
            <div className="section-intro section-intro--wide">
              <p className="eyebrow">{ar ? "المنظومة" : "The ecosystem"}</p>
              <h2 id="ecosystem-title" className="display-heading">
                {ar ? "عشرة حلول. مبنية لتعمل منفردة — أو معاً." : "Ten solutions. Built to work alone or together."}
              </h2>
              <p>
                {ar
                  ? "منظومتان ونواة ذكاء واحدة. ابدأ من الأكثر إلحاحاً، وأضف الباقي لاحقاً."
                  : "Two ecosystems, one shared AI core. Start where it hurts most; connect the rest later."}
              </p>
            </div>
            <div className="ecosystem__groups">
              {groups.map((group) => (
                <article className="ecosystem__group" key={group.title}>
                  <h3>{group.title}</h3>
                  <p>{group.tagline}</p>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <strong>{item.name}</strong>
                        <span>{item.description}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="index-core section">
          <div className="shell index-core__grid">
            <div className="index-core__visual" aria-hidden="true">
              <span><Cable /></span>
              <i />
              <span><Sparkles /></span>
            </div>
            <div>
              <p className="eyebrow eyebrow--light">{ar ? "النواة المشتركة" : "The shared core"}</p>
              <h2>{ar ? "معيارية من دون تجزئة." : "Modular, without becoming fragmented."}</h2>
              <p>
                {ar
                  ? "تربط الهوية والصلاحيات والتواصل والتدقيق والذكاء الحلول عندما توجد قيمة تشغيلية حقيقية للربط."
                  : "Identity, permissions, communication, audit history and intelligence connect the products when there is a real operational reason to do so."}
              </p>
              <Link href={`${prefix}/contact`} className="button button--light">
                {ar ? "ارسم منظومتك معنا" : "Map your ecosystem with us"}
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

