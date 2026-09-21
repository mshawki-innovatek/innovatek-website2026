import Link from "next/link";
import { ArrowUpRight, ArrowDown, Check, Plus, Layers3, BarChart3, Workflow, ClipboardCheck } from "lucide-react";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/content";
import { getProductPage, productPath } from "@/lib/product-pages";
import { canonicalUrl, SITE_URL, SITE_NAME } from "@/lib/site";
import { MarketingHeader, MarketingFooter } from "@/components/marketing-chrome";
import { ContactSection } from "@/components/contact-section";
import { JsonLd } from "@/components/json-ld";

function ProductIllustration({ product, locale }: { product: NonNullable<ReturnType<typeof getProductPage>>; locale: Locale }) {
  const ar = locale === "ar";
  const donation = product.id === "donation-hub";
  return <figure className="product-illustration">
    <div className="product-screen" role="img" aria-label={ar ? `رسم توضيحي لـ ${product.name.ar} ببيانات افتراضية` : `${product.name.en} workflow illustration with fictional data`}>
      <div className="product-screen__bar"><span className="product-screen__dots" aria-hidden="true"><i /><i /><i /></span><span className="product-screen__title">{product.name[locale]}</span><span className="product-screen__preview">{ar ? "نموذج توضيحي" : "Illustrative preview"}</span></div>
      <div className="product-screen__body">
        <div className="product-screen__side" aria-hidden="true"><span className="product-screen__brand"><svg viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" focusable="false"><circle cx="8" cy="3.5" r="1.8" /><rect x="6.2" y="8" width="3.6" height="10.3" rx="1" /></svg></span><Layers3 /><BarChart3 /><Workflow /><ClipboardCheck /></div>
        <div className="product-screen__main">
          <div className="product-screen__heading"><strong>{ar ? "نظرة عامة" : "Overview"}</strong><span>{ar ? "بيانات افتراضية" : "Sample data"}</span></div>
          <div className="product-screen__metrics">
            <div><span>{donation ? (ar ? "تبرعات نموذجية" : "Example donations") : (ar ? "سجلات نموذجية" : "Example records")}</span><strong>{donation ? "12,450" : "24"}</strong><small>{donation ? "AED" : (ar ? "هذا الأسبوع" : "This week")}</small></div>
            <div><span>{ar ? "قيد المراجعة" : "In review"}</span><strong>3</strong><small>{ar ? "متابعة الفريق" : "Team follow-up"}</small></div>
          </div>
          <div className="product-screen__chart" aria-hidden="true"><svg viewBox="0 0 440 94" fill="none"><path d="M0 75H440M0 45H440M0 15H440" stroke="#e5eaf2"/><path d="M0 83L48 64L98 72L146 37L196 48L246 22L292 31L340 13L390 23L440 5V94H0Z" fill="#eff6ff"/><path d="M0 83L48 64L98 72L146 37L196 48L246 22L292 31L340 13L390 23L440 5" stroke="#2563eb" strokeWidth="3"/></svg></div>
          <div className="product-screen__rows">{product.demo.map((name, index) => <div key={name}><span>{name}</span><span data-state={index === 1 ? "review" : "ready"}>{index === 1 ? (ar ? "مراجعة" : "Review") : <><Check size={12}/>{ar ? "جاهز" : "Ready"}</>}</span></div>)}</div>
        </div>
      </div>
    </div>
    <figcaption>{ar ? "رسم توضيحي ببيانات افتراضية بالكامل، وليس سجلات عملاء أو نتائج فعلية." : "Illustrative workflow with entirely fictional data. Not customer records or actual results."}</figcaption>
  </figure>;
}

export function ProductPage({ id, locale }: { id: string; locale: Locale }) {
  const product = getProductPage(id, locale);
  if (!product) notFound();
  const ar = locale === "ar";
  const home = ar ? "/ar/" : "/";
  const alternate = productPath(id, ar ? "en" : "ar");
  const url = canonicalUrl(productPath(id, locale));
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: SITE_NAME, url: canonicalUrl() },
    { "@type": "WebPage", "@id": `${url}#webpage`, url, name: product.title, description: product.description[locale], inLanguage: locale,
      isPartOf: { "@id": `${SITE_URL}/#website` }, mainEntity: { "@id": `${url}#service` }, breadcrumb: { "@id": `${url}#breadcrumb` } },
    { "@type": "Service", "@id": `${url}#service`, url, name: product.name[locale], description: product.description[locale], serviceType: product.category[locale], provider: { "@id": `${SITE_URL}/#organization` }, areaServed: ["United Arab Emirates", "Saudi Arabia", "Egypt"] },
    { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [
      { "@type": "ListItem", position: 1, name: ar ? "الرئيسية" : "Home", item: canonicalUrl(home) },
      { "@type": "ListItem", position: 2, name: product.name[locale], item: url },
    ] },
    { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: product.faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) },
  ] };
  const icons = [Layers3, Workflow, ClipboardCheck, BarChart3];
  return <div className="designer-landing secondary-page product-page" data-lang={locale} dir={ar ? "rtl" : "ltr"}>
    <JsonLd data={schema} />
    <MarketingHeader locale={locale} alternateHref={alternate} />
    <main id="main-content">
      <section className="product-hero">
        <div className="product-shell">
          <nav className="product-breadcrumb" aria-label={ar ? "مسار الصفحة" : "Breadcrumb"}><Link href={home}>{ar ? "الرئيسية" : "Home"}</Link><span aria-hidden="true">/</span><span aria-current="page">{product.name[locale]}</span></nav>
          <div className="product-hero__grid">
            <div className="product-hero__copy"><p className="product-category">{product.category[locale]}</p><h1>{product.headline}</h1><p className="product-lede">{product.intro}</p><div className="product-actions"><a className="product-cta" href="#demo">{ar ? "احجز عرضاً" : "Book a demo"}<ArrowUpRight size={18} aria-hidden="true"/></a><a className="product-secondary" href="#capabilities">{ar ? "استكشف الإمكانات" : "Explore capabilities"}<ArrowDown size={16} aria-hidden="true"/></a></div></div>
            <ProductIllustration product={product} locale={locale} />
          </div>
        </div>
      </section>
      <section className="product-section" id="capabilities"><div className="product-shell">
        <div className="product-section__intro"><h2>{ar ? "مصمم لطريقة عمل فريقك." : "Built around your team's work."}</h2><div><p>{product.description[locale]}</p><p>{product.audience}</p></div></div>
        <div className="product-features" style={{ "--feature-count": product.features.length } as React.CSSProperties}>{product.features.map(([title, body], index) => { const Icon = icons[index % icons.length]; return <article key={title}><Icon aria-hidden="true" size={24}/><h3>{title}</h3><p>{body}</p></article>; })}</div>
      </div></section>
      <section className="product-section product-workflow"><div className="product-shell"><div className="product-section__intro"><h2>{ar ? "من الإعداد إلى العمل اليومي." : "From setup to the working day."}</h2><p>{ar ? "مسار عملي نراجعه مع فريقك حسب احتياجات مؤسستك." : "A practical workflow to review against the way your organisation operates."}</p></div><ol className="product-steps">{product.workflow.map(([title, body], index) => <li key={title}><span aria-hidden="true">0{index + 1}</span><h3>{title}</h3><p>{body}</p></li>)}</ol></div></section>
      <section className="product-section"><div className="product-shell product-faq"><div><p className="product-category">{product.name[locale]}</p><h2>{ar ? "أسئلة قبل أن تبدأ." : "Questions before you begin."}</h2></div><div>{product.faqs.map(([question, answer]) => <details key={question}><summary>{question}<Plus className="product-faq__toggle" size={20} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></div></section>
      <section className="product-section product-related"><div className="product-shell"><div className="product-section__intro"><h2>{ar ? "يتصل بالصورة الأكبر." : "Part of a connected operation."}</h2><p>{ar ? "استكشف المنتجات المرتبطة وحدّد مع الفريق ما يحتاجه تنفيذك." : "Explore related products and agree the connections your deployment needs."}</p></div><div className="product-related__grid">{product.related.map((relatedId) => { const related = getProductPage(relatedId, locale)!; return <Link href={productPath(relatedId, locale)} key={relatedId}><span>{related.name[locale]}</span><h3>{related.category[locale]}</h3><p>{related.description[locale]}</p><ArrowUpRight aria-hidden="true" size={22}/></Link>; })}</div><Link className="product-all" href={`${home}#ecosystem`}>{ar ? "استعرض جميع منتجات إنوفاتك" : "Explore all Innovatek products"}<ArrowUpRight size={18} aria-hidden="true"/></Link></div></section>
      <ContactSection locale={locale} />
    </main>
    <MarketingFooter locale={locale} alternateHref={alternate} />
  </div>;
}
