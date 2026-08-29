"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Globe2, Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import type { HomeCopy, Locale } from "@/lib/content";

type SiteHeaderProps = {
  locale: Locale;
  nav: HomeCopy["nav"];
  alternateHref?: string;
};

export function SiteHeader({ locale, nav, alternateHref }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const prefix = locale === "ar" ? "/ar" : "";

  const links = [
    { label: nav.solutions, href: `${prefix}/solutions` },
    { label: nav.approach, href: `${prefix}/#approach` },
    { label: nav.about, href: `${prefix}/about` },
    { label: nav.contact, href: `${prefix}/contact` },
  ];

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header__shell">
        <BrandLogo href={prefix || "/"} inverse locale={locale} />

        <nav className="site-header__nav" aria-label={locale === "ar" ? "التنقل الرئيسي" : "Primary navigation"}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="site-header__link">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <Link
            href={alternateHref ?? nav.languageHref}
            hrefLang={locale === "ar" ? "en-AE" : "ar-AE"}
            className="site-header__language"
          >
            <Globe2 aria-hidden="true" size={16} />
            <span>{nav.languageLabel}</span>
          </Link>
          <Link href={`${prefix}/contact`} className="button button--small button--primary site-header__cta">
            <span>{nav.cta}</span>
            <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            className="site-header__menu-button"
            aria-label={open ? nav.close : nav.menu}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={open ? "mobile-nav mobile-nav--open" : "mobile-nav"}
        aria-hidden={!open}
      >
        <nav aria-label={locale === "ar" ? "التنقل على الهاتف" : "Mobile navigation"} className="mobile-nav__inner">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <span>{link.label}</span>
              <ArrowUpRight aria-hidden="true" size={18} />
            </Link>
          ))}
          <Link
            href={alternateHref ?? nav.languageHref}
            hrefLang={locale === "ar" ? "en-AE" : "ar-AE"}
            onClick={() => setOpen(false)}
          >
            <span>{nav.languageLabel}</span>
            <Globe2 aria-hidden="true" size={18} />
          </Link>
          <Link
            href={`${prefix}/contact`}
            className="button button--primary mobile-nav__cta"
            onClick={() => setOpen(false)}
          >
            {nav.cta}
          </Link>
        </nav>
      </div>
    </header>
  );
}
