"use client";

import { useCallback, useEffect, useState } from "react";
import type { FormEvent, KeyboardEvent as ReactKeyboardEvent } from "react";
import {
  buildContactMailto,
  ContactEmailTimeoutError,
  describeContactEmailError,
  startContactEmail,
} from "@/lib/contact-email";
import { HERO, T, TINT, pick, type Lang } from "@/lib/designer/landing-data";
import { CONTACT } from "@/lib/site";
import { LandingBodyEn } from "./landing-body-en";
import { LandingBodyAr } from "./landing-body-ar";
import { DesignerMotion } from "./designer-motion";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type LandingVals = Record<string, any>;

type DemoDraft = {
  name: string;
  email: string;
  organization: string;
};

type DemoState = "idle" | "sending" | "sent" | "error" | "timeout";

const EMPTY_DEMO_DRAFT: DemoDraft = {
  name: "",
  email: "",
  organization: "",
};
/** Chapter index labels, in T.panels order. */
const PANEL_TABS = [
  { en: "Donation Hub", ar: "Donation Hub" },
  { en: "Bunyan · CMMS", ar: "Bunyan · الصيانة" },
  { en: "VMS · Visitors", ar: "VMS · الزوار" },
  { en: "Communication Platform", ar: "منصة التواصل" },
] as const;
const TINT_NEUTRAL = {
  tint: "var(--color-neutral-100)",
  ink: "var(--color-text-secondary)",
};

export function DesignerLanding({ lang }: { lang: Lang }) {
  const ar = lang === "ar";

  const [navState, setNavState] = useState(false);
  const [tab, setTab] = useState(0);
  const [slide, setSlide] = useState(0);
  const [open, setOpen] = useState(0);
  const [live, setLive] = useState({ d: 142, v: 58, o: 31 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [heroPaused, setHeroPaused] = useState(false);
  const [documentHidden, setDocumentHidden] = useState(false);
  const [demoDraft, setDemoDraft] = useState<DemoDraft>(EMPTY_DEMO_DRAFT);
  const [demoState, setDemoState] = useState<DemoState>("idle");

  const heroMotionPaused =
    prefersReducedMotion || heroPaused || documentHidden;
  const demoServices = ar ? "طلب عرض توضيحي" : "Demo request";

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(media.matches);
    updatePreference();
    media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const updateVisibility = () => setDocumentHidden(document.hidden);
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () =>
      document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  useEffect(() => {
    if (!navState) return;

    const focusFrame = requestAnimationFrame(() => {
      document
        .getElementById("designer-mobile-nav")
        ?.querySelector<HTMLElement>("a")
        ?.focus();
    });
    const closeAndRestore = () => {
      setNavState(false);
      requestAnimationFrame(() =>
        document.getElementById("designer-menu-button")?.focus(),
      );
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeAndRestore();
    };
    const handleResize = () => {
      if (window.innerWidth >= 901) setNavState(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [navState]);

  // Reset after manual navigation so every selected slide gets a full cycle.
  useEffect(() => {
    if (heroMotionPaused) return;
    const slides = setInterval(
      () => setSlide((current) => (current + 1) % HERO.length),
      7000,
    );
    return () => clearInterval(slides);
  }, [heroMotionPaused, slide]);

  useEffect(() => {
    if (heroMotionPaused) return;
    const ticks = setInterval(() => {
      setLive((current) => ({
        d: Math.max(
          138,
          Math.min(148, current.d + (Math.random() < 0.5 ? -1 : 1)),
        ),
        v: Math.max(
          52,
          Math.min(71, current.v + (Math.random() < 0.45 ? -1 : 1)),
        ),
        o: Math.max(
          27,
          Math.min(35, current.o + (Math.random() < 0.5 ? -1 : 1)),
        ),
      }));
    }, 2800);
    return () => clearInterval(ticks);
  }, [heroMotionPaused]);

  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".designer-landing");
    if (!root) return;
    const blocks = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    // A bare wrapper — a card grid, an eyebrow/heading/lede stack — is only
    // there to group things, so its contents cascade rather than sliding up as
    // one slab. A block that paints its own box rises whole instead, so the box
    // never lands before the content sitting inside it.
    const paintsABox = (element: HTMLElement) => {
      const style = getComputedStyle(element);
      return (
        !/^(transparent|rgba\(0, 0, 0, 0\))$/.test(style.backgroundColor) ||
        style.backgroundImage !== "none" ||
        style.boxShadow !== "none" ||
        parseFloat(style.borderTopWidth) > 0
      );
    };
    const parts = new Map<HTMLElement, HTMLElement[]>(
      blocks.map((block) => {
        const children = Array.from(block.children) as HTMLElement[];
        return [
          block,
          children.length >= 2 && !paintsABox(block) ? children : [block],
        ];
      }),
    );
    const items = Array.from(parts.values()).flat();
    // Timing and travel live in landing.css; this only tags what moves and
    // when. Attributes rather than inline styles, so the [data-hover] handler
    // never snapshots a half-revealed element and pins it at opacity 0.
    const strip = () =>
      items.forEach((element) => {
        delete element.dataset.revealItem;
        element.style.removeProperty("--reveal-delay");
      });

    if (!blocks.length || prefersReducedMotion) {
      strip();
      return strip;
    }
    if (!("IntersectionObserver" in window)) return strip;

    items.forEach((element) => {
      element.dataset.revealItem = "";
    });
    const observer = new IntersectionObserver(
      (entries) => {
        // Blocks that cross the line in the same frame cascade in reading
        // order instead of all landing on the same beat.
        entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
          .forEach((entry, order) => {
            const block = entry.target as HTMLElement;
            observer.unobserve(block);
            parts.get(block)?.forEach((element, step) => {
              element.style.setProperty(
                "--reveal-delay",
                `${Math.min(order * 90 + step * 60, 600)}ms`,
              );
              element.dataset.revealItem = "in";
            });
          });
      },
      // Fires as the block's top edge crosses 88% of the viewport. Keying off a
      // visible fraction instead made tall blocks wait until they were most of
      // the way up the screen, so the movement always ran late.
      { rootMargin: "0px 0px -12% 0px", threshold: 0 },
    );
    blocks.forEach((block) => observer.observe(block));
    return () => {
      observer.disconnect();
      strip();
    };
  }, [lang, prefersReducedMotion]);

  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".designer-landing");
    if (!root) return;
    const cleanups: Array<() => void> = [];
    root.querySelectorAll<HTMLElement>("[data-hover]").forEach((element) => {
      const declarations = element.getAttribute("data-hover");
      if (!declarations) return;
      const base = element.getAttribute("style") ?? "";
      const apply = () => {
        declarations.split(";").forEach((declaration) => {
          const [property, ...value] = declaration.split(":");
          if (property && value.length) {
            element.style.setProperty(
              property.trim(),
              value.join(":").trim(),
            );
          }
        });
      };
      const reset = () => element.setAttribute("style", base);
      element.addEventListener("mouseenter", apply);
      element.addEventListener("mouseleave", reset);
      element.addEventListener("focus", apply);
      element.addEventListener("blur", reset);
      cleanups.push(() => {
        element.removeEventListener("mouseenter", apply);
        element.removeEventListener("mouseleave", reset);
        element.removeEventListener("focus", apply);
        element.removeEventListener("blur", reset);
        reset();
      });
    });
    return () => cleanups.forEach((cleanup) => cleanup());
  }, [lang]);

  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".designer-landing");
    const activeTab = root?.querySelector<HTMLElement>(
      `[data-hero-tab="${slide}"]`,
    );
    const scroller = activeTab?.parentElement;
    if (!activeTab || !scroller || scroller.scrollWidth <= scroller.clientWidth) {
      return;
    }
    const tabRect = activeTab.getBoundingClientRect();
    const scrollerRect = scroller.getBoundingClientRect();
    scroller.scrollBy({
      left:
        tabRect.left + tabRect.width / 2 -
        (scrollerRect.left + scrollerRect.width / 2),
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, [prefersReducedMotion, slide]);

  useEffect(() => {
    if (demoState !== "sent") return;
    const reset = setTimeout(() => setDemoState("idle"), 8000);
    return () => clearTimeout(reset);
  }, [demoState]);

  function updateDemoDraft(field: keyof DemoDraft, value: string) {
    setDemoDraft((current) => ({ ...current, [field]: value }));
    if (demoState !== "sending") setDemoState("idle");
  }

  function continueToDemo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    updateDemoDraft("email", String(formData.get("email") ?? "").trim());
    document
      .querySelector<HTMLElement>(".designer-landing #demo")
      ?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
    // preventScroll keeps the focus call from cancelling the smooth scroll above.
    requestAnimationFrame(() =>
      document.getElementById("demo-name")?.focus({ preventScroll: true }),
    );
  }

  function moveHeroTab(
    event: ReactKeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    const nextIndex =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? HERO.length - 1
          : event.key === (ar ? "ArrowLeft" : "ArrowRight")
            ? (index + 1) % HERO.length
            : event.key === (ar ? "ArrowRight" : "ArrowLeft")
              ? (index + HERO.length - 1) % HERO.length
              : null;

    if (nextIndex === null) return;
    event.preventDefault();
    setSlide(nextIndex);
    requestAnimationFrame(() =>
      document
        .querySelector<HTMLElement>(`.designer-landing [data-hero-tab="${nextIndex}"]`)
        ?.focus(),
    );
  }

  function movePlatformTab(
    event: ReactKeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    const nextIndex =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? T.panels.length - 1
          : event.key === (ar ? "ArrowLeft" : "ArrowRight")
            ? (index + 1) % T.panels.length
            : event.key === (ar ? "ArrowRight" : "ArrowLeft")
              ? (index + T.panels.length - 1) % T.panels.length
              : null;

    if (nextIndex === null) return;
    event.preventDefault();
    selectTab(nextIndex);
    requestAnimationFrame(() =>
      document
        .querySelector<HTMLElement>(
          `.designer-landing [data-platform-tab="${nextIndex}"]`,
        )
        ?.focus(),
    );
  }

  async function submitDemo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.dataset.submitting === "true") return;
    const formData = new FormData(form);
    const nextDraft = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      organization: String(formData.get("organization") ?? "").trim(),
    };
    setDemoDraft(nextDraft);

    if (!nextDraft.name || !nextDraft.email || !nextDraft.organization) {
      form.reportValidity();
      return;
    }

    form.dataset.submitting = "true";
    setDemoState("sending");
    let operation: ReturnType<typeof startContactEmail> | undefined;
    try {
      operation = startContactEmail({
        name: nextDraft.name,
        email: nextDraft.email,
        organization: nextDraft.organization,
        services: demoServices,
      });
      void operation.settled.then(() => {
        if (form.isConnected) delete form.dataset.submitting;
      });
      await operation.result;
      setDemoDraft(EMPTY_DEMO_DRAFT);
      setDemoState("sent");
    } catch (error) {
      console.error(
        "[demo form] send failed:",
        describeContactEmailError(error),
      );
      setDemoState(
        error instanceof ContactEmailTimeoutError ? "timeout" : "error",
      );
    } finally {
      if (!operation) delete form.dataset.submitting;
    }
  }

  const selectPanel = useCallback((index: number) => setTab(index), []);

  // Every chapter is on the page, so the index is a jump link: highlight the
  // choice straight away, then scroll to it. Scrolling hands the highlight back
  // to the scroll triggers, which walk it through the chapters on the way.
  const selectTab = useCallback((index: number) => {
    setTab(index);
    document
      .querySelector<HTMLElement>(
        `.designer-landing #solution-chapter-${index}`,
      )
      ?.scrollIntoView({ block: "start" });
  }, []);

  const faqs = T.faqs.map((faq, index) => {
    const copy = ar ? faq.ar : faq.en;
    const expanded = open === index;
    return {
      question: copy[0],
      answer: copy[1],
      expanded,
      display: expanded ? "block" : "none",
      rotate: expanded ? "rotate(180deg)" : "rotate(0deg)",
      buttonId: `designer-faq-button-${index}`,
      panelId: `designer-faq-panel-${index}`,
    };
  });

  const v: LandingVals = {
      lang,
      dir: ar ? "rtl" : "ltr",
      showCaseStudy: true,
      toggleNav: () => setNavState((current) => !current),
      closeNav: () => setNavState(false),
      navOpen: navState ? "1" : "0",
      navExpanded: navState,
      navLabel: ar ? "التنقل الرئيسي" : "Primary navigation",
      mobileNavLabel: ar ? "التنقل على الهاتف" : "Mobile navigation",
      menuLabel: navState
        ? ar
          ? "إغلاق القائمة"
          : "Close menu"
        : ar
          ? "فتح القائمة"
          : "Open menu",
      localeHref: ar ? "/" : "/ar",
      localeHrefLang: ar ? "en-AE" : "ar-AE",
      localeLang: ar ? "en" : "ar",
      navBarTop: navState ? "translateY(6px) rotate(45deg)" : "none",
      navBarMid: navState ? 0 : 1,
      navBarBot: navState ? "translateY(-6px) rotate(-45deg)" : "none",

      heroEyebrow: pick(HERO[slide].eyebrow, lang),
      heroTitle: pick(HERO[slide].title, lang),
      heroBody: pick(HERO[slide].body, lang),
      heroInputPlaceholder: ar ? "بريد العمل" : "Your work email",
      heroEmail: demoDraft.email,
      updateHeroEmail: (value: string) => updateDemoDraft("email", value),
      continueToDemo,
      pauseHero: () => setHeroPaused(true),
      resumeHero: () => setHeroPaused(false),
      resumeHeroFocus: (event: any) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setHeroPaused(false);
        }
      },
      heroMotionState: heroMotionPaused ? "paused" : "running",
      heroPill: [
        ar ? `${live.d} جهاز متصل الآن` : `${live.d} devices online now`,
        ar ? "انخفاض زمن الإصلاح 38%" : "MTTR down 38%",
        ar ? "متوسط زمن الدخول 24 ثانية" : "24s average check-in",
        ar ? "رضا العملاء 4.8 / 5" : "CSAT 4.8 / 5",
      ][slide],
      heroTabs: HERO.map((hero, index) => ({
        label: pick(hero.tab, lang),
        active: slide === index,
        ink: slide === index ? "#fff" : "rgba(255,255,255,0.62)",
        dot: slide === index ? "#fff" : "rgba(255,255,255,0.3)",
        line: slide === index ? 1 : 0,
      })),
      heroPrev: () =>
        setSlide((current) => (current + HERO.length - 1) % HERO.length),
      heroNext: () => setSlide((current) => (current + 1) % HERO.length),
      setSlide: (index: number) => setSlide(index),
      moveHeroTab,
      movePlatformTab,
      heroPrevLabel: ar ? "الشريحة السابقة" : "Previous slide",
      heroNextLabel: ar ? "الشريحة التالية" : "Next slide",

      heroKioskCaption: ar ? "كشك ديرة · مباشر" : "Deira kiosk · live",
      heroKpiAmount: "84,300",
      heroKpiCurrency: ar ? "درهم" : "AED",
      heroKpiAmountTag: ar ? "اليوم" : "Today",
      heroKpiAmountSub: ar ? "تبرعات مُسجّلة عبر كل القنوات" : "Donations posted across all channels",
      heroKpiKiosksTag: ar ? "الأجهزة" : "Devices",
      heroKpiKiosksSub: ar ? "كشك وجهاز تبرع متصل" : "Kiosks and terminals online",
      heroKpiDonors: "1,208",
      heroKpiDonorsTag: ar ? "هذا الأسبوع" : "This week",
      heroKpiDonorsSub: ar ? "متبرّع فريد عبر 6 مواقع" : "Unique donors across 6 sites",
      heroLabelRaised: ar ? "جُمع هذا الأسبوع" : "Raised this week",
      heroLabelIncoming: ar ? "تبرعات واردة" : "Incoming donations",
      heroFeedA: ar ? "كشك ديرة · نقدي" : "Deira kiosk · cash",
      heroFeedAMeta: ar ? "صندوق الزكاة · 09:12" : "Zakat fund · 09:12",
      heroFeedB: ar ? "تبرع أونلاين · بطاقة" : "Online gift · card",
      heroFeedBMeta: ar ? "كفالة يتيم · 09:14" : "Orphan sponsorship · 09:14",
      heroPillKiosks: ar ? `${live.d} جهازاً متصلاً` : `${live.d} devices online`,

      heroRiskTag: ar ? "خطر مرتفع" : "High risk",
      heroAssetName: ar ? "مبرّد 02 — البرج الشمالي" : "Chiller 02 — North tower",
      heroAssetNote: ar ? "يُتوقع عطل خلال 9 أيام من ارتفاع الاهتزاز والضغط." : "Failure predicted in 9 days from vibration and pressure drift.",
      heroAutoWO: ar ? "أُنشئ أمر عمل وقائي تلقائياً — الخميس 08:00" : "Preventive work order created — Thu 08:00",
      heroLabelWorkOrders: ar ? "أوامر العمل" : "Work orders",
      heroWorkOrders: [
        { id: "#4182", title: ar ? "تسرب مياه — المخزن" : "Water leak — Store room", status: ar ? "متأخر" : "Overdue", ...TINT.bad },
        { id: "#4186", title: ar ? "فحص مصعد ربع سنوي" : "Lift quarterly inspection", status: ar ? "خلال ساعتين" : "Due 2h", ...TINT.warn },
        { id: "#4190", title: ar ? "استبدال فلاتر التكييف" : "AHU filter replacement", status: ar ? "في الموعد" : "On track", ...TINT_NEUTRAL },
      ],
      heroPillMttr: ar ? "انخفاض زمن الإصلاح 38%" : "MTTR down 38%",

      heroVisitorName: ar ? "سارة الحمادي" : "Sara Al Hammadi",
      heroVisitorMeta: ar ? "بوابة 03 · دعوة مسبقة · 09:41" : "Gate 03 · pre-invited · 09:41",
      heroVisitorStatus: ar ? "دخل" : "Checked in",
      heroLabelVisitsToday: ar ? "زيارات اليوم" : "Visits today",
      heroLabelCheckin: ar ? "متوسط زمن الدخول" : "Avg check-in",
      heroPillGate: ar ? "VMS · بوابة مباشرة" : "VMS · live gate",

      heroInboxCount: ar ? `${live.v} رسالة في الطابور` : `${live.v} in queue`,
      heroThreads: [
        { icon: "ChatChatBold", name: ar ? "محمد ع." : "Mohammed A.", tag: ar ? "أجاب الذكاء" : "AI replied", msg: ar ? "«أين إيصال تبرعي؟» — أُرسل الإيصال تلقائياً." : "“Where is my donation receipt?” — receipt sent automatically.", time: "09:12", ...TINT.info },
        { icon: "MailMailBold", name: ar ? "ليلى ف." : "Layla F.", tag: ar ? "أجاب الذكاء" : "AI replied", msg: ar ? "«ما مواعيد الاستقبال؟» — أُجيبت من قاعدة المعرفة." : "“What are reception hours?” — answered from knowledge base.", time: "09:20", ...TINT.info },
        { icon: "CallingCallingBold", name: ar ? "عمر ك." : "Omar K.", tag: ar ? "أُحيل للمرافق" : "To Facilities", msg: ar ? "«المصعد متوقف في المبنى ب» — أمر عمل #4191." : "“Lift stuck in Building B” — work order #4191.", time: "09:26", ...TINT_NEUTRAL },
      ],
      heroDeflection: ar ? "من الرسائل تُحل دون تدخل موظف" : "of messages resolved without an agent",
      heroPillCsat: ar ? "رضا العملاء 4.8 / 5" : "CSAT 4.8 / 5",

      liveDevices: live.d,
      liveVisits: live.v,
      liveOpen: live.o,
      feed: [
        { icon: "FinanceFinanceBold", title: ar ? "تبرع بـ 250 درهماً — كشك ديرة" : "AED 250 donation — Deira kiosk", meta: ar ? "صندوق الزكاة · 09:12" : "Zakat fund · 09:12", status: ar ? "مُسجّل" : "Posted", ...TINT.ok },
        { icon: "DocEditDocEditBold", title: ar ? "تسرب مياه — المخزن مُصعّد" : "Water leak — Store room escalated", meta: ar ? "مستوى الخدمة متأخر 4 ساعات" : "SLA overdue by 4h", status: ar ? "متأخر" : "Overdue", ...TINT.bad },
        { icon: "CallingCallingBold", title: ar ? "أجاب الذكاء الاصطناعي على 34 رسالة" : "AI answered 34 WhatsApp messages", meta: ar ? "منصة التواصل · تلقائي" : "Communication Platform · auto", status: ar ? "مُغلقة" : "Resolved", ...TINT.info },
      ],

      panels: T.panels.map((panel, index) => {
        const active = tab === index;
        return {
          tab: PANEL_TABS[index][lang],
          tabId: `solution-tab-${index}`,
          chapterId: `solution-chapter-${index}`,
          active,
          tabBg: active
            ? "var(--color-neutral-950)"
            : "var(--color-background-primary)",
          tabInk: active ? "#fff" : "var(--color-text-secondary)",
          tabBorder: active
            ? "var(--color-neutral-950)"
            : "var(--color-border-subtle)",
          url: panel.url,
          title: pick(panel.title, lang),
          stamp: pick(panel.stamp, lang),
          nav: (ar ? panel.navAr : panel.nav).map((label, i) => ({
            label,
            bg: i === 0 ? "rgba(255,255,255,0.1)" : "transparent",
            ink: i === 0 ? "#fff" : "rgba(255,255,255,0.55)",
            dot: i === 0 ? "var(--accent)" : "rgba(255,255,255,0.28)",
          })),
          stats: panel.stats.map((s) => ({
            label: pick(s.label, lang),
            value: s.value,
            ink: s.ink,
          })),
          cols: pick(panel.cols, lang),
          rows: panel.rows.map((r) => ({
            a: ar ? r.aAr : r.a,
            b: pick(r.b, lang),
            c: pick(r.c, lang),
            d: pick(r.d, lang),
            ...TINT[r.s as keyof typeof TINT],
          })),
          group: pick(panel.group, lang),
          tagline: pick(panel.tagline, lang),
          replaces: pick(panel.replaces, lang),
          heading: pick(panel.panelTitle, lang),
          body: pick(panel.panelBody, lang),
          points: pick(panel.points, lang),
        };
      }),

      features: T.features.map((f) => ({ icon: f.icon, title: (ar ? f.ar : f.en)[0], body: (ar ? f.ar : f.en)[1] })),
      compactFeatures: [3, 4, 5].map((i) => {
        const f = T.features[i];
        return { icon: f.icon, title: (ar ? f.ar : f.en)[0], body: (ar ? f.ar : f.en)[1] };
      }),
      auditRows: [
        { icon: "PassPassBold", action: ar ? "منح دخول — بوابة 03" : "Access granted — Gate 03", who: ar ? "خالد المري · الاستقبال" : "Khalid Al Marri · Reception", time: "09:12", tint: "var(--color-surface-success)", ink: "var(--color-green-600)" },
        { icon: "DocEditDocEditBold", action: ar ? "اعتُمد أمر العمل #4182" : "Work order #4182 approved", who: ar ? "أ. يوسف · المرافق" : "A. Yousef · Facilities", time: "10:48", tint: "var(--color-surface-brand)", ink: "var(--color-blue-600)" },
        { icon: "MultiUserMultiUserBold", action: ar ? "تغيّرت صلاحية مستخدم" : "User role changed", who: ar ? "مدير النظام · التدقيق" : "System admin · Audit", time: "14:02", tint: "var(--color-surface-warning)", ink: "var(--color-orange-600)" },
      ],
      faqs,
      toggleFaq: (index: number) =>
        setOpen((current) => (current === index ? -1 : index)),

      setTab: selectTab,
      activeTab: tab,
      activeTabId: `solution-tab-${tab}`,

      submitDemo,
      demoDraft,
      updateDemoDraft,
      demoState,
      demoDisabled: demoState === "sending",
      demoFallbackHref: buildContactMailto(
        {
          name: demoDraft.name,
          email: demoDraft.email,
          organization: demoDraft.organization,
          services: demoServices,
        },
        lang,
      ),
      demoFallbackLabel: ar ? "افتح بريدك مباشرة" : "Open direct email",
      demoLabel: (() => {
        if (demoState === "sending") return ar ? "جارٍ الإرسال…" : "Sending…";
        if (demoState === "sent") return ar ? "تم الإرسال" : "Sent";
        if (demoState === "error" || demoState === "timeout") {
          return ar ? "أعد المحاولة" : "Try again";
        }
        return ar ? "احجز عرضاً توضيحياً" : "Book a demo";
      })(),
      demoNoteColor:
        demoState === "sent"
          ? "var(--color-green-600)"
          : demoState === "error" || demoState === "timeout"
            ? "var(--color-red-600)"
            : "var(--color-text-tertiary)",
      demoNote: (() => {
        if (demoState === "sent") {
          return ar
            ? "تم تأكيد استلام طلبك. نرد خلال يوم عمل واحد."
            : "Your request was delivered. We reply within one working day.";
        }
        if (demoState === "timeout") {
          return ar
            ? "لم يصل تأكيد التسليم في الوقت المحدد. لا تكرر الإرسال قبل استخدام البريد المباشر."
            : "Delivery was not confirmed in time. Avoid duplicate submissions and use direct email if needed.";
        }
        if (demoState === "error") {
          return ar
            ? "تعذّر الإرسال. بقيت بياناتك في النموذج لإعادة المحاولة."
            : "The request could not be sent. Your details remain in the form for another try.";
        }
        if (demoState === "sending") {
          return ar ? "جارٍ إرسال طلبك…" : "Sending your request…";
        }
        // Idle: no explanatory hint, just the direct-email action beneath it.
        return "";
      })(),
      contactEmail: CONTACT.email,
      contactEmailHref: CONTACT.emailHref,
      contactPhone: CONTACT.phone,
      contactPhoneHref: CONTACT.phoneHref,
      contactAddress: ar ? CONTACT.address.ar : CONTACT.address.en,
    };

  const slideVals = Object.fromEntries(
    HERO.flatMap((_, index) => {
      const active = slide === index;
      return [
        [`h${index}op`, active ? 1 : 0],
        [
          `h${index}tr`,
          active ? "translateY(0) scale(1)" : "translateY(14px) scale(0.985)",
        ],
        [`h${index}pe`, active ? "auto" : "none"],
        [`h${index}hidden`, !active],
      ];
    }),
  );
  const vals = { ...v, ...slideVals };

  return (
    <>
      <DesignerMotion onPanelChange={selectPanel} />
      {lang === "ar" ? <LandingBodyAr v={vals} /> : <LandingBodyEn v={vals} />}
    </>
  );
}
