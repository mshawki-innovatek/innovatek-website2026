"use client";

/* eslint-disable @typescript-eslint/no-explicit-any, @next/next/no-img-element -- generated from the approved design export */
import { DemoSection } from "@/components/contact-section";
import { MarketingHeader, MarketingFooter } from "@/components/marketing-chrome";
import { Fragment } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, BadgeCheck, Building2, CircleCheck, Coins, FilePen, KeyRound, Layers, LayoutDashboard, Mail, MessageCircle, MonitorSmartphone, PhoneCall, Sparkles } from "lucide-react";
import { ProductEcosystemGroup } from "@/components/product-ecosystem-group";
import type { LandingVals } from "./designer-landing";

// Index order matches T.panels.
const CHAPTER_ICONS = [Coins, FilePen, KeyRound, PhoneCall];

export function LandingBodyEn({ v }: { v: LandingVals }) {
  return (
    <>



<div  className="designer-landing" data-lang={v.lang} data-motion={v.heroMotionState} dir={v.dir}  style={{ fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", color: "var(--color-text-primary)", background: "var(--color-background-primary)", }}>

  <MarketingHeader locale="en" />

  <main id="main-content">
  <section id="top" aria-labelledby="designer-hero-title"  style={{ padding: "67px 0 0", background: "var(--color-neutral-950)", }}>
    <div  style={{ position: "relative", overflow: "hidden", background: "var(--color-neutral-950)", }}>
      <div  style={{ position: "absolute", insetInlineEnd: "-180px", top: "-240px", width: "720px", height: "720px", borderRadius: "50%", background: "radial-gradient(circle, rgba(66,133,244,0.5) 0%, rgba(66,133,244,0.14) 46%, rgba(66,133,244,0) 70%)", pointerEvents: "none", }}></div>
      <div  style={{ position: "absolute", insetInlineStart: "-160px", bottom: "-300px", width: "620px", height: "620px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0) 68%)", pointerEvents: "none", }}></div>
      <div  style={{ position: "absolute", insetInlineStart: "34%", top: "-120px", width: "420px", height: "420px", borderRadius: "50%", background: "radial-gradient(circle, rgba(31,78,214,0.34) 0%, rgba(31,78,214,0) 70%)", pointerEvents: "none", }}></div>

      <div data-hero-grid="true"  style={{ position: "relative", maxWidth: "1440px", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "clamp(28px, 4vw, 56px)", alignItems: "center", padding: "clamp(40px, 5vw, 76px) clamp(24px, 4vw, 64px) clamp(32px, 4vw, 56px)", }}>
        <div  style={{ minWidth: "0", }}>
          <div  style={{ display: "inline-flex", alignItems: "center", gap: "9px", padding: "6px 15px 6px 11px", borderRadius: "999px", background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.24)", marginBottom: "24px", }}>
            <span  style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--color-green-400)", flexShrink: "0", }}></span>
            <span  style={{ fontSize: "13px", fontWeight: "600", color: "rgba(255,255,255,0.92)", }}>{v.heroEyebrow}</span>
          </div>

          <h1 id="designer-hero-title" data-display="true"  style={{ margin: "0 0 20px", fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontWeight: "800", fontSize: "clamp(36px, 4.2vw, 62px)", lineHeight: "1.05", letterSpacing: "-0.035em", color: "#fff", textWrap: "balance", minHeight: "3.15em", }} data-hero-title="true">{v.heroTitle}</h1>

          <p  style={{ margin: "0 0 30px", fontSize: "clamp(16px, 1.25vw, 19px)", lineHeight: "1.6", color: "rgba(255,255,255,0.82)", maxWidth: "52ch", textWrap: "pretty", minHeight: "4.8em", }} data-hero-body="true">{v.heroBody}</p>

          <form className="designer-hero-email" onSubmit={v.continueToDemo}>
            <input id="hero-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder={v.heroInputPlaceholder} dir="ltr" value={v.heroEmail} onChange={(event) => v.updateHeroEmail(event.target.value)}  style={{ flex: "1", minWidth: "160px", height: "44px", border: "0", outline: "none", background: "transparent", borderRadius: "999px", paddingInline: "16px", fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "15px", color: "#fff", textAlign: "start", }} />
            <button type="submit"  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "44px", paddingInline: "24px", borderRadius: "999px", background: "#fff", color: "var(--color-blue-600)", fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "15px", fontWeight: "700", flexShrink: "0", cursor: "pointer", }} data-hover="background: var(--color-blue-50); color: var(--color-blue-700)">
              Book a demo
            </button>
          </form>

          

        </div>

        <div data-hero-stage="true" onMouseEnter={() => v.pauseHero()} onMouseLeave={() => v.resumeHero()} onFocus={() => v.pauseHero()} onBlur={v.resumeHeroFocus}  style={{ position: "relative", minWidth: "0", minHeight: "clamp(452px, 36vw, 528px)", }}>

          <div id="hero-slide-0" role="tabpanel" aria-labelledby="hero-tab-0" data-hero-slide="0" data-slide-active={v.h0op} aria-hidden={v.h0hidden}  style={{ position: "absolute", inset: "0", transition: "opacity 620ms ease, transform 620ms ease", opacity: v.h0op, transform: v.h0tr, pointerEvents: v.h0pe, }}>
            <div  style={{ position: "absolute", inset: "0", }}>
              <div data-kiosk-photo="true" data-image-frame="hero"  style={{ position: "absolute", insetBlock: "0 46px", insetInline: "0 62px", borderRadius: "20px", overflow: "hidden", background: "var(--color-neutral-800)", boxShadow: "0 28px 64px rgba(0,0,0,0.45)", }}>
                <img src="/assets/designer/6610d1ee.webp" alt="Donors using a Smart Kiosk to give" width="1132" height="759" loading="eager" fetchPriority="high" decoding="async"  style={{ color: "rgba(255,255,255,0.9)", }} />
                <div  style={{ position: "absolute", inset: "0", pointerEvents: "none", background: "linear-gradient(to top, rgba(6,12,26,0.66) 0%, rgba(6,12,26,0) 52%)", }}></div>
                <div  style={{ position: "absolute", bottom: "16px", insetInlineStart: "16px", display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 12px", borderRadius: "999px", background: "rgba(9,11,16,0.72)", border: "1px solid rgba(255,255,255,0.22)", }}>
                  <span  style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--color-green-400)", }}></span>
                  <span  style={{ fontSize: "11px", fontWeight: "700", color: "#fff", }}>{v.heroKioskCaption}</span>
                </div>
              </div>

              <div data-kiosk-kpis="true"  style={{ position: "absolute", top: "22px", insetInlineEnd: "0", width: "min(186px, 44%)", display: "flex", flexDirection: "column", gap: "10px", }}>
              <div  style={{ borderRadius: "14px", background: "rgba(255,255,255,0.96)", backdropFilter: "blur(10px)", boxShadow: "0 16px 34px rgba(0,0,0,0.38)", padding: "12px 13px", animation: "heroFloat 7s ease-in-out 0s infinite", }}>
                <div  style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "4px", }}>
                  <span  style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--color-green-500)", flexShrink: "0", }}></span>
                  <span  style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-tertiary)", }}>{v.heroKpiAmountTag}</span>
                </div>
                <div  style={{ display: "flex", alignItems: "baseline", gap: "5px", }}>
                  <span dir="ltr"  style={{ fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "21px", fontWeight: "700", letterSpacing: "-0.025em", color: "var(--color-text-primary)", }}>{v.heroKpiAmount}</span>
                  <span  style={{ fontSize: "12px", fontWeight: "600", color: "var(--color-text-tertiary)", }}>{v.heroKpiCurrency}</span>
                </div>
                <div  style={{ fontSize: "11px", lineHeight: "1.35", color: "var(--color-text-secondary)", marginTop: "2px", }}>{v.heroKpiAmountSub}</div>
              </div>
              <div  style={{ borderRadius: "14px", background: "rgba(255,255,255,0.96)", backdropFilter: "blur(10px)", boxShadow: "0 16px 34px rgba(0,0,0,0.38)", padding: "12px 13px", animation: "heroFloat 7s ease-in-out -2.2s infinite", }}>
                <div  style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "4px", }}>
                  <span  style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--color-green-500)", flexShrink: "0", }}></span>
                  <span  style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-tertiary)", }}>{v.heroKpiKiosksTag}</span>
                </div>
                <div dir="ltr"  style={{ fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "21px", fontWeight: "700", letterSpacing: "-0.025em", color: "var(--color-text-primary)", textAlign: "start", }}>{v.liveDevices}</div>
                <div  style={{ fontSize: "11px", lineHeight: "1.35", color: "var(--color-text-secondary)", marginTop: "2px", }}>{v.heroKpiKiosksSub}</div>
              </div>
              <div  style={{ borderRadius: "14px", background: "rgba(255,255,255,0.96)", backdropFilter: "blur(10px)", boxShadow: "0 16px 34px rgba(0,0,0,0.38)", padding: "12px 13px", animation: "heroFloat 7s ease-in-out -4.4s infinite", }}>
                <div  style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "4px", }}>
                  <span  style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--color-green-500)", flexShrink: "0", }}></span>
                  <span  style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-tertiary)", }}>{v.heroKpiDonorsTag}</span>
                </div>
                <div dir="ltr"  style={{ fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "21px", fontWeight: "700", letterSpacing: "-0.025em", color: "var(--color-text-primary)", textAlign: "start", }}>{v.heroKpiDonors}</div>
                <div  style={{ fontSize: "11px", lineHeight: "1.35", color: "var(--color-text-secondary)", marginTop: "2px", }}>{v.heroKpiDonorsSub}</div>
              </div>
              </div>

              <div data-kiosk-ticker="true"  style={{ position: "absolute", bottom: "0", insetInlineStart: "24px", width: "min(316px, 60%)", display: "flex", alignItems: "center", gap: "12px", borderRadius: "16px", background: "rgba(255,255,255,0.96)", backdropFilter: "blur(10px)", boxShadow: "0 18px 40px rgba(0,0,0,0.34)", padding: "12px 14px", }}>
                <span  style={{ width: "30px", height: "30px", borderRadius: "9px", display: "grid", placeItems: "center", flexShrink: "0", background: "var(--color-surface-brand)", color: "var(--color-blue-600)", }}>
                  <Coins aria-hidden="true" size={15} />
                </span>
                <span  style={{ flex: "1", minWidth: "0", }}>
                  <span  style={{ display: "block", fontSize: "12px", fontWeight: "700", color: "var(--color-text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", }}>{v.heroFeedA}</span>
                  <span  style={{ display: "block", fontSize: "10px", color: "var(--color-text-tertiary)", }}>{v.heroFeedAMeta}</span>
                </span>
                <span dir="ltr"  style={{ fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "14px", fontWeight: "700", color: "var(--color-text-primary)", flexShrink: "0", }}>+250</span>
              </div>
            </div>
          </div>

          <div id="hero-slide-1" role="tabpanel" aria-labelledby="hero-tab-1" data-hero-slide="1" data-slide-active={v.h1op} aria-hidden={v.h1hidden}  style={{ position: "absolute", inset: "0", transition: "opacity 620ms ease, transform 620ms ease", opacity: v.h1op, transform: v.h1tr, pointerEvents: v.h1pe, }}>
            <div  style={{ position: "absolute", top: "4%", insetInlineEnd: "0", width: "min(380px, 84%)", borderRadius: "20px", background: "#fff", boxShadow: "0 28px 64px rgba(6,20,58,0.32)", padding: "20px", animation: "heroFloat 7s ease-in-out -1s infinite", }}>
              <div  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px", }}>
                <div  style={{ display: "flex", alignItems: "center", gap: "9px", }}>
                  <span  style={{ width: "26px", height: "26px", borderRadius: "8px", display: "grid", placeItems: "center", background: "var(--color-surface-brand)", color: "var(--color-blue-600)", }}>
                    <Sparkles aria-hidden="true" size={14} />
                  </span>
                  <span  style={{ fontSize: "13px", fontWeight: "700", color: "var(--color-text-primary)", }}>Twin AI</span>
                </div>
                <span  style={{ fontSize: "11px", fontWeight: "700", color: "var(--color-orange-600)", background: "var(--color-surface-warning)", padding: "3px 9px", borderRadius: "999px", }}>{v.heroRiskTag}</span>
              </div>
              <div  style={{ display: "flex", alignItems: "center", gap: "18px", }}>
                <div  style={{ width: "96px", height: "96px", borderRadius: "50%", flexShrink: "0", background: "conic-gradient(var(--color-orange-500) 0turn 0.74turn, var(--color-neutral-100) 0.74turn 1turn)", display: "grid", placeItems: "center", }}>
                  <div  style={{ width: "72px", height: "72px", borderRadius: "50%", background: "#fff", display: "grid", placeItems: "center", }}>
                    <span dir="ltr"  style={{ fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "22px", fontWeight: "700", letterSpacing: "-0.02em", color: "var(--color-text-primary)", }}>74<span  style={{ fontSize: "12px", }}>%</span></span>
                  </div>
                </div>
                <div  style={{ minWidth: "0", }}>
                  <div  style={{ fontSize: "13px", fontWeight: "700", color: "var(--color-text-primary)", marginBottom: "5px", }}>{v.heroAssetName}</div>
                  <div  style={{ fontSize: "11px", lineHeight: "1.45", color: "var(--color-text-secondary)", }}>{v.heroAssetNote}</div>
                </div>
              </div>
              <div  style={{ height: "1px", background: "var(--color-border-subtle)", margin: "16px 0 12px", }}></div>
              <div  style={{ display: "flex", alignItems: "center", gap: "9px", }}>
                <span  style={{ width: "22px", height: "22px", borderRadius: "7px", display: "grid", placeItems: "center", flexShrink: "0", background: "var(--color-neutral-100)", color: "var(--color-text-secondary)", }}>
                  <FilePen aria-hidden="true" size={12} />
                </span>
                <span  style={{ fontSize: "11px", fontWeight: "600", color: "var(--color-text-secondary)", }}>{v.heroAutoWO}</span>
              </div>
            </div>

            <div  style={{ position: "absolute", bottom: "2%", insetInlineStart: "0", width: "min(320px, 80%)", borderRadius: "18px", background: "#fff", boxShadow: "0 16px 38px rgba(6,20,58,0.2)", padding: "15px", animation: "heroFloat 7s ease-in-out -4s infinite", }}>
              <div  style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-tertiary)", marginBottom: "11px", }}>Bunyan · {v.heroLabelWorkOrders}</div>
              <div  style={{ display: "flex", flexDirection: "column", gap: "9px", }}>
                {v.heroWorkOrders.map((wo: any, i: number) => (
<Fragment key={i}>

                  <div  style={{ display: "flex", alignItems: "center", gap: "10px", }}>
                    <span dir="ltr"  style={{ fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "11px", fontWeight: "700", color: "var(--color-text-tertiary)", flexShrink: "0", }}>{wo.id}</span>
                    <span  style={{ flex: "1", minWidth: "0", fontSize: "12px", fontWeight: "600", color: "var(--color-text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", }}>{wo.title}</span>
                    <span  style={{ fontSize: "10px", fontWeight: "700", padding: "3px 8px", borderRadius: "999px", flexShrink: "0", background: wo.tint, color: wo.ink, }}>{wo.status}</span>
                  </div>
                
</Fragment>
))}
              </div>
            </div>
          </div>

          <div id="hero-slide-2" role="tabpanel" aria-labelledby="hero-tab-2" data-hero-slide="2" data-slide-active={v.h2op} aria-hidden={v.h2hidden}  style={{ position: "absolute", inset: "0", transition: "opacity 620ms ease, transform 620ms ease", opacity: v.h2op, transform: v.h2tr, pointerEvents: v.h2pe, }}>
            <div  style={{ position: "absolute", inset: "4% 0 8%", borderRadius: "22px", overflow: "hidden", boxShadow: "0 28px 64px rgba(6,20,58,0.34)", background: "var(--color-neutral-200)", }}>
              <img src="/assets/designer/c9bb67d2.webp" alt="Smart VMS — visitor self check-in kiosk at a UAE facility gate" width="1200" height="805" loading="lazy" decoding="async"  style={{  }} />
              <div  style={{ position: "absolute", inset: "0", pointerEvents: "none", background: "linear-gradient(to top, rgba(6,20,58,0.6) 0%, rgba(6,20,58,0.06) 52%, rgba(6,20,58,0) 74%), linear-gradient(to bottom, rgba(6,20,58,0.34) 0%, rgba(6,20,58,0) 34%)", }}></div>
            </div>

            <div  style={{ position: "absolute", bottom: "0", insetInlineStart: "4%", width: "min(320px, 84%)", borderRadius: "18px", background: "rgba(255,255,255,0.96)", boxShadow: "0 16px 38px rgba(6,20,58,0.2)", padding: "15px", animation: "heroFloat 7s ease-in-out -2s infinite", }}>
              <div  style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px", }}>
                <span  style={{ width: "30px", height: "30px", borderRadius: "9px", display: "grid", placeItems: "center", flexShrink: "0", background: "var(--color-surface-success)", color: "var(--color-green-700)", }}>
                  <KeyRound aria-hidden="true" size={14} />
                </span>
                <span  style={{ flex: "1", minWidth: "0", }}>
                  <span  style={{ display: "block", fontSize: "12px", fontWeight: "700", color: "var(--color-text-primary)", }}>{v.heroVisitorName}</span>
                  <span  style={{ display: "block", fontSize: "10px", color: "var(--color-text-tertiary)", }}>{v.heroVisitorMeta}</span>
                </span>
                <span  style={{ fontSize: "10px", fontWeight: "700", padding: "3px 8px", borderRadius: "999px", background: "var(--color-surface-success)", color: "var(--color-green-700)", flexShrink: "0", }}>{v.heroVisitorStatus}</span>
              </div>
              <div  style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", }}>
                <div  style={{ borderRadius: "12px", background: "var(--color-surface-subtle)", border: "1px solid var(--color-border-subtle)", padding: "10px 11px", }}>
                  <div dir="ltr"  style={{ fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "18px", fontWeight: "700", letterSpacing: "-0.02em", color: "var(--color-text-primary)", textAlign: "start", }}>{v.liveVisits}</div>
                  <div  style={{ fontSize: "10px", color: "var(--color-text-secondary)", marginTop: "1px", }}>{v.heroLabelVisitsToday}</div>
                </div>
                <div  style={{ borderRadius: "12px", background: "var(--color-surface-subtle)", border: "1px solid var(--color-border-subtle)", padding: "10px 11px", }}>
                  <div dir="ltr"  style={{ fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "18px", fontWeight: "700", letterSpacing: "-0.02em", color: "var(--color-text-primary)", textAlign: "start", }}>24s</div>
                  <div  style={{ fontSize: "10px", color: "var(--color-text-secondary)", marginTop: "1px", }}>{v.heroLabelCheckin}</div>
                </div>
              </div>
            </div>
          </div>

          <div id="hero-slide-3" role="tabpanel" aria-labelledby="hero-tab-3" data-slide-flow="true" data-hero-slide="3" data-slide-active={v.h3op} aria-hidden={v.h3hidden}  style={{ position: "absolute", inset: "0", transition: "opacity 620ms ease, transform 620ms ease", opacity: v.h3op, transform: v.h3tr, pointerEvents: v.h3pe, }}>
            <div  style={{ position: "absolute", top: "5%", insetInlineEnd: "0", width: "min(390px, 86%)", borderRadius: "20px", background: "#fff", boxShadow: "0 28px 64px rgba(6,20,58,0.32)", padding: "18px", animation: "heroFloat 7s ease-in-out -0.5s infinite", }}>
              <div  style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "7px", marginBottom: "14px", }}>
                <span  style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "11px", fontWeight: "700", padding: "5px 11px", borderRadius: "999px", background: "var(--color-neutral-950)", color: "#fff", flexShrink: "0", whiteSpace: "nowrap", }}>
                  <MessageCircle aria-hidden="true" size={12} />
                  WhatsApp
                </span>
                <span  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "26px", height: "26px", borderRadius: "50%", background: "var(--color-neutral-100)", color: "var(--color-text-secondary)", flexShrink: "0", }}>
                  <Mail aria-hidden="true" size={12} />
                </span>
                <span  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "26px", height: "26px", borderRadius: "50%", background: "var(--color-neutral-100)", color: "var(--color-text-secondary)", flexShrink: "0", }}>
                  <PhoneCall aria-hidden="true" size={12} />
                </span>
                <span  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "26px", height: "26px", borderRadius: "50%", background: "var(--color-neutral-100)", color: "var(--color-text-secondary)", flexShrink: "0", }}>
                  <MonitorSmartphone aria-hidden="true" size={12} />
                </span>
                <span  style={{ marginInlineStart: "auto", fontSize: "11px", fontWeight: "700", color: "var(--color-blue-600)", flexShrink: "0", whiteSpace: "nowrap", }}>{v.heroInboxCount}</span>
              </div>
              <div  style={{ display: "flex", flexDirection: "column", gap: "10px", }}>
                {v.heroThreads.map((th: any, i: number) => (
<Fragment key={i}>

                  <div  style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "10px", borderRadius: "12px", background: "var(--color-background-primary)", border: "1px solid var(--color-border-subtle)", }}>
                    <span  style={{ width: "28px", height: "28px", borderRadius: "9px", display: "grid", placeItems: "center", flexShrink: "0", background: "var(--color-neutral-950)", color: "#fff", }}>
                      <CircleCheck aria-hidden="true" size={13} />
                    </span>
                    <span  style={{ flex: "1", minWidth: "0", }}>
                      <span  style={{ display: "flex", alignItems: "center", gap: "7px", }}>
                        <span  style={{ fontSize: "12px", fontWeight: "700", color: "var(--color-text-primary)", }}>{th.name}</span>
                        <span  style={{ fontSize: "9px", fontWeight: "700", padding: "2px 7px", borderRadius: "999px", background: th.tint, color: th.ink, }}>{th.tag}</span>
                      </span>
                      <span  style={{ display: "block", fontSize: "11px", lineHeight: "1.4", color: "var(--color-text-secondary)", marginTop: "3px", }}>{th.msg}</span>
                    </span>
                    <span  style={{ fontSize: "9px", color: "var(--color-text-tertiary)", flexShrink: "0", }}>{th.time}</span>
                  </div>
                
</Fragment>
))}
              </div>
            </div>

            <div  style={{ position: "absolute", bottom: "3%", insetInlineStart: "0", width: "min(230px, 62%)", borderRadius: "18px", background: "#fff", boxShadow: "0 16px 38px rgba(6,20,58,0.2)", padding: "16px", animation: "heroFloat 7s ease-in-out -3s infinite", }}>
              <div dir="ltr"  style={{ fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "30px", fontWeight: "700", letterSpacing: "-0.03em", color: "var(--color-blue-600)", textAlign: "start", }}>72%</div>
              <div  style={{ fontSize: "11px", lineHeight: "1.45", color: "var(--color-text-secondary)", marginTop: "3px", }}>{v.heroDeflection}</div>
              <div  style={{ height: "6px", borderRadius: "999px", background: "var(--color-neutral-100)", marginTop: "12px", overflow: "hidden", }}>
                <div  style={{ width: "72%", height: "100%", borderRadius: "999px", background: "var(--color-blue-500)", }}></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div data-hero-tabs="true"  style={{ position: "relative", maxWidth: "1440px", margin: "0 auto", borderTop: "1px solid rgba(255,255,255,0.14)", padding: "14px clamp(20px, 4vw, 64px)", display: "flex", alignItems: "center", gap: "clamp(16px, 3vw, 40px)", flexWrap: "wrap", }}>
        <div role="tablist" aria-label="Hero solutions" style={{ display: "contents" }}>
        {v.heroTabs.map((tab: any, i: number) => (
<Fragment key={i}>

          <button id={`hero-tab-${i}`} type="button" role="tab" aria-selected={tab.active} aria-controls={`hero-slide-${i}`} data-hero-tab={i} tabIndex={tab.active ? 0 : -1} onKeyDown={(event) => v.moveHeroTab(event, i)} onClick={() => v.setSlide(i)}  style={{ display: "flex", alignItems: "center", gap: "9px", flexShrink: "0", minHeight: "44px", whiteSpace: "nowrap", background: "transparent", border: "0", paddingBlock: "10px", cursor: "pointer", fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "14px", fontWeight: "700", color: tab.ink, position: "relative", transition: "color 240ms ease", }}>
            <span aria-hidden="true"  style={{ width: "7px", height: "7px", borderRadius: "50%", background: tab.dot, }}></span>
            {tab.label}
            <span aria-hidden="true"  style={{ position: "absolute", bottom: "0", insetInline: "0", height: "2px", borderRadius: "999px", background: "#fff", opacity: tab.line, transition: "opacity 240ms ease", }}></span>
          </button>
        
</Fragment>
))}
        </div>
        <div data-hero-arrows="true"  style={{ marginInlineStart: "auto", display: "flex", alignItems: "center", gap: "8px", }}>
          <button type="button" onClick={() => v.heroPrev()} aria-label={v.heroPrevLabel}  style={{ width: "44px", height: "44px", borderRadius: "50%", display: "grid", placeItems: "center", background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.26)", color: "#fff", cursor: "pointer", }} data-hover="background: rgba(255,255,255,0.26)">
            <ArrowLeft aria-hidden="true" size={15} />
          </button>
          <button type="button" onClick={() => v.heroNext()} aria-label={v.heroNextLabel}  style={{ width: "44px", height: "44px", borderRadius: "50%", display: "grid", placeItems: "center", background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.26)", color: "#fff", cursor: "pointer", }} data-hover="background: rgba(255,255,255,0.26)">
            <ArrowRight aria-hidden="true" size={15} />
          </button>
        </div>
      </div>
    </div>
  </section>

  <section id="clients" aria-labelledby="clients-title"  style={{ padding: "clamp(56px, 6vw, 88px) clamp(20px, 4vw, 48px)", }}>
    <div  style={{ maxWidth: "1280px", margin: "0 auto", }} data-reveal="true">
      <div  style={{ borderRadius: "22px", background: "var(--accent)", padding: "clamp(32px, 4vw, 52px)", position: "relative", overflow: "hidden", }}>
        <div  style={{ position: "absolute", insetInlineEnd: "-80px", top: "-80px", width: "320px", height: "320px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", pointerEvents: "none", }}></div>
        <div  style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: "clamp(28px, 4vw, 56px)", alignItems: "center", }}>
          <div>
            <h2 id="clients-title" data-display="true"  style={{ margin: "0 0 14px", fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontWeight: "800", fontSize: "clamp(26px, 2.4vw, 36px)", lineHeight: "1.15", letterSpacing: "-0.03em", color: "#fff", }}>
              Trusted by foundations and government departments across the UAE.
              
            </h2>
            <p  style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#fff", maxWidth: "42ch", }}>
              Charity foundations, health authorities and Awqaf departments run their giving, facility and visitor operations on systems we build and keep running.
              
            </p>
          </div>
          <div data-client-logos="true"  style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "12px", }}>
            <div  style={{ background: "#ffffff", border: "1px solid rgba(11,18,32,0.06)", borderRadius: "14px", aspectRatio: "1.5", padding: "clamp(9px, 1.4vw, 14px)", display: "grid", placeItems: "center", backdropFilter: "blur(14px) saturate(1.1)", transition: "background 220ms ease, transform 220ms ease", }} data-hover="background: rgba(255,255,255,0.95); transform: translateY(-2px)"><img width="232" height="61" src="/assets/designer/c882e3ab.webp" alt="Al Jalila Foundation" loading="lazy" style={{ width: "76.3%", height: "auto", maxHeight: "100%", objectFit: "contain" }} /></div>
            <div  style={{ background: "#ffffff", border: "1px solid rgba(11,18,32,0.06)", borderRadius: "14px", aspectRatio: "1.5", padding: "clamp(9px, 1.4vw, 14px)", display: "grid", placeItems: "center", backdropFilter: "blur(14px) saturate(1.1)", transition: "background 220ms ease, transform 220ms ease", }} data-hover="background: rgba(255,255,255,0.95); transform: translateY(-2px)"><img width="232" height="60" src="/assets/designer/22218520.webp" alt="Dubai Health" loading="lazy" style={{ width: "73.8%", height: "auto", maxHeight: "100%", objectFit: "contain" }} /></div>
            <div  style={{ background: "#ffffff", border: "1px solid rgba(11,18,32,0.06)", borderRadius: "14px", aspectRatio: "1.5", padding: "clamp(9px, 1.4vw, 14px)", display: "grid", placeItems: "center", backdropFilter: "blur(14px) saturate(1.1)", transition: "background 220ms ease, transform 220ms ease", }} data-hover="background: rgba(255,255,255,0.95); transform: translateY(-2px)"><img width="227" height="101" src="/assets/designer/9e8ff21f.webp" alt="Dar Al Ber Society" loading="lazy" style={{ width: "56.2%", height: "auto", maxHeight: "100%", objectFit: "contain" }} /></div>
            <div  style={{ background: "#ffffff", border: "1px solid rgba(11,18,32,0.06)", borderRadius: "14px", aspectRatio: "1.5", padding: "clamp(9px, 1.4vw, 14px)", display: "grid", placeItems: "center", backdropFilter: "blur(14px) saturate(1.1)", transition: "background 220ms ease, transform 220ms ease", }} data-hover="background: rgba(255,255,255,0.95); transform: translateY(-2px)"><img width="232" height="64" src="/assets/designer/ef622a08.webp" alt="Tarahom Foundation" loading="lazy" style={{ width: "74.4%", height: "auto", maxHeight: "100%", objectFit: "contain" }} /></div>
            <div  style={{ background: "#ffffff", border: "1px solid rgba(11,18,32,0.06)", borderRadius: "14px", aspectRatio: "1.5", padding: "clamp(9px, 1.4vw, 14px)", display: "grid", placeItems: "center", backdropFilter: "blur(14px) saturate(1.1)", transition: "background 220ms ease, transform 220ms ease", }} data-hover="background: rgba(255,255,255,0.95); transform: translateY(-2px)"><img width="232" height="136" src="/assets/designer/e7c07a82.webp" alt="Beit Al Khair Society" loading="lazy" style={{ width: "51.0%", height: "auto", maxHeight: "100%", objectFit: "contain" }} /></div>
            <div  style={{ background: "#ffffff", border: "1px solid rgba(11,18,32,0.06)", borderRadius: "14px", aspectRatio: "1.5", padding: "clamp(9px, 1.4vw, 14px)", display: "grid", placeItems: "center", backdropFilter: "blur(14px) saturate(1.1)", transition: "background 220ms ease, transform 220ms ease", }} data-hover="background: rgba(255,255,255,0.95); transform: translateY(-2px)"><img width="232" height="197" src="/assets/designer/43f12ad9.webp" alt="Awqaf Sharjah" loading="lazy" style={{ width: "59.0%", height: "auto", maxHeight: "100%", objectFit: "contain" }} /></div>
            <div  style={{ background: "#ffffff", border: "1px solid rgba(11,18,32,0.06)", borderRadius: "14px", aspectRatio: "1.5", padding: "clamp(9px, 1.4vw, 14px)", display: "grid", placeItems: "center", backdropFilter: "blur(14px) saturate(1.1)", transition: "background 220ms ease, transform 220ms ease", }} data-hover="background: rgba(255,255,255,0.95); transform: translateY(-2px)"><img width="232" height="156" src="/assets/designer/2218988d.webp" alt="Fujairah Charity" loading="lazy" style={{ width: "45.7%", height: "auto", maxHeight: "100%", objectFit: "contain" }} /></div>
            <div  style={{ background: "#ffffff", border: "1px solid rgba(11,18,32,0.06)", borderRadius: "14px", aspectRatio: "1.5", padding: "clamp(9px, 1.4vw, 14px)", display: "grid", placeItems: "center", backdropFilter: "blur(14px) saturate(1.1)", transition: "background 220ms ease, transform 220ms ease", }} data-hover="background: rgba(255,255,255,0.95); transform: translateY(-2px)"><img width="232" height="173" src="/assets/designer/08d4aff9.webp" alt="Sharjah Social Empowerment" loading="lazy" style={{ width: "45.3%", height: "auto", maxHeight: "100%", objectFit: "contain" }} /></div>
            <div  style={{ background: "#ffffff", border: "1px solid rgba(11,18,32,0.06)", borderRadius: "14px", aspectRatio: "1.5", padding: "clamp(9px, 1.4vw, 14px)", display: "grid", placeItems: "center", backdropFilter: "blur(14px) saturate(1.1)", transition: "background 220ms ease, transform 220ms ease", }} data-hover="background: rgba(255,255,255,0.95); transform: translateY(-2px)"><img width="232" height="173" src="/assets/designer/client-sharjah-charity.webp" alt="Sharjah Charity Society" loading="lazy" style={{ width: "45.3%", height: "auto", maxHeight: "100%", objectFit: "contain" }} /></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="about" aria-labelledby="about-title"  style={{ padding: "clamp(64px, 7vw, 112px) clamp(20px, 4vw, 48px)", }}>
    <div data-stack="true"  style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "clamp(28px, 4vw, 64px)", alignItems: "center", }} data-reveal="true">
      <div>
        <span  style={{ display: "inline-block", fontSize: "13px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "16px", }}>About Innovatek SWD</span>
        <h2 id="about-title" data-display="true"  style={{ margin: "0 0 16px", fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontWeight: "800", fontSize: "clamp(28px, 3vw, 42px)", lineHeight: "1.1", letterSpacing: "-0.03em", }}>
          A software house that stays after go-live.
          
        </h2>
        <p  style={{ margin: "0 0 20px", fontSize: "17px", lineHeight: "1.7", color: "var(--color-text-secondary)", textWrap: "pretty", }}>
          Founded in the UAE in 2024, we build intelligent ecosystems that scale with AI — for giving, facility management and customer engagement across the UAE, KSA, Egypt and the wider MENA region. Modular by design, AI-native from day one, GDPR and UAE PDPL aligned, and built to stay: continuous support, regular updates, and a team that knows the sector.
          
        </p>
        <div  style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 120px), 1fr))", gap: "12px", marginBottom: "28px", }}>
          <div  style={{ border: "1px solid var(--color-border-subtle)", borderRadius: "12px", padding: "16px 18px", }}>
            <div  style={{ fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "26px", fontWeight: "800", letterSpacing: "-0.02em", color: "var(--accent-interaction-primary-main)", }} dir="ltr">2024</div>
            <div  style={{ fontSize: "13px", color: "var(--color-text-secondary)", marginTop: "2px", }}>Founded in the UAE</div>
          </div>
          <div  style={{ border: "1px solid var(--color-border-subtle)", borderRadius: "12px", padding: "16px 18px", }}>
            <div  style={{ fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "26px", fontWeight: "800", letterSpacing: "-0.02em", color: "var(--accent-interaction-primary-main)", }} dir="ltr">15+</div>
            <div  style={{ fontSize: "13px", color: "var(--color-text-secondary)", marginTop: "2px", }}>Technology experts</div>
          </div>
          <div  style={{ border: "1px solid var(--color-border-subtle)", borderRadius: "12px", padding: "16px 18px", }}>
            <div  style={{ fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "26px", fontWeight: "800", letterSpacing: "-0.02em", color: "var(--accent-interaction-primary-main)", }} dir="ltr">10</div>
            <div  style={{ fontSize: "13px", color: "var(--color-text-secondary)", marginTop: "2px", }}>Connected solutions</div>
          </div>
        </div>
        <a href="#demo"  style={{ display: "inline-flex", alignItems: "center", height: "48px", padding: "0 26px", borderRadius: "999px", border: "1px solid var(--color-neutral-950)", color: "var(--color-text-primary)", fontSize: "15px", fontWeight: "700", }} data-hover="background: var(--color-neutral-950); color: #fff">
          Talk to our team
        </a>
      </div>
      <div data-image-frame="team"  style={{ borderRadius: "18px", overflow: "hidden", aspectRatio: "5 / 4", background: "var(--color-surface-subtle)", }}>
        <img src="/assets/designer/7d78b1e8.webp" alt="Team photo — Innovatek SWD office" width="1075" height="921" loading="lazy"  style={{  }} />
      </div>
    </div>
  </section><section id="today" aria-labelledby="today-title"  style={{ padding: "clamp(64px, 7vw, 112px) clamp(20px, 4vw, 48px)", background: "var(--color-surface-subtle)", borderBlock: "1px solid var(--color-border-subtle)", }}>
    <div  style={{ maxWidth: "1280px", margin: "0 auto", }}>
      <div  style={{ maxWidth: "44ch", margin: "0 auto clamp(36px, 4vw, 56px)", textAlign: "center", }} data-reveal="true">
        <span  style={{ display: "inline-block", fontSize: "13px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "16px", }}>Why now</span>
        <h2 id="today-title" data-display="true"  style={{ margin: "0 0 14px", fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontWeight: "800", fontSize: "clamp(32px, 3.6vw, 50px)", lineHeight: "1.08", letterSpacing: "-0.035em", }}>
          Four problems.<br /><span  style={{ color: "var(--accent)", }}>One system.</span>
          
        </h2>
        <p  style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "var(--color-text-secondary)", textWrap: "pretty", }}>
          Nobody planned the fragmentation. Tools were added one problem at a time.
          
        </p>
      </div>

      <div  style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: "clamp(20px, 3vw, 40px)", alignItems: "stretch", }} data-reveal="true">
        <div  style={{ display: "flex", flexDirection: "column", padding: "clamp(26px, 3vw, 34px) 0", }}>
          <div  style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px", }}>
            <span  style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-text-tertiary)", }}>Today</span>
            <span  style={{ flex: "1", height: "1px", background: "var(--color-neutral-300)", }}></span>
          </div>
          <div  style={{ display: "flex", flexDirection: "column", gap: "12px", }}>
            <div  style={{ display: "flex", alignItems: "center", gap: "12px", background: "var(--color-background-primary)", border: "1px dashed var(--color-neutral-300)", borderRadius: "12px", padding: "12px 18px", minHeight: "76px", }}>
              <span  style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--color-red-500)", flexShrink: "0", }}></span>
              <span  style={{ fontSize: "16px", fontWeight: "600", color: "var(--color-text-secondary)", }}>Giving data lives in spreadsheets</span>
            </div>
            <div  style={{ display: "flex", alignItems: "center", gap: "12px", background: "var(--color-background-primary)", border: "1px dashed var(--color-neutral-300)", borderRadius: "12px", padding: "12px 18px", minHeight: "76px", }}>
              <span  style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--color-red-500)", flexShrink: "0", }}></span>
              <span  style={{ fontSize: "16px", fontWeight: "600", color: "var(--color-text-secondary)", }}>Visitors are signed in on paper</span>
            </div>
            <div  style={{ display: "flex", alignItems: "center", gap: "12px", background: "var(--color-background-primary)", border: "1px dashed var(--color-neutral-300)", borderRadius: "12px", padding: "12px 18px", minHeight: "76px", }}>
              <span  style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--color-red-500)", flexShrink: "0", }}></span>
              <span  style={{ fontSize: "16px", fontWeight: "600", color: "var(--color-text-secondary)", }}>Maintenance starts when it breaks</span>
            </div>
            <div  style={{ display: "flex", alignItems: "center", gap: "12px", background: "var(--color-background-primary)", border: "1px dashed var(--color-neutral-300)", borderRadius: "12px", padding: "12px 18px", minHeight: "76px", }}>
              <span  style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--color-red-500)", flexShrink: "0", }}></span>
              <span  style={{ fontSize: "16px", fontWeight: "600", color: "var(--color-text-secondary)", }}>Four inboxes, four answers</span>
            </div>
          </div>
        </div>

        <div  style={{ background: "var(--color-neutral-950)", borderRadius: "20px", padding: "clamp(26px, 3vw, 34px)", position: "relative", overflow: "hidden", }}>
          <div  style={{ position: "absolute", insetInlineEnd: "-70px", top: "-70px", width: "240px", height: "240px", borderRadius: "50%", background: "var(--accent)", opacity: "0.22", filter: "blur(10px)", pointerEvents: "none", }}></div>
          <div  style={{ position: "relative", display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px", }}>
            <span  style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-blue-300)", }}>With Innovatek</span>
            <span  style={{ flex: "1", height: "1px", background: "rgba(255,255,255,0.16)", }}></span>
          </div>
          <div  style={{ position: "relative", display: "flex", flexDirection: "column", gap: "12px", }}>
            <div  style={{ display: "flex", alignItems: "center", gap: "14px", minHeight: "76px", }}>
              <span  style={{ width: "26px", height: "26px", borderRadius: "50%", background: "rgba(255,255,255,0.14)", color: "#fff", display: "grid", placeItems: "center", flexShrink: "0", }}>
                <CircleCheck aria-hidden="true" size={14} />
              </span>
              <span  style={{ flex: "1", minWidth: "0", }}>
                <span  style={{ display: "block", fontSize: "16px", fontWeight: "700", color: "#fff", }}>Donation Hub</span>
                <span  style={{ display: "block", fontSize: "14px", color: "rgba(255,255,255,0.6)", marginTop: "1px", }}>Every project, device and dirham in one record</span>
              </span>
            </div>
            <div  style={{ display: "flex", alignItems: "center", gap: "14px", minHeight: "76px", }}>
              <span  style={{ width: "26px", height: "26px", borderRadius: "50%", background: "rgba(255,255,255,0.14)", color: "#fff", display: "grid", placeItems: "center", flexShrink: "0", }}>
                <CircleCheck aria-hidden="true" size={14} />
              </span>
              <span  style={{ flex: "1", minWidth: "0", }}>
                <span  style={{ display: "block", fontSize: "16px", fontWeight: "700", color: "#fff", }}>VMS</span>
                <span  style={{ display: "block", fontSize: "14px", color: "rgba(255,255,255,0.6)", marginTop: "1px", }}>Gate to exit, logged and reportable</span>
              </span>
            </div>
            <div  style={{ display: "flex", alignItems: "center", gap: "14px", minHeight: "76px", }}>
              <span  style={{ width: "26px", height: "26px", borderRadius: "50%", background: "rgba(255,255,255,0.14)", color: "#fff", display: "grid", placeItems: "center", flexShrink: "0", }}>
                <CircleCheck aria-hidden="true" size={14} />
              </span>
              <span  style={{ flex: "1", minWidth: "0", }}>
                <span  style={{ display: "block", fontSize: "16px", fontWeight: "700", color: "#fff", }}>Bunyan + Twin AI</span>
                <span  style={{ display: "block", fontSize: "14px", color: "rgba(255,255,255,0.6)", marginTop: "1px", }}>Risk surfaces before it becomes failure</span>
              </span>
            </div>
            <div  style={{ display: "flex", alignItems: "center", gap: "14px", minHeight: "76px", }}>
              <span  style={{ width: "26px", height: "26px", borderRadius: "50%", background: "rgba(255,255,255,0.14)", color: "#fff", display: "grid", placeItems: "center", flexShrink: "0", }}>
                <CircleCheck aria-hidden="true" size={14} />
              </span>
              <span  style={{ flex: "1", minWidth: "0", }}>
                <span  style={{ display: "block", fontSize: "16px", fontWeight: "700", color: "#fff", }}>Communication Platform</span>
                <span  style={{ display: "block", fontSize: "14px", color: "rgba(255,255,255,0.6)", marginTop: "1px", }}>One AI inbox for every channel</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <p  style={{ margin: "clamp(28px, 3vw, 40px) auto 0", textAlign: "center", fontSize: "15px", fontWeight: "700", letterSpacing: "0.02em", color: "var(--color-text-tertiary)", }} data-reveal="true">
        Control first · Intelligence next · Visibility last
      </p>
    </div>
  </section>

  <section id="platform" aria-labelledby="platform-title"  style={{ padding: "clamp(64px, 7vw, 112px) clamp(20px, 4vw, 48px)", }}>
    <div  style={{ maxWidth: "1280px", margin: "0 auto", }}>
      <div data-story-grid="true">

        <div data-story-intro="true">
          <div data-reveal="true">
            <span  style={{ display: "inline-block", fontSize: "13px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "16px", }}>Flagship solutions</span>
            <h2 id="platform-title" data-display="true"  style={{ margin: "0 0 16px", fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontWeight: "800", fontSize: "clamp(30px, 3.2vw, 46px)", lineHeight: "1.1", letterSpacing: "-0.03em", }}>Four flagship solutions. One AI core.</h2>
            <p  style={{ margin: "0", fontSize: "18px", lineHeight: "1.65", color: "var(--color-text-secondary)", }}>These four carry most of our deployments. Pick one to see the working screen, what it replaces, and where it sits in the ecosystem.</p>
          </div>
          <div role="tablist" aria-label="Flagship solutions" aria-orientation="vertical" data-story-index="true">
            {v.panels.map((panel: any, index: number) => {
              const Icon = CHAPTER_ICONS[index];
              return (
                <button key={index} id={panel.tabId} type="button" role="tab" aria-selected={panel.active} aria-controls={panel.chapterId} data-platform-tab={index} tabIndex={panel.active ? 0 : -1} onKeyDown={(event) => v.movePlatformTab(event, index)} onClick={() => v.setTab(index)}  style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "46px", paddingInline: "16px", borderRadius: "12px", cursor: "pointer", textAlign: "start", fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "15px", fontWeight: "600", border: `1px solid ${panel.tabBorder}`, background: panel.tabBg, color: panel.tabInk, }}>
                  <Icon aria-hidden="true" size={17} />
                  {panel.tab}
                </button>
              );
            })}
          </div>
        </div>

        <div data-story-chapters="true">
          {v.panels.map((panel: any, index: number) => (
            <article key={index} id={panel.chapterId} role="tabpanel" aria-labelledby={panel.tabId} data-story-chapter={index}>
              <div data-story-heading="true"  style={{ display: "flex", alignItems: "center", gap: "13px", marginBottom: "clamp(14px, 1.6vw, 20px)", }}>
                <span aria-hidden="true"  style={{ width: "40px", height: "40px", borderRadius: "12px", flexShrink: "0", display: "grid", placeItems: "center", background: "var(--color-surface-brand)", color: "var(--accent-deep)", }}>
                  {(() => { const Mark = CHAPTER_ICONS[index]; return <Mark size={19} />; })()}
                </span>
                <h3 data-display="true"  style={{ margin: "0", fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontWeight: "800", fontSize: "clamp(24px, 2.2vw, 30px)", lineHeight: "1.2", letterSpacing: "-0.025em", }}>{panel.tab}</h3>
              </div>
              <div data-story-visual="true"  style={{ border: "1px solid var(--color-border-subtle)", borderRadius: "16px", overflow: "hidden", background: "var(--color-background-primary)", boxShadow: "0 18px 44px rgba(15,23,42,0.07)", }}>
                <div  style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 16px", borderBottom: "1px solid var(--color-border-subtle)", background: "var(--color-surface-subtle)", }}>
                  <span  style={{ width: "9px", height: "9px", borderRadius: "50%", background: "var(--color-neutral-300)", }}></span>
                  <span  style={{ width: "9px", height: "9px", borderRadius: "50%", background: "var(--color-neutral-300)", }}></span>
                  <span  style={{ width: "9px", height: "9px", borderRadius: "50%", background: "var(--color-neutral-300)", }}></span>
                  <span dir="ltr"  style={{ marginInlineStart: "12px", fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "12px", color: "var(--color-text-secondary)", }}><bdi dir="ltr">{panel.url}</bdi></span>
                </div>
                <div data-mock-shell="true"  style={{ display: "grid", gridTemplateColumns: "176px minmax(0, 1fr)", minHeight: "424px", }}>
                  <div data-mock-nav="true"  style={{ background: "var(--color-neutral-950)", padding: "16px 12px", display: "flex", flexDirection: "column", gap: "3px", }}>
                    <div  style={{ display: "flex", alignItems: "center", gap: "8px", padding: "4px 8px 16px", }}>
                      <span  style={{ width: "22px", height: "22px", borderRadius: "6px", background: "var(--accent)", display: "grid", placeItems: "center", color: "#fff", fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontWeight: "800", fontSize: "12px", }}>I</span>
                      <span  style={{ fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontWeight: "700", fontSize: "13px", color: "#fff", }}>Innovatek OS</span>
                    </div>
                    {panel.nav.map((item: any, i: number) => (
                      <div key={i}  style={{ display: "flex", alignItems: "center", gap: "9px", padding: "8px 10px", borderRadius: "8px", fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "12px", fontWeight: "500", background: item.bg, color: item.ink, }}>
                        <span  style={{ width: "5px", height: "5px", borderRadius: "50%", background: item.dot, flexShrink: "0", }}></span>
                        <span  style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", }}>{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <div  style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "16px", }}>
                    <div data-mock-head="true"  style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px", }}>
                      <span  style={{ fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "16px", fontWeight: "700", color: "var(--color-text-primary)", }}>{panel.title}</span>
                      <span  style={{ fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "11px", color: "var(--color-text-tertiary)", }}>{panel.stamp}</span>
                    </div>
                    <div data-mock-stats="true"  style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "10px", }}>
                      {panel.stats.map((s: any, i: number) => (
                        <div key={i}  style={{ border: "1px solid var(--color-border-subtle)", borderRadius: "10px", padding: "11px 12px", }}>
                          <div  style={{ fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "10px", fontWeight: "600", letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--color-text-tertiary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", }}>{s.label}</div>
                          <div  style={{ fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "20px", fontWeight: "700", letterSpacing: "-0.02em", marginTop: "3px", color: s.ink, }}>{s.value}</div>
                        </div>
                      ))}
                    </div>
                    <div  style={{ border: "1px solid var(--color-border-subtle)", borderRadius: "10px", overflow: "hidden", }}>
                      <div data-mock-row="true"  style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 0.9fr", gap: "10px", padding: "9px 14px", background: "var(--color-surface-subtle)", borderBottom: "1px solid var(--color-border-subtle)", }}>
                        {panel.cols.map((c: any, i: number) => (
                          <span key={i}  style={{ fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "10px", fontWeight: "700", letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--color-text-tertiary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", }}>{c}</span>
                        ))}
                      </div>
                      {panel.rows.map((r: any, i: number) => (
                        <div key={i} data-mock-row="true"  style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 0.9fr", gap: "10px", alignItems: "center", padding: "11px 14px", borderBottom: "1px solid var(--color-border-subtle)", }}>
                          <span  style={{ fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "12px", fontWeight: "600", color: "var(--color-text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", }}>{r.a}</span>
                          <span  style={{ fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "12px", color: "var(--color-text-secondary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", }}>{r.b}</span>
                          <span  style={{ fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "12px", color: "var(--color-text-secondary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", }}>{r.c}</span>
                          <span  style={{ justifySelf: "start", fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "10px", fontWeight: "700", padding: "3px 9px", borderRadius: "999px", whiteSpace: "nowrap", background: r.tint, color: r.ink, }}>{r.d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div data-story-copy="true">
                <div  style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginBottom: "16px", }}>
                  <span  style={{ display: "inline-flex", alignItems: "center", gap: "7px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", padding: "5px 12px", borderRadius: "999px", background: "var(--color-surface-brand)", color: "var(--accent-deep)", }}>{panel.group}</span>
                  <span  style={{ fontSize: "14px", fontWeight: "600", color: "var(--color-text-tertiary)", }}>{panel.replaces}</span>
                </div>
                <h4 data-display="true"  style={{ margin: "0 0 10px", fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontWeight: "800", fontSize: "clamp(22px, 2vw, 28px)", lineHeight: "1.15", letterSpacing: "-0.025em", }}>{panel.heading}</h4>
                <p  style={{ margin: "0 0 14px", fontSize: "17px", fontWeight: "500", lineHeight: "1.4", color: "var(--accent)", }}>{panel.tagline}</p>
                <p  style={{ margin: "0 0 24px", fontSize: "17px", lineHeight: "1.65", color: "var(--color-text-secondary)", textWrap: "pretty", }}>{panel.body}</p>
                <div  style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "28px", }}>
                  {panel.points.map((point: any, i: number) => (
                    <div key={i}  style={{ display: "flex", gap: "12px", alignItems: "flex-start", }}>
                      <span  style={{ width: "22px", height: "22px", borderRadius: "50%", flexShrink: "0", display: "grid", placeItems: "center", background: "var(--color-surface-brand)", color: "var(--accent-deep)", marginTop: "1px", }}>
                        <CircleCheck aria-hidden="true" size={13} />
                      </span>
                      <span  style={{ fontSize: "16px", lineHeight: "1.5", color: "var(--color-text-primary)", }}>{point}</span>
                    </div>
                  ))}
                </div>
                <a href="#demo"  style={{ display: "inline-flex", alignItems: "center", height: "48px", padding: "0 26px", borderRadius: "999px", background: "var(--color-neutral-950)", color: "#fff", fontSize: "15px", fontWeight: "700", }} data-hover="background: var(--accent); color: #fff">Book a demo of this solution</a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  </section>


  <section id="ecosystem" aria-labelledby="ecosystem-title"  style={{ padding: "clamp(64px, 7vw, 112px) clamp(20px, 4vw, 48px)", background: "var(--color-neutral-950)", }}>
    
  <div  style={{ maxWidth: "1280px", margin: "0 auto", }}>
      <div  style={{ maxWidth: "100ch", marginBottom: "clamp(36px, 4vw, 56px)", width: "100%", }} data-reveal="true">
        <span  style={{ display: "inline-block", fontSize: "13px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-blue-300)", marginBottom: "16px", }}>The ecosystem</span>
        
        <h2 id="ecosystem-title" data-display="true"  style={{ margin: "0 0 16px", fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontWeight: "800", fontSize: "clamp(30px, 3.2vw, 46px)", lineHeight: "1.1", letterSpacing: "-0.03em", color: "#fff", width: "100%", }}>
          Ten solutions. Built to work alone<br />or together.
          
        </h2><p  style={{ margin: "0", fontSize: "18px", lineHeight: "1.65", color: "rgba(255,255,255,0.68)", textWrap: "pretty", }}>
          Two ecosystems, one shared AI core. Start where it hurts most; connect the rest later.
          
        </p>
      </div>
      <div  style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: "18px", }} data-reveal="true">
        <div  style={{ background: "var(--color-background-primary)", borderRadius: "20px", padding: "30px 28px 24px", }}>
          <span  style={{ display: "grid", placeItems: "center", width: "42px", height: "42px", borderRadius: "12px", background: "var(--color-surface-brand)", color: "var(--accent-deep)", marginBottom: "20px", }}>
            <Coins aria-hidden="true" size={21} />
          </span>
          <h3  style={{ margin: "0 0 8px", fontSize: "20px", fontWeight: "700", lineHeight: "1.25", }}>Giving</h3>
          <p  style={{ margin: "0 0 12px", fontSize: "15px", lineHeight: "1.6", color: "var(--color-text-secondary)", }}>
            One harmonised journey for every donor — first message to final receipt.
            
          </p>
          <ProductEcosystemGroup group="giving" locale="en" />
        </div>
        <div  style={{ background: "var(--color-background-primary)", borderRadius: "20px", padding: "30px 28px 24px", }}>
          <span  style={{ display: "grid", placeItems: "center", width: "42px", height: "42px", borderRadius: "12px", background: "var(--color-surface-brand)", color: "var(--accent-deep)", marginBottom: "20px", }}>
            <Building2 aria-hidden="true" size={21} />
          </span>
          <h3  style={{ margin: "0 0 8px", fontSize: "20px", fontWeight: "700", lineHeight: "1.25", }}>Facilities</h3>
          <p  style={{ margin: "0 0 12px", fontSize: "15px", lineHeight: "1.6", color: "var(--color-text-secondary)", }}>
            From reactive maintenance to real-time operational certainty.
            
          </p>
          <ProductEcosystemGroup group="facilities" locale="en" />
        </div>
        <div  style={{ background: "var(--color-background-primary)", borderRadius: "20px", padding: "30px 28px 24px", }}>
          <span  style={{ display: "grid", placeItems: "center", width: "42px", height: "42px", borderRadius: "12px", background: "var(--color-surface-brand)", color: "var(--accent-deep)", marginBottom: "20px", }}>
            <Layers aria-hidden="true" size={21} />
          </span>
          <h3  style={{ margin: "0 0 8px", fontSize: "20px", fontWeight: "700", lineHeight: "1.25", }}>Shared core</h3>
          <p  style={{ margin: "0 0 12px", fontSize: "15px", lineHeight: "1.6", color: "var(--color-text-secondary)", }}>
            The hardware, analytics and engagement layer powering everything.
            
          </p>
          <ProductEcosystemGroup group="shared" locale="en" />
        </div>
      </div>
    </div></section>

  <section id="solutions" aria-labelledby="solutions-title"  style={{ padding: "clamp(64px, 7vw, 112px) clamp(20px, 4vw, 48px)", background: "var(--color-background-primary)", borderBlock: "1px solid var(--color-border-subtle)", }}>
    <div  style={{ maxWidth: "1280px", margin: "0 auto", }}>
      <div  style={{ maxWidth: "46ch", margin: "0 auto clamp(36px, 4vw, 56px)", textAlign: "center", }} data-reveal="true">
        <span  style={{ display: "inline-flex", alignItems: "center", gap: "7px", padding: "6px 14px 6px 11px", borderRadius: "999px", border: "1px solid var(--color-blue-200)", background: "var(--color-surface-brand)", color: "var(--accent-deep)", fontSize: "13px", fontWeight: "700", marginBottom: "22px", }}>
          <CircleCheck aria-hidden="true" size={14} />
          Key features
        </span>
        <h2 id="solutions-title" data-display="true"  style={{ margin: "0 0 14px", fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontWeight: "800", fontSize: "clamp(32px, 3.6vw, 50px)", lineHeight: "1.08", letterSpacing: "-0.035em", }}>
          Built for how you<br /><span  style={{ color: "var(--accent)", }}>actually work</span>
          
        </h2>
        <p  style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "var(--color-text-secondary)", textWrap: "pretty", }}>
          Four pillars behind every deployment — and the details that decide whether a system gets used, or quietly abandoned.
          
        </p>
      </div>

      <div  style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: "18px", marginBottom: "18px", }} data-reveal="true">
        <div  style={{ background: "var(--color-blue-50)", border: "1px solid var(--color-blue-100)", borderRadius: "20px", padding: "30px", display: "flex", flexDirection: "column", gap: "28px", }}>
          <div  style={{ position: "relative", minHeight: "208px", display: "grid", placeItems: "center", }}>
            <div  style={{ position: "absolute", inset: "0", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(3, 1fr)", placeItems: "center", pointerEvents: "none", }}>
              <span  style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#fff", boxShadow: "0 6px 16px rgba(15,23,42,0.08)", display: "grid", placeItems: "center", color: "var(--accent)", }}>
                <KeyRound aria-hidden="true" size={19} />
              </span>
              <span></span>
              <span  style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#fff", boxShadow: "0 6px 16px rgba(15,23,42,0.08)", display: "grid", placeItems: "center", color: "var(--accent)", }}>
                <KeyRound aria-hidden="true" size={19} />
              </span>
              <span></span><span></span><span></span>
              <span  style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#fff", boxShadow: "0 6px 16px rgba(15,23,42,0.08)", display: "grid", placeItems: "center", color: "var(--accent)", }}>
                <LayoutDashboard aria-hidden="true" size={19} />
              </span>
              <span></span>
              <span  style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#fff", boxShadow: "0 6px 16px rgba(15,23,42,0.08)", display: "grid", placeItems: "center", color: "var(--accent)", }}>
                <PhoneCall aria-hidden="true" size={19} />
              </span>
            </div>
            <div  style={{ position: "relative", width: "min(260px, 100%)", borderRadius: "16px", background: "var(--color-neutral-950)", padding: "18px 20px", boxShadow: "0 18px 40px rgba(15,23,42,0.22)", }}>
              <div  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px", }}>
                <span  style={{ display: "flex", alignItems: "center", gap: "7px", fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "12px", fontWeight: "700", color: "rgba(255,255,255,0.72)", }}>
                  <span  style={{ width: "16px", height: "16px", borderRadius: "5px", background: "var(--accent)", display: "grid", placeItems: "center", color: "#fff", fontSize: "9px", fontWeight: "800", }}>I</span>
                  Innovatek OS
                </span>
                <span  style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--color-green-400)", }}></span>
              </div>
              <div  style={{ fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "21px", fontWeight: "700", letterSpacing: "-0.02em", color: "#fff", }}>Donation Hub</div>
              <div  style={{ fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.55)", marginTop: "3px", }} dir="ltr">+ Bunyan · VMS · Insight 360</div>
              <div  style={{ marginTop: "16px", height: "5px", borderRadius: "999px", background: "rgba(255,255,255,0.14)", overflow: "hidden", }}>
                <div  style={{ width: "82%", height: "100%", background: "var(--accent)", }}></div>
              </div>
            </div>
          </div>
          <div>
            <h3  style={{ margin: "0 0 9px", fontSize: "19px", fontWeight: "700", lineHeight: "1.3", }}>
              Modular by design
              
            </h3>
            <p  style={{ margin: "0", fontSize: "15px", lineHeight: "1.65", color: "var(--color-text-secondary)", textWrap: "pretty", maxWidth: "44ch", }}>
              Ten focused solutions that work alone or connect into a full ecosystem. Start with one — never a rigid, one-size-fits-all platform.
              
            </p>
          </div>
        </div>

        <div  style={{ background: "var(--color-blue-50)", border: "1px solid var(--color-blue-100)", borderRadius: "20px", padding: "30px", display: "flex", flexDirection: "column", gap: "24px", }}>
          <div>
            <h3  style={{ margin: "0 0 9px", fontSize: "19px", fontWeight: "700", lineHeight: "1.3", }}>
              Arabic-first, RTL native
              
            </h3>
            <p  style={{ margin: "0", fontSize: "15px", lineHeight: "1.65", color: "var(--color-text-secondary)", textWrap: "pretty", maxWidth: "46ch", }}>
              Not a translation layer. Every screen is laid out for Arabic and English, so reception staff and leadership each read their own language.
              
            </p>
          </div>
          <div  style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "10px", }}>
            <div dir="ltr"  style={{ display: "flex", alignItems: "center", gap: "12px", background: "#fff", borderRadius: "14px", padding: "14px 16px", boxShadow: "0 8px 22px rgba(15,23,42,0.07)", }}>
              <span  style={{ width: "38px", height: "38px", borderRadius: "10px", background: "var(--color-surface-brand)", color: "var(--accent)", display: "grid", placeItems: "center", flexShrink: "0", }}>
                <KeyRound aria-hidden="true" size={18} />
              </span>
              <span  style={{ flex: "1", minWidth: "0", }}>
                <span  style={{ display: "block", fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "14px", fontWeight: "700", color: "var(--color-text-primary)", }}>Visitor checked in</span>
                <span  style={{ display: "block", fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "12px", color: "var(--color-text-tertiary)", }}>Gate 03 · 09:12</span>
              </span>
              <span  style={{ fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "11px", fontWeight: "700", padding: "4px 10px", borderRadius: "999px", background: "var(--color-surface-success)", color: "var(--color-green-700)", flexShrink: "0", }}>EN</span>
            </div>
            <div dir="rtl"  style={{ display: "flex", alignItems: "center", gap: "12px", background: "#fff", borderRadius: "14px", padding: "14px 16px", boxShadow: "0 8px 22px rgba(15,23,42,0.07)", fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", }}>
              <span  style={{ width: "38px", height: "38px", borderRadius: "10px", background: "var(--color-surface-brand)", color: "var(--accent)", display: "grid", placeItems: "center", flexShrink: "0", }}>
                <KeyRound aria-hidden="true" size={18} />
              </span>
              <span  style={{ flex: "1", minWidth: "0", }}>
                <span  style={{ display: "block", fontSize: "14px", fontWeight: "700", color: "var(--color-text-primary)", }}>تم دخول الزائر</span>
                <span  style={{ display: "block", fontSize: "12px", color: "var(--color-text-tertiary)", }}>بوابة 03 · 09:12</span>
              </span>
              <span  style={{ fontSize: "11px", fontWeight: "700", padding: "4px 10px", borderRadius: "999px", background: "var(--color-surface-success)", color: "var(--color-green-700)", flexShrink: "0", }}>AR</span>
            </div>
          </div>
        </div>
      </div>

      <div  style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: "18px", marginBottom: "18px", }} data-reveal="true">
        <div  style={{ background: "var(--color-blue-50)", border: "1px solid var(--color-blue-100)", borderRadius: "20px", padding: "30px", display: "grid", gridTemplateColumns: "minmax(0, 1fr)", gap: "24px", }}>
          <div>
            <h3  style={{ margin: "0 0 9px", fontSize: "19px", fontWeight: "700", lineHeight: "1.3", }}>
              Audit-ready by default
              
            </h3>
            <p  style={{ margin: "0", fontSize: "15px", lineHeight: "1.65", color: "var(--color-text-secondary)", textWrap: "pretty", maxWidth: "44ch", }}>
              Every change, entry and approval is logged with a person and a timestamp — GDPR and UAE PDPL aligned. Audit season stops being a project.
              
            </p>
          </div>
          <div  style={{ background: "#fff", borderRadius: "14px", padding: "8px", boxShadow: "0 8px 22px rgba(15,23,42,0.07)", }}>
            {v.auditRows.map((a: any, i: number) => (
<Fragment key={i}>

              <div  style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 12px", borderBottom: "1px solid var(--color-border-subtle)", }}>
                <span  style={{ width: "28px", height: "28px", borderRadius: "8px", flexShrink: "0", display: "grid", placeItems: "center", background: a.tint, color: a.ink, }}>
                  <CircleCheck aria-hidden="true" size={14} />
                </span>
                <span  style={{ flex: "1", minWidth: "0", }}>
                  <span  style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "var(--color-text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", }}>{a.action}</span>
                  <span  style={{ display: "block", fontSize: "11px", color: "var(--color-text-tertiary)", }}>{a.who}</span>
                </span>
                <span  style={{ fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "11px", color: "var(--color-text-tertiary)", flexShrink: "0", }} dir="ltr">{a.time}</span>
              </div>
            
</Fragment>
))}
          </div>
        </div>

        <div  style={{ borderRadius: "20px", padding: "34px 32px", background: "var(--accent)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "28px", position: "relative", overflow: "hidden", minHeight: "260px", }}>
          <div  style={{ position: "absolute", insetInlineEnd: "-60px", top: "-60px", width: "240px", height: "240px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", pointerEvents: "none", }}></div>
          <div  style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "700", color: "#fff", }}>
            <BadgeCheck aria-hidden="true" size={16} />
            GDPR &amp; UAE PDPL aligned
          </div>
          <div  style={{ position: "relative", }}>
            <h3 data-display="true"  style={{ margin: "0 0 10px", fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontWeight: "800", fontSize: "clamp(24px, 2.2vw, 32px)", lineHeight: "1.12", letterSpacing: "-0.03em", color: "#fff", }}>
              See it running on your own sites.
              
            </h3>
            <p  style={{ margin: "0 0 22px", fontSize: "15px", lineHeight: "1.6", color: "#fff", maxWidth: "34ch", }}>
              Hosted in the region, with continuous support in your timezone and your language — from a team that knows the sector.
              
            </p>
            <a href="#demo"  style={{ display: "inline-flex", alignItems: "center", height: "46px", padding: "0 24px", borderRadius: "999px", background: "#fff", color: "var(--accent-deep)", fontSize: "15px", fontWeight: "700", }} data-hover="background: var(--color-neutral-950); color: #fff">
              Book a demo
            </a>
          </div>
        </div>
      </div>

      <div  style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "18px", }} data-reveal="true">
        {v.compactFeatures.map((f: any, i: number) => (
<Fragment key={i}>

          <div  style={{ background: "var(--color-blue-50)", border: "1px solid var(--color-blue-100)", borderRadius: "20px", padding: "28px 26px 30px", }}>
            <span  style={{ display: "grid", placeItems: "center", width: "42px", height: "42px", borderRadius: "12px", background: "#fff", color: "var(--accent)", marginBottom: "20px", boxShadow: "0 6px 16px rgba(15,23,42,0.06)", }}>
              <CircleCheck aria-hidden="true" size={21} />
            </span>
            <h3  style={{ margin: "0 0 9px", fontSize: "18px", fontWeight: "700", lineHeight: "1.3", }}>{f.title}</h3>
            <p  style={{ margin: "0", fontSize: "15px", lineHeight: "1.65", color: "var(--color-text-secondary)", textWrap: "pretty", }}>{f.body}</p>
          </div>
        
</Fragment>
))}
      </div>
    </div>
  </section>

  
    <section id="impact" aria-labelledby="impact-title"  style={{ padding: "clamp(64px, 7vw, 112px) clamp(20px, 4vw, 48px)", }}>
      <div data-stack="true"  style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "clamp(28px, 4vw, 64px)", alignItems: "center", }} data-reveal="true">
        <div data-image-frame="impact"  style={{ borderRadius: "18px", overflow: "hidden", aspectRatio: "4 / 3", background: "var(--color-surface-subtle)", }}>
          <img src="/assets/designer/d34347b3.webp" alt="Client site photo — reception or gate" width="1119" height="891" loading="lazy"  style={{  }} />
        </div>
        <div>
          <span  style={{ display: "inline-block", fontSize: "13px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "16px", }}>Impact, not promises</span>
          <h2 id="impact-title" data-display="true"  style={{ margin: "0 0 16px", fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontWeight: "800", fontSize: "clamp(28px, 3vw, 42px)", lineHeight: "1.1", letterSpacing: "-0.03em", }}>
            Numbers our clients actually measure.
            
          </h2>
          <p  style={{ margin: "0 0 28px", fontSize: "17px", lineHeight: "1.65", color: "var(--color-text-secondary)", textWrap: "pretty", }}>
            Across giving and facility deployments in the UAE, the same pattern repeats: once every project, device and request sits in one record, collection goes up and manual effort falls away. These are the results our clients report.
            
          </p>
          <div  style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "1px", background: "var(--color-border-subtle)", border: "1px solid var(--color-border-subtle)", borderRadius: "14px", overflow: "hidden", }}>
            <div  style={{ background: "var(--color-background-primary)", padding: "22px 24px", }}>
              <div  style={{ fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "34px", fontWeight: "800", letterSpacing: "-0.03em", color: "var(--accent)", }} dir="ltr">+82%</div>
              <div  style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginTop: "4px", }}>increase in total donations</div>
            </div>
            <div  style={{ background: "var(--color-background-primary)", padding: "22px 24px", }}>
              <div  style={{ fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "34px", fontWeight: "800", letterSpacing: "-0.03em", color: "var(--accent)", }} dir="ltr">90%</div>
              <div  style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginTop: "4px", }}>less processing time</div>
            </div>
            <div  style={{ background: "var(--color-background-primary)", padding: "22px 24px", }}>
              <div  style={{ fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "34px", fontWeight: "800", letterSpacing: "-0.03em", color: "var(--accent)", }} dir="ltr">25%</div>
              <div  style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginTop: "4px", }}>fewer recurring failures</div>
            </div>
            <div  style={{ background: "var(--color-background-primary)", padding: "22px 24px", }}>
              <div  style={{ fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "34px", fontWeight: "800", letterSpacing: "-0.03em", color: "var(--accent)", }} dir="ltr">20%</div>
              <div  style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginTop: "4px", }}>faster response times</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  

  <section id="perspectives" aria-labelledby="perspectives-title"  style={{ padding: "clamp(56px, 6vw, 96px) clamp(20px, 4vw, 48px)", background: "var(--color-neutral-950)", }}>
    <div  style={{ maxWidth: "1280px", margin: "0 auto", }}>
      <h2 id="perspectives-title" className="designer-visually-hidden">Client perspectives</h2>
      <div  style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: "20px", }} data-reveal="true">
      <div  style={{ border: "1px solid rgba(255,255,255,0.14)", borderRadius: "16px", padding: "32px 30px", display: "flex", flexDirection: "column", gap: "22px", }}>
        <p  style={{ margin: "0", fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "clamp(19px, 1.6vw, 23px)", fontWeight: "600", lineHeight: "1.45", color: "#fff", textWrap: "pretty", }}>
          “The first week, I stopped asking three people where a request had gone. It was on the screen.”
          
        </p>
        <div  style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "12px", }}>
          <span  style={{ width: "40px", height: "40px", borderRadius: "50%", overflow: "hidden", flexShrink: "0", background: "rgba(255,255,255,0.12)", }}></span>
          <span>
            <span  style={{ display: "block", fontSize: "14px", fontWeight: "700", color: "#fff", }}>Head of Facilities</span>
            <span  style={{ display: "block", fontSize: "13px", color: "rgba(255,255,255,0.55)", }}>Government department, Sharjah</span>
          </span>
        </div>
      </div>
      <div  style={{ border: "1px solid rgba(255,255,255,0.14)", borderRadius: "16px", padding: "32px 30px", display: "flex", flexDirection: "column", gap: "22px", }}>
        <p  style={{ margin: "0", fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "clamp(19px, 1.6vw, 23px)", fontWeight: "600", lineHeight: "1.45", color: "#fff", textWrap: "pretty", }}>
          “Our reception staff had it in a day. The Arabic interface is the reason — it wasn’t translated, it was designed.”
          
        </p>
        <div  style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "12px", }}>
          <span  style={{ width: "40px", height: "40px", borderRadius: "50%", overflow: "hidden", flexShrink: "0", background: "rgba(255,255,255,0.12)", }}></span>
          <span>
            <span  style={{ display: "block", fontSize: "14px", fontWeight: "700", color: "#fff", }}>Operations Manager</span>
            <span  style={{ display: "block", fontSize: "13px", color: "rgba(255,255,255,0.55)", }}>Charity foundation, Dubai</span>
          </span>
        </div>
      </div>
      </div>
    </div>
  </section>

  

  <section id="faq" aria-labelledby="faq-title"  style={{ padding: "clamp(64px, 7vw, 112px) clamp(20px, 4vw, 48px)", background: "var(--color-surface-subtle)", borderBlock: "1px solid var(--color-border-subtle)", }}>
    <div  style={{ maxWidth: "900px", margin: "0 auto", }} data-reveal="true">
      <h2 id="faq-title" data-display="true"  style={{ margin: "0 0 32px", fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", fontWeight: "800", fontSize: "clamp(28px, 3vw, 42px)", lineHeight: "1.1", letterSpacing: "-0.03em", textAlign: "center", }}>
        Questions we get before every rollout.
        
      </h2>
      <div  style={{ display: "flex", flexDirection: "column", gap: "10px", }}>
        {v.faqs.map((q: any, i: number) => (
<Fragment key={i}>

          <div  style={{ background: "var(--color-background-primary)", border: "1px solid var(--color-border-subtle)", borderRadius: "12px", overflow: "hidden", }}>
            <button id={q.buttonId} type="button" aria-expanded={q.expanded} aria-controls={q.panelId} onClick={() => v.toggleFaq(i)}  style={{ width: "100%", display: "flex", alignItems: "center", gap: "16px", minHeight: "64px", paddingInline: "22px", paddingBlock: "12px", background: "transparent", border: "0", cursor: "pointer", textAlign: "start", fontFamily: "var(--font-outfit), var(--font-arabic), sans-serif", }}>
              <span  style={{ flex: "1", fontSize: "17px", fontWeight: "600", lineHeight: "1.4", color: "var(--color-text-primary)", }}>{q.question}</span>
              <span aria-hidden="true"  style={{ flexShrink: "0", width: "26px", height: "26px", borderRadius: "50%", display: "grid", placeItems: "center", background: "var(--color-surface-subtle)", color: "var(--color-text-secondary)", transform: q.rotate, transition: "transform 200ms ease", }}>
                <ArrowDown aria-hidden="true" size={14} />
              </span>
            </button>
            <div id={q.panelId} role="region" aria-labelledby={q.buttonId} hidden={!q.expanded}  style={{ display: q.display, paddingInline: "22px", paddingBottom: "22px", maxWidth: "74ch", }}>
              <p  style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "var(--color-text-secondary)", textWrap: "pretty", }}>{q.answer}</p>
            </div>
          </div>
        
</Fragment>
))}
      </div>
    </div>
  </section>

  <DemoSection locale="en" model={v.demoForm} />
  </main>

  <MarketingFooter locale="en" />

</div>





    </>
  );
}
