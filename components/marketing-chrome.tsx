"use client";
/* eslint-disable @next/next/no-img-element -- reuse approved homepage logo */
import { useEffect, useState } from "react";
import Link from "next/link";
import { Languages } from "lucide-react";
import type { Locale } from "@/lib/content";
import { CONTACT } from "@/lib/site";

type Props = { locale: Locale; alternateHref?: string };
function localeValues(locale: Locale, alternateHref?: string) {
  const ar = locale === "ar";
  return { localeHref: alternateHref ?? (ar ? "/" : "/ar/"), localeHrefLang: ar ? "en-AE" : "ar-AE", localeLang: ar ? "en" : "ar" };
}
export function MarketingHeader({ locale, alternateHref }: Props) {
  const ar = locale === "ar";
  const prefix = ar ? "/ar" : "";
  const [open, setOpen] = useState(false);
  const demoHref = "#demo";
  useEffect(() => {
    if (!open) return;
    const frame = requestAnimationFrame(() => document.querySelector<HTMLElement>("#designer-mobile-nav a")?.focus());
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); document.getElementById("designer-menu-button")?.focus(); }
    };
    const onResize = () => { if (innerWidth >= 901) setOpen(false); };
    document.addEventListener("keydown", onKey); window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(frame); document.removeEventListener("keydown", onKey); window.removeEventListener("resize", onResize); };
  }, [open]);
  const v = { ...localeValues(locale, alternateHref), navLabel: ar ? "التنقل الرئيسي" : "Primary navigation",
    mobileNavLabel: ar ? "التنقل على الهاتف" : "Mobile navigation", navOpen: open ? "1" : "0", navExpanded: open,
    menuLabel: open ? (ar ? "إغلاق القائمة" : "Close menu") : (ar ? "فتح القائمة" : "Open menu"),
    toggleNav: () => setOpen(!open), closeNav: () => setOpen(false),
    navBarTop: open ? "translateY(6px) rotate(45deg)" : "none", navBarMid: open ? 0 : 1, navBarBot: open ? "translateY(-6px) rotate(-45deg)" : "none" };
  return <>
  <a className="designer-skip-link" href="#main-content">{ar ? "تخطى إلى المحتوى" : "Skip to content"}</a>
  <header  style={{ position: "fixed", top: "0", insetInline: "0", zIndex: "60", backdropFilter: "blur(14px)", background: "rgba(255,255,255,0.86)", borderBottom: "1px solid var(--color-border-subtle)", }}>
    <div  style={{ maxWidth: "1280px", margin: "0 auto", padding: "11px clamp(20px, 4vw, 48px)", display: "flex", alignItems: "center", gap: "32px", minHeight: "67px", }}>
      <Link href={prefix + "/"} aria-label={ar ? "الصفحة الرئيسية لإنوفاتك SWD" : "Innovatek SWD home"}  style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: "0", }}>
        <img src="/assets/designer/9a22adcf.png" alt={ar ? "إنوفاتك SWD" : "Innovatek SWD"} width="1136" height="316"  style={{ height: "34px", width: "auto", display: "block", }} />
      </Link>
      <nav data-desknav="true" aria-label={v.navLabel}  style={{ display: "flex", gap: "28px", marginInlineStart: "auto", alignItems: "center", }}>
        <a href={`${prefix}/#platform`}  style={{ fontSize: "15px", fontWeight: "500", color: "var(--color-text-secondary)", }} data-hover="color: var(--color-text-primary)">{ar ? "الحلول" : "Solutions"}</a>
        <a href={`${prefix}/#ecosystem`}  style={{ fontSize: "15px", fontWeight: "500", color: "var(--color-text-secondary)", }} data-hover="color: var(--color-text-primary)">{ar ? "المنظومة" : "Ecosystem"}</a>
        <a href={`${prefix}/#clients`}  style={{ fontSize: "15px", fontWeight: "500", color: "var(--color-text-secondary)", }} data-hover="color: var(--color-text-primary)">{ar ? "عملاؤنا" : "Clients"}</a>
        <a href={`${prefix}/#about`}  style={{ fontSize: "15px", fontWeight: "500", color: "var(--color-text-secondary)", }} data-hover="color: var(--color-text-primary)">{ar ? "من نحن" : "About"}</a>
      </nav>
      <div  style={{ display: "flex", alignItems: "center", gap: "10px", marginInlineStart: "auto", }}>
        <button id="designer-menu-button" type="button" data-burger="true" onClick={() => v.toggleNav()} aria-label={v.menuLabel} aria-expanded={v.navExpanded} aria-controls="designer-mobile-nav"  style={{ width: "44px", height: "44px", borderRadius: "999px", placeItems: "center", border: "1px solid var(--color-border-subtle)", background: "var(--color-background-primary)", cursor: "pointer", flexShrink: "0", }}>
          <span aria-hidden="true"  style={{ display: "grid", gap: "4px", width: "17px", }}>
            <span  style={{ height: "2px", borderRadius: "2px", background: "var(--color-text-primary)", transition: "transform 220ms ease", transform: v.navBarTop, }}></span>
            <span  style={{ height: "2px", borderRadius: "2px", background: "var(--color-text-primary)", transition: "opacity 180ms ease", opacity: v.navBarMid, }}></span>
            <span  style={{ height: "2px", borderRadius: "2px", background: "var(--color-text-primary)", transition: "transform 220ms ease", transform: v.navBarBot, }}></span>
          </span>
        </button>
        <a href={v.localeHref} hrefLang={v.localeHrefLang} lang={v.localeLang}  style={{ display: "flex", alignItems: "center", gap: "7px", minHeight: "44px", paddingInline: "14px", borderRadius: "999px", border: "1px solid var(--color-border-subtle)", background: "var(--color-background-primary)", fontFamily: "var(--font-arabic), var(--font-outfit), sans-serif", fontSize: "14px", fontWeight: "600", color: "var(--color-text-secondary)", }} data-hover="border-color: var(--color-neutral-300); color: var(--color-text-primary)">
          <Languages aria-hidden="true" size={16} />
          {ar ? "English" : "العربية"}
        </a>
        <a data-hdr-cta="true" href={demoHref}  style={{ display: "flex", alignItems: "center", minHeight: "44px", paddingInline: "20px", borderRadius: "999px", background: "var(--accent)", color: "#fff", fontSize: "14px", fontWeight: "700", flexShrink: "0", }} data-hover="background: var(--accent-deep); color: #fff">
          {ar ? "احجز عرضاً" : "Book a demo"}
        </a>
      </div>
    </div>

    <nav  id="designer-mobile-nav" data-mobnav="true" data-open={v.navOpen} aria-label={v.mobileNavLabel}  style={{ flexDirection: "column", padding: "6px clamp(20px, 4vw, 48px) 18px", borderTop: "1px solid var(--color-border-subtle)", background: "var(--color-background-primary)", maxHeight: "74vh", overflowY: "auto", }}>
        <a href={`${prefix}/#platform`} onClick={() => v.closeNav()}  style={{ display: "flex", alignItems: "center", minHeight: "48px", fontSize: "16px", fontWeight: "600", color: "var(--color-text-primary)", borderBottom: "1px solid var(--color-border-subtle)", }} data-hover="color: var(--accent)">{ar ? "الحلول" : "Solutions"}</a>
        <a href={`${prefix}/#ecosystem`} onClick={() => v.closeNav()}  style={{ display: "flex", alignItems: "center", minHeight: "48px", fontSize: "16px", fontWeight: "600", color: "var(--color-text-primary)", borderBottom: "1px solid var(--color-border-subtle)", }} data-hover="color: var(--accent)">{ar ? "المنظومة" : "Ecosystem"}</a>
        <a href={`${prefix}/#clients`} onClick={() => v.closeNav()}  style={{ display: "flex", alignItems: "center", minHeight: "48px", fontSize: "16px", fontWeight: "600", color: "var(--color-text-primary)", borderBottom: "1px solid var(--color-border-subtle)", }} data-hover="color: var(--accent)">{ar ? "عملاؤنا" : "Clients"}</a>
        <a href={`${prefix}/#about`} onClick={() => v.closeNav()}  style={{ display: "flex", alignItems: "center", minHeight: "48px", fontSize: "16px", fontWeight: "600", color: "var(--color-text-primary)", borderBottom: "1px solid var(--color-border-subtle)", }} data-hover="color: var(--accent)">{ar ? "من نحن" : "About"}</a>
      <a href={demoHref} onClick={() => v.closeNav()}  style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "50px", marginTop: "16px", borderRadius: "999px", background: "var(--accent)", color: "#fff", fontSize: "15px", fontWeight: "700", }} data-hover="background: var(--accent-deep); color: #fff">
        {ar ? "احجز عرضاً" : "Book a demo"}
      </a>
    </nav>
  </header>

</>;
}

export function MarketingFooter({ locale, alternateHref }: Props) {
  const ar = locale === "ar";
  const prefix = ar ? "/ar" : "";
  const v = { ...localeValues(locale, alternateHref), contactEmail: CONTACT.email, contactEmailHref: CONTACT.emailHref, contactPhone: CONTACT.phone, contactPhoneHref: CONTACT.phoneHref };
  return (
  <footer  style={{ borderTop: "1px solid var(--color-border-subtle)", padding: "clamp(44px, 5vw, 64px) clamp(20px, 4vw, 48px) 28px", }}>
    <div  style={{ maxWidth: "1280px", margin: "0 auto", }}>
      <div data-stack="true"  style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.1fr)", gap: "clamp(24px, 3vw, 56px)", paddingBottom: "36px", }}>
        <div>
          <div  style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px", }}>
            <img src="/assets/designer/9a22adcf.png" alt={ar ? "إنوفاتك SWD" : "Innovatek SWD"} width="1136" height="316"  style={{ height: "32px", width: "auto", display: "block", }} />
          </div>
          <p  style={{ margin: "0", fontSize: "14px", lineHeight: "1.65", color: "var(--color-text-secondary)", maxWidth: "34ch", }}>
            {ar ? "تكنولوجيا من أجل الأثر — منصات ذكاء أصلية للعطاء وإدارة المرافق وتفاعل العملاء في الإمارات والسعودية ومصر والشرق الأوسط." : "Technology for Impact — AI-native platforms for giving, facility management and customer engagement across the UAE, KSA, Egypt and MENA."}

          </p>
        </div>
        <div>
          <h2  style={{ margin: "0 0 14px", fontSize: "13px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-tertiary)", }}>{ar ? "تواصل معنا" : "Contact"}</h2>
          <div  style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px 28px", }}>
            <a href={v.contactEmailHref} dir="ltr"  style={{ fontSize: "14px", color: "var(--color-text-secondary)", }} data-hover="color: var(--color-text-primary)"><bdi dir="ltr">{v.contactEmail}</bdi></a>
            <a className="designer-phone-row" href={v.contactPhoneHref}  style={{ fontSize: "14px", color: "var(--color-text-secondary)", }} data-hover="color: var(--color-text-primary)"><bdi dir="ltr">{v.contactPhone}</bdi></a>
            <span  style={{ fontSize: "14px", color: "var(--color-text-secondary)", }}>{ar ? "الخليج التجاري، دبي، الإمارات" : "Business Bay, Dubai, UAE"}</span>
          </div>
        </div>
      </div>
      <div  style={{ borderTop: "1px solid var(--color-border-subtle)", paddingTop: "22px", display: "flex", flexWrap: "wrap", gap: "16px 28px", alignItems: "center", justifyContent: "space-between", }}>
        <div  style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px 24px", }}>
          <span  style={{ fontSize: "13px", color: "var(--color-text-tertiary)", }}>
            © {new Date().getFullYear()} Innovatek SWD. {ar ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </span>
          <Link href={`${prefix}/about/`} style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>{ar ? "عن إنوفاتك" : "About Innovatek"}</Link>
          <Link href={`${prefix}/contact/`} style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>{ar ? "تواصل معنا" : "Contact"}</Link>
          <Link href={`${prefix}/terms/`}  style={{ fontSize: "13px", color: "var(--color-text-tertiary)", }} data-hover="color: var(--color-text-primary)">{ar ? "الشروط والأحكام" : "Terms & Conditions"}</Link>
          <Link href={`${prefix}/privacy/`}  style={{ fontSize: "13px", color: "var(--color-text-tertiary)", }} data-hover="color: var(--color-text-primary)">{ar ? "سياسة الخصوصية" : "Privacy Policy"}</Link>
        </div>
        <a href={v.localeHref} hrefLang={v.localeHrefLang} lang={v.localeLang}  style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", paddingInline: "14px", borderRadius: "999px", border: "1px solid var(--color-border-subtle)", background: "transparent", fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "13px", fontWeight: "600", color: "var(--color-text-secondary)" }} data-hover="color: var(--color-text-primary)">
          <Languages aria-hidden="true" size={14} />
          {ar ? "English" : "العربية"}
        </a>
      </div>
    </div>
  </footer>);
}
