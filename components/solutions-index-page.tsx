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

export function SolutionsIndexPage({ locale, solutions }: SolutionsIndexPageProps) {
  const ar = locale === "ar";
  const prefix = ar ? "/ar" : "";
  const copy = homeCopy[locale];

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

