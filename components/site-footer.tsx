import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import type { Locale } from "@/lib/content";
import { CONTACT } from "@/lib/site";

type SiteFooterProps = {
  locale: Locale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const ar = locale === "ar";
  const prefix = ar ? "/ar" : "";

  const productLinks = ar
    ? [
        ["Donation Hub", "/ar/solutions/donation-hub"],
        ["بنيان + Twin AI", "/ar/solutions/bunyan-cmms"],
        ["Smart VMS", "/ar/solutions/visitor-management-system"],
        ["منصة التواصل", "/ar/solutions/communication-platform"],
      ]
    : [
        ["Donation Hub", "/solutions/donation-hub"],
        ["Bunyan + Twin AI", "/solutions/bunyan-cmms"],
        ["Smart VMS", "/solutions/visitor-management-system"],
        ["Communication Platform", "/solutions/communication-platform"],
      ];

  return (
    <footer className="site-footer">
      <div className="site-footer__top shell">
        <div className="site-footer__brand">
          <BrandLogo href={prefix || "/"} inverse locale={locale} />
          <p>
            {ar
              ? "منصات تشغيلية ذكية للعطاء والمرافق والزوار وتفاعل العملاء في الإمارات والمنطقة."
              : "AI-native operational platforms for giving, facilities, visitors and customer engagement across the UAE and the region."}
          </p>
        </div>

        <div className="site-footer__column">
          <p className="site-footer__heading">{ar ? "الحلول" : "Solutions"}</p>
          {productLinks.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </div>

        <div className="site-footer__column">
          <p className="site-footer__heading">{ar ? "إنوفاتك" : "Innovatek"}</p>
          <Link href={`${prefix}/about`}>{ar ? "عن الشركة" : "About"}</Link>
          <Link href={`${prefix}/contact`}>{ar ? "تواصل معنا" : "Contact"}</Link>
          <a href={CONTACT.emailHref}>{CONTACT.email}</a>
          <a href={CONTACT.phoneHref}>
            <bdi dir="ltr">{CONTACT.phone}</bdi>
          </a>
          <span>{ar ? CONTACT.address.ar : CONTACT.address.en}</span>
        </div>

        <Link href={`${prefix}/contact`} className="site-footer__action">
          <span>{ar ? "ابدأ بمسار عمل حقيقي" : "Start with one real workflow"}</span>
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>

      <div className="site-footer__bottom shell">
        <span>© {new Date().getFullYear()} Innovatek SWD</span>
        <div>
          <Link href={`${prefix}/privacy`}>{ar ? "الخصوصية" : "Privacy"}</Link>
          <Link href={`${prefix}/terms`}>{ar ? "الشروط" : "Terms"}</Link>
          <Link href={ar ? "/" : "/ar"} hrefLang={ar ? "en-AE" : "ar-AE"}>
            {ar ? "English" : "العربية"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
