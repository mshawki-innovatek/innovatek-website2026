"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { HERO, T, TINT, pick, type Lang } from "@/lib/designer/landing-data";
import { LandingBodyEn } from "./landing-body-en";
import { LandingBodyAr } from "./landing-body-ar";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type LandingVals = Record<string, any>;

const TINT_NEUTRAL = { tint: "var(--color-neutral-100)", ink: "var(--color-text-secondary)" };

export function DesignerLanding({ lang }: { lang: Lang }) {
  const router = useRouter();
  const ar = lang === "ar";

  const [navState, setNavState] = useState(false);
  const [tab, setTab] = useState(0);
  const [slide, setSlide] = useState(0);
  const [open, setOpen] = useState(0);
  const [live, setLive] = useState({ d: 142, v: 58, o: 31 });

  // Hero autoplay + live operational counters, as designed.
  useEffect(() => {
    const slides = setInterval(
      () => setSlide((s) => (s + 1) % HERO.length),
      7000,
    );
    const ticks = setInterval(() => {
      setLive((s) => ({
        d: Math.max(138, Math.min(148, s.d + (Math.random() < 0.5 ? -1 : 1))),
        v: Math.max(52, Math.min(71, s.v + (Math.random() < 0.45 ? -1 : 1))),
        o: Math.max(27, Math.min(35, s.o + (Math.random() < 0.5 ? -1 : 1))),
      }));
    }, 2800);
    return () => {
      clearInterval(slides);
      clearInterval(ticks);
    };
  }, []);

  // Scroll reveal, as designed.
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!nodes.length || !("IntersectionObserver" in window)) return;
    nodes.forEach((n) => {
      const el = n as HTMLElement;
      el.style.opacity = "0";
      el.style.transform = "translateY(16px)";
      el.style.transition = "opacity 620ms ease, transform 620ms ease";
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          (e.target as HTMLElement).style.opacity = "1";
          (e.target as HTMLElement).style.transform = "none";
          io.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [lang]);

  // Inline hover styles from the design export.
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    document.querySelectorAll<HTMLElement>("[data-hover]").forEach((el) => {
      const decls = el.getAttribute("data-hover");
      if (!decls) return;
      const apply = () => {
        decls.split(";").forEach((d) => {
          const [k, ...rest] = d.split(":");
          if (k && rest.length) el.style.setProperty(k.trim(), rest.join(":").trim());
        });
      };
      const reset = () => {
        decls.split(";").forEach((d) => {
          const k = d.split(":")[0];
          if (k) el.style.removeProperty(k.trim());
        });
      };
      el.addEventListener("mouseenter", apply);
      el.addEventListener("mouseleave", reset);
      el.addEventListener("focus", apply);
      el.addEventListener("blur", reset);
      cleanups.push(() => {
        el.removeEventListener("mouseenter", apply);
        el.removeEventListener("mouseleave", reset);
        el.removeEventListener("focus", apply);
        el.removeEventListener("blur", reset);
      });
    });
    return () => cleanups.forEach((fn) => fn());
  }, [lang]);

  const vals = useMemo<LandingVals>(() => {
    const p = T.panels[tab];
    const panelNav = ar ? p.navAr : p.nav;

    const faqs = T.faqs.map((f, i) => {
      const c = ar ? f.ar : f.en;
      return {
        question: c[0],
        answer: c[1],
        display: open === i ? "block" : "none",
        rotate: open === i ? "rotate(180deg)" : "rotate(0deg)",
      };
    });

    const v: LandingVals = {
      lang,
      dir: ar ? "rtl" : "ltr",
      showCaseStudy: true,
      toggleNav: () => setNavState((s: boolean) => !s),
      closeNav: () => setNavState(false),
      toggleLang: () => router.push(ar ? "/" : "/ar"),
      navOpen: navState ? "1" : "0",
      navBarTop: navState ? "translateY(6px) rotate(45deg)" : "none",
      navBarMid: navState ? 0 : 1,
      navBarBot: navState ? "translateY(-6px) rotate(-45deg)" : "none",

      heroEyebrow: pick(HERO[slide].eyebrow, lang),
      heroTitle: pick(HERO[slide].title, lang),
      heroBody: pick(HERO[slide].body, lang),
      heroInputPlaceholder: ar ? "بريد العمل" : "Your work email",
      heroPill: [
        ar ? `${live.d} جهاز متصل الآن` : `${live.d} devices online now`,
        ar ? "انخفاض زمن الإصلاح 38%" : "MTTR down 38%",
        ar ? "متوسط زمن الدخول 24 ثانية" : "24s average check-in",
        ar ? "رضا العملاء 4.8 / 5" : "CSAT 4.8 / 5",
      ][slide],
      heroTabs: HERO.map((h, i) => ({
        label: pick(h.tab, lang),
        ink: slide === i ? "#fff" : "rgba(255,255,255,0.62)",
        dot: slide === i ? "#fff" : "rgba(255,255,255,0.3)",
        line: slide === i ? 1 : 0,
      })),
      heroPrev: () => setSlide((s) => (s + HERO.length - 1) % HERO.length),
      heroNext: () => setSlide((s) => (s + 1) % HERO.length),
      setSlide: (i: number) => setSlide(i),

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

      mockUrl: p.url,
      mockTitle: pick(p.title, lang),
      mockStamp: pick(p.stamp, lang),
      mockNav: panelNav.map((label, i) => ({
        label,
        bg: i === 0 ? "rgba(255,255,255,0.1)" : "transparent",
        ink: i === 0 ? "#fff" : "rgba(255,255,255,0.55)",
        dot: i === 0 ? "var(--accent)" : "rgba(255,255,255,0.28)",
      })),
      mockStats: p.stats.map((s) => ({ label: pick(s.label, lang), value: s.value, ink: s.ink })),
      mockCols: pick(p.cols, lang),
      mockRows: p.rows.map((r) => ({
        a: ar ? r.aAr : r.a,
        b: pick(r.b, lang),
        c: pick(r.c, lang),
        d: pick(r.d, lang),
        ...TINT[r.s as keyof typeof TINT],
      })),
      panelGroup: pick(p.group, lang),
      panelTagline: pick(p.tagline, lang),
      panelReplaces: pick(p.replaces, lang),
      panelBuyer: pick(p.buyer, lang),
      panelTitle: pick(p.panelTitle, lang),
      panelBody: pick(p.panelBody, lang),
      panelPoints: pick(p.points, lang),

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
      toggleFaq: (i: number) => setOpen((s) => (s === i ? -1 : i)),

      setTab: (i: number) => setTab(i),

      // Demo form: opens a prefilled email, nothing is sent to a server.
      submitDemo: () => {
        const get = (id: string) =>
          (document.getElementById(id) as HTMLInputElement | null)?.value?.trim() ?? "";
        const name = get("demo-name");
        const email = get("demo-email");
        const org = get("demo-org");
        const subject = ar ? `طلب عرض توضيحي من ${org}` : `Demo request from ${org}`;
        const body = ar
          ? `الاسم: ${name}\nالبريد: ${email}\nالجهة: ${org}`
          : `Name: ${name}\nEmail: ${email}\nOrganisation: ${org}`;
        window.location.href = `mailto:hello@innovatek.ae?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      },
    };

    const slideVals = Object.fromEntries(
      HERO.flatMap((_, i) => {
        const on = slide === i;
        return [
          [`h${i}op`, on ? 1 : 0],
          [`h${i}tr`, on ? "translateY(0) scale(1)" : "translateY(14px) scale(0.985)"],
          [`h${i}pe`, on ? "auto" : "none"],
        ];
      }),
    );
    const tabVals = Object.fromEntries(
      [0, 1, 2, 3].flatMap((i) => {
        const on = tab === i;
        return [
          [`tabBg${i}`, on ? "var(--color-neutral-950)" : "var(--color-background-primary)"],
          [`tabInk${i}`, on ? "#fff" : "var(--color-text-secondary)"],
          [`tabBorder${i}`, on ? "var(--color-neutral-950)" : "var(--color-border-subtle)"],
        ];
      }),
    );

    return { ...v, ...slideVals, ...tabVals };
  }, [ar, lang, live, navState, open, router, slide, tab]);

  return lang === "ar" ? <LandingBodyAr v={vals} /> : <LandingBodyEn v={vals} />;
}
